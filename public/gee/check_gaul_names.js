// FAO GAUL Level2のフィリピンのProvince名を全て表示するスクリプト
var gaul2 = ee.FeatureCollection('FAO/GAUL/2015/level2');
var ph = gaul2.filter(ee.Filter.eq('ADM0_NAME', 'Philippines'));
var names = ph.aggregate_array('ADM2_NAME').sort();
print('Philippines Province names in FAO GAUL 2015 Level2:', names);
print('Total count:', ph.size());
