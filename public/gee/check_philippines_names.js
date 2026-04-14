// ============================================================
// Philippines Municipalities/Provincesの名前の表記揺れ確認スクリプト
// ============================================================
// このコードをGEEで実行して、以下を確認：
// 1. phMuni (Philippines_MuniCities) の PROVINCE フィールドにある全Province名
// 2. regionProvinces のリストとの不一致（表記揺れ）
// 3. 各Province内のMunicipality数
// ============================================================

var phMuni = ee.FeatureCollection('users/kurihara-yt/Philippines_MuniCities');

// --- 1. phMuniのPROVINCEフィールドにある全名前 ---
var phMuniProvinces = phMuni.aggregate_array('PROVINCE')
  .distinct()
  .sort();
print('=== Philippines_MuniCities の PROVINCE 一覧 ===');
print('Count:', phMuniProvinces.size());
print(phMuniProvinces);

// --- 2. コード内のregionProvinces定義 ---
var regionProvinces = {
  'Region I - Ilocos':            ['Ilocos Norte','Ilocos Sur','La Union','Pangasinan'],
  'Region II - Cagayan Valley':   ['Batanes','Cagayan','Isabela','Nueva Vizcaya','Quirino'],
  'Region III - Central Luzon':   ['Aurora','Bataan','Bulacan','Nueva Ecija','Pampanga','Tarlac','Zambales'],
  'Region IV-A - CALABARZON':     ['Batangas','Cavite','Laguna','Quezon','Rizal'],
  'Region V - Bicol':             ['Albay','Camarines Norte','Camarines Sur','Catanduanes','Masbate','Sorsogon'],
  'Region VI - Western Visayas':  ['Aklan','Antique','Capiz','Guimaras','Iloilo','Negros Occidental'],
  'Region VII - Central Visayas': ['Bohol','Cebu','Negros Oriental','Siquijor'],
  'Region VIII - Eastern Visayas':['Biliran','Eastern Samar','Leyte','Northern Samar','Samar','Southern Leyte'],
  'Region IX - Zamboanga':        ['Zamboanga Del Norte','Zamboanga Del Sur','Zamboanga Sibugay'],
  'Region X - Northern Mindanao': ['Bukidnon','Camiguin','Lanao Del Norte','Misamis Occidental','Misamis Oriental'],
  'Region XI - Davao':            ['Compostela','Davao del Norte','Davao Del Sur','Davao Oriental'],
  'Region XII - SOCCSKSARGEN':    ['North Cotabato','Saranggani','South Cotabato','Sultan Kudarat'],
  'Region XIII - Caraga':         ['Agusan Del Norte','Agusan Del Sur','Dinagat','Surigao Del Norte','Surigao Del Sur'],
  'BARMM':                        ['Basilan','Lanao Del Sur','Maguindanao','Shariff Kabunsuan','Sulu','Tawi-tawi'],
  'CAR - Cordillera':             ['Abra','Apayao','Benguet','Ifugao','Kalinga','Mountain Province'],
  'NCR - Metro Manila':           ['Metropolitan Manila'],
};

// コード内のすべてのProvince名をフラット化
var codeProvinces = [];
for (var r in regionProvinces) {
  codeProvinces = codeProvinces.concat(regionProvinces[r]);
}
print('=== コード内の Province 一覧 ===');
print('Count:', codeProvinces.length);
print(codeProvinces.sort());

// --- 3. 表記揺れ検出 ---
phMuniProvinces.evaluate(function(phNames) {
  if (!phNames) return;

  // phMuniにあるがコードにない
  var notInCode = phNames.filter(function(n) {
    return codeProvinces.indexOf(n) < 0;
  });
  print('=== phMuniにあるがコードにないProvince（修正が必要）===');
  print(notInCode);

  // コードにあるがphMuniにない
  var notInPhMuni = codeProvinces.filter(function(n) {
    return phNames.indexOf(n) < 0;
  });
  print('=== コードにあるがphMuniにないProvince（存在しない or 表記違い）===');
  print(notInPhMuni);
});

// --- 4. 各ProvinceのMunicipality数 ---
print('=== 各ProvinceのMunicipality数 ===');
var counts = phMuni.aggregate_array('PROVINCE').map(function(p) {
  return ee.Dictionary({province: p, count: 1});
});
// シンプルにグループ化して数える
var groupedByProvince = ee.Dictionary.fromLists(
  phMuniProvinces,
  phMuniProvinces.map(function(pname) {
    return phMuni.filter(ee.Filter.eq('PROVINCE', pname)).size();
  })
);
print(groupedByProvince);

// --- 5. サンプル: 各Provinceの最初のMunicipality ---
print('=== 各Provinceの代表Municipality例 ===');
var samples = phMuni.distinct(['PROVINCE']).limit(100);
print(samples.aggregate_array('PROVINCE').zip(samples.aggregate_array('NAME_2')));
