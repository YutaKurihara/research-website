// ============================================================
// 01_LULC_RandomForest.js
// 土地利用図作成ツール（Random Forest）
// フィリピン・カガヤンバレー地域
// Oriental Consultants Global - MyProject 第10期
// ============================================================

// ==================== 教師データ ====================
// Rice (LU=1), Corn (LU=2), Forest (LU=3),
// Barren (LU=4), Urban (LU=5), Water (LU=6)
// ※ GEE上でインポートされた教師データを使用
// 各カテゴリ50サンプルを学習用、30サンプルを検証用に分割

// ==================== パラメータ ====================
var YEAR = 2020;           // 対象年
var NUM_TREES = 500;       // Random Forestの決定木数
var TRAIN_RATIO = 0.7;     // 学習用データの割合
var CLOUD_THRESHOLD = 20;  // 雲被覆率の閾値(%)

// ==================== 解析範囲 ====================
// カガヤンバレー地域（Region II）
var region = ee.Geometry.Rectangle([120.5, 16.0, 122.5, 18.8]);

// ==================== 教師データの結合 ====================
var trainingPoints = Rice.merge(Corn).merge(Forest)
                        .merge(Barren).merge(Urban).merge(Water);

// ==================== 衛星データの取得 ====================

// --- Sentinel-1 SAR ---
function getS1(startDate, endDate) {
  return ee.ImageCollection('COPERNICUS/S1_GRD')
    .filterBounds(region)
    .filterDate(startDate, endDate)
    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))
    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
    .select(['VV', 'VH'])
    .median()
    .clip(region);
}

// --- Sentinel-2 光学衛星 ---
function getS2(startDate, endDate) {
  var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(region)
    .filterDate(startDate, endDate)
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', CLOUD_THRESHOLD));

  var composite = s2.median().clip(region);

  // 植生・水域指標の計算
  var ndvi = composite.normalizedDifference(['B8', 'B4']).rename('NDVI');
  var evi = composite.expression(
    '2.5 * ((NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1))',
    { NIR: composite.select('B8'), RED: composite.select('B4'), BLUE: composite.select('B2') }
  ).rename('EVI');
  var ndwi = composite.normalizedDifference(['B3', 'B8']).rename('NDWI');
  var mndwi = composite.normalizedDifference(['B3', 'B11']).rename('MNDWI');

  return composite
    .select(['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B8A', 'B11', 'B12'])
    .addBands(ndvi).addBands(evi).addBands(ndwi).addBands(mndwi);
}

// --- 季節ごとのデータ取得（3期間） ---
var periods = [
  { start: YEAR + '-01-01', end: YEAR + '-04-30', suffix: '_P1' },
  { start: YEAR + '-05-01', end: YEAR + '-08-31', suffix: '_P2' },
  { start: YEAR + '-09-01', end: YEAR + '-12-31', suffix: '_P3' },
];

var inputImage = ee.Image([]);

periods.forEach(function(p) {
  var s1 = getS1(p.start, p.end);
  var s2 = getS2(p.start, p.end);

  // バンド名にサフィックスを追加
  var s1Renamed = s1.select(['VV', 'VH'], ['VV' + p.suffix, 'VH' + p.suffix]);
  var s2Renamed = s2.bandNames().iterate(function(bandName, img) {
    bandName = ee.String(bandName);
    return ee.Image(img).addBands(
      s2.select([bandName], [bandName.cat(p.suffix)])
    );
  }, ee.Image([]));

  inputImage = inputImage.addBands(s1Renamed).addBands(ee.Image(s2Renamed));
});

// --- MERIT Hydro 地形データ ---
var merit = ee.Image('MERIT/Hydro/v1_0_1');
var elevation = merit.select('elv').rename('elevation');
var slope = ee.Terrain.slope(elevation).rename('slope');
inputImage = inputImage.addBands(elevation).addBands(slope);

// --- NAMRIA 土地被覆マップ ---
var landcover = ee.Image('COPERNICUS/Landcover/100m/Proba-V-C3/Global/2019')
  .select('discrete_classification')
  .rename('landcover_ref');
inputImage = inputImage.addBands(landcover);

// ==================== Random Forest 分類 ====================

// 学習・検証データの分割
var withRandom = trainingPoints.randomColumn('random', 42);
var trainData = withRandom.filter(ee.Filter.lt('random', TRAIN_RATIO));
var testData = withRandom.filter(ee.Filter.gte('random', TRAIN_RATIO));

// 特徴量のサンプリング
var bands = inputImage.bandNames();
var trainSamples = inputImage.sampleRegions({
  collection: trainData,
  properties: ['LU'],
  scale: 30
});

var testSamples = inputImage.sampleRegions({
  collection: testData,
  properties: ['LU'],
  scale: 30
});

// 分類器の学習
var classifier = ee.Classifier.smileRandomForest(NUM_TREES)
  .train({
    features: trainSamples,
    classProperty: 'LU',
    inputProperties: bands
  });

// 分類の実行
var classified = inputImage.classify(classifier);

// ==================== 精度検証 ====================
var validated = testSamples.classify(classifier);
var errorMatrix = validated.errorMatrix('LU', 'classification');
print('Error Matrix:', errorMatrix);
print('Overall Accuracy:', errorMatrix.accuracy());
print('Kappa:', errorMatrix.kappa());
print('Producers Accuracy:', errorMatrix.producersAccuracy());
print('Consumers Accuracy:', errorMatrix.consumersAccuracy());

// ==================== 可視化 ====================
var luPalette = [
  '#ff0000',  // 1: Rice
  '#00ff00',  // 2: Corn
  '#006400',  // 3: Forest
  '#ffd700',  // 4: Barren
  '#00ffff',  // 5: Urban
  '#0000ff',  // 6: Water
];

Map.centerObject(region, 8);
Map.addLayer(classified, {min: 1, max: 6, palette: luPalette}, 'LULC Map');

// 凡例
var legend = ui.Panel({style: {position: 'bottom-left'}});
legend.add(ui.Label('LULC Map', {fontWeight: 'bold'}));
var names = ['Rice', 'Corn', 'Forest', 'Barren', 'Urban', 'Water'];
names.forEach(function(name, i) {
  var label = ui.Label(name, {margin: '2px 0'});
  var color = ui.Panel({
    style: {backgroundColor: luPalette[i], width: '14px', height: '14px', margin: '2px 4px 2px 0'}
  });
  legend.add(ui.Panel([color, label], ui.Panel.Layout.Flow('horizontal')));
});
Map.add(legend);

// ==================== エクスポート ====================
Export.image.toDrive({
  image: classified,
  description: 'LULC_CagayanValley_' + YEAR,
  region: region,
  scale: 30,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});

print('--- LULC Classification Complete ---');
print('Number of trees:', NUM_TREES);
print('Training samples:', trainSamples.size());
print('Test samples:', testSamples.size());
