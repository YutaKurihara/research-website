"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

/* Class strings reused throughout (copy them literally; do not invent new ones) */
const H2 = "mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted";
const P = "mb-3 text-muted";
const TH =
  "border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted";
const TD = "border border-border px-3 py-2 text-muted";
const TDH = "border border-border px-3 py-2 font-medium text-foreground";
const UL = "ml-4 list-disc space-y-3 text-muted";
const OL = "ml-4 list-decimal space-y-2 text-muted";

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
            2026-11-10
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Early Warning Governance in Brunei Darussalam — Laws, Actors and Current Challenges"
              : "ブルネイの予警報制度 — 法制度・アクターの役割・現在の課題"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "A review of the Disaster Management Order 2006 (now Laws of Brunei, Chapter 293), the 2025 Disaster Management Strategic Policy Framework, the agencies that monitor and warn, and the 2024 ASEAN end-to-end assessment, based on the primary legal texts, NDMC documents, Legislative Council answers and press reports up to November 2026."
              : "2006年災害管理令（現・ブルネイ法令集第293章）、2025年の災害管理戦略政策枠組み、監視と警報を担う各機関、2024年のASEAN一貫型早期警報評価を、法令原文・NDMC資料・立法評議会の答弁・2026年11月までの報道に基づいて整理します。"}
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* ── 1. Overview ── */}
        <section>
          <h2 className={H2}>{en ? "1. Overview" : "1. 概観"}</h2>
          <p className={P}>
            {en ? (
              <>
                Brunei Darussalam is a small, high-income state of about 450,000 people on the north-west coast of Borneo, divided into four districts (Brunei-Muara, Tutong, Belait and Temburong), the last of which is geographically separated from the other three. The government told the Third UN World Conference on Disaster Risk Reduction in 2015 that Brunei “is not a disaster prone country”, and the 2023 INFORM Global Risk Index places it in the very-low-risk class. The hazards that actually harm people and assets are nonetheless well defined: flash floods when prolonged heavy rain during the northeast monsoon (November to March) coincides with high tide, landslides on hilly terrain, and transboundary haze in the dry season. ThinkHazard rates river flood and landslide as “high” and tsunami as “medium”. Tropical Storm Kai-Tak (20 December 2017) affected 137 houses in Temburong and led to the evacuation of 88 residents; the Tutong floods of September 2023 put roads under 1–1.5 m of water; nationwide flash floods on 7–12 January 2026 came with 30 fallen-tree and landslide incidents; and the Batang Mitus landslide of 29 January–6 February 2026 severed 16 sections of the main water pipeline and cut supply across Brunei-Muara District. In September 2026 all four districts recorded Pollutant Standards Index (PSI) readings in the “unhealthy” band (Belait 164).
              </>
            ) : (
              <>
                ブルネイはボルネオ島北西岸に位置する人口約45万人の高所得の小国で、ブルネイ・ムアラ、トゥトン、ブライト、テンブロンの4県から成り、テンブロン県は他の3県と地理的に分かれています。政府は2015年の第3回国連防災世界会議で「ブルネイは災害多発国ではない」と述べ、2023年のINFORM世界リスク指数でも「非常に低い」リスク区分にあります。それでも人と資産を実際に脅かすハザードは明確で、北東モンスーン期（11月〜翌年3月）に長時間の強雨が大潮と重なって起きるフラッシュフラッド（短時間強雨による急激な浸水）、丘陵地の地すべり、乾季の越境煙霧（ヘイズ）です。ThinkHazardの区分では河川洪水と地すべりが「高」、津波が「中」とされています。2017年12月20日の熱帯暴風雨カイタクではテンブロン県で137戸が被災し88人が避難し、2023年9月のトゥトン県洪水では道路が1〜1.5mの水に沈みました。2026年1月7〜12日には全国規模のフラッシュフラッドと30件の倒木・地すべりが発生し、続く1月29日〜2月6日にはトゥトン県バタン・ミトゥスの地すべりが送水幹線16か所を切断してブルネイ・ムアラ県全域が断水しました。2026年9月には全4県でPSI（汚染基準指数）が「不健康」域（ブライト164）に達する煙霧も記録されています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Why does the design of early-warning institutions matter in a state where disasters are rare and money is not the binding constraint? First, the only disaster statute, the <strong className="text-foreground">Disaster Management Order 2006</strong>, is an emergency-powers law: it regulates what the Minister and the NDMC Director may do once a “disaster situation” has been declared, and says nothing about who issues warnings or about district-level bodies; its consolidation as Chapter 293 of the Laws of Brunei in 2024 left all 47 sections unchanged. Second, ownership of monitoring and warning is split between three ministries (weather at BDMD under the Ministry of Transport and Infocommunications; river levels and haze under the Ministry of Development; coordination and command at NDMC under the Ministry of Home Affairs), with no legal or protocol-level duty to fuse them into one multi-hazard product. Third, the 2024 ASEAN end-to-end early-warning assessment found that risk information is not used in warning design, that no inter-agency data-exchange or warning-language protocol exists, and that warnings lack action guidance. Low event frequency has itself allowed gaps identified in 2012 to persist into 2025. This article reviews the legal framework, the division of labour among actors, the warning chain and its levels, reforms since 2020, current challenges and international cooperation.
              </>
            ) : (
              <>
                災害が稀で財政的制約も小さい国で、なぜ予警報の制度設計が論点になるのでしょうか。第一に、唯一の災害法である<strong className="text-foreground">2006年災害管理令</strong>は、大臣が「災害状況」を宣言した後に大臣とNDMC局長が何をできるかを定める緊急権限法であり、警報の発表主体や県レベルの組織については一切規定していません。2024年に法令集第293章として再編されても、47条の条文は変わりませんでした。第二に、監視と警報の所有権が、気象（運輸・情報通信省のBDMD）、河川水位と煙霧（開発省）、調整・指揮（内務省のNDMC）という3省に分かれ、法律上も手続き上も単一のマルチハザード警報へ統合する義務がありません。第三に、2024年のASEAN一貫型早期警報評価は、リスク情報が警報設計に使われていないこと、機関間のデータ交換と警報用語の取り決めが存在しないこと、警報に行動指針が欠けていることを指摘しました。災害頻度の低さそれ自体が、2012年に指摘された課題を2025年まで温存させてきた要因でもあります。本記事では、法制度、アクターの分業、警報の流れと区分、2020年以降の改革、現在の課題、国際協力の順に整理します。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 2. Legal framework ── */}
        <section>
          <h2 className={H2}>
            {en ? "2. Legal Framework" : "2. 法制度"}
          </h2>
          <p className={P}>
            {en ? (
              <>
                Disaster law in Brunei rests on a single core instrument, the Disaster Management Order 2006 (Perintah Pengurusan Bencana, 2006; S 26/2006), made by the Sultan under Article 83(3) of the Constitution rather than enacted by the Legislative Council. Beneath it sit the statutory National Disaster Management Plan, composed of the Strategic National Action Plan (SNAP) and the National Standard Operating Procedures (NaSOP), and, since 2025, the Disaster Management Strategic Policy Framework (DMSPF). Other instruments that touch the warning chain, such as the Fire and Rescue Act or the Environmental Protection and Management Act, were made for different purposes.
              </>
            ) : (
              <>
                ブルネイの災害法制は、憲法第83条(3)に基づく国王令として制定された2006年災害管理令（Perintah Pengurusan Bencana, 2006、S 26/2006）を唯一の中核とし、立法評議会の制定法ではありません。その下に、戦略的国家行動計画（SNAP）と国家標準作業手順（NaSOP）から成る法定の国家災害管理計画が置かれ、2025年からは災害管理戦略政策枠組み（DMSPF）が重なる構造です。警報の流れに関わる他の法令は、消防救助法や環境保護管理法のように、災害法とは別の目的で制定されたものに限られます。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={TH}>{en ? "Instrument" : "法令"}</th>
                  <th className={TH}>{en ? "Year" : "年"}</th>
                  <th className={TH}>{en ? "Scope" : "主な内容"}</th>
                  <th className={TH}>{en ? "Provisions on warning and evacuation" : "警報・避難に関する規定"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TDH}>{en ? "Disaster Management Order, 2006 (Perintah Pengurusan Bencana, 2006; S 26/2006), Order under Article 83(3) of the Constitution" : "2006年災害管理令（Perintah Pengurusan Bencana, 2006、S 26/2006、憲法第83条(3)に基づく国王令）"}</td>
                  <td className={TD}>2006</td>
                  <td className={TD}>{en ? "Gazetted 2 March 2006, commenced 1 August 2006; 47 sections. Defines “disaster” and “event” (flood, storm, tsunami, fire, pandemic, failure of essential services); establishes the National Disaster Council (NDC) and the National Disaster Management Centre (NDMC); requires a National Disaster Management Plan and a Public Response Plan." : "2006年3月2日官報掲載、同年8月1日施行、全47条。「災害」と「事象」（洪水、暴風、津波、火災、パンデミック、基幹サービスの停止など）を定義し、国家災害評議会（NDC）と国家災害管理センター（NDMC）を設置、国家災害管理計画と公衆対応計画の作成を義務づけます。"}</td>
                  <td className={TD}>{en ? "The Minister may declare a “disaster situation” (7 days; first extension to 14 days, further extensions of up to 7 days). During it the Director may evacuate persons or animals, control movement and close roads (s. 30); rescue officers and any police officer may direct persons to leave an area (ss. 27, 33). Penalties of up to B$10,000 and/or 3 years. No clause on warnings." : "大臣は「災害状況」を宣言できます（7日間、初回延長で宣言後14日まで、以後7日以内ずつ延長）。宣言中、局長は人や動物の避難、移動制限、道路閉鎖を命じることができ（第30条）、救助官とすべての警察官は区域からの退去を指示できます（第27条、第33条）。違反には1万ブルネイドル以下の罰金もしくは3年以下の拘禁、またはその併科。警報に関する条項はありません。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Laws of Brunei, Chapter 293: Disaster Management Act (Revised Edition 2024, B.L.R.O. 7/2024)" : "ブルネイ法令集第293章 災害管理法（2024年改訂版、B.L.R.O. 7/2024）"}</td>
                  <td className={TD}>2024</td>
                  <td className={TD}>{en ? "Consolidation of the 2006 Order; the same 47 sections, now citable as an Act. Only cross-references were updated (Fire and Rescue Act, Cap. 82; Infectious Diseases Act, Cap. 204)." : "2006年令の再編。同じ47条を「法」として引用できる形にしたもので、引用先の更新のみ（消防救助法第82章、感染症法第204章）。"}</td>
                  <td className={TD}>{en ? "Unchanged. Still no provision on warning levels, a warning authority or district committees." : "変更なし。警報レベル、警報発表機関、県委員会に関する規定は依然ありません。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "National Disaster Management Plan: Strategic National Action Plan for DRR 2012–2025 (SNAP) and National Standard Operating Procedures (NaSOP)" : "国家災害管理計画：防災のための戦略的国家行動計画2012〜2025（SNAP）と国家標準作業手順（NaSOP）"}</td>
                  <td className={TD}>2012</td>
                  <td className={TD}>{en ? "The statutory Plan required by s. 18. SNAP follows the five priorities of the Hyogo Framework; NaSOP sets the Incident Command System and operational procedures and assigns risk communication in a national emergency to the Information Department of the Prime Minister’s Office." : "第18条が求める法定計画。SNAPは兵庫行動枠組の5つの優先行動に沿い、NaSOPは事故指揮システム（ICS）と運用手順を定め、国家緊急時のリスクコミュニケーションを首相府情報局に委ねます。"}</td>
                  <td className={TD}>{en ? "Defines the operational chain NDMC–District Disaster Management Committees; each district prepares a response plan following the NDMC SOP. Evacuations are in practice advised at district level." : "NDMCと県災害管理委員会の運用上の連鎖を定め、各県はNDMCのSOPに沿って対応計画を作成します。避難は実務上、県レベルで勧告されます。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Disaster Management Strategic Policy Framework (DMSPF), Volume 1.0" : "災害管理戦略政策枠組み（DMSPF）第1.0版"}</td>
                  <td className={TD}>2025</td>
                  <td className={TD}>{en ? "Supersedes SNAP 2012–2025. Goal “Disaster Resilient Nation”; three Sendai-type success measures to 2035; seven Priority Programmes; proposes a National Committee on Disaster Management (NCDM); prepared with 12 ministries; described as a “living document”." : "SNAP 2012〜2025を置き換える文書。目標は「災害に強い国」、2035年までの仙台枠組型の3指標、7つの優先プログラム、国家災害管理委員会（NCDM）の新設提案。12省庁と作成し、「生きた文書」と位置づけられています。"}</td>
                  <td className={TD}>{en ? "Priorities 3 to 6 call for strengthening, developing and deploying early-warning and community notification systems; District Disaster Management Committees are to “coordinate community-based preparedness initiatives and early warning systems”. Targets and implementing agencies are deferred to an operational phase." : "優先3〜6で早期警報と地域通知システムの強化・開発・展開を掲げ、県災害管理委員会に「コミュニティ主体の備えと早期警報システムの調整」を割り当てます。目標値と実施機関は運用段階に先送りされています。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Fire and Rescue Act (Cap. 82)" : "消防救助法（第82章）"}</td>
                  <td className={TD}>—</td>
                  <td className={TD}>{en ? "Governs the Fire and Rescue Department under the Ministry of Home Affairs." : "内務省の消防救助局を規律する法律。"}</td>
                  <td className={TD}>{en ? "Fire officers may be authorised as “rescue officers” under Cap. 293 s. 27(5), with power to direct persons to leave an area." : "第293章第27条(5)により消防官を「救助官」として指定でき、区域からの退去を指示する権限を持ちます。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Environmental Protection and Management Act (Cap. 240); Workplace Safety and Health Act (Cap. 277)" : "環境保護管理法（第240章）、労働安全衛生法（第277章）"}</td>
                  <td className={TD}>—</td>
                  <td className={TD}>{en ? "Cap. 240 is administered by JASTRe (Ministry of Development); Cap. 277 and its Risk Management Regulations by SHENA." : "第240章は開発省のJASTRe、第277章とそのリスク管理規則はSHENAが所管します。"}</td>
                  <td className={TD}>{en ? "Basis for PSI publication and for the workplace haze precaution notice of September 2026; no warning clause as such." : "PSIの公表と2026年9月の職場向け煙霧注意の根拠。警報そのものを定める条項はありません。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Brunei Darussalam National Climate Change Policy 2020" : "ブルネイ国家気候変動政策2020"}</td>
                  <td className={TD}>2020</td>
                  <td className={TD}>{en ? "Ten strategies; Strategy 8 “Climate Resilience and Adaptation”. The DMSPF cites the Adaptation and Resilience Working Group of this climate governance structure." : "10の戦略を掲げ、戦略8が「気候レジリエンスと適応」。DMSPFはこの気候ガバナンス下の適応・レジリエンス作業部会を引用しています。"}</td>
                  <td className={TD}>{en ? "None; frames adaptation policy." : "なし。適応政策の枠組み。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Wawasan Brunei 2035 (Brunei Vision 2035)" : "ワワサン・ブルネイ2035（ブルネイ・ビジョン2035）"}</td>
                  <td className={TD}>—</td>
                  <td className={TD}>{en ? "Long-term development plan listed first in the ASEAN/PDC “early warning legislative framework” for Brunei; Goal 2 (quality of life) covers critical infrastructure and environmental stewardship." : "ASEAN／PDC評価が「早期警報の法的枠組み」の筆頭に挙げる長期開発計画。目標2（生活の質）に重要インフラと環境管理を含みます。"}</td>
                  <td className={TD}>{en ? "None; policy anchor." : "なし。政策上の拠り所。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                What the Act settles is clear: it creates the Council and the Centre, obliges them to prepare the statutory Plan, and lists the powers (evacuation, movement control, road closure, shutting off utilities) that the Director may exercise once the Minister has declared a disaster situation. What it leaves open is equally clear. There is no provision on who issues public warnings, on warning levels, on who may advise residents to move before a declaration, or on any district-level body. Section 10 leaves the chairmanship of the Council to appointment by the Sultan, so the chair has changed over time by appointment rather than by amendment. The National Committee on Disaster Management introduced by the DMSPF has, as yet, no statutory basis.
              </>
            ) : (
              <>
                この法律が定めているのは明確です。評議会とセンターを設置し、法定計画の作成を義務づけ、大臣が災害状況を宣言した後に局長が行使できる権限（避難、移動制限、道路閉鎖、公益サービスの停止）を列挙しています。定めていないことも同じく明確です。公衆向け警報の発表主体、警報レベル、宣言前の段階で誰が住民に移動を促すか、県レベルの組織については一切規定がありません。第10条は評議会の議長を国王の任命に委ねているため、議長職は法改正ではなく任命によって移り変わってきました。DMSPFが導入した国家災害管理委員会（NCDM）にも、現時点で法律上の根拠はありません。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                In practice the press reports of flood evacuations in 2017, 2020, 2023, 2025 and 2026 all describe action by District Disaster Management Committees, the Royal Brunei Armed Forces and the Fire and Rescue Department, and none mentions a Gazette declaration of a “disaster situation”. This suggests that the formal mechanism in section 22 is not used for ordinary floods and that evacuations are advised rather than legally ordered. NDMC itself lists, in the DMSPF, the need to “establish comprehensive legal and regulatory framework” and to “implement a centralized disaster information system”, which indicates that the thin legal basis of warning is recognised by the authorities.
              </>
            ) : (
              <>
                実務上も、2017年、2020年、2023年、2025年、2026年の洪水避難を伝える報道はいずれも県災害管理委員会、王立ブルネイ軍、消防救助局による対応を記しており、官報による「災害状況」宣言には触れていません。これは、第22条の宣言が通常の洪水では用いられず、避難が法的な命令ではなく勧告として行われていることを示唆します。NDMC自身もDMSPFの中で「包括的な法的・規制的枠組みの確立」と「一元的な災害情報システムの導入」を課題に掲げており、警報の法的基盤の弱さは当局も認識しているといえます。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 3. Actors and roles ── */}
        <section>
          <h2 className={H2}>
            {en ? "3. Actors and Their Roles" : "3. アクターと役割"}
          </h2>
          <p className={P}>
            {en ? (
              <>
                Early warning in Brunei runs on a three-tier coordination structure, namely the National Disaster Council (policy), NDMC (secretariat and round-the-clock command) and the four District Disaster Management Committees (tactical level), combined with hazard-specific monitoring and issuing agencies spread across three ministries. The table sets out each body, its parent ministry, the legal basis where one exists, and its role in the warning chain.
              </>
            ) : (
              <>
                ブルネイの予警報は、国家災害評議会（政策）、NDMC（事務局と24時間指揮）、4県の県災害管理委員会（戦術レベル）という3層の調整機構と、3つの省に分かれたハザード別の監視・発表機関の組み合わせで動いています。以下の表は、法的根拠の有無を含めて各機関の位置づけと役割を整理したものです。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={TH}>{en ? "Organisation" : "機関"}</th>
                  <th className={TH}>{en ? "Parent body" : "所管"}</th>
                  <th className={TH}>{en ? "Legal basis" : "法的根拠"}</th>
                  <th className={TH}>{en ? "Role in early warning" : "予警報における役割"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TDH}>{en ? "National Disaster Council (NDC)" : "国家災害評議会（NDC、National Disaster Council）"}</td>
                  <td className={TD}>{en ? "Chaired by the Minister of Home Affairs according to the 2025 DMSPF; earlier sources describe a Senior Minister in the Prime Minister’s Office as chair; members appointed by the Sultan" : "2025年のDMSPFでは内務大臣が議長。以前の資料は首相府の上級大臣を議長と記述。委員は国王が任命"}</td>
                  <td className={TD}>{en ? "Cap. 293 ss. 8–15" : "第293章第8〜15条"}</td>
                  <td className={TD}>{en ? "Policy apex: develops the strategic policy framework, prepares the Plan, decides on foreign assistance, meets at least every six months, reports annually to the Sultan" : "政策の頂点。戦略政策枠組みの策定、計画の作成、海外支援の決定、少なくとも6か月ごとの会合、国王への年次報告"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "National Disaster Management Centre (NDMC; Pusat Pengurusan Bencana Kebangsaan)" : "NDMC（Pusat Pengurusan Bencana Kebangsaan、国家災害管理センター）"}</td>
                  <td className={TD}>{en ? "Ministry of Home Affairs (Kementerian Hal Ehwal Dalam Negeri)" : "内務省（Kementerian Hal Ehwal Dalam Negeri）"}</td>
                  <td className={TD}>{en ? "Cap. 293 ss. 16–17; established August 2006" : "第293章第16〜17条。2006年8月設置"}</td>
                  <td className={TD}>{en ? "Secretariat of the NDC; 24-hour Disaster Command Centre (DCC) that collects, coordinates and disseminates official disaster information under the Incident Command System; multi-hazard risk map; national focal point for the ASEAN Committee on Disaster Management; hotline Talian Darussalam 123; assumes command when a district is overwhelmed" : "NDCの事務局。24時間体制の災害指揮センター（DCC）が事故指揮システムに基づき公式災害情報を収集・調整・配信。多ハザードリスク地図の作成。ASEAN災害管理委員会の国家連絡窓口。ホットラインTalian Darussalam 123。県の能力を超えた場合は指揮を引き取る"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "National Committee on Disaster Management (NCDM)" : "国家災害管理委員会（NCDM）"}</td>
                  <td className={TD}>{en ? "Proposed, between NDC and NDMC" : "NDCとNDMCの間に新設予定"}</td>
                  <td className={TD}>{en ? "DMSPF 2025 only; no statute" : "DMSPF 2025のみ。法律上の根拠なし"}</td>
                  <td className={TD}>{en ? "Multi-agency coordination; membership to be determined in the operational phase" : "多機関調整。構成は運用段階で決定"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Brunei Darussalam Meteorological Department (BDMD)" : "BDMD（Brunei Darussalam Meteorological Department、ブルネイ気象局）"}</td>
                  <td className={TD}>{en ? "Ministry of Transport and Infocommunications (MTIC)" : "運輸・情報通信省（MTIC）"}</td>
                  <td className={TD}>{en ? "No enabling Act cited; WMO member since 26 November 1984; named BDMD since 14 January 2013" : "設置法令の記載なし。1984年11月26日WMO加盟。2013年1月14日から現名称"}</td>
                  <td className={TD}>{en ? "National meteorological service: monitors and forecasts weather, issues weather advisories and three-level colour-coded warnings, rough-sea warnings and seasonal outlooks; operates the S-band radar; feeds river data into the regional flash-flood guidance; reported as tsunami warning focal point in the IOC list" : "国家気象機関。気象の監視・予測、気象注意報と3段階の色別警報、波浪警報、季節見通しの発表。Sバンドレーダーの運用。地域フラッシュフラッド・ガイダンスへの河川データ提供。IOCの一覧では津波警報連絡窓口とされる"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Drainage and Sewerage Department (DDS), Public Works Department (PWD / JKR)" : "排水下水局（DDS、Drainage and Sewerage Department）、公共事業局（PWD／JKR）"}</td>
                  <td className={TD}>{en ? "Ministry of Development" : "開発省"}</td>
                  <td className={TD}>{en ? "No statute assigning a flood-warning duty was found; roles stated in Legislative Council answers" : "洪水警報の義務を課す法令は確認されず。役割は立法評議会答弁に記載"}</td>
                  <td className={TD}>{en ? "Hydrology Unit: river-level monitoring, IoT water-level sensors since 2019, 32 real-time rain gauges, flood-prone area mapping, Drainage Master Plan; de facto flood warning function" : "水文ユニットが河川水位監視、2019年からのIoT水位センサー、32か所の実時間雨量計、洪水常襲域の地図化、排水マスタープランを担当。事実上の洪水警報機能"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "PWD Department of Technical Services, Geotechnical and Geological Section" : "PWD技術サービス局 地質工学・地質課"}</td>
                  <td className={TD}>{en ? "Ministry of Development" : "開発省"}</td>
                  <td className={TD}>—</td>
                  <td className={TD}>{en ? "Holder of landslide data; no landslide warning system" : "地すべりデータの保有機関。地すべり警報システムはなし"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Department of Environment, Parks and Recreation (JASTRe; Jabatan Alam Sekitar, Taman dan Rekreasi)" : "JASTRe（Jabatan Alam Sekitar, Taman dan Rekreasi、環境・公園・レクリエーション局）"}</td>
                  <td className={TD}>{en ? "Ministry of Development" : "開発省"}</td>
                  <td className={TD}>{en ? "Environmental Protection and Management Act (Cap. 240)" : "環境保護管理法（第240章）"}</td>
                  <td className={TD}>{en ? "Publishes the PSI (PM2.5 included since 1 September 2026); joint haze press releases with the Ministry of Health and BDMD" : "PSIの公表（2026年9月1日からPM2.5を含む）。保健省・BDMDとの共同煙霧プレスリリース"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Ministry of Health (MOH)" : "保健省（MOH）"}</td>
                  <td className={TD}>—</td>
                  <td className={TD}>—</td>
                  <td className={TD}>{en ? "Health bands and advice attached to PSI readings" : "PSI値に対応する健康区分と助言"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "District Disaster Management Committees / Centres (DDMC) and District Emergency Operation Centres (DEOC), four districts" : "県災害管理委員会／センター（DDMC）と県緊急対応センター（DEOC）、4県"}</td>
                  <td className={TD}>{en ? "District Office; chaired by the District Officer" : "県事務所。県長官（District Officer）が委員長"}</td>
                  <td className={TD}>{en ? "NaSOP and NDMC SOP; DMSPF 2025; no statute" : "NaSOPとNDMCのSOP、DMSPF 2025。法律上の根拠なし"}</td>
                  <td className={TD}>{en ? "Tactical coordination of district branches of the armed forces, police, fire and rescue, health, PWD and others; district response plan; evacuation decisions; coordination of community preparedness and early warning under the DMSPF" : "軍、警察、消防救助、保健、PWDなどの県部局の戦術的調整。県対応計画。避難の判断。DMSPFの下でコミュニティの備えと早期警報を調整"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Mukim and village consultative councils (Majlis Perundingan Mukim dan Kampung); penghulu and ketua kampong" : "ムキム・村協議会（Majlis Perundingan Mukim dan Kampung）、ペンフル（penghulu）と村長（ketua kampong）"}</td>
                  <td className={TD}>—</td>
                  <td className={TD}>—</td>
                  <td className={TD}>{en ? "Relay water-level information and warnings to and from residents; partners of the community-based DRM programme since March 2010" : "水位情報と警報を住民との間で中継。2010年3月からのコミュニティ防災プログラムの協力相手"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Royal Brunei Police Force (RBPF)" : "王立ブルネイ警察（RBPF、Royal Brunei Police Force）"}</td>
                  <td className={TD}>—</td>
                  <td className={TD}>{en ? "Cap. 293 s. 27: any police officer may exercise declared-disaster powers" : "第293章第27条：すべての警察官が宣言された災害状況の権限を行使できる"}</td>
                  <td className={TD}>{en ? "Last-mile alerting to at-risk populations; loudspeaker cars in coastal areas" : "危険にさらされた住民への最終区間の警報。沿岸部での拡声器付き車両"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Fire and Rescue Department" : "消防救助局"}</td>
                  <td className={TD}>{en ? "Ministry of Home Affairs" : "内務省"}</td>
                  <td className={TD}>{en ? "Fire and Rescue Act (Cap. 82); Cap. 293 s. 27(5)" : "消防救助法（第82章）、第293章第27条(5)"}</td>
                  <td className={TD}>{en ? "Rescue officers; response to floods, fallen trees and landslides; sandbagging of critical facilities" : "救助官の供給源。洪水・倒木・地すべりへの対応。重要施設の土嚢設置"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Royal Brunei Armed Forces (RBAF) / Royal Brunei Land Force (RBLF)" : "王立ブルネイ軍（RBAF）／王立ブルネイ陸軍（RBLF）"}</td>
                  <td className={TD}>—</td>
                  <td className={TD}>—</td>
                  <td className={TD}>{en ? "Evacuation transport (CIMIC platoon with four-tonne trucks) and relief operations with the DDMCs" : "避難輸送（4トントラックを持つCIMIC小隊）とDDMCと連携した救援活動"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Community Development Department (JAPEM; Jabatan Pembangunan Masyarakat)" : "JAPEM（Jabatan Pembangunan Masyarakat、社会開発局）"}</td>
                  <td className={TD}>{en ? "Ministry of Culture, Youth and Sports" : "文化・青年・スポーツ省"}</td>
                  <td className={TD}>{en ? "Mandate under NaSOP" : "NaSOP上の任務"}</td>
                  <td className={TD}>{en ? "Temporary shelter and rations" : "一時避難所と食料の提供"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Information Department, Prime Minister’s Office; Radio Television Brunei (RTB)" : "首相府情報局、ラジオ・テレビ・ブルネイ（RTB）"}</td>
                  <td className={TD}>{en ? "Prime Minister’s Office" : "首相府"}</td>
                  <td className={TD}>{en ? "NaSOP" : "NaSOP"}</td>
                  <td className={TD}>{en ? "Lead for risk communication in a national emergency: press releases, government websites, social media; RTB runs five TV channels and five radio networks" : "国家緊急時のリスクコミュニケーションを主導（プレスリリース、政府ウェブサイト、SNS）。RTBはテレビ5チャンネル・ラジオ5局"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Legislative Council (Majlis Mesyuarat Negara)" : "立法評議会（Majlis Mesyuarat Negara）"}</td>
                  <td className={TD}>—</td>
                  <td className={TD}>—</td>
                  <td className={TD}>{en ? "Oversight through written and oral questions on flood warning and drainage to the Minister of Development (2025 and 2026 sessions)" : "洪水警報と排水に関する開発大臣への書面・口頭質問による監督（2025年・2026年会期）"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                The <strong className="text-foreground">National Disaster Council</strong> is the policy apex under sections 8–15 of Chapter 293: it develops the strategic policy framework, prepares the National Disaster Management Plan, decides on giving or accepting foreign assistance, meets at least every six months and reports annually to the Sultan. The foreword of the 2025 DMSPF is signed by the Minister of Home Affairs (Dato Seri Setia Awang Haji Ahmaddin bin Haji Abdul Rahman) as “Chair of the National Disaster Council”, whereas the 2012 JICA country report describes the Council as co-chaired by the Senior Minister and the Minister of Home Affairs and the 2022 CFE-DM handbook names a Senior Minister in the Prime Minister’s Office as chair; the chairmanship has thus been described differently over time. <strong className="text-foreground">NDMC</strong> (Pusat Pengurusan Bencana Kebangsaan) sits under the Ministry of Home Affairs and was established in August 2006. Its Planning and Analysis Division produces the multi-hazard risk map and maintains SOPs and business continuity plans; its Operations Division runs the Disaster Command Centre under the Incident Command System set out in NaSOP. The DCC is staffed around the clock by a Duty Staff Officer and watch keepers, “collects, coordinates, and disseminates official disaster information”, liaises with the AHA Centre and assumes full command when a disaster exceeds the logistics and personnel of a district. In 2012 the Centre had 25 permanent staff and 25 others including secondments from the Fire Service, with an annual budget of B$5 million each allocated to the Ministries of Home Affairs, Health and Finance for disaster management; it was then described as “still in the course of reform”.
              </>
            ) : (
              <>
                <strong className="text-foreground">国家災害評議会</strong>は第293章第8〜15条に基づく政策の頂点で、戦略政策枠組みの策定、国家災害管理計画の作成、海外支援の受入れ・提供の決定、少なくとも6か月ごとの会合、国王への年次報告を担います。2025年のDMSPF序文には内務大臣（Dato Seri Setia Awang Haji Ahmaddin bin Haji Abdul Rahman）が「国家災害評議会議長」として署名していますが、2012年のJICA国別報告書は評議会を「上級大臣と内務大臣の共同議長」、2022年のCFE-DMハンドブックは「首相府の上級大臣が議長」と記しており、議長職は時期によって異なって記述されています。<strong className="text-foreground">NDMC</strong>（Pusat Pengurusan Bencana Kebangsaan）は内務省の下にあり、2006年8月に設置されました。計画・分析部は多ハザードリスク地図を作成しSOPと事業継続計画を維持し、運用部はNaSOPに定める事故指揮システム（ICS）に基づいて災害指揮センター（DCC）を運営します。DCCは当直幕僚と監視員による24時間体制で「公式の災害情報を収集・調整・配信」し、AHAセンターと連絡し、県の人員・物流能力を超えた災害では国が全面的に指揮を引き取ります。2012年時点の体制は常勤25人と消防からの出向を含む25人、災害管理の年間予算は内務省・保健省・財務省に各500万ブルネイドルで、「なお改革途上」と評されていました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">BDMD</strong> (Brunei Darussalam Meteorological Department) is the national meteorological service under the Ministry of Transport and Infocommunications. Brunei joined WMO on 26 November 1984, and the service has carried its present name since 14 January 2013, having previously been the Brunei Darussalam Meteorological Service under the Department of Civil Aviation; no enabling Act or Order is cited on its website. BDMD is “responsible for monitoring and forecasting weather and issuing warnings or advisories ahead of a potential emergency”. It commissioned a dual-polarisation S-band Doppler radar with a 250 km scanning radius in April 2023, has collected high-frequency discharge data from four river sites with PWD since 2012 for the Southeastern Asia–Oceania Flash Flood Guidance system (SAOFFG), and released its strategic plan “Meteorology 2030” for 2026–2030 in May 2026. On tsunami, the IOC/UNESCO list of tsunami warning focal points names BDMD, validated through diplomatic channels because Brunei is not an IOC member state, whereas the 2022 CFE-DM handbook states that NDMC, as focal point, receives advisories from the South China Sea Tsunami Advisory Center; the two sources disagree. A Brunei Darussalam National Seismic Network (FDSN code BB) operated by a National Seismic Center has existed since 2013.
              </>
            ) : (
              <>
                <strong className="text-foreground">BDMD</strong>（Brunei Darussalam Meteorological Department、ブルネイ気象局）は運輸・情報通信省に属する国家気象機関です。ブルネイは1984年11月26日にWMOに加盟し、同局は2013年1月14日に民間航空局傘下のブルネイ気象サービス（BDMS）から現在の名称になりましたが、ウェブサイトに設置法令の記載はありません。BDMDは「潜在的な緊急事態に先立って気象を監視・予測し、警報または注意報を発表する」機関で、2023年4月に走査半径250kmのSバンド二重偏波ドップラーレーダーを稼働させ、2012年以降はPWDとともに4河川地点の高頻度流量データを東南アジア・オセアニア・フラッシュフラッド・ガイダンス（SAOFFG）へ提供し、2026年5月には2026〜2030年の戦略計画「Meteorology 2030」を公表しました。津波については、IOC／UNESCOの津波警報連絡窓口一覧がBDMDを掲げる（ブルネイはIOC非加盟国のため外交経路で確認）一方、CFE-DMの2022年ハンドブックはNDMCが連絡窓口として南シナ海津波警報センター（SCSTAC）の通報を受けると記しており、両者は一致していません。なお、2013年から国家地震センターが運用する「ブルネイ国家地震観測網」（FDSNコードBB）があります。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Hydrological monitoring belongs to the <strong className="text-foreground">Drainage and Sewerage Department</strong> of the Public Works Department (JKR) in the Ministry of Development. The 2012 JICA survey recorded the division of labour (“PWD is in charge of hydrological monitoring while the BDMS is in charge of meteorological monitoring”; “flood warnings are under the Public Works Department”) and noted a coloured staff gauge installed in the Kianggeh River to give the public flood-warning information. The Hydrology Unit of the Department has run a remote flood monitoring system since 2019, with IoT water-level sensors in the Sungai Kedayan and Sungai Damuan catchments, 32 real-time rain gauges, flood-prone area mapping and a Drainage Master Plan; no statute assigns it a flood-warning duty. Within the same ministry, the Geotechnical and Geological Section of the PWD Department of Technical Services holds the landslide records, but there is no landslide warning system. Haze is handled by <strong className="text-foreground">JASTRe</strong> (Jabatan Alam Sekitar, Taman dan Rekreasi; Department of Environment, Parks and Recreation), which administers the Environmental Protection and Management Act and publishes the PSI, with PM2.5 concentrations incorporated from 1 September 2026. The Ministry of Health supplies the health bands and advice; when haze set in on 30 August 2026, JASTRe, the Ministry of Health and BDMD issued a joint press release and SHENA, the national safety and health regulator, issued a workplace precaution notice.
              </>
            ) : (
              <>
                水文監視は開発省の公共事業局（PWD／JKR）に属する<strong className="text-foreground">排水下水局</strong>が担います。2012年のJICA調査は「水文監視はPWD、気象監視はBDMS」「洪水警報はPWDの所管」という分業を記録し、キアンゲ川に住民向けの色分け量水標が設置されていたことを伝えています。同局の水文ユニットは2019年から遠隔洪水監視システムを運用し、スンガイ・クダヤンとスンガイ・ダムアンの流域にIoT水位センサーを置き、32か所の雨量計を実時間で記録し、洪水常襲域の地図化と排水マスタープランを進めていますが、洪水警報の義務を課す法令はありません。同じ開発省のPWD技術サービス局地質工学・地質課は地すべり記録の保有機関ですが、地すべりの警報システムはありません。煙霧は環境保護管理法を所管する<strong className="text-foreground">JASTRe</strong>（Jabatan Alam Sekitar, Taman dan Rekreasi、環境・公園・レクリエーション局）が担い、PSIを公表し、2026年9月1日からPM2.5濃度を指数に組み込みました。健康区分と助言は保健省が担い、2026年8月30日に煙霧が発生した際にはJASTRe・保健省・BDMDが共同プレスリリースを出し、労働安全衛生の規制当局であるSHENAが職場向けの注意を発しました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                At district level, each of the four districts has a <strong className="text-foreground">District Disaster Management Committee</strong> and a <strong className="text-foreground">District Emergency Operation Centre</strong>, in which the District Office brings together the district branches of the armed forces, police, fire and rescue, medical and health services, PWD, community development, electrical, information and environment departments. The committee is chaired by the District Officer: in the Ulu Belait floods of June 2020 the Belait District Officer acted as DDMC chairman. The same pattern appears in the organisation charts for the other districts, although their chairs have not been individually documented. The acronym itself drifts, expanded as “District Disaster Management Centre” in the CFE-DM and JICA material and as “District Disaster Management Committee” in the 2025 DMSPF and recent press. The DMSPF assigns the DDMCs the task of coordinating “community-based preparedness initiatives and early warning systems”, but they have no statutory basis; each district prepares a response plan following the NDMC guideline. At the very end of the chain, the village heads (ketua kampong) and penghulu of the mukim and village consultative councils relay water levels and warnings. In the Tutong floods of September 2023 village heads passed water-level information to the agencies, and an acting village head compiled the counts of 56 houses and about 300 residents in Kuala Ungar–Rambai and about 168 residents in Kampong Benutan. NDMC launched a community-based disaster risk management programme with these councils in March 2010 with ADRC support, and a school-based programme with the Ministry of Education.
              </>
            ) : (
              <>
                県レベルでは、4県それぞれに<strong className="text-foreground">県災害管理委員会</strong>と<strong className="text-foreground">県緊急対応センター</strong>が置かれ、県事務所が王立ブルネイ軍、警察、消防救助、医療・保健、PWD、社会開発、電気、情報、環境の各県部局を束ねます。委員長は県長官で、2020年6月のウル・ブライト洪水ではブライト県長官がDDMC委員長として対応にあたりました。他の3県も組織図上は同じ構図ですが、委員長を個別に確認した資料はありません。略称の展開にも揺れがあり、CFE-DMやJICAの資料では「県災害管理センター」、2025年のDMSPFと近年の報道では「県災害管理委員会」と記されています。DMSPFはDDMCに「コミュニティ主体の備えと早期警報システムの調整」を割り当てましたが、法律上の設置根拠はなく、各県はNDMCの指針に沿って対応計画を作成しています。最末端では、ムキム・村協議会の村長（ketua kampong）とペンフル（penghulu）が水位情報と警報を中継します。2023年9月のトゥトン県洪水では村長が水位情報を関係機関に伝え、クアラ・ウンガル〜ランバイで56戸約300人、カンポン・ブヌタンで約168人という被災者数を村長代理が集計しました。NDMCは2010年3月にADRCの支援を受けてこれらの協議会とコミュニティ防災（CBDRM）を始め、教育省と学校防災を進めています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The last mile is carried by the <strong className="text-foreground">Royal Brunei Police Force</strong>, which the ASEAN assessment describes as providing “last-mile alerting to at-risk populations”; police cars with loudspeakers may drive around coastal areas, and under section 27 of Chapter 293 any police officer may exercise declared-disaster powers. The <strong className="text-foreground">Fire and Rescue Department</strong> of the Ministry of Home Affairs supplies rescue officers, handled the 30 fallen-tree and landslide incidents from 8 January 2026 and sandbagged Suri Seri Begawan Hospital in Belait together with the 3rd Battalion of the Royal Brunei Land Force. The <strong className="text-foreground">Royal Brunei Armed Forces</strong> provide evacuation transport: the CIMIC platoon of the 2nd Battalion RBLF (19 personnel with four-tonne trucks) worked with the Tutong DDMC in January 2025 and evacuated residents of Kampong Bukit Udal in January 2026. Shelter and rations are the mandate of <strong className="text-foreground">JAPEM</strong> (Jabatan Pembangunan Masyarakat; Community Development Department) of the Ministry of Culture, Youth and Sports. For public information, NaSOP gives the lead for risk communication in a national emergency to the Information Department of the Prime Minister’s Office, and the state broadcaster Radio Television Brunei runs five television channels and five radio networks. The Legislative Council (Majlis Mesyuarat Negara) exercises oversight through written and oral questions to the Minister of Development on flood warning and drainage in its 2025 and 2026 sessions.
              </>
            ) : (
              <>
                最後の一区間を担うのが<strong className="text-foreground">王立ブルネイ警察</strong>で、ASEANの評価は警察を「危険にさらされた住民への最終区間の警報」の担い手と位置づけています。沿岸部では拡声器付きの警察車両が巡回することがあり、第293章第27条はすべての警察官が宣言された災害状況の権限を行使できると定めています。内務省の<strong className="text-foreground">消防救助局</strong>は救助官の供給源であり、2026年1月8日以降の倒木・地すべり30件に対応し、王立ブルネイ陸軍第3大隊とともにブライト県のスリ・スリ・ブガワン病院に土嚢を積みました。<strong className="text-foreground">王立ブルネイ軍</strong>は避難輸送を担い、RBLF第2大隊のCIMIC小隊（19人、4トントラック）が2025年1月にトゥトン県DDMCと行動し、2026年1月にはカンポン・ブキット・ウダルの住民を避難させました。避難所と食料の提供は文化・青年・スポーツ省の<strong className="text-foreground">JAPEM</strong>（Jabatan Pembangunan Masyarakat、社会開発局）の任務です。情報伝達では、NaSOPが国家緊急時のリスクコミュニケーションの主導を首相府情報局に委ね、国営のラジオ・テレビ・ブルネイがテレビ5チャンネル・ラジオ5局を持ちます。立法評議会（Majlis Mesyuarat Negara）は2025年と2026年の会期で洪水警報と排水について開発大臣に書面・口頭質問を重ね、監督機能を果たしています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 4. Warning chain and levels ── */}
        <section>
          <h2 className={H2}>
            {en
              ? "4. Warning Chain and Warning Levels"
              : "4. 警報の流れと警報レベル"}
          </h2>
          <p className={P}>
            {en ? (
              <>
                Warnings in Brunei start from separate origins (weather at BDMD, river levels at the Drainage and Sewerage Department, haze at JASTRe, tsunami at regional centres abroad), are brought together at the NDMC Disaster Command Centre and the district committees, and reach households through broadcast, social media, hotlines and village heads. A typical sequence runs as follows.
              </>
            ) : (
              <>
                ブルネイの警報は、気象（BDMD）、河川水位（排水下水局）、煙霧（JASTRe）、津波（海外の地域センター）という別々の起点から出発し、NDMCの災害指揮センターと県の委員会で束ねられ、放送・SNS・ホットライン・村長を通じて住民に届きます。典型的な流れは次のとおりです。
              </>
            )}
          </p>
          <ol className={OL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Seasonal and regional inputs.</strong> BDMD issues seasonal outlooks; its press release of 2 November 2026 announced the start of the northeast monsoon (expected to last to the end of March 2027) and a “very strong” El Niño present since June 2026 with a probability above 83 percent of persisting to about March 2027, urging vigilance for flooding and flash floods. Regional inputs are the SAOFFG flash-flood guidance run by BMKG in Indonesia, hotspot counts from the ASEAN Specialised Meteorological Centre (ASMC) for haze, and tsunami bulletins from PTWC, NWPTAC and SCSTAC.
                </>
              ) : (
                <>
                  <strong className="text-foreground">季節・広域の入力。</strong>BDMDは季節見通しを公表します。2026年11月2日のプレスリリースでは、北東モンスーン入り（2027年3月末まで続く見込み）と、2026年6月以来「非常に強い」エルニーニョが83%を超える確率で2027年3月頃まで続く見込みを示し、洪水とフラッシュフラッドへの警戒を求めました。広域的には、インドネシアのBMKGが運用するSAOFFGのフラッシュフラッド・ガイダンス、煙霧についてはASEAN特別気象センター（ASMC）のホットスポット計数、津波についてはPTWC・NWPTAC・SCSTACの通報が入ります。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Weather advisory and weather warning.</strong> The BDMD Weather Forecast Centre issues a “weather advisory” to government agencies and the public when unsettled weather (for example a tropical depression) is likely, and a “weather warning” with a specific timeline, graded Yellow, Amber (Orange) or Red, when severe weather is expected within the country. Red was issued during Tropical Storm Kai-Tak in December 2017 and for Belait, Tutong and western Brunei-Muara in January 2026.
                </>
              ) : (
                <>
                  <strong className="text-foreground">気象注意報と気象警報。</strong>BDMDの天気予報センターは、熱帯低気圧などによる不安定な天候の可能性があれば政府機関と公衆に「気象注意報」を、国内で激しい気象が予想されれば具体的な時間帯を付した「気象警報」を黄・琥珀（橙）・赤の3段階で発表します。2017年12月の熱帯暴風雨カイタクと、2026年1月のブライト・トゥトン・ブルネイ・ムアラ西部では赤が発表されました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Hydrological monitoring.</strong> The Hydrology Unit of the Drainage and Sewerage Department observes IoT water-level sensors (Sungai Kedayan, Sungai Damuan) and 32 rain gauges in real time and pushes alerts to users through a connected mobile application. On the rivers of Tutong, Belait and Temburong, where sensors are still planned, village heads observe and relay water levels.
                </>
              ) : (
                <>
                  <strong className="text-foreground">水文監視。</strong>排水下水局の水文ユニットがIoT水位センサー（スンガイ・クダヤン、スンガイ・ダムアン）と32か所の雨量計を実時間で観測し、接続されたモバイルアプリで利用者に通知します。センサー設置が計画段階にとどまるトゥトン・ブライト・テンブロンの河川では、村長が水位を目視して中継します。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">National coordination.</strong> The NDMC Disaster Command Centre collects, coordinates and disseminates official information around the clock, activates agencies under the Incident Command System of NaSOP and liaises with the AHA Centre. When a disaster exceeds the logistics and personnel of a district, the national centre takes over command.
                </>
              ) : (
                <>
                  <strong className="text-foreground">国の調整。</strong>NDMCの災害指揮センターが24時間体制で公式情報を収集・調整・配信し、NaSOPの事故指揮システムに沿って各機関を動かし、AHAセンターと連絡します。県の人員・物流能力を超えた場合は国のセンターが指揮を引き取ります。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">District decision.</strong> The DDMC and DEOC under the District Officer coordinate on the ground and decide on evacuation, drawing on armed-forces trucks, the Fire and Rescue Department and JAPEM shelters. The legal route (declaration of a disaster situation by the Minister and an evacuation order by the Director) does not appear in the press reports of flood evacuations.
                </>
              ) : (
                <>
                  <strong className="text-foreground">県の判断。</strong>県長官が率いるDDMCとDEOCが現場を調整し、軍の車両、消防救助局、JAPEMの避難所を使って避難を判断します。法律上の経路（大臣による災害状況の宣言と局長の避難命令）は、洪水避難を伝える報道には現れません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Delivery to households.</strong> Warnings reach residents through RTB television and radio, the press, government websites and social media led by the Information Department, the Brunei WX mobile application, Weather Line 114, Talian Darussalam 123, SMS, mosque loudspeakers, police loudspeaker cars and village heads.
                </>
              ) : (
                <>
                  <strong className="text-foreground">住民への伝達。</strong>警報は、RTBのテレビ・ラジオ、報道、情報局が主導する政府ウェブサイトとSNS、Brunei WXアプリ、気象電話114、Talian Darussalam 123、SMS、モスクの拡声器、警察車両の拡声器、村長を通じて住民に届きます。
                </>
              )}
            </li>
          </ol>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={TH}>{en ? "Hazard" : "ハザード"}</th>
                  <th className={TH}>{en ? "Issuing body" : "発表機関"}</th>
                  <th className={TH}>{en ? "Levels / categories" : "区分・レベル"}</th>
                  <th className={TH}>{en ? "Channels" : "伝達手段"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TDH}>{en ? "Severe weather (heavy rain, wind, sea state)" : "激しい気象（強雨、強風、海象）"}</td>
                  <td className={TD}>{en ? "BDMD Weather Forecast Centre" : "BDMD天気予報センター"}</td>
                  <td className={TD}>{en ? "Weather advisory (likelihood of unsettled weather), then weather warning with a timeline in three colours: Yellow “Be Alert” (flash floods in low-lying areas and near riverbanks, reduced visibility, slippery roads, lightning); Amber/Orange “Be Prepared” (whole trees moving, localised power cuts, toppled signs, landslides on hilly terrain; move valuables to higher ground); Red “Take Action” (severe and widespread flooding, severe landslides, outdoor activity unsafe; follow orders of the authorities, call the emergency hotline). Rough-sea warnings also in three stages. Quantitative thresholds are not published." : "気象注意報（不安定な天候の可能性）、次いで時間帯を付した3色の気象警報。黄「警戒」（低地・河岸のフラッシュフラッド、視程低下、路面の滑り、雷）、琥珀／橙「準備」（樹木全体の揺れ、局地的停電、看板の転倒、丘陵地の地すべり、貴重品を高所へ）、赤「行動」（広域の激しい浸水、激しい地すべり、屋外活動は危険、当局の指示に従い緊急電話へ）。波浪警報も3段階。定量的な基準は公表されていません。"}</td>
                  <td className={TD}>{en ? "Brunei WX app, Weather Line 114, met.gov.bn, BDMD social media, RTB and press; onward through the NDMC DCC and the DDMCs" : "Brunei WXアプリ、気象電話114、met.gov.bn、BDMDのSNS、RTBと報道。NDMCのDCCとDDMCを経て下流へ"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "River and flash flood" : "河川洪水・フラッシュフラッド"}</td>
                  <td className={TD}>{en ? "Drainage and Sewerage Department, PWD (Ministry of Development); relayed by DDMCs and village heads" : "排水下水局（開発省PWD）。DDMCと村長が中継"}</td>
                  <td className={TD}>{en ? "No published public warning levels. Sensor alerts via a connected application in the Kedayan and Damuan catchments; a coloured staff gauge in the Kianggeh River (2012). A public SMS and digital platform for one pilot catchment is planned; SMS alerts and sirens are “subject to feasibility studies” (August 2025)." : "公表された住民向け警報レベルはなし。クダヤン・ダムアン流域では接続アプリによるセンサー通知、キアンゲ川には色分け量水標（2012年）。1流域を試行地とする住民向けSMS・デジタル基盤を計画中で、SMS警報とサイレンは「実現可能性調査の対象」（2025年8月）。"}</td>
                  <td className={TD}>{en ? "Village heads, DDMC/DEOC, police loudspeakers, mosque speakers; SMS planned" : "村長、DDMC／DEOC、警察の拡声器、モスクの拡声器。SMSは計画段階"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Haze" : "煙霧（ヘイズ）"}</td>
                  <td className={TD}>{en ? "JASTRe with the Ministry of Health and BDMD" : "JASTRe（保健省・BDMDと共同）"}</td>
                  <td className={TD}>{en ? "PSI: below 50 good, 50–100 moderate, 101–200 unhealthy (reduce strenuous outdoor activity); PM2.5 included since 1 September 2026; up to five updates a day (7 am, 9 am, 11 am, 2 pm, 4 pm) during hazy periods" : "PSI：50未満「良好」、50〜100「中程度」、101〜200「不健康」（激しい屋外活動を控える）。2026年9月1日からPM2.5を含む。煙霧期は1日最多5回（7時、9時、11時、14時、16時）更新"}</td>
                  <td className={TD}>{en ? "env.gov.bn, joint press releases, SHENA workplace notices, Talian Darussalam 123" : "env.gov.bn、共同プレスリリース、SHENAの職場向け通知、Talian Darussalam 123"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Tsunami" : "津波"}</td>
                  <td className={TD}>{en ? "Tsunami warning focal point receiving PTWC, NWPTAC and SCSTAC bulletins (BDMD according to the IOC list; NDMC according to CFE-DM 2022)" : "PTWC・NWPTAC・SCSTACの通報を受ける津波警報連絡窓口（IOCの一覧ではBDMD、CFE-DM 2022ではNDMC）"}</td>
                  <td className={TD}>{en ? "No national level scheme documented" : "国内の警報区分は文書化されていません"}</td>
                  <td className={TD}>{en ? "Not documented" : "文書化されていません"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Landslide" : "地すべり"}</td>
                  <td className={TD}>{en ? "No dedicated issuer" : "専任の発表機関なし"}</td>
                  <td className={TD}>{en ? "Only within BDMD weather warnings (Amber: landslides on hilly terrain; Red: severe landslides)" : "BDMDの気象警報の中でのみ言及（琥珀：丘陵地の地すべり、赤：激しい地すべり）"}</td>
                  <td className={TD}>{en ? "As for weather warnings" : "気象警報と同じ"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Declared disaster situation (legal tier)" : "災害状況の宣言（法的段階）"}</td>
                  <td className={TD}>{en ? "Minister responsible for disaster management (Cap. 293 s. 22)" : "災害管理担当大臣（第293章第22条）"}</td>
                  <td className={TD}>{en ? "Single tier: 7 days, extendable to 14 days and then in steps of up to 7 days; unlocks the evacuation and movement-control powers of the Director (s. 30)" : "単一段階：7日間、14日まで延長後は7日以内ずつ延長。局長の避難・移動制限権限（第30条）が発動"}</td>
                  <td className={TD}>{en ? "Gazette order" : "官報による命令"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                Dissemination is strong on broadcast and social media and weak on targeted, authenticated alerting. Mobile penetration is high (123 subscriptions per 100 inhabitants, about 94 percent of people owning a mobile phone, 99 percent of the population covered by a mobile network and 95 percent by 4G), yet no source documents cell broadcast or a national SMS alert platform, and in August 2025 the Minister of Development told the Legislative Council that flood SMS alerts and sirens are “subject to feasibility studies” to be rolled out in phases under future National Development Plans. The 2022 CFE-DM description of the last mile (TV, radio, SMS, mosque speakers, police cars, with gaps in reaching fishing communities and vessels) is almost word for word the 2012 JICA description, which suggests that little has changed in a decade. On impact-based forecasting, the BDMD colour code is impact-oriented in its public advice, but warnings are issued on meteorological grounds (the potential of rain and wind to cause damage), and the ASEAN assessment scored the question “are impact-based early warnings communicated effectively to prompt action by target groups” at 1.5 out of 5. No source indicates adoption of the Common Alerting Protocol (CAP). As for Early Warnings for All, the Ministry of Transport and Infocommunications stated on World Meteorological Day in March 2025 that BDMD is “investing in modern forecasting technologies, capacity-building programmes, and public awareness campaigns as part of the Early Warnings for All initiative” and called for “a whole-of-government and whole-of-nation approach”; Brunei is not among the EW4All priority countries and no national roadmap has been published.
              </>
            ) : (
              <>
                伝達手段は放送とSNSに厚く、個人に届く認証付きの警報に薄いのが特徴です。携帯電話の普及は高く（人口100人あたり123契約、約94%が携帯電話を所有、人口の99%がモバイル網、95%が4Gの圏内）、それでもセルブロードキャストや全国的なSMS警報基盤の存在を示す資料はなく、開発大臣は2025年8月の立法評議会で、洪水のSMS警報とサイレンは「実現可能性調査の対象」であり、将来の国家開発計画のもとで段階的に展開すると答えました。CFE-DMの2022年ハンドブックが記す最終区間の描写（テレビ、ラジオ、SMS、モスクの拡声器、警察車両、漁業コミュニティと船舶に届きにくいという欠落）は、2012年のJICA調査の記述とほぼ同一で、10年間ほとんど変化がなかったことを示唆します。影響予測型予報については、BDMDの色別警報は住民向けの助言において影響志向ですが、発表の判断は降雨・風が被害を起こす潜在力という気象基準に基づいており、ASEAN評価は「影響予測型早期警報は対象集団の行動を促すよう効果的に伝えられているか」を5点中1.5点と採点しました。共通警報プロトコル（CAP）の採用を示す資料はありません。Early Warnings for All（EW4All）については、運輸・情報通信省が2025年3月の世界気象デーで、BDMDが「EW4Allイニシアティブの一環として現代的な予測技術、能力構築、啓発への投資」を行うと表明し「政府全体・国民全体のアプローチ」を呼びかけましたが、ブルネイはEW4Allの優先国には含まれておらず、国としてのロードマップは公表されていません。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 5. Recent reforms ── */}
        <section>
          <h2 className={H2}>
            {en
              ? "5. Institutional Reforms since 2020"
              : "5. 近年の制度改革（2020〜2026年）"}
          </h2>
          <ul className={UL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">2019–2022 —</strong> Remote river monitoring. The Hydrology Unit of the Drainage and Sewerage Department has operated a remote flood monitoring system since 2019, and in January 2022 the Ministry of Development commissioned LoRaWAN ultrasonic water-level sensors and rain gauges for Brunei-Muara catchments, where “a nearby canal can go from empty to overflowing in 20 minutes”. It is the first automated element of flood warning, but it covers only Brunei-Muara.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2019〜2022年 —</strong> 遠隔河川監視。排水下水局の水文ユニットは2019年から遠隔洪水監視システムを運用し、2022年1月には開発省がブルネイ・ムアラ県の流域にLoRaWAN方式の超音波水位センサーと雨量計を導入しました（「近くの水路は20分で空から溢水に変わる」）。洪水警報の初めての自動化要素ですが、対象はブルネイ・ムアラ県に限られます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">July 2020 —</strong> Brunei Darussalam National Climate Change Policy 2020, with Strategy 8 “Climate Resilience and Adaptation”. It frames adaptation policy and the Adaptation and Resilience Working Group cited by the DMSPF, but contains no warning provisions.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2020年7月 —</strong> ブルネイ国家気候変動政策2020。戦略8「気候レジリエンスと適応」を掲げ、DMSPFが引用する適応・レジリエンス作業部会の枠組みとなりましたが、警報に関する規定はありません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">5 April 2023 —</strong> BDMD opened its Weather Radar Building housing a dual-polarisation S-band Doppler radar with a 250 km scanning radius under the 11th National Development Plan (RKN-11), linked to the MTIC target of 90 percent accuracy in aviation weather warnings. It is the only radar listed for Brunei in the 2024 WMO/JMA radar inventory and the main upgrade to detection capacity in the period.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2023年4月5日 —</strong> BDMDが第11次国家開発計画（RKN-11）の下で走査半径250kmのSバンド二重偏波ドップラーレーダーを収めた気象レーダー棟を開所しました。運輸・情報通信省の航空気象警報精度90%という目標に結びつけられ、2024年のWMO／JMAレーダー目録でブルネイに記載された唯一のレーダーであり、この期間最大の観測能力の更新です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">February 2024 —</strong> Publication of the ASEAN/PDC assessment “Strengthening ASEAN Multi-Hazard End-to-End Early Warning Systems”, the only structured external audit of the Brunei warning chain, scoring risk knowledge 2.4, monitoring 3.0, dissemination 2.5 and preparedness 2.0 out of 5 with “very high” analysis confidence.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年2月 —</strong> ASEAN／PDCの評価報告「ASEANマルチハザード一貫型早期警報システムの強化」が公表されました。ブルネイの警報連鎖に対する唯一の構造化された外部監査で、リスク知識2.4、監視3.0、伝達2.5、備え2.0（5点満点）と採点し、分析の信頼度は「非常に高い」とされました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">2024 —</strong> Consolidation of the Disaster Management Order 2006 as Laws of Brunei, Chapter 293, Disaster Management Act (Revised Edition 2024). The DMSPF presents this as “strengthening its legal standing”, but the 47 sections are unchanged and nothing was added on warnings.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年 —</strong> 2006年災害管理令がブルネイ法令集第293章「災害管理法（2024年改訂版）」として再編されました。DMSPFはこれを「法的地位の強化」と位置づけますが、47条の内容は変わらず、警報に関する規定は追加されていません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">21–24 October 2024 —</strong> Brunei chaired the ASEAN Committee on Disaster Management and the AHA Centre Governing Board and hosted the 45th ACDM, the 21st Governing Board and the 12th ASEAN Ministerial Meeting on Disaster Management in Jerudong, with the NDMC Director chairing the ACDM Plus Japan, China and Republic of Korea meetings. The chairmanship raised the regional profile of NDMC rather than changing domestic arrangements.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年10月21〜24日 —</strong> ブルネイがASEAN災害管理委員会（ACDM）とAHAセンター理事会の議長を務め、ジュルドンで第45回ACDM、第21回理事会、第12回ASEAN防災閣僚会議を主催し、NDMC局長がACDMプラス日本・中国・韓国会合の議長を務めました。国内制度の変更ではなく、NDMCの地域的な位置づけを高めた出来事です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">March 2025 —</strong> The Minister of Development announced to the Legislative Council a B$25 million allocation in the FY2025/26 budget for flood mitigation and disaster management, a Tutong scheme (drainage, retention ponds, water-control gates on the Tutong River), the Bunut River reservoir, Kedayan River works including “a water-level alert system for early public warnings”, and floodplain studies for Temburong and the Belait River; the Drainage Master Plan and floodplain study was tendered (request for quotation 19 March 2025, tender closed 22 July 2025).
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年3月 —</strong> 開発大臣が立法評議会で、2025/26年度予算の洪水対策・災害管理費2,500万ブルネイドル、トゥトン事業（排水路、調整池、トゥトン川の水門）、ブヌット川貯水池、「住民への早期警報のための水位警報システム」を含むクダヤン川工事、テンブロンとブライト川の氾濫原調査を表明しました。排水マスタープランと氾濫原調査は入札に付されました（見積依頼2025年3月19日、入札締切7月22日）。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">22–23 March 2025 —</strong> On World Meteorological Day the Ministry of Transport and Infocommunications committed BDMD to the Early Warnings for All initiative and presented the colour-coded warning system as three levels “Yellow, Orange, and Red”, the middle level previously labelled Amber. This is the first public EW4All commitment by Brunei.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年3月22〜23日 —</strong> 世界気象デーに運輸・情報通信省がBDMDのEarly Warnings for Allへの取り組みを表明し、色別警報を「黄・橙・赤」の3段階と紹介しました（中間段階は従来「琥珀」と呼ばれていました）。ブルネイとして初めての公のEW4Allコミットメントです。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">2025 —</strong> NDMC published the Disaster Management Strategic Policy Framework (Volume 1.0; posted on its website in July 2026), superseding SNAP 2012–2025, proposing the National Committee on Disaster Management and assigning early-warning coordination to the District Disaster Management Committees, together with the 2025 edition of its Basic Public Safety Guidebook. The framework defers targets and implementing agencies to an operational phase, so its effect on the warning chain cannot yet be judged.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年 —</strong> NDMCが災害管理戦略政策枠組み（第1.0版、ウェブ掲載は2026年7月）を公表し、SNAP 2012〜2025を置き換え、国家災害管理委員会の新設を提案し、早期警報の調整を県災害管理委員会に割り当てました。あわせて「公衆安全基本ガイドブック」2025年版を刊行しています。目標値と実施機関は運用段階に先送りされており、警報連鎖への効果はまだ判断できません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">4 August 2025 —</strong> In a written answer to the Legislative Council, the Minister of Development set out the extension of river monitoring under RKN-12: more than 100 additional sensors on the Tutong, Belait and Temburong rivers, a single pilot catchment for an open public monitoring system with SMS and digital platforms, SMS alerts and sirens subject to feasibility studies, and a Drainage Data Management Support System (Phase 1) developed with BDMD and expected in December 2025. It is the clearest official statement that public flood alerting is still at the planning stage.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年8月4日 —</strong> 開発大臣が立法評議会への書面回答で、RKN-12による河川監視の拡張を示しました。トゥトン・ブライト・テンブロン各川への100基を超えるセンサー追加、SMSとデジタル基盤を伴う公開監視システムの1流域での試行、実現可能性調査の対象となるSMS警報とサイレン、BDMDと共同開発し2025年12月に提供予定の排水データ管理支援システム（第1期）です。住民向け洪水警報がなお計画段階にあることを示す最も明確な公式声明です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">14 March 2026 —</strong> The Ministry of Development told the Legislative Council that the drainage design standard for strategic areas is being raised from a 1-in-50-year to a 1-in-100-year event and named the recurring flood hotspots (Kampong Pasai and Mulaut, Kampong Kupang, the Pekan Belait area, Kampong Mumong, Masjid Pekan Seria, Mukim Keriam). The flood-prone area had already fallen from 328 km² in 2020 to 285 km² in 2024.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年3月14日 —</strong> 開発省が立法評議会で、戦略的地域の排水設計基準を50年確率から100年確率へ引き上げると述べ、繰り返し浸水する地点（カンポン・パサイとムラウト、カンポン・クパン、ペカン・ブライト周辺、カンポン・ムモン、マスジド・ペカン・セリア、ムキム・クリアム）を示しました。洪水常襲域は2020年の328km²から2024年の285km²にすでに縮小しています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">25 May 2026 —</strong> BDMD released its Strategic Plan 2026–2030 (“Meteorology 2030”) and the Brunei Darussalam Climate Book, covering service quality, system modernisation, staff competencies, governance and stakeholder cooperation.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年5月25日 —</strong> BDMDが戦略計画2026〜2030「Meteorology 2030」と「ブルネイ気候ブック」を公表しました。サービスの品質、システム近代化、職員の能力、ガバナンス、関係機関との連携を柱としています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">1 September 2026 —</strong> JASTRe incorporated PM2.5 concentrations into the PSI and moved to five updates a day during hazy periods, with a joint JASTRe, Ministry of Health and BDMD press release and a SHENA workplace notice. It is the one warning product whose content changed in the period.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年9月1日 —</strong> JASTReがPSIにPM2.5濃度を組み込み、煙霧期は1日5回の更新に移行しました。JASTRe・保健省・BDMDの共同プレスリリースとSHENAの職場向け通知が伴いました。この期間に内容が変わった唯一の警報プロダクトです。
                </>
              )}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── 6. Current challenges ── */}
        <section>
          <h2 className={H2}>
            {en ? "6. Current Challenges" : "6. 現在の課題"}
          </h2>
          <ul className={UL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">A statute without a warning clause (structural).</strong> Chapter 293 regulates declared disaster situations and says nothing about who issues warnings, about warning levels or about district committees; none of its 47 sections was changed between 2006 and the 2024 Revised Edition. Warning roles rest on NaSOP and on the 2025 DMSPF, which postpones targets and implementing agencies to an operational phase and introduces a National Committee on Disaster Management with no legal basis. NDMC itself lists the need to “establish comprehensive legal and regulatory framework” among the gaps the framework is meant to fix.
                </>
              ) : (
                <>
                  <strong className="text-foreground">警報条項のない法律（構造的課題）。</strong>第293章は宣言された災害状況を規律するだけで、警報の発表主体、警報レベル、県委員会について何も定めておらず、47条のいずれも2006年から2024年改訂版まで変更されていません。警報の役割はNaSOPと2025年のDMSPFに依拠しますが、DMSPFは目標値と実施機関を運用段階に先送りし、法的根拠のない国家災害管理委員会を導入しています。NDMC自身も、枠組みが埋めるべき欠落として「包括的な法的・規制的枠組みの確立」を挙げています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Three ministries, no data or terminology protocol (structural).</strong> Weather sits with BDMD under MTIC, river levels and haze with the Ministry of Development, and command with NDMC under the Ministry of Home Affairs. The 2024 ASEAN assessment found that “efforts are required for the establishment of interagency protocols for the exchange of monitoring systems data and baseline data, as well as … interagency protocols to ensure consistency of warning language”. The only joint data project identified is the Drainage Data Management Support System (Phase 1) between the Drainage and Sewerage Department and BDMD, and the DMSPF calls for a “centralized disaster information system” that does not yet exist.
                </>
              ) : (
                <>
                  <strong className="text-foreground">3省に分かれ、データと用語の取り決めがない（構造的課題）。</strong>気象は運輸・情報通信省のBDMD、河川水位と煙霧は開発省、指揮は内務省のNDMCが持ちます。2024年のASEAN評価は「監視システムのデータと基礎データを交換する機関間プロトコル、および警報用語の一貫性を確保する機関間プロトコルの確立に向けた取り組みが必要」と指摘しました。確認できる唯一の共同データ事業は排水下水局とBDMDの排水データ管理支援システム（第1期）で、DMSPFが求める「一元的な災害情報システム」はまだ存在しません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Risk knowledge not used in warning design (structural).</strong> The ASEAN assessment scored disaster risk knowledge at 2.4 and the question “is risk information properly incorporated into the early warning system” at 1.0 out of 5, noting that “designated flood evacuation shelters have been inundated by flood waters, leaving evacuees stranded and without access to supplies” and that critical infrastructure, secondary risks and social vulnerability are poorly assessed. The Batang Mitus landslide of 29 January–6 February 2026, which cut 16 sections of the main pipeline and left Brunei-Muara without water while hospitals ran on contingency supplies, is exactly such a cascading infrastructure risk, and no prior warning was reported.
                </>
              ) : (
                <>
                  <strong className="text-foreground">リスク情報が警報設計に使われていない（構造的課題）。</strong>ASEAN評価は災害リスク知識を2.4点、「リスク情報は早期警報システムに適切に組み込まれているか」を5点中1.0点と採点し、「指定された洪水避難所が浸水し、避難者が取り残され物資を得られなかった」こと、重要インフラ、二次的リスク、社会的脆弱性の評価が不十分であることを指摘しました。2026年1月29日〜2月6日のバタン・ミトゥス地すべりは送水幹線16か所を切断し、病院が非常用供給に頼る中でブルネイ・ムアラ県を断水させました。まさにこの種の連鎖的なインフラリスクであり、事前の警報は報じられていません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Flood warning still observe-and-relay (operational).</strong> Sensor-based alerting exists only in Brunei-Muara catchments; on the Tutong, Belait and Temburong rivers village heads still watch the water and relay what they see, as in the Tutong floods of September 2023, January 2025 and January 2026. The 2012 JICA survey already found that Tutong “needs to establish a flood monitoring system, early warning system”, and in August 2025 the more than 100 sensors for those rivers were still “planned”, with SMS alerts and sirens under feasibility study. CFE-DM describes river monitoring as telemetry “or, in cases where this technology is not deployed or is inoperable, manual monitoring with significant mobilized manpower”, and the OECD reportedly characterised the system in 2024 as operated manually and therefore “less efficient and unnecessarily slow”.
                </>
              ) : (
                <>
                  <strong className="text-foreground">洪水警報はなお「目視して伝える」方式（運用上の課題）。</strong>センサーに基づく通知はブルネイ・ムアラ県の流域に限られ、トゥトン・ブライト・テンブロンの河川では、2023年9月、2025年1月、2026年1月のトゥトン県洪水のように、村長が水位を見て伝える方式が続いています。2012年のJICA調査はすでにトゥトン県に「洪水監視システムと早期警報システムの構築が必要」と記していましたが、2025年8月時点でこれらの河川への100基超のセンサーはなお「計画中」、SMS警報とサイレンは実現可能性調査の段階でした。CFE-DMは河川監視をテレメトリー「またはその技術が未配備か不稼働の場合は、相当の人員を動員する手動監視」と記述し、OECDも2024年に、システムが手動運用で「効率が低く不必要に遅い」と評したと伝えられています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Warnings without action guidance and no feedback loop (operational).</strong> The ASEAN assessment found that “warning messages lack the vital guidance to trigger reactions” and that there is “no evidence that Brunei Darussalam has established feedback mechanisms or undertakes evaluations of its warning communication strategies”; impact-based communication scored 1.5 and dissemination 2.5. The last mile remains weakest for fishing communities and vessels at sea, a gap described in identical terms in 2012 and 2022, and no cell broadcast or national SMS platform has been evidenced despite 99 percent mobile coverage.
                </>
              ) : (
                <>
                  <strong className="text-foreground">行動指針のない警報と、検証の仕組みの不在（運用上の課題）。</strong>ASEAN評価は「警報メッセージには反応を引き起こすための不可欠な指針が欠けている」とし、「ブルネイがフィードバックの仕組みを設け、警報コミュニケーション戦略を評価している証拠はない」と記しました。影響予測型の伝達は1.5点、伝達全体は2.5点です。最終区間は漁業コミュニティと海上の船舶に対して最も弱く、この欠落は2012年と2022年に同じ言葉で記述されています。モバイル網の人口カバー率99%にもかかわらず、セルブロードキャストや全国SMS基盤の存在は確認されていません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Low frequency, low preparedness, thin staffing (structural and operational).</strong> Preparedness and response scored 2.0, “in the early stages of development” because of a “limited hazard profile, which has led to public complacency”. NDMC listed in 2015 “lack of staff/manpower” and the difficulty of developing “sustained buy in/focus from the various agencies” because “disasters are relatively rare”; in 2019 the Minister of Home Affairs said the June and October floods “could have been prevented” with a more proactive approach. The Centre had 25 permanent staff in 2012, no later figure has been published, and in 2026 BDMD was led by an acting director.
                </>
              ) : (
                <>
                  <strong className="text-foreground">災害が稀であることによる備えの弱さと人員の薄さ（構造的・運用上の課題）。</strong>備えと対応は2.0点で、「限られたハザード・プロファイルが公衆の油断を招いた」ため「発展の初期段階」にあるとされました。NDMCは2015年に「職員・人員の不足」と、「災害が比較的稀」であるために「各機関の持続的な関与と集中」を得にくいことを挙げ、2019年には内務大臣が同年6月と10月の洪水は「より能動的な対応で防げた」と述べました。NDMCの常勤職員は2012年の25人以降公表されておらず、2026年のBDMDは局長代理が率いています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Dependence on external centres for detection (structural).</strong> Tsunami bulletins come from PTWC, NWPTAC and SCSTAC, and the national focal point is recorded differently by the IOC and by CFE-DM; haze attribution relies on ASMC hotspot counts; flash-flood guidance comes from SAOFFG hosted by BMKG; and the country operates a single weather radar. The ASEAN assessment recorded that Brunei “remains reliant on external bodies for monitoring and alerting, particularly for tsunamis” and that national stakeholders “noted the need to further strengthen their own internal hazard detection systems”.
                </>
              ) : (
                <>
                  <strong className="text-foreground">検知の海外依存（構造的課題）。</strong>津波通報はPTWC・NWPTAC・SCSTACから届き、国内の連絡窓口はIOCとCFE-DMで異なって記録されています。煙霧の発生源推定はASMCのホットスポット計数に、フラッシュフラッド・ガイダンスはBMKGが運用するSAOFFGに依存し、気象レーダーは1基のみです。ASEAN評価は、ブルネイが「特に津波について、監視と警報を外部機関に依存し続けている」こと、国内の関係機関が「自前のハザード検知システムをさらに強化する必要を指摘した」ことを記録しています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Landslides and slope development without a warning system (structural).</strong> ThinkHazard rates landslide hazard “high”, yet landslide risk is communicated only inside BDMD weather warnings (“landslides on hilly terrain” at Amber). The PWD Geotechnical and Geological Section holds the records, no dedicated landslide warning exists, and the DMSPF names “the insufficient mainstreaming of disaster risk reduction considerations into social, environmental, physical, and land-use planning” among the gaps to be fixed. The 2026 Batang Mitus landslide and the 30 fallen-tree and landslide incidents of January 2026 illustrate the exposure.
                </>
              ) : (
                <>
                  <strong className="text-foreground">警報のない地すべりと斜面開発（構造的課題）。</strong>ThinkHazardは地すべりハザードを「高」としていますが、地すべりリスクはBDMDの気象警報の中（琥珀段階の「丘陵地の地すべり」）でしか伝えられていません。PWDの地質工学・地質課が記録を持つものの専用の地すべり警報はなく、DMSPFは「社会・環境・物理・土地利用計画への防災の主流化の不足」を埋めるべき欠落に挙げています。2026年のバタン・ミトゥス地すべりと同年1月の倒木・地すべり30件は、その曝露を示しています。
                </>
              )}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── 7. International cooperation ── */}
        <section>
          <h2 className={H2}>
            {en
              ? "7. International Cooperation and Japan"
              : "7. 国際協力と日本の関与"}
          </h2>
          <p className={P}>
            {en ? (
              <>
                The early-warning arrangements of Brunei are embedded in ASEAN mechanisms. NDMC is the national focal point for the ASEAN Committee on Disaster Management under AADMER, its Director sits on the AHA Centre Governing Board, and the Disaster Command Centre is linked to the AHA Centre operations centre. In 2024 Brunei chaired both the ACDM and the Governing Board and hosted the 12th ASEAN Ministerial Meeting on Disaster Management in Jerudong on 21–24 October 2024. The One ASEAN One Response roadshow began in Brunei on 6 June 2023; Brunei contributed to the 2018 Central Sulawesi response and hosted ARDEX in 2016 and the ADMM-Plus humanitarian assistance and military medicine exercise in 2013. The DMSPF is explicitly aligned with the AADMER Work Programmes 2021–2025 and 2026–2030 and with ASEAN SHIELD, and Brunei has launched an initiative to establish an ASEAN Centre for Climate Change. Technically, the country depends on the ASEAN Specialised Meteorological Centre for hotspot information, on SAOFFG hosted by BMKG for flash-flood guidance, and on PTWC, NWPTAC and SCSTAC for tsunami advisories. Brunei has been a WMO member since 1984 but is not an IOC member state, and it does not appear among the 14 members of the ESCAP/WMO Typhoon Committee.
              </>
            ) : (
              <>
                ブルネイの予警報はASEANの枠組みに深く組み込まれています。NDMCはAADMERのもとでASEAN災害管理委員会（ACDM）の国家連絡窓口であり、その局長はAHAセンター理事会に席を持ち、災害指揮センターはAHAセンターの運用センターと接続されています。2024年にはブルネイがACDMと理事会の双方の議長を務め、2024年10月21〜24日にジュルドンで第12回ASEAN防災閣僚会議を主催しました。2023年6月6日にはOne ASEAN One Responseのロードショーがブルネイから始まり、2018年の中部スラウェシ地震では支援を提供し、2016年のARDEXと2013年のADMMプラス人道支援・軍事医療演習の主催国でもあります。DMSPFはAADMER作業計画2021〜2025および2026〜2030、ASEAN SHIELDとの整合を明記し、ブルネイはASEAN気候変動センター設立の構想も提唱しています。技術面では、煙霧のホットスポット情報をASEAN特別気象センター（ASMC）に、フラッシュフラッド・ガイダンスをBMKGが運用するSAOFFGに、津波通報をPTWC・NWPTAC・SCSTACに依存しています。ブルネイは1984年からWMO加盟国ですがIOC加盟国ではなく、ESCAP／WMO台風委員会の14加盟国にも名を連ねていません。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Involvement by Japan has taken place mainly through regional channels rather than a bilateral warning project. JICA produced a country report on disaster management in Brunei in 2012 and pointed to the need for “further institutionalization of NDMC”, training for disaster management specialists and community hazard maps. The Asian Disaster Reduction Center supported the launch of community-based disaster risk management in March 2010, and in October 2015 Brunei reported on its arrangements at the 13th ASEAN-Japan High Level Officials Meeting on Caring Societies hosted by the Japanese Ministry of Health, Labour and Welfare. In meteorology, a BDMD officer took part in the WMO/ASEAN radar workshop of January 2024 under the WMO Regional Association V capacity-building programme in radar techniques run with JMA and JICA, and the BDMD website displays JMA satellite imagery. The Cabinet Office Disaster Management Bureau attended the 8th ACDM Plus Japan meeting chaired by the NDMC Director in October 2024. Other partners include the United States (Incident Command System training by the US Forest Service, the CFE-DM reference handbooks and the Pacific Disaster Center assessment), Singapore (emergency rapid assistance team training and a Brunei liaison officer at the Changi Regional HADR Coordination Centre) and China (the Hengyi Industries emergency exercise of January 2021 with NDMC at Pulau Muara Besar). Bilateral technical programmes dedicated to early warning in Brunei are thin in the public record; institutional investment has gone into ASEAN governance roles instead.
              </>
            ) : (
              <>
                日本の関与は、二国間の警報プロジェクトというより地域協力の経路を通じたものです。JICAは2012年にブルネイの防災に関する国別報告書をまとめ、「NDMCのさらなる制度化」、防災専門家の養成、コミュニティ・ハザードマップの必要性を指摘しました。アジア防災センター（ADRC）は2010年3月のコミュニティ防災導入を支援し、2015年10月には厚生労働省主催の第13回ASEAN・日本社会保障ハイレベル会合でブルネイが自国の体制を報告しています。気象分野では、JMAとJICAが実施するWMO第V地区のレーダー技術能力構築事業の2024年1月のWMO／ASEANレーダーワークショップにBDMD職員が参加し、BDMDのウェブサイトはJMAの衛星画像を表示しています。2024年10月にNDMC局長が議長を務めた第8回ACDMプラス日本会合には内閣府防災担当が出席しました。その他の協力相手として、米国（森林局による事故指揮システム研修、CFE-DMのハンドブック、太平洋災害センターによる評価）、シンガポール（緊急迅速支援チーム訓練とチャンギ地域HADR調整センターへの連絡官派遣）、中国（2021年1月にプラウ・ムアラ・ブサールでNDMCと実施した恒逸（Hengyi）緊急対応演習）があります。ブルネイの早期警報に特化した二国間の技術プログラムは公開資料では乏しく、制度的な投資はASEANの統治的役割に向けられてきました。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 8. Conclusion ── */}
        <section>
          <h2 className={H2}>{en ? "8. Conclusion" : "8. まとめ"}</h2>
          <p className={P}>
            {en ? (
              <>
                What is distinctive about the institutional design of Brunei is not the age of its law but its type. The Disaster Management Order 2006 is an emergency-powers instrument that defines what may be done after the Minister has declared a disaster situation; re-issued in 2024 as Chapter 293, it still contains not one section on who issues warnings or who decides evacuation in a district. That space is filled by a statutory plan (NaSOP), by the 2025 policy framework (DMSPF) and, in practice, by the NDMC Disaster Command Centre and the District Officer-led committees. The three monitoring streams owned by three ministries converge on the Command Centre by operational habit, but because no protocol binds the agencies to share data or use common warning language, integration depends on people and practice rather than on rules.
              </>
            ) : (
              <>
                ブルネイの制度設計で際立つのは、法律の古さではなくその型です。2006年災害管理令は、大臣が災害状況を宣言した後に何ができるかを定める緊急権限法であり、2024年に第293章として再編された後も、誰が警報を出し、誰が県で避難を判断するかを定める条文は一つもありません。その空白を、法定計画（NaSOP）と2025年の政策枠組み（DMSPF）が、実務ではNDMCの災害指揮センターと県長官が率いる委員会が埋めています。3省が持つ3つの監視の流れは運用上の慣行として指揮センターに集まりますが、データ共有と共通の警報用語を機関に義務づける取り決めがないため、統合は規則ではなく人と慣行に依存しています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The main unresolved question is whether the operational phase of the DMSPF will actually produce what the framework promises: a legal position for the district committees and the warning-issuing agencies, inter-agency protocols, and a flood warning that reaches residents directly. In law, that would mean writing warning authority and the district tier into Chapter 293; in organisation, a common data and terminology protocol between BDMD, the Drainage and Sewerage Department and NDMC, and a decision on SMS alerts and sirens that have remained under feasibility study. Rarity of disasters can be a reason to postpone such steps, or, in a state of this size, a condition that makes a single integrated system easier to build than elsewhere. The floods and the water outage of January and February 2026 have made the choice more visible.
              </>
            ) : (
              <>
                未解決の最大の問いは、DMSPFの運用段階が枠組みの約束するもの、すなわち県委員会と警報発表機関の法的位置づけ、機関間プロトコル、住民に直接届く洪水警報を実際に生み出すかどうかです。法律面では第293章に警報の発表権限と県レベルの組織を書き込むこと、組織面ではBDMD・排水下水局・NDMCの間でデータと用語の共通プロトコルを定め、長く実現可能性調査にとどまってきたSMS警報とサイレンについて判断を下すことがそれにあたります。災害が稀であることはこうした措置を先送りする理由にもなり得ますが、この規模の国では、他国より統合された一つの制度を作りやすい条件にもなり得ます。2026年1〜2月の洪水と断水は、その選択をより見えやすいものにしました。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── References ── */}
        <section>
          <h2 className={H2}>References</h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Government of Brunei Darussalam (2006). Constitution of Brunei Darussalam (Order under Article 83(3)): Disaster Management Order, 2006 (S 26/2006). <em>Government Gazette, Part II, 2 March 2006</em> (FAOLEX copy). https://faolex.fao.org/docs/pdf/bru87653_2006.pdf
            </li>
            <li>
              Government of Brunei Darussalam (2024). Laws of Brunei, Chapter 293: Disaster Management Act (Revised Edition 2024, B.L.R.O. 7/2024). <em>FAOLEX</em>. https://faolex.fao.org/docs/pdf/bru087653.pdf
            </li>
            <li>
              National Disaster Management Centre (2025). Disaster Management Strategic Policy Framework (DMSPF), Volume 1.0. <em>NDMC, Ministry of Home Affairs, Brunei Darussalam</em>. https://www.ndmc.gov.bn/wp-content/uploads/2026/07/Disaster-Management-Strategic-Policy-Framework-DMSPF.pdf
            </li>
            <li>
              National Disaster Management Centre (2026). Pusat Perintah Bencana (DCC); Bahagian Operasi; Bahagian Perancangan dan Analisa; Publikasi. <em>ndmc.gov.bn</em>. https://www.ndmc.gov.bn/
            </li>
            <li>
              ASEAN Secretariat and Pacific Disaster Center (2024). Strengthening ASEAN Multi-Hazard End-to-End Early Warning Systems: Assessment Report. <em>Pacific Disaster Center</em>, February 2024. https://www.pdc.org/wp-content/uploads/ASEAN_E2E_Report_Final_vF.pdf
            </li>
            <li>
              Center for Excellence in Disaster Management and Humanitarian Assistance (2022). Brunei Darussalam Disaster Management Reference Handbook, August 2022. <em>CFE-DM</em>. https://www.cfe-dmha.org/LinkClick.aspx?fileticket=wqnWHgroAn8%3D&amp;portalid=0
            </li>
            <li>
              Japan International Cooperation Agency (2012). Brunei Darussalam Country Report (disaster management). <em>JICA Report Library</em>. https://openjicareport.jica.go.jp/pdf/12085536.pdf
            </li>
            <li>
              Brunei Darussalam Meteorological Department (2026). Official website and Weather page. <em>met.gov.bn</em>. https://met.gov.bn/
            </li>
            <li>
              Legislative Council of Brunei Darussalam (2025). Written answer PT091 by the Minister of Development on flood monitoring and warning, 4 August 2025 (third-party transcript). https://hansard.queeniecy.com/en/docs/hansard/2025/sesi-2/pertanyaan-tulis/2025-08-04-PT091
            </li>
            <li>
              Legislative Council of Brunei Darussalam (2025). Written answer PT10, first session 2025, on rain gauges, drainage data systems and flood-prone area (third-party transcript). https://hansard.queeniecy.com/en/docs/hansard/2025/sesi-1/pertanyaan-tulis/2025-PT10
            </li>
            <li>
              Legislative Council of Brunei Darussalam (2026). Oral answer PL060 on flood hotspots and drainage design standards, 14 March 2026 (third-party transcript). https://hansard.queeniecy.com/en/docs/hansard/2026/sesi-1/pertanyaan-lisan/2026-03-14-PL060
            </li>
            <li>
              Government of Brunei Darussalam (2015). Statement of Brunei Darussalam at the Third UN World Conference on Disaster Risk Reduction, Sendai. <em>WCDRR</em>. https://www.wcdrr.org/uploads/WCDRR-Statement-BRUNEI-DARUSSALAM.pdf
            </li>
            <li>
              Brunei Darussalam (2015). Country presentation at the 13th ASEAN-Japan High Level Officials Meeting on Caring Societies. <em>Ministry of Health, Labour and Welfare, Japan</em>. https://www.mhlw.go.jp/file/06-Seisakujouhou-10500000-Daijinkanboukokusaika/a_13.pdf
            </li>
            <li>
              WMO and Japan Meteorological Agency (2024). Report of the WMO-ASEAN Radar Workshop 2024. <em>JMA</em>. https://www.jma.go.jp/jma/en/photogallery/WMO-ASEAN_Radar_Workshop_Jan2024/Report%20of%20WMO-ASEAN%20Radar%20Workshop%202024.pdf
            </li>
            <li>
              IOC-UNESCO (n.d.). Tsunami Warning Focal Points, Pacific Tsunami Warning and Mitigation System (legacy list). https://legacy.ioc-tsunami.org/legacy.ioc-tsunami.org/indexc07f.html
            </li>
            <li>
              The Scoop (2025). Development ministry unveils plans to battle rising floods, 7 March 2025. https://thescoop.co/2025/03/07/development-ministry-unveils-plans-to-battle-rising-floods/
            </li>
            <li>
              The Scoop (2026). Landslide triggers major water disruption across Brunei-Muara, 30 January 2026. https://thescoop.co/2026/01/30/landslide-triggers-major-water-disruption-across-brunei-muara
            </li>
            <li>
              The Star / Borneo Bulletin (2026). Brunei carries out disaster relief operations nationwide, 12 January 2026. https://www.thestar.com.my/aseanplus/aseanplus-news/2026/01/12/brunei-carries-out-disaster-relief-operations-nationwide
            </li>
            <li>
              The Star / Xinhua (2025). Brunei enhances early weather warning system, 22 March 2025. https://www.thestar.com.my/aseanplus/aseanplus-news/2025/03/22/brunei-enhances-early-weather-warning-system
            </li>
            <li>
              The Star / Borneo Bulletin (2026). Haze blankets Brunei as all districts hit unhealthy levels, 5 September 2026. https://www.thestar.com.my/aseanplus/aseanplus-news/2026/09/05/haze-blankets-brunei-as-all-districts-hit-unhealthy-levels
            </li>
          </ol>
        </section>

        <hr className="border-border" />

        {/* ── Series ── */}
        <section>
          <h2 className={H2}>
            {en
              ? "Series: Early Warning Governance in ASEAN"
              : "シリーズ：ASEAN 各国の予警報制度"}
          </h2>
          <p className={P}>
            {en
              ? "This article is part of a series reviewing the legal and institutional arrangements for early warning in each ASEAN member state."
              : "本記事は、ASEAN 加盟各国の予警報制度（法制度と機関の役割）を国ごとに整理するシリーズの一部です。"}
          </p>
          <ul className="ml-4 list-disc space-y-1 text-muted">
            <li>
              <Link href="/blog/ews-governance-indonesia" className="text-highlight hover:underline">
                {en ? "Indonesia" : "インドネシア"}
              </Link>
            </li>
            <li>
              <Link href="/blog/ews-governance-philippines" className="text-highlight hover:underline">
                {en ? "Philippines" : "フィリピン"}
              </Link>
            </li>
            <li>
              <Link href="/blog/ews-governance-thailand" className="text-highlight hover:underline">
                {en ? "Thailand" : "タイ"}
              </Link>
            </li>
            <li>
              <Link href="/blog/ews-governance-vietnam" className="text-highlight hover:underline">
                {en ? "Vietnam" : "ベトナム"}
              </Link>
            </li>
            <li>
              <Link href="/blog/ews-governance-malaysia" className="text-highlight hover:underline">
                {en ? "Malaysia" : "マレーシア"}
              </Link>
            </li>
            <li>
              <Link href="/blog/ews-governance-cambodia" className="text-highlight hover:underline">
                {en ? "Cambodia" : "カンボジア"}
              </Link>
            </li>
            <li>
              <Link href="/blog/ews-governance-laos" className="text-highlight hover:underline">
                {en ? "Lao PDR" : "ラオス"}
              </Link>
            </li>
            <li>
              <Link href="/blog/ews-governance-myanmar" className="text-highlight hover:underline">
                {en ? "Myanmar" : "ミャンマー"}
              </Link>
            </li>
            <li>
              <Link href="/blog/ews-governance-singapore" className="text-highlight hover:underline">
                {en ? "Singapore" : "シンガポール"}
              </Link>
            </li>
            <li>
              <strong className="text-foreground">{en ? "Brunei Darussalam" : "ブルネイ"}</strong>
            </li>
            <li>
              <Link href="/blog/ews-governance-timor-leste" className="text-highlight hover:underline">
                {en ? "Timor-Leste" : "ティモール・レステ"}
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
