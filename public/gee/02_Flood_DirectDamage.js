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

// ==================== 固定パラメータ ====================
var HOUSING_COST_PER_M2 = 10300;
var RICE_COST_PER_M2 = 0.00696;
var CORN_COST_PER_M2 = 0.00459;

// ==================== UIパネル ====================
var panel = ui.Panel({style: {width: '340px', padding: '8px'}});
ui.root.insert(0, panel);

panel.add(ui.Label('Flood Direct Damage', {
  fontWeight: 'bold', fontSize: '16px', margin: '0 0 4px 0'
}));
panel.add(ui.Label('洪水直接被害計算ツール', {fontSize: '12px', color: 'gray'}));

// --- 洪水発生日 ---
panel.add(ui.Label('洪水発生日 (After):', {fontWeight: 'bold', margin: '14px 0 4px 0'}));
var afterYear = ui.Select({items: ['2017','2018','2019','2020','2021','2022','2023','2024','2025'], value: '2020', style: {stretch: 'horizontal'}});
var afterMonth = ui.Select({items: ['01','02','03','04','05','06','07','08','09','10','11','12'], value: '11', style: {stretch: 'horizontal'}});
var afterDay = ui.Select({items: (function(){var d=[];for(var i=1;i<=31;i++)d.push(String(i<10?'0'+i:i));return d;})(), value: '13', style: {stretch: 'horizontal'}});
panel.add(ui.Panel([afterYear, afterMonth, afterDay], ui.Panel.Layout.Flow('horizontal')));

// --- 比較画像日 ---
panel.add(ui.Label('比較画像日 (Before):', {fontWeight: 'bold', margin: '10px 0 4px 0'}));
var beforeYear = ui.Select({items: ['2017','2018','2019','2020','2021','2022','2023','2024','2025'], value: '2020', style: {stretch: 'horizontal'}});
var beforeMonth = ui.Select({items: ['01','02','03','04','05','06','07','08','09','10','11','12'], value: '10', style: {stretch: 'horizontal'}});
var beforeDay = ui.Select({items: (function(){var d=[];for(var i=1;i<=31;i++)d.push(String(i<10?'0'+i:i));return d;})(), value: '08', style: {stretch: 'horizontal'}});
panel.add(ui.Panel([beforeYear, beforeMonth, beforeDay], ui.Panel.Layout.Flow('horizontal')));

// --- 衛星軌道 ---
panel.add(ui.Label('衛星軌道:', {fontWeight: 'bold', margin: '10px 0 4px 0'}));
var orbitSelect = ui.Select({items: ['ASCENDING', 'DESCENDING'], value: 'ASCENDING', style: {stretch: 'horizontal'}});
panel.add(orbitSelect);

// --- 偏波 ---
panel.add(ui.Label('偏波:', {fontWeight: 'bold', margin: '10px 0 4px 0'}));
var polSelect = ui.Select({items: ['VV', 'VH'], value: 'VV', style: {stretch: 'horizontal'}});
panel.add(polSelect);

// --- 閾値 ---
panel.add(ui.Label('洪水検出閾値:', {fontWeight: 'bold', margin: '10px 0 4px 0'}));
var threshSlider = ui.Slider({min: 1.0, max: 2.0, value: 1.15, step: 0.05, style: {stretch: 'horizontal'}});
panel.add(threshSlider);

// --- 解析範囲 ---
panel.add(ui.Label('解析範囲:', {fontWeight: 'bold', margin: '10px 0 4px 0'}));
panel.add(ui.Label('地図上でジオメトリを描画してください。描画しない場合はカガヤンバレー全域を使用します。',
  {fontSize: '11px', color: 'gray'}));

// --- 結果表示エリア ---
var resultPanel = ui.Panel({style: {margin: '12px 0 0 0'}});
panel.add(resultPanel);

// --- Apply ボタン ---
var applyButton = ui.Button({label: 'Apply', style: {stretch: 'horizontal', fontWeight: 'bold'}});
panel.add(applyButton);

// ==================== 解析関数 ====================
function runAnalysis() {
  resultPanel.clear();
  resultPanel.add(ui.Label('Processing...', {color: 'blue'}));

  var FLOOD_DATE = afterYear.getValue() + '-' + afterMonth.getValue() + '-' + afterDay.getValue();
  var BEFORE_DATE = beforeYear.getValue() + '-' + beforeMonth.getValue() + '-' + beforeDay.getValue();
  var ORBIT = orbitSelect.getValue();
  var POLARIZATION = polSelect.getValue();
  var FLOOD_THRESHOLD = threshSlider.getValue();

  // 解析範囲
  var drawingLayers = Map.drawingTools().layers();
  var region;
  if (drawingLayers.length() > 0 && drawingLayers.get(0).geometries().length() > 0) {
    region = drawingLayers.get(0).toGeometry();
  } else {
    region = ee.Geometry.Rectangle([120.5, 16.0, 122.5, 18.8]);
  }

  // LULC マップ（Assetにアップロードしたものに差し替えてください）
  // var lulc = ee.Image('users/kurihara-yt/LULC_CagayanValley_2020');
  var lulc = ee.Image('ESA/WorldCover/v200/2021').clip(region);

  // ============ STEP 1: 浸水範囲の検出 ============
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

  var beforeImage = beforeCollection.mosaic().clip(region).focal_mean(50, 'circle', 'meters');
  var afterImage = afterCollection.mosaic().clip(region).focal_mean(50, 'circle', 'meters');

  var ratio = beforeImage.divide(afterImage);
  var floodMask = ratio.gt(FLOOD_THRESHOLD);

  // 恒常的水域の除外
  var permanentWater = ee.Image('JRC/GSW1_4/GlobalSurfaceWater')
    .select('occurrence').gt(80).unmask(0);
  floodMask = floodMask.updateMask(permanentWater.not());

  // 傾斜5度以上の除外
  var dem = ee.Image('COPERNICUS/DEM/GLO30').select('DEM');
  var slopeImg = ee.Terrain.slope(dem);
  floodMask = floodMask.updateMask(slopeImg.lt(5));

  // 連結4ピクセル以上
  var connected = floodMask.selfMask().connectedPixelCount(25, true).gte(4);
  floodMask = floodMask.updateMask(connected);

  // ============ STEP 2: 浸水深の推定（FwDET） ============
  var floodExtent = floodMask.selfMask();
  var floodDEM = dem.updateMask(floodExtent);
  var floodEdge = floodExtent.focal_max(1).neq(floodExtent).selfMask();
  var edgeDEM = dem.updateMask(floodEdge);
  var waterSurface = edgeDEM
    .reduceNeighborhood(ee.Reducer.max(), ee.Kernel.circle(500, 'meters'))
    .updateMask(floodExtent);
  var floodDepth = waterSurface.subtract(floodDEM).max(0).focal_mean(3, 'square');

  // ============ STEP 3: 住宅被害額 ============
  var buildings = ee.FeatureCollection('GOOGLE/Research/open-buildings/v3/polygons')
    .filterBounds(region);
  var buildingRaster = buildings
    .reduceToImage(['area_in_meters'], ee.Reducer.sum())
    .rename('building_area').updateMask(floodExtent);

  var housingDR = floodDepth.expression(
    '0.24 / (1 + exp(-1.50 * (FD - 1.45))) - 0.024', {FD: floodDepth}
  ).max(0);
  var housingDamage = housingDR.multiply(buildingRaster).multiply(HOUSING_COST_PER_M2).rename('housing_damage');

  // ============ STEP 4: 農作物被害額 ============
  var riceMask = lulc.eq(1).updateMask(floodExtent);
  var cornMask = lulc.eq(2).updateMask(floodExtent);

  var riceDR = floodDepth.expression(
    '0.505 / (1 + exp(-7.513 * FD - 0.854)) - 0.001', {FD: floodDepth}
  ).max(0).updateMask(riceMask);
  var riceDamage = riceDR.multiply(RICE_COST_PER_M2).multiply(ee.Image.pixelArea()).rename('rice_damage');

  var cornDR = floodDepth.expression(
    '1.44 / (1 + exp(-2.11 * FD)) - 0.720', {FD: floodDepth}
  ).max(0).updateMask(cornMask);
  var cornDamage = cornDR.multiply(CORN_COST_PER_M2).multiply(ee.Image.pixelArea()).rename('corn_damage');

  // ============ STEP 5: 可視化 ============
  Map.layers().reset();
  Map.centerObject(region, 8);
  Map.addLayer(floodMask.selfMask(), {palette: ['#0000ff']}, 'Flood Extent', true, 0.5);
  Map.addLayer(floodDepth, {min: 0, max: 3, palette: ['#ffffcc','#fd8d3c','#bd0026']}, 'Flood Depth (m)');
  Map.addLayer(housingDamage, {min: 0, max: 100000, palette: ['#fee5d9','#de2d26']}, 'Housing Damage');
  Map.addLayer(riceDamage, {min: 0, max: 10, palette: ['#edf8e9','#006d2c']}, 'Rice Damage');
  Map.addLayer(cornDamage, {min: 0, max: 10, palette: ['#fff7bc','#d95f0e']}, 'Corn Damage');

  // ============ STEP 6: 結果表示 ============
  resultPanel.clear();
  resultPanel.add(ui.Label('Results', {fontWeight: 'bold', margin: '0 0 6px 0'}));
  resultPanel.add(ui.Label('Flood: ' + FLOOD_DATE));
  resultPanel.add(ui.Label('Before: ' + BEFORE_DATE));
  resultPanel.add(ui.Label('Orbit: ' + ORBIT + ' / ' + POLARIZATION));
  resultPanel.add(ui.Label('Threshold: ' + FLOOD_THRESHOLD));

  // 浸水面積
  var floodArea = floodMask.selfMask().multiply(ee.Image.pixelArea())
    .reduceRegion({reducer: ee.Reducer.sum(), geometry: region, scale: 30, maxPixels: 1e13});
  floodArea.get(POLARIZATION).evaluate(function(val) {
    resultPanel.add(ui.Label('Flood Area: ' + (val / 1e6).toFixed(1) + ' km²',
      {fontWeight: 'bold', margin: '8px 0 4px 0'}));
  });

  // 被害額
  function addDamageResult(label, image, bandName) {
    var total = image.reduceRegion({
      reducer: ee.Reducer.sum(), geometry: region, scale: 30, maxPixels: 1e13
    });
    total.get(bandName).evaluate(function(val) {
      if (val !== null) {
        var millions = (val / 1e6).toFixed(1);
        resultPanel.add(ui.Label(label + ': ' + millions + ' M PhP'));
      }
    });
  }
  addDamageResult('Housing Damage', housingDamage, 'housing_damage');
  addDamageResult('Rice Damage', riceDamage, 'rice_damage');
  addDamageResult('Corn Damage', cornDamage, 'corn_damage');

  // --- Console ---
  beforeCollection.size().evaluate(function(n) { print('Before images: ' + n); });
  afterCollection.size().evaluate(function(n) { print('After images: ' + n); });

  // --- エクスポート ---
  Export.image.toDrive({
    image: floodDepth, description: 'FloodDepth_' + FLOOD_DATE,
    region: region, scale: 10, maxPixels: 1e13, fileFormat: 'GeoTIFF'
  });
  Export.image.toDrive({
    image: housingDamage.addBands(riceDamage).addBands(cornDamage),
    description: 'DamageEstimation_' + FLOOD_DATE,
    region: region, scale: 30, maxPixels: 1e13, fileFormat: 'GeoTIFF'
  });
}

applyButton.onClick(runAnalysis);
