"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

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
            2026-06-14
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "WMO Region V (South-West Pacific) — Early Warning Projects and Challenges Analysis"
              : "WMO第5地域（南西太平洋）の早期警報プロジェクトと課題分析"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "A comprehensive review of early warning systems, capacity development programs, and multi-hazard initiatives across WMO Regional Association V — covering SWFDP, CREWS, tropical cyclone and tsunami warning systems, flood early warning, climate services, observation networks, and future outlook toward EW4All 2027 targets."
              : "WMO第5地域（RA V）における早期警報システム、能力開発プログラム、マルチハザード・イニシアティブの包括的レビュー。SWFDP、CREWS、熱帯低気圧・津波警報体制、洪水早期警報、気候サービス、観測ネットワーク、EW4All 2027年目標に向けた今後の展望までを網羅。"}
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">

        {/* ── 1. WMO Region V Overview ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "1. WMO Region V Overview" : "1. WMO第5地域の概要"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                <strong className="text-foreground">Regional Association V (RA V): South-West Pacific</strong> is
                one of six WMO Regional Associations, covering one of the most geographically diverse and
                hazard-prone areas on Earth. Its domain extends from the maritime continent of Indonesia in
                the west to the scattered atolls of French Polynesia in the east, and from the equator
                southward to New Zealand and the sub-Antarctic islands.
              </>
            ) : (
              <>
                <strong className="text-foreground">第5地域協会（RA V）：南西太平洋</strong>は、
                WMOの6つの地域協会の一つであり、地理的に最も多様でハザードが多い地域の一つを管轄しています。
                その領域は西のインドネシア海洋大陸から東のフランス領ポリネシアの散在する環礁まで、
                また赤道から南のニュージーランドおよび亜南極諸島まで広がっています。
              </>
            )}
          </p>
          <p className="mt-3 text-muted">
            {en ? (
              <>
                The region faces a <strong className="text-foreground">diverse hazard landscape</strong>:
                tropical cyclones in the South Pacific and Australian basins, monsoon flooding across
                Indonesia and Papua New Guinea, volcanic ash from the Pacific Ring of Fire, tsunami risks
                from major subduction zones, prolonged droughts driven by ENSO cycles, and rising sea
                levels threatening low-lying atoll nations. The combination of vast ocean distances, small
                island populations, and limited institutional capacity makes early warning a critical
                yet challenging priority.
              </>
            ) : (
              <>
                この地域は<strong className="text-foreground">多様なハザード</strong>に直面しています：
                南太平洋およびオーストラリア海盆での熱帯低気圧、インドネシアやパプアニューギニアでのモンスーン洪水、
                環太平洋火山帯からの火山灰、主要沈み込み帯からの津波リスク、
                ENSOサイクルによる長期干ばつ、そして低地環礁国を脅かす海面上昇。
                広大な海洋距離、小さな島嶼人口、限られた制度的能力の組み合わせにより、
                早期警報は重要でありながら困難な優先課題となっています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Member States and Territories" : "加盟国・地域"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Country / Territory" : "国・地域"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "NMHS" : "国家気象水文機関"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Key Hazards" : "主要ハザード"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {([
                  [en ? "Australia" : "オーストラリア", "Bureau of Meteorology (BoM)", en ? "TC, drought, bushfire, flood" : "TC、干ばつ、森林火災、洪水"],
                  [en ? "New Zealand" : "ニュージーランド", "MetService NZ / NIWA", en ? "TC, flood, earthquake, volcanic ash" : "TC、洪水、地震、火山灰"],
                  [en ? "Indonesia" : "インドネシア", "BMKG", en ? "Flood, earthquake, tsunami, volcanic ash" : "洪水、地震、津波、火山灰"],
                  [en ? "Papua New Guinea" : "パプアニューギニア", "PNG NWS", en ? "Flood, volcanic ash, TC, tsunami" : "洪水、火山灰、TC、津波"],
                  [en ? "Fiji" : "フィジー", "Fiji Meteorological Service (FMS)", en ? "TC, flood, drought" : "TC、洪水、干ばつ"],
                  [en ? "Samoa" : "サモア", "Samoa Meteorology Division", en ? "TC, flood, tsunami" : "TC、洪水、津波"],
                  [en ? "Tonga" : "トンガ", "Tonga Meteorological Service", en ? "TC, tsunami, volcanic ash" : "TC、津波、火山灰"],
                  [en ? "Vanuatu" : "バヌアツ", "Vanuatu Meteorology and Geo-Hazards Dept.", en ? "TC, volcanic ash, flood" : "TC、火山灰、洪水"],
                  [en ? "Solomon Islands" : "ソロモン諸島", "Solomon Islands Meteorological Service", en ? "TC, flood, tsunami" : "TC、洪水、津波"],
                  [en ? "Kiribati" : "キリバス", "Kiribati Meteorological Service", en ? "Drought, sea level rise, storm surge" : "干ばつ、海面上昇、高潮"],
                  [en ? "Tuvalu" : "ツバル", "Tuvalu Meteorological Service", en ? "Sea level rise, TC, drought" : "海面上昇、TC、干ばつ"],
                  [en ? "Marshall Islands" : "マーシャル諸島", "RMI Weather Service Office", en ? "Drought, sea level rise, TC" : "干ばつ、海面上昇、TC"],
                  [en ? "Micronesia (FSM)" : "ミクロネシア連邦", "FSM Weather Service Office", en ? "TC, flood, drought" : "TC、洪水、干ばつ"],
                  [en ? "Palau" : "パラオ", "Palau Weather Service Office", en ? "TC, flood" : "TC、洪水"],
                  [en ? "Nauru" : "ナウル", "Nauru Meteorological Service", en ? "Drought, sea level rise" : "干ばつ、海面上昇"],
                  [en ? "Niue" : "ニウエ", "Niue Meteorological Service", en ? "TC, drought" : "TC、干ばつ"],
                  [en ? "Cook Islands" : "クック諸島", "Cook Islands Meteorological Service", en ? "TC, flood, drought" : "TC、洪水、干ばつ"],
                  [en ? "French Polynesia" : "フランス領ポリネシア", "Météo-France (Tahiti)", en ? "TC, flood, sea level rise" : "TC、洪水、海面上昇"],
                  [en ? "New Caledonia" : "ニューカレドニア", "Météo-France (Nouméa)", en ? "TC, flood, drought" : "TC、洪水、干ばつ"],
                  [en ? "Brunei" : "ブルネイ", "Brunei Darussalam Met. Dept.", en ? "Flood, haze" : "洪水、煙霧"],
                  [en ? "Malaysia" : "マレーシア", "Malaysian Meteorological Dept. (MetMalaysia)", en ? "Flood, monsoon, haze" : "洪水、モンスーン、煙霧"],
                  [en ? "Singapore" : "シンガポール", "Meteorological Service Singapore (MSS)", en ? "Flood, haze" : "洪水、煙霧"],
                  [en ? "Timor-Leste" : "東ティモール", "Timor-Leste Met. Service", en ? "Flood, drought" : "洪水、干ばつ"],
                ] as string[][]).map(([country, nmhs, hazards], i) => (
                  <tr key={country} className={i % 2 !== 0 ? "bg-accent-light/50" : ""}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{country}</td>
                    <td className="border border-border px-3 py-2 text-muted">{nmhs}</td>
                    <td className="border border-border px-3 py-2 text-muted">{hazards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-muted">
            {en
              ? "TC = Tropical Cyclone. Many Pacific Island NMHS operate with fewer than 10 professional staff, making external support frameworks essential for maintaining warning services."
              : "TC = 熱帯低気圧。多くの太平洋島嶼国のNMHSは10人未満の専門スタッフで運営されており、警報サービスの維持には外部支援の枠組みが不可欠です。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 2. SWFDP ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "2. SWFDP — Severe Weather Forecasting Demonstration Project" : "2. SWFDP — 悪天候予報実証プロジェクト"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The <strong className="text-foreground">Severe Weather Forecasting Demonstration Project (SWFDP)</strong> is
                a WMO-led initiative that bridges the gap between global NWP products from Global
                Producing Centres (GPCs) and the operational warning services of developing-country NMHSs.
                Its core principle is a <strong className="text-foreground">cascading forecast process</strong>:
                global centres produce guidance, regional centres (RSMCs) add regional expertise and
                interpretation, and national services issue public warnings tailored to local contexts.
              </>
            ) : (
              <>
                <strong className="text-foreground">悪天候予報実証プロジェクト（SWFDP）</strong>は、
                全球生産センター（GPC）のNWPプロダクトと開発途上国NMHSの実運用警報サービスとの
                ギャップを埋めるWMO主導のイニシアティブです。
                その核心的原則は<strong className="text-foreground">カスケード予報プロセス</strong>です：
                全球センターがガイダンスを生成し、地域センター（RSMC）が地域的な専門知識と解釈を加え、
                各国の気象機関が地域の文脈に合わせた公共警報を発表します。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "SWFDP-Pacific Islands" : "SWFDP太平洋島嶼"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                SWFDP-Pacific Islands was launched in 2009 and has undergone multiple implementation
                phases. The lead RSMC is <strong className="text-foreground">RSMC Wellington (MetService
                New Zealand)</strong>, supported by the Bureau of Meteorology (BoM) Australia.
                The project delivers severe weather guidance products including heavy rainfall, damaging
                winds, and high seas forecasts out to 5 days, as well as tropical cyclone guidance for
                the Southwest Pacific basin.
              </>
            ) : (
              <>
                SWFDP太平洋島嶼は2009年に開始され、複数の実施フェーズを経ています。
                リードRSMCは<strong className="text-foreground">RSMCウェリントン（MetService NZ）</strong>で、
                オーストラリア気象局（BoM）がサポートしています。
                本プロジェクトは、大雨、暴風、高波の5日先までの悪天候ガイダンスプロダクト、
                および南西太平洋海盆の熱帯低気圧ガイダンスを提供しています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Cascading Forecast Process" : "カスケード予報プロセス"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Level" : "レベル"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Centre" : "センター"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Role" : "役割"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Global" : "全球"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    ECMWF, NCEP, UKMO, JMA, BoM
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Generate deterministic and ensemble NWP products, EPS probability charts"
                      : "決定論的・アンサンブルNWPプロダクト、EPS確率チャートの生成"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Regional" : "地域"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    RSMC Wellington, RSMC Nadi, BoM
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Synthesize global guidance into regional severe weather bulletins, add TC-specific guidance"
                      : "全球ガイダンスを地域悪天候速報に統合、TC固有ガイダンスの追加"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "National" : "各国"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Pacific Island NMHSs (Fiji, Samoa, Tonga, Vanuatu, etc.)"
                      : "太平洋島嶼国NMHS（フィジー、サモア、トンガ、バヌアツ等）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Issue localized public warnings, coordinate with NDMOs"
                      : "地域化された公共警報の発表、NDMOとの連携"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Training and Capacity Building" : "研修と能力構築"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                A critical component of SWFDP is the <strong className="text-foreground">training and
                capacity building</strong> delivered through annual workshops, online learning modules,
                and real-time mentoring during severe weather events. Forecasters from participating
                NMHSs receive training on interpreting NWP ensemble guidance, probabilistic
                forecasting, and warning communication. The program has measurably improved warning lead
                times across participating countries, with several Pacific NMHSs now issuing warnings
                24-48 hours ahead of severe weather events where previously no warnings were issued.
              </>
            ) : (
              <>
                SWFDPの重要な構成要素は、年次ワークショップ、オンライン学習モジュール、
                悪天候イベント時のリアルタイム指導を通じて提供される
                <strong className="text-foreground">研修と能力構築</strong>です。
                参加NMHSの予報官は、NWPアンサンブルガイダンスの解釈、確率予報、
                警報コミュニケーションに関する研修を受けています。
                このプログラムにより参加国の警報リードタイムは測定可能なほど改善され、
                以前は警報が発表されなかった場所で、複数の太平洋NMHSが悪天候の24〜48時間前に
                警報を発表できるようになりました。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "SWFDP-Southeast Asia Connections" : "SWFDP東南アジアとの連携"}
          </h3>
          <p className="text-muted">
            {en
              ? "SWFDP-Southeast Asia operates in parallel, with Indonesia (BMKG) and the Philippines (PAGASA) as key beneficiary NMHSs. The RSMC Tokyo (JMA) provides tropical cyclone guidance for this subregion. Cross-pollination between the Pacific Islands and Southeast Asia SWFDPs has strengthened the overall RA V early warning capacity, particularly for hazards that traverse both subregions such as tropical cyclones originating in the western Pacific."
              : "SWFDP東南アジアは並行して運営されており、インドネシア（BMKG）とフィリピン（PAGASA）が主要な受益NMHSです。RSMCトーキョー（JMA）がこのサブリージョンの熱帯低気圧ガイダンスを提供しています。太平洋島嶼と東南アジアのSWFDP間の相互交流は、特に西太平洋で発生し両サブリージョンを横断する熱帯低気圧など、RA V全体の早期警報能力を強化しています。"}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 3. CREWS Pacific SIDS ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "3. CREWS Pacific SIDS" : "3. CREWS太平洋プロジェクト"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The <strong className="text-foreground">Climate Risk and Early Warning Systems
                (CREWS)</strong> initiative is a multilateral partnership between the WMO, UNDRR
                (formerly UNISDR), and the World Bank, established at COP21 in Paris (2015). Its
                mission is to significantly increase the capacity for multi-hazard early warning
                in Least Developed Countries (LDCs) and Small Island Developing States (SIDS).
              </>
            ) : (
              <>
                <strong className="text-foreground">気候リスク・早期警報システム
                （CREWS）</strong>イニシアティブは、WMO、UNDRR（旧UNISDR）、世界銀行による
                多国間パートナーシップで、2015年のCOP21（パリ）で設立されました。
                その使命は、後発開発途上国（LDC）および小島嶼開発途上国（SIDS）における
                マルチハザード早期警報の能力を大幅に向上させることです。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "CREWS Pacific SIDS Project" : "CREWS太平洋SIDS プロジェクト"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                The CREWS Pacific SIDS project targets <strong className="text-foreground">13 Pacific
                Island countries</strong>: Cook Islands, Fiji, Kiribati, Marshall Islands, Micronesia
                (FSM), Nauru, Niue, Palau, Samoa, Solomon Islands, Tonga, Tuvalu, and Vanuatu.
                With a budget of approximately USD 5 million in Phase 1, the project is implemented
                through the WMO Secretariat in partnership with SPREP (Secretariat of the Pacific
                Regional Environment Programme).
              </>
            ) : (
              <>
                CREWS太平洋SIDSプロジェクトは<strong className="text-foreground">太平洋島嶼13か国</strong>を
                対象としています：クック諸島、フィジー、キリバス、マーシャル諸島、ミクロネシア連邦、
                ナウル、ニウエ、パラオ、サモア、ソロモン諸島、トンガ、ツバル、バヌアツ。
                フェーズ1の予算は約500万米ドルで、WMO事務局がSPREP（太平洋地域環境計画事務局）と
                連携して実施しています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Project Components" : "プロジェクト構成要素"}
          </h3>
          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Component 1: Institutional Strengthening" : "構成要素1：制度強化"}
              </p>
              <p className="text-muted">
                {en
                  ? "Support for national policy and legislative frameworks for meteorological services, development of Standard Operating Procedures (SOPs) for warning issuance, and strengthening coordination between NMHSs and National Disaster Management Offices (NDMOs)."
                  : "気象サービスに関する国家政策・法的枠組みの支援、警報発表のための標準業務手順書（SOP）の策定、NMHSと国家災害管理事務所（NDMO）間の連携強化。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Component 2: Observation Networks" : "構成要素2：観測ネットワーク"}
              </p>
              <p className="text-muted">
                {en
                  ? "Procurement and installation of Automatic Weather Stations (AWS), rain gauges, and tide gauges; establishment of maintenance and calibration protocols to ensure long-term sustainability of observation infrastructure."
                  : "自動気象観測装置（AWS）、雨量計、潮位計の調達・設置、長期的な観測インフラの持続可能性を確保するための保守・校正プロトコルの策定。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Component 3: Service Delivery" : "構成要素3：サービス提供"}
              </p>
              <p className="text-muted">
                {en
                  ? "Development of impact-based warning products, community outreach and public education programs, mobile-based dissemination systems, and integration of traditional knowledge with modern forecasting."
                  : "インパクトベース警報プロダクトの開発、コミュニティへのアウトリーチと公衆教育プログラム、モバイルベースの情報伝達システム、伝統的知識と現代予報の統合。"}
              </p>
            </div>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Achievements and Challenges" : "成果と課題"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                Key achievements include the deployment of AWS networks in Tonga, Samoa, and Vanuatu,
                development of national multi-hazard warning SOPs, and training of over 100 forecasters.
                However, <strong className="text-foreground">significant challenges persist</strong>:
                equipment maintenance in remote island locations, recurring costs for communication
                infrastructure (satellite data links), and the difficulty of retaining trained staff
                in small NMHSs where salaries are not competitive. Phase 2 development is underway,
                focusing on scaling successful pilots and deepening integration with national disaster
                risk management frameworks.
              </>
            ) : (
              <>
                主な成果には、トンガ、サモア、バヌアツでのAWSネットワークの展開、
                国家マルチハザード警報SOPの策定、100名以上の予報官の研修が含まれます。
                しかし、<strong className="text-foreground">重大な課題が依然として残っています</strong>：
                遠隔島嶼地域での機器保守、通信インフラ（衛星データリンク）の経常コスト、
                給与が競争力を持たない小規模NMHSにおける研修済みスタッフの定着困難。
                フェーズ2の開発が進行中で、成功したパイロットのスケールアップと
                国家防災リスク管理枠組みとのより深い統合に焦点を当てています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 4. Tropical Cyclone Warning System ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "4. Tropical Cyclone Warning System" : "4. 熱帯低気圧警報体制"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                Tropical cyclone (TC) warning in the South-West Pacific is managed through
                a <strong className="text-foreground">coordinated system of RSMCs and TCWCs</strong> under
                the WMO Tropical Cyclone Programme. Three centres share responsibility for the region:
              </>
            ) : (
              <>
                南西太平洋における熱帯低気圧（TC）警報は、WMO熱帯低気圧プログラムの下、
                <strong className="text-foreground">RSMCとTCWCの調整されたシステム</strong>を
                通じて管理されています。3つのセンターが地域の責任を分担しています：
              </>
            )}
          </p>

          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Centre" : "センター"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Operating Agency" : "運用機関"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Area of Responsibility" : "責任区域"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Products" : "プロダクト"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    RSMC Nadi
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Fiji Meteorological Service" : "フィジー気象局"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Southwest Pacific (160°E–120°W, EQ–25°S)" : "南西太平洋（160°E–120°W, 赤道〜25°S）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "TC advisories, track forecasts, naming" : "TCアドバイザリー、経路予報、命名"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    TCWC Brisbane
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Bureau of Meteorology (BoM)" : "オーストラリア気象局（BoM）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Australian region (90°E–160°E)" : "オーストラリア地域（90°E–160°E）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "TC warnings, storm surge forecasts" : "TC警報、高潮予報"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    TCWC Wellington
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    MetService NZ
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "New Zealand region (south of 25°S)" : "ニュージーランド地域（25°S以南）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "TC warnings for NZ and territories" : "NZおよび領土向けTC警報"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "TC Naming and Warning Dissemination" : "TC命名と警報伝達"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                Tropical cyclones in the Southwest Pacific basin are named by RSMC Nadi from a rotating
                list maintained by the WMO/ESCAP Panel on Tropical Cyclones. The naming convention uses
                names contributed by member countries in the region. Warning dissemination relies on a
                multi-channel approach including <strong className="text-foreground">HF radio, VHF
                marine broadcasts, satellite-based EMWIN, mobile SMS alerts, and increasingly social
                media platforms</strong>. The challenge of reaching remote outer islands where
                telecommunications infrastructure is limited remains a critical gap.
              </>
            ) : (
              <>
                南西太平洋海盆の熱帯低気圧はRSMC Nadiが命名し、
                WMO/ESCAP熱帯低気圧パネルが管理するローテーションリストを使用します。
                命名規則は地域の加盟国が提供した名前を使用しています。
                警報の伝達は<strong className="text-foreground">HF無線、VHF海上放送、
                衛星ベースのEMWIN、モバイルSMSアラート、そして次第にソーシャルメディア
                プラットフォーム</strong>を含む多チャネルアプローチに依存しています。
                通信インフラが限られている遠隔離島への到達は依然として重要な課題です。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "TC Track Forecasting Improvements" : "TC経路予報の改善"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                Significant advances in TC track forecasting have been achieved through
                <strong className="text-foreground"> high-resolution NWP models, ensemble prediction
                systems (EPS), and multi-model consensus techniques</strong>. BoM&apos;s ACCESS model
                and ECMWF&apos;s IFS ensemble provide the backbone of track guidance for the region.
                The consensus approach, which averages multiple model tracks weighted by recent
                performance, has consistently outperformed any single model. Track forecast errors
                have been reduced by approximately 50% over the past two decades, with 72-hour
                forecast accuracy now comparable to 48-hour accuracy from 10 years ago.
              </>
            ) : (
              <>
                TC経路予報は<strong className="text-foreground">高解像度NWPモデル、
                アンサンブル予測システム（EPS）、マルチモデルコンセンサス手法</strong>を
                通じて大幅な進歩を遂げています。BoMのACCESSモデルとECMWFのIFSアンサンブルが
                地域の経路ガイダンスの基盤を提供しています。
                最近のパフォーマンスで重み付けした複数モデルの経路を平均するコンセンサスアプローチは、
                一貫してどの単一モデルよりも優れています。
                経路予報誤差は過去20年間で約50%削減され、
                現在の72時間予報精度は10年前の48時間予報精度に匹敵します。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Case Studies" : "事例研究"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                <strong className="text-foreground">TC Harold (April 2020)</strong> was a Category 5
                system that struck Vanuatu, Fiji, and Tonga in rapid succession, causing devastating
                damage coinciding with COVID-19 lockdowns. Despite the compounding challenge, RSMC
                Nadi issued timely warnings with 72-hour lead time. However, evacuation compliance
                was complicated by pandemic restrictions, highlighting the need for multi-hazard
                warning integration. <strong className="text-foreground">TC Yasa (December 2020)
                </strong> was another Category 5 cyclone that struck Fiji; improved warnings and
                pre-positioning of relief supplies were credited with keeping casualties relatively
                low despite extreme wind damage.
              </>
            ) : (
              <>
                <strong className="text-foreground">TC Harold（2020年4月）</strong>はカテゴリー5の
                サイクロンで、バヌアツ、フィジー、トンガを連続的に直撃し、
                COVID-19のロックダウンと同時に壊滅的な被害をもたらしました。
                この複合的な課題にもかかわらず、RSMC Nadiは72時間のリードタイムで
                適時に警報を発表しました。しかし、パンデミック制限により避難遵守が複雑化し、
                マルチハザード警報統合の必要性が浮き彫りになりました。
                <strong className="text-foreground">TC Yasa（2020年12月）</strong>もフィジーを
                直撃したカテゴリー5のサイクロンでしたが、改善された警報と救援物資の事前配置により、
                極端な風害にもかかわらず死傷者を比較的低く抑えることができたと評価されています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 5. Tsunami Early Warning ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "5. Tsunami Early Warning" : "5. 津波早期警報"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The Pacific Ocean hosts the world&apos;s most comprehensive tsunami warning
                infrastructure, coordinated through the <strong className="text-foreground">Pacific
                Tsunami Warning and Mitigation System (PTWS)</strong> under IOC/UNESCO.
              </>
            ) : (
              <>
                太平洋は世界で最も包括的な津波警報インフラを有しており、
                IOC/UNESCO傘下の<strong className="text-foreground">太平洋津波警報・軽減システム
                （PTWS）</strong>を通じて調整されています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Key Warning Centres" : "主要警報センター"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Centre" : "センター"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Location" : "所在地"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Role" : "役割"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    PTWC
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Ewa Beach, Hawaii (NOAA/NWS)" : "エヴァビーチ、ハワイ（NOAA/NWS）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Pacific-wide tsunami warnings; threat assessment for all Pacific rim nations"
                      : "太平洋全域の津波警報、環太平洋全国への脅威評価"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    NWPTAC
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Tokyo, Japan (JMA)" : "東京、日本（JMA）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Northwest Pacific tsunami advisories; rapid assessment for near-field events"
                      : "北西太平洋津波アドバイザリー、近地津波の迅速評価"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "National TWFPs" : "各国TWFP"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Each Pacific nation" : "太平洋各国"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Receive PTWC/NWPTAC products; issue national tsunami warnings"
                      : "PTWC/NWPTACプロダクトの受領、国家津波警報の発表"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "DART Buoy Network" : "DARTブイネットワーク"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                The <strong className="text-foreground">Deep-ocean Assessment and Reporting of Tsunamis
                (DART)</strong> buoy network provides real-time deep-ocean tsunami measurements that are
                critical for confirming tsunami generation and refining wave height forecasts. As of 2025,
                approximately 60 DART stations are operational across the Pacific, with coverage
                concentrated along the Pacific Rim subduction zones. However, gaps remain in the
                southwestern Pacific, particularly between Tonga and New Zealand, and around Papua New
                Guinea where the complex tectonic setting generates frequent local tsunamis.
              </>
            ) : (
              <>
                <strong className="text-foreground">深海津波評価・報告（DART）</strong>ブイ
                ネットワークは、津波の発生確認と波高予報の精緻化に不可欠な
                リアルタイムの深海津波計測を提供しています。2025年時点で約60基のDARTステーションが
                太平洋全域で運用されており、環太平洋沈み込み帯に沿って集中配置されています。
                しかし、南西太平洋、特にトンガ〜ニュージーランド間や、
                複雑なテクトニクス環境で頻繁に局所的津波が発生するパプアニューギニア周辺では
                ギャップが残っています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Community-Based Preparedness" : "コミュニティベースの備え"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                IOC/UNESCO conducts biennial <strong className="text-foreground">Pacific Wave
                exercises</strong> (PacWave) that simulate a major tsunami scenario and test
                communication chains from PTWC to national warning focal points and local
                communities. These exercises have been instrumental in identifying gaps in
                communication protocols, evacuation routes, and public awareness. Community-based
                tsunami preparedness programs, particularly in Samoa and the Solomon Islands following
                the devastating 2009 and 2007 tsunamis respectively, have established blue-line
                evacuation markers, community sirens, and school-based education programs.
              </>
            ) : (
              <>
                IOC/UNESCOは2年ごとに<strong className="text-foreground">Pacific Wave演習
                </strong>（PacWave）を実施し、大規模津波シナリオをシミュレーションして
                PTWCから各国警報フォーカルポイントおよび地域コミュニティまでの
                通信チェーンをテストしています。これらの演習は通信プロトコル、
                避難経路、公衆意識のギャップを特定する上で重要な役割を果たしています。
                特にサモア（2009年）とソロモン諸島（2007年）の壊滅的津波を受けた
                コミュニティベースの津波備えプログラムは、ブルーラインの避難標識、
                コミュニティサイレン、学校ベースの教育プログラムを整備しました。
              </>
            )}
          </p>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                The <strong className="text-foreground">Hunga Tonga-Hunga Ha&apos;apai volcanic eruption
                (January 2022)</strong> generated an unprecedented tsunami driven by atmospheric pressure
                waves rather than seafloor displacement, reaching coastlines across the entire Pacific
                basin. This event exposed a critical gap in tsunami warning systems, which were designed
                primarily for seismically generated tsunamis and had no established protocols for
                volcanically triggered atmospheric-wave tsunamis.
              </>
            ) : (
              <>
                <strong className="text-foreground">フンガトンガ・フンガハアパイ火山噴火
                （2022年1月）</strong>は海底変位ではなく大気圧波によって駆動される
                前例のない津波を発生させ、太平洋盆地全域の海岸線に到達しました。
                この事象は、主に地震性津波を想定して設計された津波警報システムの重大なギャップを
                露呈しました。火山起源の大気波動津波に対する確立されたプロトコルが
                存在していませんでした。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 6. Flood Early Warning Initiatives ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "6. Flood Early Warning Initiatives" : "6. 洪水早期警報の取り組み"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                Flood early warning in RA V faces unique challenges due to the region&apos;s
                <strong className="text-foreground"> extreme hydrological diversity</strong>:
                from the large river basins of Indonesia and Papua New Guinea to the tiny catchments
                of atoll nations where flash flooding is driven by short-duration intense rainfall
                over minimal drainage areas.
              </>
            ) : (
              <>
                RA Vにおける洪水早期警報は、この地域の
                <strong className="text-foreground">極端な水文学的多様性</strong>により
                独自の課題に直面しています：インドネシアやパプアニューギニアの大河川流域から、
                最小限の排水域に短時間の強雨がフラッシュフラッドを引き起こす環礁国の小さな集水域まで。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Flash Flood Guidance System (FFGS)" : "フラッシュフラッドガイダンスシステム（FFGS）"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                The WMO-supported <strong className="text-foreground">Flash Flood Guidance System
                (FFGS)</strong> computes threshold runoff values that, when exceeded by forecast or
                observed rainfall, indicate flash flood threat. Implementation in RA V has been
                limited compared to other WMO regions. Indonesia (BMKG) has piloted FFGS components,
                but full operational deployment across Pacific Island nations remains a significant
                gap due to the lack of hydrological data, soil moisture monitoring, and
                high-resolution terrain data needed for the system.
              </>
            ) : (
              <>
                WMO支援の<strong className="text-foreground">フラッシュフラッドガイダンスシステム
                （FFGS）</strong>は、予報または観測降雨が超過した場合にフラッシュフラッドの
                脅威を示す閾値流出量を計算します。RA Vでの実装は他のWMO地域と比較して限定的です。
                インドネシア（BMKG）はFFGSコンポーネントをパイロット運用していますが、
                太平洋島嶼国全体での完全な実運用展開は、システムに必要な水文データ、
                土壌水分モニタリング、高解像度地形データの不足により、
                依然として大きなギャップとなっています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Community-Based Flood EWS Examples" : "コミュニティベース洪水EWSの事例"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                In the absence of sophisticated hydrological forecasting infrastructure,
                <strong className="text-foreground"> community-based flood early warning systems
                </strong> have proven effective in several RA V countries. In Fiji, the Navua River
                community-based EWS uses upstream rain gauges and manual river level observations
                relayed by radio to provide 2-4 hours of warning for downstream communities. In
                Solomon Islands, similar systems on the Mataniko and Lungga rivers near Honiara
                have been established with support from JICA and the Red Cross.
              </>
            ) : (
              <>
                高度な水文予報インフラが不在の中、
                <strong className="text-foreground">コミュニティベースの洪水早期警報システム
                </strong>がRA Vの複数の国で効果を証明しています。フィジーでは、
                ナヴア川のコミュニティベースEWSが上流の雨量計と手動河川水位観測を
                無線で中継し、下流コミュニティに2〜4時間の警報を提供しています。
                ソロモン諸島では、ホニアラ近郊のマタニコ川とルンガ川で
                JICAと赤十字の支援により同様のシステムが構築されています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "JICA-Supported Projects" : "JICA支援プロジェクト"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                JICA (Japan International Cooperation Agency) has been a major partner in flood
                warning development across RA V. Notable projects include the{" "}
                <strong className="text-foreground">Flood Forecasting and Warning Project in the Solo
                River Basin, Indonesia</strong>, which established automated telemetry networks and
                forecast models, and the <strong className="text-foreground">Climate Change Adaptation
                Project in Pacific Islands</strong>, which supported installation of hydrological
                monitoring equipment and training in Fiji, Samoa, and Tonga.
              </>
            ) : (
              <>
                JICA（国際協力機構）はRA V全域の洪水警報開発における主要パートナーです。
                注目すべきプロジェクトには、自動テレメトリーネットワークと予報モデルを構築した
                <strong className="text-foreground">インドネシア・ソロ川流域洪水予報・警報
                プロジェクト</strong>、およびフィジー、サモア、トンガでの水文モニタリング機器の
                設置と研修を支援した<strong className="text-foreground">太平洋島嶼国気候変動適応
                プロジェクト</strong>が含まれます。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Urban Flood Risk" : "都市洪水リスク"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                Rapid urbanization in Pacific capitals is creating new flood vulnerabilities.{" "}
                <strong className="text-foreground">Suva (Fiji)</strong> faces compound flood risk from
                riverine flooding, pluvial flooding due to inadequate drainage, and coastal inundation.{" "}
                <strong className="text-foreground">Port Moresby (PNG)</strong> experiences severe flash
                flooding during monsoon events in informal settlement areas lacking drainage
                infrastructure. While <strong className="text-foreground">Jakarta (Indonesia)</strong>{" "}
                is geographically in the RA V domain, its massive urban flood challenge connects to
                broader SWFDP-Southeast Asia and national-level warning programs. The integration of
                weather forecasting with urban flood modeling remains an emerging capability across
                the region.
              </>
            ) : (
              <>
                太平洋の首都における急速な都市化が新たな洪水脆弱性を生み出しています。
                <strong className="text-foreground">スバ（フィジー）</strong>は河川洪水、
                不十分な排水による内水氾濫、沿岸浸水の複合洪水リスクに直面しています。
                <strong className="text-foreground">ポートモレスビー（PNG）</strong>は
                排水インフラのないインフォーマル居住地域でモンスーンイベント時に
                深刻なフラッシュフラッドを経験しています。
                <strong className="text-foreground">ジャカルタ（インドネシア）</strong>は
                地理的にRA Vの範囲内にありますが、その大規模な都市洪水課題は
                より広範なSWFDP東南アジアおよび国家レベルの警報プログラムと関連しています。
                気象予報と都市洪水モデリングの統合は地域全体で発展途上の能力です。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 7. Climate Services and Drought Monitoring ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "7. Climate Services and Drought Monitoring" : "7. 気候サービスと干ばつ監視"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                Climate variability, particularly <strong className="text-foreground">ENSO (El
                Ni&ntilde;o-Southern Oscillation)</strong>, exerts a dominant influence on the
                South-West Pacific. El Ni&ntilde;o events bring drought to many Pacific Island
                nations while increasing tropical cyclone activity in the central Pacific. La
                Ni&ntilde;a events tend to enhance rainfall across much of the western Pacific but
                can bring drought to the central and eastern Pacific.
              </>
            ) : (
              <>
                気候変動性、特に<strong className="text-foreground">ENSO（エルニーニョ南方振動）
                </strong>は南西太平洋に支配的な影響を及ぼしています。エルニーニョイベントは
                多くの太平洋島嶼国に干ばつをもたらす一方、中部太平洋での熱帯低気圧活動を増加させます。
                ラニーニャイベントは西太平洋の大部分で降水量を増加させる傾向がありますが、
                中・東太平洋には干ばつをもたらす可能性があります。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Key Climate Service Mechanisms" : "主要な気候サービスメカニズム"}
          </h3>
          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "PICOF — Pacific Islands Climate Outlook Forum" : "PICOF — 太平洋島嶼気候見通しフォーラム"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    PICOF is a WMO Regional Climate Outlook Forum (RCOF) that convenes Pacific Island
                    climate experts, NMHS forecasters, and sector users twice annually to develop
                    consensus seasonal climate outlooks. PICOF produces probabilistic tercile forecasts
                    (above-normal, near-normal, below-normal) for rainfall and temperature across the
                    Pacific Islands region. These outlooks are co-produced with users from water
                    resources, agriculture, health, and disaster management sectors.
                  </>
                ) : (
                  <>
                    PICOFは太平洋島嶼の気候専門家、NMHS予報官、セクターユーザーが
                    年2回集まり、合意に基づく季節気候見通しを策定するWMO地域気候見通し
                    フォーラム（RCOF）です。PICOFは太平洋島嶼地域の降水量と気温について
                    確率的三分位予報（平年以上、ほぼ平年、平年以下）を作成します。
                    これらの見通しは水資源、農業、保健、防災管理セクターのユーザーと
                    共同で作成されます。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Island Climate Update (NIWA, New Zealand)" : "アイランド・クライメート・アップデート（NIWA、ニュージーランド）"}
              </p>
              <p className="text-muted">
                {en
                  ? "Published monthly by NIWA (National Institute of Water and Atmospheric Research), this bulletin provides ENSO status updates, seasonal rainfall and temperature outlooks, and tropical cyclone seasonal forecasts specific to the Pacific Islands region. It serves as a key input to PICOF and national-level seasonal planning."
                  : "NIWA（国立水・大気研究所）が月次で発行するこの速報は、ENSOステータス更新、季節降水量・気温見通し、太平洋島嶼地域に特化した熱帯低気圧の季節予報を提供しています。PICOFおよび国家レベルの季節計画への重要なインプットとなっています。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "COSPPac — Climate and Oceans Support Program in the Pacific" : "COSPPac — 太平洋気候・海洋支援プログラム"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Funded by the Australian Government and implemented by BoM, COSPPac provides{" "}
                    <strong className="text-foreground">seasonal climate forecasts, sea level monitoring,
                    ocean temperature monitoring, and drought assessment tools</strong> to Pacific Island
                    NMHSs. The program includes the Online Climate Outlook Forum, SCOPIC (Seasonal Climate
                    Outlooks for Pacific Island Countries) tool, and capacity building for climate data
                    management using CLiDEsc (Climate Data for the Environment Services Client).
                  </>
                ) : (
                  <>
                    オーストラリア政府の資金援助により、BoMが実施するCOSPPacは太平洋島嶼国NMHSに
                    <strong className="text-foreground">季節気候予報、海面水位モニタリング、
                    海水温モニタリング、干ばつ評価ツール</strong>を提供しています。
                    プログラムにはオンライン気候見通しフォーラム、SCOPIC（太平洋島嶼国向け季節気候見通し）
                    ツール、CLiDEsc（環境サービスクライアント向け気候データ）を使用した
                    気候データ管理の能力構築が含まれます。
                  </>
                )}
              </p>
            </div>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Drought Monitoring" : "干ばつ監視"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                Drought is a recurring and severe hazard for Pacific Island nations, particularly
                atoll countries where freshwater lenses are the primary water source. The{" "}
                <strong className="text-foreground">Standardized Precipitation Index (SPI)</strong>,{" "}
                <strong className="text-foreground">Palmer Drought Severity Index (PDSI)</strong>,
                and satellite-derived vegetation indices (NDVI) are used for monitoring.
                The 2015-2016 El Ni&ntilde;o event caused severe drought across the Marshall Islands,
                Palau, and FSM, with some islands requiring emergency water shipments. Seasonal
                forecasting skill for ENSO-driven rainfall anomalies in the Pacific is relatively
                high (correlation &gt;0.6 at 3-month lead), making drought early warning one of the
                more actionable applications of climate services in the region.
              </>
            ) : (
              <>
                干ばつは太平洋島嶼国にとって繰り返し発生する深刻なハザードであり、
                特に淡水レンズが主要な水源である環礁国で顕著です。
                <strong className="text-foreground">標準化降水指数（SPI）</strong>、
                <strong className="text-foreground">パーマー干ばつ深刻度指数（PDSI）</strong>、
                衛星由来の植生指数（NDVI）が監視に使用されています。
                2015〜2016年のエルニーニョイベントはマーシャル諸島、パラオ、ミクロネシア連邦で
                深刻な干ばつを引き起こし、一部の島では緊急給水が必要になりました。
                太平洋におけるENSO駆動の降水量異常の季節予報スキルは比較的高く
                （3ヶ月リードで相関&gt;0.6）、干ばつ早期警報は地域の気候サービスの中でも
                より実行可能なアプリケーションの一つとなっています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 8. Observation Network Enhancement ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "8. Observation Network Enhancement" : "8. 観測ネットワーク強化プロジェクト"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The observational foundation underpinning all early warning services in RA V faces
                significant gaps. The <strong className="text-foreground">WMO Global Basic Observing
                Network (GBON)</strong> regulation, adopted in 2021, sets minimum requirements for
                surface and upper-air observations that many Pacific Island NMHSs currently
                cannot meet.
              </>
            ) : (
              <>
                RA Vのすべての早期警報サービスを支える観測基盤は大きなギャップに直面しています。
                2021年に採択された<strong className="text-foreground">WMO全球基本観測ネットワーク
                （GBON）</strong>規則は、多くの太平洋島嶼国NMHSが現在満たすことができない
                地上および高層観測の最低要件を設定しています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "SOFF — Systematic Observations Financing Facility" : "SOFF — 系統的観測資金供与ファシリティ"}
          </h3>
          <p className="text-muted">
            {en ? (
              <>
                The <strong className="text-foreground">Systematic Observations Financing Facility
                (SOFF)</strong>, launched at COP26 in 2021, is a UN-led funding mechanism specifically
                designed to help SIDS and LDCs comply with GBON requirements. For RA V, SOFF provides
                grants for AWS procurement, installation, and critically, the{" "}
                <strong className="text-foreground">long-term operational and maintenance costs</strong>{" "}
                that have historically been the weak link in observation network sustainability. SOFF
                operates through three phases: readiness, investment, and compliance.
              </>
            ) : (
              <>
                2021年のCOP26で立ち上げられた<strong className="text-foreground">系統的観測資金供与
                ファシリティ（SOFF）</strong>は、SIDSとLDCがGBON要件を遵守するのを支援するために
                特別に設計された国連主導の資金メカニズムです。RA Vに対して、SOFFはAWSの調達、
                設置、そして重要なことに、観測ネットワークの持続可能性において歴史的に弱点であった
                <strong className="text-foreground">長期的な運用・保守コスト</strong>のための
                助成金を提供しています。SOFFは準備、投資、遵守の3フェーズで運営されています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Observation Gaps and Solutions" : "観測のギャップと解決策"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Observation Type" : "観測種別"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Current Gap" : "現状のギャップ"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Solution / Initiative" : "解決策・イニシアティブ"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Surface (AWS)" : "地上（AWS）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Many Pacific Island nations have fewer than 5 operational AWS; maintenance backlogs"
                      : "多くの太平洋島嶼国で運用AWS数が5基未満、保守の遅延"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "SOFF, CREWS, bilateral aid (JICA, KOICA)" : "SOFF、CREWS、二国間援助（JICA、KOICA）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Upper-air (radiosonde)" : "高層（ラジオゾンデ）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Very few Pacific Island nations launch radiosondes; high consumable costs"
                      : "ラジオゾンデを放球する太平洋島嶼国はごくわずか、消耗品コストが高い"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "GNSS-RO satellite data as partial substitute; SOFF support" : "GNSS-RO衛星データによる部分的代替、SOFF支援"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Marine" : "海洋"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Vast ocean areas with sparse observations"
                      : "広大な海域での観測の希薄さ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Argo floats, VOS (Voluntary Observing Ships), drifting buoys" : "Argoフロート、VOS（任意観測船）、漂流ブイ"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Satellite" : "衛星"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Data reception and processing capacity limited at many NMHSs"
                      : "多くのNMHSでデータ受信・処理能力が限定的"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Himawari-9 (JMA), GEO-KOMPSAT (KMA); cloud-based processing" : "ひまわり9号（JMA）、GEO-KOMPSAT（KMA）、クラウドベース処理"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                The <strong className="text-foreground">Argo float program</strong> is particularly
                important for RA V, providing over 4,000 autonomous profiling floats across the global
                ocean that measure temperature and salinity to 2,000m depth. Pacific Argo data directly
                support ENSO monitoring, seasonal forecasting, and ocean heat content assessment for
                tropical cyclone intensity prediction.
              </>
            ) : (
              <>
                <strong className="text-foreground">Argoフロートプログラム</strong>はRA Vにとって
                特に重要で、全球海洋に4,000基以上の自律プロファイリングフロートを展開し、
                水深2,000mまでの水温と塩分を計測しています。太平洋のArgoデータはENSOモニタリング、
                季節予報、熱帯低気圧の強度予測のための海洋熱含量評価を直接支援しています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 9. Capacity Development and Sustainability ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "9. Capacity Development and Sustainability" : "9. 能力開発と持続可能性"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                Capacity development is arguably the <strong className="text-foreground">most critical
                and most challenging dimension</strong> of early warning in RA V. The effectiveness of
                all technical investments — observation networks, NWP products, warning systems —
                ultimately depends on the human capacity to operate, interpret, and communicate them.
              </>
            ) : (
              <>
                能力開発は、RA Vにおける早期警報の<strong className="text-foreground">最も重要かつ
                最も困難な側面</strong>と言えます。観測ネットワーク、NWPプロダクト、警報システムなど、
                あらゆる技術的投資の有効性は、最終的にはそれらを運用、解釈、伝達する
                人的能力に依存しています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Training Programs" : "研修プログラム"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Program" : "プログラム"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Provider" : "提供機関"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Description" : "内容"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "WMO RTC Melbourne" : "WMO RTC メルボルン"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    BoM
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Formal meteorological training courses, online modules, and professional development for Pacific Island forecasters"
                      : "正規の気象研修コース、オンラインモジュール、太平洋島嶼国予報官の専門能力開発"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Secondment / Mentoring" : "派遣・メンタリング"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    BoM, NIWA
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Pacific Island forecasters embedded at BoM/NIWA for 3-12 month attachments; reverse mentoring during TC seasons"
                      : "太平洋島嶼国予報官をBoM/NIWAに3〜12ヶ月派遣、TCシーズン中のリバースメンタリング"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    PMDP
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    SPREP / WMO
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Pacific Meteorological Desk Partnership: coordination hub for meteorological training and capacity building across the region"
                      : "太平洋気象デスクパートナーシップ：地域全体の気象研修と能力構築のための調整ハブ"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "On-the-job training" : "OJT"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Various" : "各種"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Real-time mentoring during severe weather events via SWFDP framework; virtual forecast rooms"
                      : "SWFDP枠組みを通じた悪天候イベント時のリアルタイム指導、バーチャル予報室"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Persistent Challenges" : "持続的な課題"}
          </h3>
          <ul className="ml-4 list-disc space-y-2 text-muted">
            <li>
              <strong className="text-foreground">
                {en ? "Staff retention" : "スタッフの定着"}
              </strong>
              {en
                ? " — Trained meteorologists often leave NMHS positions for better-paying opportunities in other government agencies, international organizations, or the private sector. A single departure from a 5-person NMHS can represent a 20% loss of institutional capacity."
                : " — 研修を受けた気象学者がしばしば、より高給の他の政府機関、国際機関、民間セクターの機会を求めてNMHSのポジションを離れます。5人体制のNMHSからの1名の離職は制度的能力の20%の喪失を意味します。"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Institutional memory" : "組織的記憶"}
              </strong>
              {en
                ? " — High staff turnover means that knowledge gained through training and experience is frequently lost, necessitating repeated capacity building cycles."
                : " — 高い離職率により、研修と経験を通じて得た知識が頻繁に失われ、繰り返しの能力構築サイクルが必要になります。"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "Sustainable funding" : "持続可能な資金"}
              </strong>
              {en
                ? " — Many Pacific Island NMHSs depend heavily on project-based donor funding, creating boom-bust cycles in capability. The transition from project funding to national budget support remains a critical challenge."
                : " — 多くの太平洋島嶼国NMHSはプロジェクトベースのドナー資金に大きく依存しており、能力の好不況サイクルを生み出しています。プロジェクト資金から国家予算による支援への移行は依然として重要な課題です。"}
            </li>
            <li>
              <strong className="text-foreground">
                {en ? "National policy integration" : "国家政策への統合"}
              </strong>
              {en
                ? " — Embedding meteorological services within national climate adaptation strategies, disaster risk reduction plans, and development frameworks is essential for securing long-term political and financial support."
                : " — 気象サービスを国家の気候変動適応戦略、防災計画、開発フレームワークに組み込むことは、長期的な政治的・財政的支援を確保するために不可欠です。"}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── 10. Future Outlook ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en ? "10. Future Outlook" : "10. 今後の展望"}
          </h2>
          <p className="text-muted">
            {en ? (
              <>
                The early warning landscape in RA V is undergoing rapid transformation driven by
                several converging initiatives and technological advances. The{" "}
                <strong className="text-foreground">UN Early Warnings for All (EW4All)
                </strong> initiative, launched by the UN Secretary-General in 2022, sets the
                ambitious target of ensuring every person on Earth is protected by early warning
                systems by 2027. For RA V, this means addressing the remaining gaps in
                observation, forecasting, dissemination, and preparedness capacity.
              </>
            ) : (
              <>
                RA Vの早期警報のランドスケープは、複数のイニシアティブと技術的進歩の収斂により
                急速な変革を遂げています。2022年に国連事務総長が立ち上げた
                <strong className="text-foreground">国連「全ての人に早期警報を」（EW4All）
                </strong>イニシアティブは、2027年までに地球上のすべての人が
                早期警報システムによって保護されることを目指す野心的な目標を設定しています。
                RA Vにとって、これは観測、予報、伝達、備え能力の残存ギャップへの
                対処を意味しています。
              </>
            )}
          </p>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "Key Future Directions" : "主要な今後の方向性"}
          </h3>
          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Impact-Based Forecasting (IBF)" : "インパクトベース予報（IBF）"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    The transition from <strong className="text-foreground">hazard-based to
                    impact-based forecasting</strong> is a WMO strategic priority. Rather than warning
                    about the weather itself (&quot;winds of 120 km/h&quot;), IBF communicates expected
                    impacts (&quot;structural damage to houses, power outages likely&quot;). Fiji and
                    Vanuatu are pilot countries for IBF implementation in the Pacific, requiring
                    integration of exposure and vulnerability data with meteorological forecasts.
                  </>
                ) : (
                  <>
                    <strong className="text-foreground">ハザードベースからインパクトベース予報
                    </strong>への移行はWMOの戦略的優先事項です。気象そのものについて警告する
                    （「風速120 km/h」）のではなく、IBFは予想される影響
                    （「住宅への構造的損傷、停電の可能性」）を伝達します。
                    フィジーとバヌアツが太平洋におけるIBF実装のパイロット国であり、
                    曝露と脆弱性のデータを気象予報と統合する必要があります。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Common Alerting Protocol (CAP)" : "共通警報プロトコル（CAP）"}
              </p>
              <p className="text-muted">
                {en
                  ? "CAP is an international standard (ITU-T X.1303) for all-hazard, all-media warning message formatting. WMO is supporting CAP implementation across RA V to enable automated dissemination of warnings through multiple channels (SMS, social media, apps, radio) from a single authoritative source. Several Pacific NMHSs are in various stages of CAP adoption."
                  : "CAPは全ハザード・全メディア対応の警報メッセージフォーマットの国際標準（ITU-T X.1303）です。WMOはRA V全域でCAP実装を支援し、単一の権威ある情報源から複数チャネル（SMS、ソーシャルメディア、アプリ、ラジオ）を通じた警報の自動配信を可能にしています。複数の太平洋NMHSがCAP採用の様々な段階にあります。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Multi-Hazard Early Warning Systems (MHEWS)" : "マルチハザード早期警報システム（MHEWS）"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    The shift toward <strong className="text-foreground">integrated multi-hazard
                    approaches</strong> recognizes that Pacific Island communities often face
                    compound and cascading hazards (e.g., a tropical cyclone triggering flooding,
                    landslides, and storm surge simultaneously). MHEWS seeks to unify warning
                    frameworks across weather, hydrological, geological, and oceanographic hazards
                    under a single institutional umbrella.
                  </>
                ) : (
                  <>
                    <strong className="text-foreground">統合的マルチハザードアプローチ</strong>への
                    移行は、太平洋島嶼コミュニティがしばしば複合・連鎖ハザードに直面する
                    ことを認識しています（例：熱帯低気圧が洪水、土砂災害、高潮を
                    同時に引き起こす）。MHEWSは気象、水文、地質、海洋ハザードにわたる
                    警報枠組みを単一の制度的傘の下で統一することを目指しています。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "Digital Transformation" : "デジタルトランスフォーメーション"}
              </p>
              <p className="text-muted">
                {en
                  ? "Mobile phone penetration in Pacific Island nations has grown rapidly, even in remote communities. This creates opportunities for mobile-based warning dissemination (cell broadcast, SMS alerts, weather apps) and crowdsourced impact reporting. Social media platforms, particularly Facebook which has high penetration in the Pacific, are increasingly used for warning communication alongside official channels."
                  : "太平洋島嶼国におけるモバイル電話の普及は、遠隔コミュニティでも急速に進んでいます。これはモバイルベースの警報配信（セルブロードキャスト、SMSアラート、天気アプリ）やクラウドソースによる被害報告の機会を生み出しています。ソーシャルメディアプラットフォーム、特に太平洋で高い普及率を持つFacebookは、公式チャネルと並んで警報コミュニケーションにますます使用されています。"}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "AI/ML Applications" : "AI/ML応用"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    <strong className="text-foreground">Machine learning techniques</strong> are
                    beginning to find application in Pacific weather prediction, including
                    post-processing of NWP ensemble output for improved local forecasts,
                    nowcasting of convective rainfall using satellite imagery, and tropical cyclone
                    intensity prediction. Foundation weather models (e.g., Pangu-Weather, GraphCast,
                    GenCast) offer the potential for rapid, high-resolution forecasting without
                    traditional HPC infrastructure, which could be transformative for resource-limited
                    Pacific NMHSs. However, these models still require careful validation in the
                    data-sparse Pacific environment.
                  </>
                ) : (
                  <>
                    <strong className="text-foreground">機械学習技術</strong>は太平洋の気象予測に
                    応用され始めています。NWPアンサンブル出力の後処理による地域予報の改善、
                    衛星画像を用いた対流性降雨のナウキャスティング、熱帯低気圧の強度予測などが
                    含まれます。基盤気象モデル（Pangu-Weather、GraphCast、GenCast等）は
                    従来のHPCインフラなしに高速・高解像度予報を可能にするポテンシャルを持ち、
                    リソースが限られた太平洋NMHSにとって変革的となりえます。
                    ただし、これらのモデルはデータが希薄な太平洋環境での慎重な検証が
                    依然として必要です。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en ? "WMO Unified Data Policy" : "WMO統一データポリシー"}
              </p>
              <p className="text-muted">
                {en
                  ? "The WMO Unified Data Policy, adopted at the Extraordinary World Meteorological Congress in 2021, establishes the principle of free and unrestricted exchange of core meteorological data. For RA V, this has implications for data sharing between NMHSs and with global NWP centres, potentially improving forecast products available to the region while also requiring modernization of data management and exchange infrastructure."
                  : "2021年の臨時世界気象会議で採択されたWMO統一データポリシーは、コア気象データの自由かつ無制限な交換の原則を確立しました。RA Vにとっては、NMHS間および全球NWPセンターとのデータ共有に影響があり、地域で利用可能な予報プロダクトの改善の可能性がある一方、データ管理・交換インフラの近代化も求められています。"}
              </p>
            </div>
          </div>

          <h3 className="mt-5 mb-2 font-medium text-foreground">
            {en ? "EW4All Targets for 2027" : "EW4All 2027年目標"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Pillar" : "柱"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Target" : "目標"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "RA V Status" : "RA V現状"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "1. Disaster Risk Knowledge" : "1. 災害リスク知識"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "All countries with multi-hazard risk catalogues"
                      : "全国にマルチハザードリスクカタログ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Partial — Australia, NZ comprehensive; many SIDS lack risk databases"
                      : "部分的 — 豪、NZは包括的、多くのSIDSはリスクDBが不足"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "2. Observations & Forecasting" : "2. 観測・予報"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "GBON compliance; all NMHSs with operational forecasting capacity"
                      : "GBON遵守、全NMHSに運用予報能力"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Significant gap — most Pacific SIDS far from GBON compliance"
                      : "大きなギャップ — 太平洋SIDSの多くがGBON遵守からは程遠い"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "3. Warning Dissemination" : "3. 警報伝達"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "100% population coverage; CAP-compliant warnings"
                      : "人口カバー率100%、CAP準拠警報"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "In progress — mobile coverage growing but remote outer islands remain challenging"
                      : "進行中 — モバイルカバレッジは拡大するも遠隔離島は困難"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "4. Preparedness to Respond" : "4. 対応への備え"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "All communities with response plans linked to warnings"
                      : "全コミュニティに警報と連動した対応計画"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Variable — urban areas improving; rural and remote communities lagging"
                      : "ばらつきあり — 都市部は改善中、農村・遠隔コミュニティは遅れ"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-muted">
            {en ? (
              <>
                Achieving EW4All targets by 2027 will require{" "}
                <strong className="text-foreground">sustained political commitment, innovative
                financing models, and strengthened regional cooperation</strong> within RA V.
                The SWFDP cascading framework, CREWS investments, and SOFF financing provide
                a solid foundation, but the &quot;last mile&quot; challenge — ensuring warnings
                reach and are understood by the most vulnerable communities — remains the
                central unresolved problem.
              </>
            ) : (
              <>
                2027年までにEW4All目標を達成するには、RA V内での
                <strong className="text-foreground">持続的な政治的コミットメント、革新的な
                資金モデル、強化された地域協力</strong>が必要です。
                SWFDPのカスケード枠組み、CREWSの投資、SOFFの資金供与は堅固な基盤を
                提供していますが、「ラストマイル」の課題 —
                最も脆弱なコミュニティに警報が届き理解されることを確保すること —
                は依然として中心的な未解決の問題です。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── References ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              WMO (2022). Early Warnings for All: The UN Global Early Warning Initiative for the Implementation of Climate Adaptation. WMO Executive Action Plan 2023-2027.
            </li>
            <li>
              WMO (2020). WMO Guidelines on Multi-hazard Impact-based Forecast and Warning Services (WMO-No. 1150). Part II: Putting Multi-hazard IBFWS into Practice.
            </li>
            <li>
              WMO (2017). SWFDP Overall Project Plan. World Weather Research Programme, WMO.
            </li>
            <li>
              CREWS (2021). CREWS Pacific Small Island Developing States Project: Phase 1 Report. Climate Risk and Early Warning Systems Initiative.
            </li>
            <li>
              IOC/UNESCO (2023). Pacific Tsunami Warning and Mitigation System: Operational Users Guide. Intergovernmental Oceanographic Commission Technical Series, 87.
            </li>
            <li>
              BoM (2023). COSPPac: Climate and Oceans Support Program in the Pacific — Program Review 2013-2023. Bureau of Meteorology, Australia.
            </li>
            <li>
              SPREP (2022). Pacific Meteorological Council: 5th Meeting Report. Secretariat of the Pacific Regional Environment Programme.
            </li>
            <li>
              WMO (2021). Resolution 1 (Cg-Ext(2021)) — WMO Unified Policy for the International Exchange of Earth System Data.
            </li>
            <li>
              Lam, R., et al. (2023). Learning skillful medium-range global weather forecasting. <em>Science</em>, 382(6677), 1416-1421.
            </li>
            <li>
              Price, I., et al. (2024). Probabilistic weather forecasting with machine learning. <em>Nature</em>, 637, 84-90.
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
}
