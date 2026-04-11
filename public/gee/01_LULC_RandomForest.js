// ============================================================
// 01_LULC_RandomForest.js
// 土地利用図作成ツール（Random Forest）
// フィリピン・カガヤンバレー地域
// Oriental Consultants Global - MyProject 第10期
// ============================================================

// ==================== 教師データ ====================
// Rice (LU=1), Corn (LU=2), Forest (LU=3),
// Barren (LU=4), Urban (LU=5), Water (LU=6)

var Rice = ee.FeatureCollection([
  ee.Feature(ee.Geometry.Point([121.86124170568252, 17.196965992576445]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.86185324933791, 17.19686350061882]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.85561992857188, 17.20214641307806]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.85640313360423, 17.20142898826196]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.85450412962169, 17.20192606146617]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.78137091373286, 17.25093112356337]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.78148088430247, 17.25125131705781]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.60064675066205, 17.21336664026101]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.6012126967642, 17.213358954047457]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.60023100826474, 17.212969518809608]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.60174377414914, 17.21360747479035]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.49908737235599, 18.076200355106163]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.49909810119205, 18.075912224330363]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.49856434159808, 18.075868877181566]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.49849192195468, 18.076248801827333]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.60454569180807, 18.148228794599635]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.60347549041113, 18.14883030553386]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.60426674207052, 18.14785922117703]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.60549519628391, 18.150517562856237]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.90269194708931, 17.921613470656517]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.90353416071999, 17.92139144095603]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.39723412301807, 18.38641620445629]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.74217361424888, 16.97509865667426]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.7440323850962, 16.975252577600198]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.74398678754295, 16.9746266317143]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.74037385199989, 16.975024261514804]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.7401056310984, 16.974218739624366]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.79975309036027, 16.896601084801464]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.80135168693315, 16.897268352891693]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.80139460227738, 16.89585168859361]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.80342235229264, 16.898356508098196]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.80365838668595, 16.897093836849887]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.78299752682778, 16.88925795704087]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.78234610352837, 16.890551478768828]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.78049001489006, 16.889299021358983]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.78080115113579, 16.89133169393659]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.66929022040753, 17.03641278243773]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.66758433547406, 17.035828073165774]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.61314868355554, 17.024522849491312]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.613052124031, 17.023589306059396]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.61399089718621, 17.023707281585356]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.64212959331681, 18.14913225813815]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.64285378975083, 18.14850526048989]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.68790720808728, 18.038007915428473]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.68915175307019, 18.035579935038022]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.68990277159436, 18.038640409020886]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.61977759140889, 17.96839080009504]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.61722412842671, 17.97061559749996]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.606022963057, 18.148548463772443]), {LU:1}),
  ee.Feature(ee.Geometry.Point([121.61944896078928, 17.9714128534934]), {LU:1})
]);

var Corn = ee.FeatureCollection([
  ee.Feature(ee.Geometry.Point([121.90799900632246, 17.151427039802577]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.90968343358381, 17.15161157050627]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.90799364190443, 17.149848269618165]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.90598774868586, 17.15019706392886]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.86104858663344, 17.197883293070532]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.8605711534288, 17.197837171925148]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.48401997884116, 17.731683856474984]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.4821531613668, 17.731551007560387]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.76370884259543, 17.595644294147696]), {LU:2}),
  ee.Feature(ee.Geometry.Point([122.01453847885132, 17.075012861427297]), {LU:2}),
  ee.Feature(ee.Geometry.Point([122.01326174736023, 17.076776871563577]), {LU:2}),
  ee.Feature(ee.Geometry.Point([122.01282186508179, 17.074920558112026]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.73879115740455, 17.61082998332627]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.73880725065864, 17.609045535231605]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.74098520437873, 17.608391062741287]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.74066518783572, 17.664570636026994]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.74225305557253, 17.663466552534203]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.78172082057986, 17.507657323710614]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.78030461422, 17.507539657494664]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.83746684295535, 17.490540171814878]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.83836806518435, 17.490509473396273]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.6823735442943, 17.516443556816487]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.68308164747422, 17.514734913913184]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.68223406942552, 17.514489359120493]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.683221122343, 17.517272293989947]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.8519491892182, 17.0274456185165]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.8512248695287, 17.027247791960825]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.84996691350072, 17.026914388982533]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.84933905109833, 17.026725109819807]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.77717258949164, 17.018255158579993]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.77525212783698, 17.018860440784543]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.77672197837714, 17.019322095387572]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.77538623828772, 17.017839667120302]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.77750117854477, 17.01986788201228]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.69681606647556, 17.754004477156286]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.4826238414599, 17.73316034335353]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.4815080425097, 17.732945742980124]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.4806436140996, 17.73466381407835]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.77207292410378, 17.913957617641596]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.77170814367776, 17.912895910000817]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.91592979634233, 17.15483057078441]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.91674518788285, 17.15408220810467]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.75162257800324, 17.183806784218934]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.75163867125733, 17.18345828657086]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.90977918671763, 17.058497425479686]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.90987306403315, 17.05839229295276]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.91017615365183, 17.058528195964165]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.44295699693616, 17.711944329358417]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.44345857002195, 17.7120260914888]), {LU:2}),
  ee.Feature(ee.Geometry.Point([121.48409563207971, 17.734698919583224]), {LU:2})
]);

var Forest = ee.FeatureCollection([
  ee.Feature(ee.Geometry.Point([122.03309156689221, 17.715524553918474]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.71899048566168, 17.99376233913761]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.49168124416074, 17.935416715878656]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.48657431819639, 17.930762052907436]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.47902121761045, 17.938928047305637]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.88296092592793, 18.135370700718425]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.85416428988535, 18.13459804613418]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.03169406465119, 18.133820210470276]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.07763377662613, 18.14294215487002]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.10699893882123, 18.197450537269507]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.07664591714519, 17.298978729078545]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.03873980498724, 17.295272258976894]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.0143021186191, 17.265545023922847]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.86730935785774, 17.444060620256018]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.0957825599913, 17.570276061461495]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.05928295634907, 17.651428625235265]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.08085703994217, 17.65027063576788]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.05434972148676, 17.851198963739225]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.06610109852738, 17.905978014715732]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.08654660579083, 17.99663330320048]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.80678005857754, 17.99089429125718]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.77922896227881, 18.006353502424393]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.79530793812734, 18.13200428686573]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.69828002887493, 18.144682779463032]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.69395630794293, 18.143836565446524]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.81593463023478, 17.818065109857358]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.8180702593038, 17.798944341936153]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.84937565271991, 17.777831572906024]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.80779765629342, 17.77532050262581]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.79908599773455, 17.755984069582993]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.79976311847506, 17.043227296018443]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.81665541314092, 17.040660667535654]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.09586574589648, 17.140797797424266]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.93967238953249, 17.131270285733002]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.91139065987439, 17.345627947120295]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.8282118666784, 17.40591458727254]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.83306951255047, 17.404104347321766]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.66087309587125, 17.345796413262416]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.99066359057355, 17.274686218580857]), {LU:3}),
  ee.Feature(ee.Geometry.Point([122.06937942598844, 17.35970776661528]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.66313968666759, 17.318299677264893]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.82064317566143, 17.97182538501654]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.94339343956436, 18.102471548671872]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.38712880771016, 18.039265495774526]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.61588885778681, 18.12104037494677]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.60046595520856, 18.13148347760731]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.61998157436634, 18.17249551562787]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.59978449543219, 18.183687147762083]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.60138688819471, 18.217242315880107]), {LU:3}),
  ee.Feature(ee.Geometry.Point([121.64010016065593, 18.231985175265354]), {LU:3})
]);

var Barren = ee.FeatureCollection([
  ee.Feature(ee.Geometry.Point([121.9969143878686, 17.915193782362426]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.46893088348745, 17.89360739147703]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.47549505043365, 17.891693014267403]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.46565633201847, 17.87369059984623]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.4621869007852, 17.873534690780993]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.46453057710694, 17.86899132023471]), {LU:4}),
  ee.Feature(ee.Geometry.Point([122.09549609845138, 16.739638486091714]), {LU:4}),
  ee.Feature(ee.Geometry.Point([122.06842929078408, 16.73550342981949]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.01280629649777, 16.330168326534896]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.02250390793544, 16.334030318102627]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.71736547061812, 17.806878777298643]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.71094946668633, 17.850194480832478]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.60247354721551, 17.979597413441038]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.62875824927961, 18.03800379432273]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.65056215029382, 18.190294454762103]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.6592912111534, 17.883785448871276]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.65803392128126, 17.85363252936719]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.71964773977933, 17.828933150816678]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.68737721146002, 17.77944296725427]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.72739659407503, 17.75059010875236]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.7060135091366, 17.668997454857333]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.85007781974006, 17.531917760356887]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.84940994969536, 17.529902345782933]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.85407146690363, 17.524458990772384]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.83646491631026, 17.29616194850394]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.84179421193441, 17.292092762056228]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.79997674381595, 17.633403276082927]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.79675809299808, 17.63213540468462]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.80109254276614, 17.63926976206722]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.49611039174, 17.708184939205164]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.01753756035438, 16.331688197835092]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.09859199057209, 16.40033257343092]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.26478941595734, 16.571325308447708]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.92352158865104, 17.460084851116008]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.88693214494077, 17.534428975840363]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.80164390211917, 17.70081581906574]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.73537995006188, 17.693008335736433]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.73769737865075, 17.700771487081685]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.95849052875758, 17.307536688869565]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.95441357105494, 17.30493493517184]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.92210049402175, 17.116422874854862]), {LU:4}),
  ee.Feature(ee.Geometry.Point([122.00186989264421, 17.919457438866274]), {LU:4}),
  ee.Feature(ee.Geometry.Point([122.00241169886522, 17.920519107197208]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.77194470672751, 18.155484781520652]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.7740690162673, 18.157564486889083]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.78111163317296, 18.159491095399314]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.77905532823839, 18.159612213114627]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.76635433932591, 18.115364700001138]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.77007724543859, 18.117781958175236]), {LU:4}),
  ee.Feature(ee.Geometry.Point([121.77600487534833, 18.12091605875612]), {LU:4})
]);

var Urban = ee.FeatureCollection([
  ee.Feature(ee.Geometry.Point([121.09651495045104, 16.366476074352448]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.5474507858976, 16.685905042371154]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.18081745072378, 16.515103153911994]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.18151351475379, 16.520444712650836]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.25189348123945, 16.604560928434]), {LU:5}),
  ee.Feature(ee.Geometry.Point([122.01313311676965, 16.984419928470697]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.80974415900512, 17.275731154228325]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.89256984901883, 17.1476947361036]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.72695086967929, 17.614211223572482]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.72116197327321, 17.620258073859198]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.70039800849344, 17.623030204943426]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.68164542730199, 17.636786502645535]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.69159996741445, 17.65001447106225]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.90954803803848, 18.24713913342117]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.8666790549448, 17.890121871992093]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.70548467721846, 17.593069738611877]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.73293080115499, 17.627014518582467]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.78438261839075, 17.622696411804743]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.80750082708866, 17.27954196321022]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.80960907416053, 17.27394106991491]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.86896036965585, 17.13209264810905]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.87502982425121, 17.11893673795219]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.88319023274224, 17.11676562539748]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.87795994567746, 17.11340863967235]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.96048422010452, 17.089198318447135]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.98580393542585, 17.092241142224648]), {LU:5}),
  ee.Feature(ee.Geometry.Point([122.01537228331296, 16.983368479243342]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.14796432227432, 16.478517020873667]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.03340870213691, 16.29808100564996]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.86942544031996, 17.890758898010304]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.67897548219734, 17.647145495378012]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.71842610340958, 17.61317326982017]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.80874987688117, 17.278957674381104]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.88993790025286, 17.148220059852413]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.88859738124233, 17.14295227346488]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.70854126454248, 17.61267665350476]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.90357258064438, 17.118084296109956]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.87540054246742, 17.11807955916991]), {LU:5}),
  ee.Feature(ee.Geometry.Point([122.01223417658369, 16.984571300567122]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.80821669017207, 16.718646326439913]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.68386298461425, 16.716366396551503]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.54693665905458, 16.684218022363567]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.54773536847622, 16.687394831357153]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.53485469662698, 16.783083978911478]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.53633417102353, 16.782764668914616]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.5467261470199, 16.68996475999265]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.15238847407875, 16.484772004851816]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.15378259325392, 16.485026370281073]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.182733425809, 16.515805589076134]), {LU:5}),
  ee.Feature(ee.Geometry.Point([121.71854017141855, 17.627718550692045]), {LU:5})
]);

var Water = ee.FeatureCollection([
  ee.Feature(ee.Geometry.Point([121.43407630667487, 18.36454216470295]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.42822415048427, 18.369839640201132]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.43829723465969, 18.44926409297368]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.43201237100914, 18.415274300656794]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.64001888548354, 18.33117793527731]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.66970721306278, 18.23553194099813]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.67614451469852, 18.251264611225672]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.64962696072955, 18.162176169247]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.66639953051823, 18.131784369518634]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.61722833109036, 18.02928326202136]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.59979105734284, 17.988879432591016]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.63842718585876, 17.96110158973564]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.66746774689516, 17.884433850454958]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.86226319408654, 18.26780060734456]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.80563908059109, 17.385902248426643]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.75931885904647, 17.34466172303467]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.8266597046092, 17.228108156437422]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.75137356690345, 16.52819208289036]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.90147592552506, 17.1307190436655]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.87279413838041, 17.152127085505803]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.85331209007967, 17.108384571003228]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.78972924390808, 17.62207659247608]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.81563855119191, 17.70662555127046]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.62591028771299, 17.965929697755155]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.62920147284764, 17.961939571155475]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.62844445379668, 17.964734613127]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.7185447729193, 17.82362523321775]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.72012799714389, 17.824697938370423]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.72225981449002, 17.823766757204636]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.74285297476277, 17.669576506543754]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.74505289012437, 17.672133345765625]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.74574507803965, 17.66928379723395]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.79817483553605, 17.635432282281816]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.79930939419629, 17.63485929100694]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.79901620481898, 17.63643524752361]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.92499303076675, 17.461810456174543]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.92485085085672, 17.46320428974084]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.84861820027958, 17.304135756367397]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.84932917399327, 17.30254571474265]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.84832493513735, 17.302776449792966]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.75151614620832, 16.53198252193139]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.62541547133107, 17.966929919023834]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.59892027953958, 17.98773367866758]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.61725419735293, 18.03058247723959]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.63982762975398, 17.961454247547236]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.66555831917137, 17.88549289393476]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.71641814574682, 17.821753393744186]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.64973766102073, 18.16198103116662]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.66725155327416, 18.132476782063847]), {LU:6}),
  ee.Feature(ee.Geometry.Point([121.66893048987614, 18.234977127506555]), {LU:6})
]);

// ==================== 固定パラメータ ====================
var NUM_TREES = 500;
var TRAIN_RATIO = 0.7;
var luPalette = ['#ff0000','#00ff00','#006400','#ffd700','#00ffff','#0000ff'];
var luNames = ['Rice', 'Corn', 'Forest', 'Barren', 'Urban', 'Water'];

// ==================== 教師データの結合 ====================
var trainingPoints = Rice.merge(Corn).merge(Forest)
                        .merge(Barren).merge(Urban).merge(Water);

// ==================== UIパネル ====================
var panel = ui.Panel({style: {width: '320px', padding: '8px'}});
ui.root.insert(0, panel);

panel.add(ui.Label('LULC Random Forest', {
  fontWeight: 'bold', fontSize: '16px', margin: '0 0 10px 0'
}));
panel.add(ui.Label('土地利用図作成ツール', {fontSize: '12px', color: 'gray'}));

// --- 解析年の選択 ---
panel.add(ui.Label('解析年:', {fontWeight: 'bold', margin: '12px 0 4px 0'}));
var yearSlider = ui.Slider({min: 2017, max: 2025, value: 2020, step: 1, style: {stretch: 'horizontal'}});
panel.add(yearSlider);

// --- 雲被覆率 ---
panel.add(ui.Label('雲被覆率閾値 (%):', {fontWeight: 'bold', margin: '12px 0 4px 0'}));
var cloudSlider = ui.Slider({min: 5, max: 50, value: 20, step: 5, style: {stretch: 'horizontal'}});
panel.add(cloudSlider);

// --- 解析範囲の説明 ---
panel.add(ui.Label('解析範囲:', {fontWeight: 'bold', margin: '12px 0 4px 0'}));
panel.add(ui.Label('地図上でジオメトリを描画してください。描画しない場合はカガヤンバレー全域を使用します。',
  {fontSize: '11px', color: 'gray'}));

// --- 結果表示エリア ---
var resultPanel = ui.Panel({style: {margin: '12px 0 0 0'}});
panel.add(resultPanel);

// --- Apply ボタン ---
var applyButton = ui.Button({label: 'Apply', style: {stretch: 'horizontal', fontWeight: 'bold'}});
panel.add(applyButton);

// ==================== 解析関数 ====================
function runClassification() {
  resultPanel.clear();
  resultPanel.add(ui.Label('Processing...', {color: 'blue'}));

  var YEAR = yearSlider.getValue();
  var CLOUD_THRESHOLD = cloudSlider.getValue();

  // 解析範囲: ジオメトリがあれば使用、なければデフォルト
  var drawingLayers = Map.drawingTools().layers();
  var region;
  if (drawingLayers.length() > 0 && drawingLayers.get(0).geometries().length() > 0) {
    region = drawingLayers.get(0).toGeometry();
  } else {
    region = ee.Geometry.Rectangle([120.5, 16.0, 122.5, 18.8]);
  }

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

  // --- Sentinel-2 ---
  function getS2(startDate, endDate) {
    var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
      .filterBounds(region)
      .filterDate(startDate, endDate)
      .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', CLOUD_THRESHOLD));
    var composite = s2.median().clip(region);
    var ndvi = composite.normalizedDifference(['B8', 'B4']).rename('NDVI');
    var evi = composite.expression(
      '2.5 * ((NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1))',
      {NIR: composite.select('B8'), RED: composite.select('B4'), BLUE: composite.select('B2')}
    ).rename('EVI');
    var ndwi = composite.normalizedDifference(['B3', 'B8']).rename('NDWI');
    var mndwi = composite.normalizedDifference(['B3', 'B11']).rename('MNDWI');
    return composite
      .select(['B2','B3','B4','B5','B6','B7','B8','B8A','B11','B12'])
      .addBands(ndvi).addBands(evi).addBands(ndwi).addBands(mndwi);
  }

  // --- 季節ごとのデータ取得 ---
  var periods = [
    {start: YEAR+'-01-01', end: YEAR+'-04-30', suffix: '_P1'},
    {start: YEAR+'-05-01', end: YEAR+'-08-31', suffix: '_P2'},
    {start: YEAR+'-09-01', end: YEAR+'-12-31', suffix: '_P3'},
  ];

  var inputImage = ee.Image([]);
  periods.forEach(function(p) {
    var s1 = getS1(p.start, p.end);
    var s2 = getS2(p.start, p.end);
    var s1Renamed = s1.select(['VV','VH'], ['VV'+p.suffix, 'VH'+p.suffix]);
    var s2Renamed = s2.bandNames().iterate(function(bandName, img) {
      bandName = ee.String(bandName);
      return ee.Image(img).addBands(s2.select([bandName], [bandName.cat(p.suffix)]));
    }, ee.Image([]));
    inputImage = inputImage.addBands(s1Renamed).addBands(ee.Image(s2Renamed));
  });

  // --- 地形データ ---
  var merit = ee.Image('MERIT/Hydro/v1_0_1');
  var elevation = merit.select('elv').rename('elevation');
  var slopeImg = ee.Terrain.slope(elevation).rename('slope');
  inputImage = inputImage.addBands(elevation).addBands(slopeImg);

  // --- 土地被覆参照 ---
  var landcover = ee.Image('COPERNICUS/Landcover/100m/Proba-V-C3/Global/2019')
    .select('discrete_classification').rename('landcover_ref');
  inputImage = inputImage.addBands(landcover);

  // --- Random Forest ---
  var withRandom = trainingPoints.randomColumn('random', 42);
  var trainData = withRandom.filter(ee.Filter.lt('random', TRAIN_RATIO));
  var testData = withRandom.filter(ee.Filter.gte('random', TRAIN_RATIO));

  var bands = inputImage.bandNames();
  var trainSamples = inputImage.sampleRegions({collection: trainData, properties: ['LU'], scale: 30});
  var testSamples = inputImage.sampleRegions({collection: testData, properties: ['LU'], scale: 30});

  var classifier = ee.Classifier.smileRandomForest(NUM_TREES)
    .train({features: trainSamples, classProperty: 'LU', inputProperties: bands});

  var classified = inputImage.classify(classifier);

  // --- 精度検証 ---
  var validated = testSamples.classify(classifier);
  var errorMatrix = validated.errorMatrix('LU', 'classification');

  // --- 可視化 ---
  Map.layers().reset();
  Map.centerObject(region, 8);
  Map.addLayer(classified.clip(region), {min:1, max:6, palette: luPalette}, 'LULC Map ' + YEAR);

  // --- 結果表示 ---
  resultPanel.clear();
  resultPanel.add(ui.Label('Results', {fontWeight: 'bold', margin: '0 0 6px 0'}));
  resultPanel.add(ui.Label('Year: ' + YEAR));

  errorMatrix.accuracy().evaluate(function(acc) {
    resultPanel.add(ui.Label('Overall Accuracy: ' + (acc * 100).toFixed(1) + '%'));
  });
  errorMatrix.kappa().evaluate(function(k) {
    resultPanel.add(ui.Label('Kappa: ' + k.toFixed(3)));
  });

  // 各クラスの面積
  var areaImage = ee.Image.pixelArea().addBands(classified);
  var areas = areaImage.reduceRegion({
    reducer: ee.Reducer.sum().group({groupField: 1, groupName: 'class'}),
    geometry: region, scale: 30, maxPixels: 1e13
  });
  areas.get('groups').evaluate(function(groups) {
    resultPanel.add(ui.Label('Area (km²):', {fontWeight: 'bold', margin: '8px 0 4px 0'}));
    if (groups) {
      groups.forEach(function(g) {
        var cls = g['class'];
        var areaKm2 = (g.sum / 1e6).toFixed(1);
        if (cls >= 1 && cls <= 6) {
          resultPanel.add(ui.Label('  ' + luNames[cls-1] + ': ' + areaKm2));
        }
      });
    }
  });

  // --- エクスポート ---
  Export.image.toDrive({
    image: classified.clip(region),
    description: 'LULC_' + YEAR,
    region: region, scale: 30, maxPixels: 1e13, fileFormat: 'GeoTIFF'
  });

  print('--- Classification complete for ' + YEAR + ' ---');
}

applyButton.onClick(runClassification);

// ==================== 凡例 ====================
var legend = ui.Panel({style: {position: 'bottom-left'}});
legend.add(ui.Label('LULC', {fontWeight: 'bold'}));
luNames.forEach(function(name, i) {
  var color = ui.Panel({
    style: {backgroundColor: luPalette[i], width: '14px', height: '14px', margin: '2px 4px 2px 0'}
  });
  legend.add(ui.Panel([color, ui.Label(name, {margin: '2px 0'})], ui.Panel.Layout.Flow('horizontal')));
});
Map.add(legend);
