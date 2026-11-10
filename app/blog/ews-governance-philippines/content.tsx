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
          href="/blog" className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          &larr; Blog
        </Link>

        <div className="mt-8">
          <span className="text-[10px] uppercase tracking-widest text-muted">
            2026-11-10
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Early Warning Governance in the Philippines — Laws, Actors and Current Challenges"
              : "フィリピンの予警報制度 — 法制度・アクターの役割・現在の課題"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "How the Philippines organises disaster early warning: the statutes from RA 10121 (2010) to the State of Imminent Disaster Act (2025), the division of labour among PAGASA, PHIVOLCS, the NDRRMC and local governments, warning products and channels, and what the typhoons and earthquakes of 2021-2025 reveal, based on statute texts, official documents and reputable secondary sources."
              : "RA 10121（2010年）から2025年の切迫災害状態宣言法（RA 12287）までの法制度、PAGASA・PHIVOLCS・NDRRMC・地方自治体の役割分担、警報の種類と伝達経路、そして2021〜2025年の台風・地震が示した課題を、法令原文・公的資料・信頼できる二次資料に基づいて整理します。"}
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
              <>The Philippines is an archipelago of more than 7,000 islands and over 110 million people lying on the main track of western North Pacific typhoons and on an active plate boundary. Typhoons remain the dominant killer: Haiyan (2013) left about 6,300 dead, Odette (December 2021) about 409 dead and ₱47.6 billion in damage, Kristine (October 2024) 162 dead, and Tino (November 2025) 269 dead, most of them in floods in Cebu. The casualty pattern has shifted, however. Wind-dominated super typhoons under Signal 5 now kill in the tens (Pepito in November 2024: 14 deaths with 1.2 million evacuated; Uwan in November 2025: about 34 deaths with 1.3 million evacuated), whereas rainfall-driven flooding under lower signals kills in the hundreds. Geological hazards add a second layer: the Mw 6.9 Cebu earthquake of 30 September 2025 killed 79 people and damaged 160,662 houses on a previously unidentified fault, the Mw 7.4 Davao Oriental doublet of 10 October 2025 triggered tsunami warnings, and Kanlaon volcano has erupted repeatedly since June 2024, forcing some 87,000 people to evacuate at Alert Level 3 in December 2024.</>
            ) : (
              <>フィリピンは7,000を超える島々からなり、人口は1億1,000万人を超えます。北西太平洋の台風の主経路上にあり、活動的なプレート境界に位置します。最大の人命損失要因は依然として台風です。ハイヤン（2013年）は約6,300人、オデット（2021年12月）は約409人の死者と476億ペソの被害、クリスティン（2024年10月）は162人、ティノ（2025年11月）は269人の死者を出し、その多くはセブの洪水によるものでした。ただし被害の構造は変わりつつあります。風が主体の「シグナル5」級の超大型台風では死者が十数人〜数十人にとどまる一方（2024年11月のペピート：120万人避難で死者14人、2025年11月のウワン：130万人避難で死者約34人）、低いシグナル下の豪雨洪水では死者が数百人規模になっています。地質災害も重なります。2025年9月30日のセブ地震（Mw 6.9）は未知の断層で発生し79人が死亡、16万662戸が損壊しました。同年10月10日のダバオ・オリエンタル地震（Mw 7.4、連発）では津波警報が発表され、カンラオン火山は2024年6月以降繰り返し噴火し、同年12月の警戒レベル3では約8万7,000人が避難しました。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>Institutional design matters here because the Philippines is a highly decentralised state. Some 1,715 local government units (LGUs) and roughly 42,000 barangays each run their own disaster council chaired by the local chief executive, and the legal power to order an evacuation sits with that executive, not with any national agency. Warning authority is split three ways: two science agencies under the Department of Science and Technology issue hazard warnings, the 45-member National Disaster Risk Reduction and Management Council and its secretariat convert them into alerts and mobile broadcasts, and mayors and governors decide who moves. There is no dedicated disaster department; a bill to create one has been debated since 2017. Proponents summarise the problem as &ldquo;authority is shared, responsibility is dispersed, and resources are scattered&rdquo;. In 2025 the system was tested by three statutes that extend anticipatory action, by two destructive typhoons and two strong earthquakes within six weeks, and by a corruption scandal in flood-control works that undermines the structural protection every warning assumes.</>
            ) : (
              <>この国で制度設計が問題になるのは、高度に分権化された国家だからです。約1,715の地方自治体（LGU）と約4万2,000のバランガイ（最小行政単位）がそれぞれ地方首長を議長とする災害評議会をもち、避難を「命令」する法的権限は国の機関ではなくその首長にあります。警報の権限は三つに分かれています。科学技術省傘下の二つの科学機関がハザード警報を発表し、45機関で構成される国家災害リスク削減管理評議会とその事務局がそれを警報・携帯一斉配信に変換し、市長・知事が誰を動かすかを決めます。災害専門の省は存在せず、その創設法案は2017年以来審議が続いています。推進派は問題を「権限は共有され、責任は分散し、資源は散在している」と要約します。2025年には、事前行動を拡張する三つの新法、6週間のうちに相次いだ二つの台風と二つの強い地震、そして警報が前提とする構造物防御そのものを揺るがす治水事業の腐敗疑惑によって、この制度が試されました。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>This article reviews the legal framework, the actors and their roles, the warning chain and warning levels, the reforms of 2020-2026, the challenges revealed by events since 2021, and the role of international cooperation, with particular attention to the flood forecasting backbone built with Japan.</>
            ) : (
              <>本記事では、法制度、アクターと役割、警報の流れと警報レベル、2020〜2026年の制度改革、2021年以降の災害が示した課題、そして日本が構築した洪水予警報の基盤を含む国際協力を順に整理します。</>
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
              <>The Philippine early warning system rests on Republic Act (RA) 10121, the Philippine Disaster Risk Reduction and Management Act of 2010, which replaced the 1978 Presidential Decree 1566 and its 19-member National Disaster Coordinating Council with a 45-member council. RA 10121 defines an early warning system in its Section 3(q) as a set of capacities with four people-centred elements (risk knowledge; monitoring and forecasting; communication of alerts; local response capability), obliges the national council to establish a national early warning and emergency alert system, and obliges every local disaster office to operate a multi-hazard early warning system. The power to order evacuation, however, derives from the Local Government Code of 1991. Since 2014 a series of statutes has added mobile alerts, agency modernisation, evacuation centres and, in September 2025, a legal basis for anticipatory action.</>
            ) : (
              <>フィリピンの予警報制度の基盤は、共和国法（RA）10121「2010年フィリピン災害リスク削減管理法」です。同法は1978年の大統領布告（PD）1566と19機関からなる国家災害調整評議会を、45機関からなる評議会に置き換えました。第3条(q)は予警報システムを「リスク知識、監視・予測、警報の伝達、地域の対応能力」の四要素からなる人間中心の能力の体系と定義し、国家評議会に国家予警報・緊急警報システムの構築を、すべての地方災害事務所に多ハザード予警報システムの運用を義務づけています。一方、避難を命令する権限の根拠は1991年の地方自治法にあります。2014年以降は、携帯電話警報、機関の近代化、避難所、そして2025年9月の事前行動の法的根拠が順次追加されてきました。</>
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
                  <td className={TDH}>{en ? "RA 7160, Local Government Code of 1991" : "RA 7160 地方自治法（Local Government Code of 1991）"}</td>
                  <td className={TD}>1991</td>
                  <td className={TD}>{en ? "Powers and finances of provinces, cities, municipalities and barangays; general welfare clause (Sec. 16); flood control listed as municipal and provincial infrastructure; 5% calamity fund (Sec. 324(d))." : "州・市・町・バランガイの権限と財政。一般福祉条項（第16条）、治水を市町・州のインフラとして列挙、歳入の5%の災害基金（第324条(d)）。"}</td>
                  <td className={TD}>{en ? "Mayors and governors shall carry out such emergency measures as may be necessary during and after disasters (Secs. 444, 455, 465); the punong barangay organises an emergency group (Sec. 389). This is the actual legal source of evacuation orders." : "市長・町長・知事は災害時およびその後に必要な緊急措置を実施する（第444・455・465条）。バランガイ長は緊急班を組織する（第389条）。避難命令の実際の法的根拠。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "RA 7924, Metropolitan Manila Development Authority charter" : "RA 7924 マニラ首都圏開発庁（MMDA）設置法"}</td>
                  <td className={TD}>1995</td>
                  <td className={TD}>{en ? "Metro-wide functions including flood control, drainage and sewerage management (Sec. 3(d))." : "首都圏全域の治水・排水・下水管理（第3条(d)）などの機能。"}</td>
                  <td className={TD}>{en ? "Public safety, including preparedness for preventive or rescue operations during calamities (Sec. 3(g)). No warning authority." : "災害時の予防・救助活動への備えを含む公共安全（第3条(g)）。警報権限はなし。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "RA 10121, Philippine Disaster Risk Reduction and Management Act of 2010" : "RA 10121 フィリピン災害リスク削減管理法（Philippine Disaster Risk Reduction and Management Act of 2010）"}</td>
                  <td className={TD}>2010</td>
                  <td className={TD}>{en ? "NDRRMC chaired by the Defense Secretary with DILG, DSWD, DOST and NEDA as vice-chairs; OCD as implementing arm; councils and offices at every local tier; Local DRRM Fund of at least 5% of regular revenue with a 30% Quick Response Fund; state of calamity (Sec. 16); sunset review (Sec. 27)." : "国防長官を議長、DILG・DSWD・DOST・NEDAを副議長とするNDRRMC、実施機関としてのOCD、各地方階層の評議会・事務所、歳入の5%以上の地方災害基金（うち30%は即応基金）、災害状態宣言（第16条）、サンセット・レビュー（第27条）。"}</td>
                  <td className={TD}>{en ? "NDRRMC to establish a national early warning and emergency alert system (Sec. 6(e)); OCD sets SOPs for warning and alerting local councils and runs a 24-hour operations centre (Sec. 9); each LDRRMO operates a multi-hazard EWS (Sec. 12(c)(5)); LDRRMCs may only recommend forced or pre-emptive evacuation (Sec. 11(b)(3)); tampering with monitoring equipment is a prohibited act (Sec. 19(m))." : "NDRRMCは国家予警報・緊急警報システムを構築（第6条(e)）、OCDは地方評議会への警報・通報の標準手順を定め24時間運用センターを運営（第9条）、各LDRRMOは多ハザード予警報システムを運用（第12条(c)(5)）、LDRRMCは強制・予防的避難を「勧告」できるのみ（第11条(b)(3)）、監視機器の破壊・窃取は禁止行為（第19条(m)）。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Executive Order No. 66, s. 2012" : "大統領令（EO）第66号（2012年）"}</td>
                  <td className={TD}>2012</td>
                  <td className={TD}>{en ? "Automatic cancellation of classes and government work keyed to PAGASA wind signals; forecast deadlines of 22:00 the previous day, 04:30 and 11:00." : "PAGASAの風信号に連動した授業・官庁業務の自動休止。判断期限は前日22時、当日4時30分、11時。"}</td>
                  <td className={TD}>{en ? "Signal 1: pre-school; Signal 2: pre-school to secondary; Signal 3 or higher: all levels and all government work. Local chief executives may suspend without a signal, in coordination with PAGASA and the NDRRMC; the Office of the President and the NDRRMC hold concurrent authority." : "シグナル1で幼児教育、2で幼児〜中等教育、3以上で全教育段階と全官庁業務を休止。地方首長は信号がなくてもPAGASA・NDRRMCと調整のうえ休止でき、大統領府とNDRRMCも併行して権限をもつ。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "RA 10639, Free Mobile Disaster Alerts Act, and OCD-NDRRMC Joint Memorandum Circular No. 001, s. 2015" : "RA 10639 無料モバイル災害警報法（Free Mobile Disaster Alerts Act）とOCD-NDRRMC共同覚書回状第001号（2015年）"}</td>
                  <td className={TD}>2014 / 2015</td>
                  <td className={TD}>{en ? "Telecommunications companies must send free mobile alerts before storms, typhoons, tsunamis and other calamities; the NTC monitors compliance; corporate fines of ₱1-10 million and possible franchise revocation." : "通信事業者は暴風・台風・津波などの前に無料の携帯電話警報を送信しなければならない。NTCが遵守を監視し、法人には100万〜1,000万ペソの罰金と免許取消の可能性。"}</td>
                  <td className={TD}>{en ? "Warning agencies (PHIVOLCS, PAGASA, PNRI, MGB, BFP, PNP, AFP, DOH, PIA, PCOO) submit alerts to the NDRRMC for validation; after approval by the NDRRMC Executive Director the alert is relayed to the telcos for the target area. PHIVOLCS may send near-shore tsunami alerts directly to the Executive Director. Alerts must carry LGU contacts, evacuation areas and relief sites." : "警報機関（PHIVOLCS・PAGASA・PNRI・MGB・BFP・PNP・AFP・DOH・PIA・PCOO）がNDRRMCに警報を提出して検証を受け、NDRRMC事務局長の承認後に通信事業者へ中継して対象地域に配信。PHIVOLCSは近地津波警報を事務局長へ直接送付できる。警報にはLGUの連絡先・避難場所・救援拠点を含める。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "RA 10692, PAGASA Modernization Act of 2015" : "RA 10692 PAGASA近代化法（PAGASA Modernization Act of 2015）"}</td>
                  <td className={TD}>2015</td>
                  <td className={TD}>{en ? "Acquisition of modern observation and forecasting equipment, a technology-based data centre and incentives for scientists; implementing rules issued jointly by DOST, PAGASA and DBM (posted February 2021)." : "最新の観測・予報機材の取得、データセンターの設置、科学者への誘因。施行規則はDOST・PAGASA・DBMが共同で制定（2021年2月掲載）。"}</td>
                  <td className={TD}>{en ? "A capacity statute for the issuer of hydro-meteorological warnings; it does not alter who issues or acts on warnings." : "気象・水文警報の発表機関の能力強化法であり、警報の発表者や行動主体の配分は変えない。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "RA 12076, Ligtas Pinoy Centers Act" : "RA 12076 リグタス・ピノイ・センター法（Ligtas Pinoy Centers Act、避難所整備法）"}</td>
                  <td className={TD}>{en ? "Dec 2024" : "2024年12月"}</td>
                  <td className={TD}>{en ? "A mandatory evacuation centre in every city and municipality, built by DPWH, operated by the LGU, with NDRRMC/OCD setting standards and inspecting annually; structures must withstand winds of at least 300 km/h and a magnitude 8.0 earthquake; sites chosen with MGB, PHIVOLCS and PAGASA hazard maps." : "全市・町に避難所を義務化。DPWHが建設、LGUが運営、NDRRMC／OCDが基準設定と年次点検。風速300 km/h以上とM8.0の地震に耐える構造、立地はMGB・PHIVOLCS・PAGASAのハザード地図で選定。"}</td>
                  <td className={TD}>{en ? "No early warning or pre-emptive evacuation provisions; it supplies the destination that evacuation orders presuppose." : "予警報や予防的避難の規定はなく、避難命令が前提とする「行き先」を整備する法律。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "DepEd Order No. 22, s. 2024" : "教育省（DepEd）令第22号（2024年）"}</td>
                  <td className={TD}>{en ? "Dec 2024" : "2024年12月"}</td>
                  <td className={TD}>{en ? "Re-mapped class suspensions to the 2022 five-level wind signal scale and widened the discretion of school heads." : "授業休止の基準を2022年の5段階風信号に再対応させ、学校長の裁量を拡大。"}</td>
                  <td className={TD}>{en ? "Signal 2: automatic suspension of face-to-face classes from kindergarten to Grade 10; Signal 3: classes and work suspended at all levels; school heads may suspend for flooding, torrential rain, landslide or storm-surge risk, earthquakes and power outages; air-quality maroon (PM2.5 above 91) is also automatic." : "シグナル2で幼稚園〜10学年の対面授業を自動休止、3で全段階の授業と業務を休止。学校長は洪水・豪雨・地すべり・高潮の危険、地震、停電でも休止でき、大気汚染「マルーン」（PM2.5が91超）も自動休止。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "RA 12180, PHILVOLCS Modernization Act" : "RA 12180 PHIVOLCS近代化法（PHILVOLCS Modernization Act、官報表記）"}</td>
                  <td className={TD}>{en ? "Apr 2025" : "2025年4月"}</td>
                  <td className={TD}>{en ? "Five-year modernisation programme with a ₱7.0 billion fund (₱1.25 billion a year for four years, ₱2 billion in the fifth year, capital outlay only); nationwide earthquake and tsunami monitoring; retention incentive of up to 20% of basic salary; IRR within 90 days." : "5年間の近代化計画と70億ペソの基金（4年間は年12億5,000万ペソ、5年目は20億ペソ、資本支出に限定）、全国的な地震・津波監視、基本給の最大20%の定着手当、90日以内の施行規則。"}</td>
                  <td className={TD}>{en ? "Mandate for prediction and warning systems for eruptions, earthquakes and tsunamis (Sec. 5(a)); machine-derived earthquake parameters to be broadcast automatically on mobile phones and social media (Sec. 8(f)); warnings in local languages (Sec. 8(i)); coordination with national and local DRRM bodies on messages and channels (Sec. 10(c)); a Data Receiving Center as the central dissemination hub (Sec. 12(a))." : "噴火・地震・津波の予測と警報システムの権限（第5条(a)）、機械学習で得た地震パラメータの携帯電話・SNSへの自動配信（第8条(f)）、現地語での警報（第8条(i)）、国・地方の災害管理機関との文言・経路の調整（第10条(c)）、中央の配信拠点としてのデータ受信センター（第12条(a)）。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "RA 12287, Declaration of State of Imminent Disaster Act" : "RA 12287 切迫災害状態宣言法（Declaration of State of Imminent Disaster Act）"}</td>
                  <td className={TD}>{en ? "Sep 2025" : "2025年9月"}</td>
                  <td className={TD}>{en ? "Creates a pre-disaster declaration for forecastable hazards (floods, typhoons, droughts, heat and cold waves, storm surges) whose forecast impacts are classified severe, with a minimum lead time of three days extendable to five; lifted when the assessment no longer shows the impacts and automatically when the hazard occurs; new prohibited acts for false hazard information and manipulated assessments." : "予測可能なハザード（洪水・台風・干ばつ・熱波・寒波・高潮）について、予測影響が「深刻」と分類され、3日以上（最長5日）のリードタイムがある場合の事前宣言を創設。評価が影響を示さなくなれば解除、ハザード発生時は自動解除。虚偽のハザード情報や評価の操作を新たな禁止行為に。"}</td>
                  <td className={TD}>{en ? "The President declares on NDRRMC recommendation using recognised pre-disaster risk assessment (PDRA) mechanisms; local chief executives declare by executive order on the recommendation of the Regional DRRM Council (Sec. 5). The declaration unlocks public advisories, prepositioning, preemptive or forced evacuation, volunteer mobilisation and relief procurement (Sec. 9), and allows LGUs to spend the Local DRRM Fund including the Special Trust Fund and national agencies the NDRRM Fund before the hazard (Sec. 10). IRR by the NDRRMC Chair within 60 days (Sec. 14)." : "大統領は、承認された事前災害リスク評価（PDRA）の仕組みを用いたNDRRMCの勧告に基づき宣言し、地方首長は地域DRRM評議会の勧告に基づき首長令で宣言（第5条）。宣言により公的勧告、事前配備、「予防的または強制的避難」、ボランティア動員、救援物資の調達が可能になり（第9条）、LGUは特別信託基金を含む地方災害基金を、国の機関は国家災害基金をハザード発生前に支出できる（第10条）。NDRRMC議長が60日以内に施行規則を制定（第14条）。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>What the law settles is the sequence: science agencies warn, the national council alerts, and the local chief executive decides. RA 10121 names the four pillars and the duty to run early warning systems at every level, but it neither defines forced or pre-emptive evacuation nor says who orders it; its local councils may only recommend. The order itself rests on the emergency-measures clause of RA 7160, which is why national actors historically could only urge evacuation. The Climate Change Act of 2009 (RA 9729) links climate policy to disaster risk reduction but contains no early warning provision. Executive Order 66 still refers to the pre-2022 signal numbers; agencies have patched this through DepEd and other orders rather than a new executive order, leaving a layered suspension regime. RA 12287 is the first statute to name &ldquo;preemptive or forced evacuation&rdquo; as an action unlocked by a national or local anticipatory declaration tied to a risk assessment and a lead time of at least three days, and to release funds before the hazard rather than after a calamity declaration.</>
            ) : (
              <>法律が定めているのは順序です。科学機関が警報を出し、国家評議会が警戒を発し、地方首長が決定します。RA 10121は四つの柱と各階層での予警報システム運用義務を定めていますが、強制避難・予防的避難を定義しておらず、誰が命令するかも書いていません。地方評議会は「勧告」できるだけです。命令そのものはRA 7160の緊急措置条項に依拠しており、国の機関が歴史的に避難を「要請」することしかできなかった理由がここにあります。2009年気候変動法（RA 9729）は気候政策と災害リスク削減の連携を定めますが、予警報の規定はありません。大統領令第66号は2022年以前のシグナル番号を参照したままで、各機関は新たな大統領令ではなく教育省令などで対応しており、休止基準は層状で一部整合しない状態です。RA 12287は、リスク評価と3日以上のリードタイムに結びついた国または地方の事前宣言によって「予防的または強制的避難」が可能になることを初めて明記し、災害状態宣言の後ではなくハザードの前に資金を解放する法律です。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>What the law leaves open is the organisational question. A Department of Disaster Resilience has been proposed and debated in Congress since 2017; a House joint panel reportedly approved a substitute bill in November 2024 and the proposal was re-filed in the Senate in July 2025, but no enactment is recorded. The statutory sunset review of RA 10121 produced a substitute bill, and in July 2025 the Presidential Palace listed amendments to RA 10121 proposed by the NDRRMC among its priority bills, alongside a Department of Water Resources Act; Senate Bill No. 1097 of August 2025 would let the Local DRRM Fund pay for mitigation works and the salaries of rescue personnel and shorten the trust-fund period from five to three years. The three statutes of 2024-2025 deepen the existing NDRRMC and OCD architecture rather than replace it, which suggests that Congress has so far chosen incremental reform over a new department.</>
            ) : (
              <>法律が決めていないのは組織の問題です。災害レジリエンス省（Department of Disaster Resilience）の創設は2017年以来議会で提案・審議され、2024年11月に下院合同委員会が代替法案を承認し、2025年7月に上院で再提出されたと報じられていますが、成立の記録はありません。RA 10121の法定サンセット・レビューは同法改正の代替法案を生み、2025年7月には大統領府がNDRRMC提案のRA 10121改正を水資源省設置法とともに優先法案に挙げました。2025年8月の上院法案第1097号は、地方災害基金を防災インフラや救助要員の給与に充てられるようにし、信託基金の期間を5年から3年に短縮するものです。2024〜2025年の三つの新法は既存のNDRRMC・OCDの枠組みを置き換えるのではなく深化させており、議会は新省設置よりも漸進的改革を選んできたと読めます。</>
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
              <>Hazard warnings are produced by two agencies of the Department of Science and Technology, converted into alerts and operational guidance by the national council through its secretariat in the Department of National Defense, and acted upon by some 1,715 LGUs and 42,000 barangays whose councils and offices run their own, DILG-supervised local systems. Public-works and irrigation agencies own the flood-control hardware and dams, telecommunications companies carry the alerts, and a dense layer of academia, the Red Cross, uniformed services and donors surrounds the core.</>
            ) : (
              <>ハザード警報は科学技術省傘下の二機関が作成し、国防省内に事務局をもつ国家評議会が警戒・運用指針に変換し、約1,715のLGUと約4万2,000のバランガイが自らの評議会・事務所を通じて行動します。地方のシステムはDILGの監督下で運用されています。公共事業・灌漑機関は治水構造物とダムを所管し、通信事業者が警報を運び、学術機関・赤十字・制服組織・援助機関の厚い層が中核を取り囲んでいます。</>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={TH}>{en ? "Organisation" : "機関"}</th>
                  <th className={TH}>{en ? "Parent body" : "所管"}</th>
                  <th className={TH}>{en ? "Legal basis" : "法的根拠"}</th>
                  <th className={TH}>
                    {en ? "Role in early warning" : "予警報における役割"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TDH}>PAGASA</td>
                  <td className={TD}>
                    {en ? "DOST" : "科学技術省（DOST）"}
                  </td>
                  <td className={TD}>{en ? "PD 78 (1972); EO 128 (1987); RA 10692 (2015)" : "PD 78（1972年）、EO 128（1987年）、RA 10692（2015年）"}</td>
                  <td className={TD}>{en ? "National meteorological and hydrological service: tropical cyclone warnings and wind signals, rainfall and thunderstorm warnings, storm surge watches and warnings, flood bulletins for 18 telemetered river basins and four dam sub-basins, dam discharge warnings, general flood advisories elsewhere; five regional services divisions, at least 16 Doppler radars, 806 staff (2024)." : "国家気象水文機関。熱帯低気圧警報と風信号、降雨・雷雨警報、高潮注意報・警報、テレメータ化された18河川流域と4ダム流域の洪水情報、ダム放流警報、それ以外の流域の一般洪水勧告。5つの地域サービス部、16基以上のドップラーレーダー、職員806人（2024年）。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>PHIVOLCS</td>
                  <td className={TD}>
                    {en ? "DOST" : "科学技術省（DOST）"}
                  </td>
                  <td className={TD}>{en ? "RA 12180 (2025); JMC 001 s. 2015 (direct tsunami alerts)" : "RA 12180（2025年）、共同覚書回状001号（2015年、津波警報の直接送付）"}</td>
                  <td className={TD}>{en ? "Earthquake information with the PHIVOLCS intensity scale, numbered tsunami bulletins and warnings, volcano alert levels 0-5 with danger-zone radii; recommends exclusion zones that LGUs implement; 129 seismic stations, 133 intensity meters, six 24-hour volcano observatories, 208 staff (2024)." : "PHIVOLCS震度階級による地震情報、番号付き津波情報・警報、危険区域半径を伴う火山警戒レベル0〜5。立入禁止区域を勧告しLGUが実施。地震観測点129、震度計133、24時間火山観測所6、職員208人（2024年）。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>NDRRMC</td>
                  <td className={TD}>{en ? "Chaired by the Secretary of National Defense; 45 member agencies" : "国防長官が議長、45構成機関"}</td>
                  <td className={TD}>{en ? "RA 10121 Secs. 5-6; RA 12287 Sec. 5" : "RA 10121 第5〜6条、RA 12287 第5条"}</td>
                  <td className={TD}>{en ? "Highest policy-making body; establishes the national early warning and emergency alert system; runs pre-disaster risk assessment; raises blue and red alerts; its Executive Director approves every mobile alert; recommends states of calamity and, since 2025, states of imminent disaster to the President." : "最高の政策決定機関。国家予警報・緊急警報システムの構築、事前災害リスク評価（PDRA）の実施、ブルー・レッド警戒の発令、事務局長による携帯電話警報の承認、大統領への災害状態宣言および（2025年以降）切迫災害状態宣言の勧告。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en ? "OCD" : "民間防衛局（OCD）"}
                  </td>
                  <td className={TD}>
                    {en ? "DND" : "国防省（DND）"}
                  </td>
                  <td className={TD}>
                    {en ? "RA 10121 Sec. 9" : "RA 10121 第9条"}
                  </td>
                  <td className={TD}>{en ? "Implementing arm and secretariat of the NDRRMC; operates the 24-hour National DRRM Operations Center; sets SOPs for warning and alerting local councils; its regional directors chair the Regional DRRM Councils; operates the Emergency Cell Broadcast System; uses the PhilAWARE dashboard; 551 staff (2024)." : "NDRRMCの実施機関兼事務局。24時間の国家災害リスク削減管理運用センターを運営し、地方評議会への警報・通報の標準手順を定める。地域局長が地域DRRM評議会の議長。緊急セルブロードキャストを運用し、PhilAWAREダッシュボードを使用。職員551人（2024年）。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en ? "DILG" : "内務自治省（DILG）"}
                  </td>
                  <td className={TD}>{en ? "Cabinet department; NDRRMC Vice-Chair for Disaster Preparedness" : "内閣の省、NDRRMC副議長（災害準備）"}</td>
                  <td className={TD}>
                    {en ? "RA 10121 Sec. 5" : "RA 10121 第5条"}
                  </td>
                  <td className={TD}>{en ? "Supervises LGU plans against NDRRMC guidelines; runs the Operation Listo preparedness programme with manuals and checklists; leads the separate local EWS layer; in 2025 ordered local chief executives to complete evacuation of high-risk areas ahead of Super Typhoon Uwan and barred local officials from foreign travel." : "LGUの計画がNDRRMC指針に沿うよう監督。マニュアルとチェックリストを伴う準備プログラム「Operation Listo」を運営し、別系統の地方予警報システムを主導。2025年には超大型台風ウワンの前に地方首長へ高リスク地域の避難完了を命じ、地方公務員の海外渡航を禁止。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Provinces, cities and municipalities (LDRRMC / LDRRMO)" : "州・市・町（LDRRMC／LDRRMO）"}</td>
                  <td className={TD}>{en ? "Local chief executive chairs the council" : "地方首長が評議会議長"}</td>
                  <td className={TD}>{en ? "RA 7160 Secs. 444, 455, 465; RA 10121 Secs. 11-12, 21; RA 12287 Secs. 5, 10" : "RA 7160 第444・455・465条、RA 10121 第11〜12・21条、RA 12287 第5・10条"}</td>
                  <td className={TD}>{en ? "First responders; the LDRRMO operates a multi-hazard EWS; the council recommends and the chief executive orders pre-emptive or forced evacuation and class suspensions; the local legislature (sanggunian) declares a state of calamity to release the Quick Response Fund; since 2025 the chief executive may declare a state of imminent disaster by executive order." : "第一対応者。LDRRMOは多ハザード予警報システムを運用。評議会が勧告し、首長が予防的・強制的避難と授業休止を命令。地方議会（サングニアン）が災害状態を宣言して即応基金を解放。2025年以降は首長が首長令で切迫災害状態を宣言できる。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en ? "Barangays" : "バランガイ"}
                  </td>
                  <td className={TD}>{en ? "Barangay Development Council acts as the barangay DRRM committee" : "バランガイ開発評議会がバランガイDRRM委員会を兼ねる"}</td>
                  <td className={TD}>{en ? "RA 7160 Sec. 389; RA 10121 Secs. 11, 15" : "RA 7160 第389条、RA 10121 第11・15条"}</td>
                  <td className={TD}>{en ? "Lead when a single barangay is affected; the punong barangay organises an emergency group; last-mile dissemination by SMS, social media, emergency vehicles with megaphones and community or church bells." : "被災が1バランガイ内なら主導。バランガイ長が緊急班を組織。SMS・SNS・拡声器付き緊急車両・集落や教会の鐘によるラストマイルの伝達。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en ? "DPWH, MMDA, NIA" : "DPWH・MMDA・NIA"}
                  </td>
                  <td className={TD}>{en ? "Public works department; Metro Manila authority; irrigation administration" : "公共事業道路省、マニラ首都圏開発庁、国家灌漑庁"}</td>
                  <td className={TD}>{en ? "RA 7924 (1995); RA 12076 (2024)" : "RA 7924（1995年）、RA 12076（2024年）"}</td>
                  <td className={TD}>{en ? "Flood-control structures and drainage (DPWH nationwide, MMDA in Metro Manila); DPWH builds the mandatory evacuation centres; NIA operates irrigation dams whose releases must be communicated downstream, as the Bustos Dam case of 2023 showed." : "治水構造物と排水（DPWHは全国、MMDAは首都圏）。DPWHは義務化された避難所を建設。NIAは灌漑ダムを運用し、2023年のブストス・ダムの事例が示したように放流の下流への通知が問われる。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en ? "DENR-MGB and NAMRIA" : "DENR鉱山地球科学局（MGB）・NAMRIA"}
                  </td>
                  <td className={TD}>
                    {en ? "DENR" : "環境天然資源省（DENR）"}
                  </td>
                  <td className={TD}>{en ? "Agency mandates; MGB listed as warning agency in JMC 001 s. 2015" : "各機関の所掌、MGBは共同覚書回状001号の警報機関"}</td>
                  <td className={TD}>{en ? "Risk knowledge: MGB issues geohazard advisories (flood and rain-induced landslide) to LGUs before tropical cyclones, 1,061 issued cumulatively, and maintains 1:10,000 susceptibility maps (GeoRiskPH); NAMRIA hosts the GeoPH geoportal of base maps and hazard layers." : "リスク知識。MGBは熱帯低気圧の前にLGUへ地質災害勧告（洪水・降雨誘発地すべり）を発出（累計1,061件）し、1万分の1の感受性地図（GeoRiskPH）を維持。NAMRIAは基盤地図とハザード層のジオポータルGeoPHを運営。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en ? "AFP, PNP, BFP, PCG" : "国軍（AFP）・国家警察（PNP）・消防局（BFP）・沿岸警備隊（PCG）"}
                  </td>
                  <td className={TD}>
                    {en ? "DND; DILG; DOTr" : "国防省、内務自治省、運輸省"}
                  </td>
                  <td className={TD}>{en ? "RA 10121 cluster system; JMC 001 s. 2015 (warning agencies)" : "RA 10121のクラスター制度、共同覚書回状001号（警報機関）"}</td>
                  <td className={TD}>{en ? "Search, rescue and retrieval cluster (DND/AFP), law and order cluster (PNP); PNP enforces forced evacuations with DILG; PCG imposes no-sail orders; duty officers at the national operations centre; the AFP humanitarian plan is OPLAN Tulong-Bayanihan." : "捜索・救助・収容クラスター（DND／AFP）、法と秩序クラスター（PNP）。PNPはDILGとともに強制避難を執行し、PCGは出航禁止を発令。国家運用センターに当直要員を配置。国軍の人道支援計画はOPLAN Tulong-Bayanihan。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Telecommunications companies (Globe, Smart), NTC, DICT" : "通信事業者（Globe・Smart）、国家電気通信委員会（NTC）、情報通信技術省（DICT）"}</td>
                  <td className={TD}>{en ? "Private operators; regulator; DICT leads the Emergency Telecommunications cluster" : "民間事業者、規制当局、DICTは緊急通信クラスターの主導機関"}</td>
                  <td className={TD}>{en ? "RA 10639 (2014); JMC 001 s. 2015" : "RA 10639（2014年）、共同覚書回状001号（2015年）"}</td>
                  <td className={TD}>{en ? "Carry free mobile disaster alerts to subscribers in the target area through the Emergency Cell Broadcast System launched in March 2017; NTC monitors compliance and handles misuse complaints." : "2017年3月に開始された緊急セルブロードキャストシステムで対象地域の加入者に無料の災害警報を配信。NTCが遵守を監視し、濫用の申立てを扱う。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Philippine Red Cross; UP Resilience Institute (NOAH Center); DOST-ASTI" : "フィリピン赤十字、フィリピン大学レジリエンス研究所（NOAHセンター）、DOST-ASTI"}</td>
                  <td className={TD}>{en ? "Auxiliary to government; University of the Philippines; DOST" : "政府の補助機関、フィリピン大学、科学技術省"}</td>
                  <td className={TD}>
                    {en ? "Institutional mandates" : "各機関の設置根拠"}
                  </td>
                  <td className={TD}>{en ? "Red Cross 143 community volunteers; NOAH (launched by DOST in 2012, adopted by UP in 2017) produces LIDAR-based flood hazard maps; ASTI runs the DEWS hydro-meteorological sensor network sharing data with PAGASA and AI-based satellite damage assessment." : "赤十字の地域ボランティア「Red Cross 143」。NOAH（2012年にDOSTが開始、2017年にフィリピン大学へ移管）はLIDARに基づく洪水ハザード地図を作成。ASTIはPAGASAとデータを共有する気象水文センサー網DEWSとAIによる衛星被害評価を運営。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                <strong className="text-foreground">PAGASA (Philippine Atmospheric, Geophysical and Astronomical Services Administration)</strong>{" "}
                and{" "}
                <strong className="text-foreground">PHIVOLCS (Philippine Institute of Volcanology and Seismology)</strong>{" "}
                carry the monitoring and forecasting pillar and much of the risk-knowledge pillar. PAGASA, created in 1972 and modernised under RA 10692, issues six-hourly tropical cyclone warnings with hourly updates, and its Flood Forecasting and Warning System covers 18 major basins from the Pampanga, Agno, Cagayan and Bicol to the Davao and Mindanao rivers, plus the Angat, Ambuklao-Binga-San Roque, Pantabangan and Magat dam sub-basins; as of December 2023 there were 17 separate flood forecasting and warning systems in operation with two more under construction. PAGASA itself notes that remote parts of the network are difficult to calibrate, maintain and replace. PHIVOLCS operates 129 seismic stations and six 24-hour volcano observatories, defines alert levels per volcano, and is the only warning agency allowed under the 2015 circular to send tsunami alerts directly to the NDRRMC Executive Director. RA 12180 of April 2025 funds a five-year programme to automate the broadcast of earthquake parameters to mobile phones.
              </>
            ) : (
              <>
                <strong className="text-foreground">PAGASA（Philippine Atmospheric, Geophysical and Astronomical Services Administration、フィリピン大気地球物理天文局）</strong>
                と
                <strong className="text-foreground">PHIVOLCS（Philippine Institute of Volcanology and Seismology、フィリピン火山地震研究所）</strong>
                が監視・予測の柱と、リスク知識の柱の大部分を担います。1972年に設置されRA 10692で近代化されたPAGASAは、6時間ごとの熱帯低気圧警報と毎時の更新を発表し、その洪水予警報システム（FFWS）はパンパンガ、アグノ、カガヤン、ビコールからダバオ、ミンダナオ川までの18主要流域と、アンガット、アンブクラオ・ビンガ・サンロケ、パンタバンガン、マガットの4ダム流域を対象としています。2023年12月時点で17の洪水予警報システムが稼働し、2つが建設中でした。PAGASA自身は、観測網の遠隔地部分は較正・維持・更新が難しいと述べています。PHIVOLCSは129の地震観測点と6つの24時間火山観測所を運用し、火山ごとに警戒レベルを定め、2015年の回状のもとで津波警報をNDRRMC事務局長へ直接送れる唯一の警報機関です。2025年4月のRA 12180は、地震パラメータの携帯電話への自動配信を含む5年間の計画に資金を与えます。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">The NDRRMC (National Disaster Risk Reduction and Management Council)</strong>
                ,{" "}
                <strong className="text-foreground">the OCD (Office of Civil Defense)</strong>{" "}
                and{" "}
                <strong className="text-foreground">the DILG (Department of the Interior and Local Government)</strong>{" "}
                own the communication pillar at national level. The council is chaired by the Secretary of National Defense with the DILG (preparedness), DSWD (response), DOST (prevention and mitigation) and NEDA (rehabilitation and recovery) as vice-chairs; it includes the leagues of LGUs, four civil society and one private-sector representative. The OCD is its implementing arm and secretariat: it runs the 24-hour operations centre where pre-disaster risk assessment sessions are held, writes the SOPs for warning local councils, chairs the regional councils through its regional directors, and operates the cell broadcast. Every mobile alert, except direct tsunami alerts, passes through NDRRMC validation and the approval of its Executive Director. The national cluster system, adopted after Haiyan and updated in 2018 to eleven clusters, activates on regional request or automatically within twelve hours if communication is lost. The DILG supervises local plans, runs Operation Listo and leads the separate layer of local early warning systems.
              </>
            ) : (
              <>
                <strong className="text-foreground">NDRRMC（National Disaster Risk Reduction and Management Council、国家災害リスク削減管理評議会）</strong>
                、
                <strong className="text-foreground">OCD（Office of Civil Defense、民間防衛局）</strong>
                、
                <strong className="text-foreground">DILG（Department of the Interior and Local Government、内務自治省）</strong>
                が国レベルの伝達の柱を担います。評議会は国防長官を議長とし、DILG（準備）、DSWD（対応）、DOST（予防・軽減）、NEDA（復旧・復興）が副議長で、LGU連盟、市民社会4名、民間1名の代表を含みます。OCDは実施機関兼事務局として、事前災害リスク評価（PDRA）会合が開かれる24時間運用センターを運営し、地方評議会への警報手順を定め、地域局長を通じて地域評議会を主宰し、セルブロードキャストを運用します。直接送付される津波警報を除き、すべての携帯電話警報はNDRRMCの検証と事務局長の承認を経ます。ハイヤン後に導入され2018年に11クラスターに更新された国家クラスター制度は、地域の要請で、または通信が途絶した場合は12時間以内に自動的に起動します。DILGは地方計画を監督し、Operation Listoを運営し、別系統の地方予警報システムを主導します。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">Local governments</strong>{" "}
                hold the response-capability pillar and the decision that matters most. Under RA 10121 Section 15, lead shifts with scale: the barangay council leads if one barangay is affected, the city or municipal council if two or more barangays, the provincial council if two or more cities or municipalities, the regional council if two or more provinces, and the national council if two or more regions, with higher councils always acting in support of LGUs. Each LDRRMO must operate a multi-hazard early warning system reaching the public through mass media, radio, landline and rural communication technologies. The council recommends and the mayor or governor orders evacuation; the sanggunian declares a state of calamity, which until 2025 was the precondition for releasing the Quick Response Fund. In 2019 only 1,368 LGUs, out of a potential pool of more than 43,000 regional, provincial, city, municipal and barangay units, had operating early warning systems, and these local systems are separate from the national chain.
              </>
            ) : (
              <>
                <strong className="text-foreground">地方自治体</strong>
                が対応能力の柱と、最も重要な決定を担います。RA 10121第15条では規模に応じて主導者が変わります。被災が1バランガイならバランガイ評議会、2以上のバランガイなら市・町評議会、2以上の市・町なら州評議会、2以上の州なら地域評議会、2以上の地域なら国家評議会が主導し、上位評議会は常にLGUの支援に当たります。各LDRRMOはマスメディア、ラジオ、固定電話、農村向け通信技術で住民に届く多ハザード予警報システムを運用しなければなりません。評議会が勧告し、市長・知事が避難を命令します。地方議会が災害状態を宣言し、2025年までこれが即応基金の解放の前提条件でした。2019年時点で稼働する予警報システムをもつLGUは1,368にとどまり（地域・州・市・町・バランガイを合わせた潜在的な母数は4万3,000超）、これらの地方システムは国の系統とは別に運用されています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">DPWH (Department of Public Works and Highways)</strong>
                ,{" "}
                <strong className="text-foreground">MMDA (Metropolitan Manila Development Authority)</strong>{" "}
                and{" "}
                <strong className="text-foreground">NIA (National Irrigation Administration)</strong>{" "}
                hold the structural side of flood risk, and{" "}
                <strong className="text-foreground">DENR-MGB (Mines and Geosciences Bureau)</strong>
                ,{" "}
                <strong className="text-foreground">NAMRIA</strong> and{" "}
                <strong className="text-foreground">the UP NOAH Center</strong>{" "}
                supply the risk knowledge. MGB geohazard advisories go to LGUs before each cyclone, and Project NOAH, launched by DOST in July 2012 after Sendong and relaunched under the University of the Philippines in 2017, produced LIDAR flood maps and the FloodNET and WHIP tools with PAGASA, PHIVOLCS and ASTI as partners. Water governance itself is split among NEDA, the National Water Resources Board, DOH, DILG, DENR, DPWH and LWUA, which is one reason a Department of Water Resources is on the legislative agenda.
              </>
            ) : (
              <>
                <strong className="text-foreground">DPWH（Department of Public Works and Highways、公共事業道路省）</strong>
                、
                <strong className="text-foreground">MMDA（Metropolitan Manila Development Authority、マニラ首都圏開発庁）</strong>
                、
                <strong className="text-foreground">NIA（National Irrigation Administration、国家灌漑庁）</strong>
                が洪水リスクの構造物側を担い、
                <strong className="text-foreground">DENR-MGB（Mines and Geosciences Bureau、鉱山地球科学局）</strong>
                、
                <strong className="text-foreground">NAMRIA（National Mapping and Resource Information Authority、国家地図資源情報庁）</strong>
                、
                <strong className="text-foreground">フィリピン大学NOAHセンター</strong>
                がリスク知識を供給します。MGBの地質災害勧告は各サイクロンの前にLGUへ送られ、2011年のセンドン災害を受けて2012年7月にDOSTが開始し2017年にフィリピン大学へ移管されたProject NOAHは、PAGASA・PHIVOLCS・ASTIを協力機関としてLIDAR洪水地図やFloodNET、WHIPなどのツールを生み出しました。水行政そのものはNEDA、国家水資源委員会、DOH、DILG、DENR、DPWH、LWUAに分かれており、水資源省の設置が立法課題となっている理由の一つです。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">Telecommunications companies</strong>
                , the{" "}
                <strong className="text-foreground">uniformed services</strong>{" "}
                and the{" "}
                <strong className="text-foreground">Philippine Red Cross</strong>{" "}
                complete the last mile. Globe and Smart carry the cell broadcast under RA 10639; the AFP, PNP and BFP are both warning agencies under the 2015 circular and enforcers of evacuation, as the PNP-backed forced evacuations before Uwan in November 2025 showed; the Coast Guard stops sea travel, which stranded 6,607 people during Uwan; and Red Cross 143 volunteers reach communities. Dissemination to the public also runs through television and Google public alerts.
              </>
            ) : (
              <>
                <strong className="text-foreground">通信事業者</strong>
                、
                <strong className="text-foreground">制服組織</strong>
                、
                <strong className="text-foreground">フィリピン赤十字</strong>
                がラストマイルを完成させます。GlobeとSmartはRA 10639のもとでセルブロードキャストを配信し、国軍・国家警察・消防局は2015年回状の警報機関であると同時に避難の執行者でもあります（2025年11月のウワン前の国家警察による強制避難がその例です）。沿岸警備隊は海上交通を止め、ウワンでは6,607人が足止めされました。赤十字の「Red Cross 143」ボランティアは地域社会に届きます。住民への伝達はテレビとGoogleパブリックアラートも経由します。
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
              <>The formal chain runs from the science agencies to the national operations centre, from there to regional and local councils, and finally to households. Its hinge is the pre-disaster risk assessment (PDRA), a multi-agency session at the National DRRM Operations Center led by the OCD, which translates PAGASA and PHIVOLCS products into alert levels and advice to LGUs and, since September 2025, into the basis for a State of Imminent Disaster.</>
            ) : (
              <>正式な流れは、科学機関から国家運用センターへ、そこから地域・地方の評議会へ、最後に各世帯へと続きます。その要（かなめ）は事前災害リスク評価（PDRA）です。OCDが主導して国家災害リスク削減管理運用センターで開く多機関会合で、PAGASA・PHIVOLCSの予報を警戒レベルとLGUへの助言に、そして2025年9月以降は切迫災害状態宣言の根拠に変換します。</>
            )}
          </p>
          <ol className={OL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Hazard forecast and warning.</strong>{" "}
                  PAGASA issues tropical cyclone bulletins every six hours with hourly updates, wind signals per province (Metro Manila as one unit, municipal-level signals possible), rainfall advisories, storm surge watches and warnings and basin flood bulletins; PHIVOLCS issues earthquake information, tsunami bulletins and volcano alert levels; DENR-MGB sends geohazard advisories to LGUs.
                </>
              ) : (
                <>
                  <strong className="text-foreground">ハザードの予測と警報。</strong>
                  PAGASAは6時間ごとの熱帯低気圧情報と毎時の更新、州単位（首都圏は一体、市町単位も可）の風信号、降雨勧告、高潮注意報・警報、流域洪水情報を発表し、PHIVOLCSは地震情報・津波情報・火山警戒レベルを発表します。DENR-MGBはLGUへ地質災害勧告を送ります。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">PDRA and national alert.</strong>{" "}
                  PAGASA and PHIVOLCS notify the NDRRMC of a potential hazard event; the OCD convenes the PDRA, the NDRRMC raises a blue or red alert, activates emergency operations centres and clusters, and issues advisories to regional councils. PDRA was reportedly institutionalised by an NDRRMC memorandum in 2014 and is the mechanism RA 12287 now cites for an anticipatory declaration.
                </>
              ) : (
                <>
                  <strong className="text-foreground">PDRAと国の警戒。</strong>
                  PAGASAとPHIVOLCSがNDRRMCにハザード発生の可能性を通知し、OCDがPDRAを招集し、NDRRMCがブルーまたはレッド警戒を発令して緊急運用センターとクラスターを起動し、地域評議会に勧告を出します。PDRAは2014年のNDRRMC覚書で制度化されたとされ、RA 12287が事前宣言の根拠として引用する仕組みです。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Mobile alert.</strong>{" "}
                  Under the 2015 joint circular a warning agency submits the alert to the NDRRMC for validation, the operations centre forwards it to the Executive Director, and after approval the NDRRMC relays it to the telcos, which broadcast to subscribers in the target area. PHIVOLCS may send near-shore tsunami alerts directly to the Executive Director.
                </>
              ) : (
                <>
                  <strong className="text-foreground">携帯電話警報。</strong>
                  2015年の共同回状では、警報機関がNDRRMCに警報を提出して検証を受け、運用センターが事務局長に転送し、承認後にNDRRMCが通信事業者へ中継し、事業者が対象地域の加入者に一斉配信します。PHIVOLCSは近地津波警報を事務局長へ直接送れます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Local decision.</strong>{" "}
                  Regional councils chaired by OCD regional directors pass advice to provincial, city and municipal councils; the LDRRMC recommends and the local chief executive orders pre-emptive or forced evacuation and class or work suspension. The DILG increasingly sets the tempo: before Uwan it ordered chief executives to complete evacuation of high-risk areas by Sunday 9 November 2025 and urged 17,000 barangays to begin pre-emptive evacuation from 8 November.
                </>
              ) : (
                <>
                  <strong className="text-foreground">地方の決定。</strong>
                  OCD地域局長が主宰する地域評議会が州・市・町の評議会に助言を伝え、LDRRMCが勧告し、地方首長が予防的・強制的避難や授業・業務の休止を命令します。DILGがテンポを決める場面が増えており、ウワンの前には首長に2025年11月9日（日）までの高リスク地域の避難完了を命じ、1万7,000のバランガイに11月8日からの予防的避難開始を促しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Last mile.</strong> The
                  punong barangay activates the emergency group; LGUs warn by SMS, social media, emergency vehicles with megaphones and community or church bells; broadcasters and Google public alerts carry the national products; the local early warning systems run under DILG leadership operate in parallel.
                </>
              ) : (
                <>
                  <strong className="text-foreground">ラストマイル。</strong>
                  バランガイ長が緊急班を起動し、LGUはSMS・SNS・拡声器付き緊急車両・集落や教会の鐘で警告します。放送局とGoogleパブリックアラートが国の情報を運び、DILG主導の地方予警報システムが並行して動きます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Declaration and funds.</strong>{" "}
                  A sanggunian resolution or a Presidential proclamation declaring a state of calamity releases the Quick Response Fund; after Tino the whole country was placed under a state of calamity on 6 November 2025, extended to one year on 9 November. RA 12287 adds the pre-hazard State of Imminent Disaster, which releases funds and permits forced evacuation before impact.
                </>
              ) : (
                <>
                  <strong className="text-foreground">宣言と資金。</strong>
                  地方議会の決議または大統領布告による災害状態宣言が即応基金を解放します。ティノの後には2025年11月6日に全国が災害状態に置かれ、11月9日に1年間へ延長されました。RA 12287はこれに、資金の解放と強制避難を被災前に可能にする切迫災害状態を加えました。
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
                  <td className={TDH}>
                    {en ? "Tropical cyclone wind" : "熱帯低気圧の風"}
                  </td>
                  <td className={TD}>PAGASA</td>
                  <td className={TD}>{en ? "Tropical Cyclone Wind Signals 1-5, modified 23 March 2022: Signal 1 = 39-61 km/h within 36 h; 2 = 62-88 km/h, 24 h; 3 = 89-117 km/h, 18 h; 4 = 118-184 km/h, 12 h; 5 = 185 km/h or more, 12 h (extreme threat). Super typhoon threshold lowered to 185 km/h. Lead times apply only to the first issuance of a level." : "熱帯低気圧風信号（TCWS）1〜5、2022年3月23日改定。シグナル1＝36時間以内に39〜61 km/h、2＝62〜88 km/h（24時間）、3＝89〜117 km/h（18時間）、4＝118〜184 km/h（12時間）、5＝185 km/h以上（12時間、極端な脅威）。スーパー台風の閾値を185 km/hに引き下げ。リードタイムは各レベルの初回発表にのみ適用。"}</td>
                  <td className={TD}>{en ? "Six-hourly bulletins and hourly updates; television and radio; cell broadcast; automatic class and work suspension under EO 66 and DepEd Order 22 s. 2024." : "6時間ごとの情報と毎時更新、テレビ・ラジオ、セルブロードキャスト、EO 66と教育省令第22号（2024年）による授業・業務の自動休止。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Heavy rainfall" : "豪雨"}</td>
                  <td className={TD}>PAGASA</td>
                  <td className={TD}>{en ? "Colour-coded rainfall warnings since 2012: Yellow 7.5-15 mm/h (possible flooding in low-lying areas), Orange 15-30 mm/h, Red above 30 mm/h (urgent evacuation); thunderstorm alerts; since 2024 a rainfall weather advisory for heavy rain outside wind-signal areas and a two-week tropical cyclone threat potential forecast." : "2012年以来の色別降雨警報。イエロー7.5〜15 mm/h（低地で浸水の可能性）、オレンジ15〜30 mm/h、レッド30 mm/h超（緊急避難）。雷雨注意情報。2024年からは風信号のない地域の大雨向け「降雨気象勧告」と2週間先までの熱帯低気圧脅威可能性予報。"}</td>
                  <td className={TD}>{en ? "Advisories to media and LGUs; cell broadcast; LGU channels." : "メディア・LGUへの勧告、セルブロードキャスト、LGUの伝達手段。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Storm surge" : "高潮"}</td>
                  <td className={TD}>PAGASA</td>
                  <td className={TD}>{en ? "System upgraded 17 June 2019 after Yolanda: Storm Surge Watch (moderate to high risk within 48 h) and Storm Surge Warning (high risk within 24 h); Blue below 1 m (be informed, no evacuation), Yellow 1-2 m (be aware), Orange 2-3 m (be prepared), Red above 3 m (catastrophic, take action)." : "2019年6月17日にヨランダの教訓で改定。高潮注意報（48時間以内に中〜高リスク）と高潮警報（24時間以内に高リスク）。ブルー1 m未満（周知、避難不要）、イエロー1〜2 m（注意）、オレンジ2〜3 m（準備）、レッド3 m超（壊滅的、行動）。"}</td>
                  <td className={TD}>{en ? "Storm surge bulletins with the cyclone bulletins; LGU evacuation orders." : "熱帯低気圧情報に付随する高潮情報、LGUの避難命令。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "River flood" : "河川洪水"}</td>
                  <td className={TD}>
                    {en ? "PAGASA (FFWS); OCD" : "PAGASA（FFWS）、OCD"}
                  </td>
                  <td className={TD}>{en ? "Flood Bulletin in four levels: Flood Outlook, Flood Advisory, Flood Warning, Critical Flood Warning; river-stage references Alert / Alarm / Critical; dam discharge warnings for Angat, Ambuklao-Binga-San Roque, Pantabangan and Magat; general flood advisories for basins without telemetry; Flood Disaster Information issued by the OCD during a serious flood disaster." : "洪水情報は4段階（洪水見通し、洪水勧告、洪水警報、臨界洪水警報）。河川水位の基準はAlert／Alarm／Critical。アンガット、アンブクラオ・ビンガ・サンロケ、パンタバンガン、マガットのダム放流警報。テレメータのない流域には一般洪水勧告。深刻な洪水災害時にはOCDが「洪水災害情報」を発表。"}</td>
                  <td className={TD}>{en ? "Basin bulletins to LGUs and media; community-based flood EWS in selected basins." : "LGU・メディアへの流域情報、一部流域のコミュニティ型洪水予警報。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Rain-induced landslide and flood susceptibility" : "降雨誘発地すべり・洪水の感受性"}</td>
                  <td className={TD}>DENR-MGB</td>
                  <td className={TD}>{en ? "Geohazard advisories per province or LGU before tropical cyclones, based on 1:10,000 susceptibility maps (GeoRiskPH)." : "熱帯低気圧の前に州・LGU単位で発出する地質災害勧告。1万分の1感受性地図（GeoRiskPH）に基づく。"}</td>
                  <td className={TD}>
                    {en ? "Advisories to LGUs." : "LGUへの勧告。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en ? "Earthquake and tsunami" : "地震・津波"}
                  </td>
                  <td className={TD}>PHIVOLCS</td>
                  <td className={TD}>{en ? "Earthquake information with the PHIVOLCS Earthquake Intensity Scale; numbered Tsunami Information bulletins (for example a Tsunami Information for minor sea level disturbance after the 30 September 2025 Cebu quake, lifted after about three hours) and tsunami warnings forecasting waves above 1 m (Davao Oriental, 10 October 2025, cancelled after about four hours). Formal criteria for each tsunami product are not published in the sources consulted." : "PHIVOLCS震度階級による地震情報。番号付きの「津波情報」（例：2025年9月30日のセブ地震後の軽微な海面変動に関する津波情報、約3時間後に解除）と、1 m超の波を予測する津波警報（2025年10月10日ダバオ・オリエンタル、約4時間後に解除）。各津波情報の正式な基準は参照資料には公表されていません。"}</td>
                  <td className={TD}>{en ? "Direct alert to the NDRRMC Executive Director under JMC 001 s. 2015; automatic mobile broadcast of parameters to be built under RA 12180." : "共同覚書回状001号による事務局長への直接送付。RA 12180でパラメータの携帯電話自動配信を整備予定。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Volcano" : "火山"}</td>
                  <td className={TD}>PHIVOLCS</td>
                  <td className={TD}>{en ? "Alert Levels 0-5 defined per volcano with danger-zone radii: Kanlaon permanent danger zone 4 km, extendable to 6 km at Level 3, 10 km or more at Level 4 and 14 km at Level 5; Mayon permanent danger zone 6 km; Taal Level 3 = evacuate Volcano Island, the lake and pre-defined lakeshore communities." : "火山ごとに危険区域半径を伴う警戒レベル0〜5。カンラオンは常時危険区域4 km、レベル3で6 km、レベル4で10 km以上、レベル5で14 km。マヨンは常時危険区域6 km。タールのレベル3＝火山島・湖・所定の湖岸集落から避難。"}</td>
                  <td className={TD}>{en ? "PHIVOLCS recommendations that must be implemented by local and national government units." : "PHIVOLCSの勧告を地方・国の機関が実施。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en ? "National readiness" : "国の警戒態勢"}
                  </td>
                  <td className={TD}>{en ? "NDRRMC / OCD" : "NDRRMC／OCD"}</td>
                  <td className={TD}>{en ? "Blue alert: raised in preparation for a slow-onset hazard or anticipated escalation, with selected duty personnel present; Red alert: the highest level, for an ongoing or anticipated imminent emergency. The OCD also uses readiness levels such as Charlie, activated in seven areas during Kristine in October 2024." : "ブルー警戒：緩やかに進行するハザードや悪化の見込みに備えて発令し、選抜された当直要員を配置。レッド警戒：進行中または切迫した緊急事態に対する最高レベル。OCDは「チャーリー」などの準備レベルも用い、2024年10月のクリスティンでは7地域で発動。"}</td>
                  <td className={TD}>{en ? "National and regional operations centres; cluster activation." : "国・地域の運用センター、クラスターの起動。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en ? "Class and work suspension" : "授業・業務の休止"}
                  </td>
                  <td className={TD}>{en ? "Office of the President; local chief executives; DepEd" : "大統領府、地方首長、教育省"}</td>
                  <td className={TD}>{en ? "EO 66 s. 2012: Signal 1 pre-school, Signal 2 up to secondary, Signal 3 or higher all levels and government work; DepEd Order 22 s. 2024: Signal 2 kindergarten to Grade 10, Signal 3 all levels and work; ad hoc Palace memorandum circulars. During Uwan on 10-11 November 2025 classes were suspended across Luzon and the Visayas and government work across Luzon and Eastern Visayas." : "EO 66（2012年）：シグナル1で幼児教育、2で中等教育まで、3以上で全段階と官庁業務。教育省令第22号（2024年）：シグナル2で幼稚園〜10学年、3で全段階と業務。大統領府の個別回状も併用。2025年11月10〜11日のウワンではルソン・ビサヤ全域で授業が、ルソンと東ビサヤで官庁業務が休止。"}</td>
                  <td className={TD}>{en ? "Announcements by the Executive Secretary, LGUs and DepEd; media." : "大統領府執行長官・LGU・教育省の発表、メディア。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>The Emergency Cell Broadcast System (ECBS) launched on 13 March 2017 with Smart and is now operated by both Globe and Smart; it replaced an SMS-based system that could take hours, and alerts are drafted by the NDRRMC with PAGASA and PHIVOLCS input under a character limit. In April 2025 the OCD condemned the use of ECBS-style messages for election campaigning as a risk of desensitising the public to real emergencies and referred the matter to the NTC. Impact-based forecasting (IBF) is being built under the Green Climate Fund project &ldquo;Multi-hazard Impact-based Forecasting and Early Warning System for the Philippines&rdquo; (2022-2027), launched by PAGASA in April 2023 with target barangays in Cagayan, Albay, Leyte and Davao de Oro, to communicate what the weather will do rather than what it will be. In June 2023 PAGASA described IBF as under test for Metro Manila and Cebu, for typhoons and the southwest monsoon only, with impact colours red, orange, yellow and green and outputs shared only with LGUs while being refined; in March 2025 its project manager acknowledged &ldquo;a disconnect between forecast and actions&rdquo; and a government tendency to favour response over preparedness.</>
            ) : (
              <>緊急セルブロードキャストシステム（ECBS）は2017年3月13日にSmartと共同で開始され、現在はGlobeとSmartの両社が運用しています。それ以前のSMS方式は配信に数時間かかることがあり、警報文はNDRRMCがPAGASA・PHIVOLCSの情報をもとに文字数制限内で作成します。2025年4月、OCDはECBS型のメッセージが選挙運動に使われたことを「実際の緊急事態への感度を鈍らせる」危険があると非難し、NTCに付託しました。影響予測型予報（IBF）は、PAGASAが2023年4月に開始した緑の気候基金（GCF）事業「フィリピン多ハザード影響予測型予報・予警報システム」（2022〜2027年）のもとで構築中で、カガヤン、アルバイ、レイテ、ダバオ・デ・オロの対象バランガイを選び、「天気がどうなるか」ではなく「天気が何をもたらすか」を伝えることを目指します。2023年6月時点でPAGASAは、IBFはマニラ首都圏とセブで台風と南西モンスーンに限って試験中であり、影響の色分けはレッド・オレンジ・イエロー・グリーン、成果は精緻化の間はLGUにのみ提供すると説明しました。2025年3月には事業責任者が「予報と行動の間の断絶」と、政府が準備より対応を重視しがちな傾向を認めています。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>Two gaps in the dissemination layer stand out. First, cell broadcast is reported to be operated manually, and the Common Alerting Protocol (CAP) is reported to be only partly used, without integration into the cell broadcast chain; PAGASA alerts therefore reach phones only after the validation and approval steps of the 2015 circular. Second, no national Early Warnings for All roadmap for the Philippines was identified in the public sources consulted, although the 2023 update of the national DRRM plan calls the expansion of early warning systems one of the brightest spots of Sendai Framework progress, and the OCD has adopted the PhilAWARE impact-based dashboard built with the Pacific Disaster Center.</>
            ) : (
              <>伝達層には二つの空白が目立ちます。第一に、セルブロードキャストは手動で運用され、共通警報プロトコル（CAP）は部分的にしか使われておらずセルブロードキャストとは統合されていないと報告されています。そのためPAGASAの警報は2015年回状の検証・承認を経てはじめて携帯電話に届きます。第二に、参照した公開資料の範囲では、フィリピンについてのEarly Warnings for All（EW4All）の国別ロードマップは確認できませんでした。もっとも、国家DRRM計画の2023年更新版は予警報システムの拡充を仙台枠組の進捗の「最も明るい点」の一つに挙げており、OCDは太平洋災害センターと構築した影響予測型ダッシュボードPhilAWAREを導入しています。</>
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
                  <strong className="text-foreground">23 March 2022 —</strong>{" "}
                  Modified Tropical Cyclone Wind Signals: five levels with explicit lead times and a super typhoon threshold of 185 km/h, after a review found the ground impacts of the old Signals 4 and 5 indistinguishable and the old Signal 2 too broad.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2022年3月23日 —</strong>
                  熱帯低気圧風信号の改定。明示的なリードタイムを伴う5段階と185 km/hのスーパー台風閾値を導入。旧シグナル4と5の地上被害が区別できず、旧シグナル2の範囲が広すぎるとの見直し結果に基づくものです。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">April 2023 —</strong>{" "}
                  Launch of the Green Climate Fund multi-hazard impact-based forecasting project (2022-2027), the first GCF project in the country, led by PAGASA; the first systematic attempt to move from hazard-based to impact-based warnings.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2023年4月 —</strong>
                  PAGASAが主導する緑の気候基金の多ハザード影響予測型予報事業（2022〜2027年）を開始。同国初のGCF事業であり、ハザード基準から影響基準の警報へ移る初の体系的な試みです。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Early 2024 —</strong>{" "}
                  The PAGASA-JICA Project for Capability Enhancement for High Quality Weather Observation, Forecast, Warning, and Information began LGU workshops on early warning and evacuation planning, extending Japanese cooperation from hardware to the local decision layer.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年初 —</strong>
                  PAGASA・JICAの「高品質な気象観測・予報・警報・情報のための能力強化プロジェクト」がLGU向けの予警報・避難計画ワークショップを開始。日本の協力を機材から地方の意思決定層へ広げました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">November 2024 —</strong>{" "}
                  After Kristine, PAGASA pointed to two new products, a two-week tropical cyclone threat potential forecast and a rainfall weather advisory for areas without wind signals; these are the operational answer to rain-driven disasters under low signals.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年11月 —</strong>
                  クリスティン後、PAGASAは2週間先までの熱帯低気圧脅威可能性予報と、風信号のない地域向けの降雨気象勧告という二つの新製品を示しました。低いシグナル下の豪雨災害への運用面の回答です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">6 December 2024 —</strong>{" "}
                  RA 12076, Ligtas Pinoy Centers Act: a mandatory, hazard-proof evacuation centre in every city and municipality, addressing the finding that only about 62% of LGUs had evacuation centres with complete minimum facilities. On 23 December 2024 DepEd Order 22 re-mapped class suspensions to the 2022 signals.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年12月6日 —</strong>
                  RA 12076リグタス・ピノイ・センター法。全市・町に耐災害性の避難所を義務化し、最低限の設備が整った避難所をもつLGUが約62%にとどまるという課題に応えました。12月23日には教育省令第22号が授業休止基準を2022年のシグナルに再対応させました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">24 April 2025 —</strong>{" "}
                  RA 12180, PHILVOLCS Modernization Act: a ₱7 billion five-year fund, nationwide earthquake and tsunami monitoring, and automatic broadcast of earthquake parameters to mobile phones. The same week Administrative Order 32 created the National Task Force Kanlaon chaired by the DND with the OCD as secretariat.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年4月24日 —</strong>
                  RA 12180 PHIVOLCS近代化法。70億ペソの5年基金、全国的な地震・津波監視、地震パラメータの携帯電話への自動配信を定めました。同じ週に行政命令第32号が国防省を議長、OCDを事務局とする国家タスクフォース・カンラオンを設置しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">11 September 2025 —</strong>{" "}
                  Executive Order 94 created the Independent Commission for Infrastructure (ICI) to investigate flood-control and other public-works anomalies since 2015 across three administrations, with subpoena power and authority to recommend prosecution, suspensions, blacklisting and asset freezes; some ₱545 billion had been spent on flood control in recent years and the Commission on Audit had flagged at least ₱341 million of projects as overpriced, substandard or non-existent. The ICI declared its mandate fulfilled on 13 March 2026 and ceased operations on 31 March 2026.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年9月11日 —</strong>
                  大統領令第94号が独立インフラ委員会（ICI）を設置。2015年以降の3政権にわたる治水・公共事業の不正を調査し、召喚権と、起訴・停職・取引停止・資産凍結の勧告権限をもちます。近年の治水支出は約5,450億ペソで、監査委員会は少なくとも3億4,100万ペソ分の事業を過大価格・規格不適合・未存在と指摘していました。ICIは2026年3月13日に任務完了を宣言し、同年3月31日に活動を終了しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">12 September 2025 —</strong>{" "}
                  RA 12287, Declaration of State of Imminent Disaster Act: the first statute to legalise anticipatory action, including forced evacuation and release of local and national disaster funds, before a forecast hazard with a lead time of at least three days. Its implementing rules were due within 60 days.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年9月12日 —</strong>
                  RA 12287切迫災害状態宣言法。3日以上のリードタイムで予測されたハザードの前に、強制避難と地方・国の災害基金の支出を含む事前行動を初めて法的に認めました。施行規則は60日以内に制定されることになっていました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">November 2025 —</strong>{" "}
                  Pre-emptive evacuation at unprecedented scale: about 400,000 people before Tino and 1,315,739 from 13 regions before Uwan, with DILG- and PNP-enforced forced evacuations, a nationwide red alert by 8 November and 2.04 million family food packs prepositioned by DSWD. After Tino the President placed the whole country under a one-year state of calamity and ordered a review of 511 flood-control projects in Cebu.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年11月 —</strong>
                  前例のない規模の予防的避難。ティノの前に約40万人、ウワンの前に13地域から131万5,739人が避難し、DILGと国家警察が強制避難を執行、11月8日までに全国レッド警戒、DSWDは204万世帯分の食料パックを事前配備しました。ティノ後、大統領は全国を1年間の災害状態に置き、セブの治水事業511件の見直しを命じました。
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
                  <strong className="text-foreground">Split authority without end-to-end accountability (structural).</strong>{" "}
                  PAGASA and PHIVOLCS own the hazard warning, the NDRRMC and OCD own the alert, and the local chief executive owns the evacuation decision; RA 10121 lets local councils only recommend. After Paeng in October 2022, in which at least 68 people died in Mindanao floods and landslides, the President criticised local authorities for not forcing residents to evacuate, and during Tino in November 2025 Ombudsman complaints were filed against a congressman and mayors who were abroad during the storm. The 2025 handbook of the Center for Excellence in Disaster Management finds that no one organisation, office or government instrument is fully responsible and resourced for disaster risk management, the core argument of the proponents of a disaster department.
                </>
              ) : (
                <>
                  <strong className="text-foreground">一貫した責任主体のない権限の分割（構造的課題）。</strong>
                  PAGASAとPHIVOLCSがハザード警報を、NDRRMCとOCDが警戒を、地方首長が避難の決定をそれぞれ所管し、RA 10121は地方評議会に「勧告」しか認めていません。2022年10月のパエンではミンダナオの洪水・地すべりで少なくとも68人が死亡し、大統領は住民に避難を強制しなかった地方当局を批判しました。2025年11月のティノでは、暴風の最中に海外にいた下院議員や市長に対しオンブズマンへの申立てがなされました。災害管理センター（CFE-DM）の2025年版ハンドブックは、災害リスク管理に全面的な責任と資源をもつ単一の組織・部局・制度が存在しないと指摘しており、これは災害省推進派の中核的な論拠です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Dispersed local capacity (structural).</strong>{" "}
                  All 1,715 LGUs must have a local DRRM plan, but only 1,253 had adopted one; 84% have community-based DRRM plans and 58% contingency plans; of 849 comprehensive development plans assessed, 28% were risk-informed and 47% partially so; 92% of LGUs report implementing pre-emptive and forced evacuation whenever a disaster is impending and 88% have SOPs, yet only about 62% have evacuation centres with complete minimum facilities, and there is no data or assessment on whether the plans are implemented. In 2019 only 1,368 LGUs had operating early warning systems, and these run separately from the national chain under DILG leadership, so last-mile performance depends on individual LGU capacity and informal links with OCD regional offices and PAGASA field stations.
                </>
              ) : (
                <>
                  <strong className="text-foreground">地方能力の分散（構造的課題）。</strong>
                  1,715の全LGUに地方DRRM計画が義務づけられていますが、採択済みは1,253にとどまります。コミュニティ型DRRM計画をもつLGUは84%、コンティンジェンシー計画は58%で、評価された849の総合開発計画のうちリスク情報を反映したものは28%、部分的な反映が47%でした。92%のLGUが災害切迫時には予防的・強制的避難を実施すると報告し、88%が標準手順をもつ一方、最低限の設備が整った避難所をもつのは約62%で、計画が実施されているかを示すデータや評価は存在しません。2019年に稼働する予警報システムをもつLGUは1,368にとどまり、それらはDILG主導で国の系統とは別に運用されているため、ラストマイルの成否は個々のLGUの能力と、OCD地域局やPAGASA現地観測所との非公式な連携に左右されます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Rigid local funding (structural).</strong>{" "}
                  The Local DRRM Fund must be at least 5% of regular revenue and its 30% Quick Response Fund could, until 2025, be released only after a sanggunian or Presidential declaration of a state of calamity; unspent balances sit in a trust fund for five years. The explanatory note of Senate Bill 1097 (August 2025) states that because of budgetary restrictions LGUs are unable to hire the necessary manpower, and proposes letting the fund pay for mitigation works and rescue personnel. RA 12287 now allows the fund, including the Special Trust Fund, to be spent before a forecast hazard, but it is not known whether its implementing rules, due within 60 days of September 2025, have been issued or whether any State of Imminent Disaster has yet been declared.
                </>
              ) : (
                <>
                  <strong className="text-foreground">硬直的な地方財源（構造的課題）。</strong>
                  地方災害基金は歳入の5%以上で、その30%の即応基金は2025年まで地方議会または大統領による災害状態宣言の後にしか支出できず、未使用残高は5年間信託基金に留め置かれます。上院法案第1097号（2025年8月）の説明は、予算上の制約のためLGUが必要な人員を雇えないと述べ、基金を防災工事や救助要員に充てられるようにすることを提案しています。RA 12287は特別信託基金を含む基金を予測されたハザードの前に支出することを認めましたが、2025年9月から60日以内に制定されるはずだった施行規則が公布されたか、切迫災害状態が実際に宣言されたかは確認できていません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Flood-control infrastructure and corruption (structural).</strong>{" "}
                  Every flood warning assumes that dikes, pumps and dams work. In July 2023, during Egay, a gate problem at Bustos Dam in Bulacan and a reported unannounced release of water caused extensive flooding and brought the National Irrigation Administration before a Senate Blue Ribbon hearing. In 2025 the Commission on Audit flagged at least ₱341 million of flood-control projects as overpriced, substandard or non-existent out of some ₱545 billion spent, EO 94 created the Independent Commission for Infrastructure, and after Tino the President ordered a review of 511 flood-control projects in Cebu, whose governor called some of them ghost or substandard. Mass protests followed on 16 November 2025. The scandal consumed public-works leadership and political attention during the 2025 typhoon season.
                </>
              ) : (
                <>
                  <strong className="text-foreground">治水インフラと腐敗（構造的課題）。</strong>
                  すべての洪水警報は堤防・ポンプ・ダムが機能することを前提にしています。2023年7月のエガイでは、ブラカン州ブストス・ダムのゲート不具合と予告なしの放流が広範な浸水を招き、国家灌漑庁が上院ブルーリボン委員会の公聴会に呼ばれました。2025年には監査委員会が約5,450億ペソの治水支出のうち少なくとも3億4,100万ペソ分を過大価格・規格不適合・未存在と指摘し、大統領令第94号が独立インフラ委員会を設置し、ティノの後に大統領はセブの治水事業511件の見直しを命じ、州知事は一部を「幽霊事業か規格不適合」と呼びました。2025年11月16日には大規模な抗議行動が起きました。この疑惑は2025年の台風期に公共事業の指導層と政治の注意を奪いました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Wind-centric triggers versus rain-driven deaths (operational).</strong>{" "}
                  The institutional triggers (wind signals, EO 66 suspensions, DILG evacuation orders) are keyed to wind, while the lethal hazard has shifted to compound flooding. Kristine (24 October 2024) put Bicol under only Signal 2, yet Daet recorded 528.5 mm in 24 hours, a record since the 1920s, Albay 413 mm in 17 hours and Naga about 700 mm; 70% of the population of Naga was flooded and 162 people died nationwide. Tino (4 November 2025) carried Signal 4 over northern Cebu, but Cebu City received 183 mm in the 24 hours before landfall against a monthly average of 131 mm, the Butuanon and Mananga rivers overflowed, floods peaked between about 03:45 and 07:30 with power cut at 04:30, and 269 people died, at least 150 of them in Cebu. The governor of Cebu said the province had expected the winds to do the most damage; a city councillor said barangays flooded that no one had expected to flood. Paeng in 2022 killed at least 68 people in the Bangsamoro region to which no wind signal had been issued. The colour-coded rainfall tiers are based on hourly intensity and were not designed for 24-hour totals of 500-700 mm.
                </>
              ) : (
                <>
                  <strong className="text-foreground">風中心のトリガーと豪雨による死者（運用上の課題）。</strong>
                  制度上のトリガー（風信号、EO 66の休止、DILGの避難命令）は風に連動していますが、致命的なハザードは複合洪水へ移っています。クリスティン（2024年10月24日）ではビコール地方はシグナル2にとどまったにもかかわらず、ダエトで1920年代以来の記録となる24時間528.5 mm、アルバイで17時間413 mm、ナガで約700 mmの雨が降り、ナガ市では人口の70%が浸水し、全国で162人が死亡しました。ティノ（2025年11月4日）ではセブ北部にシグナル4が出ていましたが、セブ市では上陸前24時間に月平均131 mmに対して183 mmの雨が降り、ブトゥアノン川とマナンガ川が氾濫し、洪水は午前3時45分〜7時30分ごろにピークを迎え、4時30分に停電し、269人が死亡（うちセブで150人以上）しました。セブ州知事は「風が最大の被害をもたらすと考えていた」と述べ、市議会議員は「浸水を予想していなかったバランガイが浸水した」と語りました。2022年のパエンでは、風信号が出ていなかったバンサモロ地域で少なくとも68人が死亡しました。色別の降雨警報は時間雨量に基づいており、24時間で500〜700 mmという総量を想定して設計されたものではありません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Lead time and rapid intensification (operational).</strong>{" "}
                  The 2022 signals give only 12 hours of lead time at Signals 4 and 5, which is inherently late for moving large coastal populations. Odette (December 2021) strengthened by about 137 km/h in the 24 hours before landfall, models failed to predict the intensification, the highest signal raised was No. 4, about 409 people died and Surigao City was cut off, with only 70% of communications restored after three days. This is why the DILG now orders evacuation one to two days ahead on the basis of PDRA and track forecasts rather than the signal itself, and why the three-day trigger of RA 12287 matters.
                </>
              ) : (
                <>
                  <strong className="text-foreground">リードタイムと急速な発達（運用上の課題）。</strong>
                  2022年のシグナルはレベル4・5で12時間のリードタイムしか与えず、沿岸の大人口を動かすには本質的に遅すぎます。オデット（2021年12月）は上陸前24時間に約137 km/h強まり、モデルはその発達を予測できず、発表された最高シグナルは4で、約409人が死亡し、スリガオ市は孤立して3日後でも通信の復旧は70%でした。DILGが現在、シグナルそのものではなくPDRAと進路予報に基づいて1〜2日前に避難を命じるのはこのためであり、RA 12287の3日トリガーが重要な理由でもあります。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Over-broad warnings and warning fatigue (operational).</strong>{" "}
                  Lagmay and Racoma (2019) found that the PDRA alerts for Urduja and Vinta in December 2017 were largely ineffective because they were too general, calling for the evacuation of whole provinces and generating a cry-wolf effect, while existing hazard maps were not used to target warnings; they recommended hazard-specific, area-focused, time-bound warnings and direct calls from the NDRRMC to mayors hours before imminent danger. PAGASA itself acknowledged in 2025 a disconnect between forecast and actions. Impact-based forecasting is the intended remedy but remained a pilot shared only with LGUs, and was not operational for the Cebu floods of November 2025.
                </>
              ) : (
                <>
                  <strong className="text-foreground">過度に広い警報と警報疲れ（運用上の課題）。</strong>
                  LagmayとRacoma（2019年）は、2017年12月のウルドゥハとビンタに対するPDRA警報が州全体の避難を求めるあまりに一般的なもので「オオカミ少年効果」を生み、既存のハザード地図が警報の絞り込みに使われなかったため、ほとんど効果がなかったと指摘しました。彼らはハザード別・地域限定・時間限定の警報と、切迫する数時間前にNDRRMCが市長へ直接電話することを勧めています。PAGASA自身も2025年に予報と行動の断絶を認めました。影響予測型予報はその処方箋ですが、LGUにのみ提供する試行段階にとどまり、2025年11月のセブ洪水では運用されていませんでした。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Last mile, channel integrity and trust (operational).</strong>{" "}
                  The cell broadcast chain is manual and routed through one approval point, and in April 2025 messages in ECBS style were used for election campaigning, which the OCD said risked desensitising the public to real emergencies. During Kristine rescuers in Bula were accused of charging ₱5,000 per boat; after the Cebu earthquake labour complaints were filed against 30 business-process outsourcing firms for blocking exits or pressing staff to return, and relief re-branding, hoarding and non-distribution were noted in earthquake-hit provinces. In Cebu the earthquake-displaced were still in tent cities when Tino arrived five weeks later and had to be forcibly evacuated, and in Liloan floodwater from upland Cebu City surged just as residents believed the worst had passed, reaching second-storey roofs and killing 35 people. In the Davao Oriental doublet of October 2025 tsunami warnings forecast waves above 1 m where 30 cm were observed, a conservative but costly outcome for coastal evacuations.
                </>
              ) : (
                <>
                  <strong className="text-foreground">ラストマイル・伝達経路の健全性・信頼（運用上の課題）。</strong>
                  セルブロードキャストは手動で単一の承認点を経由し、2025年4月にはECBS型のメッセージが選挙運動に使われ、OCDは実際の緊急事態への感度を鈍らせる危険があると述べました。クリスティンではブラの救助者が1艇5,000ペソを請求したと非難され、セブ地震後には出口を封鎖し職員に出勤を迫ったとして30のBPO企業に対する労働申立てが出され、被災州では救援物資のラベル貼り替え・退蔵・未配布が指摘されました。セブでは地震の被災者が5週間後のティノ到来時にまだテント村にいて強制避難させられ、リロアンでは「最悪は過ぎた」と住民が思った直後にセブ市上流からの洪水が押し寄せて2階の屋根に達し、35人が死亡しました。2025年10月のダバオ・オリエンタル地震では1 m超の津波が予測されたのに対し観測は30 cmで、沿岸避難にとっては安全側ではあるものの負担の大きい結果でした。
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
              <>Japan is the historic architect of the Philippine flood forecasting and warning backbone. The pilot system for the Pampanga River Basin was built in 1973 with Government of Japan assistance; the Flood Forecasting and Warning System for Dam Operation, conceived in April 1983, was completed for Angat and Pantabangan in July 1986 under an OECF yen loan and extended to Magat and Binga-Ambuklao in 1990-1992. A JICA technical cooperation project on comprehensive data management for the Cagayan de Oro and Tagoloan systems ran from 2016 to 2019, and the Cagayan de Oro River Basin system, a JICA grant project started in June 2018 and motivated by the Sendong disaster of 2011, was inaugurated on 4 April 2025 with seven water-level stations, six rain gauges in Cagayan de Oro and Bukidnon, two X-band radars and a backbone telecommunications network. JICA estimates some US$3 billion of disaster management assistance over four decades, including flood-risk projects on the Cagayan, Tagoloan, Imus and Cagayan de Oro rivers, the Cavite industrial area and the Pasig-Marikina channel, and the training in Japan of more than 200 Filipino professionals including OCD staff. Since early 2024 the PAGASA-JICA capability enhancement project has worked at the institutional level through LGU workshops on early warning and evacuation planning, and the JICA/JST SATREPS project HyDEPP (Hybrid Water-Related Disaster Risk Assessment and Policy Development), led by the University of the Philippines Los Baños, the University of Tokyo and ICHARM with DOST, DPWH, MMDA, LLDA, PAGASA and other agencies, delivered hybrid risk models and basin synthesis reports for the Pampanga and Pasig-Marikina/Laguna Lake basins at its final joint coordinating committee on 12 November 2025. JICA also extended relief after the Cebu earthquake in October 2025.</>
            ) : (
              <>日本はフィリピンの洪水予警報の基盤を歴史的に築いてきた存在です。パンパンガ川流域の試験的システムは1973年に日本政府の支援で建設され、1983年4月に構想されたダム運用のための洪水予警報システムは、1986年7月にOECF円借款でアンガットとパンタバンガンについて完成し、1990〜1992年にマガットとビンガ・アンブクラオへ拡張されました。カガヤン・デ・オロとタゴロアンのシステムを対象とするデータ管理のJICA技術協力プロジェクトは2016〜2019年に実施され、2011年のセンドン災害を契機に2018年6月に始まったJICA無償資金協力によるカガヤン・デ・オロ川流域システムは、2025年4月4日に水位観測所7、カガヤン・デ・オロとブキドノンの雨量観測所6、Xバンドレーダー2基、基幹通信網を備えて開所しました。JICAは40年間で約30億米ドルの防災協力を行ったとしており、カガヤン川、タゴロアン川、イムス川、カガヤン・デ・オロ川、カビテ工業地域、パシッグ・マリキナ水路の洪水リスク事業と、OCD職員を含む200人超の日本での研修を含みます。2024年初以降、PAGASA・JICAの能力強化プロジェクトはLGU向けの予警報・避難計画ワークショップを通じて制度面にも踏み込み、フィリピン大学ロスバニョス校、東京大学、ICHARMがDOST・DPWH・MMDA・LLDA・PAGASAなどと進めたJICA／JSTのSATREPS「HyDEPP（水災害ハイブリッドリスク評価・政策形成プロジェクト）」は、2025年11月12日の最終合同調整委員会でパンパンガ川とパシッグ・マリキナ／ラグナ湖流域のハイブリッドリスクモデルと流域総合報告書を引き渡しました。JICAは2025年10月のセブ地震後にも緊急援助を行っています。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>Multilateral and other bilateral support now concentrates on impact-based forecasting and contingent finance. The Green Climate Fund project led by PAGASA (2022-2027) is the first GCF project in the country; a partnership with South Korea has expanded LGU-level flood warning systems; the US-funded Pacific Disaster Center built the PhilAWARE platform for the OCD, and USAID provided US$6.5 million through IOM and WFP for the late-2024 typhoon series while prepositioning relief with the OCD. The World Bank Disaster Risk Management Development Policy Loan with a Catastrophe-Deferred Drawdown Option offers liquidity of up to US$500 million or 0.25% of GDP, whichever is less, and a release of US$500 million was reported on 28 November 2025 after Tino and Uwan. Those two storms also drew bilateral relief from the United States, Japan, Timor-Leste (a 120-person team), China and Australia. Documented institutional support from ADB, UNDP or WMO specifically for early warning governance, or a national Early Warnings for All plan, was not identified in the sources consulted. In sum, Japanese cooperation shaped the technical backbone and is moving into the institutional layer, but PAGASA flood forecasting still covers 18 basins, leaving most small, fast-responding catchments of the kind that flooded Cebu in 2025 without telemetered forecasting.</>
            ) : (
              <>多国間およびその他の二国間支援は、現在は影響予測型予報と緊急時融資に集中しています。PAGASAが主導する緑の気候基金事業（2022〜2027年）は同国初のGCF事業であり、韓国との協力はLGUレベルの洪水予警報システムを拡充し、米国資金による太平洋災害センターはOCD向けにPhilAWAREを構築し、USAIDは2024年末の連続台風に対しIOMとWFPを通じて650万米ドルを提供するとともにOCDと救援物資を事前配備しています。世界銀行の災害リスク管理開発政策融資（巨大災害時繰延引出オプション付き）は最大5億米ドルまたはGDPの0.25%のいずれか低い方の流動性を提供し、ティノとウワンの後、2025年11月28日に5億米ドルが実行されたと報じられています。両台風では米国、日本、ティモール・レステ（120人の支援チーム）、中国、オーストラリアからも二国間の救援がありました。ADB・UNDP・WMOによる予警報ガバナンスに特化した制度支援や、EW4Allの国別計画は、参照した資料の範囲では確認できませんでした。要約すれば、日本の協力は技術的基盤を形づくり制度面へ広がりつつありますが、PAGASAの洪水予報は依然18流域にとどまり、2025年にセブを襲ったような小規模で応答の速い流域の多くはテレメータ化された予報の外に置かれています。</>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 8. Conclusion ── */}
        <section>
          <h2 className={H2}>{en ? "8. Conclusion" : "8. まとめ"}</h2>
          <p className={P}>
            {en ? (
              <>What is distinctive about the Philippines is the completeness of its statutory architecture. Few countries in the region have a law that defines the four pillars of early warning, obliges every local office to run a multi-hazard system, compels telecommunications companies to broadcast free alerts, modernises both the meteorological and the geological agency by statute, mandates an evacuation centre in every town and, since 2025, legalises forced evacuation and fund release before a forecast hazard. The chain nonetheless breaks at two hinges that the laws do not control: the decision of some 1,700 chief executives, whose capacity, funding and presence vary widely, and the hazard itself, which has shifted from wind, for which signals, suspensions and evacuation orders were designed, to rainfall-driven flooding in small basins that the forecasting network does not cover. The deaths in Bicol in 2024 and Cebu in 2025 occurred under Signals 2 and 4, not from a lack of law but from triggers keyed to the wrong variable.</>
            ) : (
              <>フィリピンの特徴は法制度の完備度にあります。予警報の四つの柱を法律で定義し、すべての地方事務所に多ハザードシステムの運用を義務づけ、通信事業者に無料警報の配信を強制し、気象機関と地質機関の双方を法律で近代化し、全市町に避難所を義務づけ、2025年以降は予測されたハザードの前の強制避難と資金支出を合法化している国は、域内では少数です。それでも警報の連鎖は、法律が制御できない二つの継ぎ目で切れます。一つは能力・財源・在席状況が大きく異なる約1,700人の地方首長の決定であり、もう一つはハザードそのものです。シグナル・休止・避難命令が設計された風から、予報網が覆っていない小流域の豪雨洪水へと致命的なハザードが移りました。2024年のビコールと2025年のセブの死者はシグナル2と4のもとで生じており、法の欠如ではなく、トリガーが誤った変数に結びついていることが原因です。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>The unresolved question is therefore whether RA 12287 can be made to work as an impact trigger. Its declaration depends on a pre-disaster risk assessment that classifies forecast impacts as severe with three days of lead time, which in turn requires impact-based forecasting that is still a pilot, basin coverage that is still partial, and local assessments that are not yet monitored. Three changes would follow from this analysis. In law, forced and pre-emptive evacuation should be defined and the automatic suspension and evacuation triggers of Executive Order 66 re-based on rainfall and flood products as well as wind signals. In organisation, the choice between a disaster department and a strengthened OCD matters less than giving one body end-to-end responsibility for the alert chain, from a CAP-based, automated cell broadcast to verification of whether local plans are executed. And in finance, the anticipatory fund release of RA 12287 needs implementing rules and a trust-fund regime that lets LGUs hire the people who turn a warning into movement.</>
            ) : (
              <>したがって未解決の問いは、RA 12287を影響基準のトリガーとして機能させられるかです。その宣言は、予測影響を「深刻」と分類し3日のリードタイムをもつ事前災害リスク評価に依存し、それはまだ試行段階の影響予測型予報、依然部分的な流域の予報網、そして実施が監視されていない地方の評価を必要とします。この分析から三つの変更が導かれます。法制度では、強制避難と予防的避難を定義し、大統領令第66号の自動休止・避難トリガーを風信号だけでなく降雨・洪水情報にも基づくものへ組み替えること。組織では、災害省の新設かOCDの強化かという選択よりも、CAPに基づく自動化されたセルブロードキャストから地方計画の実施確認までの警報連鎖に一貫した責任をもつ主体を一つ定めることが重要です。財政では、RA 12287の事前の資金解放に施行規則を整え、警報を人の移動に変える人員をLGUが雇える信託基金の運用に改めることです。</>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── References ── */}
        <section>
          <h2 className={H2}>References</h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Republic of the Philippines (1991). Republic Act No. 7160, Local
              Government Code of 1991. <em>LawPhil Project</em>.
              https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html
            </li>
            <li>
              Republic of the Philippines (2010). Republic Act No. 10121,
              Philippine Disaster Risk Reduction and Management Act of 2010.{" "}
              <em>LawPhil Project</em>.
              https://lawphil.net/statutes/repacts/ra2010/ra_10121_2010.html
            </li>
            <li>
              Office of the President (2012). Executive Order No. 66, s. 2012, Prescribing Rules on the Cancellation or Suspension of Classes and Work in Government Offices due to Typhoons, Flooding, Other
              Weather Disturbances, and Calamities. <em>LawPhil Project</em>.
              https://lawphil.net/executive/execord/eo2012/eo_66_2012.html
            </li>
            <li>
              Office of Civil Defense and NDRRMC (2015). Joint Memorandum Circular No. 001, s. 2015, Implementing Rules and Regulations
              of Republic Act No. 10639 (Free Mobile Disaster Alerts Act).{" "}
              <em>Lawyerly</em>. https://dev.lawyerly.ph/laws/72097
            </li>
            <li>
              PAGASA (2021). Implementing Rules and Regulations of Republic
              Act No. 10692, PAGASA Modernization Act of 2015.{" "}
              <em>PAGASA</em>. https://pagasa.dost.gov.ph/article/81
            </li>
            <li>
              Republic of the Philippines (2024). Republic Act No. 12076,
              Ligtas Pinoy Centers Act. <em>LawPhil Project</em>.
              https://lawphil.net/statutes/repacts/ra2024/ra_12076_2024.html
            </li>
            <li>
              Republic of the Philippines (2025). Republic Act No. 12180,
              PHILVOLCS Modernization Act. <em>LawPhil Project</em>.
              https://lawphil.net/statutes/repacts/ra2025/ra_12180_2025.html
            </li>
            <li>
              Republic of the Philippines (2025). Republic Act No. 12287,
              Declaration of State of Imminent Disaster Act.{" "}
              <em>LawPhil Project</em>.
              https://lawphil.net/statutes/repacts/ra2025/ra_12287_2025.html
            </li>
            <li>
              Center for Excellence in Disaster Management and Humanitarian Assistance (2025). Philippines Disaster Management Reference
              Handbook, March 2025. <em>CFE-DM</em>.
              https://www.cfe-dmha.org/LinkClick.aspx?fileticket=tNZvQPdNJr0%3d&amp;portalid=0
            </li>
            <li>
              PAGASA (2022). Press release on the Modified Tropical Cyclone Wind Signals, 23 March 2022; Tropical Cyclone Wind Signal
              learning tool. <em>PAGASA</em>.
              https://pagasa.dost.gov.ph/press-release/108?page=21 ; https://www.pagasa.dost.gov.ph/learning-tools/tropical-cyclone-wind-signal
            </li>
            <li>
              PAGASA (n.d.). Flood Forecasting and Warning. <em>PAGASA</em>.
              https://www.pagasa.dost.gov.ph/flood
            </li>
            <li>
              PHIVOLCS (n.d.). Volcano Alert Level. <em>PHIVOLCS</em>.
              https://www.phivolcs.dost.gov.ph/index.php/volcano-hazard/volcano-alert-level
            </li>
            <li>
              PHIVOLCS (2025). Primer on the 30 September 2025 Magnitude
              (Mw) 6.9 Offshore Northern Cebu Earthquake. <em>PHIVOLCS</em>.
              https://www.phivolcs.dost.gov.ph/press-release-primer-on-the-30-september-2025-magnitude-mw-6-9-offshore-northern-cebu-earthquake/
            </li>
            <li>
              Lagmay, A. M. F. and Racoma, B. A. (2019). [Study of pre-disaster risk assessment warnings for Tropical Storms
              Urduja and Vinta, December 2017].{" "}
              <em>Disaster Prevention and Management</em>, 28(2).
              https://www.emerald.com/insight/content/doi/10.1108/DPM-03-2018-0077/full/html
            </li>
            <li>
              Philstar (2019). PAGASA launches upgraded storm surge warning
              system, 18 June 2019. <em>The Philippine Star</em>.
              https://www.philstar.com/headlines/2019/06/18/1927465/pagasa-launches-upgraded-storm-surge-warning-system
            </li>
            <li>
              Philstar (2024). DepEd expands school heads&rsquo; power to
              suspend classes amid emergencies, 27 December 2024.{" "}
              <em>The Philippine Star</em>.
              https://www.philstar.com/headlines/2024/12/27/2410164/deped-expands-school-heads-power-suspend-classes-amid-emergencies
            </li>
            <li>
              GMA News (2024). Not enough warnings about Kristine? PAGASA says
              it is enhancing services, 4 November 2024.{" "}
              <em>GMA News Online</em>.
              https://www.gmanetwork.com/news/topstories/nation/925917/not-enough-warnings-about-kristine-pagasa-says-it-s-enhancing-services/story
            </li>
            <li>
              Inquirer.net (2025). OCD: Misusing ECBS for political campaign
              risks public safety, endangers lives, 6 April 2025.{" "}
              <em>Philippine Daily Inquirer</em>.
              https://www.inquirer.net/435293/ocd-misusing-ecbs-for-pol-campaign-risks-public-safety-endangers-lives/
            </li>
            <li>
              JICA Philippines Office (2025). Press releases: Inauguration of the Cagayan de Oro River Basin Flood Forecasting and Warning System, 4 April 2025; Final Joint Coordinating Committee of the
              HyDEPP SATREPS project, 12 November 2025. <em>JICA</em>.
              https://www.jica.go.jp/english/overseas/philippine/information/press/2025/CDOFFWS20250404.html ; https://www.jica.go.jp/english/overseas/philippine/information/press/2025/final-JCC-HyDEPP.html
            </li>
            <li>
              Asian Journal (2025). Marcos creates Independent Commission to
              probe flood-control anomalies, 13 September 2025.{" "}
              <em>Asian Journal</em>.
              https://asianjournal.com/philippines/across-the-islands/marcos-creates-independent-commission-to-probe-flood-control-anomalies/
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
              <strong className="text-foreground">{en ? "Philippines" : "フィリピン"}</strong>
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
              <Link href="/blog/ews-governance-brunei" className="text-highlight hover:underline">
                {en ? "Brunei Darussalam" : "ブルネイ"}
              </Link>
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
