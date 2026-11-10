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
              ? "Early Warning Governance in Vietnam — Laws, Actors and Current Challenges"
              : "ベトナムの予警報制度 — 法制度・アクターの役割・現在の課題"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "A review of who issues forecasts and warnings, who publishes the disaster risk level and who orders evacuation in Vietnam, based on the Law on Natural Disaster Prevention and Control (33/2013), Decision 18/2021/QĐ-TTg, Decree 66/2021, the Law on Civil Defence (18/2023) with Decree 200/2025, the 2025 White Paper on Natural Disasters and the October 2026 Red River inter-reservoir procedure."
              : "災害予防・対策法（33/2013）、首相決定18/2021/QĐ-TTg、政令66/2021、民間防衛法（18/2023）と政令200/2025、2025年災害白書、2026年10月の紅河流域連結貯水池運用規程に基づき、ベトナムで誰が予報・警報を出し、誰が災害リスクレベルを公表し、誰が避難を命じるのかを整理します。"}
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
                Vietnam faces the East Sea typhoon track along its entire
                coastline, monsoon floods on the Red River and Mekong deltas,
                and flash floods and landslides in the northern and central
                mountains. The 2025 season was officially described as the most
                abnormal and fierce in the history of the country: 21 storms and
                tropical depressions in the East Sea, 21 rivers above their
                historical records, 484 people dead or missing, 4,259 houses
                collapsed and economic losses above VND 104,733 billion (about
                US$4 billion), the largest ever recorded. Bạch Mã station
                measured 1,740 mm in a single day on 27 October 2025, a national
                record. A year earlier, Typhoon Yagi (storm No. 3, September
                2024) had killed 325 people with 24 missing and caused losses of
                VND 84.543 trillion (about US$3.47 billion), including the Làng
                Nủ landslide in Lào Cai. In both years the deaths concentrated
                where warnings are hardest to make specific: small mountain
                catchments and the reaches downstream of hydropower reservoirs.
              </>
            ) : (
              <>
                ベトナムは、海岸線の全域で東海（南シナ海）の台風経路に面し、紅河デルタとメコンデルタのモンスーン洪水、北部・中部山地の土石流（鉄砲水）と地すべりにさらされています。2025年は公式に「史上最も異常で激しい災害の年」と位置づけられ、東海で21個の台風・熱帯低気圧が発生し、21河川が既往最高水位を更新し、死者・行方不明者484人、全壊家屋4,259棟、経済損失は過去最大の約104兆7,330億ドン（約40億米ドル）に達しました。10月27日にはBạch Mã観測所で日降水量1,740 mmという全国記録が観測されています。前年の2024年9月の台風Yagi（第3号）では死者325人・行方不明者24人、損失約84兆5,430億ドン（約34.7億米ドル）を記録し、Lào Cai省Làng Nủの地すべりが象徴的な被害となりました。いずれの年も、死者は警報を局地化しにくい小流域の山地と、水力発電貯水池の下流に集中しました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The institutional question in Vietnam is not fragmentation but
                codification under rapid change. Few countries tie the warning
                chain together as tightly in law: the hydro-meteorological
                service issues each bulletin together with a disaster risk level
                (cấp độ rủi ro thiên tai) from 1 to 5, each level corresponds to
                a command tier from the commune chairperson up to the Prime
                Minister and the President, national broadcasters must relay
                bulletins on a fixed schedule, and mobile operators can be
                ordered to send SMS. Between 2024 and 2026 this chain was
                rewired twice. First, the Law on Civil Defence (in force 1 July
                2024) and Decree 200/2025 placed disaster response under
                civil-defence commanding committees in which the Ministry of
                National Defence is the standing body. Second, the
                administrative reform of 2025 merged the forecasting ministry
                and the agriculture ministry into a single Ministry of
                Agriculture and Environment (1 March 2025), cut the provinces
                from 63 to 34 and abolished the district tier (1 July 2025), so
                that former district powers, including forced evacuation, moved
                to the communes. Decision 18/2021, the operative text on who
                issues and transmits warnings, still names bodies that no longer
                exist.
              </>
            ) : (
              <>
                ベトナムの制度上の論点は、機関の分裂ではなく、急速な変化のもとでの「法定化された連鎖」にあります。気象水文機関が各予報・警報とともに1〜5の災害リスクレベル（cấp độ rủi ro thiên tai）を公表し、各レベルが社（xã、コミューン）人民委員会主席から省人民委員会主席、国家指導委員会、首相、国家主席へと至る指揮階層に対応し、国営放送には定められた頻度で警報を放送する義務があり、携帯電話事業者にはSMS送信を命じることができる——これほど密に警報連鎖を法律で結び付けた国は多くありません。この連鎖は2024〜2026年に二度書き換えられました。第一に、民間防衛法（2024年7月1日施行）と政令200/2025が、災害対応を国防省を常設機関とする民間防衛指揮委員会の下に置きました。第二に、2025年の行政改革により、予報を所管していた天然資源環境省と農業農村開発省が農業環境省に統合され（2025年3月1日）、省の数が63から34に削減され、県（huyện、郡レベル）が廃止されました（2025年7月1日）。その結果、強制避難を含む旧県の権限は社に移りました。しかし、誰が警報を出し伝達するかを定める運用上の中核文書である首相決定18/2021は、今も存在しない機関の名称を掲げたままです。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                This article follows the chain from the forecast desk to the
                household, distinguishing the pre-2025 and post-2025
                arrangements, and then uses the 2025 White Paper on Natural
                Disasters and the Typhoon Yagi reviews to identify where the
                chain broke.
              </>
            ) : (
              <>
                本稿では、予報デスクから各世帯に至る連鎖を2025年前後の制度の違いを明示しながら追い、2025年災害白書と台風Yagiの事後検証を用いて、連鎖がどこで途切れたのかを検討します。
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
                Vietnamese disaster law is built in two stacks that now overlap.
                The older stack is the Law on Natural Disaster Prevention and
                Control of 2013 (Luật Phòng, chống thiên tai, No. 33/2013/QH13),
                amended in 2020, 2023, 2024 and 2025, with Decree 66/2021 on
                response command and Decision 18/2021/QĐ-TTg on forecasting,
                warning and risk levels. The newer stack is the Law on Civil
                Defence of 2023 (Luật Phòng thủ dân sự, No. 18/2023/QH15), in
                force since 1 July 2024, amended by Law 98/2025 and implemented
                by Decree 200/2025, which replaced the steering and commanding
                committees for disaster prevention with civil-defence bodies.
                Sector laws on hydrometeorology (2015), dykes (2006) and
                irrigation (2017), and the inter-reservoir operation procedures
                issued by the Prime Minister, govern the data, the structures
                and the reservoirs on which the warnings depend.
              </>
            ) : (
              <>
                ベトナムの災害法制は、現在重なり合う二つの系統から成ります。古い系統は2013年の災害予防・対策法（Luật Phòng, chống thiên tai、33/2013/QH13）で、2020年、2023年、2024年、2025年に改正され、対応指揮を定める政令66/2021と、予報・警報・リスクレベルを定める首相決定18/2021/QĐ-TTgが付随します。新しい系統は2023年の民間防衛法（Luật Phòng thủ dân sự、18/2023/QH15）で、2024年7月1日に施行され、法律98/2025で改正され、政令200/2025で具体化されました。この政令は、災害予防・対策の指導委員会・指揮委員会を民間防衛組織に置き換えました。これらに加え、気象水文法（2015年）、堤防法（2006年）、水利法（2017年）、首相が公布する流域連結貯水池運用規程が、警報の基礎となるデータ、構造物、貯水池を規律しています。
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
                  <td className={TDH}>
                    {en
                      ? "Law No. 33/2013/QH13 on Natural Disaster Prevention and Control (Luật Phòng, chống thiên tai)"
                      : "災害予防・対策法 33/2013/QH13（Luật Phòng, chống thiên tai）"}
                  </td>
                  <td className={TD}>{en ? "2013 (in force 1 May 2014)" : "2013年（2014年5月1日施行）"}</td>
                  <td className={TD}>
                    {en
                      ? "Framework law replacing the 1992 ordinances on flood and storm control; four on-the-spot principle (Art. 4.3); disaster risk graded into levels with details set by the Prime Minister (Art. 18); amended by Laws 60/2020, 18/2023, 47/2024, 55/2024 and 146/2025."
                      : "1992年の洪水・暴風対策令に代わる基本法。「四つの現地（bốn tại chỗ）」原則（第4条3項）、強度・範囲・被害で区分する災害リスクレベル（第18条、細則は首相が定める）。法律60/2020、18/2023、47/2024、55/2024、146/2025で改正。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Art. 24: the Ministry of Natural Resources and Environment issues hydro-meteorological forecasts and warnings, the Vietnam Academy of Science and Technology issues earthquake and tsunami bulletins, and VTV and VOV must broadcast them. Art. 26 lists evacuation as the first response measure without naming a single decision-maker; Art. 28 lets commune, district and provincial chairpersons mobilise local resources."
                      : "第24条：天然資源環境省が気象水文の予報・警報を、ベトナム科学技術アカデミーが地震・津波情報を発表し、VTV・VOVに放送義務。第26条は避難を暴風・洪水への第一の対応措置として挙げるが、単一の決定者を定めない。第28条で社・県・省の人民委員会主席が地域資源を動員。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Prime Minister’s Decision No. 18/2021/QĐ-TTg on forecasting, warning, transmission of disaster information and disaster risk levels"
                      : "首相決定 18/2021/QĐ-TTg（災害の予報・警報・情報伝達および災害リスクレベルに関する規定）"}
                  </td>
                  <td className={TD}>{en ? "2021 (22 April; in force 1 July 2021)" : "2021年（4月22日公布、7月1日施行）"}</td>
                  <td className={TD}>
                    {en
                      ? "Replaced Decisions 44/2014 and 03/2020. Ten hazard groups (Art. 3); five risk levels with colours from light blue (1) to purple (5), published together with each bulletin (Art. 4); bulletin frequencies and triggers (Arts 13–16); transmission within 15 minutes (Arts 34–35)."
                      : "首相決定44/2014と03/2020を統合・代替。10のハザード群（第3条）、水色（1）から紫（5）までの5段階リスクレベルを各情報と同時に公表（第4条）、情報の発表頻度と基準（第13〜16条）、15分以内の伝達（第34〜35条）。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Art. 6: the General Department of Hydrometeorology (now Cục Khí tượng Thủy văn) issues the official bulletins and the risk level for all hydro-meteorological hazards. Arts 7 and 36: VOV broadcasts emergency storm and flood bulletins immediately twice and then hourly, VTV every two hours. Art. 58.4: the Ministry of Information and Communications directs mobile operators to send SMS at the request of the Prime Minister or the national committees. Art. 60: commune People’s Committees relay bulletins through the commune loudspeaker station."
                      : "第6条：気象水文総局（現・気象水文局）が全ての気象水文ハザードについて公式情報とリスクレベルを発表。第7条・第36条：VOVは緊急暴風・洪水情報を即時2回、その後毎時放送、VTVは2時間ごと。第58条4項：情報通信省が首相・国家委員会の要請により携帯電話事業者にSMS送信を指示。第60条：社人民委員会が社放送局（有線拡声放送）で情報を伝達。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Decree No. 66/2021/NĐ-CP detailing the Law on Natural Disaster Prevention and Control (as amended by Decree 53/2026/NĐ-CP)"
                      : "政令 66/2021/NĐ-CP（災害予防・対策法施行細則。政令53/2026/NĐ-CPで改正）"}
                  </td>
                  <td className={TD}>{en ? "2021 (6 July); amended 5 February 2026" : "2021年（7月6日）、2026年2月5日改正"}</td>
                  <td className={TD}>
                    {en
                      ? "Response command by risk level (Arts 7–11); declaration of a natural-disaster emergency circumstance (Art. 12); organisation of the steering and commanding committees (Arts 25–29, repealed by Decree 200/2025)."
                      : "リスクレベル別の対応指揮（第7〜11条）、災害緊急事態状況の宣言（第12条）、指導・指揮委員会の組織（第25〜29条、政令200/2025で廃止）。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Level 1: the commune chairperson commands; level 2: the provincial chairperson; level 3: the national steering committee directs; level 4: the Prime Minister directs; level 5: the President declares a state of emergency on the Prime Minister’s proposal. Pre-2025 only the district chairperson could decide forced evacuation (Art. 8.3); Decree 53/2026 is reported to transfer the district powers in Arts 7–9 to commune chairpersons."
                      : "レベル1：社主席が指揮、レベル2：省主席、レベル3：国家指導委員会が指導、レベル4：首相が指導、レベル5：首相の提案により国家主席が緊急事態を宣言。2025年以前は県主席のみが強制避難を決定可能（第8条3項）。政令53/2026は第7〜9条の県権限を社主席に移したと報じられる。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Law No. 90/2015/QH13 on Hydrometeorology (Luật Khí tượng thủy văn); Decree 38/2016/NĐ-CP as amended by Decree 113/2026/NĐ-CP"
                      : "気象水文法 90/2015/QH13（Luật Khí tượng thủy văn）、政令38/2016/NĐ-CP（政令113/2026/NĐ-CPで改正）"}
                  </td>
                  <td className={TD}>{en ? "2015; 2016; 2026 (1 April)" : "2015年、2016年、2026年（4月1日）"}</td>
                  <td className={TD}>
                    {en
                      ? "State management of observation, forecasting and warning; licensing of forecasting activities. Amended by Law 146/2025 (11 December 2025). Decree 113/2026 renames the ministry, requires forecasting and warning bodies to hold their own computing and data systems, and formalises approval of hydro-meteorological data exchange with foreign parties (Art. 34). A fully amended law passed Ministry of Justice policy appraisal on 4 November 2026."
                      : "観測・予報・警報の国家管理と予報業務の許認可。法律146/2025（2025年12月11日）で改正。政令113/2026は省名を改め、予報・警報機関に自前の計算・データ基盤を義務付け、外国との気象水文データ交換の承認手続（第34条）を定める。全面改正法案は2026年11月4日に司法省の政策審査を通過。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Does not itself assign evacuation powers. The 2026 policy dossier proposes impact-based warnings, a legal duty on telecom operators to send emergency messages, smart commune loudspeakers and warnings in ethnic-minority languages."
                      : "避難権限は定めない。2026年の政策案は、影響予測型警報、通信事業者への緊急メッセージ送信義務、スマート社放送、少数民族言語での警報を提案。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Law No. 79/2006/QH11 on Dykes (Luật Đê điều); Law on Irrigation (Luật Thủy lợi, 2017); Decree 114/2018/NĐ-CP on dam and reservoir safety"
                      : "堤防法 79/2006/QH11（Luật Đê điều）、水利法（Luật Thủy lợi、2017年）、ダム・貯水池安全政令 114/2018/NĐ-CP"}
                  </td>
                  <td className={TD}>{en ? "2006; 2017; 2018" : "2006年、2017年、2018年"}</td>
                  <td className={TD}>
                    {en
                      ? "Dyke protection and management, irrigation works and dam safety; detailed by Circulars 25/2023 and 10/2026 (dykes) and 08/2026 (irrigation). Dyke incidents and reservoir operation enter the warning chain through Decision 18/2021 Arts 14.5 and 16.5 (inundation warnings when discharge or dam failure is likely)."
                      : "堤防の保護・管理、水利施設、ダム安全。省令25/2023・10/2026（堤防）、08/2026（水利）で細則。堤防事故と貯水池操作は、首相決定18/2021第14条5項・第16条5項（放流・ダム破壊の危険時の浸水警報）を通じて警報連鎖に組み込まれる。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "For urgent dyke works the provincial Department of Agriculture and Environment submits to the provincial chairperson the declaration of a natural-disaster emergency circumstance under Decree 66/2021 Art. 12; ministers declare it for works under their management."
                      : "緊急堤防工事では省農業環境局が省主席に政令66/2021第12条の災害緊急事態状況の宣言を提案。所管施設については各大臣が宣言。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Law No. 18/2023/QH15 on Civil Defence (Luật Phòng thủ dân sự), as amended by Law No. 98/2025/QH15"
                      : "民間防衛法 18/2023/QH15（Luật Phòng thủ dân sự）、法律98/2025/QH15で改正"}
                  </td>
                  <td className={TD}>{en ? "2023 (in force 1 July 2024); amended 27 June 2025" : "2023年（2024年7月1日施行）、2025年6月27日改正"}</td>
                  <td className={TD}>
                    {en
                      ? "Three civil-defence levels (Art. 7); a National Steering Committee for Civil Defence absorbing the former disaster steering committee and the search-and-rescue committee (Art. 34); Civil Defence Fund (Art. 40). Law 98/2025 adapted the scheme to two-tier local government: level 1 within a commune, level 2 within a province."
                      : "3段階の民間防衛レベル（第7条）、旧災害指導委員会と捜索救難委員会を統合する国家民間防衛指導委員会（第34条）、民間防衛基金（第40条）。法律98/2025は二層制地方政府に合わせ、レベル1を社域内、レベル2を省域内の事態と再定義。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Art. 18: People’s Committee chairpersons may order evacuation and access restrictions when risks arise. Art. 20 (as amended): commune chairpersons declare level 1, provincial chairpersons level 2, the Prime Minister level 3. Art. 34.4: civil-defence commands at commune and provincial level with the military office as standing body."
                      : "第18条：人民委員会主席は危険が生じたとき避難と立入制限を命じることができる。第20条（改正後）：社主席がレベル1、省主席がレベル2、首相がレベル3を宣言。第34条4項：社・省の民間防衛指揮委員会は軍事機関を常設機関とする。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Decree No. 200/2025/NĐ-CP detailing the Law on Civil Defence"
                      : "政令 200/2025/NĐ-CP（民間防衛法施行細則）"}
                  </td>
                  <td className={TD}>{en ? "2025 (9 July; effective 23 August)" : "2025年（7月9日公布、8月23日施行）"}</td>
                  <td className={TD}>
                    {en
                      ? "54 articles. Composition of the National Civil Defence Steering Committee with the Prime Minister as head and the Ministry of National Defence as standing agency (Art. 5); provincial and commune commanding committees (Arts 7–8); national hotline 112 at provincial military commands (Arts 3–4); amendments to Decree 66/2021 and Decree 114/2018 (Art. 52)."
                      : "全54条。首相を長、国防省を常設機関とする国家民間防衛指導委員会の構成（第5条）、省・社の民間防衛指揮委員会（第7〜8条）、省軍事司令部に置く全国ホットライン112（第3〜4条）、政令66/2021・114/2018の改正（第52条）。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Arts 14–15: level 1 is declared by the commune chairperson, level 2 by the provincial chairperson, level 3 by the Prime Minister on the Committee’s proposal and must be broadcast by the media. Art. 47.2: the Ministry of Agriculture and Environment leads hydro-meteorological forecasting and warning and their dissemination. Art. 7.3: the provincial Department of Agriculture and Environment leads disaster prevention within the provincial command."
                      : "第14〜15条：レベル1は社主席、レベル2は省主席、レベル3は委員会の提案により首相が宣言し、報道機関が放送。第47条2項：農業環境省が気象水文の予報・警報とその伝達を主導。第7条3項：省指揮委員会内で省農業環境局が災害予防を主導。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Prime Minister’s Decision No. 1936/QĐ-TTg promulgating the inter-reservoir operation procedure for the Red River basin"
                      : "首相決定 1936/QĐ-TTg（紅河流域連結貯水池運用規程）"}
                  </td>
                  <td className={TD}>{en ? "2026 (6 October)" : "2026年（10月6日）"}</td>
                  <td className={TD}>
                    {en
                      ? "Covers Sơn La, Hòa Bình, Thác Bà, Tuyên Quang, Lai Châu, Bản Chát and Huội Quảng; replaces Decisions 740/2019, 922/2025 and 1928/2026; cites Resolution 12/2026/NQ-CP on urgent dam-safety measures. Art. 2.3: until the spillway upgrade is complete, the Thác Bà flood-season level may not exceed 56 m."
                      : "Sơn La、Hòa Bình、Thác Bà、Tuyên Quang、Lai Châu、Bản Chát、Huội Quảngの7貯水池。首相決定740/2019・922/2025・1928/2026を代替し、ダム安全の緊急措置に関する決議12/2026/NQ-CPを根拠に引く。第2条3項：余水吐の増強完了まで、Thác Bàの洪水期最高水位は56 mを超えてはならない。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Addressed to the head of the National Civil Defence Steering Committee, the ministers concerned, the chairpersons and civil-defence commands of 11 provinces and cities, the Director of Cục Khí tượng Thủy văn and the reservoir operators."
                      : "国家民間防衛指導委員会委員長、関係大臣、11省・市の人民委員会主席と民間防衛指揮委員会、気象水文局長、貯水池運営者に宛てられる。"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                Taken together, the texts settle four things. The
                hydro-meteorological service issues the official bulletin, and
                the risk level is published inside that bulletin rather than
                declared by a political authority. Command follows the level:
                commune chairperson at level 1, provincial chairperson at level
                2, the national committee at level 3, the Prime Minister at level
                4, the President at level 5. People’s Committee chairpersons may
                order evacuation (Civil Defence Law Art. 18), and since August
                2025 the commune chairperson may decide forced evacuation under
                Resolution 190/2025/QH15, Decree 200/2025 and Circular
                18/2025/TT-BNNMT. National broadcasters have a timed duty to
                relay bulletins, and mobile operators can be directed to send
                SMS. Three matters remain open. The hazard-based 1–5 risk scale
                of Decision 18/2021 and the capacity-based 1–3 civil-defence
                scale of the 2023 law now coexist, and no text formally
                reconciles them: Decree 66/2021 still maps command to the 1–5
                scale while Decree 200/2025 maps declaration powers to the 1–3
                scale.
              </>
            ) : (
              <>
                これらの法令を合わせると、四つのことが確定します。気象水文機関が公式情報を発表し、リスクレベルは政治的権限者が宣言するのではなく、その情報の中で公表されること。指揮はレベルに従い、レベル1は社主席、レベル2は省主席、レベル3は国家委員会、レベル4は首相、レベル5は国家主席が担うこと。人民委員会主席は避難を命じることができ（民間防衛法第18条）、2025年8月以降は決議190/2025/QH15、政令200/2025、省令18/2025/TT-BNNMTにより社主席が強制避難を決定できること。国営放送には時間を定めた放送義務があり、携帯電話事業者にはSMS送信を指示できること。一方で、三つの点が未解決です。首相決定18/2021のハザード基準の1〜5リスクレベルと、2023年法の対応能力基準の1〜3民間防衛レベルが並存し、両者を正式に対応付ける文書がありません。政令66/2021は指揮を1〜5レベルに、政令200/2025は宣言権限を1〜3レベルに結び付けたままです。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Decision 18/2021 continues to name the Ministry of Natural
                Resources and Environment, the General Department of
                Hydrometeorology, the Ministry of Information and
                Communications, district People’s Committees and the national
                search-and-rescue committee, all of which have since been merged
                or abolished; no amendment or re-issue of the decision has been
                identified. The Law on the State of Emergency (No. 104/2025/QH15)
                now governs the state of emergency for incidents including
                natural disasters. Finally, the rules are still moving: a fully
                amended Law on Hydrometeorology is in preparation, a new decree
                on dam and reservoir safety with a river-basin approach is being
                drafted, and amendments to the Law on Water Resources have been
                proposed for 2027–2028.
              </>
            ) : (
              <>
                首相決定18/2021は、天然資源環境省、気象水文総局、情報通信省、県人民委員会、国家捜索救難委員会といった、既に統合または廃止された機関の名称を掲げたままで、同決定の改正や再公布は確認されていません。緊急事態法（104/2025/QH15）が、自然災害を含む事態の緊急事態宣言を規律するようになりました。さらに、規則は今も動いています。気象水文法の全面改正が準備中であり、流域単位の統合管理を志向する新たなダム・貯水池安全政令が起草中で、水資源法の改正が2027〜2028年に提案されています。
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
                Since 1 March 2025 one ministry houses both the forecaster and
                the disaster and dyke authority, and since 23 July 2025 the
                political apex is a civil-defence committee run from the
                Ministry of National Defence. The table gives the post-2025
                arrangement and notes the pre-2025 equivalent where it differs.
              </>
            ) : (
              <>
                2025年3月1日以降、予報機関と災害・堤防当局は一つの省庁の下にあり、2025年7月23日以降、政治的な頂点は国防省が運営する民間防衛委員会です。下表は2025年以降の体制を示し、異なる場合は2025年以前の体制を併記します。
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
                  <td className={TDH}>
                    {en
                      ? "Cục Khí tượng Thủy văn (Department of Hydrometeorology; internationally still the Viet Nam Meteorological and Hydrological Administration, VNMHA), including the National Center for Hydro-Meteorological Forecasting (NCHMF)"
                      : "VNMHA（Cục Khí tượng Thủy văn、気象水文局。国際的には引き続き Viet Nam Meteorological and Hydrological Administration）と傘下の NCHMF（Trung tâm Dự báo khí tượng thủy văn quốc gia、国家気象水文予報センター）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Ministry of Agriculture and Environment (MAE). Pre-2025: General Department of Hydrometeorology under the Ministry of Natural Resources and Environment (MONRE)."
                      : "農業環境省（MAE）。2025年以前は天然資源環境省（MONRE）の気象水文総局。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Law 33/2013 Art. 24; Decision 18/2021 Art. 6; Law 90/2015; Decree 200/2025 Art. 47.2"
                      : "法律33/2013第24条、首相決定18/2021第6条、気象水文法90/2015、政令200/2025第47条2項"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Issues the official forecast and warning bulletins with the embedded 1–5 risk level for all hydro-meteorological hazards; operates the national observation network, a Cray XC40 system and 3-km models; hosts the Hanoi Regional Forecasting Support Centre and the Southeast Asia Flash Flood Guidance System."
                      : "全気象水文ハザードについて1〜5のリスクレベルを含む公式予報・警報を発表。国家観測網、Cray XC40、3 km格子モデルを運用。WMOのハノイ地域予報支援センターと東南アジア・フラッシュフラッド・ガイダンスシステム（SeAFFGS）を運営。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Cục Quản lý đê điều và Phòng, chống thiên tai (Department of Dyke Management and Disaster Prevention and Control; Vietnam Disaster and Dyke Management Authority, VDDMA)"
                      : "VDDMA（Cục Quản lý đê điều và Phòng, chống thiên tai、堤防管理・防災局）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "MAE. Pre-2025: Ministry of Agriculture and Rural Development (MARD), standing office of the National Steering Committee for Natural Disaster Prevention and Control."
                      : "農業環境省。2025年以前は農業農村開発省（MARD）に属し、国家災害予防・対策指導委員会の常設事務局。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Decree 35/2025; Decree 200/2025; Decree 63/2025; Circulars 25/2023 and 10/2026"
                      : "政令35/2025、政令200/2025、政令63/2025、省令25/2023・10/2026"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Keeps 24-hour duty and drafts the dispatches that the national committee and MAE co-sign (symbol CĐ-BCĐ-BNNMT); manages dyke emergencies and the Vietnam Disaster Monitoring System (VNDMS); manages the central Disaster Prevention Fund; focal point for international assistance; publishes the annual White Paper."
                      : "24時間当直を置き、国家委員会と農業環境省が連名で出す公電（記号 CĐ-BCĐ-BNNMT）を起案。堤防事故とベトナム災害監視システム（VNDMS）を管理し、中央災害予防・対策基金を運営。国際支援の窓口。年次災害白書を発行。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Reservoir regulators: Cục Quản lý và Xây dựng công trình thủy lợi (Department of Irrigation Works Management and Construction) and Cục Quản lý tài nguyên nước (Department of Water Resources Management) in MAE; the Ministry of Industry and Trade (Bộ Công Thương, MOIT) for hydropower"
                      : "貯水池の規制機関：農業環境省の水利施設管理建設局（Cục Quản lý và Xây dựng công trình thủy lợi）と水資源管理局（Cục Quản lý tài nguyên nước）、水力発電については MOIT（Bộ Công Thương、商工省）"}
                  </td>
                  <td className={TD}>{en ? "MAE; MOIT" : "農業環境省、商工省"}</td>
                  <td className={TD}>
                    {en
                      ? "Decree 114/2018; Decision 18/2021 Art. 58.6; Decree 62/2025; inter-reservoir operation procedures"
                      : "政令114/2018、首相決定18/2021第58条6項、政令62/2025、流域連結貯水池運用規程"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "MAE operates four major irrigation reservoirs and instructs provincial departments on dam safety; MOIT advises on 30 hydropower reservoirs and directs owners to provide reservoir information; provinces manage hundreds of smaller reservoirs. Inundation warnings for discharge or dam failure are issued by VNMHA on the basis of this information."
                      : "農業環境省は4つの大規模灌漑貯水池を直接運用し、省の局にダム安全を指示。商工省は30の水力発電貯水池を監督し、運営者に貯水池情報の提供を指示。数百の小規模貯水池は省が管理。放流・ダム破壊に関する浸水警報は、これらの情報に基づきVNMHAが発表。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Viện Vật lý địa cầu (Institute of Geophysics)"
                      : "地球物理研究所（Viện Vật lý địa cầu）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Vietnam Academy of Science and Technology (VAST)"
                      : "VAST（Vietnam Academy of Science and Technology、ベトナム科学技術アカデミー）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Law 33/2013 Art. 24.3(b); Decision 18/2021 Art. 6"
                      : "法律33/2013第24条3項(b)、首相決定18/2021第6条"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Issues earthquake bulletins (magnitude 3.5 and above) and tsunami warnings; the tsunami siren system is listed under the agriculture ministry in Decision 18/2021."
                      : "地震（マグニチュード3.5以上）と津波の情報を発表。津波サイレン網は首相決定18/2021で農業省の所管。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Ban Chỉ đạo Phòng thủ dân sự quốc gia (National Civil Defence Steering Committee)"
                      : "国家民間防衛指導委員会（Ban Chỉ đạo Phòng thủ dân sự quốc gia）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Headed by the Prime Minister; standing agency: Ministry of National Defence; office: Cục Cứu hộ – Cứu nạn (Department of Rescue and Relief) of the General Staff. Pre-2025: National Steering Committee for Natural Disaster Prevention and Control (MARD) and VINASARCOM."
                      : "首相を長とし、国防省が常設機関、参謀本部の救助救難局（Cục Cứu hộ – Cứu nạn）が事務局。2025年以前は国家災害予防・対策指導委員会（農業農村開発省）とVINASARCOM（国家事故・災害対応・捜索救難委員会）。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Civil Defence Law Art. 34; Decree 200/2025 Art. 5; Decisions 1585/QĐ-TTg (2025) and 1328/QĐ-TTg (2026); working regulation 83/QĐ-BCĐPTDS (2026)"
                      : "民間防衛法第34条、政令200/2025第5条、首相決定1585/QĐ-TTg（2025年）・1328/QĐ-TTg（2026年）、活動規程83/QĐ-BCĐPTDS（2026年）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Directs ministries and provinces, issues dispatches (79 in 2025, jointly with MAE), proposes level-3 civil-defence declarations, sets up forward command posts for the strongest storms, runs the portal ptdsqg.gov.vn and coordinates requests for international aid."
                      : "各省庁・省を指導し、公電を発出（2025年は農業環境省と連名で79本）。レベル3の民間防衛宣言を首相に提案し、最強級の台風では前方指導委員会（現地前線指揮所）を設置。ポータル ptdsqg.gov.vn を運営し、国際支援要請を調整。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Bộ Quốc phòng (Ministry of National Defence, MND) and the military commands at provincial and commune level"
                      : "MND（Bộ Quốc phòng、国防省）と省・社の軍事司令部"}
                  </td>
                  <td className={TD}>{en ? "Government" : "政府"}</td>
                  <td className={TD}>
                    {en
                      ? "Decree 200/2025 Arts 3–8; Decision 83/QĐ-BCĐPTDS; Decision 09/2026/QĐ-TTg; Decision 18/2021 Art. 58"
                      : "政令200/2025第3〜8条、決定83/QĐ-BCĐPTDS、首相決定09/2026/QĐ-TTg、首相決定18/2021第58条"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Standing agency of the national committee and secretariat of the provincial and commune commanding committees; hosts the 112 hotline in provincial military commands; manages the central Civil Defence Fund; transmits bulletins on military networks and by signal flares and typhoon signal masts; provides most evacuation and rescue manpower (1,282,146 soldier-deployments in 2025)."
                      : "国家委員会の常設機関、省・社の指揮委員会の事務局。省軍事司令部にホットライン112を設置。中央民間防衛基金を管理。軍用通信網、信号弾、台風信号柱で情報を伝達。避難・救助の主力（2025年の兵士延べ動員1,282,146人）。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Provincial People’s Committees and Ban Chỉ huy Phòng thủ dân sự cấp tỉnh (provincial Civil Defence Commanding Committees) in 34 provinces and cities"
                      : "省人民委員会と省民間防衛指揮委員会（Ban Chỉ huy Phòng thủ dân sự cấp tỉnh）、34省・市"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Chaired by the provincial chairperson; office staffed by the provincial military command; the Department of Agriculture and Environment (Sở Nông nghiệp và Môi trường) leads disaster prevention. Pre-2025: 63 provinces, each with a disaster-prevention and search-and-rescue commanding committee."
                      : "省主席が委員長、省軍事司令部が事務局、省農業環境局（Sở Nông nghiệp và Môi trường）が災害予防を主導。2025年以前は63省で、各省に災害予防・捜索救難指揮委員会。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Decree 66/2021 Arts 8–9, 12; Decree 200/2025 Arts 7, 15; Law 98/2025; Decision 1899/QĐ-TTg"
                      : "政令66/2021第8〜9条・第12条、政令200/2025第7条・第15条、法律98/2025、首相決定1899/QĐ-TTg"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Commands response at risk levels 2 and 3, declares civil-defence level 2 and the natural-disaster emergency circumstance, directs provincial radio and television, checks reservoir owners’ information provision, regulates reservoirs and reports to the national committee."
                      : "リスクレベル2・3で対応を指揮、民間防衛レベル2と災害緊急事態状況を宣言、省の放送局を指揮、貯水池運営者の情報提供を点検し貯水池を調整、国家委員会に報告。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Commune People’s Committees and commune Civil Defence Commanding Committees (3,321 commune-level units)"
                      : "社（xã）人民委員会と社民間防衛指揮委員会（3,321の社級単位）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Chaired by the commune chairperson; deputies: commune military commander, police chief and head of the Economic Division (Phòng Kinh tế), which also serves as office. Pre-2025: the district tier, abolished on 1 July 2025, held the forced-evacuation power."
                      : "社主席が委員長、副委員長は社軍事指揮官・警察長・経済課（Phòng Kinh tế）長で、経済課が事務局。2025年以前は県（huyện）が強制避難権限を持っていたが、2025年7月1日に廃止。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Decree 66/2021 Art. 7 (as amended by Decree 53/2026); Decree 200/2025 Arts 8, 14; Circular 18/2025/TT-BNNMT; Decision 18/2021 Art. 60"
                      : "政令66/2021第7条（政令53/2026で改正）、政令200/2025第8条・第14条、省令18/2025/TT-BNNMT、首相決定18/2021第60条"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Commands at risk level 1, declares civil-defence level 1, decides forced evacuation, directs the commune loudspeaker station, organises dyke patrols and the commune shock-troop force, identifies danger zones and evacuation sites, files daily flash reports before 16:00 and reports emergencies to the province immediately."
                      : "リスクレベル1で指揮、民間防衛レベル1を宣言、強制避難を決定、社放送局を指揮、堤防巡視と社防災突撃隊を組織、危険区域と避難場所を特定、毎日16時までに速報を提出し、緊急事態は直ちに省へ報告。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Đài Tiếng nói Việt Nam (VOV), Đài Truyền hình Việt Nam (VTV), Vietnam News Agency and the Vietnam Coastal Information System (Hệ thống Thông tin Duyên hải Việt Nam)"
                      : "VOV（Đài Tiếng nói Việt Nam、ベトナムの声放送）、VTV（Đài Truyền hình Việt Nam、ベトナムテレビ）、ベトナム通信社、ベトナム沿岸情報システム（Hệ thống Thông tin Duyên hải Việt Nam）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "State broadcasters; the coastal system is under the transport administration (now the Ministry of Construction)."
                      : "国営放送。沿岸情報システムは交通運輸省（現・建設省）の所管。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Law 33/2013 Art. 24.4; Decision 18/2021 Arts 7, 36, 59"
                      : "法律33/2013第24条4項、首相決定18/2021第7条・第36条・第59条"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Mandatory relay of official bulletins: VOV immediately twice and then hourly for emergency storm and flood bulletins, VTV every two hours (three hours for non-emergency bulletins); coastal radio to vessels; the Disaster Prevention Reporters’ Club links the committee to the press (more than 150,000 news items in 2025)."
                      : "公式情報の放送義務：VOVは緊急暴風・洪水情報を即時2回、その後毎時、VTVは2時間ごと（通常時は3時間ごと）。沿岸無線で船舶へ通報。災害予防記者クラブが委員会と報道機関をつなぐ（2025年の報道件数15万件超）。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en ? "Mobile operators and Zalo (VNG)" : "携帯電話事業者と Zalo（VNG）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Ministry of Science and Technology (successor to the Ministry of Information and Communications); VNG is a private company."
                      : "科学技術省（旧情報通信省の後継）。VNGは民間企業。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Decision 18/2021 Art. 58.4; no statutory duty on operators yet (proposed in the 2026 hydrometeorology bill)"
                      : "首相決定18/2021第58条4項。事業者自身の法的義務はまだなく、2026年の気象水文法案で提案。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Send mass SMS to subscribers in affected areas at government request (48.4 million SMS in 2025); the committee’s Zalo official account, operating since 2020, carried 492 million messages in 2025; a Zalo mini-app launched in 2023 with UNICEF offers content in Dao, Mông, Thái and Khmer."
                      : "政府の要請により被災予定地域の加入者にSMSを一斉送信（2025年は4,840万通）。2020年開設の委員会Zalo公式アカウントは2025年に4億9,200万通を配信。2023年にUNICEFと開設したミニアプリはザオ語・モン語・タイ語・クメール語に対応。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Vietnam Fatherland Front, the Community Fund for Disaster Prevention (Quỹ Cộng đồng Phòng tránh thiên tai), commune shock-troop forces and community-based programmes"
                      : "ベトナム祖国戦線、災害予防コミュニティ基金（Quỹ Cộng đồng Phòng tránh thiên tai）、社防災突撃隊、地域防災事業"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Mass organisation; non-state fund; commune People’s Committees"
                      : "大衆組織、非国家基金、社人民委員会"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Law 33/2013 Art. 4.3 (four on-the-spot principle); Decision 42/QĐ-BCĐ (2025) on shock-troop forces; community awareness programme (Đề án 553)"
                      : "法律33/2013第4条3項（「四つの現地」原則）、決定42/QĐ-BCĐ（2025年、突撃隊）、コミュニティ意識向上事業（Đề án 553）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Relief fund-raising (VND 1,308 billion to 23 provinces in 2025); advocacy for rainfall-scenario flood simulations usable during blackouts; first response and door-to-door dissemination in villages; participatory risk maps and drills."
                      : "救援募金（2025年は23省に1兆3,080億ドン）、停電時にも使える降雨シナリオ別浸水シミュレーションの提唱、村落での初動と戸別伝達、参加型リスク図と訓練。"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                <strong className="text-foreground">Cục Khí tượng Thủy văn</strong> is the single point of origin for every
                hydro-meteorological warning. Under Decision 18/2021 its bulletins
                are the official bulletins to be used in directing prevention,
                response and recovery, and the risk level is part of the
                bulletin. Its forecasting base is substantial for the region: a
                Cray XC40 system of about 80 TFlops, a 3-km deterministic model
                and a 32-member 9-km ensemble, and a Central Data Hub shared with
                provincial offices. It also carries two regional functions for
                WMO, the Hanoi Regional Forecasting Support Centre of the Severe
                Weather Forecasting Programme (since 2010) and the Southeast Asia
                Flash Flood Guidance System for Cambodia, Laos, Thailand and
                Vietnam, which ingests radar extrapolation and 3-km WRF output.
                The weakness that the service itself acknowledges lies in the
                localisation of extreme rainfall, flash-flood and landslide
                warnings, not in the synoptic forecast.
              </>
            ) : (
              <>
                <strong className="text-foreground">気象水文局（Cục Khí tượng Thủy văn）</strong>は、全ての気象水文警報の唯一の発信源です。首相決定18/2021により、同局の情報は予防・対応・復旧の指揮に用いる公式情報と位置づけられ、リスクレベルはその情報の一部です。予報基盤は域内では充実しており、約80 TFlopsのCray XC40、3 km格子の決定論モデル、9 km格子32メンバーのアンサンブル、省の支所と共有する中央データハブを備えます。WMOの地域機能も二つ担い、荒天予報プログラムのハノイ地域予報支援センター（2010年以降）と、レーダー外挿と3 km格子WRFを取り込むカンボジア・ラオス・タイ・ベトナム向け東南アジア・フラッシュフラッド・ガイダンスシステムを運営しています。同局自身が認める弱点は総観規模の予報ではなく、極端降雨・土石流・地すべり警報の局地化にあります。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">The Ministry of Agriculture and Environment</strong> is the institutional
                novelty of 2025. By housing the forecaster and{" "}
                <strong className="text-foreground">VDDMA</strong> in one ministry, the merger under Decree 35/2025 closed
                the historical seam between MONRE and MARD: the same ministry now
                issues the warning, drafts the national response dispatch,
                manages the dyke system (311 weak points identified before the
                2025 season) and runs the Disaster Prevention Fund under Decree
                63/2025. Risk knowledge sits here too: the Vietnam Disaster
                Monitoring System integrates population, economic and
                infrastructure data with local systems for the national
                committee, fed by 2,752 specialised rain and water-level stations
                by May 2025. Reservoirs, however, remain divided between MAE
                (irrigation reservoirs and dam-safety regulation under Decree
                114/2018), MOIT (hydropower, about 30 major reservoirs) and the
                provinces, which manage hundreds of smaller reservoirs often
                without specialised staff; only 411 reservoirs have downstream
                inundation maps.
              </>
            ) : (
              <>
                <strong className="text-foreground">農業環境省（MAE）</strong>は2025年の制度上の新機軸です。政令35/2025による統合は、予報機関と<strong className="text-foreground">VDDMA</strong>を一つの省庁に収め、天然資源環境省と農業農村開発省の間にあった歴史的な継ぎ目を閉じました。同じ省庁が警報を発表し、国家対応公電を起案し、堤防網（2025年シーズン前に311の弱点箇所を特定）を管理し、政令63/2025の下で災害予防・対策基金を運営します。リスク知識もここに集まり、ベトナム災害監視システム（VNDMS）が人口・経済・施設データを地方システムと統合して国家委員会に提供し、2025年5月時点で2,752の専用雨量・水位観測所が接続されています。しかし貯水池は、農業環境省（灌漑貯水池と政令114/2018に基づくダム安全規制）、商工省（水力発電、主要約30貯水池）、省（数百の小規模貯水池、専門職員を欠くことが多い）に分かれたままで、下流浸水図を持つ貯水池は411にとどまります。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">The National Civil Defence Steering Committee</strong> and the{" "}
                <strong className="text-foreground">Ministry of National Defence</strong> provide the response pillar. The
                committee was created by Decision 1585/QĐ-TTg on 23 July 2025
                from three predecessors and re-constituted by Decision
                1328/QĐ-TTg on 21 July 2026 under Prime Minister Lê Minh Hưng,
                with a Standing Deputy Prime Minister as standing deputy head and
                the Chief of the General Staff as standing member. Its working
                regulation of 27 July 2026 (Decision 83/QĐ-BCĐPTDS) makes MND the
                standing agency that drafts the programme, runs the office and
                prepares forward command posts with provincial standing bodies.
                In 2025 the committee set up forward steering committees at
                Military Region 4 for storms Kajiki and Bualoi and at Gia Lai for
                Kalmaegi, headed on site by a Deputy Prime Minister, while the
                military and police recorded 1,282,146 soldier-deployments,
                notified 907,661 vessels and helped 325,858 households to
                relocate. In practice MAE remains the operational secretariat
                for natural disasters: the dispatches carry the joint symbol
                CĐ-BCĐ-BNNMT and MAE keeps the 24-hour duty that advises the
                committee and the Prime Minister.
              </>
            ) : (
              <>
                <strong className="text-foreground">国家民間防衛指導委員会</strong>と<strong className="text-foreground">国防省（MND）</strong>が対応能力の柱を担います。委員会は2025年7月23日の首相決定1585/QĐ-TTgで三つの前身組織から創設され、2026年7月21日の首相決定1328/QĐ-TTgによりLê Minh Hưng首相の下で再編され、常任副首相が常任副委員長、参謀総長が常任委員を務めます。2026年7月27日の活動規程（決定83/QĐ-BCĐPTDS）は国防省を常設機関とし、活動計画の起案、事務局の運営、省の常設機関と連携した前方指揮所の準備を担わせています。2025年には台風KajikiとBualoiで第4軍区に、台風KalmaegiでGia Laiに前方指導委員会を設置し、副首相が現地で指揮しました。軍・警察は兵士延べ1,282,146人を動員し、907,661隻の船舶に通報し、325,858世帯の避難を支援しました。実務上は農業環境省が自然災害の運用事務局であり続け、公電は連名記号CĐ-BCĐ-BNNMTを帯び、委員会と首相に助言する24時間当直も同省が担っています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">Provincial and commune People’s Committees</strong> hold the command and
                evacuation powers. The reform of 2025 left two tiers: 34
                provinces and cities, and 3,321 commune-level units, many formed
                by merging two or three and up to seven former communes. The
                provincial commanding committee pairs a military office with a
                civilian disaster lead, the Department of Agriculture and
                Environment; the commune committee pairs the military commander
                and police chief with the Economic Division. Since July 2025 the
                commune chairperson concentrates the level-1 civil-defence
                declaration, level-1 risk command, forced evacuation, the
                loudspeaker network and daily reporting. Officials at an August
                2025 forum in Ninh Bình said that the new communes still lack
                equipment and personnel and must rebuild plans that had been
                written at district level.
              </>
            ) : (
              <>
                <strong className="text-foreground">省・社の人民委員会</strong>が指揮権と避難権限を握ります。2025年の改革後は34の省・市と3,321の社級単位の二層のみとなり、新しい社の多くは旧2〜3社、最大で7社の合併で生まれました。省指揮委員会は軍の事務局と民生の災害担当（省農業環境局）を組み合わせ、社指揮委員会は軍事指揮官・警察長と経済課を組み合わせます。2025年7月以降、社主席には民間防衛レベル1の宣言、リスクレベル1の指揮、強制避難、拡声放送網、日次報告が集中しています。2025年8月にNinh Bìnhで開かれた会合では、新しい社は依然として機材と人員を欠き、県レベルで作られていた計画を作り直さなければならないと指摘されました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">VOV, VTV</strong> and the telecom channel form the dissemination pillar.
                The broadcast duty is unusually specific in law, down to the
                repeat interval, and the SMS channel rests on the power of the
                former Ministry of Information and Communications to direct
                operators rather than on a duty of the operators themselves.
                Zalo, a private messaging platform, has become the largest single
                channel by volume. Below the media sit the commune loudspeaker
                stations, the shock-troop forces and the community awareness
                programme (Đề án 553), which the 2025 White Paper prioritises for
                2026 with drills in ethnic-minority and mountain areas and
                participatory risk maps. The Fatherland Front channels relief
                funds, and the non-state Community Fund for Disaster Prevention,
                chaired by former minister Cao Đức Phát, advocates scenario-based
                flood simulations for 300, 500 and 700 mm of rain that communes
                can use during blackouts. The role of the Vietnam Red Cross in
                warning dissemination is not defined in the instruments reviewed
                here.
              </>
            ) : (
              <>
                <strong className="text-foreground">VOV・VTV</strong>と通信チャネルが伝達の柱です。放送義務は繰り返し間隔まで法律で定められている点で異例であり、SMSチャネルは事業者自身の義務ではなく、旧情報通信省が事業者に指示する権限に依拠しています。民間メッセージングプラットフォームのZaloは、量では最大の単一チャネルになりました。報道の下層には、社放送局、突撃隊、コミュニティ意識向上事業（Đề án 553）があり、2025年災害白書は少数民族・山岳地域での訓練と参加型リスク図を2026年の優先課題としています。祖国戦線は救援資金を取りまとめ、元大臣Cao Đức Phátが率いる非国家の災害予防コミュニティ基金は、停電時にも社が使える降雨300・500・700 mmのシナリオ別浸水シミュレーションを提唱しています。ベトナム赤十字の警報伝達における役割は、本稿で参照した法令には定められていません。
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
                The chain is codified step by step. Decision 18/2021 fixes what
                the bulletin contains, how often it is issued and whom it must
                reach within 15 minutes; Decree 66/2021 and Decree 200/2025 fix
                who commands at each level; Decision 18/2021 Art. 60 fixes how a
                commune relays the message. The response to Typhoon Kalmaegi
                (storm No. 13) in November 2025 illustrates the sequence.
              </>
            ) : (
              <>
                連鎖は段階ごとに法定されています。首相決定18/2021が情報の内容、発表頻度、15分以内に届けるべき宛先を定め、政令66/2021と政令200/2025が各レベルの指揮者を定め、首相決定18/2021第60条が社での伝達方法を定めます。2025年11月の台風Kalmaegi（第13号）への対応が、この手順を示しています。
              </>
            )}
          </p>
          <ol className={OL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Forecast and warning with risk level.</strong> NCHMF, under Cục Khí
                  tượng Thủy văn, issues the bulletin. Storm bulletins are issued
                  four times a day (02:00, 08:00, 14:00, 20:00) for storms in the
                  East Sea and eight times a day for emergency bulletins and
                  storms over land, with hourly quick updates on the portal. A
                  heavy-rain warning is issued when heavy rain is possible within
                  48 hours; a flood warning when a river may reach alarm level 1
                  (báo động 1), a flood bulletin at alarm level 2 and an emergency
                  flood bulletin at alarm level 3; flash-flood and landslide
                  warnings are issued immediately upon detection. The 1–5 risk
                  level is printed in the bulletin.
                </>
              ) : (
                <>
                  <strong className="text-foreground">リスクレベル付きの予報・警報。</strong>気象水文局傘下のNCHMFが情報を発表します。台風情報は東海上の台風について1日4回（02時・08時・14時・20時）、緊急台風情報と上陸後は1日8回、加えてポータルで毎時の速報が出ます。大雨警報は48時間以内に大雨の可能性があるとき、洪水警報は河川水位が警戒水位（báo động）1に達する可能性があるとき、洪水情報は警戒水位2、緊急洪水情報は警戒水位3で発表され、土石流・地すべり警報は危険を検知した直後に発表されます。1〜5のリスクレベルは情報に明記されます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Transmission within 15 minutes.</strong> The issuer delivers the
                  bulletin to the agencies listed in Appendix IV through public
                  networks and dedicated systems (disaster-command hotlines,
                  border-guard communications, the tsunami warning system,
                  operator disaster-communication services). VOV, VTV, the Coastal
                  Information System and provincial broadcasters relay it on the
                  fixed schedule.
                </>
              ) : (
                <>
                  <strong className="text-foreground">15分以内の伝達。</strong>発表機関は附属書IVに列挙された機関に、公衆網と専用系統（災害指揮ホットライン、国境警備隊通信、津波警報システム、通信事業者の災害通信サービス）を通じて情報を届けます。VOV、VTV、沿岸情報システム、省の放送局が定められた頻度で放送します。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">National direction.</strong> The Prime Minister issues dispatches
                  (công điện; 65 in 2025) and the National Civil Defence Steering
                  Committee, through MAE, issues its own (79 dispatches and 125
                  directive documents in 2025). For Kalmaegi: Dispatch
                  25/CĐ-BCĐ-BNNMT on 2 November to the coastal provinces from
                  Thanh Hóa to An Giang when the storm neared the East Sea;
                  Prime Minister’s Dispatch 208/CĐ-TTg and Dispatch
                  26/CĐ-BCĐ-BNNMT on 4 November; an online meeting with the
                  provinces chaired by Deputy Prime Minister Trần Hồng Hà on 5
                  November; Dispatches 210/CĐ-TTg and 27/CĐ-BCĐ-BNNMT on 6
                  November; and a forward command post at Gia Lai. A level-3
                  civil-defence declaration would be made by the Prime Minister
                  and broadcast.
                </>
              ) : (
                <>
                  <strong className="text-foreground">国家レベルの指導。</strong>首相が公電（công điện、2025年は65本）を発出し、国家民間防衛指導委員会が農業環境省を通じて独自の公電（2025年は79本の公電と125本の指導文書）を発出します。台風Kalmaegiでは、台風が東海に接近した11月2日にThanh HóaからAn Giangまでの沿岸各省へ公電25/CĐ-BCĐ-BNNMT、11月4日に首相公電208/CĐ-TTgと公電26/CĐ-BCĐ-BNNMT、11月5日にTrần Hồng Hà副首相が各省とオンライン会議、11月6日に公電210/CĐ-TTgと27/CĐ-BCĐ-BNNMT、そしてGia Laiに前方指揮所が置かれました。民間防衛レベル3の宣言は首相が行い、放送されます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Provincial command.</strong> The provincial Civil Defence
                  Commanding Committee, chaired by the provincial chairperson,
                  commands at risk levels 2 and 3, may declare civil-defence level
                  2 and the natural-disaster emergency circumstance, directs
                  provincial radio and television and regulates reservoirs.
                  Kalmaegi made landfall over Gia Lai and Đắk Lắk on 6 November;
                  about 350,000 people were evacuated in Gia Lai and 7,976 in Đắk
                  Lắk, six people died and damage was put at VND 13,097 billion.
                </>
              ) : (
                <>
                  <strong className="text-foreground">省の指揮。</strong>省主席が率いる省民間防衛指揮委員会がリスクレベル2・3で指揮し、民間防衛レベル2と災害緊急事態状況を宣言でき、省の放送局を指揮し、貯水池を調整します。Kalmaegiは11月6日にGia Lai・Đắk Lắkに上陸し、Gia Laiで約35万人、Đắk Lắkで7,976人が避難し、死者6人、被害額は約13兆970億ドンと集計されました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Commune command and the last mile.</strong> The commune committee
                  commands at level 1, declares civil-defence level 1, decides
                  forced evacuation, runs the loudspeaker station and the
                  shock-troop force, and reports daily before 16:00. Decision
                  18/2021 Art. 60 still describes the commune as receiving the
                  bulletin from the district, a tier that no longer exists.
                </>
              ) : (
                <>
                  <strong className="text-foreground">社の指揮とラストマイル。</strong>社指揮委員会がレベル1で指揮し、民間防衛レベル1を宣言し、強制避難を決定し、社放送局と突撃隊を運用し、毎日16時までに報告します。首相決定18/2021第60条は、社が県から情報を受け取ると記したままですが、県はもはや存在しません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Direct-to-citizen channels.</strong> In parallel, mass SMS and Zalo
                  messages are sent at government request, the 112 hotline
                  receives reports, and the committee’s Facebook page (3,170
                  posts and 323 million reach in 2025) and the Reporters’ Club
                  feed the media.
                </>
              ) : (
                <>
                  <strong className="text-foreground">住民への直接チャネル。</strong>並行して、政府の要請によりSMSとZaloの一斉配信が行われ、ホットライン112が通報を受け、委員会のFacebookページ（2025年は3,170件投稿、リーチ3億2,300万）と記者クラブが報道を支えます。
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
                  <td className={TDH}>{en ? "Storm / tropical depression" : "台風・熱帯低気圧"}</td>
                  <td className={TD}>{en ? "Cục Khí tượng Thủy văn (NCHMF)" : "気象水文局（NCHMF）"}</td>
                  <td className={TD}>
                    {en
                      ? "Risk levels 3–5 by wind force and region (Decision 18/2021 Art. 42): level 3 for force 8–9 anywhere or force 10–11 at sea; level 4 for force 12–13 over coastal waters and most land regions; level 5 for force 14–15 over the Northwest, Việt Bắc, South-Central, Highlands and South, or a super typhoon of force 16 and above near shore or over land."
                      : "風力階級と地域によるリスクレベル3〜5（首相決定18/2021第42条）：レベル3は風力8〜9（全域）または海上の風力10〜11、レベル4は沿岸海域・陸上大半の風力12〜13、レベル5は北西部・Việt Bắc・南中部・高原・南部の風力14〜15、または沿岸・陸上の風力16以上のスーパー台風。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Bulletins 4 or 8 times daily; VOV/VTV; Coastal Information System to vessels (907,661 vessels notified in 2025); SMS and Zalo; loudspeakers."
                      : "1日4回または8回の情報、VOV・VTV、沿岸情報システムによる船舶通報（2025年は907,661隻）、SMSとZalo、拡声放送。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Heavy rain, river flood, inundation" : "大雨・河川洪水・浸水"}</td>
                  <td className={TD}>{en ? "Cục Khí tượng Thủy văn (NCHMF)" : "気象水文局（NCHMF）"}</td>
                  <td className={TD}>
                    {en
                      ? "Heavy-rain warning (48 h); flood warning at alarm level 1 (báo động 1); flood bulletin at alarm level 2; emergency flood bulletin at alarm level 3; inundation warning when dam failure, reservoir discharge or dyke breach is likely; risk levels 1–5."
                      : "大雨警報（48時間前）、警戒水位1での洪水警報、警戒水位2での洪水情報、警戒水位3での緊急洪水情報、ダム破壊・放流・堤防決壊の危険時の浸水警報。リスクレベル1〜5。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "VOV hourly for emergency bulletins; provincial radio; loudspeakers; SMS and Zalo (two SMS rounds to 26.4 million subscribers during the 16–22 November 2025 floods)."
                      : "緊急情報はVOVが毎時放送、省の放送、拡声放送、SMSとZalo（2025年11月16〜22日の洪水では2,640万加入者にSMS2回）。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Flash flood / landslide" : "土石流（鉄砲水）・地すべり"}</td>
                  <td className={TD}>{en ? "Cục Khí tượng Thủy văn (NCHMF)" : "気象水文局（NCHMF）"}</td>
                  <td className={TD}>
                    {en
                      ? "Levels 1–3 by 24-hour rainfall (100–200, 200–400 and above 400 mm) combined with antecedent rain and four provincial zones (Art. 46, Appendix XII); issued immediately upon detection; the highest level applies where a warning area spans zones."
                      : "24時間降水量（100〜200、200〜400、400 mm超）と先行降雨、4つの省区分を組み合わせたレベル1〜3（第46条、附属書XII）。検知直後に発表、区分が異なる地域にまたがる場合は最高レベルを適用。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Bulletins and Zalo at district or commune scale; no village-scale national product; research pilots use sirens, Zalo to village leaders every 20 minutes and checkpoints."
                      : "県・社スケールの情報とZalo。村落スケールの全国製品はなく、研究パイロットがサイレン、20分ごとの村長へのZalo、検問所を試行。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Reservoir discharge / dam incident" : "貯水池放流・ダム事故"}</td>
                  <td className={TD}>
                    {en
                      ? "Reservoir owners under MOIT or MAE direction; Cục Khí tượng Thủy văn for the inundation warning"
                      : "商工省または農業環境省の指示下の貯水池運営者。浸水警報は気象水文局"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "No uniform level scale; owners must provide reservoir information (Decision 18/2021 Art. 58); inter-reservoir procedures set gate sequences (Red River, Decision 1936/QĐ-TTg, 2026)."
                      : "統一されたレベル区分はなく、運営者に貯水池情報の提供義務（首相決定18/2021第58条）。流域連結貯水池運用規程がゲート操作順序を定める（紅河、首相決定1936/QĐ-TTg、2026年）。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Phone calls and official memos to downstream authorities; provincial committee updates (about every 30 minutes in Đắk Lắk, November 2025); only 411 reservoirs have downstream inundation maps."
                      : "下流の当局への電話と公文書、省指揮委員会の更新（2025年11月のĐắk Lắkでは約30分ごと）。下流浸水図を持つ貯水池は411のみ。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Dyke incident" : "堤防事故"}</td>
                  <td className={TD}>
                    {en
                      ? "Provincial Department of Agriculture and Environment, then the provincial chairperson"
                      : "省農業環境局の提案により省主席"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Declaration of a natural-disaster emergency circumstance (Decree 66/2021 Art. 12); 185 dyke incidents in 2025."
                      : "災害緊急事態状況の宣言（政令66/2021第12条）。2025年の堤防事故は185件。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Administrative decision; commune dyke patrols and the people’s dyke force."
                      : "行政決定。社の堤防巡視と住民堤防隊。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Civil-defence level (all hazards)" : "民間防衛レベル（全ハザード）"}</td>
                  <td className={TD}>
                    {en
                      ? "Commune chairperson (level 1), provincial chairperson (level 2), Prime Minister (level 3)"
                      : "社主席（レベル1）、省主席（レベル2）、首相（レベル3）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Three capacity-based levels under the Civil Defence Law as amended by Law 98/2025 and Decree 200/2025 Arts 14–15."
                      : "法律98/2025で改正された民間防衛法と政令200/2025第14〜15条に基づく、対応能力基準の3段階。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Level 3 must be broadcast by the media; levels 1–2 by local decision and loudspeakers."
                      : "レベル3は報道機関による放送が義務。レベル1〜2は地方の決定と拡声放送。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Earthquake / tsunami" : "地震・津波"}</td>
                  <td className={TD}>{en ? "Institute of Geophysics (VAST)" : "地球物理研究所（VAST）"}</td>
                  <td className={TD}>
                    {en
                      ? "Earthquakes of magnitude 3.5 and above; offshore earthquakes of 6.5 and above that may cause tsunami; distant tsunami."
                      : "マグニチュード3.5以上の地震、津波を起こし得るマグニチュード6.5以上の海域地震、遠地津波。"}
                  </td>
                  <td className={TD}>{en ? "Tsunami warning system and sirens; VOV/VTV." : "津波警報システムとサイレン、VOV・VTV。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                Dissemination is quantitatively massive. In 2025 the authorities
                sent more than 48.4 million SMS and 492 million Zalo messages to
                subscribers in affected areas; during the central floods of
                16–22 November 2025 MAE, with the Ministry of Science and
                Technology and Zalo, sent two rounds of SMS to 26.4 million
                subscribers and three rounds totalling 24.1 million Zalo
                messages. The 112 hotline, designated by Decision 2023/QĐ-TTg of
                15 September 2025 and located in provincial military commands,
                received 56,801 calls in 2025. Over 3,000 hardened base stations
                able to withstand risk-level-4 conditions exist in 12 coastal
                provinces, yet about 3,600 base stations were affected in 2025.
                The commune loudspeaker station remains the legal last-mile
                channel. Impact-based forecasting is a policy goal rather than an
                operational standard: VNMHA describes it as a current challenge
                in its 2025 report to the Typhoon Committee, and it is policy
                group 2 of the draft amended Law on Hydrometeorology. Vietnam
                told the WMO Extraordinary Congress in October 2025 that it is
                ready to speed up the national rollout of the Early Warnings for
                All roadmap. No national alerting platform based on the Common
                Alerting Protocol and no cell-broadcast capability were
                identified in official sources.
              </>
            ) : (
              <>
                伝達は量的には圧倒的です。2025年に当局は被災予定地域の加入者へ4,840万通超のSMSと4億9,200万通のZaloメッセージを送り、2025年11月16〜22日の中部洪水では農業環境省が科学技術省とZaloとともに2,640万加入者へSMSを2回、計2,410万通のZaloメッセージを3回配信しました。2025年9月15日の首相決定2023/QĐ-TTgで指定され省軍事司令部に置かれたホットライン112は、2025年に56,801件の通報を受けました。沿岸12省にはリスクレベル4の条件に耐える堅牢化基地局が3,000局超ありますが、2025年には約3,600局が被災しました。社放送局は依然として法定のラストマイル・チャネルです。影響予測型予報は運用基準ではなく政策目標にとどまり、VNMHAは台風委員会への2025年報告で「現在の課題」と記し、気象水文法改正案では政策群2に位置づけられています。ベトナムは2025年10月のWMO臨時総会で、Early Warnings for Allロードマップの国内展開を加速する用意があると表明しました。共通警報プロトコル（CAP）に基づく全国警報プラットフォームやセルブロードキャスト機能は、公的資料では確認できませんでした。
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
                  <strong className="text-foreground">June 2020 —</strong> Law 60/2020/QH14 (17 June) amended the Law on
                  Natural Disaster Prevention and Control and the Law on Dykes,
                  reportedly adding landslide and flash-flood measures and
                  strengthening the science and human-resource provisions; it
                  opened the 2020–2021 wave of legal consolidation.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2020年6月 —</strong> 法律60/2020/QH14（6月17日）が災害予防・対策法と堤防法を改正し、土砂災害対策の追加と科学技術・人材規定の強化を行ったと報告されます。2020〜2021年の法制整備の起点です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">March–August 2021 —</strong> Decision 379/QĐ-TTg (17 March)
                  approved the National Strategy to 2030 with targets to halve
                  flash-flood and landslide deaths against 2011–2020, keep losses
                  below 1.2% of GDP and reach every household with disaster
                  information, due for a five-year review in 2026; Decision
                  18/2021/QĐ-TTg (22 April) unified the forecasting, warning and
                  risk-level rules; Decree 66/2021 (6 July) mapped command to the
                  five risk levels; Decree 78/2021 (1 August) organised the
                  Disaster Prevention Fund. This is the codified chain that the
                  later reforms inherited.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2021年3〜8月 —</strong> 首相決定379/QĐ-TTg（3月17日）が2030年までの国家戦略を承認し、土石流・地すべり死者の2011〜2020年比半減、損失のGDP比1.2%以下、全世帯への災害情報到達を目標に掲げました（2026年に5年レビュー）。首相決定18/2021/QĐ-TTg（4月22日）が予報・警報・リスクレベルの規則を統合し、政令66/2021（7月6日）が指揮を5段階のリスクレベルに対応付け、政令78/2021（8月1日）が災害予防・対策基金を組織しました。後の改革が引き継いだ法定連鎖の原型です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">June 2023 —</strong> The Law on Civil Defence (18/2023/QH15) created
                  the three civil-defence levels and a National Steering
                  Committee for Civil Defence absorbing the disaster steering
                  committee and the search-and-rescue committee, effective 1 July
                  2024; in July 2023 the Zalo mini-app with UNICEF added
                  minority-language content to the dissemination chain.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2023年6月 —</strong> 民間防衛法（18/2023/QH15）が3段階の民間防衛レベルと、災害指導委員会・捜索救難委員会を統合する国家民間防衛指導委員会を創設し、2024年7月1日に施行されました。2023年7月にはUNICEFとのZaloミニアプリが少数民族言語の内容を伝達連鎖に加えました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">September 2024 —</strong> Typhoon Yagi: the ministerial review of 17
                  September found forecasts timely but recorded Thác Bà inflow of
                  5,620 m³/s against a discharge capacity of 3,230 m³/s and more
                  than 800 dyke incidents in 26 provinces; MONRE announced a
                  review of reservoir operating procedures, the origin of the
                  2026 Red River procedure.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年9月 —</strong> 台風Yagi：9月17日の省レビューは予報を適時と評価しつつ、Thác Bàの流入量5,620 m³/sが放流能力3,230 m³/sを上回ったこと、26省で800件超の堤防事故が起きたことを記録し、天然資源環境省は貯水池運用規程の見直しを表明しました。2026年の紅河規程の起点です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">February–March 2025 —</strong> Decree 35/2025 created the Ministry
                  of Agriculture and Environment from MONRE and MARD (1 March),
                  placing Cục Khí tượng Thủy văn and Cục Quản lý đê điều và
                  Phòng, chống thiên tai in one ministry; Decree 63/2025 moved the
                  Disaster Prevention Fund apparatus to MAE and the provincial
                  specialised divisions.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年2〜3月 —</strong> 政令35/2025が天然資源環境省と農業農村開発省を統合して農業環境省を創設し（3月1日）、気象水文局と堤防管理・防災局が同一省庁に収まりました。政令63/2025は災害予防・対策基金の運営機構を農業環境省と省の専門部局に移しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">June 2025 —</strong> The National Assembly cut provincial-level
                  units from 63 to 34 and abolished the district tier (resolution
                  of 12 June, effective 1 July); Decrees 131/2025 and 136/2025
                  and Circular 18/2025/TT-BNNMT (19 June) delimited two-tier
                  competences and gave communes 12 groups of former district
                  tasks; Directive 19/CT-TTg (19 June) ordered disaster
                  prevention to run uninterrupted through the reorganisation; Law
                  98/2025 (27 June) adapted the Civil Defence Law to two tiers.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年6月 —</strong> 国会が省級単位を63から34に削減し、県を廃止（6月12日決議、7月1日施行）。政令131/2025・136/2025と省令18/2025/TT-BNNMT（6月19日）が二層制の権限を区分し、旧県の12群の業務を社に移管。指示19/CT-TTg（6月19日）は機構再編の間も防災を中断なく運営するよう命じ、法律98/2025（6月27日）が民間防衛法を二層制に適合させました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">July 2025 —</strong> Decree 200/2025 (9 July) detailed the Civil
                  Defence Law and repealed the committee articles of Decree
                  66/2021; Decision 1585/QĐ-TTg (23 July) merged the three
                  national committees into the National Civil Defence Steering
                  Committee, which met for the first time on 24 July connected to
                  34 provinces and 3,321 communes; storm Wipha (22 July) was the
                  first storm to strike the north under the two-tier model.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年7月 —</strong> 政令200/2025（7月9日）が民間防衛法を具体化し、政令66/2021の委員会条項を廃止。首相決定1585/QĐ-TTg（7月23日）が三つの国家委員会を国家民間防衛指導委員会に統合し、7月24日の初会合は34省と3,321社をオンラインで結びました。台風Wipha（7月22日）は二層制の下で北部に上陸した最初の台風でした。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">September–December 2025 —</strong> Decision 1899/QĐ-TTg (4
                  September) reorganised the provincial and commune commanding
                  committees; Decision 2023/QĐ-TTg (15 September) designated the
                  112 hotline; the committee portal ptdsqg.gov.vn was created (3
                  November); Government Resolutions 347/NQ-CP (24 October) and
                  380/NQ-CP (25 November) and Party Conclusion 213-KL/TW (21
                  November) followed the record season; Law 146/2025 (11
                  December) amended 15 laws including those on disaster
                  prevention, dykes and hydrometeorology; Law 104/2025 regulated
                  the state of emergency; Decision 42/QĐ-BCĐ (24 December) issued
                  guidance for the commune shock-troop forces.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年9〜12月 —</strong> 首相決定1899/QĐ-TTg（9月4日）が省・社の指揮委員会を再編、首相決定2023/QĐ-TTg（9月15日）がホットライン112を指定、委員会ポータル ptdsqg.gov.vn を開設（11月3日）。記録的なシーズンを受けて政府決議347/NQ-CP（10月24日）・380/NQ-CP（11月25日）と党の結論213-KL/TW（11月21日）が出され、法律146/2025（12月11日）が災害予防・堤防・気象水文を含む15法を改正、法律104/2025が緊急事態を規律、決定42/QĐ-BCĐ（12月24日）が社防災突撃隊の運用指針を定めました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">February–April 2026 —</strong> Decree 53/2026 (5 February) amended
                  Decree 66/2021, reportedly transferring the district powers in
                  Arts 7–9 to commune chairpersons; Circular 10/2026 (6 February)
                  removed the district tier from dyke and disaster forms;
                  Resolution 12/2026/NQ-CP (31 March) set urgent dam-safety
                  measures; the national disaster-prevention conference concluded
                  on 3 April (Notice 171/TB-VPCP); Decree 113/2026 (1 April)
                  updated the hydrometeorology decree; Decision 09/2026/QĐ-TTg
                  (effective 20 April) established the central Civil Defence Fund
                  under the Ministry of National Defence.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年2〜4月 —</strong> 政令53/2026（2月5日）が政令66/2021を改正し、第7〜9条の県権限を社主席に移したと報じられます。省令10/2026（2月6日）が堤防・防災様式から県を削除、決議12/2026/NQ-CP（3月31日）がダム安全の緊急措置を定め、全国防災会議の結論が4月3日に通知（171/TB-VPCP）され、政令113/2026（4月1日）が気象水文政令を更新、首相決定09/2026/QĐ-TTg（4月20日施行）が国防省の下に中央民間防衛基金を設置しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">July 2026 —</strong> Decision 1328/QĐ-TTg (21 July) re-constituted
                  the National Civil Defence Steering Committee under the new
                  Prime Minister; Decision 83/QĐ-BCĐPTDS (27 July) issued its
                  working regulation with the Ministry of National Defence as
                  standing agency, replacing the July 2025 regulation.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年7月 —</strong> 首相決定1328/QĐ-TTg（7月21日）が新首相の下で国家民間防衛指導委員会を再編し、決定83/QĐ-BCĐPTDS（7月27日）が国防省を常設機関とする活動規程を定め、2025年7月の規程を置き換えました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">October 2026 —</strong> Decision 1936/QĐ-TTg (6 October) replaced
                  the 2019 Red River inter-reservoir procedure and a decision
                  issued one day earlier, capping the Thác Bà flood-season level
                  at 56 m until the spillway is upgraded and addressing the
                  procedure to the civil-defence commands of 11 provinces and
                  cities; the 2026 task list requires procedures to reserve
                  active storage for downstream flood cutting and makes inflow
                  forecasting the responsibility of reservoir owners.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年10月 —</strong> 首相決定1936/QĐ-TTg（10月6日）が2019年の紅河流域連結貯水池運用規程と前日に出された決定を置き換え、余水吐の増強までThác Bàの洪水期水位を56 mに制限し、規程の宛先に11省・市の民間防衛指揮委員会を加えました。2026年の課題一覧は、規程が下流の洪水カットのために有効貯水容量を優先的に確保することと、流入予測を貯水池所有者の責務とすることを求めています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">November 2026 —</strong> On 4 November the Ministry of Justice
                  appraisal council reviewed the policy dossier for a fully
                  amended Law on Hydrometeorology: automation of the observation
                  network, impact-based warnings linked to disaster-risk
                  management, and diversified resources, with a legal duty on
                  telecom operators to send emergency warnings, smart commune
                  loudspeakers and ethnic-minority-language warnings among the
                  proposals.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年11月 —</strong> 11月4日、司法省の審査会が気象水文法全面改正の政策案を審議しました。観測網の自動化、災害リスク管理と連動した影響予測型警報、資源の多様化の三つの政策群に加え、通信事業者への緊急警報送信義務、スマート社放送、少数民族言語での警報が提案されています。
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
                  <strong className="text-foreground">Two level scales and an outdated core text (structural).</strong>{" "}
                  The 1–5 risk level of Decision 18/2021 drives command under
                  Decree 66/2021, while the 1–3 civil-defence level of the 2023
                  law drives declarations under Decree 200/2025; no instrument
                  maps one onto the other. Decision 18/2021 itself still assigns
                  duties to MONRE, the General Department of Hydrometeorology,
                  the Ministry of Information and Communications, district
                  People’s Committees and VINASARCOM. Until it is re-issued, the
                  legal description of who issues, who transmits and who receives
                  does not match the organisation chart that has existed since
                  July 2025.
                </>
              ) : (
                <>
                  <strong className="text-foreground">二つのレベル体系と旧い中核文書（構造的課題）。</strong>首相決定18/2021の1〜5リスクレベルは政令66/2021の下で指揮を決め、2023年法の1〜3民間防衛レベルは政令200/2025の下で宣言を決めますが、両者を対応付ける文書はありません。首相決定18/2021自体も、天然資源環境省、気象水文総局、情報通信省、県人民委員会、VINASARCOMに職務を割り当てたままです。再公布されるまで、誰が発表し、誰が伝達し、誰が受け取るかの法的記述は、2025年7月以降の組織図と一致しません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Communes inherited district tasks without district capacity (structural).</strong>{" "}
                  Communes took over 12 groups of disaster-prevention and dyke
                  tasks in August 2025 and the forced-evacuation power with them.
                  At the Ninh Bình forum of 12 August 2025 officials noted that
                  new communes merge up to seven former communes and still lack
                  equipment and personnel. In July 2026 the VDDMA Director said
                  many localities still struggled with incident handling in the
                  first year of the two-tier model, and the 2025 White Paper
                  lists consolidating the commune-level forces and rebuilding
                  response plans for the two-tier model as 2026 priorities,
                  noting that existing plans are formalistic and do not consider
                  extreme rainfall scenarios.
                </>
              ) : (
                <>
                  <strong className="text-foreground">県の業務を県の能力なしに継いだ社（構造的課題）。</strong>社は2025年8月に防災・堤防管理の12群の業務と、それに伴う強制避難権限を引き継ぎました。2025年8月12日のNinh Bìnhの会合では、新しい社は最大7つの旧社の合併で生まれ、機材と人員を依然欠くと指摘されました。2026年7月にVDDMA局長は、二層制の初年度に多くの地方が事態対処に苦慮していると述べ、2025年災害白書は社レベルの組織の強化と二層制に合わせた対応計画の再構築を2026年の優先課題とし、既存計画が形式的で極端な降雨シナリオを想定していないと認めています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Localised flash-flood and landslide warning (operational).</strong>{" "}
                  The White Paper concedes that early, detailed warning for
                  localised extreme rain, flash floods and landslides remains
                  limited and that no large-scale hazard zoning maps exist for
                  each village, citing network density and model reliability in
                  mountain, border and coastal areas. Làng Nủ (10 September 2024)
                  followed a week of storm warnings; the Mường Than flash flood
                  of 17 July 2026 in Lai Châu killed people on flat ground 1.5 km
                  from the hills, outside previously flagged zones. Deep-seated
                  slides are about 15% of incidents but more than 85% of damage
                  and are not rainfall-predictable. MAE has proposed a VND 161
                  trillion (about US$6.3 billion) master plan for 21 mountainous
                  provinces with 1:10,000 maps for high-risk communes by 2030,
                  but no approval decision has been identified.
                </>
              ) : (
                <>
                  <strong className="text-foreground">局地的な土石流・地すべり警報（運用上の課題）。</strong>災害白書は、局地的な極端降雨・土石流・地すべりの早期かつ詳細な警報が依然限定的で、村落ごとの大縮尺ハザード区分図がないことを認め、山岳・国境・沿岸での観測網密度とモデルの信頼性を理由に挙げています。Làng Nủ（2024年9月10日）は1週間の台風警報の後に起き、2026年7月17日のLai Châu省Mường Thanの土石流は、丘から1.5 km離れた平地で、事前に指定されていた危険区域の外で死者を出しました。深層崩壊は件数の約15%ながら被害の85%超を占め、降雨からは予測できません。農業環境省は山岳21省を対象に、2030年までに高リスク社の1:10,000図を整備する161兆ドン（約63億米ドル）の総合計画を提案しましたが、承認決定は確認されていません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Reservoir releases without a binding warning rule (structural and operational).</strong>{" "}
                  At 16:00 on 19 November 2025 the Sông Ba Hạ plant opened all 12
                  spillway gates and discharged a record 16,100 m³/s against an
                  inflow of 16,120 m³/s; residents said the water rose too fast
                  to react, and Đắk Lắk recorded 113 deaths. Provincial officials
                  said discharge data were updated to residents about every 30
                  minutes, so information flowed but did not convert into
                  protective action; the Ministry of Public Security opened an
                  investigation, and Khánh Hòa ordered a probe of five reservoirs.
                  Only 30% of reservoirs have emergency response plans and
                  downstream warnings often rely on phone calls or memos;
                  operating rules written in 2018–2019 are described by MAE as
                  relying on outdated data, with reservoirs run in isolation.
                  Resolution 12/2026 and the Red River procedure of October 2026
                  begin the correction, but they assign inflow forecasting to
                  owners rather than to the hydro-meteorological service, and
                  no lead-time rule for release notification has been found.
                </>
              ) : (
                <>
                  <strong className="text-foreground">拘束力ある警報規則のない貯水池放流（構造的・運用上の課題）。</strong>2025年11月19日16時、Sông Ba Hạ発電所は12門の余水吐ゲートを全開し、流入16,120 m³/sに対して記録的な16,100 m³/sを放流しました。住民は水位上昇が速すぎて対処できなかったと述べ、Đắk Lắk省では113人が死亡しました。省当局は放流情報を約30分ごとに住民へ更新したと説明しており、情報は流れていたものの防護行動には結び付きませんでした。公安省が調査を開始し、Khánh Hòa省は5貯水池の調査を命じました。緊急対応計画を持つ貯水池は30%にとどまり、下流への警報は電話や公文書に頼ることが多く、2018〜2019年に作られた運用規則は農業環境省自身が旧いデータに依拠し各貯水池が孤立して運用されていると評価しています。決議12/2026と2026年10月の紅河規程は是正の始まりですが、流入予測を気象水文機関ではなく所有者の責務とし、放流通知のリードタイム規則は確認されていません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Evacuation enforcement and compliance (operational).</strong>{" "}
                  The White Paper names, among subjective causes, local
                  governments that were not resolute or thorough in evacuation,
                  forced relocation and sanctioning violations, and response
                  plans in some localities that were limited and confused. After
                  Yagi a Lào Cai teacher said residents had received warnings but
                  did not expect the severity of the storm, and an external
                  observer noted that communities were unprepared despite a week
                  of warning. The scale of the task is visible in the 325,858
                  households (1,186,370 people) helped to relocate in 2025 and
                  the roughly 350,000 people evacuated in Gia Lai alone for
                  Kalmaegi.
                </>
              ) : (
                <>
                  <strong className="text-foreground">避難の執行と住民の遵守（運用上の課題）。</strong>災害白書は主観的要因として、避難・強制移転・違反への処分に「断固として徹底的でなかった」地方政府と、一部地方の限定的で混乱した対応計画を挙げています。台風Yagiの後、Lào Caiの教員は住民が警報を受けていたものの台風の激しさを予想していなかったと述べ、外部の観察者は1週間の警報があったにもかかわらず地域社会が備えていなかったと指摘しました。課題の規模は、2025年に避難を支援された325,858世帯（1,186,370人）と、台風KalmaegiでGia Lai省だけで避難した約35万人に現れています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Communications that fail in the worst events (operational).</strong>{" "}
                  Shortcoming 6 of the White Paper is that connectivity is
                  regularly interrupted during historic floods and storms: about
                  3,600 base stations were affected in 2025 against about 3,000
                  hardened stations in 12 coastal provinces. The November 2026
                  hydrometeorology dossier adds that warnings are cut off by
                  telecom congestion in mountainous and central areas, that many
                  residents have no smart devices, and that warnings are needed
                  in ethnic-minority languages, which is why it proposes a legal
                  duty on operators and smart commune loudspeakers.
                </>
              ) : (
                <>
                  <strong className="text-foreground">最悪時に途絶する通信（運用上の課題）。</strong>災害白書の弱点6は、歴史的な洪水・台風の際に通信接続が頻繫に途絶することで、2025年には約3,600の基地局が被災し、沿岸12省の堅牢化基地局約3,000局を上回りました。2026年11月の気象水文法政策案は、山岳・中部で通信混雑により警報が途切れること、スマート機器を持たない住民が多いこと、少数民族言語での警報が必要なことを加え、事業者への法的義務とスマート社放送を提案しています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Infrastructure designed below current hazard (structural).</strong>{" "}
                  Sea dykes are designed for force 9–10 storms and a 5% tide but
                  were hit in 2025 by force 11–12 winds and spring tides; 311 weak
                  points were identified on grade III and higher dykes before the
                  season, 185 dyke incidents occurred (137 in the Cầu and Thương
                  system with near-total overtopping), and more than 12,000 dyke
                  violations recorded between 2011 and July 2025 remain largely
                  unresolved. The Thác Bà spillway capacity of 3,230 m³/s against
                  a 5,620 m³/s inflow in 2024 is the reservoir-side equivalent,
                  now addressed by the 56 m cap of 2026.
                </>
              ) : (
                <>
                  <strong className="text-foreground">現在のハザードを下回る設計基準の施設（構造的課題）。</strong>海岸堤防は風力9〜10の台風と5%確率の潮位を設計条件としますが、2025年には風力11〜12の風と大潮に見舞われました。シーズン前にIII級以上の堤防で311の弱点箇所が特定され、185件の堤防事故（うち137件はCầu・Thương川系で、ほぼ全面的な越流）が発生し、2011年〜2025年7月に記録された12,000件超の堤防関連違反の多くが未解決です。2024年にThác Bàの余水吐能力3,230 m³/sが流入5,620 m³/sを下回ったことは貯水池側の同じ問題で、2026年の56 m上限で対処されています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Two funds and permission-based data (structural).</strong> Since
                  2025–2026 the state runs two parallel non-budget funds, the
                  Disaster Prevention Fund under MAE and the provinces (Decree
                  63/2025) and the central Civil Defence Fund under the Ministry
                  of National Defence (Decision 09/2026), with transfers between
                  them decided by the Prime Minister, and provinces are
                  re-issuing collection rules for the two-tier model. On data,
                  Decree 113/2026 keeps exchange of hydro-meteorological data with
                  foreign parties subject to an 11-day appraisal and reporting,
                  and the draft law notes unclear rules for state purchase of
                  private observations and for separating free public services
                  from priced ones.
                </>
              ) : (
                <>
                  <strong className="text-foreground">二つの基金と許可制のデータ（構造的課題）。</strong>2025〜2026年以降、国は予算外基金を二つ並行して運営しています。農業環境省と省が運営する災害予防・対策基金（政令63/2025）と、国防省が管理する中央民間防衛基金（首相決定09/2026）で、両者間の資金移転は首相決定によります。各省は二層制に合わせて徴収規則を再制定中です。データ面では、政令113/2026が外国との気象水文データ交換を11営業日の審査と報告の対象とし続け、改正法案は民間観測データの国による購入と無償公共サービスと有償サービスの区分について規則が不明確だと指摘しています。
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
                Japan is the main bilateral partner on the forecasting side. A
                JICA technical cooperation project from 2018 to 2023 worked on
                radar quality control and rain-gauge use for weather forecasting
                and flood early warning; its successor, the Project on advising
                the development of quantitative precipitation forecasting
                technology, was launched in Hanoi on 29 September 2026 with Cục
                Khí tượng Thủy văn and NCHMF and runs to September 2028, aiming
                at radar assimilation, ensembles and very-short-range products.
                On the landslide side, the Project on Integrated Risk Assessment
                and Digitalised Community-based Early Warning System for
                Landslides and Debris Flows in Central Vietnam (August 2026 to
                July 2031, about ¥370 million) pairs Thủy Lợi University with
                Gunma University and ICHARM, with the Huế Department of
                Agriculture and Environment and the city operations centre as
                counterparts; it is to produce 1:5,000 hazard maps and a warning
                system pushed through the Hue-S city app with staged evacuation
                guidance, building on the 2021–2025 project for flash floods and
                landslides in the northern mountains and the 2017 X-band radar
                grant in Huế. A Japanese-technology sabo dam pilot was
                inaugurated at Mường La in Sơn La in 2025, and VNMHA coordinates
                with RSMC Tokyo on landfalling typhoons.
              </>
            ) : (
              <>
                予報分野では日本が主要な二国間パートナーです。JICAの2018〜2023年の技術協力は天気予報と洪水早期警報のためのレーダー品質管理と雨量計の活用に取り組み、後続の「定量的降水予測技術の開発に関する助言プロジェクト」は2026年9月29日にハノイで気象水文局・NCHMFと開始され、2028年9月までレーダー同化、アンサンブル、超短時間予測製品を目指します。土砂災害分野では、「中部ベトナムにおける地すべり・土石流の統合リスク評価とデジタル化された地域主体型早期警報システム」プロジェクト（2026年8月〜2031年7月、約3.7億円）が、Thủy Lợi大学と群馬大学・ICHARMを組み合わせ、Huế市農業環境局と市運営センターをカウンターパートとして、1:5,000のハザード図と、段階的避難指示を市アプリHue-Sで配信する警報システムを整備する計画です。これは北部山岳地域の土石流・地すべりに関する2021〜2025年のプロジェクトと、2017年のHuếへのXバンドレーダー無償供与を基礎としています。2025年にはSơn La省Mường Laで日本技術による砂防ダムの試行施設が完成し、VNMHAは上陸台風についてRSMC東京と連携しています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The multilateral frame is set by WMO, through the Hanoi Regional
                Forecasting Support Centre (since 2010), the Southeast Asia Flash
                Flood Guidance System and the Early Warnings for All roadmap that
                Vietnam pledged in October 2025 to accelerate; by the Mekong
                River Commission, whose Regional Flood and Drought Management
                Centre issues daily forecasts for 22 mainstream points from 138
                stations and flash-flood guidance to member countries; by UNDP
                (a Green Climate Fund coastal resilience project to December
                2025), UNICEF (the Zalo mini-app) and GIZ (landslide risk maps
                and warning, 2025–2027); and by the ASEAN disaster-management
                mechanism, the APEC Emergency Preparedness Working Group and the
                Coalition for Disaster Resilient Infrastructure. Donor
                coordination runs through the Disaster Risk Reduction Partnership
                hosted by VDDMA, which admitted three new members in 2025. After
                the 2025 season the National Civil Defence Steering Committee
                appointed VDDMA as focal point for international assistance;
                about US$10.1 million had been pledged by 31 October 2025 by
                Japan, Australia, Russia, the AHA Centre, Singapore, Korea, the
                United States, Ireland, Canada and the EU, rising to about
                US$23.8 million by year-end. Vietnam itself deployed 109
                personnel to the Myanmar earthquake in 2025.
              </>
            ) : (
              <>
                多国間の枠組みはWMO（2010年以降のハノイ地域予報支援センター、東南アジア・フラッシュフラッド・ガイダンスシステム、ベトナムが2025年10月に加速を表明したEarly Warnings for Allロードマップ）、メコン河委員会（地域洪水干ばつ管理センターが138観測所から本流22地点の日次予報とフラッシュフラッド・ガイダンスを加盟国に提供）、UNDP（2025年12月までの緑の気候基金沿岸レジリエンス事業）、UNICEF（Zaloミニアプリ）、GIZ（2025〜2027年の地すべりリスク図・警報）、ASEAN防災協力、APEC緊急事態準備作業部会、災害レジリエントインフラ連合（CDRI）が形作っています。ドナー調整はVDDMAが主催する災害リスク削減パートナーシップを通じて行われ、2025年に3機関が新たに加わりました。2025年シーズン後、国家民間防衛指導委員会はVDDMAを国際支援の窓口に指定し、2025年10月31日までに日本、オーストラリア、ロシア、AHAセンター、シンガポール、韓国、米国、アイルランド、カナダ、EUから約1,010万米ドルの支援が表明され、年末までに約2,380万米ドルに達しました。ベトナム自身も2025年のミャンマー地震に109人を派遣しています。
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
                What distinguishes Vietnam is that the warning chain is written
                into law at a level of detail most countries leave to practice:
                the forecaster publishes the risk level, the level selects the
                commander, the broadcaster has a repeat interval, the commune
                has a loudspeaker duty. That design survived the 2025 season in
                the sense that the system kept issuing, the dykes of grade III
                and above did not breach, and hundreds of thousands of
                households were moved. It did not prevent 484 deaths, because
                the places where people died, small mountain catchments and
                reservoir tailwaters, are where the chain hands over from a
                national bulletin to a local decision, and that hand-over is
                exactly where the 2025 reforms concentrated the most change with
                the least capacity: a commune chairperson who inherited district
                powers without district staff, and reservoir operators whose
                procedures were written in 2018–2019.
              </>
            ) : (
              <>
                ベトナムの特徴は、多くの国が実務に委ねる細部まで警報連鎖が法律に書き込まれていることです。予報機関がリスクレベルを公表し、レベルが指揮者を選び、放送局には繰り返し間隔が定められ、社には拡声放送の義務があります。この設計は、システムが発表を続け、III級以上の堤防が決壊せず、数十万世帯が移動したという意味で、2025年シーズンを乗り切りました。しかし484人の死者は防げませんでした。人が亡くなった場所、すなわち小流域の山地と貯水池の下流は、連鎖が国家の情報から地方の決定へと引き渡される地点であり、その引き渡し点こそ、2025年の改革が最も大きな変化を最も乏しい能力の上に集中させた場所でした。県の職員なしに県の権限を継いだ社主席と、2018〜2019年に書かれた規程で運用する貯水池運営者です。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The main unresolved question is therefore not who issues the
                warning but who is accountable for turning a warning into a
                release, a closure or an evacuation at the scale of a village,
                and under which of two level scales. Three changes would close
                the gap. Decision 18/2021 needs re-issuing for the Ministry of
                Agriculture and Environment, the civil-defence committees and the
                two-tier local government, with the 1–5 risk scale and the 1–3
                civil-defence scale mapped onto each other. Reservoir operation
                needs a rule on pre-release and notification lead time that binds
                operators and places the inflow forecast with the
                hydro-meteorological service rather than the operator, going
                beyond what Resolution 12/2026 and the new Red River procedure
                have started. And the amended Law on Hydrometeorology needs to
                make the operator SMS duty, minority-language warnings and
                impact-based content statutory rather than discretionary. Until
                then, the chain is complete on paper and conditional in the
                mountains.
              </>
            ) : (
              <>
                したがって最大の未解決問題は、誰が警報を出すかではなく、村落の規模で警報を放流、通行止め、避難という行動に変える責任を誰が負うのか、そして二つのレベル体系のどちらに従うのかです。三つの変更がこの隙間を埋めるでしょう。第一に、首相決定18/2021を農業環境省、民間防衛委員会、二層制地方政府に合わせて再公布し、1〜5のリスクレベルと1〜3の民間防衛レベルを相互に対応付けること。第二に、運営者を拘束する事前放流と通知リードタイムの規則を定め、流入予測を運営者ではなく気象水文機関に置くこと。これは決議12/2026と新しい紅河規程が始めたことの先にあります。第三に、改正気象水文法で、事業者のSMS送信義務、少数民族言語の警報、影響予測型の内容を裁量ではなく法定の義務とすることです。それまでは、連鎖は紙の上では完結していても、山地では条件付きのままです。
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
              National Assembly of Viet Nam (2013). Law No. 33/2013/QH13 on
              Natural Disaster Prevention and Control. <em>Hệ thống pháp luật (English translation)</em>.
              https://hethongphapluat.com/law-no-33-2013-qh13-dated-june-19-2013-on-natural-disaster-prevention-and-control.html
            </li>
            <li>
              Prime Minister of Viet Nam (2021). Decision No. 18/2021/QĐ-TTg on
              forecasting, warning, transmission of natural disaster information
              and natural disaster risk levels. <em>Ministry of Agriculture and Environment</em>.
              https://vupc.mae.gov.vn/Data/files/18_2021_QD-TTg.doc
            </li>
            <li>
              Government of Viet Nam (2021). Decree No. 66/2021/NĐ-CP detailing
              a number of articles of the Law on Natural Disaster Prevention and
              Control. <em>LuatVietnam (English translation)</em>.
              https://english.luatvietnam.vn/decree-no-66-2021-nd-cp-dated-july-06-2021-of-the-government-detailing-a-number-of-articles-of-the-law-on-natural-disaster-prevention-and-control-an-205046-doc1.html
            </li>
            <li>
              Prime Minister of Viet Nam (2021). Decision No. 379/QĐ-TTg
              approving the National Strategy on Natural Disaster Prevention and
              Control through 2030, with a vision toward 2050. <em>LuatVietnam (English translation)</em>.
              https://english.luatvietnam.vn/decision-no-379-qd-ttg-dated-march-17-2021-of-the-prime-minister-approving-the-national-strategy-on-natural-disaster-prevention-and-control-through-199877-doc1.html
            </li>
            <li>
              National Assembly of Viet Nam (2023). Law No. 18/2023/QH15 on
              Civil Defence. <em>Hệ thống pháp luật (English translation)</em>.
              https://hethongphapluat.com/law-no-18-2023-qh15-dated-june-20-2023-on-civil-defense.html
            </li>
            <li>
              National Assembly of Viet Nam (2025). Law No. 98/2025/QH15
              amending and supplementing a number of articles of eleven laws on
              the military and national defence. <em>LuatVietnam (English translation)</em>.
              https://english.luatvietnam.vn/law-no-98-2025-qh15-dated-june-27-2025-of-the-national-assembly-amending-and-supplementing-a-number-of-articles-of-eleven-laws-on-the-military-and-n-404951-doc1.html
            </li>
            <li>
              Government of Viet Nam (2025). Decree No. 200/2025/NĐ-CP detailing
              the Law on Civil Defence. <em>LuatVietnam</em>.
              https://luatvietnam.vn/an-ninh-quoc-gia/nghi-dinh-200-2025-nd-cp-quy-dinh-chi-tiet-luat-phong-thu-dan-su-405227-d1.html
            </li>
            <li>
              Government of Viet Nam (2026). Decree No. 113/2026/NĐ-CP amending
              Decree No. 38/2016/NĐ-CP detailing the Law on Hydrometeorology.{" "}
              <em>LuatVietnam</em>.
              https://luatvietnam.vn/tai-nguyen/nghi-dinh-113-2026-nd-cp-sua-doi-nghi-dinh-38-2016-nd-cp-ve-luat-khi-tuong-thuy-van-430789-d1.html
            </li>
            <li>
              Prime Minister of Viet Nam (2026). Decision No. 1936/QĐ-TTg
              promulgating the inter-reservoir operation procedure for the Red
              River basin. <em>Government Portal of Viet Nam</em>.
              https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/10/1936_qd-ttg_06102026_3-signed.signed.pdf
            </li>
            <li>
              Ministry of Agriculture and Environment (2026). Consolidated text
              No. 44/VBHN-BNNMT of Circulars 25/2023/TT-BNNPTNT and
              10/2026/TT-BNNMT on dyke management and natural disaster
              prevention. <em>Government Portal of Viet Nam</em>.
              https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/4/44-vbhn-bnnmt.pdf
            </li>
            <li>
              Cục Quản lý đê điều và Phòng, chống thiên tai, Ministry of
              Agriculture and Environment (2026). <em>Sách trắng thiên tai 2025</em> (White
              Paper on Natural Disasters 2025).
              https://phongchongthientai.mard.gov.vn/FileUpload/2026-05/yC-Kn4aqk4IMFshN0.%20Sach%20trang%202025%20%28Phat%20hanh%29.pdf
            </li>
            <li>
              Viet Nam Meteorological and Hydrological Administration (2025).
              Viet Nam Member Report 2025. <em>ESCAP/WMO Typhoon Committee, 20th Integrated Workshop</em>.
              https://www.typhooncommittee.org/20IWS/docs/Members%20REport/Vietnam/VIET%20NAM_Members%20Report%202025_2511.pdf
            </li>
            <li>
              Japan International Cooperation Agency (2026). Ex-ante evaluation:
              Project on Integrated Risk Assessment and Digitalised
              Community-based Early Warning System for Landslides and Debris
              Flows in Central Vietnam. <em>JICA</em>.
              https://www2.jica.go.jp/ja/evaluation/pdf/2025_202413502_1_s.pdf
            </li>
            <li>
              Báo Pháp luật Việt Nam (2026). Hoàn thiện hành lang pháp lý, nâng
              cao chất lượng dự báo, cảnh báo thiên tai (4 November 2026).{" "}
              <em>baophapluat.vn</em>.
              https://baophapluat.vn/hoan-thien-hanh-lang-phap-ly-nang-cao-chat-luong-du-bao-canh-bao-thien-tai.html
            </li>
            <li>
              VietnamPlus (2026). JICA continues supporting Vietnam in
              quantitative precipitation forecasting (29 September 2026).{" "}
              <em>Vietnam News Agency</em>.
              https://en.vietnamplus.vn/jica-continues-supporting-vietnam-in-quantitative-precipitation-forecasting-post352792.vnp
            </li>
            <li>
              Việt Nam News (2025). Việt Nam confronts hydropower risks as
              extreme weather exposes system gaps (20 December 2025).{" "}
              <em>Vietnam News Agency</em>.
              https://vietnamnews.vn/environment/1732212/viet-nam-confronts-hydropower-risks-as-extreme-weather-exposes-system-gaps.html
            </li>
            <li>
              VietnamNet (2025). When dams fail to protect: floods reveal cracks
              in VN water infrastructure (25 November 2025). <em>VietnamNet Global</em>.
              https://vietnamnet.vn/en/when-dams-fail-to-protect-floods-reveal-cracks-in-vn-water-infrastructure-2466141.html
            </li>
            <li>
              Tuổi Trẻ News (2025). Police probe dam releases in Vietnam’s Dak
              Lak where historic floods killed 113 (20 December 2025).{" "}
              <em>Tuổi Trẻ</em>.
              https://news.tuoitre.vn/police-probe-dam-releases-in-vietnams-dak-lak-where-historic-floods-killed-113-103251220172743021.htm
            </li>
            <li>
              VietnamNet (2024). Experts highlight unusual features of Typhoon
              Yagi, the strongest in 30 years (17 September 2024).{" "}
              <em>VietnamNet Global</em>.
              https://vietnamnet.vn/en/experts-highlight-unusual-features-of-typhoon-yagi-the-strongest-in-30-years-2322697.html
            </li>
            <li>
              Sài Gòn Giải Phóng (2025). Tăng trách nhiệm phòng chống thiên tai
              cho cấp xã (12 August 2025). <em>sggp.org.vn</em>.
              https://www.sggp.org.vn/tang-trach-nhiem-phong-chong-thien-tai-cho-cap-xa-post807936.html
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
              <strong className="text-foreground">{en ? "Vietnam" : "ベトナム"}</strong>
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
