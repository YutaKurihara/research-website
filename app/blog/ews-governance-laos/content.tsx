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
              ? "Early Warning Governance in Lao PDR — Laws, Actors and Current Challenges"
              : "ラオスの予警報制度 — 法制度・アクターの役割・現在の課題"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "Based on the Law on Disaster Management (2019), the Law on Meteorology and Hydrology (2017), the National Strategy on Disaster Risk Reduction 2021–2030, the Early Warnings for All roadmap 2024–2027, the 2025 national perception survey, evaluation documents of CREWS, the World Bank and JICA, and Lao state media, this article maps who legally issues warnings in Lao PDR, how the March 2025 ministry mergers reshuffled the actors, and where the warning chain still breaks."
              : "災害管理法（2019年）と気象水文法（2017年）、国家防災戦略2021〜2030、EW4All ロードマップ2024〜2027、2025年の全国認知度調査、CREWS・世界銀行・JICA の評価文書およびラオス国営メディアの報道に基づき、警報を「誰が出すか」を定める法制度、2025年3月の省庁再編後のアクターの配置、警報の流れと現在の課題を整理します。"}
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
                Lao PDR is a landlocked, mountainous country whose disaster
                losses are dominated by monsoon floods on the Mekong and its
                tributaries, by the remnants of tropical storms crossing from
                Vietnam, and by the flash floods and landslides they trigger in
                the north. The UN counts 4,483 disaster events, more than 4
                million people affected and more than US$600 million in losses
                for 2000&ndash;2024; the Government review of 2021&ndash;2025
                reported 376 incidents, more than 1 million people affected,
                111 deaths and losses above LAK 12.577 trillion. The recent
                seasons have been severe: Typhoon Yagi in September 2024 (the
                2024 season affected 271,168 people and killed 17), Wipha and
                Bualoy in 2025 (more than 360,000 people affected), and
                Tropical Storm Maysak with prolonged rain in July&ndash;August
                2026, which affected 351,538 people in 15 of 18 provinces and
                killed 24. The law of 2019 also lists drought, frost,
                earthquakes and pest outbreaks as natural disasters, and the
                collapse of the Xe-Pian Xe-Namnoy saddle dam in Attapeu on 23
                July 2018 and the breach of a rare-earth tailings reservoir in
                Houaphanh on 2 November 2026 frame the dam question that runs
                through this article.
              </>
            ) : (
              <>
                ラオスは内陸の山岳国であり、災害損失の大半はメコン川本流と支流のモンスーン洪水、ベトナム側から到達する熱帯擾乱、そしてそれらが北部で引き起こす鉄砲水と土砂災害によるものです。国連の集計では2000〜2024年に災害4,483件、被災者400万人超、損失6億米ドル超、政府の2021〜2025年レビューでは376件、被災者100万人超、死者111人、損失12.577兆キープ超が報告されています。近年は厳しいシーズンが続きます。2024年9月の台風ヤギ（2024年シーズン全体で被災者271,168人・死者17人）、2025年のウィパーとブアローイ（被災者36万人超）、そして2026年7〜8月の熱帯暴風メイサークと長雨は18県中15県で351,538人を被災させ、24人が亡くなりました。2019年の災害管理法は干ばつ、霜害、地震、病虫害も自然災害に数えており、2018年7月23日のアッタプー県セーピアン・セーナムノイ副ダムの崩壊と2026年11月2日のフアパン県レアアース尾鉱貯水池の決壊は、本記事を貫く「ダム」の問いを象徴しています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Institutional design matters here for three reasons. First,
                Lao PDR is one of the few ASEAN states whose disaster law names
                the warning issuer explicitly, yet the mandate is split across
                two statutes: the Law on Disaster Management vests the warning
                and the evacuation notice in the territorial executive, while
                the Law on Meteorology and Hydrology vests the hazard warning
                in the natural-resources ministry. Second, the ministries named
                in those laws no longer exist in the same form: on 20 March
                2025 the National Assembly cut the ministries from 17 to 13,
                merging the Ministry of Natural Resources and Environment into
                a new Ministry of Agriculture and Environment and the Ministry
                of Energy and Mines into the Ministry of Industry and Commerce,
                without amending the hydro-met law. Third, the country hosts a
                dense hydropower cascade (88 operational plants in 2022, about
                1.5 million people living downstream of dams), so many flood
                warnings are in fact dam-release notifications governed by a
                separate stack of water, reservoir and dam-safety legislation
                under yet another ministry. The article covers the legal
                framework, the actors after the 2025 mergers, the warning chain
                and its thresholds, reforms since 2020, current challenges and
                international cooperation including the Japanese contribution.
              </>
            ) : (
              <>
                ラオスで制度設計が問題になる理由は3つあります。第一に、ラオスは ASEAN
                でも数少ない「災害法が警報の発出者を明示する国」ですが、その権限は2つの法律に分かれています。災害管理法は警報と避難通知を領域行政の長に、気象水文法はハザード警報を天然資源担当省に委ねています。第二に、両法が名指しする省庁はもはや同じ形では存在しません。2025年3月20日、国民議会は省の数を17から13に削減し、天然資源環境省を新設の農業環境省に、エネルギー鉱業省を工業商業省に統合しましたが、気象水文法は改正されていません。第三に、ラオスは密な水力発電カスケード（2022年時点で稼働88か所、ダム下流に約150万人が居住）を抱えており、洪水警報の多くは実際にはダム放流通知であって、水法・貯水池令・ダム安全法という別系統の法令を、さらに別の省が所管しています。本記事では、法制度、2025年再編後のアクター、警報の流れと基準水位、2020年以降の改革、現在の課題、日本を含む国際協力を順に扱います。
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
                The Lao statute book on early warning is short and
                comparatively coherent. The Law on Disaster Management No.
                71/NA, adopted by National Assembly resolution No. 15/NA on 24
                June 2019 and promulgated by Presidential Decree No. 262/POR on
                5 August 2019 (10 parts, 70 articles), makes the Ministry of
                Labour and Social Welfare the lead ministry. The Law on
                Meteorology and Hydrology No. 36/NA of 13 November 2017 (69
                articles, 11 chapters) governs the forecasting and warning
                service. Dam-release and dam-safety duties sit in a third
                stack: the amended Law on Water and Water Resources (2017),
                Decree No. 20/Gov on river basins and reservoirs (2021) and the
                Law on Dam Safety No. 20/NA (2022). Policy direction comes from
                the National Strategy on Disaster Risk Reduction 2021&ndash;2030
                (Prime Ministerial Decree No. 510/PM of 26 July 2021).
              </>
            ) : (
              <>
                ラオスの予警報に関わる法令は少なく、比較的整合的です。災害管理法第71/NA号は2019年6月24日の国民議会決議第15/NA号で採択され、2019年8月5日の大統領令第262/POR号で公布されました（全10部70条）。同法は労働社会福祉省を主管省とします。2017年11月13日の気象水文法第36/NA号（全11章69条）は予報・警報サービスを規律します。ダムの放流と安全は第三の系統、すなわち改正水・水資源法（2017年）、河川流域・貯水池管理に関する政令第20/Gov号（2021年）、ダム安全法第20/NA号（2022年）が担います。政策面の方向付けは国家防災戦略2021〜2030（2021年7月26日の首相令第510/PM号）が与えています。
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
                      ? "Law on Disaster Management No. 71/NA (ກົດໝາຍວ່າດ້ວຍການຄຸ້ມຄອງໄພພິບັດ)"
                      : "災害管理法第71/NA号（ກົດໝາຍວ່າດ້ວຍການຄຸ້ມຄອງໄພພິບັດ／Law on Disaster Management）"}
                  </td>
                  <td className={TD}>2019</td>
                  <td className={TD}>
                    {en
                      ? "10 parts, 70 articles. Definitions (Art. 3); prevention, control and recovery; Disaster Management Fund at three levels (Arts. 45–47); committees at four levels (Arts. 51–57); MLSW directly responsible (Art. 58); 13 October as National Disaster Management Day (Art. 68)."
                      : "全10部70条。定義（第3条）、予防・対処・復旧、3層の災害管理基金（第45〜47条）、4層の災害管理委員会（第51〜57条）、労働社会福祉省を直接の責任省とする規定（第58条）、10月13日を国家災害管理の日とする規定（第68条）。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Art. 18: a warning for several villages is issued by the district governor on the proposal of the district committee; for several districts by the provincial governor or Mayor of Vientiane Capital on the proposal of the provincial committee; for several provinces by the Government on the proposal of the central committee. Art. 19: the evacuation notice is issued by the same authority. Art. 55: committees may issue disaster emergency warnings and preparedness orders."
                      : "第18条：複数の村に及ぶ警報は郡委員会の提案により郡長が、複数の郡に及ぶ場合は県委員会の提案により県知事またはビエンチャン首都市長が、複数の県に及ぶ場合は中央委員会の提案により政府が発し、監視区域を宣言する。第19条：避難通知は警報と同一の者が発する。第55条：各級委員会は災害緊急警報と準備命令を発し得る。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Law on Meteorology and Hydrology No. 36/NA (ກົດໝາຍວ່າດ້ວຍອຸຕຸນິຍົມ ແລະ ອຸທົກກະສາດ)"
                      : "気象水文法第36/NA号（ກົດໝາຍວ່າດ້ວຍອຸຕຸນິຍົມ ແລະ ອຸທົກກະສາດ／Law on Meteorology and Hydrology）"}
                  </td>
                  <td className={TD}>2017</td>
                  <td className={TD}>
                    {en
                      ? "69 articles, 11 chapters; Chapter VII on forecasting and early warning; defines a National Warning Center monitoring climate, water level and earthquakes; centralises met-hydro management under MONRE with provincial and district offices (Arts. 51–54)."
                      : "全11章69条。第7章が予報と早期警報。気候・水位・地震を監視する「国家警報センター」を定義。気象水文業務を天然資源環境省の下に一元化し、県・郡の部局を置く（第51〜54条）。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Art. 47: the Ministry of Natural Resources and Environment issues early warnings through mass media; governors and the Mayor of Vientiane Capital must warn residents and, where extreme impacts are forecast, have an evacuation plan. Art. 55: the labour and social welfare sector issues warnings based on met-hydro information; the health sector issues outbreak warnings. Art. 56: village authorities collect, disseminate and give early warnings."
                      : "第47条：天然資源環境省がマスメディアを通じて早期警報を発する。知事とビエンチャン首都市長は住民へ速やかに警告し、極端な影響が予測される場合は避難計画を備える。第55条：労働社会福祉部門は気象水文情報に基づき警報を発し、保健部門は疾病流行の警報を発する。第56条：村当局は情報を収集・周知し、住民に早期警報を与える。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Law on Water and Water Resources (Amended)"
                      : "改正水・水資源法（Law on Water and Water Resources, Amended）"}
                  </td>
                  <td className={TD}>2017</td>
                  <td className={TD}>
                    {en
                      ? "Amended 11 May 2017, replacing the 1996 law; further amended by Law No. 84/NA (8 December 2020) and in 2022 (Presidential Decree 110/PPT)."
                      : "2017年5月11日改正（1996年法を置換）。さらに法律第84/NA号（2020年12月8日）および2022年改正（大統領令第110/PPT号）。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Dam clause (as summarised in the NSDRR): the developer or operator must immediately report dam problems to the natural resources and environment sector and local government for warning, assistance and evacuation; for serious impacts the Government declares a state of emergency through the Prime Minister."
                      : "ダム条項（国家防災戦略の要約による）：事業者・運営者はダムの問題を天然資源環境部門と地方政府に直ちに報告し、警報・支援・避難につなげる。重大な影響がある場合は政府が首相を通じて緊急事態を宣言する。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Decree No. 20/Gov on the Management of River Basins and Reservoirs (ດຳລັດວ່າດ້ວຍການຄຸ້ມຄອງອ່າງຮັບນ້ຳ ແລະ ອ່າງເກັບນ້ຳ)"
                      : "河川流域・貯水池管理に関する政令第20/Gov号（ດຳລັດວ່າດ້ວຍການຄຸ້ມຄອງອ່າງຮັບນ້ຳ ແລະ ອ່າງເກັບນ້ຳ）"}
                  </td>
                  <td className={TD}>2021</td>
                  <td className={TD}>
                    {en
                      ? "Signed 20 January 2021, in force 4 March 2021; implementing agency MONRE. Hydropower developers must install hydrological stations, notify authorities when reservoirs or downstream levels reach critical values, and compensate damage caused by storage or discharge."
                      : "2021年1月20日署名、同年3月4日施行、実施機関は天然資源環境省。水力発電事業者に水文観測所の設置、貯水池や下流水位が危険値に達した場合の当局への通知、貯水・放流による損害の補償を義務付ける。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Requires early warning systems based on defined watch points and danger points (per the FAOLEX abstract)."
                      : "定義された「監視点」と「危険点」に基づく早期警報システムを義務付ける（FAOLEX の要約による）。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Law on Dam Safety No. 20/NA (ກົດໝາຍວ່າດ້ວຍຄວາມປອດໄພຂອງເຂື່ອນ)"
                      : "ダム安全法第20/NA号（ກົດໝາຍວ່າດ້ວຍຄວາມປອດໄພຂອງເຂື່ອນ／Law on Dam Safety）"}
                  </td>
                  <td className={TD}>2022</td>
                  <td className={TD}>
                    {en
                      ? "Adopted July 2022, promulgated by Presidential Decree No. 109/PR (19 August 2022). Four risk classes (low, medium, high, extreme) by height, reservoir capacity, downstream population density and environmental impact; covers hydroelectric, tailings, irrigation and water-supply dams."
                      : "2022年7月採択、大統領令第109/PR号（2022年8月19日）で公布。高さ・貯水容量・下流人口密度・環境影響による4つのリスク区分（低・中・高・極大）。水力発電・尾鉱・灌漑・給水ダムが対象。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Eight-part checklist before water filling, including emergency response mapping, community relocation and readiness inspections (per the summary). Public-alert duties are not specified in the sources read."
                      : "貯水開始前の8項目チェックリスト（緊急対応マッピング、住民の移転、準備検査を含む）（要約による）。住民への警報義務は参照した資料には記されていない。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Prime Ministerial Decree No. 510/PM adopting the National Strategy on Disaster Risk Reduction 2021–2030"
                      : "首相令第510/PM号（国家防災戦略2021〜2030の採択）"}
                  </td>
                  <td className={TD}>2021</td>
                  <td className={TD}>
                    {en
                      ? "Adopted 26 July 2021 on MLSW proposal; 7 strategies, 12 objectives; MLSW leads implementation."
                      : "2021年7月26日、労働社会福祉省の提案により採択。7戦略・12目標。実施は労働社会福祉省が主導。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Objective 6: review early-warning infrastructure, equipment and personnel and build systems that reach all people; focus area 9.3: early warning and emergency coordination for hydropower dam operations and accidents."
                      : "目標6：早期警報のインフラ・機材・人員を見直し、すべての人に届くシステムを整備する。重点分野9.3：水力発電ダムの運用・事故に関する早期警報と緊急対応の調整。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Ministry of Industry and Commerce notice on dam safety for the rainy season"
                      : "工業商業省の雨季ダム安全に関する通知"}
                  </td>
                  <td className={TD}>2026</td>
                  <td className={TD}>
                    {en
                      ? "Notice of 15 May 2026 to hydropower operators; successor to the 2022 Ministry of Energy and Mines notice requiring release requests seven days in advance."
                      : "2026年5月15日付で水力発電事業者に発出。放流申請を7日前に求めた2022年のエネルギー鉱業省通知の後継。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Written approval from the Department of Energy at least seven days before opening spillway gates; notification of upstream and downstream communities through disaster management committees; emergency response plans and community drills; daily water data by 09:00, hourly in high water; immediate reporting in emergencies."
                      : "放流ゲート開放の少なくとも7日前にエネルギー局の書面承認を得る。災害管理委員会を通じて上流・下流住民に通知する。緊急対応計画と住民訓練。毎日9時までの水位データ報告、高水時は毎時報告。緊急時は即時報告。"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                What the two principal laws settle is unusual in the region:
                they say who issues the warning. Under Article 18 of the Law
                on Disaster Management the early warning is a &ldquo;notification
                and declaration of a surveillance area through media
                broadcasting and other means&rdquo;, and the issuing authority
                climbs from district governor to provincial governor or Mayor
                of Vientiane Capital to the Government, each acting on the
                proposal of the committee at that level; Article 19 attaches
                the evacuation notice to the same authority and Article 27
                uses the same ladder for declaring a disaster-affected area.
                Article 20 obliges sectors to establish early warning systems
                and dam builders to give advance warning, and Article 29 makes
                a project whose operation causes flooding liable to remediate
                and inform the public in a timely manner. Article 47 of the
                Law on Meteorology and Hydrology gives the hazard warning
                itself to the natural-resources ministry and obliges governors
                to relay it, while Article 55 assigns the labour and social
                welfare sector the duty to issue warnings based on met-hydro
                information. The result is a dual structure: a technical
                hazard warning issued nationally through mass media, and an
                administrative warning and evacuation notice issued
                territorially.
              </>
            ) : (
              <>
                2つの主要法が定めていることは、この地域では珍しく「誰が警報を出すか」です。災害管理法第18条は早期警報を「メディア放送その他の手段による通知と監視区域の宣言」と定義し、発出者は郡長から県知事・ビエンチャン首都市長、政府へと階段状に上がり、それぞれ同じ級の委員会の提案を受けて行動します。第19条は避難通知を同一の者に委ね、第27条は被災地域の宣言にも同じ階段を用います。第20条は各部門に早期警報システムの構築を、ダム建設事業者に事前警告を義務付け、第29条は操業により洪水を生じさせた事業者に是正と公衆への適時の情報提供を求めます。他方、気象水文法第47条はハザード警報そのものを天然資源担当省に委ねて知事らにその伝達を義務付け、第55条は労働社会福祉部門に気象水文情報に基づく警報発出の責任を割り当てています。結果として、マスメディアを通じて全国に発する技術的なハザード警報と、領域ごとに発する行政上の警報・避難通知という二重構造が生まれています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                What the law leaves open is just as important. The Law on
                Meteorology and Hydrology has not been amended since the March
                2025 mergers, so the ministry it names as issuer no longer
                exists by that name. The 2019 law delegates the fund and the
                committee organisation to decrees: the Government cites a
                Decree on the Disaster Management Fund No. 631/GOL and a Decree
                on the Organisation and Roles of the Disaster Management
                Committee No. 239/PM, but neither text is publicly accessible,
                and a Decree on the Emergency Relief Fund No. 257/GOV of 23
                August 2023 has appeared on the Official Gazette with an
                unclear relationship to the statutory fund; the Early Warnings
                for All roadmap notes that sub-national access to disaster
                funds is still unregulated. No instrument prescribes a
                public-alert standard: there is no Common Alerting Protocol
                requirement, no mandated siren or SMS channel and no legal duty
                on telecom operators. The dam legislation stops at
                &ldquo;coordinate with disaster management committees&rdquo; and
                does not define how a release warning must reach households.
              </>
            ) : (
              <>
                法律が定めていないことも同様に重要です。気象水文法は2025年3月の省庁統合後も改正されておらず、同法が発出者として名指しする省はその名ではもう存在しません。2019年法は基金と委員会の組織を政令に委ねており、政府は災害管理基金に関する政令第631/GOL号と災害管理委員会の組織・役割に関する政令第239/PM号を挙げていますが、いずれの条文も公開の形では入手できず、2023年8月23日付の緊急救援基金に関する政令第257/GOV号が官報に掲載されたものの法定基金との関係は明らかではありません。EW4All
                ロードマップは地方レベルでの災害資金へのアクセスがなお未整備であると記しています。住民向け警報の標準を定める法令はなく、CAP（共通警報プロトコル）の要件も、サイレンや
                SMS の義務的な伝達手段も、通信事業者の法的義務もありません。ダム関連法令は「災害管理委員会と連携する」までで止まり、放流警報が各世帯にどう届くべきかを定めていません。
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
                Since March 2025 the three functions of an early warning
                system sit in three ministries: forecasting and hazard warning
                in the Ministry of Agriculture and Environment, disaster
                management and public dissemination in the Ministry of Labour
                and Social Welfare, and dam oversight in the Ministry of
                Industry and Commerce. Coordination therefore runs through a
                committee chaired by a Deputy Prime Minister rather than
                through a single line ministry. That body appears under
                several names: the 2019 law calls it the Central Disaster
                Management Committee, state media translate it as the National
                Disaster Management Committee, and older donor texts write
                National Disaster Prevention and Control Committee. Its
                secretariat is likewise called the National Disaster Management
                Office (NDMO) in donor documents and the Disaster Management
                Division of the Department of Social Welfare in the 2026
                contingency plan.
              </>
            ) : (
              <>
                2025年3月以降、早期警報システムの3つの機能は3つの省に分かれています。予報とハザード警報は農業環境省に、災害管理と住民への周知は労働社会福祉省に、ダム監督は工業商業省にあります。したがって調整は単一の主管省ではなく、副首相が議長を務める委員会を通じて行われます。この機関は複数の名称で現れます。2019年法は「中央災害管理委員会」と呼び、国営メディアは「国家災害管理委員会」と訳し、古い援助機関の文書は「国家災害予防管理委員会」と書きます。事務局も、援助機関の文書では「国家災害管理事務所（NDMO）」、2026年の緊急時対応計画では「社会福祉局災害管理課」と呼ばれています。
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
                      ? "Department of Meteorology and Hydrology (DMH); provincial and district natural resources and environment offices"
                      : "DMH（Department of Meteorology and Hydrology、気象水文局）；県・郡の天然資源環境部局"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Ministry of Agriculture and Environment (MAE); MONRE until March 2025"
                      : "農業環境省（MAE）；2025年3月までは天然資源環境省（MONRE）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Law 36/NA Arts. 47, 51–54; EW4All focal point designated by the Prime Minister’s Office (2024)"
                      : "気象水文法第47条・第51〜54条；首相府が EW4All 国家フォーカルポイントに指定（2024年）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Observing network; daily, 3-day and weekly forecasts; severe weather warnings; 2-day flood forecasts for the Mekong and major basins; earthquake bulletins; National Early Warning Centre. Four Flood Control Offices issued more than 20 flood watches and warnings in June–October 2024."
                      : "観測網の運用、日・3日・週間予報、荒天警報、メコン川と主要流域の2日先洪水予報、地震情報、国家早期警報センター。4つの洪水管理事務所は2024年6〜10月に20件超の洪水注意報・警報を発出。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Central Disaster Management Committee (CDMC / NDMC)"
                      : "中央災害管理委員会（CDMC／NDMC）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Chaired by a Deputy Prime Minister; appointed by the Prime Minister on MLSW proposal; non-standing"
                      : "副首相が議長、労働社会福祉大臣の提案で首相が任命、非常設"}
                  </td>
                  <td className={TD}>
                    {en ? "DM Law Arts. 51–52, 55" : "災害管理法第51〜52条・第55条"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Proposes nationwide warnings to the Government; may issue disaster emergency warnings and preparedness orders; orders fund payments; meets after each major event (July and October 2025, March 2026)."
                      : "全国規模の警報を政府に提案し、災害緊急警報と準備命令を発し、基金からの支出を命じる。主要事象の後に会合（2025年7月・10月、2026年3月）。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Ministry of Labour and Social Welfare (MLSW); Department of Social Welfare (DSW) / NDMO"
                      : "MLSW（Ministry of Labour and Social Welfare、労働社会福祉省）；社会福祉局（DSW）／NDMO"}
                  </td>
                  <td className={TD}>{en ? "Government" : "政府"}</td>
                  <td className={TD}>
                    {en
                      ? "DM Law Arts. 52, 58–59; Law 36/NA Art. 55"
                      : "災害管理法第52条・第58〜59条；気象水文法第55条"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Lead ministry and committee secretariat; disseminates warnings to the public in coordination with DMH; manages the fund, relief warehouses and the LaoDi loss database; ASEAN Committee on Disaster Management focal point."
                      : "主管省かつ委員会事務局。DMH と連携した住民への警報周知、基金・救援倉庫・損失データベース LaoDi の管理、ASEAN 災害管理委員会のフォーカルポイント。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Provincial governors and the Mayor of Vientiane Capital; district governors; Provincial and District DMCs"
                      : "県知事・ビエンチャン首都市長、郡長；県・郡の災害管理委員会"}
                  </td>
                  <td className={TD}>
                    {en ? "Provincial and district administrations" : "県・郡行政"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "DM Law Arts. 18–19, 53–54; Law 36/NA Art. 47"
                      : "災害管理法第18〜19条・第53〜54条；気象水文法第47条"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Issue warnings and evacuation notices and declare surveillance areas; committees chaired by a deputy governor with the labour and social welfare department or office as standing deputy and secretariat; relay messages to village heads; consolidate damage reports."
                      : "警報・避難通知の発出と監視区域の宣言。委員会は副知事（副郡長）が議長、労働社会福祉局（事務所）が常任副議長兼事務局。村長への中継と被害報告の集約。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Village heads; Village DMCs / Village Disaster Protection Units"
                      : "村長；村災害管理委員会／村災害防護ユニット"}
                  </td>
                  <td className={TD}>{en ? "Village administration" : "村行政"}</td>
                  <td className={TD}>
                    {en ? "DM Law Art. 57; Law 36/NA Art. 56" : "災害管理法第57条；気象水文法第56条"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Disseminate warnings by loudspeaker, translate into Mon-Khmer and Hmong where needed, set up watch teams; members include the Lao Women’s Union and Lao Youth Union."
                      : "拡声器による警報の周知、必要に応じモン・クメール語やモン語への翻訳、監視班の編成。構成員にラオス女性同盟・ラオス青年同盟を含む。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Ministry of Industry and Commerce (MOIC), Department of Energy"
                      : "MOIC（Ministry of Industry and Commerce、工業商業省）エネルギー局"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Government; absorbed the Ministry of Energy and Mines in March 2025"
                      : "政府；2025年3月にエネルギー鉱業省を吸収"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Law on Dam Safety 20/NA; Decree 20/Gov; MOIC notice of 15 May 2026"
                      : "ダム安全法第20/NA号；政令第20/Gov号；2026年5月15日工業商業省通知"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Dam-safety supervisory authority; approves planned spillway releases in writing; receives daily and hourly reservoir data; reports dam status to the committee."
                      : "ダム安全の監督官庁。計画放流の書面承認、日次・毎時の貯水池データの受領、委員会へのダム状況報告。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Dam operators" : "ダム運営事業者"}</td>
                  <td className={TD}>
                    {en
                      ? "Concessionaires (EDL-Gen, Nam Theun 2 Power Co., the PowerChina Nam Ou cascade and others)"
                      : "コンセッション事業者（EDL-Gen、ナムトゥン2発電会社、PowerChina のナムウーカスケードなど）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Water Law; Decree 20/Gov; Law on Dam Safety; DM Law Arts. 20, 29"
                      : "水法；政令第20/Gov号；ダム安全法；災害管理法第20条・第29条"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Monitor and report water levels, notify authorities before and during releases, maintain emergency response plans, compensate damage."
                      : "水位の監視・報告、放流前後の当局への通知、緊急対応計画の維持、損害の補償。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en
                      ? "Ministry of National Defence; Ministry of Public Security"
                      : "国防省；公安省"}
                  </td>
                  <td className={TD}>{en ? "Government" : "政府"}</td>
                  <td className={TD}>
                    {en
                      ? "DM Law Art. 52 (deputy ministers as deputy chairs)"
                      : "災害管理法第52条（副大臣が副議長）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Response backbone: the Army deployed four aircraft and 14 boats in Luang Namtha in September 2024; Lao Army Radio carries DMH forecasts; the committee chair is a Deputy Prime Minister who is also Minister of National Defence."
                      : "対応の屋台骨。2024年9月にはルアンナムター県で陸軍が航空機4機と舟艇14隻を投入。ラオス陸軍ラジオが DMH の予報を放送。委員会議長は国防大臣を兼ねる副首相。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Ministry of Technology and Communications (MTC); telecom operators"
                      : "MTC（Ministry of Technology and Communications、技術通信省）；通信事業者"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Government; Lao Telecom, LTC, Unitel, Beeline"
                      : "政府；Lao Telecom、LTC、Unitel、Beeline"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "EW4All roadmap Pillar 3 (no statutory duty)"
                      : "EW4All ロードマップ第3の柱（法的義務はなし）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Lead on the National Emergency Telecommunication Plan and an SMS / cell-broadcast strategy; a pre-2021 mobile alert pilot with the four operators; witness to the July 2026 Lao Telecom–PIN agreement on SMS and IVR alerts via 1393."
                      : "国家緊急通信計画と SMS／セルブロードキャスト戦略の主導。2021年以前の4事業者との携帯警報パイロット。2026年7月の Lao Telecom と PIN の 1393 番 SMS・IVR 警報協定に立会い。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Lao Red Cross" : "ラオス赤十字社"}</td>
                  <td className={TD}>{en ? "National society" : "赤十字社"}</td>
                  <td className={TD}>{en ? "Lao Red Cross Law (2017)" : "ラオス赤十字法（2017年）"}</td>
                  <td className={TD}>
                    {en
                      ? "Attends committee coordination meetings; branches monitor DMH forecasts and coordinate with local committees; relays warnings to village leaders."
                      : "委員会の調整会合に出席し、支部は DMH の予報を監視して地方委員会と連携。村長への警報の中継。"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Mekong River Commission, Regional Flood and Drought Management Centre (RFDMC)"
                      : "メコン河委員会（MRC）地域洪水・干ばつ管理センター（RFDMC）"}
                  </td>
                  <td className={TD}>{en ? "Regional (Phnom Penh)" : "地域機関（プノンペン）"}</td>
                  <td className={TD}>{en ? "Regional cooperation" : "地域協力枠組み"}</td>
                  <td className={TD}>
                    {en
                      ? "Daily wet-season forecasts for 22 mainstream points from 138 stations including two in China; flash-flood guidance; cited in Vientiane Capital alerts."
                      : "雨季に本流22地点の日次予報（中国の2地点を含む138観測所）、鉄砲水ガイダンス。ビエンチャン首都の警報で引用。"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>
                    {en ? "People in Need (PIN)" : "People in Need（PIN、チェコの NGO）"}
                  </td>
                  <td className={TD}>{en ? "International NGO" : "国際 NGO"}</td>
                  <td className={TD}>
                    {en
                      ? "Project agreements and MoU with government (no statutory role)"
                      : "事業協定、政府との MoU（法定の役割なし）"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Operates the EWS Lao platform (laos-ews.com) with 12 sonar river sensors in Attapeu, Champasak and Saravane; SMS / IVR alerts via 1393 for 33 districts in 9 provinces."
                      : "EWS Lao プラットフォーム（laos-ews.com）を運営。アッタプー・チャンパーサック・サラワンにソナー式河川センサー12基。9県33郡を対象に 1393 番で SMS・IVR 警報。"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                The national meteorological and hydrological service is the{" "}
                <strong className="text-foreground">
                  Department of Meteorology and Hydrology (DMH)
                </strong>
                , which moved with its parent ministry from MONRE to the new
                MAE in 2025. It operates the observing network, publishes
                daily, three-day and weekly forecasts, severe-weather warnings,
                seasonal outlooks, two-day flood forecasts for the Mekong and
                other major basins and earthquake bulletins, and runs the
                National Early Warning Centre. The NSDRR reports the upgrading
                and construction of 163 stations, a National Earthquake
                Information Center and 15 seismic stations, yet the EW4All
                roadmap still lists hydro-met stations as insufficient and
                budgets 70 new ones. Staffing is the weak point: DMH fell from
                305 staff in 2013 to 233 in 2020 through retirements and a
                policy of cutting temporary staff, with a budget slightly
                decreasing since 2015 and training that depends on donors.
                Across the four EWS pillars DMH covers risk knowledge (the
                national flood and drought risk profile) and monitoring and
                forecasting, and shares dissemination with the committee
                system.
              </>
            ) : (
              <>
                国家気象水文機関は
                <strong className="text-foreground">
                  DMH（Department of Meteorology and Hydrology、気象水文局）
                </strong>
                で、2025年に親省庁とともに MONRE から新設の MAE
                へ移りました。観測網を運用し、日・3日・週間予報、荒天警報、季節見通し、メコン川と主要流域の2日先洪水予報、地震情報を発表し、国家早期警報センターを運営しています。国家防災戦略は観測所163か所の更新・新設、国家地震情報センターと地震観測点15か所を成果として挙げますが、EW4All
                ロードマップはなお観測所不足を指摘し70か所の新設を計上しています。弱点は人員です。DMH
                の職員は2013年の305人から2020年には233人に減り、主因は退職と臨時職員削減の方針で、予算は2015年以降やや減少し、研修は援助機関に依存しています。早期警報の4本柱のうち、DMH
                はリスク知識（国家洪水・干ばつリスクプロファイル）と監視・予報を担い、伝達は委員会系統と分担しています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Disaster management proper belongs to the{" "}
                <strong className="text-foreground">
                  Ministry of Labour and Social Welfare (MLSW)
                </strong>
                , which Article 58 makes directly responsible, with provincial
                departments and district offices of labour and social welfare
                below it. Its{" "}
                <strong className="text-foreground">
                  Department of Social Welfare (DSW)
                </strong>{" "}
                is the secretariat of the{" "}
                <strong className="text-foreground">
                  Central Disaster Management Committee
                </strong>
                , whose composition Article 52 fixes: a Deputy Prime Minister
                as chair, the Minister of Labour and Social Welfare as deputy
                chair and standing member, the deputy ministers of National
                Defence and of Finance as deputy chairs, and deputy ministers
                of eight line ministries as members; the committee is
                non-standing (Art. 51). Deputy Prime Minister Chansamone
                Chanyalath, also Minister of National Defence, chaired it from
                at least 2021 through the five-year review of 16 March 2026;
                by 1 September 2026 Deputy Prime Minister and Minister of
                National Defence Khamlieng Outhakaysone was leading flood
                inspections in Oudomxay as chair. According to indirect
                sources the secretariat had been moved to a MONRE department in
                2013 before returning to MLSW; the 2019 law and every document
                since 2021 place it in DSW. The perception survey states the
                division of labour plainly: MONRE produces the forecast and
                warning messages, MLSW disseminates them to the public.
              </>
            ) : (
              <>
                災害管理そのものは
                <strong className="text-foreground">
                  MLSW（Ministry of Labour and Social Welfare、労働社会福祉省）
                </strong>
                の所管で、第58条が同省を直接の責任省とし、その下に県労働社会福祉局と郡労働社会福祉事務所を置きます。同省の
                <strong className="text-foreground">社会福祉局（DSW）</strong>
                が
                <strong className="text-foreground">中央災害管理委員会</strong>
                の事務局であり、委員会の構成は第52条が定めます。副首相が議長、労働社会福祉大臣が副議長兼常任、国防・財務の副大臣が副議長、8つの関係省の副大臣が委員で、委員会は非常設です（第51条）。国防大臣を兼ねるチャンサモーン・チャンニャラート副首相が少なくとも2021年から2026年3月16日の5年レビューまで議長を務め、2026年9月1日には同じく国防大臣を兼ねるカムリエン・ウタカイソーン副首相が議長としてウドムサイ県の洪水視察を率いました。間接的な資料によれば事務局は2013年に天然資源環境省の一部局へ移され、その後労働社会福祉省に戻ったとされますが、2019年法と2021年以降のすべての文書は事務局を社会福祉局に置いています。認知度調査は分担を端的に述べています。天然資源環境省が予報・警報メッセージを作成し、労働社会福祉省がそれを住民に周知する、というものです。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">Local governments</strong>{" "}
                are the legal issuers. Provincial governors and the Mayor of
                Vientiane Capital, district governors and village heads chair
                or sit on the committee at their level: the Provincial DMC is
                chaired by a deputy governor with the director of the
                provincial labour and social welfare department as standing
                deputy, the District DMC by a district vice-governor, and the
                Village DMC by the village head with the village finance,
                defence and public security and administration units, the
                elderly, the Lao Youth Union and the Lao Women&rsquo;s Union
                (Arts. 53, 54, 57). The 2026 contingency plan adds that
                Village Disaster Protection Units may be activated to assist
                early warning. Damage reporting runs the other way: village,
                district and provincial authorities report, provincial
                committees consolidate, and the central secretariat
                consolidates again. Provinces have begun to plan: Xiengkhouang
                (6 July 2026) and Houaphanh (10 July 2026) endorsed five-year
                provincial DRR plans for 2026&ndash;2030 and 2026 emergency
                response plans.
              </>
            ) : (
              <>
                <strong className="text-foreground">地方政府</strong>
                は法律上の発出者です。県知事とビエンチャン首都市長、郡長、村長はそれぞれの級の委員会を主宰するか、その構成員となります。県委員会は副知事が議長で県労働社会福祉局長が常任副議長、郡委員会は郡副長が議長、村委員会は村長が議長で、村の財務、国防・公安、行政の各ユニット、高齢者、ラオス青年同盟、ラオス女性同盟が加わります（第53条・第54条・第57条）。2026年の緊急時対応計画は、村災害防護ユニットが早期警報を補助するために起動され得ると付記しています。被害報告は逆方向に流れ、村・郡・県当局が報告し、県委員会が集約し、中央事務局が再集約します。県の計画づくりも始まっており、シエンクワーン県（2026年7月6日）とフアパン県（同年7月10日）は2026〜2030年の県防災5か年計画と2026年の県緊急対応計画を承認しました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Dam oversight sits with the{" "}
                <strong className="text-foreground">
                  Ministry of Industry and Commerce (MOIC)
                </strong>
                , which absorbed the Ministry of Energy and Mines (MEM) in
                March 2025; its Department of Energy now approves releases. MEM
                had set up an Energy Industry and Safety Management Department
                in 2023 with Swiss support as dam-safety supervisory authority
                and planned a dam safety control centre in 2024; whether that
                unit survived the merger in the same form could not be
                established. The{" "}
                <strong className="text-foreground">dam operators</strong>{" "}
                carry the first duty to warn: Decree 20/Gov obliges developers
                to install hydrological stations and notify authorities when
                reservoirs reach critical points, the Water Law requires
                immediate reporting of dam problems, and the Law on Disaster
                Management makes a project that causes flooding liable to
                inform the public. In practice the energy ministry itself
                announced releases (Nam Lik 1&ndash;2, August 2022) and companies
                write to provincial departments asking them to alert
                downstream districts, as Xayaburi Power did in 2022 and the Xe
                Lanong 1 operator did in August 2026.
              </>
            ) : (
              <>
                ダム監督は
                <strong className="text-foreground">
                  MOIC（Ministry of Industry and Commerce、工業商業省）
                </strong>
                にあり、同省は2025年3月にエネルギー鉱業省（MEM）を吸収し、現在はそのエネルギー局が放流を承認します。MEM
                は2023年にスイスの支援でダム安全の監督官庁として「エネルギー産業・安全管理局」を設置し、2024年にはダム安全管制センターを計画していましたが、この部局が統合後も同じ形で存続しているかは確認できませんでした。
                <strong className="text-foreground">ダム運営事業者</strong>
                が最初の警告義務を負います。政令第20/Gov号は事業者に水文観測所の設置と貯水池が危険点に達した際の当局への通知を義務付け、水法はダムの問題の即時報告を求め、災害管理法は洪水を生じさせた事業者に公衆への情報提供を課しています。実務では、エネルギー省自身が放流を発表した例（2022年8月のナムリック1〜2）もあれば、事業者が県の部局に書面で下流郡への警告を依頼した例（2022年のサイニャブリ発電、2026年8月のセーラノン1運営者）もあります。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Among the other actors, the{" "}
                <strong className="text-foreground">
                  Ministry of Technology and Communications
                </strong>{" "}
                leads the roadmap work on a National Emergency
                Telecommunication Plan and an SMS and cell-broadcast strategy,
                but no law obliges operators to carry alerts. The{" "}
                <strong className="text-foreground">Lao Red Cross</strong>{" "}
                attends every committee coordination meeting and tells its
                branches to monitor DMH forecasts, although its 2024
                restructuring caused staff turnover. The{" "}
                <strong className="text-foreground">
                  Mekong River Commission
                </strong>{" "}
                supplies the mainstream forecasts quoted in Lao alerts; 12 of
                the original 49 HYCOS stations are in Lao territory. The Czech
                NGO{" "}
                <strong className="text-foreground">People in Need</strong>{" "}
                has since 2023 adapted the Cambodian EWS1294 dissemination
                system to Laos, installed 12 sonar river sensors in the south,
                built an IVR system and trained 29 officials from DMH and
                provincial and district offices. The UN co-chairs the Lao
                Inter-Agency Standing Committee with the Director-General of
                DSW and runs an Emergency Task Force with MLSW that monitors
                early warning before a disaster.
              </>
            ) : (
              <>
                その他のアクターとして、
                <strong className="text-foreground">技術通信省</strong>
                はロードマップの下で国家緊急通信計画と SMS・セルブロードキャスト戦略を主導しますが、事業者に警報配信を義務付ける法律はありません。
                <strong className="text-foreground">ラオス赤十字社</strong>
                は委員会の調整会合すべてに出席し、支部に DMH
                の予報の監視を指示していますが、2024年の組織再編で職員の入れ替わりが生じました。
                <strong className="text-foreground">メコン河委員会</strong>
                はラオスの警報で引用される本流予報を供給し、当初の HYCOS
                観測所49か所のうち12か所がラオス領内にあります。チェコの NGO
                <strong className="text-foreground">People in Need</strong>
                は2023年以降、カンボジアの EWS1294 配信システムをラオス向けに改修し、南部にソナー式河川センサー12基を設置し、IVR
                システムを構築し、DMH と県・郡部局の職員29人を研修しました。国連はラオスの機関間常設委員会（IASC）を社会福祉局長と共同で主宰し、労働社会福祉省とともに災害前に早期警報を監視する緊急タスクフォースを運営しています。
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
                The chain from forecast to household, as described by the
                perception survey, CREWS and the events of 2024&ndash;2026, is a
                relay through the administrative hierarchy rather than a
                direct broadcast. Thresholds are station water levels in two
                tiers, a warning (alarm) level and a flood (danger) level;
                there is no colour-coded national scheme in the sources read.
              </>
            ) : (
              <>
                認知度調査、CREWS、2024〜2026年の事象が描く予報から世帯までの流れは、直接の放送ではなく行政階層を通じた中継です。基準は観測所の水位を2段階（警戒水位と洪水・危険水位）に分けたもので、参照した資料に全国的な色分け区分はありません。
              </>
            )}
          </p>
          <ol className={OL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    Observation and forecasting.
                  </strong>{" "}
                  DMH stations, the MRC HYCOS network and the Regional Flood
                  and Drought Management Centre, which forecasts daily from
                  June to October for 22 mainstream points and issues
                  twice-daily flash-flood guidance (FFGS, since 2009, now with
                  a landslide module). China supplies hourly data once a day
                  for two upper-Mekong stations in the flood season but does
                  not notify Laos of releases.
                </>
              ) : (
                <>
                  <strong className="text-foreground">観測と予報。</strong>
                  DMH の観測所、MRC の HYCOS
                  観測網、そして6〜10月に本流22地点の日次予報と1日2回の鉄砲水ガイダンス（FFGS、2009年から、現在は土砂災害モジュール付き）を出す地域洪水・干ばつ管理センターが担います。中国は洪水期に上流メコンの2観測所の毎時データを1日1回提供しますが、放流は通知しません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">DMH bulletin.</strong>{" "}
                  Forecasts and warnings go out on the DMH website, YouTube
                  channel and Facebook page, through WhatsApp, on radio (Lao
                  Army Radio, Lao National Radio, Vientiane Radio), television
                  and newspapers, and to provincial and district hydro-met
                  services, the committee and its secretariat, line ministries
                  and local authorities. The Tropical Storm Yagi warning of 8
                  September 2024 at 16:10 listed 13 provinces at risk of flash
                  floods and landslides.
                </>
              ) : (
                <>
                  <strong className="text-foreground">DMH の速報。</strong>
                  予報と警報は DMH のウェブサイト、YouTube、Facebook、WhatsApp、ラジオ（ラオス陸軍ラジオ、ラオス国営ラジオ、ビエンチャン放送局）、テレビ、新聞に出され、県・郡の気象水文部局、委員会とその事務局、関係省庁、地方当局に送られます。2024年9月8日16時10分の熱帯暴風ヤギの警報は、鉄砲水と土砂災害の危険がある13県を列挙しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    Administrative warning and surveillance area.
                  </strong>{" "}
                  The governor at the relevant level issues the warning on the
                  committee proposal (Art. 18). The Vientiane Capital alert of
                  12&ndash;13 September 2024, signed by the head of the Vientiane
                  Administration Office, cited DMH and MRC forecasts (danger
                  level 12.50 m; forecast peak 13.85 m on 16 September) and
                  assigned the Vientiane DMC to coordinate relief, agriculture
                  to inspect floodgates and sandbags, public works to identify
                  urban flood points, and district governors and village
                  chiefs to inform residents and prepare evacuations.
                </>
              ) : (
                <>
                  <strong className="text-foreground">
                    行政の警報と監視区域。
                  </strong>
                  該当する級の長が委員会の提案に基づき警報を発します（第18条）。2024年9月12〜13日のビエンチャン首都の警報はビエンチャン行政事務所長の署名で、DMH
                  と MRC の予報（危険水位12.50 m、9月16日に13.85 m
                  のピーク予測）を引用し、ビエンチャン災害管理委員会に救援の調整、農業局に水門と土嚢の点検、公共事業局に市街地の浸水箇所の特定、郡長と村長に住民への周知と避難準備を割り当てました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    Evacuation notice.
                  </strong>{" "}
                  Issued by the same authority (Art. 19). On 10 September 2024
                  authorities in Long district, Luang Namtha, told residents
                  along the Nam Ma and Nam Long rivers to move belongings and
                  livestock and village committees to set up 24-hour watch
                  teams; in 2026 Khammouane evacuated 7,346 people and Luang
                  Namtha declared a disaster emergency zone on 30 August after
                  the Tha River at Boten reached 6.58 m against a 6 m warning
                  level.
                </>
              ) : (
                <>
                  <strong className="text-foreground">避難通知。</strong>
                  警報と同一の者が発します（第19条）。2024年9月10日、ルアンナムター県ロン郡の当局はナムマー川・ナムロン川沿いの住民に家財と家畜の移動を、村委員会に24時間監視班の設置を指示しました。2026年にはカムアン県が7,346人を避難させ、ルアンナムター県はボーテンのター川が警戒水位6
                  m に対し6.58 m に達した後、8月30日に災害緊急区域を宣言しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    District and village relay.
                  </strong>{" "}
                  District labour and social welfare staff pass the message to
                  committee members and village heads by telephone and
                  WhatsApp groups; the village chief broadcasts over the
                  loudspeaker network, sometimes from a motorcycle, and
                  translates into Mon-Khmer or Hmong where needed. 95 percent
                  of surveyed households received their last message in Lao.
                </>
              ) : (
                <>
                  <strong className="text-foreground">郡と村での中継。</strong>
                  郡労働社会福祉事務所の職員が電話と WhatsApp
                  グループで委員会メンバーと村長にメッセージを中継し、村長が拡声器網で放送し、時にはオートバイで巡回し、必要に応じてモン・クメール語やモン語に訳します。調査世帯の95%は最後のメッセージをラオ語で受け取りました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    Dam releases (parallel chain).
                  </strong>{" "}
                  Operator notice, Department of Energy approval, provincial
                  administration, district, riverside villages. Bolikhamxay
                  announced on 6 July 2026 that Nam Theun 1 would open its
                  spillway at 08:00 the next day at 2,000&ndash;3,000 m³/s with
                  the river rising 3&ndash;4 m; Savannakhet instructed nine
                  downstream districts after the Xe Lanong 1 notice of 8 August
                  2026; Sekong warned two Lamam district villages of Houay
                  Lamphanh Lower releases on 20&ndash;22 August 2026. EDL-Gen
                  states that downstream communities receive 24 to 48 hours of
                  notice before a Nam Ngum 1 release.
                </>
              ) : (
                <>
                  <strong className="text-foreground">
                    ダム放流（並行する流れ）。
                  </strong>
                  事業者の通知、エネルギー局の承認、県行政、郡、川沿いの村という順です。ボリカムサイ県は2026年7月6日、ナムトゥン1が翌日8時から2,000〜3,000
                  m³/s で放流し川が3〜4 m
                  上昇すると発表し、サワンナケート県は2026年8月8日のセーラノン1の通知を受けて下流9郡に指示を出し、セーコーン県は2026年8月20〜22日のフアイラムパン下流ダムの放流についてラマム郡の2村に警告しました。EDL-Gen
                  はナムグム1の放流前に下流住民へ24〜48時間前に通知していると述べています。
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
                    {en ? "Mekong mainstream flood" : "メコン川本流の洪水"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "DMH (MAE) flood watch; MRC RFDMC forecast; provincial administration for the local alert"
                      : "DMH（農業環境省）の洪水注意報、MRC RFDMC の予報、地元の警報は県行政"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Two tiers per station — warning / flood level: Vientiane Km4 11.50 / 12.50 m; Thakhek 13.00 / 14.00 m; Pakse 11.00 / 12.00 m (DMH flood watch, 10 August 2026). Luang Prabang reported inconsistently (18.3 m critical in 2024). MRC maps use Normal / Alarm / Flooded."
                      : "観測所ごとに2段階（警戒水位／洪水水位）：ビエンチャン Km4 11.50／12.50 m、ターケーク 13.00／14.00 m、パークセー 11.00／12.00 m（2026年8月10日の DMH 洪水注意報）。ルアンパバーンは資料間で不一致（2024年には臨界18.3 m）。MRC の地図は Normal／Alarm／Flooded の3区分。"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "DMH website and Facebook, state media (KPL, Vientiane Times), provincial notices, village heads"
                      : "DMH のウェブサイト・Facebook、国営メディア（KPL、Vientiane Times）、県の通知、村長"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Tributary flood" : "支流の洪水"}</td>
                  <td className={TD}>
                    {en
                      ? "DMH; provincial and district natural resources offices; PIN sensors in the south"
                      : "DMH、県・郡の天然資源環境部局、南部では PIN のセンサー"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Station levels: Xe Don at Suwannakhili 10.00 / 11.00 m; Tha River at Boten 6 m warning level; impact-based flood forecasting piloted for the Xekong and Xe Don basins since September 2024"
                      : "観測所水位：スワンナキリのセードン川 10.00／11.00 m、ボーテンのター川 警戒水位6 m。影響予測型洪水予報はセーコーン川・セードン川流域で2024年9月からパイロット"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "District relay, loudspeakers; SMS and IVR via 1393 in 33 districts"
                      : "郡の中継、拡声器、33郡では 1393 番の SMS・IVR"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>
                    {en
                      ? "Tropical storms, heavy rain, flash floods and landslides"
                      : "熱帯暴風・大雨・鉄砲水・土砂災害"}
                  </td>
                  <td className={TD}>DMH</td>
                  <td className={TD}>
                    {en
                      ? "Storm warnings listing provinces at risk (13 for Yagi, 8 September 2024); heavy-rain warnings with rainfall above 90 mm as the higher-risk threshold (7 September 2026); flash-flood guidance from the Southeast Asia FFGS with landslide module"
                      : "危険県を列挙する暴風警報（2024年9月8日のヤギでは13県）、90 mm 超の降雨を高リスクの目安とする大雨警報（2026年9月7日）、東南アジア FFGS（土砂災害モジュール付き）による鉄砲水ガイダンス"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Newspapers, radio, television, DMH Facebook page, WhatsApp groups"
                      : "新聞、ラジオ、テレビ、DMH の Facebook、WhatsApp グループ"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Dam releases" : "ダム放流"}</td>
                  <td className={TD}>
                    {en
                      ? "Operator with Department of Energy approval; provincial administration and district authorities for the public notice"
                      : "エネルギー局の承認を受けた事業者、住民向け通知は県行政と郡当局"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "No public level scheme; notices give timing, discharge and expected rise (e.g. 2,000–3,000 m³/s, 3–4 m); seven-day advance approval for planned releases"
                      : "住民向けの区分はなし。通知は時刻・放流量・予想上昇量を示す（例：2,000〜3,000 m³/s、3〜4 m）。計画放流は7日前の承認"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Provincial and district notices, operator social media posts, village heads"
                      : "県・郡の通知、事業者の SNS 投稿、村長"}
                  </td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Drought" : "干ばつ"}</td>
                  <td className={TD}>DMH</td>
                  <td className={TD}>
                    {en
                      ? "Monthly and seasonal outlooks; a drought early warning system is “yet to be defined” (roadmap, 2024); a drought action plan was drafted under CREWS"
                      : "月間・季節見通し。干ばつ早期警報システムは「未定義」（2024年ロードマップ）。CREWS の下で干ばつ行動計画を策定"}
                  </td>
                  <td className={TD}>
                    {en ? "Bulletins, National Monsoon Forum" : "速報、国家モンスーンフォーラム"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Earthquake" : "地震"}</td>
                  <td className={TD}>
                    {en
                      ? "DMH National Earthquake Information Center"
                      : "DMH 国家地震情報センター"}
                  </td>
                  <td className={TD}>
                    {en
                      ? "Information bulletins from 15 seismic stations; no public warning tiers"
                      : "地震観測点15か所に基づく情報発表。住民向けの警報区分はなし"}
                  </td>
                  <td className={TD}>{en ? "DMH bulletins" : "DMH の発表"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                Dissemination remains analogue at the last mile. The roadmap
                states that public loudspeakers are the only widely known
                dissemination system at village level, that Lao PDR has not
                adopted CAP and has no automated public alert system, that
                alert messages used during COVID-19 were never linked to
                early-warning triggers, that villages often receive
                information outside the alert window and that there is no
                mechanism to verify receipt. The 2025 national perception
                survey (1,741 households in 87 villages of 9 provinces,
                fieldwork June 2024 to April 2025) found that 59 percent of
                households had received warning messages and 41 percent had
                not; loudspeakers (46.6 percent) and social media (24.5
                percent) were the main channels; only 28 percent of recipients
                knew the message came from DMH, 29 percent attributed it to
                the village leader and 39.7 percent did not know; 89 percent
                had never joined a drill. On the technical side, DMH staff
                have been trained in CAP and the Lao entry in the WMO Register
                of Alerting Authorities is complete, but no warning has yet
                been issued in CAP format; impact-based flood forecasting was
                launched in September 2024 for the Xekong and Xe Don basins on
                the myDEWETRA platform with a Lao interface, and Laos issued
                multiple flash-flood warnings in 2024 using the Southeast Asia
                FFGS.
              </>
            ) : (
              <>
                ラストマイルの伝達はなおアナログです。ロードマップは、村レベルで広く知られた唯一の伝達手段は公共拡声器であること、ラオスは
                CAP を採用しておらず自動化された住民向け警報システムもないこと、COVID-19
                の際の警報メッセージが早期警報のトリガーに結び付けられなかったこと、村が警報の有効時間外に情報を受け取ることが多いこと、受信を確認する仕組みがないことを明記しています。2025年の全国認知度調査（9県87村の1,741世帯、現地調査は2024年6月〜2025年4月）では、警報を受け取った世帯は59%、受け取らなかった世帯は41%で、主な伝達手段は拡声器（46.6%）と
                SNS（24.5%）、受信者のうちメッセージが DMH
                由来だと知っていたのは28%にとどまり、29%は村長が出したと考え、39.7%は発出者を知らず、89%は訓練に参加したことがありませんでした。技術面では、DMH
                職員は CAP の研修を受け WMO 警報発出機関登録簿への登録も完了していますが、CAP
                形式で発出された警報はまだありません。影響予測型洪水予報は2024年9月にセーコーン川・セードン川流域を対象に
                myDEWETRA プラットフォーム（ラオ語インターフェース付き）で始まり、2024年には東南アジア
                FFGS を用いた鉄砲水警報が複数回発出されました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Lao PDR was selected among the first 30{" "}
                <Link
                  href="/blog/early-warning-global"
                  className="text-highlight hover:underline"
                >
                  Early Warnings for All
                </Link>{" "}
                countries in March 2023; a national roll-out workshop on 21
                September 2023 mapped 38 agencies. The roadmap for 2024&ndash;2027
                (foreword dated 5 August 2024) records that the Prime
                Minister&rsquo;s Office designated DMH as national focal agency
                and focal point, with MONRE and MLSW as focal ministries and a
                loose technical working group; it costs the plan at US$27.7
                million (Pillar 1: 10.0; Pillar 2: 9.0; Pillar 3: 3.9; Pillar
                4: 4.8), of which about 25 percent (US$6.85 million by October
                2025) had been mobilised by November 2025. In-country pillar
                leads are UNDP and UNDRR, the World Bank and WMO, WFP and ITU,
                and FAO and IFRC. The national goal is reliable, understandable
                and actionable warnings for at least 80 percent of the
                population by 2027, which DMH itself described in November
                2025 as possibly unrealistic. The newest channel is the 1393
                SMS and IVR service: on 3 July 2026 Lao Telecommunication
                Public Company and PIN signed a cooperation agreement, funded
                by SDC, GSMA and the UK FCDO and witnessed by the DMH
                Director-General and the MTC Head of Cabinet, to roll out
                alerts to nine provinces and 33 high-risk districts. The public
                descriptions do not say which authority approves a 1393 alert;
                until an authorisation protocol and CAP exist, the service is
                an NGO-owned, telco-delivered add-on rather than the national
                alerting channel.
              </>
            ) : (
              <>
                ラオスは2023年3月に
                <Link
                  href="/blog/early-warning-global"
                  className="text-highlight hover:underline"
                >
                  EW4All（Early Warnings for All）
                </Link>
                の最初の30か国に選ばれ、2023年9月21日の全国展開ワークショップでは38機関の役割が整理されました。2024〜2027年のロードマップ（序文は2024年8月5日付）は、首相府が
                DMH を国家フォーカル機関兼フォーカルポイントに指定し、天然資源環境省と労働社会福祉省をフォーカル省とし、緩やかな技術作業部会を置くと記しています。費用は2,770万米ドル（第1の柱1,000万、第2の柱900万、第3の柱390万、第4の柱480万）で、2025年11月時点で約25%（2025年10月時点で685万米ドル）が確保されました。国内の柱別リードは
                UNDP と UNDRR、世界銀行と WMO、WFP と ITU、FAO と IFRC
                です。国家目標は2027年までに人口の少なくとも80%に信頼でき理解可能で行動につながる警報を届けることですが、DMH
                自身が2025年11月に「現実的でないかもしれない」と述べています。最も新しい伝達手段は
                1393 番の SMS・IVR サービスです。2026年7月3日、ラオス電信公社（Lao Telecom）と PIN
                は、SDC・GSMA・英国 FCDO
                の資金で9県33の高リスク郡に警報を展開する協力協定に署名し、DMH
                局長と技術通信省官房長が立ち会いました。公開された説明は 1393
                番の警報を誰が承認するかを述べておらず、承認手続きと CAP
                が整うまでは、このサービスは国家の警報チャンネルではなく、NGO
                が所有し通信事業者が配信する付加的な仕組みにとどまります。
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
                  <strong className="text-foreground">
                    January&ndash;June 2021 —
                  </strong>{" "}
                  Decree No. 20/Gov on river basins and reservoirs was signed
                  on 20 January and entered into force on 4 March, the first
                  instrument to require hydropower developers to operate
                  hydrological stations and warn on the basis of defined watch
                  and danger points; in June the owners of 78 dams were ordered
                  to monitor levels and report directly to the Government,
                  which decides which dam releases during storms.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2021年1〜6月 —</strong>
                  河川流域・貯水池管理に関する政令第20/Gov号が1月20日に署名され3月4日に施行。水力発電事業者に水文観測所の運用と、定義された監視点・危険点に基づく警報を初めて義務付けました。6月には78のダム所有者に水位の監視と政府への直接報告が命じられ、暴風時にどのダムが放流するかは政府が決めることとされました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">July 2021 —</strong>{" "}
                  Prime Ministerial Decree No. 510/PM adopted the NSDRR
                  2021&ndash;2030 under MLSW, with Objective 6 committing to
                  early warning that reaches all people; the CREWS Cambodia and
                  Lao PDR project (US$5.54 million) began the same month, and
                  sovereign flood insurance through SEADRIF was purchased from
                  2021.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2021年7月 —</strong>
                  首相令第510/PM号が労働社会福祉省主導の国家防災戦略2021〜2030を採択し、目標6にすべての人に届く早期警報を掲げました。同月に
                  CREWS カンボジア・ラオス事業（554万米ドル）が開始され、SEADRIF
                  による政府の洪水保険も2021年から購入されました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">July&ndash;August 2022 —</strong>{" "}
                  The National Assembly adopted the Law on Dam Safety No.
                  20/NA (promulgated 19 August 2022) after the energy minister
                  told the Assembly in June that no law specifically addressed
                  dam safety; a Ministry of Energy and Mines notice in July
                  required release requests seven days in advance. Dam-release
                  warning thereby became a regulated duty, though one aimed at
                  authorities rather than households.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2022年7〜8月 —</strong>
                  エネルギー大臣が6月に国民議会で「ダム安全を特に扱う法律がない」と述べた後、国民議会はダム安全法第20/NA号を採択（2022年8月19日公布）し、7月のエネルギー鉱業省通知は放流申請の7日前提出を求めました。ダム放流の警告が規制上の義務になりましたが、その宛先は世帯ではなく当局です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    March&ndash;September 2023 —
                  </strong>{" "}
                  Lao PDR was selected among the first 30 Early Warnings for
                  All countries (March) and held a national roll-out workshop
                  with 112 participants on 21 September; the National
                  Financial Protection Strategy against Disaster Risks was
                  launched; in August the Ministry of Energy and Mines created
                  an Energy Industry and Safety Management Department as
                  dam-safety supervisory authority with Swiss support of more
                  than US$5.2 million.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2023年3〜9月 —</strong>
                  ラオスが EW4All の最初の30か国に選定（3月）され、9月21日に参加者112人の全国展開ワークショップを開催。災害リスクに対する国家財務保護戦略を始動。8月にはエネルギー鉱業省がスイスの520万米ドル超の支援を受け、ダム安全の監督官庁として「エネルギー産業・安全管理局」を設置しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    June&ndash;September 2024 —
                  </strong>{" "}
                  The Korea Meteorological Administration signed a US$4
                  million grant to DMH (June); the Early Warnings for All
                  Roadmap 2024&ndash;2027 was adopted in August with DMH as
                  national focal point and a technical working group;
                  impact-based flood forecasting was launched in September for
                  the Xekong and Xe Don basins. Typhoon Yagi struck the same
                  month, and LAK 80 billion was later allocated for 2025
                  recovery and preparedness, including upgrading warning
                  systems.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年6〜9月 —</strong>
                  韓国気象庁が DMH への400万米ドルの無償資金に署名（6月）、EW4All
                  ロードマップ2024〜2027が8月に採択され DMH
                  が国家フォーカルポイントに指定されて技術作業部会が設置、9月にはセーコーン川・セードン川流域で影響予測型洪水予報が始動。同月に台風ヤギが襲来し、その後、警報システムの更新を含む2025年の復旧・備えに800億キープが配分されました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">20 March 2025 —</strong>{" "}
                  The National Assembly (156 members, unanimous) reduced the
                  ministries from 17 to 13: MONRE merged with Agriculture and
                  Forestry into the Ministry of Agriculture and Environment,
                  taking DMH with it; Energy and Mines merged into Industry and
                  Commerce, taking dam oversight; Planning and Investment went
                  into Finance; Home Affairs was dissolved; MLSW and the
                  Ministry of Technology and Communications remained. The
                  merger was fiscal-administrative in motive, and the Law on
                  Meteorology and Hydrology was not amended to follow it.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年3月20日 —</strong>
                  国民議会（156人、全会一致）が省を17から13に削減。天然資源環境省は農林省と統合して農業環境省となり
                  DMH
                  もそこへ移り、エネルギー鉱業省は工業商業省に統合されてダム監督も移り、計画投資省は財務省へ、内務省は廃止。労働社会福祉省と技術通信省は存続しました。統合は財政・行政上の動機によるもので、気象水文法はそれに合わせて改正されませんでした。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">June 2025 —</strong>{" "}
                  New ministers for MAE, MOIC and MLSW were approved on 6 June;
                  a national directive of 18 June ordered every disaster
                  management level to inventory resources, set up coordination
                  centres and focal points, run drills and coordinate closely
                  with the hydro-met services to issue early warnings; the
                  first national perception survey was published on 17 June.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年6月 —</strong>
                  6月6日に農業環境省・工業商業省・労働社会福祉省の新大臣が承認され、6月18日の全国指令は災害管理の全レベルに資源の棚卸し、調整センターとフォーカルポイントの設置、訓練の実施、気象水文部局との密な連携による早期警報の発出を命じました。初の全国認知度調査は6月17日に公表されました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">November 2025 —</strong>{" "}
                  CREWS Southeast Asia 2.0 (2025&ndash;2029) was launched in
                  Vientiane on 26 November; the SOFF plan for Laos (about
                  US$7.2 million) covers six stations and the first upper-air
                  station. After Tropical Storm Bualoy in October the committee
                  chair had called for early warning that reaches high-risk
                  areas in time.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年11月 —</strong>
                  CREWS 東南アジア2.0（2025〜2029年）が11月26日にビエンチャンで始動。ラオス向け
                  SOFF
                  計画（約720万米ドル）は6観測所と初の高層観測所を含みます。10月の熱帯暴風ブアローイの後には委員会議長が「高リスク地域に時間内に届く早期警報」を求めていました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">May 2026 —</strong>{" "}
                  The World Bank approved the Lao PDR Southeast Asia Disaster
                  Risk Management Project II (Board date 22 May 2026; IDA
                  US$60 million of US$100 million; DMH among the implementing
                  agencies) with hydro-met improvements and last-mile
                  dissemination pilots; the Ministry of Industry and Commerce
                  issued its 15 May notice on dam releases; the Inter-Agency
                  Contingency Plan 2026 was published.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年5月 —</strong>
                  世界銀行がラオス東南アジア災害リスク管理事業 II（理事会承認2026年5月22日、総額1億米ドルのうち
                  IDA 6,000万米ドル、実施機関に DMH
                  を含む）を承認し、気象水文サービスの改善とラストマイル伝達のパイロットを盛り込みました。工業商業省は5月15日のダム放流通知を発出し、2026年機関間緊急時対応計画が公表されました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">July&ndash;September 2026 —</strong>{" "}
                  Lao Telecom and PIN signed the 1393 SMS and IVR agreement on
                  3 July; Xiengkhouang and Houaphanh endorsed provincial DRR
                  plans 2026&ndash;2030; between March and September the
                  committee chair passed from Deputy Prime Minister Chansamone
                  Chanyalath to Deputy Prime Minister Khamlieng Outhakaysone on
                  a date that could not be established. After the Maysak floods
                  the Prime Minister instructed central and provincial
                  committees on 24&ndash;25 August to improve preparedness and to
                  closely monitor dam safety and reservoir levels.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年7〜9月 —</strong>
                  Lao Telecom と PIN が7月3日に 1393 番の SMS・IVR
                  協定に署名、シエンクワーン県とフアパン県が2026〜2030年の県防災計画を承認。3月から9月の間に委員会議長はチャンサモーン・チャンニャラート副首相からカムリエン・ウタカイソーン副首相に交代しましたが、その日付は確認できていません。メイサークの洪水後、首相は8月24〜25日に中央・県の委員会に備えの改善とダム安全・貯水池水位の綿密な監視を指示しました。
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
                  <strong className="text-foreground">
                    A dual mandate and an unamended law (structural).
                  </strong>{" "}
                  Article 47 of the Law on Meteorology and Hydrology names
                  MONRE as the issuer of early warnings, Article 55 gives the
                  labour and social welfare sector a parallel duty, and Article
                  18 of the Law on Disaster Management gives the administrative
                  warning to governors. Since 20 March 2025 the first of these
                  ministries no longer exists by name, and donor documents of
                  2025&ndash;2026 hedge by citing both MONRE and MAE. The legal
                  authority of DMH to warn through mass media therefore rests
                  on a ministry that has been merged away, and no amendment or
                  re-assignment instrument has been found.
                </>
              ) : (
                <>
                  <strong className="text-foreground">
                    二重の権限と改正されない法律（構造的）。
                  </strong>
                  気象水文法第47条は早期警報の発出者として天然資源環境省を名指しし、第55条は労働社会福祉部門に並行する義務を与え、災害管理法第18条は行政上の警報を知事らに委ねています。2025年3月20日以降、最初の省はその名では存在せず、2025〜2026年の援助機関の文書は
                  MONRE と MAE を併記して曖昧にしています。DMH
                  がマスメディアを通じて警報を発する法的権限は統合で消えた省に依拠したままであり、改正や権限の再割当ての法令は見つかっていません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    Three ministries and a non-standing committee (structural).
                  </strong>{" "}
                  Forecasting (MAE), dissemination and relief (MLSW) and dam
                  oversight (MOIC) report to different ministers and meet in a
                  committee the law describes as non-standing. The CREWS final
                  evaluation of 2025 records that the NDMO felt uncomfortable
                  about its lack of awareness of what was going on in the
                  project, including at MONRE, and asked for a separate budget
                  with joint activities; the roadmap notes less clarity on
                  institutional harmonisation of staffing, budgeting and
                  planning, unclear sub-national coordination between warning
                  issuers and stakeholders, and national coordination meetings
                  that do not review EWS protocols. A data-sharing SOP between
                  MAE and MLSW was being developed under CREWS.
                </>
              ) : (
                <>
                  <strong className="text-foreground">
                    3つの省と非常設の委員会（構造的）。
                  </strong>
                  予報（農業環境省）、周知と救援（労働社会福祉省）、ダム監督（工業商業省）は異なる大臣に報告し、法律が非常設と定める委員会で顔を合わせます。2025年の
                  CREWS 最終評価は、NDMO
                  が事業（天然資源環境省側を含む）で何が進んでいるか把握できないことに不満を抱き、別予算で共同活動を行いたいと求めたことを記録しています。ロードマップも、人員・予算・計画の制度的調和の不明確さ、警報発出者と関係者の地方レベルの調整の不明確さ、EWS
                  の手順を見直さない全国調整会議を指摘しています。農業環境省と労働社会福祉省のデータ共有
                  SOP は CREWS の下で策定中でした。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    The last mile (operational).
                  </strong>{" "}
                  41 percent of surveyed households had not received warnings,
                  rising to 74 percent in Luang Prabang and 72 percent in
                  Sekong; barriers were lack of devices, low technical skills,
                  language and disability, falling disproportionately on the
                  elderly, people with disabilities and ethnic minorities, and
                  trust was undermined by mismatches between what was predicted
                  and what occurred. The roadmap adds that official warning
                  messages are too difficult for community representatives to
                  pass on. The 2026 flood assessment found villages without
                  evacuation shelters, isolation of up to 60 days in Xiengkhai,
                  and a household that received a Government and village
                  warning but did not evacuate; it recommends investment in
                  last-mile communication, locally understood messages and
                  identified evacuation routes and sites.
                </>
              ) : (
                <>
                  <strong className="text-foreground">
                    ラストマイル（運用上）。
                  </strong>
                  調査世帯の41%が警報を受け取っておらず、ルアンパバーン県では74%、セーコーン県では72%に達します。障壁は機器の欠如、技術的スキルの低さ、言語、障害で、高齢者・障害者・少数民族に偏って現れ、予測と実際の食い違いが信頼を損ねています。ロードマップは、公式の警報文が難解でコミュニティ代表者が伝え直せないとも指摘します。2026年の洪水評価は、避難所のない村、シエンカイで最長60日続いた孤立、政府と村当局の警報を受けたのに避難しなかった世帯を記録し、ラストマイルの伝達、地域で理解される文言、明示された避難経路と避難所への投資を勧告しています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    Unfunded local committees (structural).
                  </strong>{" "}
                  The NSDRR admits that local committees in most provinces,
                  districts and villages have limited knowledge, that
                  transmission to communities is limited and people receive
                  information late, and that risk zoning is still not
                  available, citing the Xe-Pian Xe-Namnoy flood. The roadmap
                  states that Village DMCs are inconsistently activated and
                  generally operate without allocated funding, and that high
                  staff turnover loses knowledge; legal procedures for
                  sub-national access to disaster funds are still to be
                  developed. The Lao Red Cross lessons from the 2025 floods add
                  an approval bottleneck: procedural requirements that
                  necessitate high-level approval before information can be
                  disseminated delay the initial response in the critical early
                  hours.
                </>
              ) : (
                <>
                  <strong className="text-foreground">
                    資金のない地方委員会（構造的）。
                  </strong>
                  国家防災戦略は、大半の県・郡・村の委員会の知識が限られ、コミュニティへの伝達が限定的で情報が遅れて届き、リスクゾーニングがなお整備されていないことを、セーピアン・セーナムノイの洪水を引いて認めています。ロードマップは、村委員会の起動が一貫せず概して予算配分なしに運営されており、職員の入れ替わりで知識が失われると述べ、地方レベルが災害資金にアクセスする法的手続きも未整備です。2025年洪水でのラオス赤十字の教訓は承認のボトルネックを加えます。情報を周知する前に上位の承認を要する手続きが、決定的な初期の数時間の対応を遅らせているのです。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    Observation network and DMH capacity (structural).
                  </strong>{" "}
                  Before 2014 there was no automatic real-time surface
                  observation network; the JICA grant built the first one, but
                  its 2020 evaluation rated sustainability only fair because
                  staff fell from 305 to 233 and the O&amp;M budget was
                  uncertain. CREWS found installations largely project-driven
                  with interoperability and server-duplication problems, and
                  warned in 2025 that many previous capital investment projects
                  had failed to deliver sustainable systems. The roadmap lists
                  inadequate and poorly maintained observation infrastructure,
                  no implementation of CAP and a training deficit in
                  impact-based forecasting.
                </>
              ) : (
                <>
                  <strong className="text-foreground">
                    観測網と DMH の能力（構造的）。
                  </strong>
                  2014年以前、自動のリアルタイム地上観測網は存在せず、JICA
                  の無償資金が初めてそれを整備しましたが、2020年の評価は職員が305人から233人に減り維持管理予算が不確かであることから持続性を「やや低い」と評価しました。CREWS
                  は設備が概ね事業単位で導入され相互運用性やサーバーの重複に問題があると見出し、2025年には「過去の多くの資本投資事業は持続的なシステムを実現できなかった」と警告しました。ロードマップは、不十分で保守の行き届かない観測インフラ、CAP
                  の未実装、影響予測型予報の研修不足を挙げています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    Dam releases without a public-alert standard (operational
                    and legal).
                  </strong>{" "}
                  In 2021 CREWS found limited coordination between DMH and the
                  operators of 40 dams, with 50 more under construction, and
                  only one government-operated dam, Nam Ngum 1, providing daily
                  data on levels and potential releases. Villagers complained
                  of releases without prior notice in 2021 and 2022; the Nam Ou
                  4 warning in Khoua district on 23 May 2022 went out the same
                  day discharge increased, and provincial officials described
                  their role as receiving the company&rsquo;s information and
                  passing it on. During Yagi in 2024 some, but not all,
                  operators posted public notices, and the Mekong Dam Monitor
                  reports that the small Nam Tha 3 dam overtopped and flooded
                  central Luang Namtha. Residents blamed Nam Ngum 1 for
                  Vientiane floods in September 2025. The seven-day approval
                  rule suits planned releases but not emergency spillway
                  operation during a typhoon, and the breach of a rare-earth
                  tailings reservoir in Xamneua district, Houaphanh, on 2
                  November 2026, after which village authorities ordered
                  water-use stops along the Nam Vaen and Nam Xam on 3 November,
                  shows that the risk is not confined to hydropower.
                </>
              ) : (
                <>
                  <strong className="text-foreground">
                    住民向け警報の標準がないダム放流（運用上・法的）。
                  </strong>
                  2021年の CREWS は、40のダム（さらに50が建設中）の運営者と DMH
                  の調整が限られ、水位と放流見込みを日次で提供していたのは政府運営のナムグム1だけだと見出しました。2021〜2022年には住民が事前通知なしの放流を訴え、2022年5月23日のクア郡でのナムウー4の警告は放流が増えた当日に出され、県当局者は自らの役割を「会社の情報を受けて住民に伝えること」と説明しました。2024年のヤギでは一部の事業者だけが公開の通知を出し、Mekong
                  Dam Monitor
                  は小規模なナムター3ダムが越流してルアンナムター中心部を浸水させたと報告しています。2025年9月には住民がビエンチャンの洪水をナムグム1の放流のせいだとしました。7日前承認のルールは計画放流には適しても台風時の緊急放流には適さず、2026年11月2日にフアパン県サムヌア郡でレアアース尾鉱貯水池が決壊し、村当局が11月3日にナムヴェーン川・ナムサム川沿いで水利用の停止を命じた事例は、リスクが水力発電に限られないことを示しています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    Transboundary information (operational).
                  </strong>{" "}
                  A MONRE official stated in 2022 that China does not notify
                  Laos when it releases more water, so Laos measures Mekong
                  levels itself and reports them to the MRC; the 2020
                  China&ndash;MRC data-sharing arrangement did not define what
                  counts as unusual, and the 2002 agreement delivers hourly
                  data once a day for two stations in the flood season only.
                  On the Sekong, the release from the Vietnamese A Luoi dam on
                  1&ndash;2 April 2022 reached Attapeu villagers as a vague
                  smartphone warning only hours before the water.
                </>
              ) : (
                <>
                  <strong className="text-foreground">
                    越境情報（運用上）。
                  </strong>
                  天然資源環境省の担当者は2022年に、中国は放流を増やしてもラオスに通知しないため、ラオスは自らメコン川の水位を測って
                  MRC に報告していると述べました。2020年の中国と MRC
                  のデータ共有の取り決めは「異常」の定義を欠き、2002年の協定は洪水期に限り2観測所の毎時データを1日1回提供するにとどまります。セーコーン川では、2022年4月1〜2日のベトナム側アルオイダムの放流が、アッタプー県の住民には出水の数時間前に曖昧なスマートフォンの警告として届いただけでした。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">
                    Finance (structural).
                  </strong>{" "}
                  Only about a quarter of the US$27.7 million roadmap had been
                  mobilised by late 2025, and dissemination (Pillar 3) is the
                  least funded pillar at US$3.9 million, which is why an NGO
                  and telco scheme is filling it. DMH told the Typhoon
                  Committee in November 2025 that dedicated funding is hard to
                  secure because system needs keep evolving and long-term
                  financing is not in place, and that reaching everyone by 2027
                  may not be realistic. The Government framed the constraint in
                  December 2025 as limited human resources, budget constraints
                  and a lack of modern technology, and the Lao Resilience
                  Framework acknowledges limited budget allocations to
                  environment, climate change and disaster risk reduction.
                </>
              ) : (
                <>
                  <strong className="text-foreground">資金（構造的）。</strong>
                  2,770万米ドルのロードマップのうち2025年末までに確保されたのは約4分の1で、伝達（第3の柱）は390万米ドルと最も資金が薄く、だからこそ
                  NGO と通信事業者の仕組みで埋められています。DMH
                  は2025年11月の台風委員会で、システムの必要性が変化し続け長期資金も整っていないため専用資金の確保が難しく、2027年までにすべての人へ届けるのは現実的でないかもしれないと述べました。政府も2025年12月に制約を「人材の不足、予算の制約、近代技術の欠如」と表現し、ラオス・レジリエンス枠組みは環境・気候変動・防災への予算配分が限られていることを認めています。
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
                Hydro-met and early-warning support is channelled mainly
                through CREWS (WMO with the World Bank and UNDRR; the Cambodia
                and Lao PDR project of 2021&ndash;2025 at US$5.54 million and
                Southeast Asia 2.0 for 2025&ndash;2029) and the World Bank: the
                first Southeast Asia Disaster Risk Management Project (approved
                6 July 2017, US$30 million) financed urban flood protection in
                Muang Xay and hydro-met modernisation in Luang Prabang,
                Oudomxay and Phongsali, and the second (May 2026, IDA US$60
                million of US$100 million) adds hydro-met improvements,
                last-mile dissemination pilots and sovereign insurance
                premiums. SOFF plans about US$7.2 million for six GBON stations
                and the first upper-air station; the Korea Meteorological
                Administration granted US$4 million in June 2024 and KICT
                delivered the DWAT hydrological tool with a Lao manual;
                Switzerland finances dam-safety supervision through Helvetas
                and, with GSMA and the UK FCDO, the PIN SMS and IVR system;
                UNDRR and the UN Resident Coordinator coordinate EW4All, with
                WFP, FAO, ADPC, RIMES and the CIMA Foundation (flood and drought
                risk profile, myDEWETRA) as implementing partners. A Green
                Climate Fund concept note led by MAE for a multi-hazard early
                warning system in the southern provinces (about US$23&ndash;25
                million) was re-submitted in September 2025. ADB supported the
                drafting of the 2019 Law on Disaster Management, the Climate
                Change Decree and the NSDRR. Regionally, MLSW is the ASEAN
                Committee on Disaster Management focal point and MAE the
                Sendai Framework focal point; Laos hosted ASEANCOF-22 and -23
                in 2024; and SEADRIF paid US$2 million in 2025 and US$2.275
                million after the 2026 floods.
              </>
            ) : (
              <>
                気象水文と早期警報への支援は主に CREWS（WMO が世界銀行・UNDRR
                と実施。2021〜2025年のカンボジア・ラオス事業554万米ドルと2025〜2029年の東南アジア2.0）と世界銀行を通じて行われています。世界銀行の第1次東南アジア災害リスク管理事業（2017年7月6日承認、3,000万米ドル）はムアンサイの都市洪水対策とルアンパバーン・ウドムサイ・ポンサリーの気象水文近代化を、第2次（2026年5月、総額1億米ドルのうち
                IDA 6,000万米ドル）は気象水文サービスの改善、ラストマイル伝達のパイロット、政府保険料を財源化します。SOFF
                は GBON 観測所6か所と初の高層観測所に約720万米ドルを計画し、韓国気象庁は2024年6月に400万米ドルを供与し、KICT
                は水文ツール DWAT をラオ語マニュアル付きで提供しました。スイスは Helvetas
                を通じてダム安全の監督能力を、GSMA・英国 FCDO とともに PIN の SMS・IVR
                システムを支援しています。UNDRR と国連常駐調整官事務所が EW4All を調整し、WFP、FAO、ADPC、RIMES、CIMA
                財団（洪水・干ばつリスクプロファイル、myDEWETRA）が実施パートナーです。農業環境省主導の緑の気候基金への概念書（南部諸県のマルチハザード早期警報、約2,300万〜2,500万米ドル）は2025年9月に再提出されました。ADB
                は2019年の災害管理法・気候変動政令と国家防災戦略の起草を支援しました。地域面では、労働社会福祉省が
                ASEAN 災害管理委員会、農業環境省が仙台枠組のフォーカルポイントであり、ラオスは2024年に
                ASEANCOF-22・23 を主催し、SEADRIF は2025年に200万米ドル、2026年の洪水後に227.5万米ドルを支払いました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The documented Japanese contribution is the JICA grant
                &ldquo;Project for Improvement of Equipment and Facilities on
                Meteorological and Hydrological Services&rdquo; (exchange of
                notes 4 March 2014, completed 23 November 2017, 583 million
                yen), which gave DMH its first automatic observation network:
                18 provincial automatic weather stations, automatic water-level
                and rainfall stations in the Xe Bangfai, Xe Banghiang, Xe Done
                and Xe Kong basins, GTS/WIS switching and a satellite receiver.
                Hydrological observation intervals fell from 12 hours to one
                hour, flood-arrival-time prediction for the four rivers became
                possible, and DMH issued and periodically updated warnings with
                the project data during Typhoon Mangkhut in 2018. The ex-post
                evaluation of October 2020 rated sustainability as fair,
                pointing to the staff decline and the O&amp;M budget, and CREWS
                lists the project among prior investments that need
                coordination. No current JICA or JMA hydro-met or early-warning
                project in Laos could be identified; JICA appears in the 2026
                contingency plan only as a partner of MLSW in the education and
                protection clusters. Laos reports to the Typhoon Committee, of
                which Japan is a member, and presented its EW4All status at the
                58th Session in November 2025.
              </>
            ) : (
              <>
                日本の関与として文書で確認できるのは、JICA
                の無償資金協力「気象水文サービス機材整備計画」（交換公文2014年3月4日、完了2017年11月23日、5億8,300万円）です。これにより
                DMH
                は初の自動観測網を得ました。県の自動気象観測所18か所、セーバンファイ・セーバンヒアン・セードン・セーコーンの4流域の自動水位・雨量観測所、GTS/WIS
                交換装置、衛星受信装置です。水文観測間隔は12時間から1時間に短縮され、4河川の洪水到達時間の予測が可能になり、2018年の台風マンクットでは
                DMH
                が事業のデータで警報を発し随時更新しました。2020年10月の事後評価は職員の減少と維持管理予算を指摘して持続性を「やや低い」と評価し、CREWS
                はこの事業を調整が必要な既往投資の一つに挙げています。現在進行中の JICA
                または気象庁による気象水文・早期警報案件は確認できず、JICA
                は2026年の緊急時対応計画に教育・保護クラスターにおける労働社会福祉省のパートナーとして登場するにとどまります。ラオスは日本も加盟する台風委員会に報告しており、2025年11月の第58回会期で
                EW4All の進捗を発表しました。
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
                What is distinctive about Lao PDR is that the statute book
                answers the question most ASEAN disaster laws avoid: the
                warning and the evacuation notice are acts of a named
                territorial executive, chosen by the geographic reach of the
                hazard, on the proposal of a committee at the same level. The
                survey evidence suggests this governor-and-village-head model
                works as designed at the last mile, since most people
                experience the warning as coming from the village leader. The
                weakness is on the technical side of the dual structure. The
                hazard warning is vested in a ministry that has been merged
                out of existence without the law following it; the dam-release
                chain, which in a country with nearly ninety hydropower plants
                is a large share of all flood warnings, is regulated as an
                operator-to-authority notification and never reaches the
                household in law; and no instrument sets a public-alert
                standard, whether CAP, a telecom duty or a verified-delivery
                requirement. The binding constraints are organisational and
                financial rather than legal in the narrow sense: mandates
                exist, budget lines, protocols and verification do not.
              </>
            ) : (
              <>
                ラオスの特徴は、ASEAN
                の多くの災害法が避ける問いに法律が答えている点です。警報と避難通知は、ハザードの地理的な広がりに応じて選ばれる名指しされた領域行政の長の行為であり、同じ級の委員会の提案に基づきます。調査結果は、この「知事と村長」のモデルがラストマイルでは設計どおりに機能していることを示唆しています。多くの人が警報を村長から来たものとして経験しているからです。弱点は二重構造の技術側にあります。ハザード警報は統合によって消えた省に委ねられたまま法律が追随しておらず、90近い水力発電所を抱える国で洪水警報の大きな部分を占めるダム放流の流れは事業者から当局への通知として規律されるだけで法律上は世帯に届かず、CAP
                であれ通信事業者の義務であれ受信確認の要件であれ、住民向け警報の標準を定める法令はありません。したがって拘束的な制約は狭い意味の法ではなく組織と資金にあります。権限はあるが、予算項目、手順、確認の仕組みがないのです。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The unresolved question is which organ now legally holds
                Article 47 of the Law on Meteorology and Hydrology, and whether
                the answer will come before the next severe season or only
                after a failure. Three changes would close most of the gap
                without rewriting the 2019 architecture: an amendment or
                formal re-assignment that names the Ministry of Agriculture and
                Environment, or DMH itself, as the issuer of hazard warnings; a
                secondary regulation under Article 20 of the Law on Disaster
                Management that defines the public-alert standard, including a
                CAP-based feed, an authorisation protocol for the 1393 SMS and
                IVR channel and a duty on operators to carry alerts; and the
                integration of dam emergency plans into the committee chain so
                that an emergency spillway release triggers the same
                governor-issued warning as a river forecast. Each is a matter
                of organisation and secondary law; none requires a new act of
                the National Assembly.
              </>
            ) : (
              <>
                未解決の問いは、気象水文法第47条の権限を今どの機関が法律上保持しているのか、そしてその答えが次の厳しいシーズンの前に示されるのか、失敗の後になるのかです。2019年の設計を書き換えずに溝の大半を埋める変更は3つあります。農業環境省あるいは
                DMH そのものをハザード警報の発出者として名指しする改正または正式な権限の再割当て。災害管理法第20条に基づく下位法令で、CAP
                に基づく配信、1393 番の SMS・IVR
                チャンネルの承認手続き、通信事業者の警報配信義務を含む住民向け警報の標準を定めること。そして、ダムの緊急対応計画を委員会の系統に組み込み、緊急放流が河川予報と同じ知事発出の警報を引き起こすようにすることです。いずれも組織と下位法令の問題であり、国民議会の新たな立法を要するものはありません。
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
              National Assembly of Lao PDR (2019). Law on Disaster Management
              No. 71/NA (English translation, &ldquo;The Law on Disasters
              Management 2020&rdquo;). <em>ADB Law and Policy Reform</em>.
              https://lpr.adb.org/sites/default/files/resource/%5Bnid%5D/lao-dm-law-2020-eng-v2.pdf
            </li>
            <li>
              National Assembly of Lao PDR (2017). Law on Meteorology and
              Hydrology No. 36/NA (unofficial English translation).{" "}
              <em>FAOLEX</em>. http://faolex.fao.org/docs/pdf/lao184237.pdf
            </li>
            <li>
              Government of Lao PDR (2021). Decree No. 20/Gov on the
              Management of River Basins and Reservoirs (record and abstract).{" "}
              <em>UNEP Law and Environment Assistance Platform</em>.
              https://leap.unep.org/en/countries/la/national-legislation/decree-no-20gov-management-river-basins-and-reservoirs
            </li>
            <li>
              National Assembly of Lao PDR (2022). Law No. 20/NA on Dam
              Safety, promulgated by Presidential Decree No. 109/PR (record and
              abstract). <em>UNEP Law and Environment Assistance Platform</em>.
              https://leap.unep.org/en/countries/la/national-legislation/law-no-20na-dam-safety-2022-promulgated-presidential-decree-no
            </li>
            <li>
              Ministry of Labour and Social Welfare, Department of Social
              Welfare (2021). National Strategy on Disaster Risk Reduction
              2021&ndash;2030 (Prime Ministerial Decree No. 510/PM).{" "}
              <em>ADB Law and Policy Reform</em>.
              https://lpr.adb.org/sites/default/files/resource/%5Bnid%5D/dm-eng.pdf
            </li>
            <li>
              Government of Lao PDR and United Nations (2024). Early Warnings
              for All Roadmap 2024&ndash;2027, Lao PDR. <em>UN Lao PDR</em>.
              https://laopdr.un.org/lo/download/173549/282223
            </li>
            <li>
              Department of Meteorology and Hydrology, UNDRR, WMO, ADPC and WFP
              (2025). National Weather Forecasts and Early Warning System
              Perception Survey Report, Lao PDR. <em>UN Lao PDR</em>.
              https://laopdr.un.org/en/download/186202/296358
            </li>
            <li>
              CREWS Initiative (2025). Cambodia and Lao PDR Project Final
              Report, 31 October 2025. <em>CREWS Initiative</em>.
              https://crews-initiative.org/wp-content/uploads/2025/11/CREWS-Cambodia-and-Lao-PDR-Project-Final-Report_2025.pdf
            </li>
            <li>
              CREWS Initiative (2025). CREWS Southeast Asia 2.0 Project
              Document. <em>CREWS Initiative</em>.
              https://crews-initiative.org/wp-content/uploads/2025/09/CREWS-Southeast-Asia-2.0-Project-Document.pdf
            </li>
            <li>
              CREWS Initiative (2021). Cambodia and Lao PDR Project Proposal.{" "}
              <em>CREWS Initiative</em>.
              https://crews-initiative.org/wp-content/uploads/2024/06/FINAL_CREWS_Cambodia_Laos_PDR_Proposal_0.pdf
            </li>
            <li>
              JICA (2020). Ex-Post Evaluation of Japanese Grant Aid Project:
              Project for Improvement of Equipment and Facilities on
              Meteorological and Hydrological Services, Lao PDR.{" "}
              <em>Japan International Cooperation Agency</em>.
              https://www2.jica.go.jp/en/evaluation/pdf/2019_1360780_4_f.pdf
            </li>
            <li>
              Government of Lao PDR and Inter-Agency Standing Committee (2026).
              Rapid Flood Impact and Needs Assessment 2026, Lao PDR.{" "}
              <em>UN Lao PDR</em>. https://laopdr.un.org/en/download/218752/324757
            </li>
            <li>
              UN Lao PDR (2026). Inter-Agency Contingency Plan 2026.{" "}
              <em>UN Lao PDR</em>. https://laopdr.un.org/en/download/209202/316316
            </li>
            <li>
              Sisouphanthavong, B. (2025). MHEWS / EW4All in Lao PDR.
              Presentation to the 58th Session of the ESCAP/WMO Typhoon
              Committee. <em>Typhoon Committee</em>.
              https://www.typhooncommittee.org/58th/docs/item%205/2.%20MHEWS_EW4All%20Lao%20PDR_Bounteum.pdf
            </li>
            <li>
              IFRC (2025). DREF Operation MDRLA011, Lao PDR Floods, 13 August
              2025. <em>IFRC GO</em>.
              https://go-api.ifrc.org/api/downloadfile/92150/MDRLA011do
            </li>
            <li>
              World Bank (2026). Lao PDR Southeast Asia Disaster Risk
              Management Project II (P510690), project record.{" "}
              <em>Early Warning System, Rights in Development</em>.
              https://ewsdata.rightsindevelopment.org/projects/p510690-lao-pdr-southeast-asia-disaster-risk-management-pr/
            </li>
            <li>
              Laotian Times (2026). Laos orders hydropower plants to boost dam
              safety ahead of rainy season, 5 June 2026.{" "}
              <em>Laotian Times</em>.
              https://laotiantimes.com/2026/06/05/laos-orders-hydropower-plants-to-boost-dam-safety-ahead-of-rainy-season/
            </li>
            <li>
              Vientiane Times (2026). Residents in high flood-risk districts to
              benefit from early warning system, 7 July 2026.{" "}
              <em>Vientiane Times</em>.
              https://www.vientianetimes.org.la/freefreenews/freecontent_127_Residents_y26.php
            </li>
            <li>
              Lao News Agency (2026). DMH flood watch with Mekong station
              thresholds, 10 August 2026. <em>KPL</em>.
              https://kpl.gov.la/detail.aspx?id=105690
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
              <strong className="text-foreground">{en ? "Lao PDR" : "ラオス"}</strong>
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
