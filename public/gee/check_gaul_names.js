// FAO GAUL Level1 のフィリピンの地域名を全て表示するスクリプト
// GEEで実行して、Console出力の結果を教えてください

var gaul1 = ee.FeatureCollection('FAO/GAUL/2015/level1');
var ph1 = gaul1.filter(ee.Filter.eq('ADM0_NAME', 'Philippines'));
print('=== GAUL Level1 (Region) ===');
print('Names:', ph1.aggregate_array('ADM1_NAME').sort());
print('Count:', ph1.size());

var gaul2 = ee.FeatureCollection('FAO/GAUL/2015/level2');
var ph2 = gaul2.filter(ee.Filter.eq('ADM0_NAME', 'Philippines'));
print('=== GAUL Level2 (Province) ===');
print('Names:', ph2.aggregate_array('ADM2_NAME').sort());
print('Count:', ph2.size());
