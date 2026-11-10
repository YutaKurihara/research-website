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
            {en ? "Early Warning Governance in Singapore — Laws, Actors and Current Challenges" : "シンガポールの予警報制度 — 法制度・アクターの役割・現在の課題"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en ? "How a city-state without a single disaster management act distributes warning authority by hazard across SCDF, MSS/NEA, PUB and MOH, and what the 2024-2026 legal changes alter, based on statute texts, parliamentary speeches, agency publications and the 2024 IOTWMS national report." : "単一の災害対策法を持たない都市国家シンガポールで、SCDF・MSS/NEA・PUB・MOH にハザード別に分かれた警報権限がどう組み立てられ、2024〜2026年の法改正で何が変わったのかを、法令本文・国会答弁・各機関の公表資料・2024年の IOTWMS 国別報告に基づいて整理します。"}
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
              <>Singapore records among the smallest disaster losses of any ASEAN member. Its hazards are localised flash floods that typically subside within an hour, transboundary haze from land and forest fires outside the country, urban heat (the mean temperature has risen 0.25 °C per decade since 1948), coastal flooding driven by sea-level rise (about 30 percent of the land lies less than 5 m above mean sea level, and rises of up to 1.15 m by 2100 and 2 m by 2150 are projected), a low-probability Indian Ocean tsunami from large earthquakes on the Manila or Sunda Trench, and civil-defence emergencies such as major fires, chemical incidents and terrorism. Flood-prone land has shrunk from about 3,200 ha in the 1970s to under 25 ha, yet on 13 April 2025 114 mm fell on the north in under two hours and on 4 December 2025 113.4 mm fell on the west in about 1 h 40 min, both within the top 2 percent of daily records since 1978, and several locations flooded each time. The 2026 haze season brought three regional Level 3 alerts and, on 4 September 2026, the first Unhealthy PSI reading since October 2023.</>
            ) : (
              <>シンガポールの自然災害による人的・経済的損失は、ASEAN 加盟国のなかで際立って小さい水準にあります。主なハザードは、通常1時間以内に引く局地的な鉄砲水、国外の土地・森林火災に起因する越境ヘイズ、都市の高温化（1948年以降、平均気温は10年あたり0.25℃上昇）、海面上昇に伴う沿岸浸水（国土の約30%が平均海面から5m未満、2100年までに最大1.15m、2150年までに2mの上昇見込み）、低頻度のインド洋津波（マニラ海溝・スンダ海溝の巨大地震シナリオ）、そして大規模火災・化学物質事故・テロなどの民間防衛上の緊急事態です。浸水常襲地は1970年代の約3,200haから25ha未満へと縮小しましたが、2025年4月13日には北部で2時間足らずに114mm、同年12月4日には西部で約1時間40分に113.4mmという1978年以降の上位2%に入る降雨があり、それぞれ複数地点が浸水しました。2026年のヘイズ期には地域最高の警戒レベル3が3回発出され、9月4日には2023年10月以来となる「不健康（Unhealthy）」域の PSI が記録されています。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>Precisely because losses are small, the analytical interest lies in the design itself. Singapore has no omnibus disaster management act; the authority to warn is distributed across hazard-specific statutes. Civil-defence emergencies and the siren network fall under the Civil Defence Act 1986, administered by SCDF (Singapore Civil Defence Force) under MHA (Ministry of Home Affairs); meteorology under the National Environment Agency Act 2002, which covers NEA (National Environment Agency) and within it MSS (Meteorological Service Singapore), both under MSE (Ministry of Sustainability and the Environment); drainage, flooding and the coast under the Public Utilities Act 2001 and the Sewerage and Drainage Act 1999, administered by PUB (Public Utilities Board, the national water agency); haze under the Transboundary Haze Pollution Act 2014 and the NEA PSI regime; and infectious disease under the Infectious Diseases Act 1976 as amended in 2024, held by MOH (Ministry of Health). Whole-of-government coordination is provided by the non-statutory Homefront Crisis Management System (HCMS) and the NEA-chaired Haze Task Force. Between 2024 and 2026 a cluster of changes moved the locus of warning authority: four statutory public-health postures (in force April 2024), building-level flood protection duties under the Sewerage and Drainage Act (in force November 2024 and March 2025), the Coastal Protection and Other Amendments Bill that explicitly assigns coastal flood forecasting and early warning to PUB (passed 6 March 2026), and the SCDF cell-broadcast system SG Alert (announced August 2025, live May 2026).</>
            ) : (
              <>損失が小さいからこそ、分析上の関心は制度設計そのものに向きます。シンガポールには包括的な災害対策法が存在せず、警報を出す権限はハザードごとの個別法に分散しています。民間防衛上の緊急事態とサイレン網は Civil Defence Act 1986 のもとで SCDF（Singapore Civil Defence Force、シンガポール民間防衛隊）が担い、その所管は MHA（Ministry of Home Affairs、内務省）です。気象は National Environment Agency Act 2002 に基づき、NEA（National Environment Agency、国家環境庁）とその内部組織である MSS（Meteorological Service Singapore、シンガポール気象局）が担い、いずれも MSE（Ministry of Sustainability and the Environment、持続可能性・環境省）の傘下にあります。排水・洪水・沿岸は Public Utilities Act 2001 と Sewerage and Drainage Act 1999 に基づき PUB（Public Utilities Board、公益事業庁＝国家水資源庁）が、ヘイズは Transboundary Haze Pollution Act 2014 と NEA の PSI 制度が、感染症は Infectious Diseases Act 1976（2024年改正）のもとで MOH（Ministry of Health、保健省）が担います。省庁横断の調整は、法律に根拠を持たない Homefront Crisis Management System（HCMS）と、NEA が議長を務める Haze Task Force が引き受けています。しかも2024〜2026年には、4段階の公衆衛生態勢の法定（2024年4月施行）、建物単位の洪水防護を義務づける Sewerage and Drainage Act 改正（2024年11月・2025年3月施行）、PUB に沿岸浸水の予測と早期警報を明示的に委ねる Coastal Protection and Other Amendments Bill（2026年3月6日可決）、SCDF のセルブロードキャスト SG Alert（2025年8月発表・2026年5月運用開始）と、警報権限の所在を動かす変更が集中しました。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>This article reviews those statutes and the roles of the agencies, the warning categories and channels by hazard, the reforms since 2020 and the remaining challenges, and asks what the model of a high-capacity city-state offers, and does not offer, to other ASEAN members.</>
            ) : (
              <>本稿では、これらの法令と機関の役割、ハザード別の警報区分と伝達経路、2020年以降の改革、残された課題を整理し、高い行政能力を持つ都市国家のモデルが他の ASEAN 加盟国に何を提供し、何を提供しないのかを検討します。</>
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
              <>The distinguishing feature of Singapore law is how rarely it states who issues a warning. Agency warnings are derived from general functional provisions (meteorological services, drainage and flood prevention), and the only statute that legislates a warning device network is the Public Warning System part of the Civil Defence Act. By contrast, who orders protective action is comparatively explicit: evacuation and closure powers sit with SCDF and the police (Civil Defence Act s 103), fire closing orders with the Commissioner of Civil Defence (Fire Safety Act s 30), and declarations of public-health postures with the appropriate Minister (Infectious Diseases Act Part 3A).</>
            ) : (
              <>シンガポールの法制度の特徴は、「誰が警報を出すか」を明文で定めた法律がごく少ないことです。各機関の警報は、その機関の一般的な機能規定（気象業務、排水・洪水防止）から導かれており、警報装置の網そのものを法定しているのは Civil Defence Act の Public Warning System の章だけです。他方、「誰が防護行動を命じるか」は比較的明確で、避難・閉鎖の権限は SCDF と警察（Civil Defence Act 第103条）、火災時の閉鎖命令は Commissioner of Civil Defence（Fire Safety Act 第30条）、感染症の態勢宣言は担当大臣（Infectious Diseases Act 第3A部）に置かれています。</>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className={TH}>{en ? "Instrument" : "法令"}</th>
                  <th className={TH}>{en ? "Year" : "年"}</th>
                  <th className={TH}>{en ? "Scope" : "主な内容"}</th>
                  <th className={TH}>
                    {en ? "Provisions on warning and evacuation" : "警報・避難に関する規定"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TDH}>
                    {en ? "Civil Defence Act 1986 (2020 Rev. Ed.)" : "Civil Defence Act 1986（民間防衛法、2020年改訂版）"}
                  </td>
                  <td className={TD}>1986</td>
                  <td className={TD}>
                    {en ? "Defines a civil defence emergency as any fire, explosion, earthquake, oil spill, eruption, flood, storm, hazardous materials incident or other happening endangering public safety; sets SCDF functions (s 4) and the Commissioner of Civil Defence (s 6); Part 11A day-to-day operations, Part 12 state of civil defence emergency, Part 12A Public Warning System (inserted 2018, in force 1 February 2019), Part 13 training of the civilian population." : "火災・爆発・地震・油流出・噴火・洪水・暴風・危険物事故など公共の安全を脅かす事象を「民間防衛上の緊急事態」と定義。SCDF の機能（第4条）と Commissioner of Civil Defence（第6条）、第11A部の平時業務、第12部の緊急事態宣言、第12A部の Public Warning System（2018年追加、2019年2月1日施行）、第13部の住民訓練。"}
                  </td>
                  <td className={TD}>
                    {en ? "s 4(2)(e) SCDF disseminates information and advice to the public; s 4(2)(g) operates prescribed civil defence emergency devices, including public warning devices. s 102: the Minister may declare a state of civil defence emergency for a district and must immediately give public notice; it lapses after 7 days unless extended with the approval of the President. s 103: the Commissioner, an SCDF member or a police officer may direct evacuation of any area, building or place, restrict movement and close roads (fine up to S$2,000 and/or 3 months). Part 12A: owners must provide space, facilities and access for warning devices at their own expense (up to S$10,000 and/or 3 years plus S$1,000 per day; tampering up to S$50,000)." : "第4条(2)(e) SCDF は住民に情報と助言を伝達、同(g) 公衆警報装置を含む所定の民間防衛緊急装置を運用。第102条 大臣は地区ごとに民間防衛緊急事態を宣言でき、直ちに公示する義務。7日で失効、延長には大統領の承認が必要。第103条 Commissioner・SCDF 隊員・警察官は区域・建物の避難指示、移動制限、道路閉鎖が可能（違反は2,000ドル以下または3か月以下）。第12A部 建物所有者は警報装置のための場所・設備・立入りを自己負担で提供（違反は1万ドル以下または3年以下、加えて日額1,000ドル。装置の損壊は5万ドル以下）。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en ? "Civil Defence Shelter Act 1997" : "Civil Defence Shelter Act 1997（民間防衛シェルター法）"}
                  </td>
                  <td className={TD}>1997</td>
                  <td className={TD}>
                    {en ? "Provision of civil defence shelters during a state of emergency (Proclamation under Art 150 of the Constitution or a Part 12 declaration under the Civil Defence Act); made household and storey shelters mandatory in new homes; co-regulated by SCDF and BCA." : "非常事態（憲法第150条の宣言または Civil Defence Act 第12部の宣言）における防空シェルターの提供。新築住宅に家庭用・階用シェルターを義務化。SCDF と BCA が共同規制。"}
                  </td>
                  <td className={TD}>
                    {en ? "The Minister brings Parts 4-5 into operation by order when a state of emergency appears imminent (beyond 7 days needs the approval of the President). The Commissioner may designate improvised shelters (s 7) and issue preparation notices (s 9); owners must admit people (s 11). s 19(2): notices may be served by newspapers, Gazette, radio and TV broadcast, audible sirens or public-address signals." : "非常事態が差し迫ったとき大臣が命令で第4〜5部を発動（7日を超える場合は大統領の承認）。Commissioner は臨時シェルターの指定（第7条）、準備通知（第9条）が可能。所有者は避難者を受け入れる義務（第11条）。第19条(2) 通知は新聞・官報・ラジオ・テレビ放送・サイレン・拡声装置で行える。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en ? "Fire Safety Act 1993" : "Fire Safety Act 1993（火災安全法）"}
                  </td>
                  <td className={TD}>1993</td>
                  <td className={TD}>
                    {en ? "Fire safety regulation; the Commissioner is the Commissioner of Civil Defence; fire safety measures include installations giving warning of a fire; fire safety managers and Company Emergency Response Teams (s 38)." : "火災安全規制。Commissioner は Commissioner of Civil Defence。火災警報設備を含む火災安全措置、防火管理者と企業緊急対応チーム（第38条）。"}
                  </td>
                  <td className={TD}>
                    {en ? "s 13: at a fire the Commissioner or SCDF may take control, close streets and remove endangered persons. s 30: closing orders of up to 72 hours (penalty up to S$100,000 and/or 12 months). s 37: the Minister may designate premises that must have an Emergency Response Plan with annual evacuation drills." : "第13条 火災時に Commissioner・SCDF が現場を統制し、道路閉鎖・危険にさらされた者の退去が可能。第30条 最長72時間の閉鎖命令（違反は10万ドル以下または12か月以下）。第37条 大臣は緊急対応計画と年1回の避難訓練を義務づける建物を指定できる。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en ? "National Environment Agency Act 2002" : "National Environment Agency Act 2002（国家環境庁法）"}
                  </td>
                  <td className={TD}>2002</td>
                  <td className={TD}>
                    {en ? "Functions of NEA: meteorological services for government, aviation and shipping (s 11(1)(q)), observations and climatological records (r), seismological monitoring (s), ambient air monitoring (l), vectors of infectious agents (a); may establish meteorological offices and stations (s 12(g)); emergency entry to set up stations (s 41(1))." : "NEA の機能：政府・航空・海運向けの気象業務（第11条(1)(q)）、観測と気候記録（同(r)）、地震観測（同(s)）、大気環境監視（同(l)）、感染症媒介生物（同(a)）。気象台・観測所の設置（第12条(g)）、観測所設置のための緊急立入り（第41条(1)）。"}
                  </td>
                  <td className={TD}>
                    {en ? "None explicit. The Act names neither the Meteorological Service Singapore nor warnings; MSS heavy-rain, haze, heat-stress and tsunami products rest on the general meteorological-services function." : "明文規定なし。法律は Meteorological Service Singapore の名称も「警報」の語も含まず、MSS の大雨・ヘイズ・暑熱・津波に関する情報は一般的な気象業務の機能規定に依拠。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en ? "Public Utilities Act 2001" : "Public Utilities Act 2001（公益事業法）"}
                  </td>
                  <td className={TD}>2001</td>
                  <td className={TD}>
                    {en ? "PUB as national water agency (reconstituted 1 April 2001). s 6(1): construct and manage stormwater drainage and structures for flood prevention or alleviation (f)(iii); regulate drainage and coastal protection measures (g); carry out coastal management (eb); coordinate land-use policy against coastal flooding taking climate change into account (ec); manage the Coastal and Flood Protection Fund (ea); public participation and education on coastal management (ed)." : "PUB を国家水資源庁として再編（2001年4月1日）。第6条(1)：雨水排水と洪水防止・軽減施設の建設・管理（(f)(iii)）、排水と沿岸防護措置の規制（(g)）、沿岸管理（(eb)）、気候変動を考慮した沿岸浸水に対する土地利用政策の調整（(ec)）、Coastal and Flood Protection Fund の管理（(ea)）、沿岸管理に関する住民参加と教育（(ed)）。"}
                  </td>
                  <td className={TD}>
                    {en ? "No explicit warning clause; PUB flood alerts rest on the drainage and flood-prevention function. s 24B: emergency action without notice where public safety is at stake." : "警報の明文規定なし。PUB の洪水警報は排水・洪水防止の機能規定に依拠。第24B条 公共の安全が脅かされる場合の予告なしの緊急措置。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en ? "Sewerage and Drainage Act 1999, renamed Sewerage, Drainage and Coastal Protection Act 1999 (SDCPA)" : "Sewerage and Drainage Act 1999（下水道・排水法）→ Sewerage, Drainage and Coastal Protection Act 1999（下水道・排水・沿岸保護法、SDCPA）"}
                  </td>
                  <td className={TD}>
                    {en ? "1999; amended 2022/2024 (in force 1 Nov 2024, 1 Mar 2025); coastal provisions passed 6 Mar 2026" : "1999年。2022・2024年改正（2024年11月1日・2025年3月1日施行）、沿岸保護条項は2026年3月6日可決"}
                  </td>
                  <td className={TD}>
                    {en ? "Part 4 drainage; s 2(1) defines flood protection measure; s 22B owners must keep flood protection measures in order and PUB may require inspection and testing. The 2026 amendments add coastal protection: PUB gazettes absolute protection boundaries and transiently floodable areas, approves coastal works, hosts a Coastal Protection Interpretation Plan; landowner duties (ss 30E, 30G, 30N, 30P), Flood Protection Manager, penalties up to S$200,000 and/or 2 years." : "第4部 排水。第2条(1) 洪水防護措置の定義。第22B条 所有者は洪水防護措置を維持し、PUB は点検・試験を要求できる。2026年改正で沿岸保護を追加：PUB が絶対防護境界と一時浸水区域を官報指定、沿岸工事の許可、Coastal Protection Interpretation Plan の公開。土地所有者の義務（第30E・30G・30N・30P条）、Flood Protection Manager、罰則は20万ドル以下または2年以下。"}
                  </td>
                  <td className={TD}>
                    {en ? "The only statute that explicitly tasks an agency with flood forecasting and early warnings (PUB, 2026 amendments). Owners of deployable barriers may be required to deploy them before an imminent flood; owners in transiently floodable areas must prepare flood response plans and run drills; PUB may enter where an imminent coastal flood is forecast and the owner cannot be contacted." : "機関に「洪水予測と早期警報」を明示的に委ねる唯一の法律（PUB、2026年改正）。可搬式止水板の所有者は差し迫った浸水の前に展開を求められ、一時浸水区域の所有者は洪水対応計画と訓練を義務づけられる。沿岸浸水が予測され所有者に連絡がつかない場合、PUB は立ち入ることができる。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en ? "Transboundary Haze Pollution Act 2014" : "Transboundary Haze Pollution Act 2014（越境ヘイズ汚染法）"}
                  </td>
                  <td className={TD}>2014</td>
                  <td className={TD}>
                    {en ? "In operation from 25 September 2014. Haze pollution is a poor air quality episode caused by smoke from land or forest fires wholly outside Singapore, when the air quality index reaches a prescribed number for at least 24 hours (s 2); extraterritorial application (s 4); fines up to S$100,000 per day of haze, aggregate cap S$2 million (s 5); civil liability (s 6)." : "2014年9月25日施行。国外の土地・森林火災の煙による大気質悪化で、大気質指数が所定の数値に24時間以上達する場合を「ヘイズ汚染」と定義（第2条）。域外適用（第4条）。罰金はヘイズ1日あたり10万ドル以下、総額200万ドルまで（第5条）。民事責任（第6条）。"}
                  </td>
                  <td className={TD}>
                    {en ? "No public warning clause. s 9: the Director-General of Environmental Protection may issue preventive measures notices requiring entities to fight fires, stop burning or submit action plans; s 20 lets authorised NEA officers act on behalf of the Director-General. Used on 16 October 2026 against seven companies operating in Indonesia." : "住民への警報規定なし。第9条 Director-General of Environmental Protection は消火・焼却停止・行動計画提出を求める予防措置通知を発出でき、第20条で NEA 職員が代行可能。2026年10月16日、インドネシアで操業する7社に対して発動。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en ? "Infectious Diseases Act 1976, amended by the Infectious Diseases (Amendment) Act 2024" : "Infectious Diseases Act 1976（感染症法）、Infectious Diseases (Amendment) Act 2024 による改正"}
                  </td>
                  <td className={TD}>{en ? "1976; amendment passed 7 Mar 2024, in force 9 Apr 2024" : "1976年。改正は2024年3月7日可決、4月9日施行"}</td>
                  <td className={TD}>
                    {en ? "Four statutory public-health postures replacing the colour-coded DORSCON: Baseline, Outbreak Management, Public Health Threat (powers ported from Part 7 of the COVID-19 (Temporary Measures) Act 2020), Public Health Emergency (curfews, requisition under the Requisition of Resources Act 1985)." : "色分け式の DORSCON に代わる4つの法定公衆衛生態勢：Baseline、Outbreak Management、Public Health Threat（COVID-19 (Temporary Measures) Act 2020 第7部の権限を移管）、Public Health Emergency（夜間外出禁止、Requisition of Resources Act 1985 に基づく徴用）。"}
                  </td>
                  <td className={TD}>
                    {en ? "Part 3A (ss 21C-21K): the appropriate Minister declares a Public Health Threat (s 21C) or a Public Health Emergency (s 21E) by order, published without delay, gazetted and presented to Parliament; valid until revoked or 90 days, renewable in blocks of up to 90 days; Parliament may annul by resolution; requisition only in an emergency (s 21G)." : "第3A部（第21C〜21K条）：担当大臣が命令で Public Health Threat（第21C条）または Public Health Emergency（第21E条）を宣言。遅滞なく公表・官報掲載・議会提出。撤回または90日で失効、90日以内の単位で延長可。議会は決議で取り消せる。徴用は緊急事態時のみ（第21G条）。"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>The Coastal Protection and Other Amendments Bill, introduced by MSE on 3 February 2026 and passed on 6 March 2026 after a debate of about two hours, brought the first explicit warning clause into this structure. PUB becomes the central regulator of coastal defences: it will gazette absolute protection boundaries (the continuous line of defence) and transiently floodable areas such as beaches and coastal parks, approve coastal works, host a public Coastal Protection Interpretation Plan, and develop flood forecasting and issue early warnings. Landowners, numbering roughly 100 or more, must implement a coastal protection measure by a stipulated date (s 30E, at least five years from the second notification, with at least ten years of advance notice overall), connect to neighbouring measures (s 30G), observe safety-corridor controls (s 30N), appoint a Flood Protection Manager, report damage and submit rectification plans. Capital grants cover risk studies, utility diversion and construction, and the first notices are expected from the early 2030s. The 80-page Coastal Protection and Flood Resilience Code of Practice released by PUB on 17 June 2026 requires measures to remain functional for at least 120 years, with annual compliance declarations and design for up to 2.15 m of sea-level rise by 2150 for leases of 30 years or more (0.7 m for shorter leases).</>
            ) : (
              <>2026年2月3日に MSE が提出し、約2時間の審議を経て3月6日に可決された Coastal Protection and Other Amendments Bill は、この構図に初めて明示的な警報条項を持ち込みました。PUB は沿岸防護の中央規制者となり、防護線となる「絶対防護境界」と、海浜・沿岸公園など一時的な浸水を許容する「一時浸水区域」を官報で指定し、沿岸工事を許可し、公開の Coastal Protection Interpretation Plan を運用するとともに、「洪水予測を開発し早期警報を発する」ことを任務とします。100以上とされる沿岸の土地所有者には、指定期日までの沿岸防護措置の実施（第30E条、第2回通知から5年以上、全体として10年以上の事前通知）、隣地の措置との接続（第30G条）、安全回廊の制限（第30N条）、Flood Protection Manager の任命、損傷報告と是正計画の提出が課されます。リスク調査・インフラ移設・建設には資本補助があり、最初の通知は2030年代初頭に見込まれます。PUB が2026年6月17日に公表した80頁の Coastal Protection and Flood Resilience Code of Practice は、措置が120年以上機能すること、年次の遵守申告、2150年までに最大2.15m（借地期間30年以上。30年未満は0.7m）の海面上昇を想定した設計を求めています。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>Some matters remain unsettled. Commencement of the coastal provisions is reported for 2028, together with the Code of Practice, but the law-firm commentaries give no commencement date. The Civil Defence Shelter and Fire Safety (Miscellaneous Amendments) Bill (Bill No. 15/2026; First Reading 4 August, Second Reading 8 September 2026) concerns regulated shelter products, SCDF recall and testing powers, a higher composition sum (S$500 to S$5,000) and Fire Safety Act enforcement, and contains nothing on sirens or SG Alert; no amendment to the warning provisions of the Civil Defence Act between 2024 and 2026 has been identified. The NEA Act names neither the Meteorological Service Singapore nor warnings, and the prescribed air-quality number that triggers a poor air quality episode under the Transboundary Haze Pollution Act is not stated in the published material. The HCMS, with its Homefront Crisis Ministerial Committee, Homefront Crisis Executive Group and Crisis Management Groups, remains an administrative arrangement without statutory basis.</>
            ) : (
              <>一方で未確定の部分も残ります。沿岸保護条項の施行時期は Code of Practice とあわせて2028年と報じられていますが、法律事務所の解説は施行日を示していません。2026年8月4日に第一読会、9月8日に第二読会が行われた Civil Defence Shelter and Fire Safety (Miscellaneous Amendments) Bill（Bill No. 15/2026）は、シェルター製品の規制、SCDF のリコール・試験権限、和解金上限の引上げ（500ドルから5,000ドル）、Fire Safety Act の執行強化が中心で、サイレンや SG Alert に触れる条項はなく、2024〜2026年に Civil Defence Act の警報関連規定を改める立法は確認されていません。NEA 法は Meteorological Service Singapore の名称も「警報」の語も含まず、Transboundary Haze Pollution Act の発動基準である「大気質指数の所定の数値」も公表資料からは特定できません。HCMS（Homefront Crisis Ministerial Committee、Homefront Crisis Executive Group、Crisis Management Group）は法令上の根拠を持たない行政上の仕組みのままです。</>
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
              <>The actor map is dense but layered by hazard. The hazard owner (MSS for weather, PUB for floods, NEA for haze and dengue, MOH for disease) issues the technical warning; sector ministries such as MOE and MOM convert it into protective directives using pre-published PSI or WBGT thresholds; and only SCDF holds the imperative channels, sirens and cell broadcast, that tell people to act now. As a city-state Singapore has no tier of local government, and the last mile is covered by grassroots organisations under the People&rsquo;s Association.</>
            ) : (
              <>アクターの配置は密ですが、ハザードごとに階層化されています。ハザードの所管機関（気象は MSS、洪水は PUB、ヘイズとデング熱は NEA、感染症は MOH）が技術的な警報を出し、教育省や人材省などの部門官庁があらかじめ公表された PSI や WBGT の閾値に沿ってそれを防護指示に変換し、サイレンとセルブロードキャストという「いま行動せよ」を伝える経路は SCDF だけが握ります。都市国家であるため地方政府の層はなく、最終端の伝達は People&rsquo;s Association 傘下の草の根組織が担います。</>
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
                  <td className={TDH}>{en ? "MSS (Meteorological Service Singapore)" : "MSS（Meteorological Service Singapore、シンガポール気象局）"}</td>
                  <td className={TD}>{en ? "NEA, under MSE" : "NEA（MSE 傘下）"}</td>
                  <td className={TD}>{en ? "NEA Act 2002 s 11(1)(q)-(s), s 12(g)" : "NEA Act 2002 第11条(1)(q)〜(s)、第12条(g)"}</td>
                  <td className={TD}>
                    {en ? "National meteorological and hydrological service: heavy rain warnings (lead time 15-30 min), lightning information, haze information, heat-stress map (WBGT at 30 stations), tropical cyclone information, regional earthquake, tsunami and volcanic eruption information. National Tsunami Warning Centre and 24x7 Tsunami Warning Focal Point. Hosts ASMC and the WMO Regional Office for Asia and the South-West Pacific; convective-scale NWP since 2019." : "国家気象水文機関。大雨警報（リードタイム15〜30分）、雷情報、ヘイズ情報、暑熱ストレス地図（30地点の WBGT）、熱帯低気圧情報、周辺地域の地震・津波・火山噴火情報。National Tsunami Warning Centre と24時間体制の Tsunami Warning Focal Point。ASMC と WMO アジア・南西太平洋地域事務所をホスト。2019年から対流スケールの数値予報を運用。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "PUB (Public Utilities Board), national water agency and National Coastal Protection Agency" : "PUB（Public Utilities Board、公益事業庁）、国家水資源庁兼 National Coastal Protection Agency"}</td>
                  <td className={TD}>MSE</td>
                  <td className={TD}>{en ? "Public Utilities Act 2001 s 6(1); Sewerage and Drainage Act 1999 / SDCPA" : "Public Utilities Act 2001 第6条(1)、Sewerage and Drainage Act 1999／SDCPA"}</td>
                  <td className={TD}>
                    {en ? "Flood monitoring through more than 1,000 water-level sensors and more than 500 CCTVs at a Joint Operations Centre; six radars feeding a 30-minute rainfall forecast; flood alerts via the PUB Flood Alerts Telegram channel, myENV and SMS; Quick Response Teams with 13 GPS-tracked vehicles; about 16,000 flood protection devices issued to households and shops. From the 2026 amendments: coastal flood forecasting and early warning, coastal regulator." : "Joint Operations Centre で1,000基超の水位センサーと500台超の CCTV を監視。6基のレーダーで30分先の降雨予測。PUB Flood Alerts の Telegram、myENV、SMS で洪水警報。GPS 追跡車両13台の Quick Response Team。浸水常襲地の家庭・店舗へ約16,000基の止水装置を配布。2026年改正により沿岸浸水の予測・早期警報と沿岸規制を担う。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "NEA (National Environment Agency)" : "NEA（National Environment Agency、国家環境庁）"}</td>
                  <td className={TD}>MSE</td>
                  <td className={TD}>{en ? "NEA Act 2002; Transboundary Haze Pollution Act 2014 (through the Director-General of Environmental Protection under the Environmental Protection and Management Act 1999)" : "NEA Act 2002、Transboundary Haze Pollution Act 2014（Environmental Protection and Management Act 1999 に基づく Director-General of Environmental Protection を通じて）"}</td>
                  <td className={TD}>
                    {en ? "24-hour PSI forecast and daily haze advisories on haze.gov.sg (commissioned June 2013), nea.gov.sg and myENV; chairs the Haze Task Force (formed September 1994, 28 agencies); dengue cluster alerts; operates the myENV app; issues preventive measures notices under the haze Act." : "24時間 PSI 予測と日次ヘイズ助言を haze.gov.sg（2013年6月開設）、nea.gov.sg、myENV で発信。Haze Task Force（1994年9月設置、28機関）の議長。デング熱クラスター警報。myENV アプリの運営。越境ヘイズ法の予防措置通知。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "SCDF (Singapore Civil Defence Force)" : "SCDF（Singapore Civil Defence Force、シンガポール民間防衛隊）"}</td>
                  <td className={TD}>MHA</td>
                  <td className={TD}>{en ? "Civil Defence Act 1986 ss 4, 102-103, Part 12A; Fire Safety Act 1993; Civil Defence Shelter Act 1997" : "Civil Defence Act 1986 第4・102・103条、第12A部、Fire Safety Act 1993、Civil Defence Shelter Act 1997"}</td>
                  <td className={TD}>
                    {en ? "Public Warning System sirens (Alarm, All Clear, Important Message); SG Alert cell broadcast (with HTX, IMDA and the mobile network operators); SGSecure and myResponder apps; Ready Bag initiative, Civil Defence Emergency Handbook, Responders Plus Programme; public-shelter list on OneMap. Evacuation, exclusion and road-closure powers under s 103." : "Public Warning System のサイレン（Alarm、All Clear、Important Message）、SG Alert のセルブロードキャスト（HTX・IMDA・通信事業者と共同）、SGSecure・myResponder アプリ、Ready Bag、Civil Defence Emergency Handbook、Responders Plus Programme、OneMap 上の公共シェルター一覧。第103条に基づく避難・立入禁止・道路閉鎖の権限。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "HTX (Home Team Science and Technology Agency), IMDA (Infocomm Media Development Authority), mobile network operators" : "HTX（Home Team Science and Technology Agency）、IMDA（Infocomm Media Development Authority）、通信事業者"}</td>
                  <td className={TD}>{en ? "HTX under MHA; IMDA; Singtel, StarHub, M1, SIMBA" : "HTX は MHA 傘下、IMDA、Singtel・StarHub・M1・SIMBA"}</td>
                  <td className={TD}>{en ? "Administrative partnership (SG Alert project from early 2025)" : "行政上の協業（SG Alert 計画は2025年初頭から）"}</td>
                  <td className={TD}>
                    {en ? "HTX engaged Apple and Google on four-language alerts; IMDA and the operators carry the cell broadcast. Singtel network from 10 May 2026, StarHub by end-2026, M1 and SIMBA by mid-2027." : "HTX は Apple・Google と4言語表示を調整。IMDA と事業者がセルブロードキャストを配信。Singtel 網は2026年5月10日から、StarHub は2026年末、M1・SIMBA は2027年中頃。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "MOH (Ministry of Health) and CDA (Communicable Diseases Agency)" : "MOH（Ministry of Health、保健省）、CDA（Communicable Diseases Agency、感染症庁）"}</td>
                  <td className={TD}>{en ? "Cabinet ministry" : "内閣構成省"}</td>
                  <td className={TD}>{en ? "Infectious Diseases Act 1976 Part 3A" : "Infectious Diseases Act 1976 第3A部"}</td>
                  <td className={TD}>
                    {en ? "Declares the four public-health postures; issues health advisories by PSI band on which MOE and others act; Heat Stress Guidelines Expert Panel (NUS, MOM, SAF) behind the heat-stress advisory; CDA launched a Singapore Pandemic Preparedness and Response Framework in 2025." : "4つの公衆衛生態勢の宣言。PSI 帯域ごとの健康助言（MOE などの行動の根拠）。暑熱ストレス助言を支える Heat Stress Guidelines Expert Panel（NUS・MOM・SAF）。CDA は2025年に Singapore Pandemic Preparedness and Response Framework を開始。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Homefront Crisis Management System: HCMC, HCEG and Crisis Management Groups" : "Homefront Crisis Management System：HCMC・HCEG・Crisis Management Group"}</td>
                  <td className={TD}>{en ? "HCMC reports to Cabinet; HCEG chaired by the Permanent Secretary (Home Affairs)" : "HCMC は内閣に報告、HCEG は内務省事務次官が議長"}</td>
                  <td className={TD}>{en ? "Non-statutory (HCEG created 2004 from the Executive Group set up after the 1974 Laju hijacking)" : "法定外（HCEG は1974年の Laju 事件後に設けられた Executive Group を2004年に再編）"}</td>
                  <td className={TD}>
                    {en ? "Whole-of-government coordination in crises; the HCEG comprises senior representatives of all ministries and oversees the CMGs. CMG (Haze) activated in 2013 with 23 agencies; the HCMC was convened in late March 2026, chaired by the Coordinating Minister for National Security and Minister for Home Affairs, for the Middle East energy and supply crisis." : "危機時の政府横断の調整。HCEG は全省の幹部で構成され CMG を統括。2013年に23機関による CMG（Haze）を起動。2026年3月末には中東発のエネルギー・供給危機に対し、国家安全保障調整相兼内務相を議長とする HCMC が招集された。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Haze Task Force (HTF)" : "Haze Task Force（HTF）"}</td>
                  <td className={TD}>{en ? "Chaired by NEA; 28 member agencies" : "NEA が議長、28機関"}</td>
                  <td className={TD}>{en ? "Administrative (formed September 1994)" : "行政上の設置（1994年9月）"}</td>
                  <td className={TD}>
                    {en ? "Pre-agreed sector measures by 24-hour PSI band: workplace risk mitigation and school outdoor-activity limits at Unhealthy; vulnerable persons to avoid outdoor activity and air-conditioned standby rooms at Community Centres at Very Unhealthy; N95 guidance at Hazardous." : "24時間 PSI の帯域ごとに事前合意した部門措置：Unhealthy で職場のリスク低減と学校の屋外活動制限、Very Unhealthy で脆弱者の屋外活動回避とコミュニティセンターの冷房待機室、Hazardous で N95 マスクの着用指針。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Sector agencies: MOE, MOM and the WSH Council, LTA and Traffic Police" : "部門官庁：MOE（教育省）、MOM（人材省）と WSH Council、LTA（陸上交通庁）と交通警察"}</td>
                  <td className={TD}>{en ? "Respective ministries" : "各所管省"}</td>
                  <td className={TD}>{en ? "Administrative thresholds; Fire Safety Act s 37 for emergency response plans" : "行政上の閾値運用、緊急対応計画は Fire Safety Act 第37条"}</td>
                  <td className={TD}>
                    {en ? "MOE will consider closing schools and postponing national examinations if the next-day 24-hour PSI forecast is Hazardous, announcing around 8 pm the day before; MOM urges shorter strenuous outdoor work at Unhealthy, and the WSH Council introduces enhanced heat-stress measures from 1 December 2026; LTA and Traffic Police notify motorists of flooded roads through electronic road signs, online platforms and radio." : "MOE は翌日の24時間 PSI 予測が Hazardous なら休校と国家試験の延期を検討し、前日の午後8時頃に発表。MOM は Unhealthy で屋外重労働の短縮を要請、WSH Council は2026年12月1日から強化された暑熱対策を導入。LTA と交通警察は電子道路標識・オンライン・ラジオで冠水道路を周知。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "People’s Association (PA) and Community Emergency and Engagement Committees (C2E)" : "People’s Association（PA、人民協会）と Community Emergency and Engagement Committee（C2E）"}</td>
                  <td className={TD}>PA</td>
                  <td className={TD}>{en ? "Administrative; one committee per constituency" : "行政上の設置。選挙区ごとに1委員会"}</td>
                  <td className={TD}>
                    {en ? "Community emergency-preparedness plans and exercises in peacetime; in emergencies coordinate community resources and help authorities disseminate critical information; distribute N95 masks to eligible residents when the PSI enters Very Unhealthy." : "平時はコミュニティの緊急事態対応計画と訓練。緊急時は地域資源を調整し、当局の重要情報の伝達を支援。PSI が Very Unhealthy に入ると対象住民に N95 マスクを配布。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Nexus (MINDEF), Total Defence" : "Nexus（MINDEF、国防省）、Total Defence"}</td>
                  <td className={TD}>MINDEF</td>
                  <td className={TD}>{en ? "Total Defence proclaimed 22 January 1984; Digital Defence added 2019" : "Total Defence は1984年1月22日に宣言、2019年に Digital Defence を追加"}</td>
                  <td className={TD}>
                    {en ? "Total Defence Day on 15 February with island-wide PWS sounding; Exercise SG Ready 2026 opened by a siren sounding on 1 February 2026." : "2月15日の Total Defence Day に全島で PWS を鳴動。Exercise SG Ready 2026 は2026年2月1日のサイレン鳴動で開始。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Local FM radio and Mediacorp free-to-air television" : "地元 FM ラジオと Mediacorp の地上波テレビ"}</td>
                  <td className={TD}>{en ? "Broadcasters" : "放送事業者"}</td>
                  <td className={TD}>{en ? "No statutory obligation identified" : "法定義務は確認されず"}</td>
                  <td className={TD}>
                    {en ? "Carry the content behind the Important Message siren signal; named by SCDF as complementary channels to SG Alert." : "Important Message のサイレンに続く内容を放送。SCDF は SG Alert を補完する経路として明記。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "ASMC (ASEAN Specialised Meteorological Centre)" : "ASMC（ASEAN Specialised Meteorological Centre、ASEAN 特別気象センター）"}</td>
                  <td className={TD}>{en ? "Hosted by MSS/NEA" : "MSS／NEA がホスト"}</td>
                  <td className={TD}>{en ? "ASEAN mandate (established 1993; haze monitoring role 1995)" : "ASEAN の委任（1993年設立、1995年にヘイズ監視を担当）"}</td>
                  <td className={TD}>
                    {en ? "Regional haze alert levels 0-3; warnings and advisories to ASEAN Member States and the interim ASEAN Coordinating Centre for Transboundary Haze Pollution Control; capability building under ACaP." : "地域ヘイズ警戒レベル0〜3。ASEAN 加盟国と暫定 ASEAN Coordinating Centre for Transboundary Haze Pollution Control への警報・助言。ACaP による能力構築。"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <><strong className="text-foreground">MSS</strong> became part of NEA in 2002 and is the national meteorological and hydrological service in all but name: the NEA Act gives NEA the functions of providing meteorological services, conducting observations and monitoring seismological activity, and MSS exercises them. Its public products are heavy rain warnings with a typical lead time of 15 to 30 minutes, lightning information, haze information, a heat-stress map of 15-minute WBGT averages from 30 stations, tropical cyclone information and regional earthquake, tsunami and volcanic eruption information; the heat-stress advisory itself is attributed to MOH. A convective-scale numerical weather prediction model has been operational since 2019. In the Indian Ocean tsunami system MSS is the National Tsunami Warning Centre and the 24x7 Tsunami Warning Focal Point, with 90 percent of the coast mapped for tsunami hazard on Manila Trench and Sunda Trench scenarios. MSS also hosts the ASEAN Specialised Meteorological Centre (since 1993) and the Centre for Climate Research Singapore (since 2013).</>
            ) : (
              <><strong className="text-foreground">MSS</strong>は2002年に NEA の一部となり、名称こそ異なるものの国家気象水文機関にあたります。NEA 法が NEA に与える気象業務、観測、地震監視の機能を MSS が行使する形です。公表する情報は、リードタイムが通常15〜30分の大雨警報、雷情報、ヘイズ情報、30観測点の WBGT 15分平均による暑熱ストレス地図、熱帯低気圧情報、周辺地域の地震・津波・火山噴火情報で、暑熱ストレスの助言そのものは MOH の名で出されます。対流スケールの数値予報モデルは2019年から運用されています。インド洋津波警戒システムでは MSS が National Tsunami Warning Centre と24時間体制の Tsunami Warning Focal Point を務め、マニラ海溝・スンダ海溝のシナリオに基づき国土の海岸線の90%について津波ハザードを評価済みです。MSS は ASEAN Specialised Meteorological Centre（1993年以降）と Centre for Climate Research Singapore（2013年以降）もホストしています。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <><strong className="text-foreground">PUB</strong>, reconstituted as the national water agency on 1 April 2001 and appointed National Coastal Protection Agency in April 2020, is the flood-warning authority in practice although no statute says so before the 2026 coastal amendments. Its Joint Operations Centre watches more than 1,000 water-level sensors and more than 500 CCTVs, six radars with a 30 km radius feed a 30-minute rainfall forecast model, and Quick Response Teams with 13 GPS-tracked vehicles aim to reach a flood within 20 minutes. Drainage design standards were raised in 2011, developments of 0.2 ha or more have had to implement source solutions since January 2014, and about 16,000 flood protection devices have been handed to households and shops in flood-prone areas and hotspots. MSE told Parliament in February 2025 that PUB works with NEA to forecast intense rainfall and issue early flood warnings, and that building more drains is impractical in land-scarce Singapore, hence the shift to building-level duties and to system-wide resilience. For the coast, PUB set up a Coastal Protection Expert Panel in 2020, began site-specific studies in 2021, and will be running studies covering more than 80 percent of the coastline by 2026.</>
            ) : (
              <><strong className="text-foreground">PUB</strong>は2001年4月1日に国家水資源庁として再編され、2020年4月に National Coastal Protection Agency に指定されました。2026年の沿岸改正以前には明文の根拠がないにもかかわらず、実務上の洪水警報機関です。Joint Operations Centre は1,000基超の水位センサーと500台超の CCTV を監視し、半径30kmの6基のレーダーが30分先の降雨予測モデルに入力され、GPS 追跡車両13台の Quick Response Team は20分以内の現場到着を目標とします。排水設計基準は2011年に引き上げられ、2014年1月以降は0.2ha以上の開発に発生源対策が義務づけられ、浸水常襲地とホットスポットの家庭・店舗には約16,000基の止水装置が配布されました。MSE は2025年2月の国会答弁で、PUB は NEA と協働して強い降雨を予測し早期の洪水警報を出していること、土地の乏しいシンガポールで排水路を増やし続けることは非現実的であることを述べ、建物単位の義務と system-wide resilience への転換を説明しています。沿岸については2020年に Coastal Protection Expert Panel を設け、2021年に地区別調査を開始し、2026年には海岸線の80%超を対象とする調査が進行中となります。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <><strong className="text-foreground">SCDF</strong>, administered by the Commissioner of Civil Defence under MHA, holds the only legislated public-warning network and the only authority to compel movement. Its functions under s 4 of the Civil Defence Act include instructing and equipping the public, disseminating information and advice, and operating public warning devices; Part 12A, in force since 1 February 2019, obliges building owners to host those devices. SCDF runs the Public Warning System sirens, the SG Alert cell broadcast launched with HTX, IMDA and Singtel, the SGSecure app (launched 24 September 2016 as a national movement against terrorism) and the myResponder app, as well as the Ready Bag initiative and the Civil Defence Emergency Handbook. Shelter policy dates from hardened MRT stations in 1983, void-deck shelters in 1987 and household shelters in new flats from 1994, made mandatory by the 1997 Act. Above SCDF sits the <strong className="text-foreground">Homefront Crisis Management System</strong>: the Homefront Crisis Executive Group, created in 2004 and chaired by the Permanent Secretary for Home Affairs, oversees hazard-specific Crisis Management Groups and reports to the Homefront Crisis Ministerial Committee, which reports to Cabinet. In 2013 the CMG (Haze) drew on 23 agencies; in March 2026 the ministerial committee was convened for an energy and supply crisis rather than a natural hazard. Total Defence, proclaimed on 22 January 1984 and run by Nexus in MINDEF, supplies the annual island-wide siren sounding on 15 February.</>
            ) : (
              <><strong className="text-foreground">SCDF</strong>は MHA のもとで Commissioner of Civil Defence が統率し、法定された唯一の公衆警報網と、人の移動を強制できる唯一の権限を持ちます。Civil Defence Act 第4条の機能には住民への指導と装備、情報と助言の伝達、公衆警報装置の運用が含まれ、2019年2月1日施行の第12A部は建物所有者にそれら装置の設置受け入れを義務づけました。SCDF は Public Warning System のサイレン、HTX・IMDA・Singtel と立ち上げた SG Alert のセルブロードキャスト、SGSecure アプリ（2016年9月24日にテロ対策の国民運動として開始）と myResponder アプリ、Ready Bag と Civil Defence Emergency Handbook を運用します。シェルター政策は1983年の MRT 駅の強化構造、1987年の団地1階のシェルター、1994年以降の新築住宅の家庭用シェルターに始まり、1997年法で義務化されました。SCDF の上位には<strong className="text-foreground">Homefront Crisis Management System</strong>があります。2004年に設けられ内務省事務次官が議長を務める Homefront Crisis Executive Group がハザード別の Crisis Management Group を統括し、Homefront Crisis Ministerial Committee に報告し、同委員会が内閣に報告します。2013年の CMG（Haze）は23機関を動員し、2026年3月には自然災害ではなくエネルギー・供給危機のために閣僚委員会が招集されました。1984年1月22日に宣言され MINDEF の Nexus が担う Total Defence は、毎年2月15日の全島サイレン鳴動を提供しています。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <><strong className="text-foreground">NEA</strong> and the sector ministries form the threshold layer. NEA chairs the Haze Task Force formed in September 1994, now 28 agencies, issues the 24-hour PSI forecast (available only in the haze season) and daily advisories on haze.gov.sg, nea.gov.sg and myENV, and wields the preventive-notice power of the Transboundary Haze Pollution Act, used on 16 October 2026 against seven companies whose concession fires in Indonesia may have sent smoke to Singapore. <strong className="text-foreground">MOE</strong> acts on MOH health advisories and will consider closing schools if the next-day forecast exceeds 300; <strong className="text-foreground">MOM</strong> and the WSH Council govern outdoor work, with enhanced heat-stress measures from 1 December 2026; <strong className="text-foreground">LTA</strong> and the Traffic Police relay flooded-road information to motorists. The Heat Stress Advisory launched on 24 July 2023 by MSE and NEA with the MOH expert panel illustrates the pattern: MSS supplies the measurement, MOH the health thresholds, and employers, schools and sports bodies the action.</>
            ) : (
              <><strong className="text-foreground">NEA</strong>と部門官庁は閾値の層を構成します。NEA は1994年9月に設置され現在28機関から成る Haze Task Force の議長を務め、ヘイズ期のみ提供される24時間 PSI 予測と日次助言を haze.gov.sg、nea.gov.sg、myENV で発信し、Transboundary Haze Pollution Act の予防措置通知の権限を持ちます。この権限は2026年10月16日、インドネシアの事業地の火災がシンガポールへ煙を送った可能性のある7社に対して行使されました。<strong className="text-foreground">MOE</strong>は MOH の健康助言に基づいて行動し、翌日予測が300を超えれば休校を検討します。<strong className="text-foreground">MOM</strong>と WSH Council は屋外労働を規律し、2026年12月1日から強化された暑熱対策を導入します。<strong className="text-foreground">LTA</strong>と交通警察は冠水道路の情報を運転者に中継します。2023年7月24日に MSE と NEA が MOH の専門家パネルとともに開始した Heat Stress Advisory はこの型を示しています。MSS が計測を、MOH が健康上の閾値を、雇用者・学校・スポーツ団体が行動を担うという分業です。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>The last mile belongs to the <strong className="text-foreground">People&rsquo;s Association</strong>. Each constituency has a Community Emergency and Engagement Committee, formed by merging the former Emergency Preparedness Groups and Civil Defence Executive Committees; in peacetime it maintains community emergency plans and exercises, and in an emergency it coordinates grassroots resources and helps the authorities disseminate critical information. PUB held a Flood-Wise Community Workshop with residents networks on 8 November 2025, and PA grassroots organisations distribute N95 masks when the PSI enters the Very Unhealthy range. Formal obligations of the Singapore Red Cross or of broadcasters, and the role of government messaging channels, are not documented in the sources consulted.</>
            ) : (
              <>最終端は<strong className="text-foreground">People&rsquo;s Association</strong>が担います。各選挙区には、かつての Emergency Preparedness Group と Civil Defence Executive Committee を統合した Community Emergency and Engagement Committee があり、平時はコミュニティの緊急計画と訓練を維持し、緊急時には草の根の資源を調整し当局の重要情報の伝達を支援します。PUB は2025年11月8日に住民ネットワークと Flood-Wise Community Workshop を開き、PA の草の根組織は PSI が Very Unhealthy に入ると N95 マスクを配布します。Singapore Red Cross や放送事業者の正式な義務、政府のメッセージ配信チャンネルの役割は、参照した資料では確認できません。</>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 4. Warning chain and levels ── */}
        <section>
          <h2 className={H2}>
            {en ? "4. Warning Chain and Warning Levels" : "4. 警報の流れと警報レベル"}
          </h2>
          <p className={P}>
            {en ? (
              <>Singapore runs several parallel, level-based warning scales rather than one national alert ladder. The chain below takes the most frequent hazard, the convective flash flood, from forecast to household, and notes where civil-defence escalation would enter.</>
            ) : (
              <>シンガポールの警報は、単一の国家警報の階梯ではなく、ハザードごとに並行して走る複数のレベル体系から成ります。以下では最も頻度の高い対流性の鉄砲水を例に、予測から家庭までの流れと、民間防衛上のエスカレーションが入る位置を示します。</>
            )}
          </p>
          <ol className={OL}>
            <li>
              {en ? (
                <><strong className="text-foreground">Forecast.</strong> MSS issues a heavy rain warning, typically 15 to 30 minutes ahead, on weather.gov.sg, as a myENV push alert and by SMS to subscribers registered through PUB. In parallel, six PUB radars feed a 30-minute rainfall forecast model.</>
              ) : (
                <><strong className="text-foreground">予測。</strong>MSS が通常15〜30分前に大雨警報を weather.gov.sg、myENV のプッシュ通知、PUB 経由で登録した SMS で発します。並行して PUB の6基のレーダーが30分先の降雨予測モデルに入力されます。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Monitoring and flood alert.</strong> The PUB Joint Operations Centre watches more than 1,000 water-level sensors and more than 500 CCTVs and pushes advance alerts and updates on heavy rain and flood-prone areas through the PUB Flood Alerts Telegram channel, myENV and SMS; SMS alerts are reported to be tiered by canal level. On 4 December 2025 PUB issued flash-flood risk warnings on social media before and during the event.</>
              ) : (
                <><strong className="text-foreground">監視と洪水警報。</strong>PUB の Joint Operations Centre が1,000基超の水位センサーと500台超の CCTV を監視し、大雨と浸水常襲地に関する事前警報と更新を PUB Flood Alerts の Telegram、myENV、SMS で配信します。SMS は排水路の水位段階に応じて発信されると報じられています。2025年12月4日には、PUB が発生前と発生中にソーシャルメディアで鉄砲水リスク警報を出しました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Road users.</strong> PUB works with LTA and the Traffic Police to notify motorists of flooded roads through electronic road signs, online and social media platforms and radio broadcasts; partnerships with CDG Zig and Motorist were announced in November 2024, and Grab was to push flood alerts to drivers and riders by 2025.</>
              ) : (
                <><strong className="text-foreground">道路利用者。</strong>PUB は LTA・交通警察と協力し、電子道路標識、オンラインとソーシャルメディア、ラジオ放送で冠水道路を周知します。2024年11月に CDG Zig・Motorist との連携が発表され、Grab は2025年までに運転者・ライダーへ洪水警報を配信するとされました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">On-site response and household action.</strong> Quick Response Teams aim to be on scene within 20 minutes; households and shops in flood-prone areas deploy the flood protection devices issued by PUB; the public follows the F.L.A.S.H. advice of the November 2024 campaign (follow PUB flood alerts, learn to be flood ready, avoid flooded areas, share updates, help others).</>
              ) : (
                <><strong className="text-foreground">現場対応と家庭の行動。</strong>Quick Response Team は20分以内の現場到着を目標とし、浸水常襲地の家庭・店舗は PUB から配布された止水装置を展開し、住民は2024年11月のキャンペーンの F.L.A.S.H.（PUB の洪水警報に従う、洪水への備えを学ぶ、冠水区域を避ける、情報を共有する、他者を助ける）に沿って行動します。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Civil-defence escalation.</strong> Where an event becomes a civil defence emergency, SCDF can target an SG Alert cell broadcast to the affected zone or sound the Important Message siren signal, which directs people to local FM radio or Mediacorp television; the Commissioner, an SCDF member or a police officer may direct evacuation and close roads under s 103 of the Civil Defence Act, and the Minister may declare a state of civil defence emergency for the district under s 102 with immediate public notice.</>
              ) : (
                <><strong className="text-foreground">民間防衛上のエスカレーション。</strong>事象が民間防衛上の緊急事態に至れば、SCDF は影響区域に限定した SG Alert のセルブロードキャストや、FM ラジオ・Mediacorp のテレビに合わせるよう促す Important Message のサイレンを使えます。Commissioner・SCDF 隊員・警察官は Civil Defence Act 第103条に基づき避難指示と道路閉鎖を行え、大臣は第102条により当該地区に民間防衛緊急事態を宣言し、直ちに公示します。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Stand-down.</strong> Each scale has its own release: the All Clear siren signal for civil defence, an All Clear issued by the National Tsunami Warning Centre for tsunami, ASMC Level 0 for regional haze, and PUB updates as flash floods subside, typically within an hour.</>
              ) : (
                <><strong className="text-foreground">解除。</strong>解除も体系ごとに異なります。民間防衛は All Clear のサイレン、津波は National Tsunami Warning Centre の All Clear、地域ヘイズは ASMC のレベル0、鉄砲水は通常1時間以内の水位低下にあわせた PUB の更新です。</>
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
                  <td className={TDH}>{en ? "Civil defence emergency (Public Warning System)" : "民間防衛上の緊急事態（Public Warning System）"}</td>
                  <td className={TD}>SCDF</td>
                  <td className={TD}>
                    {en ? "Three signals: Alarm (air raid or shelling imminent, move to shelter), All Clear (threat over), Important Message (tune in to local FM radio or TV). The Important Message signal is sounded island-wide on 15 February and 15 September at 6:20 pm for about a minute; in 2026 it was sounded on 1 February at 3 pm to open Exercise SG Ready." : "3種の信号：Alarm（空襲・砲撃が差し迫る、シェルターへ）、All Clear（脅威の終了）、Important Message（地元 FM ラジオまたはテレビに合わせる）。Important Message は毎年2月15日と9月15日の午後6時20分に約1分間、全島で鳴動。2026年は Exercise SG Ready の開始にあわせ2月1日午後3時に鳴動。"}
                  </td>
                  <td className={TD}>
                    {en ? "A siren network reported by the Government at more than 2,000 units on rooftops and open ground; content on local FM radio and Mediacorp free-to-air TV; the SGSecure app sounds for 20 seconds with a text if notifications are enabled." : "政府資料で2,000基超とされる屋上・地上のサイレン網。内容は地元 FM ラジオと Mediacorp の地上波テレビで放送。SGSecure アプリは通知が有効なら20秒間鳴動しテキストを表示。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Major fires, chemical or terror incidents (SG Alert)" : "大規模火災・化学物質・テロ事案（SG Alert）"}</td>
                  <td className={TD}>{en ? "SCDF, with HTX, IMDA and the mobile network operators" : "SCDF（HTX・IMDA・通信事業者と共同）"}</td>
                  <td className={TD}>
                    {en ? "Single tier: activated only for emergencies that require the public to take immediate protective action; island-wide or zone-targeted; message carries a brief incident description, locations, protective actions and official sources." : "単一区分。住民が直ちに防護行動をとる必要がある緊急事態に限って発信。全島または区域限定。内容は事案の概要、場所、防護行動、公式情報源。"}
                  </td>
                  <td className={TD}>
                    {en ? "Cell broadcast pop-up with a unique tone and up to 10 seconds of vibration overriding silent mode, in English plus Mandarin, Malay or Tamil per device language, no opt-out, no personal data; iOS 26.4 or Android 12 and later. Singtel network (including GOMO, VIVIFI, Zero1 and ZYM) from the first island-wide test at noon on 10 May 2026; StarHub by end-2026; M1 and SIMBA by mid-2027." : "固有の警告音と最長10秒の振動（マナーモードを上書き）を伴うセルブロードキャストのポップアップ。端末言語に応じ英語に加えて中国語・マレー語・タミル語。受信拒否不可、個人情報は不使用。iOS 26.4／Android 12 以降。2026年5月10日正午の初の全島テスト以降 Singtel 網（GOMO・VIVIFI・Zero1・ZYM を含む）で運用、StarHub は2026年末、M1・SIMBA は2027年中頃。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Heavy rain and flash floods" : "大雨・鉄砲水"}</td>
                  <td className={TD}>{en ? "MSS (heavy rain warning); PUB (flood alerts)" : "MSS（大雨警報）、PUB（洪水警報）"}</td>
                  <td className={TD}>
                    {en ? "Heavy rain warning with 15-30 minutes of lead time; PUB advance alerts and updates on heavy rain and flood-prone areas, and flash-flood risk warnings; a published List of Flood Prone Areas (36 locations as of November 2025) and a separate hotspot list (February 2026). A flash flood is defined as a small, localised flood lasting typically no more than an hour." : "リードタイム15〜30分の大雨警報。PUB の大雨・浸水常襲地に関する事前警報と更新、鉄砲水リスク警報。公表されている浸水常襲地一覧（2025年11月時点で36か所）と別途のホットスポット一覧（2026年2月）。鉄砲水は「通常1時間以内に収まる小規模で局地的な浸水」と定義。"}
                  </td>
                  <td className={TD}>
                    {en ? "weather.gov.sg, myENV push alerts, SMS subscription, PUB Flood Alerts Telegram channel, social media, electronic road signs, radio." : "weather.gov.sg、myENV のプッシュ通知、SMS 登録、PUB Flood Alerts の Telegram、ソーシャルメディア、電子道路標識、ラジオ。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Transboundary haze" : "越境ヘイズ"}</td>
                  <td className={TD}>{en ? "NEA (national PSI); ASMC (regional alert level)" : "NEA（国内の PSI）、ASMC（地域警戒レベル）"}</td>
                  <td className={TD}>
                    {en ? "24-hour PSI bands with pre-agreed sector actions: Unhealthy 101-200, Very Unhealthy 201-300, Hazardous above 300; the 24-hour forecast is for next-day planning and the 1-hour PM2.5 reading for immediate activity decisions. ASMC regional levels 0 (no haze, stand down), 1 (dry season), 2 (risk of transboundary haze) and 3 (high hotspot counts on two consecutive days with dense plumes, persisting dry weather and winds towards neighbouring countries)." : "部門措置と結び付いた24時間 PSI の帯域：Unhealthy 101〜200、Very Unhealthy 201〜300、Hazardous 300超。24時間予測は翌日の計画用、1時間 PM2.5 は即時の活動判断用。ASMC の地域レベルは0（ヘイズなし、解除）、1（乾季）、2（越境ヘイズのリスク）、3（2日連続の多数のホットスポットと濃い煙、乾燥の持続、隣国へ向かう風）。"}
                  </td>
                  <td className={TD}>
                    {en ? "haze.gov.sg, nea.gov.sg, myENV, daily advisories; ASMC alert banner on asmc.asean.org and advisories to ASEAN Member States." : "haze.gov.sg、nea.gov.sg、myENV、日次助言。ASMC は asmc.asean.org の警戒表示と ASEAN 加盟国への助言。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Heat stress" : "暑熱ストレス"}</td>
                  <td className={TD}>{en ? "MSS/NEA measurement; advisory attributed to MOH" : "計測は MSS／NEA、助言は MOH の名義"}</td>
                  <td className={TD}>
                    {en ? "Three WBGT bands, reported as Low below 31 °C, Moderate from 31 to below 33 °C and High at 33 °C and above; 15-minute updates from 30 stations; high risk is typical between 11 am and 3 pm." : "WBGT の3区分。低は31℃未満、中は31℃以上33℃未満、高は33℃以上と報じられる。30観測点の15分更新。高リスクは通常午前11時〜午後3時。"}
                  </td>
                  <td className={TD}>
                    {en ? "myENV (nearest sensor), weather.gov.sg heat-stress map." : "myENV（最寄りセンサー）、weather.gov.sg の暑熱ストレス地図。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Tsunami" : "津波"}</td>
                  <td className={TD}>{en ? "MSS as National Tsunami Warning Centre" : "MSS（National Tsunami Warning Centre）"}</td>
                  <td className={TD}>
                    {en ? "Warning if tsunami waves from an undersea earthquake of magnitude 8.5 or greater are expected to affect Singapore; alerts targeted 10-12 hours before arrival; All Clear issued by the NTWC. The Common Alerting Protocol is not used (2024 national report)." : "マグニチュード8.5以上の海底地震による津波がシンガポールに影響すると予想される場合に警報。到達の10〜12時間前の発信を目標。All Clear は NTWC が発出。Common Alerting Protocol は未使用（2024年国別報告）。"}
                  </td>
                  <td className={TD}>
                    {en ? "Email, SMS, webpage, radio, social media, sirens, TV, police and military channels, public alert system." : "電子メール、SMS、ウェブ、ラジオ、ソーシャルメディア、サイレン、テレビ、警察・軍の経路、公衆警報システム。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Dengue clusters" : "デング熱クラスター"}</td>
                  <td className={TD}>NEA</td>
                  <td className={TD}>
                    {en ? "Red: high-risk area with 10 or more cases; Yellow: fewer than 10 cases; Green: no new cases, under 21-day surveillance. A cluster is two or more cases with onset within 14 days located within 150 m." : "赤：10件以上の高リスク地域、黄：10件未満、緑：新規症例なし（21日間の監視下）。クラスターは150m以内で14日以内に発症した2件以上。"}
                  </td>
                  <td className={TD}>{en ? "NEA website, myENV cluster maps." : "NEA ウェブサイト、myENV のクラスター地図。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Infectious disease" : "感染症"}</td>
                  <td className={TD}>{en ? "Appropriate Minister (MOH)" : "担当大臣（MOH）"}</td>
                  <td className={TD}>
                    {en ? "Four postures: Baseline, Outbreak Management, Public Health Threat, Public Health Emergency; declared by order for up to 90 days, renewable." : "4態勢：Baseline、Outbreak Management、Public Health Threat、Public Health Emergency。命令により最長90日、延長可。"}
                  </td>
                  <td className={TD}>{en ? "Published order, Gazette, presentation to Parliament, official announcements." : "命令の公表、官報、議会提出、公式発表。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Regional earthquakes and volcanic eruptions" : "周辺地域の地震・火山噴火"}</td>
                  <td className={TD}>MSS</td>
                  <td className={TD}>{en ? "Information products rather than graded warnings." : "段階付き警報ではなく情報提供。"}</td>
                  <td className={TD}>{en ? "weather.gov.sg, myENV earthquake alerts." : "weather.gov.sg、myENV の地震通知。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>Dissemination is app- and channel-heavy. Since March 2021 all real-time flood information has been consolidated on myENV, which also carries heavy-rain push alerts, earthquake notices, drain water levels, lightning, PSI and PM2.5, dengue cluster maps and a feedback function to NEA, PUB and SFA; the PUB Flood Alerts Telegram channel gained more than 10,000 subscribers in its first five days; SGSecure and myResponder serve SCDF; SMS, FM radio, Mediacorp television and electronic road signs complete the set. SG Alert, live since May 2026, closes the long-standing gap of a fast, geo-targeted, authority-to-public channel that needs no app and allows no opt-out, but in November 2026 it reaches only the Singtel network, with StarHub due by end-2026 and M1 and SIMBA by mid-2027. Connection to international standards is limited: the 2024 national report to the Indian Ocean tsunami system states that the Common Alerting Protocol is not used, and whether SG Alert messages are CAP-formatted is not published. No official Singapore document consulted uses the terms impact-based forecasting or multi-hazard early warning system, the closest practice being the 30-minute radar nowcast and sensor-triggered alerts of PUB, and a specific Singapore contribution to the Early Warnings for All initiative is not documented. The strength of the system lies instead in threshold-governed automation: school outdoor-activity limits, shorter outdoor work, mask distribution and air-conditioned standby rooms are tied to published PSI and WBGT numbers, so most of the chain executes once NEA or MSS publishes a reading, while discretionary, authority-bearing alerts are reserved for SCDF.</>
            ) : (
              <>伝達経路はアプリと個別チャンネルに重心があります。2021年3月以降、洪水のリアルタイム情報は myENV に集約され、同アプリは大雨のプッシュ通知、地震の通知、排水路の水位、雷、PSI と PM2.5、デング熱クラスター地図、NEA・PUB・SFA への通報機能も備えます。PUB Flood Alerts の Telegram は開設5日で1万人超の登録を得、SGSecure と myResponder は SCDF の経路、SMS・FM ラジオ・Mediacorp のテレビ・電子道路標識がこれを補います。2026年5月に運用を始めた SG Alert は、アプリを要さず受信拒否もできない「当局から住民へ即時・地理限定で届く」経路という長年の欠落を埋めましたが、2026年11月時点で対象は Singtel 網に限られ、StarHub は2026年末、M1 と SIMBA は2027年中頃の予定です。国際標準との接続は限定的です。インド洋津波警戒システムへの2024年国別報告は Common Alerting Protocol を「使用していない」と明記し、SG Alert のメッセージが CAP 形式かどうかは公表されていません。参照したシンガポールの公的文書に影響予測型予報（impact-based forecasting）やマルチハザード早期警報システムの語はなく、最も近い実務は PUB の30分レーダーナウキャストとセンサー連動の警報で、Early Warnings for All への具体的な貢献も資料上は確認できません。この制度の強みはむしろ閾値による自動化にあります。学校の屋外活動制限、屋外作業の短縮、マスクの配布、冷房待機室の開放は公表済みの PSI・WBGT の数値に結び付けられており、NEA や MSS が数値を公表した時点で連鎖の大半が動き出し、裁量を伴う権限的な警報は SCDF に留保されています。</>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 5. Recent reforms ── */}
        <section>
          <h2 className={H2}>
            {en ? "5. Institutional Reforms since 2020" : "5. 近年の制度改革（2020〜2026年）"}
          </h2>
          <ul className={UL}>
            <li>
              {en ? (
                <><strong className="text-foreground">November 2018 to February 2019 (antecedent) —</strong> The Civil Defence and Other Matters (Amendment) Act 2018, passed on 20 November 2018, inserted Part 12A on the Public Warning System into the Civil Defence Act, in force from 1 February 2019. It obliges building owners to provide space, facilities and access for warning devices at their own expense, answering the parliamentary finding that some private owners had refused sirens citing noise or the absence of a legal duty, and it allows new device types such as in-building emergency alert equipment to be prescribed by regulation.</>
              ) : (
                <><strong className="text-foreground">2018年11月〜2019年2月（前史）—</strong> 2018年11月20日に可決された Civil Defence and Other Matters (Amendment) Act 2018 により Civil Defence Act に第12A部 Public Warning System が追加され、2019年2月1日に施行されました。建物所有者に警報装置のための場所・設備・立入りを自己負担で提供する義務を課し、「騒音を理由に、あるいは法的義務がないとして設置を拒む民間所有者がいる」という国会での説明に応えたもので、建物内の緊急警報設備など新たな装置を規則で指定することも可能にしました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">April 2020 —</strong> PUB was appointed National Coastal Protection Agency and set up a Coastal Protection Expert Panel with members from Singapore, Japan, the Netherlands, the United States and the United Kingdom. The Public Utilities Act now tasks PUB with managing the Coastal and Flood Protection Fund, placing coastal flooding and inland flooding under one agency.</>
              ) : (
                <><strong className="text-foreground">2020年4月 —</strong> PUB が National Coastal Protection Agency に指定され、シンガポール・日本・オランダ・米国・英国の専門家から成る Coastal Protection Expert Panel を設置しました。Public Utilities Act は PUB に Coastal and Flood Protection Fund の管理を委ね、沿岸浸水と内水氾濫を一つの機関に束ねました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">March 2021 —</strong> All real-time flood information was consolidated on the NEA myENV app, and the PUB Flood Alerts Telegram channel followed, gaining more than 10,000 subscribers in five days. Site-specific coastal studies began the same year.</>
              ) : (
                <><strong className="text-foreground">2021年3月 —</strong> 洪水のリアルタイム情報が NEA の myENV アプリに集約され、続いて PUB Flood Alerts の Telegram チャンネルが開設5日で1万人超の登録を集めました。同年、沿岸の地区別調査も始まりました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">March 2023 to April 2024 —</strong> On 21 March 2023 the Health Minister announced that the colour-coded DORSCON would give way to four descriptive tiers, because the old Act recognised only peacetime and emergency and describing an outbreak, threat or emergency is more intuitive than colours. The Infectious Diseases (Amendment) Bill passed on 7 March 2024 and came into force on 9 April 2024, creating the Baseline, Outbreak Management, Public Health Threat and Public Health Emergency postures and moving Part 7 of the COVID-19 (Temporary Measures) Act 2020 into permanent law.</>
              ) : (
                <><strong className="text-foreground">2023年3月〜2024年4月 —</strong> 2023年3月21日、保健相は色分け式の DORSCON を4段階の記述的区分に置き換えると表明しました。旧法が平時と緊急事態の2状態しか認めず、「色よりも流行・脅威・緊急事態と記述する方が住民に直感的」であるためです。Infectious Diseases (Amendment) Bill は2024年3月7日に可決、4月9日に施行され、Baseline・Outbreak Management・Public Health Threat・Public Health Emergency の4態勢を創設し、COVID-19 (Temporary Measures) Act 2020 第7部の権限を恒久法に移しました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">24 July 2023 —</strong> MSE and NEA launched the national Heat Stress Advisory with the MOH Heat Stress Guidelines Expert Panel; nine WBGT sensors, mostly at sports complexes, were to be expanded over two years, and the MSS map now shows 30 stations.</>
              ) : (
                <><strong className="text-foreground">2023年7月24日 —</strong> MSE と NEA が MOH の Heat Stress Guidelines Expert Panel とともに全国の Heat Stress Advisory を開始しました。当初9基の WBGT センサー（多くはスポーツ施設）は2年で拡張され、MSS の地図は現在30観測点を表示しています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">September to November 2023 —</strong> A S$125 million Coastal Protection and Flood Management Research Programme was announced on 7 September 2023, and the Long Island reclamation with a new reservoir, two barrages and pumping stations on 28 November 2023; the Third National Climate Change Study projects sea-level rise of up to 1.15 m by 2100 and 2 m by 2150.</>
              ) : (
                <><strong className="text-foreground">2023年9月〜11月 —</strong> 2023年9月7日に1億2,500万シンガポールドルの Coastal Protection and Flood Management Research Programme が、11月28日に新たな貯水池・2つの堰・ポンプ場を伴う Long Island 埋立構想が発表されました。第3次国家気候変動研究は2100年までに最大1.15m、2150年までに2mの海面上昇を見込んでいます。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">November 2024 to March 2025 —</strong> Amendments to the Sewerage and Drainage Act (Act 42 of 2022 in force 1 November 2024; Act 38 of 2024 in force 1 March 2025) introduced building-level flood protection duties under s 22B. MSE described this to Parliament on 4 February 2025 as a shift to system-wide resilience, since building more drains is impractical in land-scarce Singapore; drainage spending has nevertheless reached about S$2.5 billion since 2011, with about S$150 million in FY2025 for 19 ongoing and 6 new works.</>
              ) : (
                <><strong className="text-foreground">2024年11月〜2025年3月 —</strong> Sewerage and Drainage Act の改正法（Act 42 of 2022 は2024年11月1日、Act 38 of 2024 は2025年3月1日施行）により、第22B条に建物単位の洪水防護義務が導入されました。MSE は2025年2月4日の国会で、土地の乏しいシンガポールでは排水路を増やし続けることは非現実的であるとして system-wide resilience への転換と説明しています。それでも排水事業費は2011年以降で約25億シンガポールドルに達し、2025年度は進行中19件と新規6件に約1億5,000万ドルが充てられています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">20 November 2024 —</strong> PUB launched its first flood-resilience campaign, Get Flood-Wise in a F.L.A.S.H., with partnerships with CDG Zig and Motorist and a plan for Grab to push flood alerts to drivers and riders by 2025. A Flood-Wise Community Workshop with residents networks followed on 8 November 2025.</>
              ) : (
                <><strong className="text-foreground">2024年11月20日 —</strong> PUB が初の洪水レジリエンス啓発キャンペーン Get Flood-Wise in a F.L.A.S.H. を開始し、CDG Zig・Motorist との連携と、Grab による運転者・ライダーへの洪水警報配信（2025年まで）を打ち出しました。2025年11月8日には住民ネットワークとの Flood-Wise Community Workshop が続きました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">June 2025 —</strong> PUB announced a Risk Assessment Study covering eight offshore islands, extending coastal planning beyond the main island.</>
              ) : (
                <><strong className="text-foreground">2025年6月 —</strong> PUB が8つの離島を対象とするリスク評価調査を発表し、沿岸計画を本島の外へ広げました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">20 August 2025 —</strong> At the ASEAN Strategic Policy Dialogue on Disaster Management in Singapore, the Minister for Law and Second Minister for Home Affairs announced that SCDF was working with telecommunications operators on a Cell Broadcast System to be rolled out progressively by early 2026, complementing the sirens, myResponder and SGSecure. The HTX project had begun in early 2025.</>
              ) : (
                <><strong className="text-foreground">2025年8月20日 —</strong> シンガポールで開かれた ASEAN Strategic Policy Dialogue on Disaster Management で、法務相兼内務第二相が、SCDF と通信事業者による Cell Broadcast System を2026年初頭までに段階導入し、サイレン・myResponder・SGSecure を補完すると発表しました。HTX の開発は2025年初頭に始まっていました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">3 February to 6 March 2026 —</strong> MSE introduced the Coastal Protection and Other Amendments Bill, passed after a debate of about two hours in which eight members spoke. It renames the Sewerage and Drainage Act the Sewerage, Drainage and Coastal Protection Act 1999, makes PUB the central regulator of coastal defences and, for the first time in Singapore law, explicitly tasks an agency with developing flood forecasting and issuing early warnings. Members raised the liquidation risk of obligated landowners, coordination gaps and whether the Government should build the whole line and recover costs.</>
              ) : (
                <><strong className="text-foreground">2026年2月3日〜3月6日 —</strong> MSE が Coastal Protection and Other Amendments Bill を提出し、8人の議員が登壇した約2時間の審議を経て可決されました。Sewerage and Drainage Act を Sewerage, Drainage and Coastal Protection Act 1999 に改称し、PUB を沿岸防護の中央規制者とし、シンガポールの法律で初めて「洪水予測の開発と早期警報の発出」を機関に明示的に委ねました。審議では義務を負う土地所有者の破綻リスク、調整の空白、政府が防護線全体を建設して費用を回収すべきではないかといった論点が出されました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">March to April 2026 —</strong> The Prime Minister convened the Homefront Crisis Ministerial Committee for the Middle East energy and supply crisis, chaired by the Coordinating Minister for National Security and Minister for Home Affairs with the Deputy Prime Minister as adviser; the Homefront Crisis Executive Group of Permanent Secretaries and agency heads reports to it, and it reports to Cabinet. The episode showed the same architecture applied to a non-natural homefront crisis.</>
              ) : (
                <><strong className="text-foreground">2026年3月〜4月 —</strong> 首相が中東発のエネルギー・供給危機に対して Homefront Crisis Ministerial Committee を招集し、国家安全保障調整相兼内務相が議長、副首相が助言者となりました。事務次官と機関長から成る Homefront Crisis Executive Group が同委員会に、同委員会が内閣に報告する系統で、同じ仕組みが自然災害以外の国内危機にも適用されることが示されました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">10 May 2026 —</strong> First island-wide test of SG Alert at noon on the Singtel network. The system is run by SCDF with HTX, IMDA and the operators, is activated only for emergencies requiring immediate protective action, and complements the sirens, free-to-air television and radio, social media and SGSecure.</>
              ) : (
                <><strong className="text-foreground">2026年5月10日 —</strong> Singtel 網で正午に SG Alert の初の全島テストが行われました。SCDF が HTX・IMDA・事業者と運用し、住民が直ちに防護行動をとる必要がある緊急事態に限って発信され、サイレン、地上波テレビとラジオ、ソーシャルメディア、SGSecure を補完します。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">17 June 2026 —</strong> PUB released the 80-page Coastal Protection and Flood Resilience Code of Practice, with rules taking effect from 2028, a requirement that measures remain functional for at least 120 years with annual compliance declarations, design for up to 2.15 m of sea-level rise by 2150, engagement sessions in the second half of 2026 and an online height-calculation tool; the coastal provisions of the Act are reported to commence in 2028 as well.</>
              ) : (
                <><strong className="text-foreground">2026年6月17日 —</strong> PUB が80頁の Coastal Protection and Flood Resilience Code of Practice を公表しました。規則は2028年から適用され、措置が120年以上機能することと年次の遵守申告、2150年までの最大2.15mの海面上昇を想定した設計を求め、2026年後半の説明会とオンラインの高さ計算ツールを伴います。法律の沿岸保護条項も2028年に施行されると報じられています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">8 September 2026 —</strong> Second Reading of the Civil Defence Shelter and Fire Safety (Miscellaneous Amendments) Bill (Bill No. 15/2026), which adds a Part 2A on regulated shelter products to the Shelter Act, gives SCDF recall and testing powers, raises the composition sum from S$500 to S$5,000, introduces class licensing and Supplementary Enforcement Officers under the Fire Safety Act, and repeals the Chemical Weapons (Prohibition) (Amendment) Act 2019. It does not touch warnings.</>
              ) : (
                <><strong className="text-foreground">2026年9月8日 —</strong> Civil Defence Shelter and Fire Safety (Miscellaneous Amendments) Bill（Bill No. 15/2026）の第二読会。Shelter Act にシェルター製品を規制する第2A部を追加し、SCDF にリコール・試験権限を与え、和解金上限を500ドルから5,000ドルに引き上げ、Fire Safety Act に類型免許と Supplementary Enforcement Officer を導入し、Chemical Weapons (Prohibition) (Amendment) Act 2019 を廃止するもので、警報には触れていません。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">1 December 2026 (scheduled) —</strong> Enhanced Heat Stress Measures for workplaces take effect under the WSH Council, with a Heat Stress Management Compliance Checklist issued in September 2026.</>
              ) : (
                <><strong className="text-foreground">2026年12月1日（予定）—</strong> WSH Council のもとで職場向けの Enhanced Heat Stress Measures が適用開始となります。2026年9月には Heat Stress Management Compliance Checklist が公表されました。</>
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
                <><strong className="text-foreground">Warning mandates that the law does not name (structural).</strong> The NEA Act gives NEA meteorological and seismological functions but names neither MSS nor warnings; the Public Utilities Act gives PUB drainage and flood-prevention functions but no alerting duty; only the 2026 coastal amendments say in terms that PUB shall develop flood forecasting and issue early warnings, and only the Civil Defence Act legislates a warning device network. The system works because the agencies act, not because the statutes require them to, and no instrument defines a national alert, its issuing authority or its standard.</>
              ) : (
                <><strong className="text-foreground">法律が名指ししない警報権限（構造）。</strong>NEA 法は NEA に気象・地震の機能を与えますが MSS も警報も規定せず、Public Utilities Act は PUB に排水・洪水防止の機能を与えますが警報の義務はありません。PUB が「洪水予測を開発し早期警報を発する」と明記するのは2026年の沿岸改正だけで、警報装置の網を法定するのは Civil Defence Act だけです。制度は法律が命じるからではなく機関が行動するから機能しており、国家警報とは何か、誰がどの基準で出すかを定める文書はありません。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Coordination without statute (structural).</strong> The Homefront Crisis Management System, the 28-agency Haze Task Force and the Crisis Management Groups are administrative constructs; the CMG (Haze) in 2013 drew on 23 agencies. Their triggers are not all aligned with the current law: an undated government knowledge-hub page still describes DORSCON Yellow as the activation point for the CMG (Health), although the 2024 amendment created four descriptive postures intended to replace DORSCON and the Communicable Diseases Agency page of August 2025 no longer mentions it.</>
              ) : (
                <><strong className="text-foreground">法令に基づかない調整（構造）。</strong>Homefront Crisis Management System、28機関の Haze Task Force、Crisis Management Group はいずれも行政上の仕組みで、2013年の CMG（Haze）は23機関を動員しました。その起動条件は現行法と完全には整合していません。政府のナレッジハブの日付のない頁は DORSCON Yellow を CMG（Health）の起動点として今も記述していますが、2024年改正は DORSCON を置き換えることを意図した4つの記述的態勢を創設し、2025年8月更新の Communicable Diseases Agency の頁は DORSCON に触れていません。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Coastal obligations shifted to landowners (structural, funding).</strong> The 2026 Act and the Code of Practice place the duty to build, maintain and, where barriers are deployable, operate coastal defences on roughly 100 or more landowners, with first notices from the early 2030s, at least ten years of advance notice, 120-year functionality and design to 2.15 m of sea-level rise. In the March 2026 debate members questioned what happens if an obligated owner goes into liquidation, how neighbouring measures will be coordinated, and whether the Government should instead build the whole line and recover the cost; capital grants cover studies, utility diversion and construction, but the scale of public funding was not confirmed in the sources consulted.</>
              ) : (
                <><strong className="text-foreground">土地所有者へ移された沿岸防護の責任（構造・資金）。</strong>2026年法と Code of Practice は、沿岸防護施設の建設・維持と、可搬式の場合はその展開の義務を100以上とされる土地所有者に課し、最初の通知は2030年代初頭、10年以上の事前通知、120年の機能維持、2.15mの海面上昇を想定した設計を求めます。2026年3月の審議では、義務を負う所有者が破綻した場合の扱い、隣接する措置の調整、政府が防護線全体を建設して費用を回収する方が良いのではないかが問われました。資本補助は調査・インフラ移設・建設を対象としますが、公的資金の規模は参照した資料では確認できません。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Lead time bounded by physics (operational).</strong> Heavy rain warnings give 15 to 30 minutes and the PUB radar nowcast 30 minutes. On 13 April 2025, 114 mm fell on the north between 12:55 and 14:45, about 47 percent of the April mean, PUB warned for 13 locations, and Yishun Avenue 7, Punggol Way and sections of the KPE and TPE flooded before subsiding within an hour; on 4 December 2025, 113.4 mm fell on the west in about 1 h 40 min and Pandan Road, Pesawat Drive and Boon Lay flooded despite warnings before and during. By contrast the January 2025 monsoon surge, 255.2 mm at Changi over 10-11 January against a January mean of 222.4 mm, produced a single incident at Jalan Seaview, about 0.3 m for close to three hours at high tide. PUB states that it is not possible to cater for all extreme storm events and prevent floods entirely; the policy is to accept a residual flood-prone area of under 25 ha and invest in rapid response rather than in longer warnings.</>
              ) : (
                <><strong className="text-foreground">物理に縛られるリードタイム（運用）。</strong>大雨警報は15〜30分、PUB のレーダーナウキャストは30分先までです。2025年4月13日には12時55分から14時45分に北部で114mm（4月平均の約47%）が降り、PUB は13地点に警報を出しましたが、Yishun Avenue 7、Punggol Way、KPE・TPE の一部が浸水し、1時間以内に引きました。同年12月4日には西部で約1時間40分に113.4mmが降り、発生前と発生中の警報にもかかわらず Pandan Road、Pesawat Drive、Boon Lay が浸水しました。対照的に、2025年1月10〜11日のモンスーンサージ（Changi で255.2mm、1月平均222.4mm）では、満潮時の Jalan Seaview で約0.3mが3時間近く続いた1件にとどまりました。PUB は「すべての極端な降雨に対応し浸水を完全に防ぐことは不可能」と明言し、25ha未満の残余浸水域を受け入れ、より長い警報ではなく迅速な対応に投資する方針を採っています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Haze depends on fire control abroad (operational, external).</strong> ASMC declared its highest regional alert, Level 3, three times in 2026, on 27 March, 26 August and 16 October. The 24-hour PSI reached 101 in the central region on 4 September 2026, the first Unhealthy reading since 8 October 2023, and 168 on 10 October with NEA warning it could exceed 200; MOE stated it would consider closing schools and postponing national examinations if the next-day forecast turned Hazardous. On 16 October NEA announced preventive measures notices under the Transboundary Haze Pollution Act to seven companies operating in Indonesia. The domestic chain, thresholds, task force, masks and purifiers, is complete; the hazard itself remains outside the jurisdiction.</>
              ) : (
                <><strong className="text-foreground">国外の火災対策に依存するヘイズ（運用・対外）。</strong>ASMC は2026年に地域最高の警戒レベル3を3月27日、8月26日、10月16日の3回宣言しました。24時間 PSI は9月4日に中部で101に達し、2023年10月8日以来の Unhealthy となり、10月10日には168に達して NEA は200超の可能性を警告しました。MOE は翌日予測が Hazardous となれば休校と国家試験の延期を検討すると表明しました。10月16日、NEA は Transboundary Haze Pollution Act に基づく予防措置通知をインドネシアで操業する7社に発出すると発表しました。閾値・タスクフォース・マスク・空気清浄機という国内の連鎖は完成していますが、ハザードそのものは管轄の外にあります。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Compounding heat and haze under El Niño (operational).</strong> MSS gave more than an 80 percent chance of El Niño developing in June-July 2026 together with a positive Indian Ocean Dipole, raising both heat and haze risk, against a background warming of 0.25 °C per decade since 1948. The heat-stress response is split across bodies: MSS measures, MOH owns the advisory and its three WBGT bands, the WSH Council sets workplace rules from 1 December 2026, and an advisory issued by the OAE Council in July 2026 uses a 30 °C precaution threshold, below the 31 °C advisory band. Keeping these thresholds coherent as hazards overlap is an open task.</>
              ) : (
                <><strong className="text-foreground">エルニーニョ下で重なる暑熱とヘイズ（運用）。</strong>MSS は2026年6〜7月にエルニーニョが発生する確率を80%超とし、正のインド洋ダイポールもあわせて暑熱とヘイズの両方のリスクが高まるとしました。背景には1948年以降10年あたり0.25℃の昇温があります。暑熱ストレスへの対応は機関間で分かれています。MSS が計測し、MOH が助言と3つの WBGT 区分を持ち、WSH Council が2026年12月1日から職場規則を定め、OAE Council が2026年7月に出した助言は助言区分の31℃より低い30℃を注意喚起の閾値としています。ハザードが重なるなかでこれらの閾値の整合を保つことは未解決の課題です。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Channel proliferation and phased coverage (operational, last mile).</strong> A resident may receive alerts through myENV, the PUB Telegram channel, SMS, SGSecure, myResponder, SG Alert and the sirens, and no official statement on integrating these or on a single national aggregator was found. SG Alert reaches only the Singtel network until StarHub joins by end-2026 and M1 and SIMBA by mid-2027; the SGSecure siren relay works only if notifications are enabled; and as late as 2018 Parliament acknowledged that refusals by private building owners had left some areas with poorer siren coverage, the problem Part 12A was passed to fix.</>
              ) : (
                <><strong className="text-foreground">チャンネルの増殖と段階的な到達範囲（運用・ラストマイル）。</strong>住民は myENV、PUB の Telegram、SMS、SGSecure、myResponder、SG Alert、サイレンから警報を受け取り得ますが、これらの統合や単一の国家的な集約窓口に関する公式の言明は見当たりません。SG Alert は StarHub が2026年末、M1 と SIMBA が2027年中頃に加わるまで Singtel 網だけに届き、SGSecure のサイレン連動は通知が有効な場合に限られ、2018年の国会では民間建物所有者の拒否によりサイレンの到達が劣る地域があることが認められました。第12A部はその解消のために可決されたものです。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Standards and evaluation (operational).</strong> The 2024 tsunami national report records that the Common Alerting Protocol is not used, no official document consulted adopts impact-based forecasting or multi-hazard early warning terminology, and no peer-reviewed evaluation of false-alarm rates or public response to Singapore warnings was found. Agencies frame the residual risk as a matter of public engagement, with PUB asking businesses and the wider community to play their part in being flood-ready, which places the evidence burden on behaviour that has not been measured.</>
              ) : (
                <><strong className="text-foreground">標準と評価（運用）。</strong>2024年の津波国別報告は Common Alerting Protocol を未使用と記録し、参照した公的文書に影響予測型予報やマルチハザード早期警報の用語はなく、誤報率や住民の反応に関する査読付きの評価も見当たりません。各機関は残余リスクを住民の関与の問題として位置づけ、PUB は「企業と地域社会が洪水への備えで役割を果たす」ことを求めていますが、その行動が実際にどう変わったかは計測されていません。</>
              )}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── 7. International cooperation ── */}
        <section>
          <h2 className={H2}>
            {en ? "7. International Cooperation and Japan" : "7. 国際協力と日本の関与"}
          </h2>
          <p className={P}>
            {en ? (
              <>Singapore is a regional provider rather than a recipient. MSS has hosted the ASEAN Specialised Meteorological Centre since its establishment in 1993; in 1995 ASMC was designated the ASEAN centre to monitor land and forest fires and transboundary haze for southern ASEAN, in 1997 it was tasked to run an intranet among ASEAN meteorological and environment agencies for early warning, and in 2002 its coverage was extended to northern ASEAN. It issues warnings and advisories to ASEAN Member States and the interim ASEAN Coordinating Centre for Transboundary Haze Pollution Control, coordinates with the ASEAN Sub-Committee on Meteorology and Geophysics and COSTI, and runs the ASMC Regional Capability Building Programme in numerical weather prediction, satellite fire and haze monitoring, sub-seasonal to seasonal outlooks and climate projections. Singapore joined WMO in 1966, and MSS has hosted the WMO Regional Office for Asia and the South-West Pacific since 2018 according to MSS. In the Indian Ocean Tsunami Warning and Mitigation System, MSS is the National Tsunami Warning Centre, took part in IOWave23 and in the six-monthly communications tests of the Tsunami Service Providers, and reported an ongoing review of its tsunami response plan in 2024. In civil defence, Singapore hosted the ASEAN Strategic Policy Dialogue on Disaster Management on 20 August 2025 with about 230 guests, supports ASEAN-ERAT training, and held the inaugural Singapore-International Disaster and Emergency Management Expo in November 2025. The US Center for Excellence in Disaster Management and Humanitarian Assistance classifies Singapore as an assisting state in its 2021 and July 2025 reference handbooks.</>
            ) : (
              <>シンガポールは受益国ではなく地域の提供者です。MSS は1993年の設立以来 ASEAN Specialised Meteorological Centre をホストし、ASMC は1995年に南部 ASEAN の土地・森林火災と越境ヘイズを監視する ASEAN のセンターに指定され、1997年に ASEAN の気象・環境機関を結ぶ早期警報のイントラネットの運営を任され、2002年に対象を北部 ASEAN へ広げました。ASEAN 加盟国と暫定 ASEAN Coordinating Centre for Transboundary Haze Pollution Control へ警報と助言を出し、ASEAN Sub-Committee on Meteorology and Geophysics と COSTI と調整し、数値予報、衛星による火災・ヘイズ監視、季節内〜季節予測、気候予測を扱う ASMC Regional Capability Building Programme を運営しています。シンガポールは1966年に WMO に加盟し、MSS によれば2018年から WMO アジア・南西太平洋地域事務所をホストしています。インド洋津波警戒・軽減システムでは MSS が National Tsunami Warning Centre を務め、IOWave23 と Tsunami Service Provider の半年ごとの通信試験に参加し、2024年には津波対応計画の見直しが進行中と報告しました。民間防衛の分野では、2025年8月20日に約230人を集めた ASEAN Strategic Policy Dialogue on Disaster Management を主催し、ASEAN-ERAT の訓練を支援し、2025年11月に初の Singapore-International Disaster and Emergency Management Expo を開催しました。米国の Center for Excellence in Disaster Management and Humanitarian Assistance は2021年と2025年7月の参照ハンドブックでシンガポールを「支援国（assisting state）」に分類しています。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>The documented link with Japan is narrow. The Coastal Protection Expert Panel that PUB set up in 2020 includes experts from Japan alongside the Netherlands, the United States and the United Kingdom, bringing Japanese coastal engineering experience into the design of the protection regime. Bilateral cooperation with the Japan Meteorological Agency or JICA on early warning, a Singapore role in the Early Warnings for All initiative, and funding of ASMC capability building by Singapore or by partners are not recorded in the sources consulted for this article; given the capacity of the Singapore agencies, cooperation where it exists is between peers in WMO and tsunami-system bodies rather than development assistance.</>
            ) : (
              <>日本との関わりとして資料で確認できるものは限られます。PUB が2020年に設けた Coastal Protection Expert Panel には、オランダ・米国・英国とともに日本の専門家が加わり、日本の海岸工学の経験が防護制度の設計に取り込まれています。気象庁や JICA との早期警報に関する二国間協力、Early Warnings for All におけるシンガポールの役割、ASMC の能力構築に対するシンガポールやパートナーの資金拠出は、本稿が参照した資料には記録がありません。シンガポールの機関の能力を考えれば、協力があるとすれば WMO や津波警戒システムの場での対等な関係であり、開発援助の形ではないといえます。</>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 8. Conclusion ── */}
        <section>
          <h2 className={H2}>{en ? "8. Conclusion" : "8. まとめ"}</h2>
          <p className={P}>
            {en ? (
              <>Singapore runs a sectoral-plus-coordination model. Each hazard has a statutory owner whose authority derives from general functions rather than from an explicit duty to warn; a non-statutory crisis system and a standing haze task force supply whole-of-government coordination; pre-published PSI and WBGT thresholds turn readings into actions without further decisions; and the imperative channels, sirens and cell broadcast, together with the power to move people, are concentrated in one civil-defence force. Reform since 2020 has followed a pattern of incremental codification, giving statutory anchors to practices that already existed (building-level flood protection, public-health postures, coastal defence) while modernising the civil-defence core through technology and property-access powers rather than new emergency doctrine. The design is strongest where hazards are slow or external, haze, sea-level rise and pandemics, and weakest where physics bounds the lead time, which the state answers by accepting a small residual flood area and investing in response.</>
            ) : (
              <>シンガポールは「部門別＋調整」のモデルを運用しています。各ハザードには法定の所管機関がありますが、その権限は明示的な警報義務ではなく一般的な機能から導かれています。法定外の危機管理システムと常設のヘイズ対策タスクフォースが政府横断の調整を担い、公表済みの PSI・WBGT の閾値が追加の判断なしに観測値を行動へ変換し、サイレンとセルブロードキャストという権限的な経路と人を動かす権限は一つの民間防衛組織に集中しています。2020年以降の改革は漸進的な法典化の型をとり、既に行政上存在した実務（建物単位の洪水防護、公衆衛生態勢、沿岸防護）に法的な根拠を与える一方、民間防衛の中核は新たな緊急事態の法理ではなく技術と不動産への立入権限によって更新されました。この設計は、ヘイズ・海面上昇・パンデミックのようにハザードが緩やかか国外にある場合に最も強く、物理がリードタイムを縛る場合に最も弱く、国家は小さな残余浸水域を受け入れ対応に投資することで後者に答えています。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>The unresolved question is whether a system that works because agencies act should be written down. Three changes would follow from an affirmative answer: an explicit warning function for NEA and MSS and for PUB across all floods, not only the coast, so that the 2026 coastal clause is no longer the sole statutory statement of who warns; a statutory basis for the Homefront Crisis Management System with triggers aligned to the 2024 public-health postures; and a published national alerting standard, including adoption of the Common Alerting Protocol and an integration path for the seven or more channels a resident now faces. For other ASEAN members the transferable elements are institutional rather than infrastructural: sector plans tied to published thresholds, a single agency chairing haze response, a legal duty on building owners to host warning devices, and a cell-broadcast system without opt-out. The sensor networks, radar nowcasts and the fiscal capacity to shift coastal defence onto landowners over a century are products of a small territory and a rich state, and travel less well.</>
            ) : (
              <>未解決の問いは、機関が行動するから機能している制度を文書化すべきかどうかです。肯定するなら三つの変更が導かれます。第一に、NEA と MSS、そして沿岸に限らずすべての洪水について PUB に明示的な警報機能を与え、2026年の沿岸条項が「誰が警報を出すか」を定めた唯一の法文でなくすること。第二に、Homefront Crisis Management System に法令上の根拠を与え、起動条件を2024年の公衆衛生態勢と整合させること。第三に、Common Alerting Protocol の採用と、住民が現在直面する7種以上のチャンネルの統合経路を含む国家警報標準を公表することです。他の ASEAN 加盟国にとって移転可能なのは、インフラではなく制度の要素です。公表閾値と結び付いた部門計画、ヘイズ対応を一つの機関が議長として束ねる形、建物所有者に警報装置の受け入れを課す法的義務、受信拒否のないセルブロードキャストがそれにあたります。センサー網、レーダーナウキャスト、沿岸防護を一世紀かけて土地所有者へ移す財政的余力は、小さな国土と豊かな国家の産物であり、他国へは移りにくいものです。</>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── References ── */}
        <section>
          <h2 className={H2}>References</h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Government of Singapore (2022). Civil Defence Act 1986 (2020 Revised Edition, as at 4 January 2022). <em>Singapore Statutes Online, PDF mirrored by IFRC Disaster Law</em>. https://disasterlaw.ifrc.org/sites/default/files/media/disaster_law/2022-01/Civil%20Defence%20Act%201986.pdf
            </li>
            <li>
              Ministry of Home Affairs (2018). Second Reading Speech of the Civil Defence and Other Matters Bill, 20 November 2018. <em>MHA</em>. https://www.mha.gov.sg/media-room/newsroom/second-reading-speech-of-the-civil-defence-and-other-matters-bill---speech-by-mrs-josephine-teo-minister-for-manpower-and-second-minister-for-home-affairs/
            </li>
            <li>
              Government of Singapore. National Environment Agency Act 2002; Public Utilities Act 2001; Sewerage and Drainage Act 1999; Transboundary Haze Pollution Act 2014; Infectious Diseases Act 1976; Civil Defence Shelter Act 1997; Fire Safety Act 1993. <em>Singapore Statutes Online</em>. https://sso.agc.gov.sg/
            </li>
            <li>
              Allen &amp; Gledhill (2026). Coastal Protection and Other Amendments Bill to safeguard Singapore coastline against rising sea levels and extreme weather events passed, 27 March 2026. <em>Allen &amp; Gledhill</em>. https://www.allenandgledhill.com/sg/publication/articles/32626/coastal-protection-and-other-amendments-bill-to-safeguard-singapore-s-coastline-against-rising-sea-levels-and-extreme-weather-events-passed
            </li>
            <li>
              Rahmat Lim &amp; Partners (2026). Coastal Protection Bill to safeguard Singapore coastline introduced. <em>Rahmat Lim &amp; Partners</em>. https://www.rahmatlim.com/publication/articles/32369/coastal-protection-bill-to-safeguard-singapore-s-coastline-against-rising-sea-levels-and-extreme-weather-events-introduced
            </li>
            <li>
              Eco-Business (2026). Singapore unveils coastal defence rules requiring long-term protection against rising seas, 23 June 2026. <em>Eco-Business</em>. https://www.eco-business.com/news/singapore-unveils-coastal-defence-rules-requiring-long-term-protection-against-rising-seas/
            </li>
            <li>
              Allen &amp; Gledhill (2024). Infectious Diseases (Amendment) Bill passed in Parliament: upcoming update to Singapore public health postures, 27 March 2024. <em>Allen &amp; Gledhill</em>. https://www.allenandgledhill.com/sg/publication/articles/27697/infectious-diseases-amendment-bill-passed-in-parliament-upcoming-update-to-singapore-s-public-health-postures
            </li>
            <li>
              Ministry of Sustainability and the Environment (2025). Oral reply to parliamentary question on drainage improvement, 4 February 2025. <em>MSE</em>. https://www.mse.gov.sg/latest-news/oral-reply-on-drainage-improvement-feb2025/
            </li>
            <li>
              Ministry of Sustainability and the Environment (2023). Press release: Heat Stress Advisory, 24 July 2023. <em>MSE</em>. https://www.mse.gov.sg/latest-news/press-release-heat-stress-advisory/
            </li>
            <li>
              PUB, Singapore National Water Agency (2024). Flood Resilience Info Pack (tabletop exercise pre-reading, November 2024). <em>PUB</em>. https://www.pub.gov.sg/-/media/PUB/Flood-Resilience/Documents/Flood-Resilience-Info-Pack.pdf
            </li>
            <li>
              PUB, Singapore National Water Agency (2024). PUB launches inaugural flood resilience campaign to educate public on being Flood-Wise, 20 November 2024. <em>PUB</em>. https://www.pub.gov.sg/Resources/News-Room/PressReleases/2024/11/PUB-launches-inaugural-flood-resilience-campaign-to-educate-public-on-being-Flood-Wise
            </li>
            <li>
              Singapore Civil Defence Force (2026). Public Warning System; Emergency Alert (SG Alert). <em>SCDF</em>. https://www.scdf.gov.sg/home/civil-defence-shelter/public-warning-system ; https://www.scdf.gov.sg/home/civil-defence-shelter/emergency-alert-(sg-alert)
            </li>
            <li>
              HTX, Home Team Science and Technology Agency (2026). Where every second counts: how HTX helped bring SG Alert to life, 8 May 2026. <em>HTX</em>. https://www.htx.gov.sg/whats-happening/all-news---events/all-news/2026/where-every-second-counts-how-htx-helped-bring-sg-alert-to-life
            </li>
            <li>
              Meteorological Service Singapore. About MSS; Heavy Rain Warning; Heat Stress. <em>MSS</em>. https://www.weather.gov.sg/about-mss/ ; https://www.weather.gov.sg/warning-heavy-rain/ ; https://www.weather.gov.sg/heat-stress/
            </li>
            <li>
              Singapore (2024). National Report to the Fourteenth Session of the Intergovernmental Coordination Group for the Indian Ocean Tsunami Warning and Mitigation System (ICG/IOTWMS-XIV), Jakarta, 17-19 November 2024. <em>IOC-UNESCO, OceanExpert</em>. https://oceanexpert.net/downloadFile/57554
            </li>
            <li>
              ASEAN Specialised Meteorological Centre (2026). ASMC presentation to the Asian and Pacific Centre for Transfer of Technology, 3 February 2026. <em>APCTT</em>. https://apctt.org/sites/default/files/2026-02/ASMC_3~1_0.PDF
            </li>
            <li>
              National Environment Agency (2026). Singapore government agencies implement measures to mitigate impact of haze, 4 September 2026. <em>NEA</em>. https://www.nea.gov.sg/media/news/news/index/singapore-government-agencies-implement-measures-to-mitigate-impact-of-haze-Aug2026
            </li>
            <li>
              Civil Service College Singapore. Singapore whole-of-government approach in crisis management. <em>ETHOS, Issue 16</em>. https://knowledge.csc.gov.sg/ethos-issue-16/singapore-whole-of-government-approach-in-crisis-management/
            </li>
            <li>
              Ministry of Home Affairs (2026). Transcript of doorstop interview by Mr K Shanmugam on the Homefront Crisis Ministerial Committee, 4 April 2026. <em>MHA</em>. https://www.mha.gov.sg/media-room/newsroom/transcript-of-doorstop-interview-by-mr-k-shanmugam-coordinating-minister-for-national-security-and-minister-for-home-affairs-on-the-homefront-crisis-ministerial-committee/
            </li>
            <li>
              Urban Redevelopment Authority (2025). Master Plan 2025: A flood-resilient city and coast. <em>URA</em>. https://www.ura.gov.sg/land-planning/master-plan/master-plan-2025/themes/strengthening-urban-resilience/a-flood-resilient-city-and-coast/
            </li>
          </ol>
        </section>

        <hr className="border-border" />

        {/* ── Series ── */}
        <section>
          <h2 className={H2}>
            {en ? "Series: Early Warning Governance in ASEAN" : "シリーズ：ASEAN 各国の予警報制度"}
          </h2>
          <p className={P}>
            {en ? "This article is part of a series reviewing the legal and institutional arrangements for early warning in each ASEAN member state." : "本記事は、ASEAN 加盟各国の予警報制度（法制度と機関の役割）を国ごとに整理するシリーズの一部です。"}
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
              <strong className="text-foreground">{en ? "Singapore" : "シンガポール"}</strong>
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
