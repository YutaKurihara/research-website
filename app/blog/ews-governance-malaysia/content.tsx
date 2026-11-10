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
              ? "Early Warning Governance in Malaysia — Laws, Actors and Current Challenges"
              : "マレーシアの予警報制度 — 法制度・アクターの役割・現在の課題"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "How Malaysia organises disaster early warning without a disaster management act, based on the text of National Security Council Directive No. 20, the NADMA Strategic Plan 2024-2028, the Shah Alam High Court judgment of September 2026, parliamentary replies and official statements up to November 2026."
              : "災害管理法を持たないマレーシアが予警報をどのように組織しているかを、国家安全保障会議指令第20号の本文、NADMA 戦略計画 2024〜2028、2026年9月のシャーアラム高等裁判所判決、議会答弁および2026年11月までの公式発表に基づいて整理します。"}
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
                The hazards that kill and cost most in Malaysia are the river
                floods that recur every Northeast Monsoon season (Musim
                Tengkujuh, hereafter MTL) on the east coast of the peninsula
                and in Sabah and Sarawak. The floods of December 2021 (MTL
                2021/22) affected 138,916 people in eleven states, killed 57
                and caused losses of RM6.1 billion. At the end of November
                2024 more than 1,000 mm of rain fell on the east coast between
                26 and 30 November; 146,611 people were in evacuation centres
                on 30 November (93,158 in Kelantan and 41,409 in Terengganu),
                and the IFRC counted more than 235,706 displaced people in
                over 632 temporary evacuation centres (PPS) by 4 December. The
                Department of Irrigation and Drainage reported 5,496 flood
                hotspots nationwide in 2022. Added to this are flash floods in
                the Klang Valley, slope failures (a national concern since the
                Highland Towers collapse of December 1993; 31 people died at
                Batang Kali in December 2022 and five at Cameron Highlands in
                January 2024), haze, tsunami and earthquake, and strong wind
                and thunderstorms. The government reports that annual disaster
                losses fell from RM933.4 million in 2024 to RM636.9 million in
                2025.
              </>
            ) : (
              <>
                マレーシアで最も大きな人的・経済的被害をもたらすのは、北東モンスーン期（Musim
                Tengkujuh、以下 MTL）に半島東海岸とサバ・サラワクで繰り返される河川洪水です。2021年12月の洪水（MTL
                2021/22）は11州で138,916人が被災し、57人が死亡、損失額は61億リンギットに達しました。2024年11月末には東海岸で26〜30日の5日間に1,000
                mm 超の降雨があり、11月30日時点で146,611人（クランタン州93,158人、トレンガヌ州41,409人）が避難、IFRC
                の集計では12月4日までに632か所超の臨時避難所（PPS）に235,706人以上が収容されました。灌漑排水局は全国の洪水ホットスポットを5,496か所（2022年）と報告しています。これに加えて、クランバレー（首都圏）の鉄砲水、1993年12月のハイランドタワーズ崩落以来の課題である斜面災害（2022年12月のバタンカリ地すべりで31人、2024年1月のキャメロンハイランズで5人が死亡）、煙霧（ヘイズ）、津波・地震、強風・雷雨が主要なハザードです。年間の災害損失額は2024年の9億3,340万リンギットから2025年の6億3,690万リンギットへ減少したと政府は報告しています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Three features make institutional design the central question
                in Malaysia. First, the country still has no disaster
                management act: the national response system rests on an
                executive instrument, National Security Council (MKN)
                Directive No. 20 of 1997, and on NADMA (Agensi Pengurusan
                Bencana Negara; National Disaster Management Agency), which
                was created by a Cabinet decision in 2015. Second, within a
                federal system the agencies that issue warnings sit in four
                different ministries: MetMalaysia, the Department of Mineral
                and Geoscience (JMG) and the Department of Environment (DOE)
                under the Ministry of Natural Resources and Environmental
                Sustainability (NRES); the Department of Irrigation and
                Drainage (JPS) under the Ministry of Energy Transition and
                Water Transformation (PETRA); the Slope Engineering Branch of
                the Public Works Department (JKR) under the Works Ministry;
                and NADMA and the Civil Defence Force (APM) under the Prime
                Minister&rsquo;s Department (JPM). Third, the decision to
                evacuate belongs to state and district disaster management
                committees, but those committees are chaired by federal civil
                servants posted to the states (State Secretaries and District
                Officers) and the on-scene command is held by the federal
                police, so the formal chain of command and the political
                federal&ndash;state relationship do not coincide. In the
                Selangor floods of December 2021 this surfaced as
                blame-shifting between federal and state governments, and in
                September 2026 the Shah Alam High Court found operational duty
                breaches by NADMA and MetMalaysia over the same floods.
              </>
            ) : (
              <>
                マレーシアで制度設計が中心的な問題となる理由は三つあります。第一に、マレーシアには今日まで災害管理法が存在せず、全国の災害対応は1997年の国家安全保障会議（MKN）指令第20号という行政指令と、2015年の閣議決定で設立された
                NADMA（Agensi Pengurusan Bencana
                Negara、国家災害管理庁）に依拠しています。第二に、連邦制のもとで警報を発する技術機関が四つの省に分散しており、気象局
                MetMalaysia、鉱物地球科学局 JMG、環境局 DOE は天然資源・環境持続可能性省（NRES）、灌漑排水局
                JPS はエネルギー転換・水転換省（PETRA）、公共事業局 JKR の斜面工学部は公共事業省、NADMA
                と民間防衛軍 APM は首相府（JPM）に属します。第三に、避難の決定は州・郡の災害管理委員会に委ねられている一方、その委員長は州に配置された連邦公務員（州政府書記官・郡長）であり、現場指揮は連邦警察が執るため、形式上の指揮系統と政治的な連邦・州関係が一致しません。2021年12月のセランゴール州の洪水ではこの構造が連邦政府と州政府の責任の押し付け合いとして表面化し、2026年9月には同じ洪水をめぐってシャーアラム高等裁判所が
                NADMA と MetMalaysia の運用上の義務違反を認定しました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                This article sets out the legal structure of this
                directive-based system, the division of labour among the
                agencies, the path a warning takes from forecast to household,
                the reforms since 2020 and the challenges that remain as of
                November 2026.
              </>
            ) : (
              <>
                本記事では、この指令ベースの制度の法的構造、各機関の役割分担、予報から世帯に警報が届くまでの流れ、2020年以降の改革、そして2026年11月時点で残る課題を整理します。
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
                The legal foundation of disaster management in Malaysia is a
                stack of executive directives rather than an Act of
                Parliament. A Cabinet decision of 18 May 1994, taken after the
                Highland Towers collapse, conceived a land-disaster management
                mechanism under the National Security Division of the Prime
                Minister&rsquo;s Department, and on 11 May 1997 MKN Directive
                No. 20, &ldquo;Policy and Mechanism of National Disaster
                Management and Relief&rdquo; (Dasar dan Mekanisme Pengurusan
                Bencana Negara), came into force with the signature of Prime
                Minister Mahathir Mohamad, dissolving the earlier Flood Relief
                Machinery. The directive was revised on 30 March 2012
                (Semakan Semula) to add disaster risk reduction, and on 1
                August 2024 the MKN meeting chaired by the Prime Minister
                approved NADMA Directive No. 1 (Arahan NADMA No. 1), which
                cancelled and replaced Directive No. 20. NADMA traces the
                legal authority of these directives to section 12 of the
                National Security Council Act 2016 (Act 776), while MKN itself
                rests its general authority on the Emergency (Essential
                Powers) Act 1979. No statute regulates disaster management or
                public warning as such.
              </>
            ) : (
              <>
                マレーシアの災害管理の法的基盤は、議会制定法ではなく行政指令の積み重ねです。1993年12月のハイランドタワーズ崩落を受けた1994年5月18日の閣議決定により首相府国家安全保障部の下に陸上災害の管理メカニズムが構想され、1997年5月11日にマハティール首相の署名で
                MKN 指令第20号「国家災害管理・救援の政策とメカニズム（Dasar dan Mekanisme Pengurusan
                Bencana
                Negara）」が発効し、従来の洪水救援機構は解散しました。同指令は2012年3月30日に改訂（Semakan
                Semula）されて災害リスク削減の要素が加わり、2024年8月1日には首相が議長を務める MKN 会議が「NADMA
                指令第1号（Arahan NADMA No. 1）」を承認して指令第20号を廃止・置換しました。NADMA
                はこれら指令の法的根拠を2016年国家安全保障会議法（Akta 776）第12条に求め、MKN
                自体は1979年非常事態（必要権限）法に一般的権限の根拠を置いていますが、災害管理や公衆警報そのものを規定する法律は存在しません。
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
                  <th className={TH}>
                    {en
                      ? "Provisions on warning and evacuation"
                      : "警報・避難に関する規定"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TDH}>{en ? "MKN Directive No. 20 — Policy and Mechanism of National Disaster Management and Relief (Arahan MKN No. 20)" : "MKN 指令第20号 — 国家災害管理・救援の政策とメカニズム（Arahan MKN No. 20）"}</td>
                  <td className={TD}>{en ? "1997 (revised 2012)" : "1997年（2012年改訂）"}</td>
                  <td className={TD}>{en ? "Executive directive. Three disaster levels (I district, II state, III central) and three committees (JPBD district, JPBN state, JPBP central). Covers floods, storms, drought, erosion, landslides, haze; excludes sea and air accidents." : "行政指令。災害レベル I（郡）・II（州）・III（中央）と、郡（JPBD）・州（JPBN）・中央（JPBP）の三層委員会。洪水・暴風・干ばつ・侵食・地すべり・煙霧を対象とし、海難・航空事故は除外。"}</td>
                  <td className={TD}>{en ? "On-scene Disaster Operations Commander is the police chief (district, state or PDRM internal security director by level), advised by the fire service on evacuation; the district committee identifies and forms evacuation centres; the state committee must set up a system of public announcement and warning; JKM prepares and maintains evacuation centres; the Prime Minister declares a disaster on the advice of the central committee; only committee chairs or the commander may speak to the press." : "現場の災害活動指揮官はレベルに応じて郡警察署長・州警察長官・PDRM 国内治安局長で、消防が避難について助言。郡委員会が避難所を特定・設置し、州委員会は公衆への告知・警報システムを構築する義務を負う。JKM が避難所を準備・維持。首相が中央委員会の提案に基づき災害を宣言し、報道対応は委員長と指揮官に限定。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "NADMA Directive No. 1 (Arahan NADMA No. 1)" : "NADMA 指令第1号（Arahan NADMA No. 1）"}</td>
                  <td className={TD}>2024</td>
                  <td className={TD}>{en ? "Approved by the MKN meeting chaired by the Prime Minister on 1 August 2024; cancels and replaces Directive No. 20 (Semakan Semula 2012) as the national disaster management policy and mechanism. Used as the yardstick for evaluating PKOB operations in the Lahad Datu tsunami exercise of November 2026." : "2024年8月1日、首相が議長の MKN 会議で承認。指令第20号（2012年改訂版）を廃止・置換する国家災害管理の政策・メカニズム。2026年11月のラハドダトゥ津波演習では PKOB 運用の評価基準として用いられた。"}</td>
                  <td className={TD}>{en ? "The full text has not been published; government documents of 2025-2026 still describe the same three-tier committee mechanism, so the Directive 20 allocation of warning and evacuation duties is understood to carry over." : "全文は公表されていない。2025〜2026年の政府資料は同じ三層委員会メカニズムを説明しており、指令第20号の警報・避難の役割分担が引き継がれていると理解される。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "National Security Council Act 2016 (Akta Majlis Keselamatan Negara 2016, Act 776)" : "2016年国家安全保障会議法（Akta Majlis Keselamatan Negara 2016、Akta 776）"}</td>
                  <td className={TD}>2016</td>
                  <td className={TD}>{en ? "Establishes the Council, the declaration of security areas and special powers; in force 1 August 2016; amended by Act A1625 (2020)." : "国家安全保障会議の設置、治安区域の宣言と特別権限を規定。2016年8月1日施行、2020年の A1625 法で改正。"}</td>
                  <td className={TD}>{en ? "No provision on disaster warning or evacuation. Section 12 is cited by NADMA as the source of authority (punca kuasa) for the disaster directive." : "災害の警報・避難に関する規定はない。第12条が NADMA により災害指令の権限の根拠（punca kuasa）として引用されている。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Cabinet decisions of 29 July and 26 August 2015 establishing NADMA" : "NADMA 設立に関する2015年7月29日・8月26日の閣議決定"}</td>
                  <td className={TD}>2015</td>
                  <td className={TD}>{en ? "Separates disaster management from MKN, merges it with the Post-Flood Recovery Unit and designates NADMA as the national, regional and international coordinator under the Prime Minister’s Department; operations began 1 October 2015." : "災害管理を MKN から分離し、洪水復興ユニットと統合して、首相府の下に国家・地域・国際の調整機関として NADMA を設置。2015年10月1日に業務開始。"}</td>
                  <td className={TD}>{en ? "NADMA advises the chairs of the district, state and central committees and collects, analyses and disseminates disaster information; it has no statutory power of its own to warn or to order evacuation." : "NADMA は郡・州・中央委員会の委員長に助言し、災害情報を収集・分析・伝達する。警報や避難命令の法定権限は持たない。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Civil Defence Act 1951 (Akta Pertahanan Awam 1951, Act 221)" : "1951年民間防衛法（Akta Pertahanan Awam 1951、Akta 221）"}</td>
                  <td className={TD}>{en ? "1951 (revised 1979; amended 1972, 2016)" : "1951年（1979年改訂、1972年・2016年改正）"}</td>
                  <td className={TD}>{en ? "Civil defence; a 1972 amendment added peacetime disaster relief; Act A1513 (in force 1 September 2016) renamed the department Angkatan Pertahanan Awam Malaysia (APM)." : "民間防衛。1972年改正で平時の災害救援を追加、2016年9月1日施行の A1513 法で Angkatan Pertahanan Awam Malaysia（APM）に改称。"}</td>
                  <td className={TD}>{en ? "APM was made secretariat of the state and district committees by a Cabinet committee decision of 8 September 2015 (replacing MKN) and backs up evacuation centres under Directive 20." : "2015年9月8日の閣議委員会決定により APM が州・郡委員会の事務局となり（MKN から交代）、指令第20号の下で避難所の支援を担う。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Waters Act 1920 and Drainage Works Act 1954 (with the Functions of Ministries Act 1969)" : "1920年水法・1954年排水工事法（1969年省庁機能法と併せて）"}</td>
                  <td className={TD}>1920 / 1954</td>
                  <td className={TD}>{en ? "Statutory basis of the functions of JPS (Department of Irrigation and Drainage) over rivers and drainage." : "JPS（灌漑排水局）の河川・排水に関する機能の法的根拠。"}</td>
                  <td className={TD}>{en ? "No explicit warning provision; JPS is nonetheless the lead agency for flood forecasting and warning services to the public (PRABN, InfoBanjir, sirens)." : "明示的な警報規定はないが、JPS は実務上、洪水予測・警報サービスの主管機関（PRABN、InfoBanjir、サイレン）。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Geological Survey Act 1974" : "1974年地質調査法（Geological Survey Act 1974）"}</td>
                  <td className={TD}>1974</td>
                  <td className={TD}>{en ? "Mandate of JMG (Department of Mineral and Geoscience) for geological hazards." : "JMG（鉱物地球科学局）の地質ハザードに関する権限。"}</td>
                  <td className={TD}>{en ? "Seismology shared between JMG and MetMalaysia; JKR assists on landslide prevention and mitigation. No public warning duty specified." : "地震学は JMG と MetMalaysia が分担し、地すべりの防止・軽減は JKR が支援。公衆警報の義務は規定されていない。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Communications and Multimedia Act 1998 and MCMC Act 1998" : "1998年通信マルチメディア法・1998年 MCMC 法"}</td>
                  <td className={TD}>1998</td>
                  <td className={TD}>{en ? "Establish MCMC (Suruhanjaya Komunikasi dan Multimedia Malaysia) as regulator of telecommunications and broadcasting." : "MCMC（Suruhanjaya Komunikasi dan Multimedia Malaysia）を通信・放送の規制機関として設置。"}</td>
                  <td className={TD}>{en ? "No specific provision on public warning or cell broadcast has been identified; SMS alerts and the forthcoming cell broadcast rely on administrative cooperation between NADMA, MCMC and the operators." : "公衆警報やセルブロードキャストに関する個別規定は確認されていない。SMS 警報と導入予定のセルブロードキャストは NADMA・MCMC・通信事業者の行政的協力に依拠。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Street, Drainage and Building Act 1974; Local Government Act 1976" : "1974年街路・排水・建築法、1976年地方政府法"}</td>
                  <td className={TD}>1974 / 1976</td>
                  <td className={TD}>{en ? "Powers and duties of local authorities (PBT), including drainage and building control." : "地方自治体（PBT）の権限と義務。排水と建築規制を含む。"}</td>
                  <td className={TD}>{en ? "No warning provision; the High Court held in September 2026 that the Shah Alam City Council (MBSA) had an independent statutory duty to maintain the public drainage system." : "警報規定はないが、2026年9月の高裁判決はシャーアラム市議会（MBSA）に公共排水系統を維持する独立の法定義務があると判示。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "National Disaster Risk Reduction Policy 2030 (Dasar Pengurangan Risiko Bencana Negara 2030, DPRB 2030)" : "国家災害リスク削減政策2030（Dasar Pengurangan Risiko Bencana Negara 2030、DPRB 2030）"}</td>
                  <td className={TD}>{en ? "2024 (Cabinet, 25 September)" : "2024年（9月25日閣議承認）"}</td>
                  <td className={TD}>{en ? "Policy, not law. Six targets to 2030 and five pillars aligned with the Sendai Framework; NADMA leads implementation and stakeholders report through the MyDRR platform." : "法律ではなく政策文書。仙台枠組に沿った2030年までの6目標と5本の柱。NADMA が実施を主導し、関係者は MyDRR プラットフォームで報告。"}</td>
                  <td className={TD}>{en ? "One target is to improve the availability of and access to multi-hazard early warning systems, risk information and risk assessment." : "目標の一つに、マルチハザード早期警報システム・リスク情報・リスク評価の利用可能性とアクセスの改善を掲げる。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Disaster Risk Reduction Act (Akta Pengurangan Risiko Bencana) / National Disaster Management Bill (RUU Pengurusan Bencana Negara) — proposed" : "災害リスク削減法（Akta Pengurangan Risiko Bencana）／国家災害管理法案（RUU Pengurusan Bencana Negara）— 構想段階"}</td>
                  <td className={TD}>{en ? "pending" : "未成立"}</td>
                  <td className={TD}>{en ? "Drafting ordered by the Prime Minister in January 2022; needs study announced May 2024; a baseline study was expected to take a further 12 months as of 26 October 2026." : "2022年1月に首相が起草加速を指示、2024年5月に必要性調査を発表。2026年10月26日時点でベースライン調査の完了にさらに12か月を要する見込み。"}</td>
                  <td className={TD}>{en ? "None yet; no date for tabling in the Dewan Rakyat has been set." : "規定はまだない。下院への提出時期は未定。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                What the directive settles is the allocation of operational
                roles. It states who commands on site (the police chief, with
                the fire chief as deputy), who orders and executes evacuation
                (the committee at the relevant level, through the police-led
                commander with JBPM, APM and RELA), who identifies and runs
                relief centres (the district committee and JKM), who must set
                up a system of public announcement and warning (the state
                committee), who declares a disaster (the Prime Minister on the
                advice of the central committee) and who may speak to the
                press. The committees are chaired by the District Officer, the
                State Secretary (the Mayor in Kuala Lumpur and the Director of
                Administration in Labuan) and a minister appointed by the
                Prime Minister, and the directors of the meteorological,
                drainage, geological and environment services sit on the
                central and state committees. Levels I, II and III are
                assigned by the authority managing the event, which may also
                propose hand-over to a higher authority.
              </>
            ) : (
              <>
                指令が定めているのは運用上の役割分担です。現場で指揮する者（警察署長、副指揮官は消防署長）、避難を命じ実行する者（当該レベルの委員会が、警察主導の指揮官と
                JBPM・APM・RELA を通じて）、避難所を特定し運営する者（郡委員会と
                JKM）、公衆への告知・警報システムを構築する義務を負う者（州委員会）、災害を宣言する者（中央委員会の提案に基づく首相）、報道に対して発言できる者を明記しています。委員長は郡長、州政府書記官（クアラルンプールは市長、ラブアンは行政長官）、首相が任命する大臣であり、気象・排水・地質・環境の各局長が中央・州委員会の委員に含まれます。レベル
                I・II・III の区分は事案を管理している当局が判断し、上位当局への引き継ぎを提案することもできます。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                What the framework does not settle is at least as important.
                No statute defines the powers of NADMA, the duties of the
                technical agencies to warn, the thresholds at which a warning
                category must be raised, or the legal basis for alerting the
                public through the mobile networks. NADMA has no organisation
                at state or district level, a gap it identified itself after
                MTL 2021/22. A disaster act has been on the agenda since the
                Prime Minister ordered NADMA to accelerate drafting on 19
                January 2022, and the IFRC Disaster Law Programme had already
                classified Malaysia as a system without a dedicated law in
                2019. The written parliamentary reply of 26 October 2026
                states that the baseline study for a Disaster Risk Reduction
                Act will take another twelve months, that no timeline exists
                for tabling the National Disaster Management Bill, and that
                the government does not wish to legislate before identifying
                the real gaps in the existing framework.
              </>
            ) : (
              <>
                この枠組みが定めていないことも同じくらい重要です。NADMA
                の権限、技術機関が警報を発する義務、警報区分を引き上げるべき閾値、携帯電話網を通じて公衆に警報する法的根拠は、いずれも法律で定義されていません。NADMA
                は州・郡レベルに組織を持たず、これは MTL 2021/22
                の後に NADMA 自身が指摘した欠落です。災害管理法は2022年1月19日に首相が
                NADMA に起草加速を指示して以来の課題であり、IFRC
                災害法プログラムは2019年時点でマレーシアを専用法を持たない制度に分類していました。2026年10月26日の書面による議会答弁は、災害リスク削減法のベースライン調査にさらに12か月を要し、国家災害管理法案の下院提出時期は定められておらず、政府は既存枠組みの真の欠落を特定する前に立法することを望まない、としています。
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
                Warnings in Malaysia originate in five technical agencies
                spread across three ministries, converge in the National
                Disaster Command Centre of NADMA, and are acted upon by
                committees chaired by federal administrators and executed by
                the police, fire service, civil defence and armed forces. The
                table lists the principal bodies, their parent ministries as
                named in 2026, the legal basis of their role and their place
                in the warning chain.
              </>
            ) : (
              <>
                マレーシアの警報は三つの省に分かれた五つの技術機関で生成され、NADMA
                の国家災害指令センターに集約され、連邦の行政官が委員長を務める委員会の判断を経て、警察・消防・民間防衛・軍が実行します。下表は主要機関、2026年時点の所管省庁、役割の法的根拠、警報の流れにおける位置づけを示します。
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
                  <th className={TH}>
                    {en ? "Role in early warning" : "予警報における役割"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TDH}>{en ? "MetMalaysia (Jabatan Meteorologi Malaysia; Malaysian Meteorological Department)" : "MetMalaysia（Jabatan Meteorologi Malaysia、マレーシア気象局）"}</td>
                  <td className={TD}>{en ? "Ministry of Natural Resources and Environmental Sustainability (NRES)" : "天然資源・環境持続可能性省（NRES）"}</td>
                  <td className={TD}>{en ? "Member of the central and state committees under Directive 20; no establishing statute identified" : "指令第20号に基づく中央・州委員会の委員。設置法は確認されていない"}</td>
                  <td className={TD}>{en ? "Weather forecasts; continuous-rain warnings in three categories; strong wind and rough sea, thunderstorm and tropical cyclone warnings; earthquake and tsunami warnings through the national tsunami early warning system; myCuaca app" : "気象予報、3区分の連続降雨警報、強風・高波、雷雨、熱帯低気圧の警報、国家津波早期警報システムによる地震・津波警報、myCuaca アプリ"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "JPS / DID (Jabatan Pengairan dan Saliran; Department of Irrigation and Drainage)" : "JPS／DID（Jabatan Pengairan dan Saliran、灌漑排水局）"}</td>
                  <td className={TD}>{en ? "Ministry of Energy Transition and Water Transformation (PETRA), since January 2024" : "エネルギー転換・水転換省（PETRA、2024年1月以降）"}</td>
                  <td className={TD}>{en ? "Waters Act 1920; Drainage Works Act 1954; Functions of Ministries Act 1969; district engineer sits on the district committee" : "1920年水法、1954年排水工事法、1969年省庁機能法。郡技師が郡委員会の委員"}</td>
                  <td className={TD}>{en ? "Lead agency for flood forecasting and warning: PRABN (National Flood Forecasting and Warning Centre) runs the PRAB programme; telemetry, InfoBanjir portal, flood sirens, flash-flood readiness notices" : "洪水予測・警報の主管機関。PRABN（国家洪水予測警報センター）が PRAB プログラムを運用し、テレメトリ、InfoBanjir ポータル、洪水サイレン、鉄砲水注意情報を提供"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "NADMA (Agensi Pengurusan Bencana Negara; National Disaster Management Agency)" : "NADMA（Agensi Pengurusan Bencana Negara、国家災害管理庁）"}</td>
                  <td className={TD}>{en ? "Prime Minister’s Department (JPM); the Deputy Prime Minister is the responsible minister" : "首相府（JPM）。副首相が担当大臣"}</td>
                  <td className={TD}>{en ? "Cabinet decision of 26 August 2015; NADMA Directive No. 1 (2024)" : "2015年8月26日の閣議決定、NADMA 指令第1号（2024年）"}</td>
                  <td className={TD}>{en ? "National focal point and secretariat of the central committee; National Disaster Command Centre (NDCC) collects and relays warnings; advises committee chairs; issues postcode-based SMS alerts through MCMC and operators; will trigger cell broadcast; manages relief funds (KWABBN, Bantuan Wang Ihsan) and the Portal Bencana" : "国家の中核機関、中央委員会事務局。国家災害指令センター（NDCC）が警報を集約・中継し、委員長に助言。MCMC と通信事業者を通じて郵便番号ベースの SMS 警報を発信し、セルブロードキャストの発動主体となる予定。救援基金（KWABBN、Bantuan Wang Ihsan）と Portal Bencana を運営"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "MKN (Majlis Keselamatan Negara; National Security Council)" : "MKN（Majlis Keselamatan Negara、国家安全保障会議）"}</td>
                  <td className={TD}>{en ? "Prime Minister’s Department" : "首相府"}</td>
                  <td className={TD}>{en ? "National Security Council Act 2016 (Act 776); established 1971" : "2016年国家安全保障会議法（Akta 776）。1971年設置"}</td>
                  <td className={TD}>{en ? "Issued Directive 20 in 1997 and ran disaster management until 2015; the Council meeting chaired by the Prime Minister approved NADMA Directive No. 1 in 2024; took over response coordination from NADMA during the December 2021 floods" : "1997年に指令第20号を発出し2015年まで災害管理を担当。首相が議長の会議が2024年に NADMA 指令第1号を承認。2021年12月の洪水では NADMA から対応調整を引き継いだ"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Disaster management committees: JPBP (central), JPBN (state), JPBD (district)" : "災害管理委員会：JPBP（中央）、JPBN（州）、JPBD（郡）"}</td>
                  <td className={TD}>{en ? "Chairs: a minister appointed by the Prime Minister (the Deputy Prime Minister in 2024-2026); the State Secretary; the District Officer. Secretariat: NADMA (central), APM (state and district)" : "委員長：首相が任命する大臣（2024〜2026年は副首相）、州政府書記官、郡長。事務局：NADMA（中央）、APM（州・郡）"}</td>
                  <td className={TD}>{en ? "Directive 20 / NADMA Directive No. 1" : "指令第20号／NADMA 指令第1号"}</td>
                  <td className={TD}>{en ? "Classify the disaster level, activate the Disaster Operations Control Centre (PKOB), open temporary evacuation centres (PPS) and decide evacuation; the state committee is responsible for public announcement and warning" : "災害レベルの判定、災害活動管制センター（PKOB）の起動、臨時避難所（PPS）の開設、避難の決定。州委員会は公衆への告知・警報に責任を負う"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "MPBN (Majlis Pengurusan Bencana Negara; National Disaster Management Council)" : "MPBN（Majlis Pengurusan Bencana Negara、国家災害管理評議会）"}</td>
                  <td className={TD}>{en ? "Permanent members: all Menteri Besar and Chief Ministers and the Premier of Sarawak; secretariat NADMA" : "常任メンバーは全州の州首相（Menteri Besar／Chief Minister）とサラワク州プレミア。事務局は NADMA"}</td>
                  <td className={TD}>{en ? "Cabinet decision of 8 April 2026" : "2026年4月8日の閣議決定"}</td>
                  <td className={TD}>{en ? "Highest body for strategic decisions and crisis communication, meeting alongside the regular meetings of state heads of government; intended to remove gaps between federal and state governments" : "戦略的決定と危機コミュニケーションの最高機関。州首相の定例会議に合わせて開催し、連邦と州の間の隙間をなくすことを目的とする"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "JKR Slope Engineering Branch (Cawangan Kejuruteraan Cerun, Jabatan Kerja Raya)" : "JKR 斜面工学部（Cawangan Kejuruteraan Cerun、公共事業局）"}</td>
                  <td className={TD}>{en ? "Works Ministry" : "公共事業省"}</td>
                  <td className={TD}>{en ? "Directive 20 (Public Works member); National Slope Master Plan 2025-2030 under the Inter-Governmental Agency Committee for Slope Management" : "指令第20号（公共事業局が委員）。斜面管理の省庁間委員会のもとでの国家斜面マスタープラン 2025〜2030"}</td>
                  <td className={TD}>{en ? "Landslide early warning on federal-road slopes: 73 telemetric rain gauges, robotic total stations and GNSS on critical slopes, threshold-based alerts and road closures; Slope Hazard and Risk Map" : "連邦道路斜面の地すべり早期警報。73か所のテレメトリ雨量計、重要斜面の自動追尾トータルステーションと GNSS、閾値に基づく警報と道路閉鎖、斜面ハザード・リスクマップ"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "JMG (Jabatan Mineral dan Geosains; Department of Mineral and Geoscience)" : "JMG（Jabatan Mineral dan Geosains、鉱物地球科学局）"}</td>
                  <td className={TD}>NRES</td>
                  <td className={TD}>{en ? "Geological Survey Act 1974" : "1974年地質調査法"}</td>
                  <td className={TD}>{en ? "Critical-slope watch list for settlements and natural slopes; landslide hotspot lists; seismology shared with MetMalaysia; requires registered geologists for hillside development" : "集落・自然斜面を対象とする重要斜面監視リスト、地すべりホットスポットの公表、MetMalaysia と分担する地震観測、丘陵地開発における登録地質技術者の要件"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "DOE (Jabatan Alam Sekitar; Department of Environment)" : "DOE（Jabatan Alam Sekitar、環境局）"}</td>
                  <td className={TD}>NRES</td>
                  <td className={TD}>{en ? "Directive 20 (Environment member); Environmental Quality Act 1974 listed among preventive laws" : "指令第20号（環境局が委員）。1974年環境品質法が予防法令として挙げられる"}</td>
                  <td className={TD}>{en ? "Air Pollutant Index (API) in six bands via the APIMS system; the basis for haze emergency measures" : "APIMS システムによる6段階の大気汚染指数（API）。煙霧時の緊急措置の根拠"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "PDRM (police), JBPM (fire and rescue), APM (civil defence), ATM (armed forces), RELA, SMART" : "PDRM（警察）、JBPM（消防救助）、APM（民間防衛）、ATM（国軍）、RELA、SMART"}</td>
                  <td className={TD}>{en ? "Home Affairs (PDRM), Housing and Local Government (JBPM), JPM (APM, SMART within NADMA), Defence (ATM)" : "内務省（PDRM）、住宅・地方政府省（JBPM）、首相府（APM、NADMA 内の SMART）、国防省（ATM）"}</td>
                  <td className={TD}>{en ? "Directive 20; Civil Defence Act 1951 (APM); MKN Directive No. 19 of 1995 (SMART)" : "指令第20号、1951年民間防衛法（APM）、1995年 MKN 指令第19号（SMART）"}</td>
                  <td className={TD}>{en ? "The police chief is Disaster Operations Commander on site; JBPM collects information and advises the police on evacuation; APM, RELA and ATM assist evacuation and rescue; APM is committee secretariat; SMART is the special search and rescue team" : "警察署長が現場の災害活動指揮官。JBPM が情報を収集し避難について警察に助言。APM・RELA・ATM が避難と救助を支援。APM は委員会事務局、SMART は特別捜索救助部隊"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "JKM (Jabatan Kebajikan Masyarakat; Social Welfare Department)" : "JKM（Jabatan Kebajikan Masyarakat、社会福祉局）"}</td>
                  <td className={TD}>{en ? "Ministry of Women, Family and Community Development" : "女性・家族・社会開発省"}</td>
                  <td className={TD}>{en ? "Directive 20, Appendix M" : "指令第20号附属書 M"}</td>
                  <td className={TD}>{en ? "Prepares and maintains evacuation centres; publishes evacuee statistics on the Info Bencana portal" : "避難所の準備・維持、Info Bencana ポータルでの避難者統計の公表"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "MCMC (Suruhanjaya Komunikasi dan Multimedia Malaysia) and mobile operators; RTM and mass media" : "MCMC（Suruhanjaya Komunikasi dan Multimedia Malaysia）と携帯通信事業者、RTM と報道機関"}</td>
                  <td className={TD}>{en ? "Ministry of Communications" : "通信省"}</td>
                  <td className={TD}>{en ? "Communications and Multimedia Act 1998; Broadcasting and Information member of the central committee under Directive 20" : "1998年通信マルチメディア法。指令第20号では放送・情報局長が中央委員会の委員"}</td>
                  <td className={TD}>{en ? "Transmit NADMA SMS alerts (more than 8.6 million in MTL 2024/25); cell broadcast system under development with a pilot on 19 November 2026; mass and social media relay warnings" : "NADMA の SMS 警報を送信（MTL 2024/25 で860万件超）。セルブロードキャストを開発中で2026年11月19日に試験配信。報道機関と SNS が警報を中継"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Malaysian Red Crescent Society (MRCS), MERCY Malaysia and other Rakan NADMA partners" : "マレーシア赤新月社（MRCS）、MERCY Malaysia などの Rakan NADMA パートナー"}</td>
                  <td className={TD}>{en ? "Non-governmental" : "非政府組織"}</td>
                  <td className={TD}>{en ? "Rakan NADMA partner registry" : "Rakan NADMA パートナー登録"}</td>
                  <td className={TD}>{en ? "Support JKM in running PPS; MRCS embedded with PKOB at district level in 2024; community-based disaster risk management (CBDRM) facilitation" : "PPS 運営で JKM を支援。2024年には MRCS が郡レベルの PKOB に常駐。コミュニティ防災（CBDRM）の推進"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Local authorities (Pihak Berkuasa Tempatan, PBT)" : "地方自治体（Pihak Berkuasa Tempatan、PBT）"}</td>
                  <td className={TD}>{en ? "State governments" : "州政府"}</td>
                  <td className={TD}>{en ? "Local Government Act 1976; Street, Drainage and Building Act 1974" : "1976年地方政府法、1974年街路・排水・建築法"}</td>
                  <td className={TD}>{en ? "Drainage maintenance and land-use control rather than warning; the Batang Kali landslide exposed the absence of campsite licensing, and the 2026 judgment confirmed an independent drainage duty" : "警報ではなく排水維持と土地利用規制。バタンカリ地すべりではキャンプ場許可制度の不在が露呈し、2026年判決は排水の独立義務を確認"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                <strong className="text-foreground">MetMalaysia</strong>{" "}
                (Jabatan Meteorologi Malaysia; Malaysian Meteorological
                Department), formed on 1 September 1946 and now under NRES,
                covers the monitoring and forecasting pillar for weather and
                geophysical hazards. Its continuous-rain warning has three
                categories, Waspada (yellow), Buruk (orange) and Bahaya
                (red), defined in words rather than in rainfall amounts; its
                strong wind and rough sea warning has three numeric levels;
                and its National Earthquake and Tsunami Operations Centre runs
                the Malaysian National Tsunami Early Warning System around the
                clock with 80 domestic and 323 international seismic stations,
                issuing warnings within eight minutes of detection with a
                target of six minutes by 2026. The department is adding
                artificial intelligence and big data to a Multi-Hazard Early
                Warning System and supports the WMO Early Warnings for All
                initiative. Its weakness, exposed in December 2021 and
                confirmed by the High Court in September 2026, lies in the
                discretionary escalation between categories: the red warning
                for Kuala Lumpur and most of Selangor was issued at 2 pm on
                18 December 2021, the day the flooding began.
              </>
            ) : (
              <>
                <strong className="text-foreground">MetMalaysia</strong>
                （Jabatan Meteorologi
                Malaysia、マレーシア気象局）は1946年9月1日に発足し、現在は NRES
                の下で気象・地球物理ハザードの監視・予測の柱を担います。連続降雨警報は
                Waspada（黄）・Buruk（橙）・Bahaya（赤）の3区分で、雨量ではなく文言で定義されています。強風・高波警報は数値基準をもつ3段階です。国家地震津波運用センターはマレーシア国家津波早期警報システムを24時間運用し、国内80か所・国際323か所の地震観測点を使って検知から8分以内（2026年までに6分が目標）に警報を発します。同局はマルチハザード早期警報システムに
                AI とビッグデータを導入中で、WMO の Early Warnings for All
                を支持しています。弱点は区分間の引き上げが裁量に委ねられている点にあり、2021年12月にはクアラルンプールとセランゴール州の大部分に対する赤警報が、浸水が始まった12月18日の午後2時に発表されました。この点は2026年9月の高裁判決でも確認されています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">JPS</strong> (Jabatan
                Pengairan dan Saliran; Department of Irrigation and Drainage),
                under PETRA since the ministry was formed on 12 December 2023,
                is the lead agency for flood forecasting and warning to the
                public. Its National Flood Forecasting and Warning Centre
                (PRABN) runs the PRAB programme, which extended monsoon flood
                forecasts from one day to seven days and warnings from
                six-hourly to two days ahead; Phase 1 covered the Kelantan,
                Terengganu and Pahang rivers and later phases are extending
                coverage, with completion planned for 2030. The InfoBanjir
                service dates from August 2002 and its public website from 1
                November 2011; in 2019 the network comprised 233 telemetric
                rain stations, 190 telemetric water-level stations, 84
                warning boards and 217 flood sirens. Flash-flood readiness
                notices draw on MetMalaysia rainfall forecasts, the Southeast
                Asia-Oceania Flash Flood Guidance System and the JPS model.
                JPS passes all flood information to NADMA for operational
                coordination at state and district level; in the 2022/23
                season it issued 32 two-day warning bulletins, 63 water-level
                forecasts, 27 flash-flood notices and 36 flood hazard maps.
              </>
            ) : (
              <>
                <strong className="text-foreground">JPS</strong>（Jabatan
                Pengairan dan
                Saliran、灌漑排水局）は、2023年12月12日に発足した PETRA
                の下にあり、公衆向け洪水予測・警報の主管機関です。国家洪水予測警報センター（PRABN）が運用する
                PRAB
                プログラムは、モンスーン洪水の予測を1日前から7日前へ、警報を6時間ごとから2日前へと延長しました。第1期はクランタン川・トレンガヌ川・パハン川を対象とし、後続の段階で対象流域を拡大して2030年の完了を予定しています。InfoBanjir
                は2002年8月に始まり、公開ウェブサイトは2011年11月1日に開設されました。2019年時点の観測網はテレメトリ雨量観測点233か所、水位観測点190か所、警報掲示板84基、洪水サイレン217基でした。鉄砲水注意情報は
                MetMalaysia
                の降雨予測、東南アジア・オセアニア鉄砲水ガイダンスシステム（SAOFFGS）、JPS
                のモデルに基づきます。JPS はすべての洪水情報を州・郡レベルの運用調整のために
                NADMA
                へ渡しており、2022/23年シーズンには2日前警報32件、水位予測63件、鉄砲水注意情報27件、洪水ハザードマップ36件を発表しました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">NADMA</strong> and the
                three-tier committees occupy the dissemination and response
                pillars. NADMA, which began operations on 1 October 2015 after
                Cabinet separated disaster management from MKN and merged it
                with the Post-Flood Recovery Unit, is the national and
                international focal point, the secretariat of the central
                committee (JPBP) and the operator of the National Disaster
                Command Centre (NDCC), which the Strategic Plan 2024-2028
                designates as the central-level PKOB and national disaster
                data hub. It advises the committee chairs to act before an
                event becomes harder to manage, issues postcode-based SMS
                warnings, and controls the National Disaster Relief Trust
                Fund (KWABBN) and the RM1,000 Bantuan Wang Ihsan payment to
                affected households. It does not forecast and has no offices
                at state or district level. Operational decisions belong to
                the committees: the state committee (JPBN) chaired by the
                State Secretary and the district committee (JPBD) chaired by
                the District Officer, both with APM as secretariat since
                September 2015, decide on PKOB activation, PPS opening and
                evacuation. The MPBN approved by Cabinet on 8 April 2026 adds a
                political layer of state heads of government above these
                civil-servant-chaired committees, with NADMA as secretariat.
              </>
            ) : (
              <>
                <strong className="text-foreground">NADMA</strong>
                と三層の委員会は伝達と対応の柱を担います。NADMA
                は、閣議が災害管理を MKN
                から分離して洪水復興ユニットと統合した後、2015年10月1日に業務を開始しました。国内外の中核機関、中央委員会（JPBP）の事務局、国家災害指令センター（NDCC）の運営主体であり、戦略計画
                2024〜2028 は NDCC
                を中央レベルの PKOB かつ国家の災害データハブと位置づけています。事案が管理困難になる前に行動するよう委員長に助言し、郵便番号ベースの
                SMS 警報を発信し、国家災害救援信託基金（KWABBN）と被災世帯向け1,000リンギットの
                Bantuan Wang Ihsan
                を管理します。一方で予測機能は持たず、州・郡に事務所もありません。運用上の決定は委員会に属し、州政府書記官が委員長の州委員会（JPBN）と郡長が委員長の郡委員会（JPBD）が、2015年9月以降
                APM を事務局として、PKOB の起動、PPS
                の開設、避難を決定します。2026年4月8日に閣議承認された MPBN
                は、公務員が委員長を務めるこれらの委員会の上に州首相級の政治的な層を加えるもので、事務局は
                NADMA です。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The response pillar on the ground is held by the security
                forces and the welfare department. Under Directive 20 the{" "}
                <strong className="text-foreground">District Police Chief</strong>{" "}
                is the Disaster Operations Commander (the State Police Chief at
                Level II and the PDRM Director of Internal Security and Public
                Order at Level III); JBPM collects information and advises the
                police on evacuation; RELA assists with evacuation; APM backs
                up the evacuation centres; SMART, created by MKN Directive No.
                19 in 1995 and now part of NADMA, provides specialised search
                and rescue; and the armed forces are deployed on request. JKM
                prepares and maintains the PPS, of which 8,940 with a capacity
                of 2.17 million people were registered nationwide before MTL
                2025/26, and publishes evacuee figures through Info Bencana.
                The Malaysian Red Crescent supports JKM in the centres and was
                embedded with district PKOB in 2024, MERCY Malaysia issued a
                CBDRM facilitator guideline in 2026, and NADMA reports that
                its own CBDRM programme reached about 44,000 people in 2024
                while a school module with UNICEF and the Education Ministry
                targets about 7,800 primary schools.
              </>
            ) : (
              <>
                現場の対応の柱は治安部隊と福祉部門が担います。指令第20号では
                <strong className="text-foreground">郡警察署長</strong>
                が災害活動指揮官（レベル II では州警察長官、レベル III では PDRM
                国内治安局長）となり、JBPM が情報を収集して避難について警察に助言し、RELA
                が避難を支援し、APM が避難所を後方支援します。1995年の MKN
                指令第19号で創設され現在は NADMA に属する SMART
                が専門的な捜索救助を行い、国軍は要請に応じて展開します。JKM は PPS
                を準備・維持し、MTL 2025/26
                前には全国8,940か所・収容能力217万人が登録され、避難者数は Info Bencana
                で公表されます。マレーシア赤新月社は避難所で JKM を支援し、2024年には郡
                PKOB に常駐しました。MERCY Malaysia は2026年に CBDRM
                実施ガイドラインを発行し、NADMA は自らの CBDRM
                プログラムが2024年に約44,000人に達したこと、UNICEF
                および教育省との学校防災モジュールが約7,800の小学校を対象とすることを報告しています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Risk knowledge for slopes and air quality sits with three
                further bodies. The{" "}
                <strong className="text-foreground">JKR Slope Engineering Branch</strong>{" "}
                has inventoried 34,544 slopes nationwide, of which more than
                1,000 are high risk, and operates a landslide early warning
                system on federal-road slopes whose alerts go to its
                monitoring room and to district and state JKR offices; no
                public-facing landslide warning channel has been described.{" "}
                <strong className="text-foreground">JMG</strong> keeps a
                separate critical-slope list focused on settlements and
                natural slopes and published 31 landslide hotspots in December
                2022. <strong className="text-foreground">DOE</strong>{" "}
                publishes the Air Pollutant Index on which haze measures
                depend. On the communication side,{" "}
                <strong className="text-foreground">MCMC</strong> and the
                mobile operators carry the NADMA SMS alerts and are building
                the cell broadcast system, while Directive 20 restricts press
                statements to committee chairs and the operations commander,
                a rule the Deputy Prime Minister restated in January 2026 when
                he called for crisis information to come from a single source.
              </>
            ) : (
              <>
                斜面と大気質に関するリスク知識は、さらに三つの機関が担います。
                <strong className="text-foreground">JKR 斜面工学部</strong>
                は全国34,544か所の斜面を台帳化し、そのうち1,000か所超を高リスクとして、連邦道路の斜面に地すべり早期警報システムを運用しています。その警報は同部の監視室と郡・州の
                JKR 事務所に送られ、公衆向けの地すべり警報チャネルは説明されていません。
                <strong className="text-foreground">JMG</strong>
                は集落と自然斜面を対象とする別の重要斜面リストを保持し、2022年12月に31か所の地すべりホットスポットを公表しました。
                <strong className="text-foreground">DOE</strong>
                は煙霧対策の根拠となる大気汚染指数を公表します。伝達面では
                <strong className="text-foreground">MCMC</strong>
                と携帯通信事業者が NADMA の SMS
                警報を送信し、セルブロードキャストを構築中です。指令第20号は報道対応を委員長と活動指揮官に限定しており、副首相は2026年1月に危機情報は単一の情報源から出るべきだと述べてこの原則を再確認しました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Sabah and Sarawak operate the same committee structure: their
                state committees reported evacuee figures through their
                secretariats in the floods of early 2025, and the Premier of
                Sarawak is a permanent member of the MPBN. Whether either
                state has a state ordinance or enactment establishing its own
                disaster management body is not confirmed.
              </>
            ) : (
              <>
                サバ州とサラワク州も同じ委員会構造で運用されており、2025年初めの洪水では両州の州委員会が事務局を通じて避難者数を報告し、サラワク州プレミアは
                MPBN
                の常任メンバーです。両州が独自の災害管理機関を設置する州法（Ordinance／Enactment）を持つかどうかは確認されていません。
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
                The chain for a monsoon flood, as described by the Deputy
                Prime Minister in a written parliamentary reply of November
                2025 and in the NADMA mechanism slides of June 2024, runs from
                the two technical agencies through NADMA to the committees
                and then to the household. It has no published standard
                operating procedure: the Strategic Plan 2024-2028 lists the
                creation of a procedure for early warning dissemination as a
                future action.
              </>
            ) : (
              <>
                モンスーン洪水の場合の流れは、2025年11月の副首相の書面答弁と2024年6月の
                NADMA
                メカニズム資料によれば、二つの技術機関から NADMA
                を経て委員会へ、そして世帯へと進みます。公表された標準作業手順はなく、戦略計画
                2024〜2028 は早期警報伝達手順の策定を今後の行動として挙げています。
              </>
            )}
          </p>
          <ol className={OL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Meteorological warning.</strong>{" "}
                  MetMalaysia issues a continuous-rain warning one to three
                  days ahead, escalating from Waspada to Buruk to Bahaya, and
                  the Director-General relays it to NADMA and the Deputy Prime
                  Minister so that residents can prepare to move at least
                  three days before the event (government description,
                  October 2026).
                </>
              ) : (
                <>
                  <strong className="text-foreground">気象警報。</strong>
                  MetMalaysia が1〜3日前に連続降雨警報を発表し、Waspada から Buruk、Bahaya
                  へと引き上げます。局長は警報を NADMA
                  と副首相に伝え、住民が少なくとも3日前に移動の準備ができるようにします（2026年10月の政府説明）。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Hydrological forecast and river alerts.</strong>{" "}
                  PRABN of JPS combines telemetry with the MetMalaysia
                  forecast to issue seven-day flood forecasts and two-day
                  warning bulletins; each InfoBanjir station shows Normal,
                  Waspada, Amaran or Bahaya; sirens are sounded in at-risk
                  areas; flash-flood readiness notices are issued where
                  guidance indicates.
                </>
              ) : (
                <>
                  <strong className="text-foreground">水文予測と河川警戒。</strong>
                  JPS の PRABN がテレメトリと MetMalaysia
                  の予測を組み合わせて7日先の洪水予測と2日前の警報ブレティンを発表し、InfoBanjir
                  の各観測点は Normal・Waspada・Amaran・Bahaya
                  を表示します。危険地域ではサイレンが鳴らされ、ガイダンスが示す場合には鉄砲水注意情報が出されます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Integration and relay by NADMA.</strong>{" "}
                  The NDCC integrates both feeds, advises the committee
                  chairs, and sends postcode-based SMS alerts through MCMC and
                  the operators; from the pilot of 19 November 2026 the cell
                  broadcast system is to carry NADMA-triggered alerts.
                </>
              ) : (
                <>
                  <strong className="text-foreground">NADMA による統合と中継。</strong>
                  NDCC が両機関の情報を統合し、委員長に助言し、MCMC
                  と通信事業者を通じて郵便番号ベースの SMS
                  警報を送信します。2026年11月19日の試験配信以降は、セルブロードキャストが
                  NADMA 発動の警報を運ぶ予定です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Committee decision.</strong>{" "}
                  When an incident occurs the commander opens an on-scene
                  control post (PKTK); the level is evaluated and the
                  committee secretariat (APM) activates the PKOB; the district
                  PKOB reports to the state PKOB and onward to the central
                  PKOB, and agencies post liaison officers. The committee
                  decides to open PPS and to evacuate.
                </>
              ) : (
                <>
                  <strong className="text-foreground">委員会の決定。</strong>
                  事案が発生すると指揮官が現場管制ポスト（PKTK）を開設し、レベルが評価され、委員会事務局（APM）が
                  PKOB を起動します。郡 PKOB は州 PKOB へ、さらに中央 PKOB
                  へ報告し、各機関は連絡官を配置します。委員会が PPS
                  の開設と避難を決定します。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Execution on the ground.</strong>{" "}
                  The police-led commander directs evacuation with JBPM
                  advice; APM, RELA and the armed forces move people; JKM
                  opens and runs the PPS; MRCS and other partners support.
                </>
              ) : (
                <>
                  <strong className="text-foreground">現場での実行。</strong>
                  警察主導の指揮官が JBPM の助言を受けて避難を指揮し、APM・RELA・国軍が住民を移動させ、JKM
                  が PPS を開設・運営し、MRCS などのパートナーが支援します。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Reaching the household.</strong>{" "}
                  Residents receive SMS, the myCuaca app (version 3.0 of 13
                  October 2026 adds location-based warning notifications),
                  InfoBanjir, the NADMA Portal Bencana, JKM Info Bencana, RTM
                  and other mass media, and social media; in coastal areas
                  tsunami sirens and the Fixed-Line Alert System are used.
                </>
              ) : (
                <>
                  <strong className="text-foreground">世帯への到達。</strong>
                  住民は SMS、myCuaca
                  アプリ（2026年10月13日の版3.0で位置情報に基づく警報通知を追加）、InfoBanjir、NADMA
                  の Portal Bencana、JKM の Info Bencana、RTM
                  などの報道機関、SNS を通じて情報を受け取ります。沿岸部では津波サイレンと固定電話警報システム（FLAS）が使われます。
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
                  <td className={TDH}>{en ? "Continuous rain" : "連続降雨"}</td>
                  <td className={TD}>MetMalaysia</td>
                  <td className={TD}>{en ? "Waspada / Alert (yellow): continuous rain expected within one to three days or to continue; Buruk / Severe (orange): continuous heavy rain expected; Bahaya / Danger (red): continuous torrential rain expected. No rainfall thresholds published." : "Waspada／Alert（黄）：1〜3日以内に連続降雨が予想されるか現在の雨が続く見込み。Buruk／Severe（橙）：連続した強い雨が予想される。Bahaya／Danger（赤）：連続した猛烈な雨が予想される。雨量の閾値は非公表。"}</td>
                  <td className={TD}>{en ? "met.gov.my, myCuaca, social media, hotline 1-300-22-1638; relayed by NADMA SMS and the media" : "met.gov.my、myCuaca、SNS、ホットライン 1-300-22-1638。NADMA の SMS と報道機関が中継"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Strong wind and rough sea" : "強風・高波"}</td>
                  <td className={TD}>MetMalaysia</td>
                  <td className={TD}>{en ? "Three levels: 40–50 km/h and/or waves to 3.5 m; 50–60 km/h and/or to 4.5 m; above 60 km/h and/or above 4.5 m" : "3段階：風速40〜50 km/h または波高3.5 m まで、50〜60 km/h または4.5 m まで、60 km/h 超または4.5 m 超"}</td>
                  <td className={TD}>{en ? "Same as above" : "同上"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "River flood" : "河川洪水"}</td>
                  <td className={TD}>{en ? "JPS (PRABN and InfoBanjir)" : "JPS（PRABN と InfoBanjir）"}</td>
                  <td className={TD}>{en ? "Station status Normal / Waspada (Alert) / Amaran (Warning) / Bahaya (Danger); rainfall classes Renyai 1–10 mm, Sederhana 11–30 mm, Lebat 31–60 mm, Sangat Lebat above 60 mm; PRABN seven-day forecasts and two-day warning bulletins" : "観測点ステータス Normal／Waspada（警戒）／Amaran（警報）／Bahaya（危険）。雨量区分 Renyai 1〜10 mm、Sederhana 11〜30 mm、Lebat 31〜60 mm、Sangat Lebat 60 mm 超。PRABN の7日予測と2日前警報ブレティン"}</td>
                  <td className={TD}>{en ? "Public InfoBanjir portal, JPS social media, flood sirens and warning boards in at-risk areas; information passed to NADMA" : "Public InfoBanjir ポータル、JPS の SNS、危険地域の洪水サイレンと警報掲示板。情報は NADMA へ"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Flash flood" : "鉄砲水"}</td>
                  <td className={TD}>{en ? "JPS (PRABN); MetMalaysia thunderstorm warnings" : "JPS（PRABN）、MetMalaysia の雷雨警報"}</td>
                  <td className={TD}>{en ? "Flash-flood readiness notices based on MetMalaysia forecasts, SAOFFGS and the JPS model; no dedicated urban flash-flood siren scheme documented for the Klang Valley" : "MetMalaysia の予測、SAOFFGS、JPS モデルに基づく鉄砲水注意情報。クランバレー向けの専用サイレン体系は確認されていない"}</td>
                  <td className={TD}>{en ? "InfoBanjir, social media" : "InfoBanjir、SNS"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Landslide" : "地すべり"}</td>
                  <td className={TD}>{en ? "JKR Slope Engineering Branch; JMG" : "JKR 斜面工学部、JMG"}</td>
                  <td className={TD}>{en ? "Threshold-based alerts from 73 telemetric rain gauges and slope sensors (BiGBen system), leading to road closures; JMG critical-slope list" : "73か所のテレメトリ雨量計と斜面センサーによる閾値警報（BiGBen システム）に基づく道路閉鎖。JMG の重要斜面リスト"}</td>
                  <td className={TD}>{en ? "Internal to JKR monitoring room and district and state offices; no public channel described" : "JKR の監視室と郡・州事務所の内部伝達。公衆向けチャネルの記述なし"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Earthquake and tsunami" : "地震・津波"}</td>
                  <td className={TD}>{en ? "MetMalaysia National Earthquake and Tsunami Operations Centre" : "MetMalaysia 国家地震津波運用センター"}</td>
                  <td className={TD}>{en ? "Warning within eight minutes of detection (target six minutes by 2026); partners PTWC, South China Sea Tsunami Advisory Centre and IOTWMS" : "検知から8分以内に警報（2026年までに6分が目標）。PTWC、南シナ海津波助言センター、IOTWMS と連携"}</td>
                  <td className={TD}>{en ? "Coastal sirens (83 reported in March 2025, with periodic tests), Fixed-Line Alert System, SMS to response agencies and media" : "沿岸サイレン（2025年3月時点で83基と報道、定期試験あり）、固定電話警報システム、対応機関と報道機関への SMS"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Haze" : "煙霧（ヘイズ）"}</td>
                  <td className={TD}>DOE</td>
                  <td className={TD}>{en ? "Air Pollutant Index: 0–50 Good, 51–100 Moderate, 101–200 Unhealthy, 201–300 Very Unhealthy, 301–500 Hazardous; above 500 a state of emergency is declared for the reporting area" : "大気汚染指数：0〜50 良好、51〜100 中程度、101〜200 不健康、201〜300 非常に不健康、301〜500 危険。500 超で当該地域に緊急事態を宣言"}</td>
                  <td className={TD}>{en ? "APIMS portal; NADMA coordinates state action" : "APIMS ポータル。州の対応は NADMA が調整"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Disaster level (all hazards)" : "災害レベル（全ハザード）"}</td>
                  <td className={TD}>{en ? "Managing committee (JPBD / JPBN / JPBP)" : "管理する委員会（JPBD／JPBN／JPBP）"}</td>
                  <td className={TD}>{en ? "Level I local, within district capacity; Level II wider than two districts, state authority; Level III complex, wider than two states, central authority; disaster declared by the Prime Minister" : "レベル I：郡で対処可能な局地的事案。レベル II：2郡を超え州が対処。レベル III：2州を超える複合事案で中央が対処。災害宣言は首相"}</td>
                  <td className={TD}>{en ? "PKOB activation, press statements by chair or commander only" : "PKOB の起動、報道対応は委員長または指揮官に限定"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                The dissemination layer is in transition. The SMS alerts
                issued by NADMA through the operators are queued and therefore
                delayed, as the Deputy Communications Minister acknowledged in
                August 2025, even though more than 8.6 million were sent in
                MTL 2024/25. A cell broadcast system developed by MCMC, in
                which NADMA issues the alert and MCMC transmits it directly to
                handsets in a target area, was announced in August 2025,
                described in November 2025 as the replacement for SMS, called
                &ldquo;in its final phase&rdquo; in October 2026, and is to be
                tested on 19 November 2026 in high-risk flood areas of
                Selangor, Kuala Lumpur, Kelantan and Pahang; MCMC has still to
                define the alert levels (advisory, warning, mandatory
                evacuation) and accessibility features, and no launch date,
                cost or legal basis has been published. The warning categories
                themselves are agency-specific and not harmonised: three
                colour categories without numeric criteria at MetMalaysia,
                four station classes at JPS, internal slope alerts at JKR and
                six air-quality bands at DOE. No Common Alerting Protocol
                layer or national Early Warnings for All roadmap has been
                published, although the government states its support for the
                initiative, and impact-based forecasting is being developed
                by MetMalaysia, JPS and NADMA with the UK Met Office under the
                Weather and Climate Science for Service Partnership Southeast
                Asia.
              </>
            ) : (
              <>
                伝達層は移行期にあります。NADMA が通信事業者を通じて発信する SMS
                警報は送信待ち行列により遅延し、MTL 2024/25
                で860万件超が送信されたとはいえ、2025年8月に通信副大臣がこの遅れを認めました。MCMC
                が開発するセルブロードキャストは、NADMA が警報を発し MCMC
                が対象地域の端末へ直接送信する仕組みで、2025年8月に発表、2025年11月に
                SMS
                の代替と位置づけられ、2026年10月には「最終段階」とされ、2026年11月19日にセランゴール州・クアラルンプール・クランタン州・パハン州の洪水高リスク地域で試験配信が予定されています。MCMC
                は警報レベル（注意・警報・強制避難）とアクセシビリティをまだ定義しておらず、本格運用日・費用・法的根拠は公表されていません。警報区分そのものも機関ごとに異なり統一されていません。MetMalaysia
                は数値基準のない3色区分、JPS は4段階の観測点区分、JKR は内部の斜面警報、DOE
                は6段階の大気質区分です。共通警報プロトコル（CAP）層や Early Warnings
                for All
                の国家ロードマップは公表されていませんが、政府は同イニシアティブへの支持を表明しており、影響予測型予報は英国気象庁との
                WCSSP 東南アジアの枠組みで MetMalaysia・JPS・NADMA が開発中です。
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
                  <strong className="text-foreground">19 January 2022 —</strong>{" "}
                  After the December 2021 floods, Prime Minister Ismail Sabri
                  told a special parliamentary sitting that he had ordered
                  NADMA to accelerate the drafting of a Disaster Management
                  Act, to speed up Phase 2 of the flood forecasting programme
                  and to improve public dissemination through WhatsApp and
                  push notifications with the telecommunication companies;
                  this is the formal start of the still-unfinished legislative
                  process.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2022年1月19日 —</strong>
                  2021年12月の洪水を受け、イスマイル・サブリ首相は特別議会で NADMA
                  に災害管理法の起草加速、洪水予測プログラム第2期の前倒し、通信事業者と協力した
                  WhatsApp
                  やプッシュ通知による伝達改善を指示したと述べました。現在も未完の立法過程の正式な出発点です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">3 February 2022 —</strong>{" "}
                  The central committee chaired by the Prime Minister adopted
                  eight strategic thrusts (policy and legal empowerment, DRR,
                  coordination, digitalisation, crisis communication, civil
                  society) and recommended that ministries earmark 5% of
                  operating and development expenditure for disaster
                  management, after diagnosing three weaknesses: poor
                  understanding of Directive 20, the absence of NADMA at state
                  and district level, and conventional information management.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2022年2月3日 —</strong>
                  首相が議長の中央委員会は、指令第20号の理解不足、州・郡レベルにおける
                  NADMA
                  の不在、旧来型の情報管理という三つの弱点を診断したうえで、政策・法的基盤の強化、災害リスク削減、調整、デジタル化、危機コミュニケーション、市民社会の8つの戦略的推進軸を採択し、各省庁に経常・開発支出の5%を災害管理に充てるよう勧告しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">October 2022 —</strong>{" "}
                  JPS announced the expansion of the national flood
                  forecasting and warning system beyond the three Phase 1
                  rivers to the remaining river basins of the peninsula,
                  Sabah and Sarawak by 2030; the number of basins quoted in
                  official statements has varied.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2022年10月 —</strong>
                  JPS は国家洪水予測警報システムを第1期の3河川から半島・サバ・サラワクの残る流域へ2030年までに拡大すると発表しました。公式発表で言及される流域数は一定していません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">16 December 2022 —</strong>{" "}
                  The Batang Kali landslide killed 31 people at a campsite
                  that was on neither the JKR federal-road monitoring network
                  nor the JMG critical-slope list; the federal government
                  ordered all 155 local councils to vacate campsites near
                  rivers and hills for seven days, Selangor drafted campsite
                  guidelines where no permit category had existed, JBPM
                  installed soil-movement sensors, and the Works Ministry
                  forensic report of October 2023 found natural causes.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2022年12月16日 —</strong>
                  バタンカリの地すべりで31人が死亡しました。現場のキャンプ場は JKR
                  の連邦道路監視網にも JMG
                  の重要斜面リストにも含まれていませんでした。連邦政府は全155地方議会に河川・丘陵近くのキャンプ場を7日間閉鎖するよう命じ、セランゴール州は許可区分が存在しなかったキャンプ場のガイドラインを起草し、JBPM
                  は地盤変位センサーを設置し、2023年10月の公共事業省の法科学的報告は自然要因と結論しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">November 2023 and 20 March 2024 —</strong>{" "}
                  The Auditor-General report for 2022 and the Public Accounts
                  Committee examined the PRAB programme: the PAC concluded
                  that the RM129 million Phase 1 was not worth the money,
                  citing installation delays of 1,829 to 1,836 days, a 3G to
                  4G migration that halted data transmission for more than
                  three months, a contract without penalty clause and
                  outdated warning channels, while Phase 2 costs had risen
                  from RM385 million to RM522 million; the audit made the
                  accuracy of forecasts a public accountability issue.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2023年11月および2024年3月20日 —</strong>
                  2022年度会計検査報告と下院公会計委員会（PAC）が PRAB
                  プログラムを審査しました。PAC
                  は1億2,900万リンギットの第1期を「費用に見合わない」と結論し、1,829〜1,836日の設置遅延、3か月以上データ送信を停止させた
                  3G から 4G
                  への移行、違約条項のない契約、旧式の警報チャネルを指摘し、第2期費用が3億8,500万から5億2,200万リンギットに増加したことも明らかにしました。予測精度が公的な説明責任の問題になった契機です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">7 May 2024 —</strong>{" "}
                  The Deputy Prime Minister announced that NADMA was in the
                  final stage of reviewing Directive 20, would run a needs
                  study for a Disaster Risk Reduction Act, and would spend RM5
                  million from the KWABBN fund on community-based DRR; this
                  set the sequence of directive first, statute later.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年5月7日 —</strong>
                  副首相は、NADMA
                  が指令第20号の見直しの最終段階にあり、災害リスク削減法の必要性調査を行い、KWABBN
                  基金から500万リンギットをコミュニティ防災に充てると発表しました。指令を先に、法律を後に、という順序が定まった時点です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">1 August 2024 —</strong>{" "}
                  The MKN meeting chaired by the Prime Minister approved NADMA
                  Directive No. 1, cancelling and replacing Directive 20
                  (Semakan Semula 2012); the directive is now owned by NADMA
                  rather than MKN, but its legal character as an executive
                  instrument is unchanged.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年8月1日 —</strong>
                  首相が議長の MKN 会議が NADMA
                  指令第1号を承認し、指令第20号（2012年改訂版）を廃止・置換しました。指令の所管は
                  MKN から NADMA に移りましたが、行政指令という法的性格は変わっていません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">25 September 2024 —</strong>{" "}
                  Cabinet approved the National Disaster Risk Reduction Policy
                  2030 (DPRB 2030), prepared since March 2021 with SEADPRI-UKM,
                  with six targets including wider availability of
                  multi-hazard early warning; it was presented at the
                  Asia-Pacific Ministerial Conference in Manila in October
                  2024 and the Global Platform in Geneva in June 2025, and in
                  October 2026 the Deputy Prime Minister urged every state to
                  translate it into risk-based action plans.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年9月25日 —</strong>
                  閣議が国家災害リスク削減政策2030（DPRB 2030）を承認しました。2021年3月から
                  SEADPRI-UKM
                  と準備されたもので、マルチハザード早期警報の普及を含む6目標を掲げます。2024年10月のマニラでのアジア太平洋閣僚会議と2025年6月のジュネーブでのグローバルプラットフォームで発表され、2026年10月には副首相が各州にリスクに基づく行動計画への具体化を求めました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">November&ndash;December 2024 —</strong>{" "}
                  The east-coast floods, with more than 235,000 people in
                  evacuation centres at the peak, tested the revised
                  mechanism; the Prime Minister praised improved coordination
                  on 28 November, while the IFRC recorded water rising within
                  an hour instead of the usual two to three hours, overcrowded
                  centres and elderly residents unwilling to move.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年11〜12月 —</strong>
                  ピーク時に23万5,000人超が避難所に入った東海岸の洪水は、改訂されたメカニズムの試金石となりました。首相は11月28日に調整の改善を称賛しましたが、IFRC
                  は通常2〜3時間かかる水位上昇が1時間以内に生じたこと、避難所の過密、移動を望まない高齢者を記録しています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">24 February and 10 March 2025 —</strong>{" "}
                  The central committee meeting in Kota Kinabalu approved a
                  permanent evacuation centre at Long Busang in Belaga and 24
                  flood-mitigation projects for Sabah and Sarawak, and the
                  Prime Minister ordered NADMA to enhance federal&ndash;state
                  coordination for the two states after floods affected 9,735
                  people in Sabah and 16,670 in Sarawak.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年2月24日・3月10日 —</strong>
                  コタキナバルで開かれた中央委員会はブラガのロンブサンに常設避難所を、サバ・サラワク両州に計24件の洪水対策事業を承認し、首相はサバ州で9,735人、サラワク州で16,670人が被災した洪水の後、NADMA
                  に両州との連邦・州調整の強化を命じました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">August and November 2025 —</strong>{" "}
                  MCMC announced a location-based cell broadcast alert system
                  to bypass the SMS queues, with funding proposed under Budget
                  2026, and the Deputy Prime Minister confirmed that the
                  NADMA&ndash;MCMC system would replace SMS warnings; the
                  last mile became a federal technology programme with NADMA
                  as the trigger.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年8月・11月 —</strong>
                  MCMC は SMS
                  の待ち行列を回避する位置情報ベースのセルブロードキャスト警報を発表し、2026年度予算での資金措置を提案しました。副首相は
                  NADMA と MCMC のシステムが SMS 警報を置き換えると確認し、ラストマイルは
                  NADMA を発動主体とする連邦の技術プログラムとなりました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">8 January and 8 April 2026 —</strong>{" "}
                  The Deputy Prime Minister proposed, and Cabinet approved,
                  the National Disaster Management Council (MPBN) with all
                  Menteri Besar, Chief Ministers and the Premier of Sarawak as
                  permanent members and NADMA as secretariat, to take faster
                  strategic decisions, close gaps between federal and state
                  governments and shift from reactive response to
                  preparedness; it is the first body that brings elected state
                  heads of government into the mechanism.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年1月8日・4月8日 —</strong>
                  副首相が提案し閣議が承認した国家災害管理評議会（MPBN）は、全州の州首相とサラワク州プレミアを常任メンバー、NADMA
                  を事務局とし、迅速な戦略的決定、連邦と州の隙間の解消、事後対応から事前準備への転換を目的とします。選挙で選ばれた州首相を初めてメカニズムに組み込む機関です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">18 September 2026 —</strong>{" "}
                  The first meeting of the High-Level Committee on National
                  Disaster Management for 2026 was held, and NADMA piloted a
                  national disaster management inspectorate in Kelantan,
                  Terengganu and Pahang on 28&ndash;30 October 2026 ahead of
                  MTL 2026/27, implementing the Strategic Plan 2024-2028
                  action to strengthen an inspectorate mechanism.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年9月18日 —</strong>
                  国家災害管理に関するハイレベル委員会の2026年第1回会合が開かれ、NADMA
                  は戦略計画 2024〜2028 の査察機構強化の行動として、MTL 2026/27
                  に先立ち2026年10月28〜30日にクランタン・トレンガヌ・パハンの3州で国家災害管理査察を試行しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">29 September 2026 —</strong>{" "}
                  The Shah Alam High Court allowed the claims of 50 residents
                  of Taman Sri Muda over the December 2021 floods, finding
                  that NADMA failed to escalate the response, maintain a PKOB
                  and deploy SMART effectively and that MetMalaysia did not
                  issue timely warnings at the correct danger category despite
                  its own forecast benchmarks; the ruling turns Directive 20
                  duties into justiciable operational duties.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年9月29日 —</strong>
                  シャーアラム高等裁判所は2021年12月の洪水に関するタマンスリムダ住民50人の請求を認め、NADMA
                  が対応の格上げ、PKOB の維持、SMART
                  の効果的な投入を怠ったこと、MetMalaysia
                  が自らの予測基準にもかかわらず適切な危険区分で適時に警報を出さなかったことを認定しました。指令第20号の義務を司法審査の対象となる運用上の義務に転換した判決です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">October&ndash;November 2026 —</strong>{" "}
                  MetMalaysia launched myCuaca 3.0 with location-based
                  warnings on 13 October; the written parliamentary reply of
                  26 October put the Disaster Risk Reduction Act baseline
                  study at twelve more months with no tabling date; the Lahad
                  Datu district committee ran a tsunami exercise on 3&ndash;5
                  November evaluated under NADMA Directive No. 1; and the
                  cell broadcast pilot is scheduled for 19 November.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年10〜11月 —</strong>
                  MetMalaysia は10月13日に位置情報警報を備えた myCuaca 3.0
                  を公開し、10月26日の書面答弁は災害リスク削減法のベースライン調査にさらに12か月を要し提出時期は未定としました。ラハドダトゥ郡委員会は11月3〜5日に
                  NADMA
                  指令第1号に基づいて評価される津波演習を実施し、セルブロードキャストの試験配信は11月19日に予定されています。
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
                  <strong className="text-foreground">No statutory authority (structural).</strong>{" "}
                  NADMA rests on the Cabinet decision of 26 August 2015 and
                  the committees on an executive directive issued under
                  section 12 of the National Security Council Act 2016. The
                  disaster act ordered in January 2022 has not been tabled;
                  the parliamentary reply of 26 October 2026 gives the
                  baseline study another twelve months and no timeline for
                  the bill. The practical consequences are that no agency has
                  a legal duty to warn at a defined threshold, NADMA cannot
                  direct state or district actors except through advice to
                  committee chairs, and the cell broadcast system is being
                  built without a published legal basis under the
                  Communications and Multimedia Act 1998.
                </>
              ) : (
                <>
                  <strong className="text-foreground">法定権限の不在（構造的）。</strong>
                  NADMA は2015年8月26日の閣議決定に、委員会は2016年国家安全保障会議法第12条の下で発出された行政指令に依拠しています。2022年1月に指示された災害法は提出されておらず、2026年10月26日の議会答弁はベースライン調査にさらに12か月を要し、法案の時期は未定としています。実務上の帰結として、定められた閾値で警報を発する法的義務をもつ機関はなく、NADMA
                  は委員長への助言を通じてしか州・郡の関係者を動かせず、セルブロードキャストは1998年通信マルチメディア法上の公表された法的根拠なしに構築されています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Command gap below the federal level (structural).</strong>{" "}
                  The NADMA Strategic Plan states that the absence of NADMA at
                  state and district level makes direct coordination with
                  field agencies difficult. In December 2021 the armed forces
                  began rescues without the NADMA directive required by
                  protocol, and the Prime Minister handed response
                  coordination to MKN; the 2026 judgment found failure to
                  identify the correct disaster tier, delays in passing
                  information from district to state and no appointed liaison
                  officers. The MPBN of 2026 adds a political forum above the
                  committees but does not change their legal competences or
                  give NADMA a sub-national presence.
                </>
              ) : (
                <>
                  <strong className="text-foreground">連邦レベル以下の指揮の空白（構造的）。</strong>
                  NADMA の戦略計画は、州・郡レベルに NADMA
                  がないことが現場機関との直接の調整を難しくしていると明記しています。2021年12月には国軍が手順上必要な
                  NADMA の指示を待たずに救助を開始し、首相は対応調整を MKN
                  に移しました。2026年の判決は、適切な災害レベルの判定の失敗、郡から州への情報伝達の遅れ、連絡官の未配置を認定しています。2026年の
                  MPBN は委員会の上に政治的な場を加えますが、委員会の法的権限を変えるものでも、NADMA
                  に地方組織を与えるものでもありません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Discretionary warning categories (operational).</strong>{" "}
                  MetMalaysia publishes no rainfall thresholds for its three
                  categories, so escalation depends on forecaster judgement.
                  In December 2021 the red warning for Kuala Lumpur and most
                  of Selangor came at 2 pm on 18 December, the day of the
                  flooding, and academics said at the time that the alarm had
                  not been raised loudly enough and recommended a warning
                  system with clear action steps attached to each level. The
                  High Court concluded in September 2026 that MetMalaysia
                  failed to warn at the correct danger category despite its
                  own forecast benchmarks, which makes the absence of written
                  criteria a legal exposure as well as a technical one.
                </>
              ) : (
                <>
                  <strong className="text-foreground">裁量に委ねられた警報区分（運用的）。</strong>
                  MetMalaysia は3区分の雨量閾値を公表しておらず、引き上げは予報官の判断に依存します。2021年12月にはクアラルンプールとセランゴール州の大部分に対する赤警報が浸水当日の12月18日午後2時に発表され、研究者は当時、警報が十分に強く発せられなかったとして、各レベルに明確な行動を結びつけた警報体系を提案しました。高等裁判所は2026年9月、MetMalaysia
                  が自らの予測基準にもかかわらず適切な危険区分で警報を出さなかったと結論しており、文書化された基準の不在は技術的問題であるだけでなく法的なリスクになっています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Forecast reliability and procurement (structural and operational).</strong>{" "}
                  The Auditor-General report for 2022 was reported to have
                  found a flood-forecast accuracy of 5.6% for the first phase
                  of PRAB and an inability to warn two days ahead despite
                  RM145 million spent, and the PAC in March 2024 called the
                  RM129 million Phase 1 not worth the money, with installation
                  delays of about five years, a telecom migration that broke
                  telemetry for more than three months, no penalty clause and
                  only 39 of 118 remote terminal units upgraded to 4G. JPS
                  replied that it had issued 32 two-day bulletins in the
                  2022/23 season. The total cost of Phases 1 to 3 is put at
                  RM1.065 billion.
                </>
              ) : (
                <>
                  <strong className="text-foreground">予測の信頼性と調達（構造的・運用的）。</strong>
                  2022年度会計検査報告は PRAB
                  第1期の洪水予測精度を5.6%とし、1億4,500万リンギットを投じながら2日前の警報ができていないと指摘したと報じられ、PAC
                  は2024年3月に1億2,900万リンギットの第1期を「費用に見合わない」と評価しました。約5年の設置遅延、3か月以上テレメトリを止めた通信方式の移行、違約条項の欠如、118基の遠隔端末のうち
                  4G 化されたのは39基にとどまる点が挙げられています。JPS
                  は2022/23年シーズンに2日前ブレティンを32件発表したと反論しました。第1〜3期の総費用は10億6,500万リンギットとされています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">The last mile (operational).</strong>{" "}
                  Warnings reach households mainly by queued SMS and by four
                  separate portals and apps (MetMalaysia and myCuaca, JPS
                  InfoBanjir, NADMA Portal Bencana, JKM Info Bencana), which
                  the PAC called outdated channels in 2024 and which prompted
                  the Deputy Prime Minister in January 2026 to demand a single
                  source of crisis information. The cell broadcast
                  replacement will only be piloted on 19 November 2026 and
                  its alert levels are not yet defined. In 2024 some evacuees
                  sheltering in mosques were not registered and therefore
                  excluded from support, and in the Klang Valley flash floods
                  of 2&ndash;3 November 2026 residents of Shah Alam appealed
                  directly to the Prime Minister.
                </>
              ) : (
                <>
                  <strong className="text-foreground">ラストマイル（運用的）。</strong>
                  警報が世帯に届く主な経路は待ち行列に入る SMS と、MetMalaysia と
                  myCuaca、JPS の InfoBanjir、NADMA の Portal Bencana、JKM の Info
                  Bencana
                  という四つの別々のポータル・アプリです。PAC
                  は2024年にこれを旧式のチャネルと呼び、副首相は2026年1月に危機情報の単一の情報源を求めました。代替のセルブロードキャストは2026年11月19日にようやく試験配信され、警報レベルも未定義です。2024年にはモスクに避難した一部の住民が未登録のため支援から外れ、2026年11月2〜3日のクランバレーの鉄砲水ではシャーアラムの住民が首相に直接訴える事態となりました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Fast-onset floods outrunning the two-day bulletin (operational).</strong>{" "}
                  In November 2024 the IFRC recorded water levels rising
                  within an hour compared with the usual two to three hours,
                  forcing hasty evacuations despite early warnings issued
                  from 1 November; some PPS were overcrowded, 704 centres
                  were open at the peak, and elderly residents were unwilling
                  or unable to relocate. The PRAB lead times of seven days
                  for forecasts and two days for warnings are designed for
                  slow monsoon rises, and no dedicated flash-flood warning
                  arrangement for the Klang Valley beyond the JPS readiness
                  notices and MetMalaysia thunderstorm warnings has been
                  documented.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2日前ブレティンを追い越す急激な洪水（運用的）。</strong>
                  2024年11月、IFRC
                  は通常2〜3時間かかる水位上昇が1時間以内に起こり、11月1日から早期警報が出ていたにもかかわらず慌ただしい避難を強いたと記録しています。一部の
                  PPS
                  は過密となり、ピーク時には704か所が開設され、高齢者は移動を望まないか移動できませんでした。PRAB
                  の予測7日・警報2日というリードタイムは緩やかなモンスーン洪水を想定したもので、クランバレーの鉄砲水については
                  JPS の注意情報と MetMalaysia の雷雨警報以外に専用の警報体系は確認されていません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Landslide warning coverage (structural).</strong>{" "}
                  The JKR network of 73 rain gauges and slope sensors covers
                  federal-road slopes, and the JMG critical list covers
                  settlements and natural slopes; the Batang Kali campsite, a
                  licensed business on a state road, fell between the two and
                  31 people died on 16 December 2022. Five more died at
                  Cameron Highlands on 26 January 2024, and in September 2026
                  the Works Minister pointed to underground pipe leaks and
                  poor drainage as urban landslide triggers. Of 34,544
                  inventoried slopes more than 1,000 are high risk, yet no
                  public-facing landslide warning channel exists; the
                  National Slope Master Plan 2025&ndash;2030 is the vehicle
                  for closing this gap.
                </>
              ) : (
                <>
                  <strong className="text-foreground">地すべり警報の範囲（構造的）。</strong>
                  JKR の73か所の雨量計と斜面センサーは連邦道路の斜面を、JMG
                  の重要斜面リストは集落と自然斜面を対象としており、州道沿いの営業許可を得たキャンプ場であったバタンカリの現場はその隙間に落ち、2022年12月16日に31人が死亡しました。2024年1月26日にはキャメロンハイランズで5人が死亡し、2026年9月には公共事業大臣が地下配管の漏水と排水不良を都市部の地すべりの誘因として挙げました。台帳化された34,544か所の斜面のうち1,000か所超が高リスクですが、公衆向けの地すべり警報チャネルはなく、国家斜面マスタープラン
                  2025〜2030 がこの隙間を埋める手段となります。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Federal&ndash;state friction, distance and funding (structural).</strong>{" "}
                  December 2021 saw blame-shifting between federal and state
                  governments while senior politicians were away at party
                  meetings and the Sarawak election. The 5% budget earmark of
                  2022 remains a recommendation; NADMA received RM400 million
                  in Budget 2023 and distributed RM7 million to states and
                  agencies ahead of MTL 2025/26. In Sabah and Sarawak the
                  Prime Minister had to order improved federal&ndash;state
                  coordination in March 2025, Sarawak reported 1,335 damaged
                  infrastructure projects, and the central committee approved
                  a permanent evacuation centre in remote Belaga, which
                  illustrates how distance, not only politics, strains a
                  centralised mechanism that a 2020 UNDRR/ADPC review had
                  already described as top-down and obsolete.
                </>
              ) : (
                <>
                  <strong className="text-foreground">連邦・州の摩擦、距離、資金（構造的）。</strong>
                  2021年12月には、有力政治家が党大会やサラワク州選挙で不在のなか、連邦政府と州政府の責任の押し付け合いが起きました。2022年の5%予算配分は勧告にとどまり、NADMA
                  は2023年度予算で4億リンギットを受け、MTL 2025/26
                  前に州・機関へ700万リンギットを配分しました。サバ・サラワクでは2025年3月に首相が連邦・州調整の改善を命じる必要があり、サラワク州は1,335件のインフラ損傷を報告し、中央委員会は遠隔地ブラガに常設避難所を承認しました。政治だけでなく距離も、2020年の
                  UNDRR／ADPC の検討がトップダウンで時代遅れと評した集権的メカニズムに負荷をかけています。
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
                The principal Japanese contribution to warning systems was the
                JICA SATREPS project &ldquo;Research and Development for
                Reducing Geo-Hazard Damage in Malaysia caused by Landslide and
                Flood&rdquo; (June 2011 to May 2016, 260 million yen), which
                worked in the Kelantan and Dungun river basins with
                Universiti Sains Malaysia, UNITEN and Multimedia University
                under the Ministry of Education, with JKR and JPS
                participating. A trial landslide early warning system was
                tuned with JKR, but the flood system was delayed and the
                IFAS/GETFLOWS tools installed at the JPS forecast centre are
                no longer operational because JPS developed its own real-time
                National Flood Forecasting and Warning System with a different
                model; the ex-post evaluation of January 2021 notes that JPS
                acknowledged the knowledge transfer while the JKR system did
                not benefit directly because research staff left and budgets
                were constrained. JICA Malaysia listed no disaster or
                meteorology project in November 2026, and the Disaster
                Preparedness and Prevention Centre of the Malaysia-Japan
                International Institute of Technology at UTM is a core author
                of the National Slope Master Plan 2025&ndash;2030. No current
                cooperation between the Japan Meteorological Agency and
                MetMalaysia, and no World Bank or ADB lending for early
                warning in Malaysia, was identified.
              </>
            ) : (
              <>
                警報システムに対する日本の主要な貢献は、JICA の SATREPS
                プロジェクト「マレーシアにおける地すべり・洪水による地盤災害被害軽減のための研究開発」（2011年6月〜2016年5月、実績2億6,000万円）でした。クランタン川・ドゥングン川流域を対象に、教育省のもとでマレーシア科学大学（USM）、UNITEN、マルチメディア大学が実施し、JKR
                と JPS が参加しました。試験的な地すべり早期警報システムは JKR
                と調整されましたが、洪水システムは遅れ、JPS の予測センターに導入された
                IFAS／GETFLOWS は、JPS
                が別のモデルで独自のリアルタイム国家洪水予測警報システムを開発したため現在は運用されていません。2021年1月の事後評価は、JPS
                が知識移転を認めた一方、研究要員の離職と予算制約により JKR
                のシステムは直接の恩恵を受けなかったと記しています。JICA
                マレーシア事務所は2026年11月時点で防災・気象分野の案件を掲載しておらず、マレーシア日本国際工科院（MJIIT、UTM）の防災センターは国家斜面マスタープラン
                2025〜2030 の中心的な執筆機関です。気象庁と MetMalaysia
                の現行の協力や、世界銀行・ADB によるマレーシアの早期警報向け融資は確認されませんでした。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Current foreign technical input to warning comes mainly from
                the United Kingdom and the multilateral system. MetMalaysia,
                JPS and NADMA work with the UK Met Office under the Weather
                and Climate Science for Service Partnership Southeast Asia on
                forecasting models, user-friendly products and impact-based
                forecasting; MetMalaysia uses the Southeast Asia-Oceania Flash
                Flood Guidance System and partners with the Pacific Tsunami
                Warning Center, the South China Sea Tsunami Advisory Centre
                and the Indian Ocean Tsunami Warning and Mitigation System;
                and the government pledges continued support for WMO and
                Early Warnings for All. Regionally, Malaysia ratified AADMER
                (in force 24 December 2009), Cabinet designated the MKN
                disaster division, now NADMA, as lead for ASEAN disaster
                management on 1 September 2010, and at the 12th ASEAN
                Ministerial Meeting on Disaster Management in Brunei in
                October 2024 Malaysia pledged support to the AHA Centre,
                regional exercises and wider participation in the SASOP
                procedures. DPRB 2030 is aligned with the Sendai Framework and
                was presented at UNDRR platforms in 2024 and 2025; UNICEF
                works with NADMA and the Education Ministry on school DRR; the
                IFRC financed the 2024 flood response through DREF operation
                MDRMY011; and the US CFE-DM publishes Malaysia reference
                handbooks (2016, 2019, 2022, 2025).
              </>
            ) : (
              <>
                現在の警報分野への外国からの技術的関与は、主に英国と多国間機関からです。MetMalaysia・JPS・NADMA
                は英国気象庁と WCSSP
                東南アジアの枠組みで予測モデル、使いやすいプロダクト、影響予測型予報に取り組んでいます。MetMalaysia
                は東南アジア・オセアニア鉄砲水ガイダンスシステムを利用し、太平洋津波警報センター、南シナ海津波助言センター、インド洋津波警報・軽減システムと連携し、政府は
                WMO と Early Warnings for All
                への継続的な支持を表明しています。地域では、マレーシアは AADMER
                を批准（2009年12月24日発効）し、2010年9月1日の閣議決定で MKN の災害部門（現
                NADMA）を ASEAN
                災害管理の主管に指定し、2024年10月のブルネイでの第12回 ASEAN
                災害管理閣僚会議では AHA センターへの支援、地域演習、SASOP
                手順への参加拡大を約束しました。DPRB 2030
                は仙台枠組に沿い、2024年と2025年の UNDRR の会議で発表されました。UNICEF は
                NADMA と教育省と学校防災に取り組み、IFRC は DREF オペレーション MDRMY011
                で2024年の洪水対応を支援し、米国の CFE-DM
                はマレーシアの災害管理参考ハンドブック（2016・2019・2022・2025年版）を発行しています。
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
                What is distinctive about Malaysia is that a fully articulated
                three-tier command system has operated for nearly three
                decades without a statute behind it. Directive 20 and its
                2024 successor say precisely who commands, who evacuates, who
                runs the relief centres and who must warn the public, and the
                system is functionally federal because the committees are
                chaired by federally posted administrators and the on-scene
                commander is a federal police officer. The weakness is not
                ambiguity about roles but the absence of enforceable duties
                and thresholds: the technical agencies warn at their own
                discretion, NADMA coordinates by advice and by control of
                funds and the SMS trigger rather than by authority, and the
                hand-overs from MetMalaysia to the committees and from district
                to state depend on human judgement at each step. The Shah Alam
                judgment of September 2026 has, for the first time, converted
                those directive-based duties into justiciable obligations,
                and litigation may now push the agencies towards written
                criteria faster than the legislative process has.
              </>
            ) : (
              <>
                マレーシアの特徴は、精緻に組み立てられた三層の指揮系統が、法律の裏付けなしに30年近く運用されてきたことにあります。指令第20号とその2024年の後継は、誰が指揮し、誰が避難させ、誰が避難所を運営し、誰が公衆に警報しなければならないかを明確に定めており、委員長が連邦から派遣された行政官で現場指揮官が連邦警察官であるため、制度は機能的に連邦的です。弱点は役割の曖昧さではなく、強制力のある義務と閾値の不在です。技術機関は裁量で警報を出し、NADMA
                は権限ではなく助言と資金・SMS 発動の掌握によって調整し、MetMalaysia
                から委員会へ、郡から州への引き継ぎは各段階で人の判断に依存しています。2026年9月のシャーアラム判決は、指令に基づくこれらの義務を初めて司法審査の対象となる義務に転換し、訴訟が立法過程よりも速く各機関を文書化された基準へと押し出す可能性があります。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The unresolved question is whether the Disaster Risk Reduction
                Act, now at least a year away, will do more than codify the
                existing committee structure. For early warning the test is
                threefold: whether it imposes a statutory duty on MetMalaysia
                and JPS to issue warnings against published criteria and on
                committees to act on them within defined times; whether it
                gives NADMA either a presence at state and district level or a
                clear power to direct, instead of the current reliance on
                advice; and whether it provides a legal basis and a single
                harmonised level scheme for the cell broadcast channel, so that
                a warning means the same thing whichever agency issues it. The
                MPBN of 2026 addresses federal&ndash;state politics, and the
                cell broadcast pilot addresses the last mile, but neither
                changes the legal competences of the actors. Until the law
                does, the Malaysian system will continue to rest on the
                judgement of individual forecasters, District Officers and
                State Secretaries, and on courts to review that judgement
                after the event.
              </>
            ) : (
              <>
                未解決の問いは、少なくとも1年先となった災害リスク削減法が、既存の委員会構造を法典化するにとどまらないかどうかです。予警報の観点からの試金石は三つあります。MetMalaysia
                と JPS
                に公表された基準に基づいて警報を発する法定義務を、委員会にそれを受けて定められた時間内に行動する義務を課すか。NADMA
                に州・郡レベルの組織か、助言への依存に代わる明確な指示権限を与えるか。セルブロードキャストに法的根拠と統一された単一の警報レベル体系を与え、どの機関が発しても警報が同じ意味をもつようにするか。2026年の
                MPBN
                は連邦・州の政治に、セルブロードキャストの試験はラストマイルに対応しますが、いずれも関係者の法的権限を変えるものではありません。法律がそれを変えるまで、マレーシアの制度は個々の予報官・郡長・州政府書記官の判断と、事後にその判断を審査する裁判所に依存し続けることになります。
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
              National Security Council, Malaysia (1997). Directive No. 20:
              Policy and Mechanism of National Disaster Management and Relief
              (English translation).{" "}
              <em>ADB Law and Policy Reform portal</em>.
              https://lpr.adb.org/sites/default/files/resource/736/malaysia-1997-policy-and-mechanism-of-national-disaster-management-and-relief-national-security-council-directive.pdf.pdf
            </li>
            <li>
              NADMA (2025). Pelan Strategik NADMA 2024&ndash;2028.{" "}
              <em>Agensi Pengurusan Bencana Negara</em>.
              https://www.nadma.gov.my/images/2025/TerbitanDalaman/PELAN_STRATEGIK_NADMA_2024-2028.pdf
            </li>
            <li>
              NADMA (n.d.). Sejarah Penubuhan NADMA.{" "}
              <em>Agensi Pengurusan Bencana Negara</em>.
              https://www.nadma.gov.my/bm/korporat/sejarah-penubuhan-nadma
            </li>
            <li>
              NADMA (n.d.). Dasar Pengurangan Risiko Bencana Negara.{" "}
              <em>Agensi Pengurusan Bencana Negara</em>.
              https://www.nadma.gov.my/bm/korporat/perkhidmatan-teras/dasar-pengurusan-bencana-negara
            </li>
            <li>
              NADMA (2024). Malaysia Security Council Disaster Management
              Mechanism: Flood and Pandemic COVID-19, as at 18 June 2024
              (slides). <em>RCRC Conference</em>.
              https://rcrcconference.org/app/uploads/2024/06/MALAYSIA-SECURITY-COUNCIL-DISASTER-MANAGEMENT-MECHANISM-FLOOD-PANDEMIC-COVID-19-AS-AT-18062024.pdf
            </li>
            <li>
              Center for Excellence in Disaster Management and Humanitarian
              Assistance (2019). Malaysia Disaster Management Reference
              Handbook. <em>CFE-DM</em>.
              https://wrd.unwomen.org/sites/default/files/2021-11/Malaysia%20Disaster%20Management%20Reference%20Handbook%202019.pdf
            </li>
            <li>
              Malaysian Meteorological Department (n.d.). Continuous Rain
              Warning criteria. <em>met.gov.my</em>.
              http://www.met.gov.my/en/ramalan/hujan-lebat/
            </li>
            <li>
              Department of Irrigation and Drainage Malaysia (n.d.). Public
              InfoBanjir. <em>publicinfobanjir.water.gov.my</em>.
              https://publicinfobanjir.water.gov.my/
            </li>
            <li>
              IFRC (2025). Malaysia Floods: DREF Operational Update MDRMY011.{" "}
              <em>International Federation of Red Cross and Red Crescent Societies</em>.
              https://go-api.ifrc.org/api/DownloadFile/89793/MDRMY011OU1
            </li>
            <li>
              Malay Mail (2026, 29 September). High Court finds Putrajaya,
              Selangor authorities liable for Taman Sri Muda flood
              devastation. <em>Malay Mail</em>.
              https://malaymail.com/news/malaysia/2026/09/29/high-court-finds-putrajaya-selangor-authorities-liable-for-taman-sri-muda-flood-devastation/236959
            </li>
            <li>
              Utusan Malaysia (2024, 20 March). Kos RM129 juta untuk ramalan
              awal banjir tidak berbaloi (Public Accounts Committee findings).{" "}
              <em>Utusan Malaysia</em>.
              https://www.utusan.com.my/nasional/2024/03/kos-rm129-juta-untuk-ramalan-awal-banjir-tidak-berbaloi/
            </li>
            <li>
              Bernama (2026, 27 October). Written parliamentary reply on the
              baseline study for the Disaster Risk Reduction Act.{" "}
              <em>Bernama</em>. https://www.bernama.com/bm/am/news.php?id=2626040
            </li>
            <li>
              Malay Mail (2026, 14 October). MCMC testing new disaster warning
              system on Nov 19. <em>Malay Mail</em>.
              https://www.malaymail.com/news/malaysia/2026/10/14/mcmc-testing-new-disaster-warning-system-on-nov-19-heres-why-your-phone-might-sound-an-alarm/239024
            </li>
            <li>
              Sinar Harian (2026, 8 April). Kerajaan tubuh Majlis Pengurusan
              Bencana Negara. <em>Sinar Harian</em>.
              https://www.sinarharian.com.my/article/774901/berita/nasional/kerajaan-tubuh-majlis-pengurusan-bencana-negara---fahmi
            </li>
            <li>
              Scoop (2025, 26 November). MCMC, NADMA enhance flood early
              warning systems with new technology and stronger coordination.{" "}
              <em>Scoop</em>.
              https://www.scoop.my/news/275413/mcmc-nadma-enhance-flood-early-warning-systems-with-new-technology-and-stronger-coordination/
            </li>
            <li>
              Rahman, S. (2022). Malaysia&rsquo;s Floods of December 2021: Can
              Future Disasters be Avoided? <em>ISEAS Perspective 2022/26</em>.
              https://www.iseas.edu.sg/articles-commentaries/iseas-perspective/2022-26-malaysias-floods-of-december-2021-can-future-disasters-be-avoided-by-serina-rahman/
            </li>
            <li>
              Malay Mail (2022, 27 December). Minerals and Geoscience Dept:
              Batang Kali landslide site was not listed as a critical slope.{" "}
              <em>Malay Mail</em>.
              https://www.malaymail.com/news/malaysia/2022/12/27/minerals-and-geoscience-dept-batang-kali-landslide-site-wasnt-listed-as-a-critical-slope/47224
            </li>
            <li>
              The Star (2025, 27 September). JKR on guard against landslides.{" "}
              <em>The Star</em>.
              https://www.thestar.com.my/news/nation/2025/09/27/jkr-on-guard-against-landslides
            </li>
            <li>
              The Star (2025, 24 October). Speeding up the sirens.{" "}
              <em>The Star</em>.
              https://www.thestar.com.my/news/nation/2025/10/24/speeding-up-the-sirens
            </li>
            <li>
              JICA (2021). Ex-Post Evaluation of Japanese Technical
              Cooperation Project: Research and Development for Reducing
              Geo-Hazard Damage in Malaysia caused by Landslide and Flood
              (SATREPS). <em>Japan International Cooperation Agency</em>.
              http://www2.jica.go.jp/en/evaluation/pdf/2019_201000174_4_f.pdf
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
              <strong className="text-foreground">{en ? "Malaysia" : "マレーシア"}</strong>
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
