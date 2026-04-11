// ============================================================
// 02_Flood_DirectDamage.js
// 洪水直接被害計算ツール（FwDET + 被害曲線）
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

panel.add(ui.Label('洪水直接被害計算ツール', {
  fontWeight: 'bold', fontSize: '16px', margin: '0 0 4px 0'
}));
panel.add(ui.Label('Flood Direct Damage Estimation', {fontSize: '12px', color: 'gray'}));

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

// --- 結果表示エリア ---
var resultPanel = ui.Panel({style: {margin: '12px 0 0 0'}});
panel.add(resultPanel);

// --- 実行ボタン ---
var applyButton = ui.Button({label: '実行', style: {stretch: 'horizontal', fontWeight: 'bold'}});
panel.add(applyButton);

// ==================== 解析関数 ====================
function runAnalysis() {
  resultPanel.clear();
  resultPanel.add(ui.Label('処理中...', {color: 'blue'}));

  var afterDate_value = ee.Date(afterYear.getValue() + '-' + afterMonth.getValue() + '-' + afterDay.getValue());
  var beforeDate_value = ee.Date(beforeYear.getValue() + '-' + beforeMonth.getValue() + '-' + beforeDay.getValue());
  var pass_direction = orbitSelect.getValue();
  var polarization = polSelect.getValue();
  var difference_threshold = threshSlider.getValue();

  // 解析範囲（ジオメトリ必須）
  var drawingLayers = Map.drawingTools().layers();
  var aoi;
  if (drawingLayers.length() > 0 && drawingLayers.get(0).geometries().length() > 0) {
    aoi = drawingLayers.get(0).toGeometry();
  } else {
    resultPanel.clear();
    resultPanel.add(ui.Label('エラー: 地図上に解析範囲を描画してください', {color: 'red'}));
    return;
  }

  // ============ STEP 1: 浸水範囲の検出（参照コード準拠） ============

  var after_start = afterDate_value.format('YYYY-MM-dd');
  var after_end = afterDate_value.advance(12, 'day').format('YYYY-MM-dd');
  var before_end = beforeDate_value.advance(1, 'day').format('YYYY-MM-dd');
  var before_start = beforeDate_value.advance(-11, 'day').format('YYYY-MM-dd');

  // Sentinel-2（参照用表示）
  var S2_PreEvent = ee.ImageCollection('COPERNICUS/S2')
    .filterDate(before_start, before_end).filterBounds(aoi)
    .sort('CLOUD_COVERAGE_ASSESSMENT', false);
  var S2_PostEvent = ee.ImageCollection('COPERNICUS/S2')
    .filterDate(after_start, after_end).filterBounds(aoi)
    .sort('CLOUD_COVERAGE_ASSESSMENT', false);

  var rgbVis = {min: 0.0, max: 3000, bands: ['B4', 'B3', 'B2']};

  // Sentinel-1 GRD
  var collection = ee.ImageCollection('COPERNICUS/S1_GRD')
    .filter(ee.Filter.eq('instrumentMode', 'IW'))
    .filter(ee.Filter.listContains('transmitterReceiverPolarisation', polarization))
    .filter(ee.Filter.eq('orbitProperties_pass', pass_direction))
    .filter(ee.Filter.eq('resolution_meters', 10))
    .filterBounds(aoi)
    .select(polarization);

  // After画像の軌道番号に合わせてBefore画像を選択
  var after_collection = collection.filterDate(after_start, after_end).sort('system:time_start');
  var OrbitNumber = ee.Image(after_collection.first()).get('relativeOrbitNumber_start');
  var before_collection = collection.filterDate(before_start, before_end)
    .sort('system:time_start', false)
    .filter(ee.Filter.eq('relativeOrbitNumber_start', OrbitNumber));

  // After画像を最も近い1日に絞る
  var after_date = ee.Date(after_collection.first().get('system:time_start'));
  after_collection = after_collection.filterDate(
    after_date.advance(-1, 'day').format('YYYY-MM-dd'),
    after_date.advance(1, 'day').format('YYYY-MM-dd'));

  // Console出力
  function dates(imgcol, imgcol2) {
    var range = imgcol.reduceColumns(ee.Reducer.min(), ['system:time_start']);
    var range2 = imgcol2.reduceColumns(ee.Reducer.max(), ['system:time_start']);
    return ee.String('from ')
      .cat(ee.Date(range.get('min')).format('YYYY-MM-dd'))
      .cat(' to ')
      .cat(ee.Date(range2.get('max')).format('YYYY-MM-dd'));
  }

  print(ee.String('Sentinel2: Before (').cat(S2_PreEvent.size()).cat(')'), dates(S2_PreEvent, S2_PreEvent));
  print(ee.String('Sentinel2: After (').cat(S2_PostEvent.size()).cat(')'), dates(S2_PostEvent, S2_PostEvent));
  print(ee.String('Sentinel1: Before (').cat(before_collection.size()).cat(')'), dates(before_collection, before_collection));
  print(ee.String('Sentinel1: After (').cat(after_collection.size()).cat(')'), dates(after_collection, after_collection));

  // モザイク・クリップ・スペックル除去
  var before = before_collection.mosaic().clip(aoi);
  var after = after_collection.mosaic().clip(aoi);
  var smoothing_radius = 50;
  var before_filtered = before.focal_mean(smoothing_radius, 'circle', 'meters');
  var after_filtered = after.focal_mean(smoothing_radius, 'circle', 'meters');

  // 洪水範囲の計算
  var difference = after_filtered.divide(before_filtered);
  var difference_binary = difference.gt(difference_threshold);

  // JRC Surface Water（季節性10ヶ月以上 = 恒常的水域）を除外
  var swater = ee.Image('JRC/GSW1_0/GlobalSurfaceWater').select('seasonality');
  var swater_mask = swater.updateMask(swater.gte(10));
  var flooded_mask = difference_binary.where(swater_mask, 0);
  var flooded = flooded_mask.updateMask(flooded_mask);

  // 連結8ピクセル以上
  var connections = flooded.connectedPixelCount();
  flooded = flooded.updateMask(connections.gte(8));

  // HydroSHEDS DEM で傾斜5度以上を除外
  var DEM = ee.Image('WWF/HydroSHEDS/03VFDEM');
  var terrain = ee.Algorithms.Terrain(DEM);
  var slope = terrain.select('slope');
  flooded = flooded.updateMask(slope.lt(5));

  // ============ STEP 2: 浸水深の推定（FwDET） ============
  var floodExtent = flooded.selfMask();
  var floodDEM = DEM.updateMask(floodExtent);
  var floodEdge = floodExtent.focal_max(1).neq(floodExtent).selfMask();
  var edgeDEM = DEM.updateMask(floodEdge);
  var waterSurface = edgeDEM
    .reduceNeighborhood(ee.Reducer.max(), ee.Kernel.circle(500, 'meters'))
    .updateMask(floodExtent);
  var floodDepth = waterSurface.subtract(floodDEM).max(0).focal_mean(3, 'square');

  // ============ STEP 3: 住宅被害額 ============
  var buildings = ee.FeatureCollection('GOOGLE/Research/open-buildings/v3/polygons')
    .filterBounds(aoi);
  var buildingRaster = buildings
    .reduceToImage(['area_in_meters'], ee.Reducer.sum())
    .rename('building_area').updateMask(floodExtent);

  var housingDR = floodDepth.expression(
    '0.24 / (1 + exp(-1.50 * (FD - 1.45))) - 0.024', {FD: floodDepth}
  ).max(0);
  var housingDamage = housingDR.multiply(buildingRaster).multiply(HOUSING_COST_PER_M2).rename('housing_damage');

  // ============ STEP 4: 農作物被害額 ============
  // LULC マップ（Assetにアップロードしたものに差し替えてください）
  // var lulc = ee.Image('users/kurihara-yt/LULC_CagayanValley_2020');
  var lulc = ee.Image('ESA/WorldCover/v200/2021').clip(aoi);

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

  // ============ STEP 5: 被災人口（WorldPop） ============
  var WorldPop = ee.ImageCollection('WorldPop/GP/100m/pop');
  var popYear = ee.Date(after_start).get('year');
  var population_count = WorldPop.filterDate(ee.String(popYear)).mosaic().clip(aoi);
  var flooded_projection = flooded.projection();
  var population_exposed = population_count
    .reproject({crs: flooded_projection})
    .updateMask(flooded)
    .updateMask(population_count);

  // ============ STEP 6: 被災農地・都市面積（ESA WorldCover） ============
  var LC = ee.ImageCollection('ESA/WorldCover/v100').first().clip(aoi);
  var LC_affected = LC.updateMask(flooded).updateMask(LC);
  var cropland = LC_affected.updateMask(LC_affected.eq(40));
  var urban = LC_affected.updateMask(LC_affected.eq(50));

  var crop_area_ha = LC_affected.eq(40).multiply(ee.Image.pixelArea())
    .reduceRegion({reducer: ee.Reducer.sum(), geometry: aoi, scale: 10, bestEffort: true})
    .getNumber('Map').divide(10000).round();
  var urban_area_ha = LC_affected.eq(50).multiply(ee.Image.pixelArea())
    .reduceRegion({reducer: ee.Reducer.sum(), geometry: aoi, scale: 10, bestEffort: true})
    .getNumber('Map').divide(10000).round();

  // ============ STEP 7: 可視化 ============
  Map.layers().reset();
  Map.centerObject(aoi, 10);

  Map.addLayer(S2_PreEvent.mosaic().clip(aoi), rgbVis, 'Sentinel2: 洪水前', 0);
  Map.addLayer(S2_PostEvent.mosaic().clip(aoi), rgbVis, 'Sentinel2: 洪水後', 0);
  Map.addLayer(before_filtered, {min: -25, max: 0}, 'SAR: 洪水前', 0);
  Map.addLayer(after_filtered, {min: -25, max: 0}, 'SAR: 洪水後', 0);
  Map.addLayer(difference, {min: 0, max: 2}, '反射強度差', 0);
  Map.addLayer(flooded, {palette: '0000FF'}, '浸水範囲', 1);
  Map.addLayer(floodDepth, {min: 0, max: 3, palette: ['#ffffcc','#fd8d3c','#bd0026']}, '浸水深 (m)');
  Map.addLayer(population_exposed, {min: 1, max: 50, palette: ['yellow','orange','red']}, '被災人口', 0);
  Map.addLayer(cropland, {}, '被災農地', 0);
  Map.addLayer(urban, {}, '被災都市域', 0);
  Map.addLayer(housingDamage, {min: 0, max: 100000, palette: ['#fee5d9','#de2d26']}, '住宅被害額', 0);
  Map.addLayer(riceDamage, {min: 0, max: 10, palette: ['#edf8e9','#006d2c']}, 'コメ被害額', 0);
  Map.addLayer(cornDamage, {min: 0, max: 10, palette: ['#fff7bc','#d95f0e']}, 'トウモロコシ被害額', 0);

  // ============ STEP 8: 結果表示 ============
  resultPanel.clear();
  resultPanel.add(ui.Label('解析結果', {fontWeight: 'bold', margin: '0 0 6px 0'}));

  // 浸水面積
  var flood_pixelarea = flooded.multiply(ee.Image.pixelArea());
  var flood_stats = flood_pixelarea.reduceRegion({
    reducer: ee.Reducer.sum(), geometry: aoi, scale: 10, bestEffort: true
  });
  flood_stats.getNumber(polarization).evaluate(function(val) {
    if (val !== null && val !== undefined) {
      resultPanel.add(ui.Label('浸水面積: ' + (val / 10000).toFixed(0) + ' ha'));
    }
  });

  // 被災人口
  population_exposed.reduceRegion({
    reducer: ee.Reducer.sum(), geometry: aoi, scale: 92.77, bestEffort: true
  }).getNumber('population').evaluate(function(val) {
    if (val !== null && val !== undefined) {
      resultPanel.add(ui.Label('推定被災人口: ' + Math.round(val) + ' 人'));
    }
  });

  // 被災農地・都市面積
  crop_area_ha.evaluate(function(val) {
    if (val !== null) resultPanel.add(ui.Label('被災農地: ' + val + ' ha'));
  });
  urban_area_ha.evaluate(function(val) {
    if (val !== null) resultPanel.add(ui.Label('被災都市域: ' + val + ' ha'));
  });

  // 被害額
  function addDamageResult(label, image, bandName) {
    image.reduceRegion({
      reducer: ee.Reducer.sum(), geometry: aoi, scale: 10, bestEffort: true
    }).get(bandName).evaluate(function(val) {
      if (val !== null && val !== undefined) {
        resultPanel.add(ui.Label(label + ': ' + (val / 1e6).toFixed(1) + ' 百万PhP'));
      }
    });
  }
  addDamageResult('住宅被害額', housingDamage, 'housing_damage');
  addDamageResult('コメ被害額', riceDamage, 'rice_damage');
  addDamageResult('トウモロコシ被害額', cornDamage, 'corn_damage');

  // ============ エクスポート ============
  Export.image.toDrive({
    image: flooded, description: 'Flood_extent',
    region: aoi, maxPixels: 1e10
  });
  Export.image.toDrive({
    image: floodDepth, description: 'Flood_depth',
    region: aoi, scale: 10, maxPixels: 1e10, fileFormat: 'GeoTIFF'
  });
  Export.image.toDrive({
    image: housingDamage.addBands(riceDamage).addBands(cornDamage),
    description: 'Damage_estimation',
    region: aoi, scale: 10, maxPixels: 1e10, fileFormat: 'GeoTIFF'
  });

  // KMLエクスポート
  var flooded_vec = flooded.reduceToVectors({
    scale: 10, geometryType: 'polygon', geometry: aoi,
    eightConnected: false, bestEffort: true, tileScale: 16
  });
  Export.table.toDrive({
    collection: flooded_vec, description: 'Flood_extent_vector',
    fileFormat: 'KML', fileNamePrefix: 'Flood'
  });
}

applyButton.onClick(runAnalysis);
