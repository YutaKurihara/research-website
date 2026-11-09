"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { MathBlock, Math } from "@/components/Math";

const th =
  "border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted";
const td = "border border-border px-3 py-2 text-muted";
const tdHead = "border border-border px-3 py-2 font-medium text-foreground";

export default function Content() {
  const { locale } = useLocale();
  const en = locale === "en";

  return (
    <div className="mx-auto max-w-2xl px-6">
      <section className="pb-8 pt-20">
        <Link
          href="/blog"
          className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          &larr; Blog
        </Link>

        <div className="mt-8">
          <span className="text-[10px] uppercase tracking-widest text-muted">
            2026-11-09
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Mapping Burned Areas from Space — Optical dNBR and Multi-Temporal SAR Backscatter Change"
              : "衛星で焼失域を把握する — 光学 dNBR と SAR 後方散乱の多時期差分"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "Active-fire hotspots tell us where something is burning; they do not tell us how much has burned. This post reviews how burned area is mapped from satellites: the optical burn indices (NBR, dNBR, RdNBR) and the MODIS/VIIRS global products built on them, why they struggle in the smoke-covered tropics, what C-band SAR backscatter actually sees after a fire, and how multi-temporal Sentinel-1 change detection can be combined with hotspots in an operational workflow."
              : "ホットスポット（熱異常）は「どこで何かが燃えているか」を教えてくれますが、「どれだけ燃えたか」は教えてくれません。本稿では衛星からの焼失域推定を整理します。光学の燃焼指標（NBR・dNBR・RdNBR）とそれに基づく MODIS/VIIRS の全球プロダクト、煙霧に覆われた熱帯でそれらが苦戦する理由、火災後に C バンド SAR の後方散乱が実際に何を見ているのか、そして Sentinel-1 の多時期変化検出をホットスポットと組み合わせた運用ワークフローです。"}
          </p>
          <p className="mt-1 text-xs text-muted">
            Key &amp; Benson (2006). <em>FIREMON: Landscape Assessment</em>;
            Chuvieco et al. (2019). <em>Remote Sensing of Environment</em>;
            Belenguer-Plomer et al. (2019). <em>Remote Sensing of Environment</em>;
            Lohberger et al. (2018). <em>Global Change Biology</em>.
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* 1 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "1. Active fire versus burned area" : "1. 「燃えている場所」と「燃えた面積」は別物"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Two different satellite products are routinely confused. An{" "}
                <strong className="text-foreground">active-fire detection</strong>{" "}
                is a pixel whose mid-infrared brightness temperature is anomalously
                high at the moment of overpass — MODIS at 1 km (Giglio et al.,
                2016) and VIIRS at 375 m (Schroeder et al., 2014) are the
                standard sources, distributed in near real time by NASA FIRMS. A{" "}
                <strong className="text-foreground">burned-area product</strong>{" "}
                maps the land surface that has been altered by fire, regardless of
                whether a flame was observed. Hotspots are a sample of the fire in
                time: a fire that burns between two overpasses, under cloud, or at
                a temperature below the detection threshold leaves no hotspot but
                still leaves a scar. Conversely, hotspots cluster in large
                flaming fronts and over-represent them relative to smouldering
                peat or understorey fires.
              </>
            ) : (
              <>
                異なる 2 種類の衛星プロダクトがよく混同されます。
                <strong className="text-foreground">ホットスポット（活火検知）</strong>
                は、衛星通過の瞬間に中間赤外の輝度温度が異常に高い画素で、1 km の MODIS（Giglio et al., 2016）と 375 m の VIIRS
                （Schroeder et al., 2014）が標準的な情報源であり、NASA FIRMS が準リアルタイムで配信しています。
                <strong className="text-foreground">焼失域プロダクト</strong>
                は、炎が観測されたか否かにかかわらず、火災によって変化した地表面を地図化したものです。ホットスポットは火災の
                時間的な標本に過ぎません。2 回の通過の間に燃えた火、雲の下の火、検知閾値未満の温度の火はホットスポットを残しませんが、
                焼け跡は残します。逆に、ホットスポットは大きな炎の前線に集中し、くすぶる泥炭火災や林床火災に比べてそれらを
                過大に表現します。
              </>
            )}
          </p>
          <p className="text-muted">
            {en
              ? "For damage assessment, emissions accounting and recovery planning the quantity of interest is the burned area, and the hotspot record is at best a guide to where to look. Mapping it requires imagery that compares the surface before and after the fire."
              : "被害評価、排出量の算定、復旧計画で必要なのは焼失面積であり、ホットスポットの記録はせいぜい「どこを見るべきか」の手がかりです。焼失域の地図化には、火災前後の地表面を比較できる画像が必要です。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* 2 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "2. Optical burn indices: NBR, dNBR and RdNBR" : "2. 光学の燃焼指標 — NBR・dNBR・RdNBR"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Fire removes green vegetation and leaves char and exposed soil.
                In the optical domain this lowers near-infrared (NIR) reflectance
                and raises shortwave-infrared (SWIR) reflectance. The Normalised
                Burn Ratio exploits exactly this contrast, and its pre- minus
                post-fire difference, the dNBR, is the most widely used measure
                of burn extent and severity (Key &amp; Benson, 2006):
              </>
            ) : (
              <>
                火災は緑の植生を取り除き、炭化物と露出した土壌を残します。光学領域では近赤外（NIR）の反射率が下がり、
                短波長赤外（SWIR）の反射率が上がります。正規化燃焼比（NBR）はまさにこの対比を利用し、火災前から火災後を
                引いた差分 dNBR が、焼失範囲と燃焼強度（severity）の最も広く使われる指標です（Key &amp; Benson, 2006）。
              </>
            )}
          </p>
          <MathBlock
            tex={String.raw`\mathrm{NBR} = \frac{\rho_{\mathrm{NIR}} - \rho_{\mathrm{SWIR2}}}{\rho_{\mathrm{NIR}} + \rho_{\mathrm{SWIR2}}}, \qquad \mathrm{dNBR} = \mathrm{NBR}_{\mathrm{pre}} - \mathrm{NBR}_{\mathrm{post}}`}
          />
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Because the same absolute change means more in sparse vegetation
                than in dense forest, Miller and Thode (2007) proposed the
                relativised version, <Math tex="\mathrm{RdNBR} = \mathrm{dNBR} / \sqrt{|\mathrm{NBR}_{\mathrm{pre}}|}" />,
                which compares severity across vegetation types. The widely
                quoted severity classes of Key and Benson (2006), derived for
                Landsat over North American forests, are shown below; they are a
                starting point, not a universal truth, and should be re-thresholded
                locally.
              </>
            ) : (
              <>
                同じ絶対変化量でも、疎な植生では密な森林より大きな意味を持つため、Miller and Thode（2007）は相対化版{" "}
                <Math tex="\mathrm{RdNBR} = \mathrm{dNBR} / \sqrt{|\mathrm{NBR}_{\mathrm{pre}}|}" /> を提案し、植生タイプ間で
                燃焼強度を比較できるようにしました。よく引用される Key and Benson（2006）の強度区分（北米の森林の Landsat から
                導出）を下表に示します。これは出発点であって普遍的な真理ではなく、地域ごとに閾値を取り直すべきものです。
              </>
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={th}>dNBR</th>
                  <th className={th}>{en ? "Class" : "区分"}</th>
                  <th className={th}>{en ? "Surface" : "地表の状態"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdHead}>&lt; &minus;0.10</td>
                  <td className={td}>{en ? "Enhanced regrowth" : "再生の促進"}</td>
                  <td className={td}>{en ? "Greener than before (post-fire flush, or pre-image drier)" : "以前より緑が濃い（火災後の萌芽、または火災前画像が乾燥）"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>&minus;0.10 &ndash; 0.10</td>
                  <td className={td}>{en ? "Unburned" : "未燃焼"}</td>
                  <td className={td}>{en ? "No detectable change" : "検出可能な変化なし"}</td>
                </tr>
                <tr>
                  <td className={tdHead}>0.10 &ndash; 0.27</td>
                  <td className={td}>{en ? "Low severity" : "低強度"}</td>
                  <td className={td}>{en ? "Understorey burned, canopy largely intact" : "林床が燃え、樹冠はほぼ無事"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>0.27 &ndash; 0.66</td>
                  <td className={td}>{en ? "Moderate severity" : "中強度"}</td>
                  <td className={td}>{en ? "Partial canopy scorch and consumption" : "樹冠の部分的な焦げと焼失"}</td>
                </tr>
                <tr>
                  <td className={tdHead}>&gt; 0.66</td>
                  <td className={td}>{en ? "High severity" : "高強度"}</td>
                  <td className={td}>{en ? "Canopy consumed, char and ash dominant" : "樹冠が焼失し、炭と灰が支配的"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-muted">
            {en ? (
              <>
                At the global scale the MODIS MCD64A1 product (Giglio et al.,
                2018) maps burned area at 500 m by combining a burn-sensitive
                vegetation index time series with active-fire detections; the
                ESA Fire_cci product (Lizundia-Loiola et al., 2020) does so at
                250 m. For regional work Landsat and Sentinel-2 allow 20&ndash;30
                m mapping, with the combined-sensor approach of Roy et al. (2019)
                exploiting both to shorten revisit. Chuvieco et al. (2019)
                review the whole lineage. The decisive limitation is that all of
                these need a clear view of the ground before and after the fire.
              </>
            ) : (
              <>
                全球スケールでは、MODIS の MCD64A1 プロダクト（Giglio et al., 2018）が燃焼に感度のある植生指標の時系列と
                ホットスポットを組み合わせて 500 m で焼失域を地図化し、ESA の Fire_cci プロダクト（Lizundia-Loiola et al., 2020）
                は 250 m で同様のことを行っています。地域スケールでは Landsat と Sentinel-2 により 20〜30 m の地図化が可能で、
                Roy et al.（2019）の複合センサー手法は両者を使って再訪間隔を短縮します。Chuvieco et al.（2019）がこの系譜全体を
                レビューしています。決定的な制約は、これらすべてが火災の前後に地表のクリアな視界を必要とすることです。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* 3 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "3. Why the tropics are hard: cloud, haze and the peat problem" : "3. 熱帯が難しい理由 — 雲・煙霧・泥炭"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                In Indonesia&rsquo;s fire season the sky over Sumatra and
                Kalimantan is covered for weeks by a mixture of convective cloud
                and dense smoke haze. Optical sensors see the top of that layer,
                not the ground. Gaveau et al. (2021), mapping the 2019 Indonesian
                fires with Sentinel-2 at 20 m, had to wait for the first clear
                post-season scenes and still found that a careful protocol
                nearly doubled the burned area relative to coarse global
                products. A second difficulty is that tropical regrowth is fast:
                a few weeks after the rains return, grasses and shrubs green the
                scar and the dNBR signal fades. A third is that peat fires burn
                downward and smoulder; the canopy above may be only partially
                affected while the organic soil beneath has been consumed, which
                an NIR/SWIR index does not register well.
              </>
            ) : (
              <>
                インドネシアの火災シーズン、スマトラとカリマンタンの空は対流雲と濃い煙霧の混合に何週間も覆われます。光学センサーは
                その層の上面を見ているのであって、地表を見ているのではありません。Gaveau et al.（2021）は 2019 年のインドネシアの
                火災を Sentinel-2 の 20 m で地図化するにあたり、シーズン後の最初のクリアな画像を待たねばならず、それでも丁寧な
                手順によって粗い全球プロダクトに比べて焼失面積がほぼ倍になることを見出しました。第二の難しさは、熱帯の植生再生が
                速いこと。雨が戻って数週間で草や灌木が焼け跡を緑に戻し、dNBR の信号は薄れていきます。第三は、泥炭火災が下方に
                燃え進みくすぶること。上の樹冠は部分的な影響しか受けていないのに、その下の有機質土壌は焼失しているという状態を、
                NIR/SWIR の指標はうまく捉えられません。
              </>
            )}
          </p>
          <p className="text-muted">
            {en
              ? "These are the conditions under which synthetic aperture radar becomes attractive: it images through cloud and smoke, day and night, on a fixed schedule."
              : "こうした条件下で合成開口レーダー（SAR）が魅力的になります。雲も煙も透過し、昼夜を問わず、決まったスケジュールで撮像するからです。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* 4 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "4. What C-band SAR sees after a fire" : "4. 火災の後に C バンド SAR は何を見ているか"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Radar backscatter is governed by surface roughness, dielectric
                properties (mainly moisture) and the geometry of scatterers
                relative to the wavelength. Sentinel-1 operates at C-band
                (5.6 cm wavelength) in dual polarisation, VV and VH, over most
                land. Fire changes the scene in three ways. It removes leaves,
                twigs and small branches, which are the dominant volume scatterers
                at C-band — this lowers the cross-polarised VH return, which is
                most sensitive to volume scattering. It exposes the soil, so the
                co-polarised VV return depends more on soil roughness and
                moisture; it may fall over smooth, dry ash or rise over rough
                or wet soil. And it changes the moisture regime: charred, dry
                surfaces return less energy than the moist canopy that was there
                before. Tanase et al. (2010) quantified these responses across
                X-, C- and L-band and found that the sensitivity to burn severity
                increases with wavelength, with L-band responding more
                consistently in forests because it penetrates the remaining
                canopy. Imperatore et al. (2017) confirmed with Sentinel-1 that
                the post-fire backscatter decrease is clearest in VH and in
                dense vegetation.
              </>
            ) : (
              <>
                レーダー後方散乱は、地表の粗さ、誘電特性（主に水分）、波長に対する散乱体の幾何で決まります。Sentinel-1 は
                C バンド（波長 5.6 cm）で、陸域の大半を VV と VH の二偏波で観測します。火災はシーンを 3 つの点で変えます。
                葉・小枝・細い枝——C バンドでの支配的な体積散乱体——を取り除くため、体積散乱に最も敏感な交差偏波 VH の
                後方散乱が下がります。土壌を露出させるため、同一偏波 VV の後方散乱は土壌の粗さと水分への依存を強め、滑らかで
                乾いた灰の上では下がり、粗いか湿った土壌の上では上がることがあります。そして水分レジームを変えます。炭化した
                乾いた表面は、以前そこにあった湿った樹冠より少ないエネルギーしか返しません。Tanase et al.（2010）はこれらの
                応答を X・C・L バンドにわたって定量化し、燃焼強度への感度は波長とともに増し、L バンドは残った樹冠を透過するため
                森林でより一貫して応答することを示しました。Imperatore et al.（2017）は Sentinel-1 で、火災後の後方散乱の低下が
                VH と密な植生で最も明瞭であることを確認しています。
              </>
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={th}>{en ? "Land cover" : "土地被覆"}</th>
                  <th className={th}>{en ? "Typical VH change" : "VH の典型的な変化"}</th>
                  <th className={th}>{en ? "Typical VV change" : "VV の典型的な変化"}</th>
                  <th className={th}>{en ? "Confounders" : "紛らわしい要因"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdHead}>{en ? "Dense forest" : "密な森林"}</td>
                  <td className={td}>{en ? "Decrease, often 2–4 dB" : "低下、多くは 2〜4 dB"}</td>
                  <td className={td}>{en ? "Small decrease" : "わずかに低下"}</td>
                  <td className={td}>{en ? "Logging, wind damage" : "伐採、風倒"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "Shrub / savanna" : "灌木・サバンナ"}</td>
                  <td className={td}>{en ? "Decrease, 1–3 dB" : "低下、1〜3 dB"}</td>
                  <td className={td}>{en ? "Variable" : "まちまち"}</td>
                  <td className={td}>{en ? "Seasonal senescence, grazing" : "季節的な枯死、放牧"}</td>
                </tr>
                <tr>
                  <td className={tdHead}>{en ? "Cropland" : "農地"}</td>
                  <td className={td}>{en ? "Decrease" : "低下"}</td>
                  <td className={td}>{en ? "Decrease or increase" : "低下または上昇"}</td>
                  <td className={td}>{en ? "Harvest, ploughing, flooding of paddies" : "収穫、耕起、水田の湛水"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "Peat swamp" : "泥炭湿地林"}</td>
                  <td className={td}>{en ? "Decrease where canopy lost" : "樹冠が失われた場所で低下"}</td>
                  <td className={td}>{en ? "Increase if water table exposed" : "水面が露出すると上昇することも"}</td>
                  <td className={td}>{en ? "Post-fire flooding, drainage canals" : "火災後の浸水、排水路"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "Magnitudes are indicative, compiled from the studies cited in this section; the sign of the VV change in particular is site-dependent."
              : "値は本節で引用した研究に基づく目安。特に VV の変化の符号は地点依存が強い。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* 5 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "5. Multi-temporal change detection with Sentinel-1" : "5. Sentinel-1 による多時期変化検出"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                A single pre/post image pair is a poor basis for SAR change
                detection: speckle alone produces pixel-to-pixel variations of
                several decibels, and a rain shower before one acquisition
                shifts the whole scene. The standard remedy is to work with{" "}
                <strong className="text-foreground">stacks</strong>. A pre-fire
                reference is built from the temporal mean (or median) of all
                acquisitions over several months before the season, in decibels,
                from a single relative orbit so that incidence geometry is
                constant; a post-fire composite is built the same way from the
                acquisitions after the fire. Their difference,
              </>
            ) : (
              <>
                火災前後 1 対の画像だけでは SAR 変化検出の土台として不十分です。スペックルだけで画素ごとに数 dB の変動が生じ、
                一方の撮像の前に雨が降ればシーン全体がずれます。標準的な対策は
                <strong className="text-foreground">スタック</strong>
                を使うことです。火災前の基準は、シーズン前の数か月間のすべての撮像の時間平均（または中央値）を dB で、入射幾何を
                一定に保つために単一の相対軌道から作ります。火災後の合成画像も同じ方法で火災後の撮像から作ります。その差分
              </>
            )}
          </p>
          <MathBlock
            tex={String.raw`\Delta\sigma^0_{\mathrm{VH}} = \overline{\sigma^0_{\mathrm{VH,post}}}\,[\mathrm{dB}] - \overline{\sigma^0_{\mathrm{VH,pre}}}\,[\mathrm{dB}]`}
          />
          <p className="mb-3 text-muted">
            {en ? (
              <>
                is then thresholded, with the threshold chosen either from the
                distribution of the difference itself (e.g. Otsu or a
                multiple of the pre-fire standard deviation) or from reference
                data. Lohberger et al. (2018) applied this approach to the 2015
                Indonesian fires, combining Sentinel-1 backscatter change with a
                random-forest classifier to map 4.6 million hectares of
                fire-affected land and estimate carbon emissions, and showed
                that the SAR estimate was far less affected by haze than the
                optical products available at the time. Belenguer-Plomer et al.
                (2019) built a Sentinel-1 burned-area algorithm that uses
                thermal anomalies to seed the search and backscatter change to
                delineate the perimeter, and quantified how much detection
                depends on land cover and on soil-moisture noise. Ban et al.
                (2020) trained a convolutional network on Sentinel-1 time series
                to follow wildfire progression in near real time, demonstrating
                that the temporal dimension carries most of the discriminative
                information. Verhegghen et al. (2016) showed the complementarity
                of Sentinel-1 and Sentinel-2 for burned-area mapping in the
                Congo Basin, where cloud cover is persistent.
              </>
            ) : (
              <>
                に閾値を適用します。閾値は差分自体の分布（Otsu 法や火災前の標準偏差の倍数など）か、参照データから決めます。
                Lohberger et al.（2018）はこの手法を 2015 年のインドネシアの火災に適用し、Sentinel-1 の後方散乱変化と
                ランダムフォレスト分類器を組み合わせて 460 万 ha の火災影響地を地図化し炭素排出量を推定したうえで、SAR による
                推定が当時の光学プロダクトに比べて煙霧の影響をはるかに受けにくいことを示しました。Belenguer-Plomer et al.
                （2019）は、熱異常で探索の種をまき、後方散乱変化で境界を描く Sentinel-1 焼失域アルゴリズムを構築し、検出が
                土地被覆と土壌水分ノイズにどれだけ依存するかを定量化しました。Ban et al.（2020）は Sentinel-1 時系列で畳み込み
                ネットワークを学習させ、山火事の進展を準リアルタイムで追跡し、識別情報の大半が時間方向にあることを示しました。
                Verhegghen et al.（2016）は雲が持続するコンゴ盆地で、焼失域地図化における Sentinel-1 と Sentinel-2 の相補性を
                示しています。
              </>
            )}
          </p>
          <p className="text-muted">
            {en ? (
              <>
                Several design choices recur across these studies. Working in
                decibels makes the change roughly additive and symmetric.
                Multilooking or spatial filtering before differencing trades
                resolution for a usable signal-to-noise ratio — a 50&ndash;100
                m product that is right is more useful than a 10 m product that is
                noise. Requiring the decrease to{" "}
                <strong className="text-foreground">persist</strong> over two
                or more post-fire acquisitions removes most of the false alarms
                caused by a single wet or dry scene. And a minimum mapping unit
                of a few hectares removes isolated speckle survivors without
                losing real fire scars, which are rarely smaller.
              </>
            ) : (
              <>
                これらの研究には繰り返し現れる設計上の選択があります。dB で扱うことで変化はほぼ加法的かつ対称になります。
                差分の前にマルチルックや空間フィルタをかけることは、使える信号雑音比のために解像度を犠牲にするということで、
                正しい 50〜100 m のプロダクトはノイズの 10 m プロダクトより有用です。低下が火災後の 2 回以上の撮像にわたって
                <strong className="text-foreground">持続すること</strong>
                を要求すれば、1 枚の湿った、または乾いたシーンによる誤警報の大半が除けます。そして数 ha の最小地図化単位を
                設ければ、孤立したスペックルの生き残りを、それより小さいことがまれな実際の焼け跡を失わずに除去できます。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* 6 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "6. Optical and SAR compared" : "6. 光学と SAR の比較"}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={th}>{en ? "Aspect" : "観点"}</th>
                  <th className={th}>{en ? "Optical (dNBR, Sentinel-2 / Landsat)" : "光学（dNBR、Sentinel-2／Landsat）"}</th>
                  <th className={th}>{en ? "C-band SAR (Sentinel-1 backscatter change)" : "C バンド SAR（Sentinel-1 後方散乱変化）"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdHead}>{en ? "Cloud and smoke" : "雲・煙霧"}</td>
                  <td className={td}>{en ? "Blocked; weeks of delay in the tropics" : "遮られる。熱帯では数週間の遅れ"}</td>
                  <td className={td}>{en ? "Unaffected" : "影響なし"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "Physical signal" : "物理的な信号"}</td>
                  <td className={td}>{en ? "Loss of chlorophyll and leaf water; char" : "クロロフィルと葉の水分の喪失、炭化"}</td>
                  <td className={td}>{en ? "Loss of volume scatterers; soil exposure and moisture" : "体積散乱体の喪失、土壌の露出と水分"}</td>
                </tr>
                <tr>
                  <td className={tdHead}>{en ? "Burn severity" : "燃焼強度"}</td>
                  <td className={td}>{en ? "Well established (dNBR / RdNBR classes)" : "確立している（dNBR／RdNBR の区分）"}</td>
                  <td className={td}>{en ? "Weak at C-band; better at L-band" : "C バンドでは弱く、L バンドの方が良い"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "Low-biomass fires (grassland, peat surface)" : "低バイオマスの火災（草地、泥炭表面）"}</td>
                  <td className={td}>{en ? "Detectable if seen before regrowth" : "再生前に見られれば検出可能"}</td>
                  <td className={td}>{en ? "Weak signal; easily confused with moisture change" : "信号が弱く、水分変化と混同しやすい"}</td>
                </tr>
                <tr>
                  <td className={tdHead}>{en ? "False alarms" : "誤警報"}</td>
                  <td className={td}>{en ? "Cloud shadow, harvest, drought browning" : "雲の影、収穫、乾燥による褐変"}</td>
                  <td className={td}>{en ? "Rain, flooding, harvest, logging" : "降雨、浸水、収穫、伐採"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={tdHead}>{en ? "Latency" : "即時性"}</td>
                  <td className={td}>{en ? "Next clear scene (unpredictable)" : "次のクリアなシーンまで（予測不能）"}</td>
                  <td className={td}>{en ? "Next pass: 6–12 days per orbit, more with both orbits" : "次の通過まで。軌道あたり 6〜12 日、両軌道でより頻繁"}</td>
                </tr>
                <tr>
                  <td className={tdHead}>{en ? "Resolution of a reliable product" : "信頼できるプロダクトの解像度"}</td>
                  <td className={td}>20&ndash;30 m</td>
                  <td className={td}>{en ? "50–100 m after multilooking" : "マルチルック後で 50〜100 m"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* 7 */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "7. An operational workflow for the tropics" : "7. 熱帯向けの運用ワークフロー"}
          </h2>
          <p className="mb-3 text-muted">
            {en
              ? "The methods above are complementary rather than competing, and a monitoring system for a fire-prone region is best built as a sequence:"
              : "上記の手法は競合ではなく補完関係にあり、火災多発地域の監視システムは次のような順序で組むのが最善です。"}
          </p>
          <ol className="ml-4 list-decimal space-y-2 text-muted">
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Hotspots define the search area.</strong>{" "}
                  Daily VIIRS and MODIS detections, aggregated over the season
                  and buffered by a few kilometres, delimit where burned area
                  can plausibly exist. This suppresses SAR false alarms far from
                  any fire and focuses computation.
                </>
              ) : (
                <>
                  <strong className="text-foreground">ホットスポットで探索範囲を決める。</strong>
                  VIIRS と MODIS の日次検知をシーズンにわたって集約し、数 km のバッファを付けて、焼失域が存在しうる範囲を限定します。
                  これにより火災から遠い SAR の誤警報を抑え、計算も集中できます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">SAR change gives the first map.</strong>{" "}
                  Within that area, the persistent decrease in multilooked VH
                  backscatter relative to a pre-season reference provides a
                  burned-area estimate within days of the fire, independent of
                  haze. Google Earth Engine hosts the analysis-ready Sentinel-1
                  GRD archive, which makes a basin- or province-scale product
                  feasible without downloading data.
                </>
              ) : (
                <>
                  <strong className="text-foreground">SAR の変化で最初の地図を作る。</strong>
                  その範囲内で、シーズン前の基準に対するマルチルック済み VH 後方散乱の持続的な低下が、煙霧に左右されず
                  火災から数日以内に焼失域の推定を与えます。Google Earth Engine には解析可能な Sentinel-1 GRD アーカイブが
                  あり、データをダウンロードせずに流域・州スケールのプロダクトを作れます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Optical confirms and grades.</strong>{" "}
                  When the first clear Sentinel-2 or Landsat scenes arrive, dNBR
                  confirms the perimeter, corrects omissions in low-biomass
                  areas and adds burn severity. Disagreements between the two
                  maps are themselves informative: SAR-only patches often
                  indicate harvest or flooding, optical-only patches indicate
                  light surface fires the radar missed.
                </>
              ) : (
                <>
                  <strong className="text-foreground">光学で確認し、強度を付ける。</strong>
                  最初のクリアな Sentinel-2 や Landsat のシーンが得られたら、dNBR で境界を確認し、低バイオマス域の見逃しを
                  補い、燃焼強度を加えます。2 つの地図の不一致自体が情報です。SAR だけが示す区画はしばしば収穫や浸水を、
                  光学だけが示す区画はレーダーが見逃した軽い表面火災を示します。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">L-band as an independent check.</strong>{" "}
                  Where ALOS-2 PALSAR-2 ScanSAR acquisitions exist, their
                  stronger sensitivity to canopy loss provides a cross-check for
                  forest fires, though at a lower revisit frequency.
                </>
              ) : (
                <>
                  <strong className="text-foreground">L バンドで独立に裏を取る。</strong>
                  ALOS-2 PALSAR-2 の ScanSAR 観測がある場所では、樹冠喪失へのより強い感度が森林火災の裏取りになります。
                  ただし再訪頻度は低くなります。
                </>
              )}
            </li>
          </ol>
          <p className="mt-4 text-muted">
            {en ? (
              <>
                Whatever the sensor, the result should be reported with its
                limits attached: the resolution after filtering, the land covers
                in which detection is unreliable, and whether the figure is a
                first estimate or a confirmed one. For a discussion of how
                SAR-derived extents feed into damage estimation, see the earlier
                posts on{" "}
                <Link href="/blog/sar-flood-mapping" className="text-highlight hover:underline">
                  SAR flood mapping
                </Link>{" "}
                and{" "}
                <Link href="/blog/flood-direct-damage" className="text-highlight hover:underline">
                  satellite-based direct damage assessment
                </Link>
                ; the same logic applies to fire once the burned area is known.
              </>
            ) : (
              <>
                どのセンサーを使うにせよ、結果はその限界——フィルタ後の解像度、検出が信頼できない土地被覆、その数字が第一報か
                確認済みか——を添えて報告すべきです。SAR 由来の範囲が被害推定にどうつながるかについては、過去記事の
                <Link href="/blog/sar-flood-mapping" className="text-highlight hover:underline">
                  SAR 洪水マッピング
                </Link>
                と
                <Link href="/blog/flood-direct-damage" className="text-highlight hover:underline">
                  衛星による直接被害評価
                </Link>
                を参照してください。焼失域が分かれば、同じ論理が火災にも当てはまります。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* References */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Ban, Y., Zhang, P., Nascetti, A., Bevington, A. R., &amp; Wulder, M. A. (2020). Near real-time wildfire progression monitoring with Sentinel-1 SAR time series and deep learning.{" "}
              <em>Scientific Reports</em>, 10, 1322.
            </li>
            <li>
              Belenguer-Plomer, M. A., Tanase, M. A., Fernandez-Carrillo, A., &amp; Chuvieco, E. (2019). Burned area detection and mapping using Sentinel-1 backscatter coefficient and thermal anomalies.{" "}
              <em>Remote Sensing of Environment</em>, 233, 111345.
            </li>
            <li>
              Chuvieco, E., et al. (2019). Historical background and current developments for mapping burned area from satellite Earth observation.{" "}
              <em>Remote Sensing of Environment</em>, 225, 45&ndash;64.
            </li>
            <li>
              Gaveau, D. L. A., Descals, A., Salim, M. A., Sheil, D., &amp; Sloan, S. (2021). Refined burned-area mapping protocol using Sentinel-2 data increases estimate of 2019 Indonesian burning.{" "}
              <em>Earth System Science Data</em>, 13(11), 5353&ndash;5368.
            </li>
            <li>
              Giglio, L., Schroeder, W., &amp; Justice, C. O. (2016). The Collection 6 MODIS active fire detection algorithm and fire products.{" "}
              <em>Remote Sensing of Environment</em>, 178, 31&ndash;41.
            </li>
            <li>
              Giglio, L., Boschetti, L., Roy, D. P., Humber, M. L., &amp; Justice, C. O. (2018). The Collection 6 MODIS burned area mapping algorithm and product.{" "}
              <em>Remote Sensing of Environment</em>, 217, 72&ndash;85.
            </li>
            <li>
              Imperatore, P., Azar, R., Calo, F., Stroppiana, D., Brivio, P. A., Lanari, R., &amp; Pepe, A. (2017). Effect of the vegetation fire on backscattering: An investigation based on Sentinel-1 observations.{" "}
              <em>IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing</em>, 10(10), 4478&ndash;4492.
            </li>
            <li>
              Key, C. H., &amp; Benson, N. C. (2006). Landscape Assessment: Ground measure of severity, the Composite Burn Index; and remote sensing of severity, the Normalized Burn Ratio. In D. C. Lutes et al. (Eds.),{" "}
              <em>FIREMON: Fire Effects Monitoring and Inventory System</em>. USDA Forest Service General Technical Report RMRS-GTR-164-CD.
            </li>
            <li>
              Lizundia-Loiola, J., Otón, G., Ramo, R., &amp; Chuvieco, E. (2020). A spatio-temporal active-fire clustering approach for global burned area mapping at 250 m from MODIS data.{" "}
              <em>Remote Sensing of Environment</em>, 236, 111493.
            </li>
            <li>
              Lohberger, S., Stängel, M., Atwood, E. C., &amp; Siegert, F. (2018). Spatial evaluation of Indonesia&rsquo;s 2015 fire-affected area and estimated carbon emissions using Sentinel-1.{" "}
              <em>Global Change Biology</em>, 24(2), 644&ndash;654.
            </li>
            <li>
              Miller, J. D., &amp; Thode, A. E. (2007). Quantifying burn severity in a heterogeneous landscape with a relative version of the delta Normalized Burn Ratio (dNBR).{" "}
              <em>Remote Sensing of Environment</em>, 109(1), 66&ndash;80.
            </li>
            <li>
              Roy, D. P., Huang, H., Boschetti, L., Giglio, L., Yan, L., Zhang, H. H., &amp; Li, Z. (2019). Landsat-8 and Sentinel-2 burned area mapping &mdash; A combined sensor multi-temporal change detection approach.{" "}
              <em>Remote Sensing of Environment</em>, 231, 111254.
            </li>
            <li>
              Schroeder, W., Oliva, P., Giglio, L., &amp; Csiszar, I. A. (2014). The New VIIRS 375 m active fire detection data product: Algorithm description and initial assessment.{" "}
              <em>Remote Sensing of Environment</em>, 143, 85&ndash;96.
            </li>
            <li>
              Tanase, M. A., Santoro, M., de la Riva, J., Pérez-Cabello, F., &amp; Le Toan, T. (2010). Sensitivity of X-, C-, and L-band SAR backscatter to burn severity in Mediterranean pine forests.{" "}
              <em>IEEE Transactions on Geoscience and Remote Sensing</em>, 48(10), 3663&ndash;3675.
            </li>
            <li>
              Verhegghen, A., Eva, H., Ceccherini, G., Achard, F., Gond, V., Gourlet-Fleury, S., &amp; Cerutti, P. O. (2016). The potential of Sentinel satellites for burnt area mapping and monitoring in the Congo Basin forests.{" "}
              <em>Remote Sensing</em>, 8(12), 986.
            </li>
          </ol>
        </section>
      </article>
    </div>
  );
}
