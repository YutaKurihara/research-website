// ============================================================
// 02_Flood_DirectDamage.js
// 洪水直接被害計算ツール（FwDET + 被害曲線）
// フィリピン・カガヤンバレー地域
// Oriental Consultants Global - MyProject 第10期
// ============================================================
//
// 前提: 01_LULC_RandomForest.js で作成した土地利用図（GeoTIFF）を
//        GEE Asset としてアップロード済みであること。
// ============================================================

// ==================== パラメータ ====================
var FLOOD_DATE = '2020-11-13';       // 洪水発生日
var BEFORE_DATE = '2020-10-08';      // 比較画像日（災害前）
var ORBIT = 'ASCENDING';             // 衛星軌道
var POLARIZATION = 'VV';             // 偏波
var FLOOD_THRESHOLD = 1.15;          // 洪水検出閾値
var SMOOTH_RADIUS = 50;              // スペックル除去半径(m)

// 被害額計算用単価
var HOUSING_COST_PER_M2 = 10300;     // 住宅建設費 PhP/m2
var RICE_COST_PER_M2 = 0.00696;      // コメ収益 PhP/m2 (69.6 PhP/ha)
var CORN_COST_PER_M2 = 0.00459;      // トウモロコシ収益 PhP/m2 (45.9 PhP/ha)

// ==================== 解析範囲 ====================
var region = ee.Geometry.Rectangle([120.5, 16.0, 122.5, 18.8]);

// ==================== LULC マップの読み込み ====================
// ※ 01_LULC_RandomForest.js の出力をAssetにアップロードしたもの
// var lulc = ee.Image('users/kurihara-yt/LULC_CagayanValley_2020');
// デモ用: ESA WorldCover を使用
var lulc = ee.Image('ESA/WorldCover/v200/2021').clip(region);

// ============================================================
// STEP 1: 浸水範囲の検出（Sentinel-1 SAR）
// ============================================================

// SAR画像の取得
var beforeCollection = ee.ImageCollection('COPERNICUS/S1_GRD')
  .filterBounds(region)
  .filterDate(ee.Date(BEFORE_DATE).advance(-12, 'day'), ee.Date(BEFORE_DATE).advance(12, 'day'))
  .filter(ee.Filter.listContains('transmitterReceiverPolarisation', POLARIZATION))
  .filter(ee.Filter.eq('orbitProperties_pass', ORBIT))
  .select(POLARIZATION);

var afterCollection = ee.ImageCollection('COPERNICUS/S1_GRD')
  .filterBounds(region)
  .filterDate(ee.Date(FLOOD_DATE).advance(-6, 'day'), ee.Date(FLOOD_DATE).advance(6, 'day'))
  .filter(ee.Filter.listContains('transmitterReceiverPolarisation', POLARIZATION))
  .filter(ee.Filter.eq('orbitProperties_pass', ORBIT))
  .select(POLARIZATION);

print('Before images:', beforeCollection.size());
print('After images:', afterCollection.size());

var beforeImage = beforeCollection.mosaic().clip(region);
var afterImage = afterCollection.mosaic().clip(region);

// スペックルノイズ除去（平均フィルタ）
beforeImage = beforeImage.focal_mean(SMOOTH_RADIUS, 'circle', 'meters');
afterImage = afterImage.focal_mean(SMOOTH_RADIUS, 'circle', 'meters');

// NDFI（正規化差分洪水指数）による浸水域検出
var ratio = beforeImage.divide(afterImage);
var floodMask = ratio.gt(FLOOD_THRESHOLD);

// 恒常的水域の除外
var permanentWater = ee.Image('JRC/GSW1_4/GlobalSurfaceWater')
  .select('occurrence')
  .gt(80)
  .unmask(0);
floodMask = floodMask.updateMask(permanentWater.not());

// 傾斜5°以上の除外
var dem = ee.Image('COPERNICUS/DEM/GLO30').select('DEM');
var slope = ee.Terrain.slope(dem);
floodMask = floodMask.updateMask(slope.lt(5));

// 4ピクセル以上の連結領域のみ
var connected = floodMask.selfMask()
  .connectedPixelCount(25, true)
  .gte(4);
floodMask = floodMask.updateMask(connected);

// ============================================================
// STEP 2: 浸水深の推定（FwDET-GEE）
// ============================================================

// FwDET: 浸水域の境界を水深0mとし、DEMから浸水深を推定
var floodExtent = floodMask.selfMask();
var floodDEM = dem.updateMask(floodExtent);

// 浸水域の境界DEM値を取得
var floodEdge = floodExtent.focal_max(1).neq(floodExtent).selfMask();
var edgeDEM = dem.updateMask(floodEdge);

// 境界DEMの最大値を浸水面の高さとして近似
// 各ピクセルに最寄りの境界DEM値を割り当て
var waterSurface = edgeDEM
  .reduceNeighborhood(ee.Reducer.max(), ee.Kernel.circle(500, 'meters'))
  .updateMask(floodExtent);

// 浸水深 = 水面高 - 地盤高
var floodDepth = waterSurface.subtract(floodDEM).max(0);

// 3x3ローパスフィルタで平滑化
floodDepth = floodDepth.focal_mean(3, 'square');

// ============================================================
// STEP 3: 住宅被害額の計算
// ============================================================

// Open Buildings V3
var buildings = ee.FeatureCollection('GOOGLE/Research/open-buildings/v3/polygons')
  .filterBounds(region);

// 建物ポリゴンをラスタ化（面積をピクセル値として）
var buildingRaster = buildings
  .reduceToImage(['area_in_meters'], ee.Reducer.sum())
  .rename('building_area')
  .updateMask(floodExtent);

// 住宅被害曲線（GMMA-RAP, 2014）シグモイド関数
// DR_housing = 0.24 / (1 + exp(-1.50 * (FD - 1.45))) - 0.024
var housingDR = floodDepth.expression(
  '0.24 / (1 + exp(-1.50 * (FD - 1.45))) - 0.024',
  { FD: floodDepth }
).max(0).rename('housing_DR');

var housingDamage = housingDR
  .multiply(buildingRaster)
  .multiply(HOUSING_COST_PER_M2)
  .rename('housing_damage');

// ============================================================
// STEP 4: 農作物被害額の計算
// ============================================================

// LULC マップから農地を抽出
var riceMask = lulc.eq(1).updateMask(floodExtent);   // Rice = 1
var cornMask = lulc.eq(2).updateMask(floodExtent);   // Corn = 2

// コメ被害曲線（Shrestha et al., 2016）
// DR_rice = 0.505 / (1 + exp(-7.513 * FD - 0.854)) - 0.001
var riceDR = floodDepth.expression(
  '0.505 / (1 + exp(-7.513 * FD - 0.854)) - 0.001',
  { FD: floodDepth }
).max(0).updateMask(riceMask).rename('rice_DR');

var riceDamage = riceDR
  .multiply(RICE_COST_PER_M2)
  .multiply(ee.Image.pixelArea())
  .rename('rice_damage');

// トウモロコシ被害曲線（Tariq et al., 2021）
// DR_corn = 1.44 / (1 + exp(-2.11 * FD)) - 0.720
var cornDR = floodDepth.expression(
  '1.44 / (1 + exp(-2.11 * FD)) - 0.720',
  { FD: floodDepth }
).max(0).updateMask(cornMask).rename('corn_DR');

var cornDamage = cornDR
  .multiply(CORN_COST_PER_M2)
  .multiply(ee.Image.pixelArea())
  .rename('corn_damage');

// ============================================================
// STEP 5: 結果の可視化
// ============================================================

Map.centerObject(region, 8);

// 浸水範囲
Map.addLayer(floodMask.selfMask(), {palette: ['#0000ff']}, 'Flood Extent', true, 0.5);

// 浸水深
Map.addLayer(floodDepth, {min: 0, max: 3, palette: ['#ffffcc', '#fd8d3c', '#bd0026']}, 'Flood Depth (m)');

// 住宅被害
Map.addLayer(housingDamage, {min: 0, max: 100000, palette: ['#fee5d9', '#de2d26']}, 'Housing Damage (PhP)');

// 農作物被害
Map.addLayer(riceDamage, {min: 0, max: 10, palette: ['#edf8e9', '#006d2c']}, 'Rice Damage (PhP)');
Map.addLayer(cornDamage, {min: 0, max: 10, palette: ['#fff7bc', '#d95f0e']}, 'Corn Damage (PhP)');

// ============================================================
// STEP 6: 集計と出力
// ============================================================

// 浸水面積
var floodArea = floodMask.selfMask()
  .multiply(ee.Image.pixelArea())
  .reduceRegion({
    reducer: ee.Reducer.sum(),
    geometry: region,
    scale: 30,
    maxPixels: 1e13
  });
print('Flood Area (km2):', ee.Number(floodArea.get(POLARIZATION)).divide(1e6));

// 被害額の集計
var totalHousing = housingDamage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: region,
  scale: 30,
  maxPixels: 1e13
});
print('Total Housing Damage (PhP):', totalHousing.get('housing_damage'));

var totalRice = riceDamage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: region,
  scale: 30,
  maxPixels: 1e13
});
print('Total Rice Damage (PhP):', totalRice.get('rice_damage'));

var totalCorn = cornDamage.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: region,
  scale: 30,
  maxPixels: 1e13
});
print('Total Corn Damage (PhP):', totalCorn.get('corn_damage'));

// エクスポート
Export.image.toDrive({
  image: floodDepth,
  description: 'FloodDepth_' + FLOOD_DATE,
  region: region,
  scale: 10,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});

Export.image.toDrive({
  image: housingDamage.addBands(riceDamage).addBands(cornDamage),
  description: 'DamageEstimation_' + FLOOD_DATE,
  region: region,
  scale: 30,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});

print('--- Flood Direct Damage Calculation Complete ---');
