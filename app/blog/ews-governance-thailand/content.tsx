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
            {en ? "Early Warning Governance in Thailand — Laws, Actors and Current Challenges" : "タイの予警報制度 — 法制度・アクターの役割・現在の課題"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en ? "How Thailand decides who warns and who orders evacuation: the Disaster Prevention and Mitigation Act of 2007, the Water Resources Act of 2018, the agencies behind the warnings, the 2025 cell-broadcast roll-out and the lessons of the November 2025 Hat Yai flood, drawn from the law texts, the CFE-DM handbook of 2025, the State Audit Office audit, TDRI analyses, Typhoon Committee reports and Thai press coverage." : "2007年防災減災法と2018年水資源法が誰に避難命令と警報の権限を与えているのか、警報を支える機関、2025年のセルブロードキャスト導入、2025年11月のハートヤイ洪水の教訓を、法律原文・CFE-DM ハンドブック（2025年）・国家会計検査院の監査・TDRI の分析・台風委員会報告・タイ報道に基づいて整理します。"}
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
                Thailand is, above all, a flood country. The Chao Phraya basin floods of 2011 remain the reference disaster for recovery planning, and the losses have kept coming. In September 2024, runoff from the Shan State of Myanmar after more than 100 mm of rain a day for three days overwhelmed Mae Sai in Chiang Rai province. In November 2025 more than 1,000 mm fell on Hat Yai (Songkhla province) in five days, submerging some 84,000 rai to depths of up to 5 m; the Ministry of Public Health counted 145 deaths in Hat Yai as of 3 December 2025 and Kasikorn estimated the damage at 25 billion baht. Flash floods and landslides threaten nearly 5,000 mountain villages in the north and south that are monitored by telemetry. The Andaman coast carries the memory of the 2004 tsunami, which created the national warning centre, and the Myanmar earthquake of 28 March 2025, felt across Bangkok, showed that seismic alerting matters as well. Government relief spending reached roughly 123 billion baht between 2003 and 2026, an average of 5.3 billion baht a year and more than 25 billion baht in 2026 alone.
              </>
            ) : (
              <>
                タイは何よりも洪水の国です。2011年のチャオプラヤ川大洪水はいまも復興計画の基準となる災害であり、その後も被害は続いています。2024年9月にはミャンマー・シャン州で3日間にわたり日雨量100mmを超える雨が降り、その流出がチエンラーイ県メーサイを襲いました。2025年11月にはハートヤイ（ソンクラー県）で5日間に1,000mmを超える雨が降り、約84,000ライが最大5mの深さで浸水しました。保健省の2025年12月3日時点の集計でハートヤイだけで145人が死亡し、カシコン銀行は被害額を250億バーツと推計しています。北部と南部の山地では約5,000の村が土石流・地すべりの危険にさらされ、テレメトリで監視されています。アンダマン海沿岸には2004年の津波の記憶があり、それが国家警報センターの設立につながりました。2025年3月28日のミャンマー地震はバンコク全域で揺れが感じられ、地震警報の重要性も示しました。政府の災害救済支出は2003〜2026年で約1,230億バーツ、年平均53億バーツに達し、2026年だけで250億バーツを超えています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                What makes Thailand analytically interesting is a gap at the centre of its law. The Disaster Prevention and Mitigation Act B.E. 2550 (2007) builds a hierarchy of Directors (the Minister
                of Interior, the Director-General of{" "}
                <strong className="text-foreground">DDPM</strong> (Department of
                Disaster Prevention and Mitigation), provincial governors, district chiefs and the chief executives of local administrative organisations) and gives each of them the power to order evacuation, but it contains no provision assigning the issuance of hazard warnings to any agency. Warning authority therefore rests on administrative arrangements spread across at least five ministries: the meteorological department under the Ministry of Digital Economy and Society, irrigation under Agriculture and Cooperatives, water resources and mineral resources under Natural Resources and Environment, a water policy office under the Office of the Prime Minister, and the hydro-informatics and space agencies under Higher Education, Science, Research and Innovation. Two statutory committees chaired by the Prime Minister, one for disasters and one for water, sit side by side; according to the Thailand Development Research Institute (TDRI), water management is split among 48 agencies in 13 ministries and the two committees rarely work together. Because the legal power to evacuate is local-first, the whole system depends on local officials correctly interpreting central products, which is exactly where the failures of 2024 and 2025 occurred. This article reviews the legal framework, the actors and their roles, the warning chain and warning levels, the reforms since 2020, the current challenges and the role of international and Japanese cooperation, and closes with an assessment of what would need to change.
              </>
            ) : (
              <>
                タイの制度を分析上興味深いものにしているのは、法律の中心にある空白です。防災減災法 B.E. 2550（2007年）は、内務大臣、<strong className="text-foreground">DDPM</strong>（Department of Disaster Prevention and Mitigation、防災減災局）長官、県知事、郡長、地方自治体首長という「ディレクター」の階層を作り、それぞれに避難命令の権限を与えていますが、ハザード警報の発表を特定の機関に割り当てる条文は一つもありません。そのため警報の権限は、少なくとも5つの省にまたがる行政上の取り決めに依拠しています。気象局はデジタル経済社会省、灌漑は農業協同組合省、水資源と鉱物資源は天然資源環境省、水政策の事務局は首相府、水文情報と宇宙機関は高等教育・科学・研究・イノベーション省の下にあります。首相が議長を務める法定委員会が防災と水で一つずつ並立し、TDRI（Thailand Development Research Institute、タイ開発研究所）によれば水管理は13省48機関に分かれ、二つの委員会が協働することはほとんどありません。避難の法的権限が地方優先であるため、制度全体は中央の情報を地方の担当者が正しく解釈することに依存しており、2024年と2025年の失敗はまさにそこで起きました。本記事では、法制度、アクターとその役割、警報の流れと警報レベル、2020年以降の改革、現在の課題、国際協力と日本の関与を整理し、何を変える必要があるかを考えます。
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
                Thailand has no single early-warning law. Authority is divided between the Disaster Prevention and Mitigation Act of 2007, which governs command and evacuation; the Water Resources Act of 2018, which built a water-policy structure around the Prime Minister with its own crisis provisions; organisational
                instruments that make{" "}
                <strong className="text-foreground">TMD</strong> (Thai
                Meteorological Department),{" "}
                <strong className="text-foreground">DWR</strong> (Department of
                Water Resources),{" "}
                <strong className="text-foreground">DMR</strong> (Department of
                Mineral Resources),{" "}
                <strong className="text-foreground">RID</strong> (Royal
                Irrigation Department) and{" "}
                <strong className="text-foreground">ONWR</strong> (Office of the
                National Water Resources) the technical warning authorities; and the Emergency Decree of 2005, invoked in November 2025 to centralise ministerial powers for the Hat Yai flood. The principal instruments are summarised below.
              </>
            ) : (
              <>
                タイには単一の「早期警報法」がありません。権限は、指揮と避難を定める2007年防災減災法、首相を中心とする水政策の仕組みと独自の危機対応条項を持つ2018年水資源法、<strong className="text-foreground">TMD</strong>（Thai Meteorological Department、タイ気象局）・<strong className="text-foreground">DWR</strong>（Department of Water Resources、水資源局）・<strong className="text-foreground">DMR</strong>（Department of Mineral Resources、鉱物資源局）・<strong className="text-foreground">RID</strong>（Royal Irrigation Department、王室灌漑局）・<strong className="text-foreground">ONWR</strong>（Office of the National Water Resources、国家水資源庁）を技術的な警報機関とする組織法令、そして2025年11月のハートヤイ洪水で各省の権限を集中させるために発動された2005年非常事態勅令に分かれています。主な法令を以下に整理します。
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
                  <td className={TDH}>{en ? "Disaster Prevention and Mitigation Act B.E. 2550 (2007) (พระราชบัญญัติป้องกันและบรรเทาสาธารณภัย พ.ศ. 2550)" : "防災減災法 B.E. 2550（2007年）（พระราชบัญญัติป้องกันและบรรเทาสาธารณภัย พ.ศ. 2550）"}</td>
                  <td className={TD}>2007</td>
                  <td className={TD}>{en ? "Repeals the Civil Defence Act B.E. 2522 (1979) and the Fire Defence Act B.E. 2542 (1999); defines disaster broadly (s.4); creates the National Disaster Prevention and Mitigation Committee chaired by the Prime Minister (s.6) and names DDPM the central government unit (s.11); requires a National DPM Plan that includes evacuation procedures (s.12); establishes the Director hierarchy (ss.13-20) and a separate Bangkok chapter (ss.32-37)." : "1979年民間防衛法と1999年消防法を廃止。災害を広く定義（第4条）、首相が議長の国家防災減災委員会を設置（第6条）、DDPM を中央政府機関と位置づけ（第11条）、避難手順を含む国家防災減災計画を義務づけ（第12条）、ディレクターの階層（第13〜20条）とバンコク章（第32〜37条）を定める。"}</td>
                  <td className={TD}>{en ? "s.28: when a disaster occurs or is expected, the Commander-in-Chief (Minister of Interior), the Deputy Commander, the Central Director (DG DDPM), the Provincial, District and Local Directors may order evacuation; s.29: time-limited area closure; s.21(5): the Local Director may order people to enter or leave areas; s.52: up to one month in prison or a 2,000 baht fine for non-compliance. No clause assigns the issuance of hazard warnings." : "第28条：災害が発生または予想されるとき、指揮官（内務大臣）、副指揮官、中央ディレクター（DDPM 長官）、県・郡・地方ディレクターは避難を命じられる。第29条：期限付き立入禁止。第21条(5)：地方ディレクターは区域への出入りを命じられる。第52条：違反は1か月以下の拘禁または2,000バーツ以下の罰金。ハザード警報の発表を割り当てる条文はない。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "National Disaster Prevention and Mitigation Plan 2021-2027 (แผนการป้องกันและบรรเทาสาธารณภัยแห่งชาติ พ.ศ. 2564-2570)" : "国家防災減災計画 2021〜2027年（แผนการป้องกันและบรรเทาสาธารณภัยแห่งชาติ พ.ศ. 2564-2570）"}</td>
                  <td className={TD}>2022</td>
                  <td className={TD}>{en ? "Approved by Cabinet on 5 July 2022; the national master plan with two strategic areas (reduce disaster risk; standardise disaster management); binds all agencies and local administrations, which must adopt provincial, district and municipal action plans." : "2022年7月5日に閣議承認。「災害リスクの削減」と「災害管理の標準化」の2戦略分野からなる国家マスタープランで、全機関と地方自治体を拘束し、県・郡・市町村は行動計画を策定する。"}</td>
                  <td className={TD}>{en ? "Strategy 2 calls for an end-to-end early warning system and for delivering warnings to the public. Four disaster levels: Levels 1 and 2 handled locally and provincially; Level 3 activates the national EOC with the Minister of Interior as Incident Commander; Level 4 places the Prime Minister in charge." : "戦略2はエンド・ツー・エンドの早期警報システムと住民への警報伝達の継続的強化を掲げる。災害規模は4段階：レベル1・2は地方・県が対応、レベル3は内務大臣を事案指揮官として国家 EOC が起動、レベル4は首相が最高責任者。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Water Resources Act B.E. 2561 (2018) (พระราชบัญญัติทรัพยากรน้ำ พ.ศ. 2561)" : "水資源法 B.E. 2561（2018年）（พระราชบัญญัติทรัพยากรน้ำ พ.ศ. 2561）"}</td>
                  <td className={TD}>2018</td>
                  <td className={TD}>{en ? "In force 27 January 2019 as a baseline law; establishes the National Water Resources Committee (NWRC, 20 members, chaired by the Prime Minister) and 22 River Basin Committees; ONWR is the NWRC secretariat and the command centre for national water management; complemented by the 20-year National Water Resources Master Plan 2018-2037." : "2019年1月27日に基本法として施行。首相が議長の国家水資源委員会（NWRC、20名）と22の流域委員会を設置し、ONWR を NWRC 事務局兼国家水管理の司令部とする。20年国家水資源マスタープラン（2018〜2037年）が補完。"}</td>
                  <td className={TD}>{en ? "Contains water-crisis provisions; a tiered flood-emergency protocol (a Level 2 flood emergency) has been reported in connection with the proposal of a National Water Command Centre in September 2025. In practice, any Chao Phraya Dam discharge above 2,000 cubic metres per second requires prior approval of the NWRC chairman sought three days ahead, and RID must promptly alert riverside communities." : "水危機に関する条項を含み、2025年9月の国家水司令センター設置提案に関連して段階的な洪水緊急プロトコル（レベル2洪水緊急事態）が報じられている。運用上、チャオプラヤダムから毎秒2,000立方メートルを超える放流は3日前に NWRC 議長の事前承認を要し、RID は沿川住民に速やかに警告しなければならない。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Royal Decree on River Basin Boundaries B.E. 2564 (2021)" : "流域境界に関する勅令 B.E. 2564（2021年）"}</td>
                  <td className={TD}>2021</td>
                  <td className={TD}>{en ? "Defines the 22 river basins (353 sub-basins plus six island groups) that form the units of the River Basin Committees." : "流域委員会の単位となる22流域（353小流域と6島嶼群）を定義する。"}</td>
                  <td className={TD}>{en ? "None directly; the basins are the spatial units on which ONWR water-situation notices are built." : "直接の規定はない。ONWR の水状況通知が立脚する空間単位を与える。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "NCPO Head Order No. 46/2560 (2017) establishing ONWR" : "ONWR を設置した NCPO 議長命令第46/2560号（2017年）"}</td>
                  <td className={TD}>2017</td>
                  <td className={TD}>{en ? "Established ONWR on 25 October 2017 in the Office of the Prime Minister under s.44 of the interim constitution, reporting to the Prime Minister; the sequence was NWRC (2015), ONWR (2017), Water Resources Act (2018)." : "暫定憲法第44条に基づき2017年10月25日に首相府内に ONWR を設置し、首相直属とした。NWRC（2015年）→ ONWR（2017年）→ 水資源法（2018年）という順序で制度化された。"}</td>
                  <td className={TD}>{en ? "None directly; ONWR subsequently became the issuer of numbered national water-situation notices." : "直接の規定はない。ONWR はその後、番号付きの全国水状況通知の発表機関となった。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "2016 act creating the Ministry of Digital Economy and Society, and 2017 ministerial regulation on the organisation of the Meteorological Department" : "デジタル経済社会省を設置した2016年法、および気象局の組織に関する2017年省令"}</td>
                  <td className={TD}>2016 / 2017</td>
                  <td className={TD}>{en ? "The ministry act was published in the Royal Gazette on 14 September 2016 and took effect the next day; all ICT Ministry agencies including TMD moved to the new ministry, with the exception of the National Disaster Warning Center, which was to move to the Ministry of Interior." : "省設置法は2016年9月14日に官報掲載、翌日施行。TMD を含む旧 ICT 省の全機関が新省へ移管され、国家災害警報センターのみ内務省へ移ることとされた。"}</td>
                  <td className={TD}>{en ? "Cited by the WMO Register of Alerting Authorities as the authorisation under which TMD is the sole registered alerting authority of Thailand for meteorological and geological hazards, with CAP feeds in Thai and English." : "WMO 警報機関登録簿が、TMD をタイ唯一の登録警報機関（気象・地質ハザード、タイ語・英語の CAP 配信）とする根拠として引用している。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Emergency Decree on Public Administration in Emergency Situations B.E. 2548 (2005) (พระราชกำหนดการบริหารราชการในสถานการณ์ฉุกเฉิน พ.ศ. 2548)" : "非常事態における行政に関する勅令 B.E. 2548（2005年）（พระราชกำหนดการบริหารราชการในสถานการณ์ฉุกเฉิน พ.ศ. 2548）"}</td>
                  <td className={TD}>2005</td>
                  <td className={TD}>{en ? "General emergency-powers instrument. On 25 November 2025 the Prime Minister and Minister of Interior, Anutin Charnvirakul, signed a decree under s.7 paragraph 2 transferring ministerial powers under 38 laws to the Prime Minister solely for the Hat Yai flood, including the Royal Irrigation Act (1942), the Public Health Act (1992), the Aviation Act (1954), the Defence Ministry Administration Act (2008), the Computer Crimes Act (2007) and the Cybersecurity Act (2019)." : "一般的な非常事態権限法。2025年11月25日、アヌティン首相兼内務大臣は第7条第2項に基づき、王室灌漑法（1942年）、公衆衛生法（1992年）、航空法（1954年）、国防省行政法（2008年）、コンピュータ犯罪法（2007年）、サイバーセキュリティ法（2019年）を含む38法の大臣権限を、ハートヤイ洪水対応に限って首相に移す勅令に署名した。"}</td>
                  <td className={TD}>{en ? "Agencies keep their powers unless the Prime Minister directs otherwise and must follow the head of the emergency response team. Critics said the declaration came four days late." : "各機関は首相が別に定めない限り権限を保持し、緊急対応チームの長に従う。宣言は「4日遅かった」と批判された。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Draft amendment to the DPM Act: Fund for Relief and Rehabilitation of Disaster Victims" : "防災減災法改正案：災害被災者救済・復興基金"}</td>
                  <td className={TD}>2026</td>
                  <td className={TD}>{en ? "Cabinet approved on 21 April 2026 the addition of a dedicated fund to the Act to finance relief and compensation and shorten procedures; parliamentary status not stated." : "2026年4月21日に閣議承認。救済・補償の専用財源を法律に追加し、手続きを簡素化する。議会での審議状況は明らかでない。"}</td>
                  <td className={TD}>{en ? "Financing only; no change to the warning or command chain." : "財源の規定のみで、警報・指揮系統の変更は含まない。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Draft Regulation of the Office of the Prime Minister on digital data sharing for disaster and emergency response" : "災害・緊急対応のためのデジタルデータ共有に関する首相府規則案"}</td>
                  <td className={TD}>2026</td>
                  <td className={TD}>{en ? "Principles approved by Cabinet on 5 May 2026; a central data-sharing system run by the Big Data Institute; a transitional clause requires RID, TMD, the Department of Provincial Administration and DDPM to connect and submit data within 60 days of entry into force." : "2026年5月5日に閣議で原則承認。ビッグデータ研究所が運営する中央データ共有システムを設け、移行規定で RID・TMD・地方行政局・DDPM に施行後60日以内の接続とデータ提出を義務づける。"}</td>
                  <td className={TD}>{en ? "Data plumbing for warnings; it does not assign warning authority." : "警報のためのデータ基盤整備であり、警報権限の付与ではない。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                What the 2007 Act settles is command and evacuation. The evacuation power is local-first: the chief executive of a local administrative organisation can order evacuation on his or her own authority under s.28, while district chiefs and governors hold concurrent powers (ss.22 and 28) and s.21 obliges the Local Director to act at once when a disaster is expected and to report to the District and Provincial Directors. That is why the controversy after the November 2025 Hat Yai flood centred on the failure of the municipal mayor to raise a timely red flag despite warnings from central agencies, and why the Governor of Surin could, on 27 July 2025, classify cross-border clashes as a disaster under s.4 so that local administrations could activate emergency spending.
              </>
            ) : (
              <>
                2007年法が定めているのは、指揮と避難です。避難権限は地方優先で、地方自治体の首長は第28条により自らの権限で避難を命じることができ、郡長と県知事も同等の権限を併せ持ちます（第22条・第28条）。第21条は、災害が予想されるとき地方ディレクターが直ちに行動し、郡・県ディレクターに報告することを義務づけています。2025年11月のハートヤイ洪水後の論争が、中央機関の警報を受けていたにもかかわらず市長が「赤旗」を適時に掲げなかった点に集中したのはこのためです。また、スリン県知事が2025年7月27日に国境での武力衝突を第4条の「災害」と認定し、地方自治体が緊急支出を行えるようにしたのも、同じ条文構造によるものです。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                What the Act leaves open is the warning itself. The word warning appears only in a penalty clause (s.51) and indirectly in the content of the National Plan (s.12). The function has been filled administratively: TMD through its ministerial organisation regulation and its WMO registration, DDPM and its National Disaster Warning Center as the operational disseminator and the authorised sender of cell-broadcast messages, ONWR through notices issued under the NWRC and the Water Resources Act, and DWR and DMR through their own station networks. The result is a set of parallel, agency-branded warnings rather than one legally defined national warning authority. The legal instrument that obliges mobile operators to carry cell broadcast has likewise not been identified; the CFE-DM handbook of 2025 states only that the telecommunications regulator mandates operators to implement such systems. The legislative movement of 2026 concerns financing and data plumbing (the relief fund, the data-sharing regulation and a 15.5 billion baht national disaster insurance scheme approved by Cabinet in September 2026), not the warning or command chain, and the dissolution of the House on 11 December 2025 meant that, under s.147 of the 2017 Constitution, pending bills lapsed unless the new Cabinet asked Parliament to resume them within 60 days.
              </>
            ) : (
              <>
                法律が定めていないのは、警報そのものです。「警告」という語は罰則条項（第51条）と国家計画の内容（第12条）にしか登場しません。この機能は行政的に埋められてきました。TMD は省令による組織規定と WMO 登録、DDPM とその国家災害警報センターは運用上の伝達機関およびセルブロードキャストの認可送信者、ONWR は NWRC と水資源法に基づく通知、DWR と DMR は独自の観測網によってです。その結果、法的に定義された単一の国家警報機関ではなく、機関ごとに名前を冠した並行的な警報が存在しています。携帯事業者にセルブロードキャストの配信を義務づける法令も特定されておらず、CFE-DM の2025年ハンドブックは通信規制当局が事業者にそうしたシステムの実装を求めている、と述べるにとどまります。2026年の立法の動きは、救済基金、データ共有規則、2026年9月に閣議承認された155億バーツの国家災害保険制度といった財源とデータ基盤に関するもので、警報・指揮系統には触れていません。さらに2025年12月11日の下院解散により、2017年憲法第147条のもとで審議中の法案は、新内閣が60日以内に継続審議を求めない限り失効することになりました。
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
                DDPM in the Ministry of Interior is the legal hub: secretariat of the national committee, Central Director, operator of the National Disaster Warning Center and the national emergency operations centre, and authorised sender of cell-broadcast alerts. Hazard detection and technical warnings, however, sit in at least five other ministries, and the legal power to evacuate sits with governors, district chiefs and local chief executives. The table lists the organisations that matter for early warning and the basis on which each acts.
              </>
            ) : (
              <>
                内務省の DDPM が法的な中枢です。国家委員会の事務局、中央ディレクター、国家災害警報センターと国家緊急オペレーションセンターの運営者、セルブロードキャスト警報の認可送信者を兼ねています。しかしハザードの検知と技術的な警報は少なくとも他の5省に置かれ、避難の法的権限は県知事・郡長・地方自治体首長にあります。以下の表に、早期警報に関わる機関と、それぞれが行動する根拠を整理します。
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
                  <td className={TDH}>{en ? "TMD, Thai Meteorological Department (กรมอุตุนิยมวิทยา)" : "TMD タイ気象局（กรมอุตุนิยมวิทยา）"}</td>
                  <td className={TD}>{en ? "Ministry of Digital Economy and Society (MDES)" : "デジタル経済社会省（MDES）"}</td>
                  <td className={TD}>{en ? "2016 ministry act and 2017 ministerial regulation; sole WMO-registered alerting authority" : "2016年省設置法・2017年省令。WMO 登録の唯一の警報機関"}</td>
                  <td className={TD}>{en ? "Weather, storm and earthquake monitoring through four regional meteorological centres and a Weather Watch and Warning Bureau; CAP feeds in Thai and English; call centre 1182; seismic notification to DDPM (SMS at 13:36 on 28 March 2025)." : "4つの地域気象センターと気象監視警報局による気象・暴風・地震の監視。タイ語・英語の CAP 配信、コールセンター1182。DDPM への地震通報（2025年3月28日13時36分の SMS）。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "ONWR, Office of the National Water Resources (สำนักงานทรัพยากรน้ำแห่งชาติ)" : "ONWR 国家水資源庁（สำนักงานทรัพยากรน้ำแห่งชาติ）"}</td>
                  <td className={TD}>{en ? "Office of the Prime Minister" : "首相府"}</td>
                  <td className={TD}>{en ? "NCPO Head Order No. 46/2560 (2017); Water Resources Act B.E. 2561 (2018)" : "NCPO 議長命令第46/2560号（2017年）、水資源法 B.E. 2561（2018年）"}</td>
                  <td className={TD}>{en ? "Secretariat of the NWRC; issues numbered national water-situation notices (e.g. Notice No. 4/2026 of 15 September 2026 warning 28 provinces) built on TMD, HII, RID and DMR data, with instructions to agencies; coordinates integrated forecasting during storms; runs the daily water-situation portal." : "NWRC 事務局。TMD・HII・RID・DMR のデータに基づく番号付き全国水状況通知（例：2026年9月15日の第4/2026号、28県に警告）を発表し、各機関に指示する。暴風雨時の統合予測を調整し、日次の水状況ポータルを運営。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "RID, Royal Irrigation Department (กรมชลประทาน)" : "RID 王室灌漑局（กรมชลประทาน）"}</td>
                  <td className={TD}>{en ? "Ministry of Agriculture and Cooperatives (MOAC)" : "農業協同組合省（MOAC）"}</td>
                  <td className={TD}>{en ? "Royal Irrigation Act (1942)" : "王室灌漑法（1942年）"}</td>
                  <td className={TD}>{en ? "Operates the Chao Phraya Dam and, with EGAT, the discharge plans of the Bhumibol, Sirikit, Ubolratana and Khwae Noi reservoirs under ONWR coordination; must alert riverside communities before large releases; installed eight Flood Mark water-level poles in Ayutthaya in 2025." : "チャオプラヤダムを運用し、EGAT と共同でプミポン、シリキット、ウボンラット、クウェーノイ各貯水池の放流計画を ONWR の調整下で実施。大規模放流前に沿川住民へ警告する義務。2025年にアユタヤに8本の「フラッドマーク」水位標を設置。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "DWR, Department of Water Resources (กรมทรัพยากรน้ำ) and DMR, Department of Mineral Resources (กรมทรัพยากรธรณี)" : "DWR 水資源局（กรมทรัพยากรน้ำ）と DMR 鉱物資源局（กรมทรัพยากรธรณี）"}</td>
                  <td className={TD}>{en ? "Ministry of Natural Resources and Environment (MNRE)" : "天然資源環境省（MNRE）"}</td>
                  <td className={TD}>{en ? "Departmental mandates within MNRE" : "MNRE 内の部局としての所掌"}</td>
                  <td className={TD}>{en ? "DWR runs automated telemetry for flash-flood and landslide alerts in nearly 5,000 mountain villages, with a three-colour scale and the EWS DWR app. DMR runs the Geohazards Operation Center, landslide monitoring in high-risk areas, community landslide watch networks and the AP Model landslide warning system." : "DWR は北部・南部の約5,000の山村を対象に自動テレメトリによる土石流・地すべり警報を運用し、3色のレベルと「EWS DWR」アプリを使う。DMR は地質災害オペレーションセンター、高リスク地域の地すべり監視、住民による地すべり監視ネットワーク、「AP モデル」地すべり警報システムを運用。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "HII, Hydro-Informatics Institute (สถาบันสารสนเทศทรัพยากรน้ำ) and GISTDA" : "HII 水文情報研究所（สถาบันสารสนเทศทรัพยากรน้ำ）と GISTDA"}</td>
                  <td className={TD}>{en ? "Ministry of Higher Education, Science, Research and Innovation (MHESI)" : "高等教育・科学・研究・イノベーション省（MHESI）"}</td>
                  <td className={TD}>{en ? "HII is a public organisation; GISTDA was created in 2000 from the Thailand Remote Sensing Center of 1979" : "HII は公的機関、GISTDA は1979年のタイ遠隔探査センターを前身に2000年設立"}</td>
                  <td className={TD}>{en ? "HII runs the National Hydroinformatics Data Center (thaiwater.net) and WRF rainfall forecasts used by ONWR. GISTDA provides satellite flood extents (nearly 1,000 ha mapped at Mae Sai in September 2024)." : "HII は国家水文情報データセンター（thaiwater.net）と、ONWR が使う WRF 降雨予測を運用。GISTDA は衛星による浸水範囲を提供（2024年9月のメーサイで約1,000ha）。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "DDPM, Department of Disaster Prevention and Mitigation (กรมป้องกันและบรรเทาสาธารณภัย)" : "DDPM 防災減災局（กรมป้องกันและบรรเทาสาธารณภัย）"}</td>
                  <td className={TD}>{en ? "Ministry of Interior" : "内務省"}</td>
                  <td className={TD}>{en ? "DPM Act 2007, ss.11 and 14; established 2002" : "2007年防災減災法第11条・第14条。2002年設立"}</td>
                  <td className={TD}>{en ? "Central government unit for disaster management and NDPMC secretariat; the Director-General is Central Director and heads the Central DPM Coordination Centre, which issues early warning messages; national EOC; authorised sender of cell-broadcast messages; hotline 1784 and Line @1784DDPM; 18 regional offices, 76 provincial offices, more than 2,500 staff and more than 2 million Civil Defence Volunteers." : "災害管理の中央政府機関で NDPMC 事務局。長官は中央ディレクターとして中央防災減災調整センターを統括し、同センターが早期警報メッセージを発出する。国家 EOC、セルブロードキャストの認可送信者、ホットライン1784と Line @1784DDPM。18地域事務所・76県事務所、職員2,500人超、200万人超の民間防衛ボランティア。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "NDWC, National Disaster Warning Center (ศูนย์เตือนภัยพิบัติแห่งชาติ)" : "NDWC 国家災害警報センター（ศูนย์เตือนภัยพิบัติแห่งชาติ）"}</td>
                  <td className={TD}>{en ? "DDPM (transferred from the former ICT/MDES line; reported dates range from 2016 to 2022)" : "DDPM（旧 ICT 省／MDES 系統から移管。移管時期は2016〜2022年と報道が分かれる）"}</td>
                  <td className={TD}>{en ? "Founded after the 2004 tsunami; national EWS operational in 2006 with the Pacific Disaster Center" : "2004年津波後に設立。2006年に太平洋災害センターと国家 EWS を運用開始"}</td>
                  <td className={TD}>{en ? "24/7 multi-hazard monitoring in Bang Na, Bangkok (same campus as TMD); aggregates inputs from Thai agencies and international centres; issues tsunami bulletins; operates warning towers, SMS, the Thai Disaster Alert app and cell broadcast; ThaiAWARE online since December 2021." : "バンコク・バンナー（TMD と同じ敷地）で24時間のマルチハザード監視。国内機関と国際センターの情報を集約し、津波ブリテンを発表。警報塔、SMS、Thai Disaster Alert アプリ、セルブロードキャストを運用。ThaiAWARE は2021年12月から稼働。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "NDPMC and NWRC (two national committees)" : "NDPMC と NWRC（二つの国家委員会）"}</td>
                  <td className={TD}>{en ? "Both chaired by the Prime Minister (or a designated Deputy)" : "いずれも首相（または指名された副首相）が議長"}</td>
                  <td className={TD}>{en ? "DPM Act ss.6-7; Water Resources Act 2018" : "防災減災法第6〜7条、2018年水資源法"}</td>
                  <td className={TD}>{en ? "NDPMC sets policy and pre-approves the National Plan; NWRC sets water policy and its chairman approves large Chao Phraya Dam releases. Both handle floods but, according to TDRI, rarely work together; neither operates full-time." : "NDPMC は政策を定め国家計画を事前承認、NWRC は水政策を定め、議長がチャオプラヤダムの大規模放流を承認する。双方が洪水を扱うが、TDRI によれば協働はまれで、常設の運用体ではない。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Provincial governors, district chiefs and chief executives of local administrative organisations (LAOs)" : "県知事・郡長・地方自治体（LAO）首長"}</td>
                  <td className={TD}>{en ? "Ministry of Interior (Department of Provincial Administration); elected LAOs" : "内務省（地方行政局）、公選の地方自治体"}</td>
                  <td className={TD}>{en ? "DPM Act ss.15, 19-22, 28-29" : "防災減災法第15条、第19〜22条、第28〜29条"}</td>
                  <td className={TD}>{en ? "Provincial, District and Local Directors; order evacuation and area closure; the Governor heads the Provincial DPM Coordination Centre as Provincial Incident Commander; local relay through flags, loudspeakers and municipal alerts (Chiang Rai provincial office mobile alert of 7 September 2026; Mae Sai municipality warnings with hotline 199)." : "県・郡・地方ディレクター。避難命令と立入禁止を発令。県知事は県防災減災調整センターの長（県事案指揮官）。旗、拡声器、自治体の警報による末端伝達（2026年9月7日のチエンラーイ県事務所の携帯警報、メーサイ町のホットライン199を使った警告）。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "BMA, Bangkok Metropolitan Administration" : "BMA バンコク都"}</td>
                  <td className={TD}>{en ? "Bangkok Governor" : "バンコク都知事"}</td>
                  <td className={TD}>{en ? "DPM Act ss.32-37" : "防災減災法第32〜37条"}</td>
                  <td className={TD}>{en ? "The Governor is Bangkok Director with a separate Bangkok DPM Plan; the Department of Drainage and Sewerage feeds water levels to NDWC." : "都知事はバンコク・ディレクターとして独自の防災減災計画を持つ。排水下水局が水位データを NDWC に提供。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Ministry of Defence and the armed forces" : "国防省と軍"}</td>
                  <td className={TD}>{en ? "Ministry of Defence" : "国防省"}</td>
                  <td className={TD}>{en ? "National DPM Plan; MOD Disaster Relief Plan 2021 (under review)" : "国家防災減災計画、国防省災害救援計画2021（改定中）"}</td>
                  <td className={TD}>{en ? "MOD Disaster Relief Center under the Defence Minister; provincial governments have a level of command over military units in their jurisdictions; in Hat Yai the Cabinet placed the Chief of Defence Forces in charge of rescue and relief on 25 November 2025." : "国防大臣下の国防省災害救援センター。県政府は管内の部隊に対して一定の指揮権を持つ。ハートヤイでは2025年11月25日に閣議が国軍最高司令官を救助・救援の責任者とした。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "NBTC, mobile operators (NT, TRUE, AIS) and PRD" : "NBTC、携帯事業者（NT・TRUE・AIS）、PRD"}</td>
                  <td className={TD}>{en ? "Independent regulator; state and private operators; Public Relations Department (Office of the Prime Minister)" : "独立規制機関、国営・民間事業者、政府広報局（首相府）"}</td>
                  <td className={TD}>{en ? "NBTC Act (s.56 cited in 2025); operator agreements" : "NBTC 法（2025年に第56条が引用）、事業者との取り決め"}</td>
                  <td className={TD}>{en ? "Until cell broadcast was operational the NBTC Office relayed DDPM SMS requests to operators; operators run Cell Broadcast Centres; NBTC LINE ALERT (200,000 users in April 2025) and a planned disaster TV channel; PRD is a roll-out partner for broadcasting." : "セルブロードキャスト稼働前は NBTC 事務局が DDPM の SMS 要請を事業者に中継。事業者はセルブロードキャストセンターを運用。NBTC の LINE ALERT（2025年4月時点で20万人）と災害警報テレビチャンネル計画。PRD は放送面の導入パートナー。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Thai Red Cross Society (TRCS)" : "タイ赤十字社（TRCS）"}</td>
                  <td className={TD}>{en ? "Independent" : "独立団体"}</td>
                  <td className={TD}>{en ? "Designated in law as a primary responder; written into the National DRM Plan" : "法律上の一次対応者として指定され、国家計画に明記"}</td>
                  <td className={TD}>{en ? "392 branches, more than 11,000 staff and more than 51,000 volunteers; PhonPhai app shared with about 20 agencies (2020); community-based DRR in more than 270 communities since 2003." : "392支部、職員11,000人超、ボランティア51,000人超。約20機関と共有する PhonPhai アプリ（2020年）、2003年以降270以上のコミュニティでの地域防災。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "EGAT, PCD, Royal Thai Navy Hydrographic Department and other data providers" : "EGAT、PCD、海軍水路部ほかのデータ提供機関"}</td>
                  <td className={TD}>{en ? "Various" : "各省庁"}</td>
                  <td className={TD}>{en ? "Agency mandates" : "各機関の所掌"}</td>
                  <td className={TD}>{en ? "Inputs to NDWC; EGAT co-manages large dam releases with RID; the Pollution Control Department analyses PM2.5 data and passes it to DDPM for nationwide cell broadcast (from 12 November 2025)." : "NDWC への情報提供。EGAT は RID と大規模ダム放流を共同管理。汚染管理局（PCD）は PM2.5 データを分析し、全国セルブロードキャストのため DDPM に渡す（2025年11月12日から）。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                <strong className="text-foreground">The national meteorological service.</strong>{" "}
                TMD, elevated to a department on 23 June 1942 and attached successively to the Navy, the Office of the Prime Minister, the Ministry of Transport and Communications and the Ministry of ICT before joining MDES in 2016, is the only Thai body on the WMO Register of Alerting Authorities. It covers the monitoring-and-forecasting pillar for weather, storms and earthquakes, publishes CAP feeds, and feeds its products to ONWR and NDWC. Its forecast quality has been questioned: experts cited an under-forecast of about 100 mm for Storm Wipha in July 2025 and a misforecast of Kalmaegi in November 2025.
              </>
            ) : (
              <>
                <strong className="text-foreground">国家気象機関。</strong>TMD は1942年6月23日に局へ昇格し、海軍、首相府、運輸通信省、ICT 省の下を経て2016年に MDES に移った機関で、WMO 警報機関登録簿に載るタイ唯一の機関です。気象・暴風・地震について監視・予測の柱を担い、CAP 配信を公開し、その成果を ONWR と NDWC に提供します。予測精度には疑問も示されており、専門家は2025年7月の台風ウィパーで約100mmの過小予測、2025年11月のカルマエギの予測外れを指摘しました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">The water cluster.</strong>{" "}
                ONWR, created in October 2017 and placed at the centre of the 2018 Act, coordinates forecasting across TMD, HII, RID and DMR and issues the national water-situation notices; RID and EGAT translate those into reservoir and dam operations; HII supplies the data centre and WRF forecasts; GISTDA adds satellite flood extents. In parallel, the MNRE pair DWR and DMR cover the small-catchment hazards (flash floods and landslides) with their own station networks and community watch teams. Before the 2018 Act, as an ADB/OECD review put it, each agency had its own way of managing water; the Act was meant to standardise roles and the early warning system, but the NWRC is a policy committee, not an operations room.
              </>
            ) : (
              <>
                <strong className="text-foreground">水関連の機関群。</strong>2017年10月に設置され2018年法の中核に据えられた ONWR は、TMD・HII・RID・DMR をまたぐ予測を調整し、全国水状況通知を発表します。RID と EGAT はそれを貯水池・ダム操作に反映し、HII はデータセンターと WRF 予測を供給し、GISTDA が衛星による浸水範囲を加えます。これと並行して、MNRE の DWR と DMR が小流域のハザード（土石流・地すべり）を独自の観測網と住民監視チームで担います。ADB／OECD のレビューが述べたように、2018年法以前は各機関がそれぞれの方法で水を管理しており、同法は役割と早期警報システムの標準化を意図しましたが、NWRC は政策委員会であって運用の司令室ではありません。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">DDPM and NDWC.</strong>{" "}
                DDPM holds the dissemination pillar. Its Central DPM Coordination Centre issues early warning messages, NDWC runs the 24-hour watch and the tsunami bulletins, and since 2025 DDPM has been the government Cell Broadcast Entity from which alerts are sent to the networks of NT, TRUE and AIS. In the 2025 rainy season it transmitted 450 flood warning messages by cell broadcast, all from the centre; DDPM itself has written that the system should be deployed in every province. The Director-General was Passakorn Bunyalak in March 2025 and Theerapat Kachamat in 2026.
              </>
            ) : (
              <>
                <strong className="text-foreground">DDPM と NDWC。</strong>DDPM は伝達の柱を担います。中央防災減災調整センターが早期警報メッセージを発出し、NDWC が24時間監視と津波ブリテンを担い、2025年以降は DDPM が政府側のセルブロードキャスト送信主体（CBE）として NT・TRUE・AIS の網に警報を送っています。2025年雨季には450件の洪水警報メッセージをセルブロードキャストで送信しましたが、すべて中央からの送信であり、DDPM 自身が「将来は各県に配備すべきだ」と記しています。長官は2025年3月時点でパサコーン・ブンヤラック（Passakorn Bunyalak）氏、2026年はティーラパット・カチャマット（Theerapat Kachamat）氏です。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">Provinces, districts and local administrations.</strong>{" "}
                The response-capability pillar is local. Provincial DPM coordination centres under the Governor, district centres under the district chief, municipal centres under the mayor and sub-district centres are all also emergency response units. By 2019, 8,291 LAOs (96 percent) had their own DPM action plans, and the Department of Provincial Administration uses those plans as a performance indicator. Yet the same tier is where TDRI finds inadequate equipment, outdated data, staff turnover and governor transfers, and where TDRI notes that governors lack the authority to coordinate all state agencies in their provinces.
              </>
            ) : (
              <>
                <strong className="text-foreground">県・郡・地方自治体。</strong>対応能力の柱は地方にあります。県知事の下の県防災減災調整センター、郡長の下の郡センター、市長の下の市センター、区（タムボン）のセンターはいずれも緊急対応部隊でもあります。2019年までに8,291の地方自治体（96%）が独自の防災減災行動計画を持ち、地方行政局はその計画を業績評価の指標としています。しかし同じ層で TDRI は、設備の不足、データの陳腐化、職員の入れ替わり、県知事の異動を指摘し、県知事に管内の全省庁機関を調整する権限がないことも問題にしています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">Security forces, telecoms, media and the Red Cross.</strong>{" "}
                The armed forces supply rescue capacity and, in November 2025, the national command of the Hat Yai response. The telecoms regulator and the three operators carry the alerts; an internal NBTC dispute in March 2025 over who could direct the NBTC Office (s.56 of the NBTC Act) became part of the explanation for the earthquake alert delay. The Thai Red Cross Society is designated in law as a primary responder and has run community-based DRR in more than 270 communities since 2003, which gives it a role in the last mile that no warning agency can fill from Bangkok.
              </>
            ) : (
              <>
                <strong className="text-foreground">軍・通信・メディア・赤十字。</strong>軍は救助能力を提供し、2025年11月にはハートヤイ対応の国家レベルの指揮を担いました。通信規制当局と3事業者が警報を運びますが、2025年3月に NBTC 内部で誰が NBTC 事務局を指揮できるか（NBTC 法第56条）をめぐる対立が生じ、地震警報遅延の説明の一部となりました。タイ赤十字社は法律上の一次対応者に指定され、2003年以降270以上のコミュニティで地域防災を実施してきており、バンコクからでは埋められないラストマイルの役割を担っています。
              </>
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
              <>
                The Thai chain is hub-and-spoke. Technical agencies detect and issue agency-branded warnings; DDPM and NDWC aggregate and disseminate nationally; provinces, districts and local administrations relay the message and decide on evacuation. The NDWC concept of operations presented in September 2024 describes the sequence as input, evaluation and decision, and dissemination with pre-formatted bulletins, prioritised to central government, local government, rescue units, affected communities and the public.
              </>
            ) : (
              <>
                タイの流れはハブ・アンド・スポーク型です。技術機関が検知し、機関名を冠した警報を出し、DDPM と NDWC が集約して全国に伝達し、県・郡・地方自治体が中継して避難を判断します。NDWC が2024年9月に示した運用概念は、入力、評価・決定、伝達の順で、定型化されたブリテンを中央政府、地方政府、救助部隊、被災コミュニティ、一般住民の優先順で届けると説明しています。
              </>
            )}
          </p>
          <ol className={OL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Detection and forecasting.</strong>{" "}
                  TMD (weather and seismic), HII (WRF rainfall forecasts), RID and EGAT (reservoir levels and releases), DWR telemetry in mountain villages, the DMR Geohazards Operation Center, and international feeds (PTWC, JMA, USGS, NOAA, the Indian Ocean tsunami service providers and the Mekong River Commission forecasts for 22 mainstream points).
                </>
              ) : (
                <>
                  <strong className="text-foreground">検知と予測。</strong>TMD（気象・地震）、HII（WRF 降雨予測）、RID と EGAT（貯水池水位と放流）、山村の DWR テレメトリ、DMR の地質災害オペレーションセンター、そして国際的な情報源（PTWC、JMA、USGS、NOAA、インド洋津波サービス提供機関、メコン川委員会の本流22地点の予測）。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Technical warning.</strong>{" "}
                  TMD publishes CAP-formatted warnings; ONWR issues numbered water-situation notices with instructions to agencies and provinces; DWR posts colour levels per station; the DMR centre alerts provinces and its community network; RID announces dam releases.
                </>
              ) : (
                <>
                  <strong className="text-foreground">技術的警報。</strong>TMD は CAP 形式の警報を公開し、ONWR は各機関と県への指示を含む番号付き水状況通知を発表し、DWR は観測所ごとの色レベルを掲示し、DMR のセンターは県と住民ネットワークに警告し、RID はダム放流を周知します。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Evaluation and decision at NDWC.</strong>{" "}
                  Standard operating procedures, criteria and experts; for floods, provincial agencies analyse trends with irrigation offices and district chiefs and send the information to NDWC so that advance cell-broadcast alerts can be issued.
                </>
              ) : (
                <>
                  <strong className="text-foreground">NDWC での評価と決定。</strong>標準作業手順、基準、専門家による判断。洪水では県の機関が灌漑事務所や郡長と傾向を分析し、その情報を NDWC に送って事前のセルブロードキャスト警報を出せるようにします。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">National dissemination by DDPM and NDWC.</strong>{" "}
                  Cell broadcast through NT, TRUE and AIS; SMS (5,000 phones per batch in the NDWC system; 100,000 to 200,000 numbers and 70 characters per batch via the operators in March 2025); the Thai Disaster Alert app and Line @1784DDPM; hotline 1784; television (17 stations) and radio (280 stations); and the tower network, which NDWC reported in 2024 as 354 warning towers, 163 evacuation warning-box sets, 301 local-government radio relay stations and 674 small towers, while CFE-DM cites 130 tsunami warning towers in the six Andaman provinces.
                </>
              ) : (
                <>
                  <strong className="text-foreground">DDPM・NDWC による全国伝達。</strong>NT・TRUE・AIS を通じたセルブロードキャスト、SMS（NDWC システムで1回5,000台、2025年3月時点の事業者経由では1回10〜20万番号・70文字）、Thai Disaster Alert アプリと Line @1784DDPM、ホットライン1784、テレビ（17局）とラジオ（280局）、そして警報塔網です。塔の数は NDWC が2024年に警報塔354基、避難警報ボックス163組、地方自治体のラジオ中継局301局、小型警報塔674基と報告する一方、CFE-DM はアンダマン海沿岸6県の津波警報塔を130基としています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Provincial, district and local relay.</strong>{" "}
                  Provincial DPM coordination centres under the Governor, district centres, municipal and sub-district centres; local tools such as the Hat Yai municipal flag system, the Mae Sai municipal warnings based on a gauge across the border in Myanmar (513.61 m above mean sea level on 26 May 2025), or the emergency mobile alert issued by the Chiang Rai Provincial DPM Office for Mae Sai riverside areas on 7 September 2026.
                </>
              ) : (
                <>
                  <strong className="text-foreground">県・郡・地方の中継。</strong>県知事の下の県防災減災調整センター、郡センター、市・区のセンター。ハートヤイ市の旗システム、国境を越えたミャンマー側の水位計（2025年5月26日に平均海面上513.61m）に基づくメーサイ町の警告、2026年9月7日にチエンラーイ県防災減災事務所がメーサイ川沿いに出した緊急携帯警報などの地域ツールが使われます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Evacuation order and community action.</strong>{" "}
                  The Local, District or Provincial Director (or the Minister of Interior as Commander-in-Chief) orders evacuation under s.28; Civil Defence Volunteers, DMR landslide watch networks running 24-hour rotations, and Red Cross branches move people. Under the National Plan the response escalates through Levels 1 to 4, with the Minister of Interior as Incident Commander at Level 3 and the Prime Minister at Level 4.
                </>
              ) : (
                <>
                  <strong className="text-foreground">避難命令と地域の行動。</strong>地方・郡・県のディレクター（または指揮官としての内務大臣）が第28条に基づき避難を命じ、民間防衛ボランティア、24時間輪番で監視する DMR の地すべり監視ネットワーク、赤十字支部が住民を動かします。国家計画のもとで対応はレベル1から4へ段階的に拡大し、レベル3では内務大臣が事案指揮官、レベル4では首相が責任者となります。
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
                  <td className={TDH}>{en ? "River floods (national)" : "河川洪水（全国）"}</td>
                  <td className={TD}>{en ? "ONWR (notices); DDPM/NDWC (alerts)" : "ONWR（通知）、DDPM／NDWC（警報）"}</td>
                  <td className={TD}>{en ? "Numbered national water-situation notices with province lists and instructions to agencies (e.g. No. 4/2026, 28 provinces); response escalates through disaster Levels 1-4 under the National Plan." : "県の一覧と各機関への指示を伴う番号付き全国水状況通知（例：第4/2026号、28県）。対応は国家計画の災害レベル1〜4で段階化。"}</td>
                  <td className={TD}>{en ? "Cell broadcast (e.g. 20 August 2026 alerts for Lom Kao, Phetchabun, and five Mekong districts of Ubon Ratchathani), SMS, Thai Disaster Alert app, provincial relay, media." : "セルブロードキャスト（例：2026年8月20日のペッチャブーン県ロムカオとウボンラーチャターニー県メコン沿い5郡への警報）、SMS、Thai Disaster Alert アプリ、県経由の中継、メディア。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Dam releases (Chao Phraya)" : "ダム放流（チャオプラヤ）"}</td>
                  <td className={TD}>{en ? "RID with NWRC approval" : "RID（NWRC の承認）"}</td>
                  <td className={TD}>{en ? "Threshold of 2,000 cubic metres per second above which NWRC-chair approval three days ahead is required; community reference levels (releases of 2,100 and 2,400 cubic metres per second in September and October 2025 gave levels 6 cm below and 4 cm above the threshold at Wat Pradu Lokachet)." : "毎秒2,000立方メートルを超える放流には3日前の NWRC 議長承認が必要。地域の基準水位（2025年9月・10月の毎秒2,100・2,400立方メートルの放流で、ワット・プラドゥー・ロカチェットの基準に対し6cm下・4cm上）。"}</td>
                  <td className={TD}>{en ? "RID alerts to riverside communities; Flood Mark poles; 138,100 rai in five provinces at risk at the 2,000 threshold (September 2025)." : "RID による沿川住民への警告、フラッドマーク水位標。閾値の毎秒2,000立方メートルで5県138,100ライが浸水リスク（2025年9月）。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Flash floods and landslides (mountain villages)" : "土石流・地すべり（山村）"}</td>
                  <td className={TD}>{en ? "DWR" : "DWR"}</td>
                  <td className={TD}>{en ? "Three levels: Watch (green), Preparedness (yellow), Critical (red: evacuate immediately when officials instruct). On 13 July 2026, 16 stations covering 52 villages in four provinces were on alert, eight of them red in Chiang Rai." : "3段階：監視（緑）、準備（黄）、危機（赤：担当者の指示で直ちに避難）。2026年7月13日には4県52村をカバーする16観測所が警戒状態で、うち8か所がチエンラーイ県の赤。"}</td>
                  <td className={TD}>{en ? "EWS website, EWS DWR app, village warning stations, community leaders." : "EWS ウェブサイト、EWS DWR アプリ、村の警報ステーション、コミュニティリーダー。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Landslides (geohazards)" : "地すべり（地質災害）"}</td>
                  <td className={TD}>{en ? "DMR Geohazards Operation Center" : "DMR 地質災害オペレーションセンター"}</td>
                  <td className={TD}>{en ? "Province-level watch bulletins (e.g. 22 November 2025, ten southern provinces including Hat Yai district) and AP Model risk areas; no numeric scale reported." : "県単位の監視ブリテン（例：2025年11月22日、ハートヤイ郡を含む南部10県）と AP モデルのリスク地域。数値的な段階は報告されていない。"}</td>
                  <td className={TD}>{en ? "GOC hotline 02 621 9701, trained community landslide watch networks with upstream, midstream and downstream evacuation warnings, local agencies." : "GOC ホットライン02 621 9701、訓練を受けた住民の地すべり監視ネットワーク（上流・中流・下流での避難警告）、地方機関。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Tsunami" : "津波"}</td>
                  <td className={TD}>{en ? "NDWC (inputs from TMD, PTWC, JMA, Indian Ocean service providers, DART buoys)" : "NDWC（TMD、PTWC、JMA、インド洋サービス提供機関、DART ブイの情報）"}</td>
                  <td className={TD}>{en ? "Numbered bulletins: No. 1 and 2 watch; 3.1 confirmed tsunami; 3.2 first wave at Koh Miang; 4 end of threat. Arrival estimated with WinITDB." : "番号付きブリテン：第1・2号は注意、3.1は津波確認、3.2はコ・ミアンでの第1波到達、4は解除。到達時刻は WinITDB で推定。"}</td>
                  <td className={TD}>{en ? "Towers in the six Andaman provinces with messages in Thai, English, German, Japanese and Chinese; local-government radio relays; TV Channel 5; SMS to about 70,000 key contacts at coastal resorts; daily 08:00 tests." : "アンダマン海沿岸6県の警報塔（タイ語・英語・ドイツ語・日本語・中国語）、地方自治体のラジオ中継、テレビ第5チャンネル、沿岸リゾートの約70,000の主要連絡先への SMS、毎日8時の試験。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Earthquake" : "地震"}</td>
                  <td className={TD}>{en ? "TMD, then DDPM" : "TMD、続いて DDPM"}</td>
                  <td className={TD}>{en ? "Seismic bulletin; no graded public scale reported. On 28 March 2025 the quake struck at 13:20, TMD notified DDPM at 13:36 and the first public SMS went out at about 14:40." : "地震ブリテン。公開された段階区分は報告されていない。2025年3月28日は13時20分に地震、13時36分に TMD が DDPM に通報、最初の住民向け SMS は14時40分ごろ。"}</td>
                  <td className={TD}>{en ? "Cell broadcast (reported in May 2025 as to be issued directly by TMD and DDPM), SMS, app." : "セルブロードキャスト（2025年5月の報道では TMD と DDPM が直接発出）、SMS、アプリ。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Storms and severe weather" : "暴風雨・荒天"}</td>
                  <td className={TD}>{en ? "TMD" : "TMD"}</td>
                  <td className={TD}>{en ? "CAP-formatted warnings from the Weather Watch and Warning Bureau (Thai and English feeds)." : "気象監視警報局による CAP 形式の警報（タイ語・英語の配信）。"}</td>
                  <td className={TD}>{en ? "TMD website and CAP feed, media, call centre 1182; relayed into ONWR notices and DDPM alerts." : "TMD ウェブサイトと CAP 配信、メディア、コールセンター1182。ONWR 通知と DDPM 警報に取り込まれる。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Severe air pollution (PM2.5)" : "深刻な大気汚染（PM2.5）"}</td>
                  <td className={TD}>{en ? "PCD, then DDPM" : "PCD、続いて DDPM"}</td>
                  <td className={TD}>{en ? "PCD analyses monitoring data and passes alerts to DDPM." : "PCD が観測データを分析し、DDPM に警報を渡す。"}</td>
                  <td className={TD}>{en ? "Nationwide cell broadcast (from 12 November 2025)." : "全国セルブロードキャスト（2025年11月12日から）。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Cell broadcast message categories (all hazards)" : "セルブロードキャストの区分（全ハザード）"}</td>
                  <td className={TD}>{en ? "DDPM/NDWC" : "DDPM／NDWC"}</td>
                  <td className={TD}>{en ? "Reported as five categories (National Alert, Emergency Alert, Missing Person Alert, Public Safety, Test Alert); three types (national, emergency, amber) were named during the May 2025 tests. Eight hazard types covered in 2025 (earthquake, tsunami, storm, flood, landslide, cold spell, PM2.5, violent incidents), with six more due by end-2026 according to one operator." : "5区分（National Alert、Emergency Alert、Missing Person Alert、Public Safety、Test Alert）と報告されるが、2025年5月の試験では3種類（national、emergency、amber）が示された。2025年時点で8種のハザード（地震、津波、暴風、洪水、地すべり、寒波、PM2.5、暴力事案）を対象とし、事業者によれば2026年末までに6種が追加される。"}</td>
                  <td className={TD}>{en ? "NT, TRUE and AIS networks; requires iOS 18 or later and Android 11 or later; nationwide test in 76 provinces and Bangkok on 20 January 2026 at 14:00." : "NT・TRUE・AIS の網。iOS 18 以降・Android 11 以降が必要。2026年1月20日14時に76県とバンコクで全国試験。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                Dissemination has moved in a decade from towers and faxes to cell broadcast. The decisive push came after 28 March 2025, when roughly 80 minutes elapsed between the earthquake and the first public SMS and messages were capped at 100,000 to 200,000 numbers per batch. Cell broadcast was tested on 2, 7 and 13 May 2025 at building, district and province scale; the Interior Ministry announced a nationwide launch for July 2025, covering earthquakes, tsunamis, storms, floods, landslides, cold waves and severe air pollution; DDPM reported the system fully operational in December 2025 with 450 flood alerts sent in the rainy season, and the nationwide test of 20 January 2026 reached all 76 provinces and Bangkok. Apple agreed on 2 April 2025 to unlock cell broadcast for some 50 million iPhone users, and NBTC states the system can deliver 30 million messages an hour. On standards, TMD has published CAP feeds since a 2015 jump-start and is the registered alerting authority, and DDPM is reported to use CAP message standards and SOPs for cell broadcast. Impact-based forecasting is listed as a priority in the Typhoon Committee reports of 2024 and 2025 rather than an operational practice, and in the December 2025 report Thailand ticks all four Early Warnings for All pillars for its flood and cell-broadcast items; no national EW4All roadmap has been identified.
              </>
            ) : (
              <>
                伝達手段はこの10年で警報塔とファクスからセルブロードキャストへ移りました。決定的な契機は2025年3月28日で、地震から最初の住民向け SMS まで約80分かかり、1回の送信が10〜20万番号に制限されていたことが明らかになりました。セルブロードキャストは2025年5月2日・7日・13日に建物・郡・県の規模で試験され、内務省は地震、津波、暴風、洪水、地すべり、寒波、深刻な大気汚染を対象に2025年7月の全国開始を発表しました。DDPM は2025年12月に「完全に稼働している」として雨季に450件の洪水警報を送信したと報告し、2026年1月20日の全国試験は76県とバンコクに届きました。Apple は2025年4月2日に約5,000万人の iPhone 利用者向けにセルブロードキャストを解放することに同意し、NBTC は1時間に3,000万メッセージを配信できると説明しています。標準の面では、TMD は2015年の立ち上げ以来 CAP 配信を公開する登録警報機関であり、DDPM もセルブロードキャストに CAP メッセージ標準と SOP を用いていると報告されています。影響予測型予報（impact-based forecasting）は2024年・2025年の台風委員会報告で運用中の実践ではなく優先課題として挙げられており、2025年12月の報告ではタイは洪水・セルブロードキャストの項目について Early Warnings for All の4本柱すべてに該当すると記しています。国家としての EW4All ロードマップは確認されていません。
              </>
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
                <>
                  <strong className="text-foreground">December 2021 —</strong>{" "}
                  ThaiAWARE, the national variant of the Pacific Disaster Center DisasterAWARE platform, went online with DDPM as the executing agency, giving NDWC a common situational picture.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2021年12月 —</strong>{" "}
                  太平洋災害センターの DisasterAWARE のタイ版である ThaiAWARE が DDPM を実施機関として稼働し、NDWC に共通の状況認識基盤を与えました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">5 July 2022 —</strong>{" "}
                  Cabinet approved the National Disaster Prevention and Mitigation Plan 2021-2027, which made community-based DRM part of the national plan for the first time and set end-to-end early warning as Strategy 2.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2022年7月5日 —</strong>{" "}
                  閣議が国家防災減災計画2021〜2027年を承認。地域主体の災害リスク管理を初めて国家計画に組み込み、エンド・ツー・エンドの早期警報を戦略2に位置づけました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">25 August 2022 —</strong>{" "}
                  The national disaster warning system executive committee, chaired by caretaker Prime Minister Prawit Wongsuwan, approved a strategic plan to make Thailand a regional leader in disaster warning and approved cell-broadcast technology; the same report described NDWC as being transferred from MDES to DDPM, although the 2016 ministry act had already provided for the move.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2022年8月25日 —</strong>{" "}
                  プラウィット首相代行が議長の国家災害警報システム執行委員会が、タイを地域の災害警報の先導国にする戦略計画とセルブロードキャスト技術の採用を承認。同じ報道は NDWC が MDES から DDPM へ「移管されつつある」と伝えており、移管の決着時期にはなお曖昧さがあります。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">September 2024 —</strong>{" "}
                  The Mae Sai and Chiang Rai floods, driven by runoff from Myanmar, led residents and a municipal official to question whether the warning system worked; the government was reported to have moved to hasten the warning-system upgrade, while the Prime Minister maintained that the system had functioned.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年9月 —</strong>{" "}
                  ミャンマーからの流出によるメーサイ・チエンラーイの洪水で、住民と町の担当者が警報システムが機能していたか疑問を呈し、政府は警報システム更新を急ぐと報じられました。一方で首相はシステムは機能していたと述べました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">28 March to 2 April 2025 —</strong>{" "}
                  After the earthquake alert delay, Prime Minister Paetongtarn demanded alerts within five minutes in two or three sentences and SOP changes so that messages could be sent without inter-agency approval, which could take up to an hour; an interim virtual cell broadcast for about 70 million Android users and SMS for about 50 million iOS users bridged the gap, and Apple agreed on 2 April to unlock cell broadcast.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年3月28日〜4月2日 —</strong>{" "}
                  地震警報の遅れを受け、パートンターン首相は5分以内・2〜3文での警報と、最長1時間かかる機関間承認なしで送信できる SOP への変更を要求。約7,000万人の Android 利用者向けの暫定的な仮想セルブロードキャストと約5,000万人の iOS 利用者向け SMS でつなぎ、Apple は4月2日にセルブロードキャストの解放に同意しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">May to December 2025 —</strong>{" "}
                  Cell broadcast tests on 2, 7 and 13 May; the Interior Ministry announced on 19 May a nationwide launch for July 2025 with MDES, NBTC, PRD and the three operators; DDPM reported in December 2025 that the system was fully operational and that 450 flood warnings had been sent in the rainy season. This is the single largest change to the dissemination pillar since the tsunami towers.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年5〜12月 —</strong>{" "}
                  5月2日・7日・13日にセルブロードキャストを試験し、内務省は5月19日に MDES・NBTC・PRD・3事業者とともに2025年7月の全国開始を発表。DDPM は2025年12月に完全稼働と雨季の洪水警報450件送信を報告しました。津波警報塔以来、伝達の柱における最大の変化です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">August 2025 —</strong>{" "}
                  TMD was registered as a WMO Information System 2.0 node, working with GISC Tokyo (JMA) and the China Meteorological Administration, strengthening the international data layer behind its warnings.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年8月 —</strong>{" "}
                  TMD が WMO 情報システム（WIS）2.0 のノードとして登録され、GISC 東京（JMA）および中国気象局と連携し、警報を支える国際データ基盤が強化されました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">November 2025 —</strong>{" "}
                  On 12 November PCD-analysed PM2.5 alerts were added to nationwide cell broadcast. On 24 November the MNRE agency responsible for the flash-flood and landslide system started the action plan demanded by the State Audit Office. On 25 November, during the Hat Yai flood, the Prime Minister used the Emergency Decree to centralise powers under 38 laws and the Cabinet put the Chief of Defence Forces in charge of rescue, the only change to the command chain observed in this period, and an ad hoc one.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年11月 —</strong>{" "}
                  11月12日に PCD が分析する PM2.5 警報が全国セルブロードキャストに追加されました。11月24日には土石流・地すべり警報システムを所管する MNRE の機関が国家会計検査院の求めた行動計画を開始しました。11月25日、ハートヤイ洪水のさなかに首相は非常事態勅令で38法の権限を集中させ、閣議は国軍最高司令官を救助の責任者としました。この期間に見られた指揮系統上の唯一の変化であり、しかも臨時的なものでした。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">11 December 2025 —</strong>{" "}
                  The House was dissolved; under s.147 of the 2017 Constitution pending bills lapse unless the next Cabinet asks Parliament to resume them within 60 days, which pushed the post-Hat Yai follow-up into Cabinet regulations rather than legislation.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年12月11日 —</strong>{" "}
                  下院が解散。2017年憲法第147条により、審議中の法案は次の内閣が60日以内に継続を求めなければ失効するため、ハートヤイ後の対応は立法ではなく閣議規則で進むことになりました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">20 January 2026 —</strong>{" "}
                  DDPM, through NDWC, ran the first nationwide cell-broadcast test in all 76 provinces and Bangkok at 14:00; by then the system had been used for floods in the north and south, Thai-Cambodian border incidents and PM2.5.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年1月20日 —</strong>{" "}
                  DDPM が NDWC を通じて76県とバンコクで初の全国セルブロードキャスト試験を14時に実施。この時点で同システムは北部・南部の洪水、タイ・カンボジア国境事案、PM2.5 で実運用されていました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">March to May 2026 —</strong>{" "}
                  A regulation raised the house-repair relief ceiling to 88,500 baht for disasters after 6 March 2026; Cabinet approved on 21 April the Disaster Relief and Rehabilitation Fund amendment to the DPM Act, and on 5 May the principles of a data-sharing regulation that obliges RID, TMD, the Department of Provincial Administration and DDPM to connect within 60 days. These are the first Cabinet-level responses to the data gaps exposed in Hat Yai.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年3〜5月 —</strong>{" "}
                  規則改正で2026年3月6日以降の災害について住宅修理の救済上限を88,500バーツに引き上げ。4月21日に閣議が防災減災法への災害救済・復興基金の追加を承認し、5月5日には RID・TMD・地方行政局・DDPM に60日以内の接続を義務づけるデータ共有規則の原則を承認しました。ハートヤイで露呈したデータの断絶に対する初めての閣議レベルの対応です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">September 2026 —</strong>{" "}
                  Cabinet approved a 15.5 billion baht national disaster insurance scheme for floods, windstorms and earthquakes covering about 30 million homes from 1 October 2026, implemented by DDPM with the insurance regulator and the insurers association; the DDPM Director-General called it a major reform of risk management, but it does not touch warning law.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年9月 —</strong>{" "}
                  閣議が洪水・暴風・地震を対象に約3,000万世帯を2026年10月1日から補償する155億バーツの国家災害保険制度を承認。DDPM が保険監督当局・保険協会とともに実施し、DDPM 長官は「リスク管理の大改革」と述べましたが、警報法制には触れていません。
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
                  <strong className="text-foreground">No statutory warning authority and two committees that do not meet (structural).</strong>{" "}
                  The 2007 Act assigns evacuation but not warning, and the two national committees that both handle floods, the NDPMC and the NWRC, rarely work together according to TDRI; neither operates full-time and no operational centre enforces their mandates. The gap is filled by ad hoc bodies: a National Water Command Centre issued Bangkok-area flood warnings in October 2024, yet its formal creation was still being proposed under the Water Resources Act in September 2025. A Bangkok Tribune review of October 2025 concluded that for RID, DWR and DDPM coordination is poor, responsibilities overlap and leadership is fragmented.
                </>
              ) : (
                <>
                  <strong className="text-foreground">法定の警報機関がなく、二つの委員会が協働しない（構造的）。</strong>2007年法は避難を割り当てても警報を割り当てておらず、洪水を扱う二つの国家委員会 NDPMC と NWRC は TDRI によれば協働がまれで、いずれも常設運用ではなく、委員会の決定を執行する運用センターもありません。空白は臨時の組織で埋められています。国家水司令センターは2024年10月にバンコク周辺の洪水警報を出しましたが、その正式な設置は2025年9月になお水資源法に基づく提案の段階でした。2025年10月のバンコク・トリビューンの検証は、RID・DWR・DDPM の間で調整が乏しく、責任が重なり、指導が分散していると結論づけています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Local-first evacuation authority without local capacity (structural).</strong>{" "}
                  In Hat Yai the mayor said the situation was under control on 19 November 2025, DDPM warned on 22 November, the mayor repeated his reassurance on 23 November, and by 24 November the water was neck-high; the municipal Facebook page told residents at 10:41 to call the military for evacuation and then went silent. Seree Supratid of Rangsit University argued that evacuation should have been ordered on 20 November, and the People&rsquo;s Party motion of 8 April 2026 criticised the absence of an advance evacuation plan. TDRI documents inadequate equipment and outdated data at the Hat Yai research centre due to inconsistent funding, and notes that governors cannot coordinate all state agencies in their provinces, which is why a super-CEO governor model has been proposed.
                </>
              ) : (
                <>
                  <strong className="text-foreground">地方優先の避難権限と、それに見合わない地方の能力（構造的）。</strong>ハートヤイでは市長が2025年11月19日に「状況は制御下にある」と述べ、DDPM が11月22日に警報を出し、市長は11月23日に再び安心を呼びかけ、11月24日には水が首の高さに達しました。市の Facebook は10時41分に住民へ軍に避難を依頼するよう告げたのち沈黙しました。ランシット大学のセーリー・スプラティット（Seree Supratid）氏は11月20日に避難命令を出すべきだったと論じ、人民党の2026年4月8日の緊急動議は事前の避難計画の欠如を批判しました。TDRI はハートヤイの研究センターが不安定な資金のため設備不足と古いデータに悩んでいることを記録し、県知事が管内の全省庁機関を調整できないことから「スーパー CEO 知事」モデルが提案されていると指摘します。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Patchy stations, an outdated risk database and failing equipment (structural).</strong>{" "}
                  The State Audit Office performance audit of the flash-flood and landslide system under MNRE found that 2,042 at-risk villages (46.17 percent) have no warning station, 3,672 stations (60.66 percent) stand outside designated risk zones because the risk database dates from 2011, 72.31 percent of 195 flood incidents in 2021-2024 occurred without prior warning, and 264 stations (12.24 percent) awaited repair as of 31 March 2025. TDRI adds that nearly half of weather monitoring equipment does not function consistently, 96 percent has failed to report fully for at least one day, one-day-ahead flood forecasts are only 33 percent accurate, and most of the 2023 flood budget went to dams and drainage rather than warnings. Risk knowledge, not national detection, is the weakest pillar.
                </>
              ) : (
                <>
                  <strong className="text-foreground">観測所の偏在、古いリスクデータベース、故障した機器（構造的）。</strong>国家会計検査院（State Audit Office）による MNRE 所管の土石流・地すべり警報システムの業績監査は、リスク村2,042（46.17%）に警報観測所がなく、リスクデータベースが2011年のままであるため3,672観測所（60.66%）が指定リスク区域の外にあり、2021〜2024年の洪水195件の72.31%が事前警報なしに発生し、2025年3月31日時点で264観測所（12.24%）が修理待ちだったと明らかにしました。TDRI は、気象観測機器の半数近くが安定して稼働せず、96%が少なくとも1日は完全な報告に失敗し、1日先の洪水予測の精度は33%にとどまり、2023年の洪水予算の大半がダム・排水に向けられ警報にはほとんど回らなかったと付け加えます。最も弱い柱は国家レベルの検知ではなく、リスクの把握です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Fragmented data (structural).</strong>{" "}
                  The Tech for Good Institute concluded in July 2025 that agency data integration is still weak, so disaster response remains largely reactive, and the CFE-DM Sendai review notes that risk maps remain localised and fragmented with limited integration into national databases; TDRI observes that warning data lack topography and land-use information. The 2026 data-sharing regulation, which explicitly names RID, TMD and DDPM, is the official acknowledgement that no statutory duty to share data existed between the warning producers and the disseminator.
                </>
              ) : (
                <>
                  <strong className="text-foreground">分断されたデータ（構造的）。</strong>Tech for Good Institute は2025年7月に、機関間のデータ統合がなお弱く災害対応が受動的にとどまっていると結論づけ、CFE-DM の仙台枠組みレビューはリスク地図が局所的で分断され国家データベースへの統合が限られていると記しています。TDRI は警報データに地形や土地利用の情報が欠けていると指摘します。RID・TMD・DDPM を名指しする2026年のデータ共有規則は、警報を作る機関と伝達する機関の間にデータ共有の法的義務が存在しなかったことの公式な認知といえます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Latency and a single central sender (operational).</strong>{" "}
                  On 28 March 2025 the quake struck at 13:20, TMD informed DDPM at 13:36, and the first public SMS went out at about 14:40, roughly 80 minutes later, limited to 100,000 to 200,000 numbers and 70 characters per batch and to Bangkok and four provinces; citizens relied on LINE groups instead. Cell broadcast has removed the operator bottleneck but concentrated the decision in a single Cell Broadcast Entity at DDPM, which DDPM says should be deployed in every province; the post-quake instruction to send alerts within five minutes without inter-agency approval has not been shown to be codified. DDPM also reports that CCTV does not cover all high-risk areas and that some mountain-top risk areas have no mobile or internet signal.
                </>
              ) : (
                <>
                  <strong className="text-foreground">遅延と単一の中央送信者（運用上）。</strong>2025年3月28日は13時20分に地震が発生し、TMD が13時36分に DDPM に通報、最初の住民向け SMS は14時40分ごろで約80分後でした。送信は1回10〜20万番号・70文字、対象はバンコクと4県に限られ、市民は LINE グループに頼りました。セルブロードキャストは事業者側のボトルネックを取り除きましたが、判断を DDPM の単一のセルブロードキャスト送信主体に集中させており、DDPM 自身が各県への配備を課題としています。地震後に出された「機関間承認なしで5分以内に送信する」という指示が規範化されたことは確認されていません。DDPM はまた、CCTV が高リスク地域を網羅しておらず、山頂部の一部のリスク地域には携帯電話もインターネットの信号もないと報告しています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">The last mile and public trust (operational).</strong>{" "}
                  The audit found that 41.90 percent of the public receive warning information through community leaders, and that 72.31 percent of recent flood incidents came without warning. In Mae Sai in September 2024 a municipal official was reported to have called the warnings unclear; in Hat Yai in November 2025 ONWR insisted that local authorities had received timely alerts while residents were being reassured by the mayor, and in Satun residents were reported to have refused to leave after evacuation warnings. The response also became a partisan contest between Bhumjaithai and the People&rsquo;s Party, which built its own real-time victim dashboard; a warning system that residents read through party lines loses authority.
                </>
              ) : (
                <>
                  <strong className="text-foreground">ラストマイルと住民の信頼（運用上）。</strong>監査は住民の41.90%が警報情報をコミュニティリーダー経由で得ており、近年の洪水の72.31%が警報なしだったことを示しました。2024年9月のメーサイでは町の担当者が警報は「不明確だった」と述べたと報じられ、2025年11月のハートヤイでは ONWR が地方当局は適時に警報を受け取っていたと主張する一方で住民は市長に安心させられており、サトゥーン県では避難警告後も住民が退去を拒んだと報じられました。対応はブームジャイタイ党と人民党の党派的な争いにもなり、人民党は独自のリアルタイム被災者ダッシュボードを作りました。住民が党派の線で読み取る警報システムは権威を失います。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Dam-release communication and forecast quality (operational).</strong>{" "}
                  Chao Phraya Dam releases above 2,000 cubic metres per second put 138,100 rai in five provinces at risk and require NWRC-chair approval three days ahead; the 2025 releases of 2,100 and 2,400 cubic metres per second landed 6 cm below and 4 cm above the community threshold at Wat Pradu Lokachet, which is why RID now marks thresholds physically with Flood Mark poles. Sitang Pilailar of Kasetsart University judged that poor water management, delays and confusion, not rainfall, were the real causes in Hat Yai, and TMD was criticised for under-forecasting Wipha by about 100 mm and misforecasting Kalmaegi.
                </>
              ) : (
                <>
                  <strong className="text-foreground">ダム放流の伝達と予測精度（運用上）。</strong>チャオプラヤダムの毎秒2,000立方メートルを超える放流は5県138,100ライをリスクにさらし、3日前の NWRC 議長承認を要します。2025年の毎秒2,100・2,400立方メートルの放流はワット・プラドゥー・ロカチェットの地域基準に対し6cm下・4cm上に収まり、RID が「フラッドマーク」水位標で閾値を物理的に示すようになった理由です。カセサート大学のシタン・ピライラー（Sitang Pilailar）氏はハートヤイの真因は降雨ではなく水管理の不備・遅れ・混乱だと評価し、TMD はウィパーの約100mmの過小予測とカルマエギの予測外れを批判されました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Transboundary hazards (operational).</strong>{" "}
                  The 2024 Mae Sai flood came from Shan State after more than 100 mm a day for three days, through a river channel narrowed to about 7 m by settlements; the municipality now warns residents from a gauge on the Myanmar side (513.61 m above mean sea level on 26 May 2025). Mekong overflow alerts for five districts of Ubon Ratchathani in August 2026 depend on upstream information, where the Mekong River Commission forecasts 22 mainstream points from 138 stations. CFE-DM notes that many of the hazards facing Thailand, especially water-related ones, are transboundary.
                </>
              ) : (
                <>
                  <strong className="text-foreground">越境ハザード（運用上）。</strong>2024年のメーサイ洪水は、3日間にわたり日雨量100mmを超えたシャン州からの流出が、集落によって約7mに狭められた河道を通って起きたものです。町はいまミャンマー側の水位計（2025年5月26日に平均海面上513.61m）から住民に警告しています。2026年8月のウボンラーチャターニー県5郡へのメコン川氾濫警報は上流の情報に依存し、メコン川委員会が138観測所から本流22地点を予測しています。CFE-DM は、タイが直面するハザードの多く、特に水に関わるものは越境的だと記しています。
                </>
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
              <>
                Japanese cooperation has shaped the local and data layers of the Thai system. JICA Phase 1 (August 2006 to August 2008), requested after the 2004 tsunami, built community-based early warning and village volunteer schemes that remained functional in pilot provinces. JICA Phase 2, the Project on Capacity Development in Disaster Management in Thailand (June 2010 to May 2014, 395 million yen), worked with DDPM and the Office of the Basic Education Commission with 13 Japanese experts and 93 trainees, supplied radio communication systems, sirens, rain gauges and flood analysis software, and drew on Nagoya University, Hyogo Prefecture, Kobe City, Nagoya City, ADRC and Plus Arts; its ex-post evaluation credits it with all provinces drafting DPM plans and 8,291 LAOs (96 percent) adopting action plans. The SATREPS project IMPAC-T (2009-2014) linked Kasetsart University, RID and TMD. On the data side, NDWC uses JMA tsunami and storm bulletins, TMD works with GISC Tokyo on WIS 2.0 (registered as a node in August 2025), and a UNDP and Government of Japan Tsunami Project with DDPM and the Thai Red Cross produced the National Guidelines for Tsunami Evacuation Plans and Drills for Schools. No current JICA technical cooperation specifically on early warning with DDPM or TMD has been identified for 2025-2026.
              </>
            ) : (
              <>
                日本の協力はタイの制度の地域層とデータ層を形づくってきました。2004年津波後に要請された JICA 第1フェーズ（2006年8月〜2008年8月）は、地域主体の早期警報と村の防災ボランティアの仕組みを構築し、パイロット県では今も機能しています。JICA 第2フェーズ「タイ防災能力向上プロジェクト」（2010年6月〜2014年5月、3億9,500万円）は DDPM と基礎教育委員会事務局を相手に、日本人専門家13名、研修員93名で実施され、無線通信システム、サイレン、雨量計、洪水解析ソフトを供与し、名古屋大学、兵庫県、神戸市、名古屋市、ADRC、プラス・アーツが協力しました。事後評価は、全県の防災計画策定と8,291地方自治体（96%）の行動計画策定をその成果としています。SATREPS の IMPAC-T（2009〜2014年）はカセサート大学、RID、TMD を結びました。データ面では NDWC が JMA の津波・暴風ブリテンを利用し、TMD は GISC 東京と WIS 2.0 で協働（2025年8月にノード登録）し、UNDP と日本政府の津波プロジェクトは DDPM・タイ赤十字と「学校向け津波避難計画・訓練の国家ガイドライン」を作成しました。2025〜2026年に DDPM や TMD と早期警報を主題とする JICA の技術協力は確認されていません。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The national dissemination layer, by contrast, has been US-supported and industry-led: the national early warning system went operational in 2006 with the Pacific Disaster Center, ThaiAWARE followed in December 2021, and Cobra Gold exercises rehearse humanitarian response, while cell broadcast was built with the three operators and Apple. Regionally, the DDPM and AHA Centre memorandum of 2019 hosts the DELSA satellite warehouse at Chainat and more than 40 Thai personnel serve in the ASEAN-ERAT pool; ADPC ran post-disaster needs assessment workshops with DDPM and UNDP in November and December 2025; RIMES hosted the third regional impact-based forecasting workshop in Bangkok from 29 September to 1 October 2026; TMD, ONWR, RID and DDPM report annually to the ESCAP/WMO Typhoon Committee, TMD cooperates with the China Meteorological Administration on FengYun satellite data and sent staff to a nowcasting attachment in Malaysia in September 2025; UNESCO-IOC and ESCAP assessed tsunami preparedness at NDWC on 4 September 2024; and the World Bank assisted the recovery plan after the 2011 flood. The Mekong River Commission Regional Flood and Drought Management Centre supplies mainstream forecasts to the national agencies.
              </>
            ) : (
              <>
                これに対し、国家レベルの伝達層は米国の支援と産業界が主導してきました。国家早期警報システムは2006年に太平洋災害センターと稼働し、2021年12月に ThaiAWARE が続き、コブラ・ゴールド演習が人道対応を訓練する一方、セルブロードキャストは3事業者と Apple とともに構築されました。地域では、2019年の DDPM・AHA センター覚書によりチャイナートに DELSA 衛星倉庫が置かれ、40人超のタイ人員が ASEAN-ERAT に登録されています。ADPC は2025年11月・12月に DDPM・UNDP と災害後ニーズ評価の研修を実施し、RIMES は2026年9月29日〜10月1日にバンコクで第3回地域影響予測型予報ワークショップを開催しました。TMD・ONWR・RID・DDPM は ESCAP／WMO 台風委員会に毎年報告し、TMD は中国気象局と風雲衛星データで協力し、2025年9月にはマレーシアでのナウキャスト研修に職員を派遣しました。UNESCO-IOC と ESCAP は2024年9月4日に NDWC で津波への備えを評価し、世界銀行は2011年洪水後の復興計画を支援しました。メコン川委員会の地域洪水干ばつ管理センターは本流の予測を各国機関に提供しています。
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
                The distinctive feature of the Thai design is an inversion of the usual pattern. Most countries legislate who warns and leave evacuation to administrative discretion; Thailand has legislated evacuation in detail, down to the local chief executive and a 2,000 baht fine, and left warning entirely to administrative arrangement. The arrangement has produced competent technical producers (a WMO-registered meteorological service, a water office able to issue numbered national notices, a geohazards centre with community networks) and, since 2025, a modern national channel in cell broadcast. What it has not produced is a single point at which a warning becomes an obligation to act. Every post-mortem from 2011 to Hat Yai in 2025 has asked the same two questions, who was in charge and why the people who held the evacuation power did not use it in time, and every answer has been ad hoc: a water command centre in 2024, a Deputy Prime Minister, a general and a minister in succession in 2025, and an Emergency Decree.
              </>
            ) : (
              <>
                タイの制度設計の特徴は、通常のパターンの逆転にあります。多くの国は誰が警報を出すかを法律で定め、避難は行政の裁量に委ねます。タイは避難を地方自治体首長の権限と2,000バーツの罰金に至るまで法律で細かく定め、警報は完全に行政上の取り決めに委ねました。この取り決めは有能な技術機関（WMO 登録の気象局、番号付きの全国通知を出せる水資源庁、住民ネットワークを持つ地質災害センター）を生み、2025年以降はセルブロードキャストという近代的な全国チャンネルも生みました。生み出せていないのは、警報が行動の義務に転化する単一の結節点です。2011年から2025年のハートヤイまで、あらゆる事後検証は「誰が責任者だったのか」「避難権限を持つ者がなぜ適時に使わなかったのか」という同じ二つの問いを発し、その答えはいつも臨時的でした。2024年の水司令センター、2025年に副首相・将軍・大臣と交代した責任者、そして非常事態勅令です。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The unresolved question is therefore not technological but legal: whether an amendment to the 2007 Act, or a new chapter in the Water Resources Act, should name the agency whose warning triggers a duty on Provincial, District and Local Directors to decide on evacuation within a set time, and create the standing joint operations body that the NDPMC and the NWRC currently lack. The 2026 reforms, a relief fund, a data-sharing regulation and an insurance scheme, are necessary but they finance and inform the system without governing it. Until the warning is given a legal home, the quality of Thai early warning will continue to depend on which mayor, governor or minister happens to be in place when the rain starts, and cell broadcast will deliver, within minutes and to every handset, a message that no one is legally bound to act on.
              </>
            ) : (
              <>
                したがって未解決の問いは技術ではなく法にあります。2007年法の改正、あるいは水資源法への新章によって、その警報が県・郡・地方ディレクターに一定時間内の避難判断を義務づける機関を名指しし、NDPMC と NWRC に欠けている常設の合同運用機関を設けるべきかどうかです。2026年の改革である救済基金、データ共有規則、保険制度は必要なものですが、制度に資金と情報を与えるだけで、制度を統御するものではありません。警報に法的な居場所が与えられるまで、タイの早期警報の質は、雨が降り始めたときにどの市長・知事・大臣がその場にいるかに左右され続け、セルブロードキャストは数分以内にすべての端末へ、誰も法的に行動を義務づけられていないメッセージを届けることになります。
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
              Kingdom of Thailand (2007). Disaster Prevention and Mitigation Act B.E. 2550 (2007), unofficial English translation. <em>IFRC Disaster Law Database</em>. https://disasterlaw.ifrc.org/sites/default/files/media/disaster_law/2020-08/Thailand_DMAct_2007.pdf
            </li>
            <li>
              Center for Excellence in Disaster Management and Humanitarian Assistance (2025). Thailand Disaster Management Reference Handbook, May 2025. <em>CFE-DM</em>. https://www.cfe-dmha.org/LinkClick.aspx?fileticket=Lzww4BKKIIk%3d&amp;portalid=0
            </li>
            <li>
              National Disaster Warning Center / DDPM (2024). Presentation to the UNESCO-IOC Tsunami Preparedness Capacity Assessment team, 4 September 2024. <em>OceanExpert</em>. https://oceanexpert.org/downloadFile/57257
            </li>
            <li>
              ESCAP/WMO Typhoon Committee (2025). Thailand Member Report, 20th Integrated Workshop, December 2025. <em>Typhoon Committee</em>. https://typhooncommittee.org/20IWS/docs/Members%20REport/Thailand/Thailand_20th_IWS%20NEW%20MEMBERS%20REPORT.pdf
            </li>
            <li>
              State Audit Office of Thailand (2025). State Audit Office proposes strategic upgrades to early warning system to maximize public safety. <em>INTOSAI Working Group on Environmental Auditing</em>. https://wgea.org/wp-content/uploads/formidable/2/state_audit_office_proposes_strategic_upgrades_to_early_warning_system_to_maximize_public_safety.pdf
            </li>
            <li>
              World Meteorological Organization (2026). Register of Alerting Authorities: Thailand. <em>WMO</em>. https://alertingauthority.wmo.int/authorities.php?recId=164
            </li>
            <li>
              Japan International Cooperation Agency (2019). Ex-post evaluation of the Project on Capacity Development in Disaster Management in Thailand (Phase 2). <em>JICA</em>. http://www2.jica.go.jp/en/evaluation/pdf/2018_200900345_4_f.pdf
            </li>
            <li>
              Water Environment Partnership in Asia (n.d.). Thailand: state of water environmental issues and institutional framework. <em>WEPA database</em>. https://wepa-db.net/database/thailand
            </li>
            <li>
              Rattanakhamfu, S. and Rukkiatwong, N. (2025). Our broken system fuels flood crisis, 27 January 2025. <em>Thailand Development Research Institute</em>. https://tdri.or.th/en/2025/01/our-broken-system-fuels-flood-crisis/
            </li>
            <li>
              Tech for Good Institute (2025). What the Thailand earthquake reveals about tech, trust and readiness, 9 July 2025. <em>TFGI Perspectives</em>. https://techforgoodinstitute.org/insights/perspectives/what-thailands-earthquake-reveals-about-tech-trust-and-readiness/
            </li>
            <li>
              Thai PBS World (2025). Hat Yai flood exposes crisis response failures, 4 December 2025. <em>Thai PBS World</em>. https://www.thaipbsworld.com/politics/hat-yai-flood-exposes-crisis-response-failures
            </li>
            <li>
              The Nation (2025). Report on the Emergency Decree transferring powers under 38 laws to the Prime Minister for the Hat Yai flood, 26 November 2025. <em>The Nation Thailand</em>. https://www.nationthailand.com/news/general/40058794
            </li>
            <li>
              The Nation (2025). Report on the ONWR sub-committee meeting, the proposed National Water Command Centre and the Chao Phraya Dam discharge protocol, 14 September 2025. <em>The Nation Thailand</em>. https://www.nationthailand.com/news/general/40055413
            </li>
            <li>
              The Nation (2025). Timeline of the 28 March 2025 earthquake alerts and the Prime Minister&rsquo;s instructions, 31 March 2025. <em>The Nation Thailand</em>. https://www.nationthailand.com/news/general/40048138
            </li>
            <li>
              The Nation (2022). National disaster warning committee approves strategic plan and cell-broadcast technology, 25 August 2022. <em>The Nation Thailand</em>. https://www.nationthailand.com/in-focus/national/40019353
            </li>
            <li>
              The Nation (2026). DWR three-level flash-flood and landslide alert for 52 villages in four provinces, 13 July 2026. <em>The Nation Thailand</em>. https://www.nationthailand.com/news/40068594
            </li>
            <li>
              Thairath English (2026). Cabinet approves Disaster Relief and Rehabilitation Fund to be added to the DPM Act, 21 April 2026. <em>Thairath</em>. https://en.thairath.co.th/news/politic/2927952
            </li>
            <li>
              Thairath English (2026). Cabinet approves principles of a digital data-sharing regulation for disaster response, 5 May 2026. <em>Thairath</em>. https://en.thairath.co.th/news/politic/2930749
            </li>
            <li>
              Pattaya Mail / NNT (2026). Thailand to test nationwide Cell Broadcast emergency alert system on January 20. <em>Pattaya Mail</em>. https://www.pattayamail.com/thailandnews/thailand-to-test-nationwide-cell-broadcast-emergency-alert-system-on-january-20-532930
            </li>
            <li>
              True Corporation (2025). Cell Broadcast Service. <em>True blog</em>. https://www.true.th/blog/en/cell-broadcast-service/
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
              <strong className="text-foreground">{en ? "Thailand" : "タイ"}</strong>
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
