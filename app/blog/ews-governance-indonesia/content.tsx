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
              ? "Early Warning Governance in Indonesia — Laws, Actors and Current Challenges"
              : "インドネシアの予警報制度 — 法制度・アクターの役割・現在の課題"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "Who is legally authorised to warn, and who orders evacuation, in Indonesia as of November 2026: a review based on the texts of Law 24/2007, Government Regulation 21/2008, Law 31/2009, Presidential Regulation 93/2019 and related rules, the CFE-DM 2025 reference handbook, and BMKG and BNPB publications."
              : "2026年11月時点で、インドネシアでは誰が法的に警報を発し、誰が避難を命じるのか。2007年法律第24号・2008年政令第21号・2009年法律第31号・2019年大統領令第93号などの法令原文、CFE-DM の2025年版ハンドブック、BMKG・BNPB の公表資料に基づいて整理します。"}
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
              <>Indonesia is an archipelago of more than 17,000 islands along the Pacific and Indian Ocean subduction zones. BNPB (Badan Nasional Penanggulangan Bencana; National Disaster Management Agency) recorded 1,476 natural disasters in 2024: 814 floods, 326 extreme-weather events, 178 forest and land fires, 99 landslides, 11 earthquakes and 5 volcanic eruptions, and the Geological Agency monitors 127 active volcanoes, 69 of them around the clock. Hydrometeorological events dominate the count, but geophysical events dominate the death toll: the 2018 Palu and Sunda Strait tsunamis (the latter killing 437 people) reshaped the tsunami warning system, while the floods and landslides that followed Cyclone Senyar across Sumatra in November 2025 killed at least 1,201 people. According to the CFE-DM 2025 handbook, direct losses have averaged more than IDR 20 trillion a year, whereas national disaster reserve funds in 2016-2020 ranged from IDR 3.8 to 8.8 trillion.</>
            ) : (
              <>インドネシアは太平洋とインド洋の沈み込み帯に沿って1万7,000以上の島々が連なる群島国家です。BNPB（Badan Nasional Penanggulangan Bencana、国家防災庁）は2024年に1,476件の自然災害を記録し、内訳は洪水814件、極端気象326件、森林・土地火災178件、地すべり99件、地震11件、火山噴火5件でした。地質庁は127の活火山を監視し、うち69は24時間体制です。件数では水文気象災害が圧倒的ですが、死者数では地球物理災害が大きく、2018年のパル津波とスンダ海峡津波（後者は437人死亡）が津波警報制度の再設計をもたらし、2025年11月のサイクロン・セニャルに伴うスマトラの洪水・地すべりでは少なくとも1,201人が亡くなりました。CFE-DM の2025年版ハンドブックによれば直接被害は年平均20兆ルピアを超える一方、2016〜2020年の国の災害準備金は年3.8〜8.8兆ルピアにとどまりました。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>The institutional question matters here for two reasons. First, Indonesia has no single early-warning law. The general disaster law of 2007 says only that warnings come from &ldquo;the competent institution&rdquo;, and the authority to warn is in fact distributed hazard by hazard across sectoral instruments: the meteorology law of 2009 for weather, climate, earthquakes and tsunami; a 2011 regulation of the energy ministry for volcanoes and landslides; a 2019 presidential regulation for the tsunami chain alone. The agencies holding these mandates answer to different parts of government: BNPB is coordinated by the Coordinating Ministry for Human Development and Culture (Kemenko PMK), BMKG (Badan Meteorologi, Klimatologi, dan Geofisika; Agency for Meteorology, Climatology and Geophysics) reports to the President through a coordinating minister, the volcano centre sits inside the Ministry of Energy and Mineral Resources, flood hydrology inside the Ministry of Public Works, and the legal relay duty inside the digital ministry. Second, the decisive step, the evacuation order, belongs by law to regional heads and the regional disaster agencies (BPBD) of 38 provinces and 514 regencies and cities, whose capacity varies widely; as of March 2023, four provinces and 33 regencies or cities still had no BPBD.</>
            ) : (
              <>この国で制度設計が問題になる理由は2つあります。第一に、インドネシアには単一の予警報法がありません。2007年の防災基本法は警報を「権限を有する機関」が行うと定めるだけで、実際の警報権限は分野別の法令に分散しています。気象・気候・地震・津波は2009年の気象気候地球物理法、火山と地すべりは2011年のエネルギー鉱物資源大臣規則、そして津波の伝達連鎖だけが2019年の大統領令で定められています。これらの機関の所属先も異なり、BNPB は人間開発・文化担当調整省（Kemenko PMK）の調整下にあり、BMKG（Badan Meteorologi, Klimatologi, dan Geofisika、気象気候地球物理庁）は調整大臣を通じて大統領に報告し、火山観測はエネルギー鉱物資源省、洪水の水文は公共事業省、法令上の伝達義務は通信デジタル省にあります。第二に、決定的な一歩である避難命令は、法律上、38州・514県市の首長と地方防災局（BPBD）に属しますが、その能力には大きな差があり、2023年3月時点で4州と33県市にはまだ BPBD がありませんでした。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>This article reviews the legal framework, the actors and their roles across the four pillars of early warning, the warning chain and warning levels for each hazard, the reforms of 2020-2026, the current challenges as shown by the events of 2021-2026, and the role of international partners including Japan.</>
            ) : (
              <>本記事では、法制度、4つの柱（リスク知識・監視予測・伝達・対応能力）にわたるアクターの役割、ハザードごとの警報の流れとレベル、2020〜2026年の制度改革、2021〜2026年の災害事例が示す現在の課題、日本を含む国際協力の順に整理します。</>
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
              <>The framework rests on a general disaster law and its implementing regulation, which organise command and status declaration but not warning authority, and on sectoral instruments that each assign one hazard to one agency. Only the tsunami chain is regulated end to end with time limits. The table lists the principal instruments in force in November 2026.</>
            ) : (
              <>制度の土台は、指揮と災害状況宣言を定めるものの警報権限は定めない防災基本法とその施行政令、そして1つのハザードを1つの機関に割り当てる分野別法令です。時間制限つきで末端まで規定されているのは津波の連鎖だけです。表は2026年11月時点で有効な主な法令を示します。</>
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
                  <td className={TDH}>{en ? "Law No. 24/2007 on Disaster Management (Undang-Undang Nomor 24 Tahun 2007 tentang Penanggulangan Bencana)" : "2007年法律第24号 防災法（Undang-Undang Nomor 24 Tahun 2007 tentang Penanggulangan Bencana）"}</td>
                  <td className={TD}>2007</td>
                  <td className={TD}>{en ? "Framework law: responsibilities of central and regional government, creation of BNPB (Art. 10) and BPBD (Art. 18), disaster status and level, emergency response. In force, never amended." : "基本法。中央・地方政府の責任、BNPB（第10条）と BPBD（第18条）の設置、災害状況・レベル、緊急対応。有効、改正なし。"}</td>
                  <td className={TD}>{en ? <>Art. 1(8) and Art. 46(2): early warning is given &ldquo;by the competent institution&rdquo; (lembaga yang berwenang); no agency is named. Art. 51(2): emergency status is declared by the President (national), the governor (province) or the regent or mayor (regency/city).</> : <>第1条8号・第46条2項：早期警報は「権限を有する機関（lembaga yang berwenang）」が行うとし、機関名は示さない。第51条2項：緊急状況の宣言は大統領（国）・州知事（州）・県知事または市長（県市）。</>}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Government Regulation No. 21/2008 on the Implementation of Disaster Management (Peraturan Pemerintah Nomor 21 Tahun 2008 tentang Penyelenggaraan Penanggulangan Bencana)" : "2008年政令第21号 防災実施政令（Peraturan Pemerintah Nomor 21 Tahun 2008 tentang Penyelenggaraan Penanggulangan Bencana）"}</td>
                  <td className={TD}>2008</td>
                  <td className={TD}>{en ? "Implements Law 24/2007: early-warning steps, emergency statuses (siaga darurat, tanggap darurat, transition to recovery), eased access, command." : "法律第24号の施行規定。早期警報の手順、緊急状況（警戒・緊急対応・復旧への移行）、アクセス緩和、指揮。"}</td>
                  <td className={TD}>{en ? "Art. 19(3)-(5): the agency competent for the hazard type observes and analyses and reports to BNPB and/or BPBD; dissemination is mandatory for government bodies, private broadcasters and mass media. Art. 21(2): emergency response is controlled by the Head of BNPB or of BPBD. Art. 46(2): the Head of BNPB or BPBD may order people out of, or bar entry to, a location. Art. 47: single command over sectors and agencies." : "第19条3〜5項：ハザード種別ごとに権限を持つ機関が観測・分析し BNPB・BPBD に報告、伝達は政府機関・民間放送・マスメディアの義務。第21条2項：緊急対応は BNPB 長官または BPBD 長が統制。第46条2項：BNPB・BPBD 長は特定地域からの退去や立入禁止を命令できる。第47条：各部門・機関を一元指揮。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Law No. 31/2009 on Meteorology, Climatology and Geophysics (Undang-Undang Nomor 31 Tahun 2009 tentang Meteorologi, Klimatologi, dan Geofisika)" : "2009年法律第31号 気象気候地球物理法（Undang-Undang Nomor 31 Tahun 2009 tentang Meteorologi, Klimatologi, dan Geofisika）"}</td>
                  <td className={TD}>2009</td>
                  <td className={TD}>{en ? "Mandate of the meteorology, climatology and geophysics agency (BMKG), observation, information services, sanctions." : "気象気候地球物理庁（BMKG）の任務、観測、情報サービス、罰則。"}</td>
                  <td className={TD}>{en ? "Art. 31(b) and 33: early warnings for extreme weather, extreme climate, dangerous sea waves and tsunami are an official service. Art. 34(2): broadcasters must allocate time for these warnings. Art. 36(1): information services are provided only by the Agency unless another law provides otherwise. Art. 37 and 93: extreme-event information must be passed on immediately; officers who deliberately fail to do so face up to 2 years in prison or a fine of IDR 500 million." : "第31条b号・第33条：極端気象・極端気候・危険な波浪・津波の早期警報を公的サービスと規定。第34条2項：放送事業者はこれらの警報の放送時間を確保する義務。第36条1項：情報サービスは他の法律に定めがない限り同庁のみが行う。第37条・第93条：極端現象の情報は即時に伝達する義務、故意に怠った職員は2年以下の禁錮または5億ルピア以下の罰金。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Regulation of the Minister of Energy and Mineral Resources No. 15/2011, Guideline on the Mitigation of Volcanic, Ground-Movement, Earthquake and Tsunami Disasters (Peraturan Menteri ESDM Nomor 15 Tahun 2011)" : "2011年エネルギー鉱物資源大臣規則第15号 火山・地盤変動・地震・津波の災害軽減指針（Peraturan Menteri ESDM Nomor 15 Tahun 2011）"}</td>
                  <td className={TD}>2011</td>
                  <td className={TD}>{en ? "Guideline for central and regional governments and the public; volcano activity levels and hazard-prone zones (KRB); detailed procedures set by the Head of the Geological Agency (Art. 3(2))." : "中央・地方政府と住民向けの指針。火山活動レベルと災害危険区域（KRB）、詳細手順は地質庁長官が定める（第3条2項）。"}</td>
                  <td className={TD}>{en ? <>Annex I: volcano early warning is issued by the Ministry of ESDM and conveyed &ldquo;through regional governments&rdquo;; levels Normal, Waspada, Siaga and Awas; at Awas residents evacuate &ldquo;on the order of the regional government in line with the technical recommendation of the Ministry&rdquo;. Annex II: landslide warnings likewise go through regional governments, based on monthly overlays of rainfall and susceptibility.</> : <>附属書I：火山の早期警報はエネルギー鉱物資源省が発し「地方政府を通じて」伝達。レベルは Normal・Waspada・Siaga・Awas。Awas では住民は「省の技術的勧告に沿った地方政府の命令に基づき」避難。附属書II：地すべり警報も地方政府経由で、月次の降雨と感受性の重ね合わせ図を基礎とする。</>}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Law No. 23/2014 on Regional Government, with Government Regulation No. 2/2018 on Minimum Service Standards and Permendagri No. 101/2018" : "2014年法律第23号 地方行政法、2018年政令第2号 最低サービス基準（SPM）、2018年内務大臣規則第101号"}</td>
                  <td className={TD}>2014 / 2018</td>
                  <td className={TD}>{en ? "Public order and community protection as a mandatory basic service of regions; minimum service standards for the disaster sub-function." : "治安・公共秩序・住民保護を地方の義務的基礎サービスとし、防災サブ分野の最低サービス基準を定める。"}</td>
                  <td className={TD}>{en ? "PP 2/2018 Art. 9(3): regencies and cities must provide disaster-risk information, prevention and preparedness, and rescue and evacuation of victims (no disaster item at provincial level). Permendagri 101/2018 sets the technical standards." : "政令第2号第9条3項：県市は災害リスク情報、予防・備え、被災者の救助・避難の3サービスを提供する義務（州レベルには防災項目なし）。内務大臣規則第101号が技術基準を規定。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Regulation of the Minister of Communication and Informatics No. 2/2016 on the Delivery of Disaster Information through Mobile Cellular Networks (Peraturan Menteri Kominfo Nomor 2 Tahun 2016)" : "2016年通信情報大臣規則第2号 移動体通信網による災害情報の伝達（Peraturan Menteri Kominfo Nomor 2 Tahun 2016）"}</td>
                  <td className={TD}>2016</td>
                  <td className={TD}>{en ? "SMS-blast obligations of mobile operators; in force without amendment." : "携帯事業者の SMS 一斉配信義務。改正なく有効。"}</td>
                  <td className={TD}>{en ? <>Scope limited to natural disasters that can cause death, &ldquo;specifically earthquakes and tsunamis&rdquo;; operators must send within 2 minutes of receipt, twice at a one-minute interval, free of charge and unaltered, to the affected area plus 10 km; the &ldquo;disaster information provider&rdquo; is any legally authorised body (none named).</> : <>対象は死者を生じ得る自然災害、「特に地震と津波」。事業者は受信後2分以内に1分間隔で2回、無料・無改変で、被災地域と周囲10 kmに送信。「災害情報提供者」は法的権限を持つ機関一般（名指しなし）。</>}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Presidential Regulation No. 1/2019 on BNPB, as amended by Presidential Regulation No. 29/2021" : "2019年大統領令第1号 BNPB に関する大統領令（2021年大統領令第29号で改正）"}</td>
                  <td className={TD}>2019 / 2021</td>
                  <td className={TD}>{en ? "Organisation of BNPB: Head at ministerial level, who may be a civil servant, TNI soldier, police officer or professional; steering element of 20 members; five deputies and a Main Secretariat." : "BNPB の組織。長官は閣僚級で、公務員・国軍兵士・警察官・専門家のいずれも就任可。20名の指導部門、5つの副長官部門、主席事務局。"}</td>
                  <td className={TD}>{en ? <>In a national disaster BNPB &ldquo;carries out a command function&rdquo;; BNPB conveys disaster-management information to the public. The 2021 amendment allows the Deputy for Emergency Response to be a TNI or Polri officer.</> : <>国レベルの災害では BNPB が「指揮機能を担う」。BNPB は防災活動の情報を住民に伝える。2021年改正で緊急対応担当副長官に国軍・警察官が就任可。</>}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Presidential Regulation No. 93/2019 on Strengthening and Developing the Earthquake Information and Tsunami Early Warning System (Peraturan Presiden Nomor 93 Tahun 2019)" : "2019年大統領令第93号 地震情報・津波早期警報システムの強化と発展（Peraturan Presiden Nomor 93 Tahun 2019）"}</td>
                  <td className={TD}>2019</td>
                  <td className={TD}>{en ? "The only instrument codifying a multi-agency warning chain with time limits; a structural component (ministries and agencies providing information) and a cultural component (ministries, agencies and regions doing risk reduction); recognises self-evacuation (evakuasi mandiri)." : "時間制限つきの多機関連鎖を定めた唯一の法令。構造部門（情報を提供する省庁）と文化部門（リスク削減を担う省庁・地方）。自主避難（evakuasi mandiri）を明記。"}</td>
                  <td className={TD}>{en ? "Art. 6 and 12: the meteorology agency (BMKG) is the sole issuer and crisis centre and conveys tsunami-potential information within 5 minutes of the earthquake. Art. 29: the communications ministry ensures that broadcasters and mobile operators relay within 5 minutes. Art. 33: BNPB operates its operations centre 24 hours a day. Art. 37-38: TNI and Polri assist dissemination and secure evacuation. Art. 39: regional governments run a 24-hour dissemination service and coordinate the public response through their disaster unit." : "第6条・第12条：BMKG が唯一の発表機関かつクライシスセンターで、地震発生から5分以内に津波の可能性を伝達。第29条：通信省は放送事業者・携帯事業者による5分以内の転送を確保。第33条：BNPB は作戦統制センターを24時間運用。第37〜38条：国軍・警察が伝達補助と避難の警備。第39条：地方政府は24時間の伝達体制を持ち、防災部局（BPBD）を通じて住民対応を調整。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Law No. 17/2019 on Water Resources (Undang-Undang Nomor 17 Tahun 2019 tentang Sumber Daya Air)" : "2019年法律第17号 水資源法（Undang-Undang Nomor 17 Tahun 2019 tentang Sumber Daya Air）"}</td>
                  <td className={TD}>2019</td>
                  <td className={TD}>{en ? "Water-resources management by central and regional government; control of the destructive power of water (Art. 35); water-resources information system (Art. 54). Amended by later omnibus laws." : "中央・地方政府による水資源管理。水の破壊力の制御（第35条）、水資源情報システム（第54条）。その後のオムニバス法で改正。"}</td>
                  <td className={TD}>{en ? "Prevention, response and recovery for destructive water, but no explicit flood early-warning duty was found in the readable text; the Ministry of Public Works contributes through hydrological data and flood forecasting." : "破壊的な水への予防・対処・回復を定めるが、閲読できた条文に明示的な洪水早期警報の義務は見当たらない。公共事業省は水文データと洪水予測で寄与する。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Regulation of the Head of BNPB No. 3/2016 on the Disaster Emergency Command System (SKPDB)" : "2016年 BNPB 長官規則第3号 災害緊急対応指揮システム（SKPDB）"}</td>
                  <td className={TD}>2016</td>
                  <td className={TD}>{en ? "Incident command system at national, provincial, city and regency levels." : "国・州・市・県レベルでの事故指揮システム。"}</td>
                  <td className={TD}>{en ? <>Defines siaga darurat as the state in which &ldquo;information of increased threat based on the early warning system in force&rdquo; indicates that a disaster is approaching, linking warning to status declaration.</> : <>警戒状況（siaga darurat）を「適用される早期警報システムに基づく脅威増大の情報」が災害接近を示す状態と定義し、警報と状況宣言を接続。</>}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Presidential Regulation No. 87/2020 on the Disaster Management Master Plan 2020-2044 (RIPB)" : "2020年大統領令第87号 防災マスタープラン2020〜2044年（RIPB）"}</td>
                  <td className={TD}>2020</td>
                  <td className={TD}>{en ? "25-year plan in five stages; reviewed every five years; feeds national and regional development plans." : "5段階25年計画。5年ごとに見直し、国家・地方開発計画に反映。"}</td>
                  <td className={TD}>{en ? "Sets the multi-hazard early-warning vision (per CFE-DM 2025); no new warning authority." : "多ハザード早期警報の構想を示す（CFE-DM 2025）。新たな警報権限は定めない。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Presidential Regulation No. 12/2024 on BMKG, with BMKG Regulation No. 2/2024" : "2024年大統領令第12号 BMKG に関する大統領令、BMKG 規則第2号（2024年）"}</td>
                  <td className={TD}>2024</td>
                  <td className={TD}>{en ? "Replaces Perpres 61/2008; new nomenclature, tasks and functions; five deputies (Meteorology, Climatology, Geophysics, MKG Infrastructure, Weather Modification)." : "2008年大統領令第61号を置換。名称・任務・機能の変更。5副長官（気象・気候・地球物理・MKG インフラ・気象改変）。"}</td>
                  <td className={TD}>{en ? "Organisational only; warning authority continues to derive from Law 31/2009." : "組織規定のみ。警報権限は引き続き2009年法律第31号に由来。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Presidential Regulation No. 139/2024 on the Tasks and Functions of State Ministries of the Merah Putih Cabinet 2024-2029" : "2024年大統領令第139号 メラ・プティ内閣（2024〜2029年）の省の任務と機能"}</td>
                  <td className={TD}>2024</td>
                  <td className={TD}>{en ? "Cabinet restructuring: Ministry of Public Works (PU) separated from PUPR; Kominfo renamed Ministry of Communication and Digital Affairs (Komdigi); KLHK split; Kemenko PMK retained." : "内閣再編。公共事業省（PU）を PUPR から分離、通信情報省（Kominfo）を通信デジタル省（Komdigi）に改称、環境林業省を分割、Kemenko PMK は存続。"}</td>
                  <td className={TD}>{en ? "Renames the relay ministry and the flood-hydrology ministry; BNPB and BMKG are not mentioned." : "伝達担当省と洪水水文担当省の名称を変更。BNPB・BMKG への言及なし。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>What the law settles is command, not warning. Across all instruments the actor who orders evacuation is the same: the Head of BNPB or BPBD acting as emergency response commander under PP 21/2008 Arts. 46-47, the regional head acting on the technical recommendation of the Ministry of ESDM for volcanoes, or the regional government and its disaster unit under Perpres 93/2019 Art. 39. The technical agencies, BMKG and the Geological Agency, only inform and recommend. What the law leaves open is who warns for the hazards that kill most often. For floods, landslides and extreme weather the chain rests on the generic &ldquo;competent institution&rdquo; of PP 21/2008 Art. 19 and on agency practice, and the list of agencies entitled to warn (BNPB; BMKG for weather, earthquakes and tsunami; PVMBG for eruptions and ground movement; the water-resources research centre of the Ministry of Public Works for floods and drought; the forestry ministry for forest fires) appears in a BNPB guideline of 2012, not in a statute. The SMS relay rule of 2016 is written for earthquakes and tsunami only, although the same channel has carried extreme-weather alerts and, since April 2021, volcano alerts.</>
            ) : (
              <>法律が定めているのは指揮であり、警報ではありません。どの法令でも避難を命じる主体は一貫しており、政令第21号第46〜47条に基づく緊急対応指揮官としての BNPB 長官・BPBD 長、火山ではエネルギー鉱物資源省の技術的勧告を受けた地方政府の首長、大統領令第93号第39条では地方政府とその防災部局です。技術機関である BMKG と地質庁は情報提供と勧告にとどまります。一方、法律が定めていないのは、最も頻繁に人命を奪うハザードについて誰が警報を出すかです。洪水・地すべり・極端気象の連鎖は、政令第21号第19条の一般的な「権限を有する機関」と各機関の実務に依拠しており、警報を出せる機関の一覧（BNPB、気象・地震・津波の BMKG、噴火・地盤変動の PVMBG、洪水・干ばつの公共事業省水資源研究センター、森林火災の林業省）は法律ではなく2012年の BNPB 指針に記されています。2016年の SMS 伝達規則は地震・津波のみを対象に書かれていますが、同じ経路で極端気象警報が、2021年4月以降は火山警報も配信されています。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>The general law has been under revision for six years without result. The bill to amend Law 24/2007 was on the 2020-2024 legislative programme, and deliberation is reported to have been halted by the DPR plenary on 31 May 2022 for lack of agreement between parliament and government. On 20 March 2025 the chair of Commission VIII, Marwan Dasopang, said a revision should give BNPB clearer control over coordination and regulate the BNPB-BPBD command relationship, noting that &ldquo;the current law does not regulate how BNPB relates to BPBD&rdquo; and that many BPBDs are merged into other local agencies. On 30 January 2026, after repeated floods around Medan and in the week of the West Bandung landslide, deputy chair Abidin Fikri said the Commission would revise the law to make BNPB a single command. As of November 2026 no amendment has been passed, and none of these statements addresses early-warning authority as such.</>
            ) : (
              <>防災基本法の改正は6年にわたって結論が出ていません。2007年法律第24号の改正法案は2020〜2024年の立法計画に載り、2022年5月31日に国会本会議で政府との合意が得られず審議停止になったと伝えられています。2025年3月20日、国会第8委員会のマルワン・ダソパン委員長は、改正では BNPB の調整権限を明確にし BNPB と BPBD の指揮関係を規定すべきだと述べ、「現行法は BNPB と BPBD の関係を規定していない」こと、多くの BPBD が他の地方機関に統合されていることを指摘しました。2026年1月30日、メダン周辺での洪水の繰り返しと西バンドン地すべりの同じ週に、アビディン・フィクリ副委員長は BNPB を単一指揮とする改正を進めると表明しました。2026年11月時点で改正は成立しておらず、いずれの発言も警報権限そのものには触れていません。</>
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
              <>At least five institutional owners with different parent ministries share the four pillars of early warning (risk knowledge, monitoring and forecasting, dissemination and communication, response capability). The table gives the formal position of each; the paragraphs that follow describe the division of labour.</>
            ) : (
              <>早期警報の4つの柱（リスク知識、監視予測、伝達、対応能力）は、所属先の異なる少なくとも5つの機関が分担しています。表は各機関の形式的な位置づけを、続く段落は分業の実態を示します。</>
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
                  <td className={TDH}>{en ? "BMKG (Badan Meteorologi, Klimatologi, dan Geofisika; Agency for Meteorology, Climatology and Geophysics)" : "BMKG（Badan Meteorologi, Klimatologi, dan Geofisika、気象気候地球物理庁）"}</td>
                  <td className={TD}>{en ? "Non-ministerial agency under the President, reporting through a coordinating minister (in practice the Minister of Transportation, who inaugurated the current head)" : "大統領直属の非省庁機関。調整大臣を通じて大統領に報告（実務上は運輸大臣で、現長官の就任式も運輸大臣が執行）"}</td>
                  <td className={TD}>{en ? "Law 31/2009; Perpres 12/2024; BMKG Regulation 2/2024" : "2009年法律第31号、2024年大統領令第12号、BMKG 規則第2号（2024年）"}</td>
                  <td className={TD}>{en ? "Monitoring and forecasting; sole issuer of weather, climate, earthquake and tsunami warnings; impact-based forecasting (Signature); Jakarta Tropical Cyclone Warning Centre; InaTEWS as a Tsunami Service Provider for the Indian Ocean; field units at 191 locations" : "観測・予測、気象・気候・地震・津波警報の唯一の発表機関、影響予測型予報（Signature）、ジャカルタ熱帯低気圧警報センター、インド洋の津波サービスプロバイダ（InaTEWS）、191か所の出先機関"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Geological Agency / PVMBG (Pusat Vulkanologi dan Mitigasi Bencana Geologi; Centre for Volcanology and Geological Hazard Mitigation)" : "地質庁／PVMBG（Pusat Vulkanologi dan Mitigasi Bencana Geologi、火山・地質災害軽減センター）"}</td>
                  <td className={TD}>{en ? "Ministry of Energy and Mineral Resources (ESDM)" : "エネルギー鉱物資源省（ESDM）"}</td>
                  <td className={TD}>{en ? "Permen ESDM 15/2011; Perpres 93/2019 Art. 9(2)" : "2011年 ESDM 大臣規則第15号、2019年大統領令第93号第9条2項"}</td>
                  <td className={TD}>{en ? "Monitors 127 volcanoes (69 around the clock); sets activity levels I-IV and hazard zones; VONA aviation notices; monthly landslide-susceptibility maps to regions; MAGMA Indonesia platform; SMS alerts via the communications ministry since April 2021; seismic role limited to submarine volcanic earthquakes" : "127火山の監視（69は24時間）、活動レベルI〜IVと危険区域の設定、航空向け VONA、地方への月次地すべり感受性図、MAGMA Indonesia、2021年4月以降の通信省経由 SMS 警報、地震は海底火山性のみ"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Ministry of Public Works (Kementerian Pekerjaan Umum, PU; until October 2024 the Ministry of Public Works and Housing, PUPR), Directorate General of Water Resources and river basin organisations (BBWS)" : "公共事業省（Kementerian Pekerjaan Umum、PU。2024年10月まで公共事業・国民住宅省 PUPR）水資源総局・流域管理事務所（BBWS）"}</td>
                  <td className={TD}>{en ? "Ministry" : "省"}</td>
                  <td className={TD}>{en ? "Law 17/2019; Perpres 139/2024; Perpres 93/2019 Art. 27" : "2019年法律第17号、2024年大統領令第139号、2019年大統領令第93号第27条"}</td>
                  <td className={TD}>{en ? "Hydrological data and flood forecasting; river gauges and dams; tsunami shelters and evacuation routes; listed in a 2012 BNPB guideline as the warning authority for floods and drought" : "水文データと洪水予測、河川水位計・ダム、津波の避難所・避難路、2012年の BNPB 指針で洪水・干ばつの警報権限機関"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "BNPB (Badan Nasional Penanggulangan Bencana; National Disaster Management Agency)" : "BNPB（Badan Nasional Penanggulangan Bencana、国家防災庁）"}</td>
                  <td className={TD}>{en ? "Non-ministerial agency under the President, coordinated by the Coordinating Ministry for Human Development and Culture (Kemenko PMK); Head at ministerial level" : "大統領直属の非省庁機関、人間開発・文化担当調整省（Kemenko PMK）が調整。長官は閣僚級"}</td>
                  <td className={TD}>{en ? "Law 24/2007; PP 21/2008; Perpres 1/2019 as amended by Perpres 29/2021" : "2007年法律第24号、2008年政令第21号、2019年大統領令第1号（2021年大統領令第29号で改正）"}</td>
                  <td className={TD}>{en ? "Risk knowledge (InaRISK, DIBI); national operations centre (Pusdalops) 24 hours a day; coordinator of the tsunami cultural component; emergency command in national disasters; public information; 12 regional warehouses and 31 stockpiles" : "リスク知識（InaRISK、DIBI）、24時間の国家作戦統制センター（Pusdalops）、津波の文化部門の調整役、国レベル災害での緊急指揮、住民への情報提供、12の地方倉庫と31の備蓄拠点"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "BPBD (Badan Penanggulangan Bencana Daerah; Regional Disaster Management Agencies), provincial and regency/city" : "BPBD（Badan Penanggulangan Bencana Daerah、地方防災局）州・県市"}</td>
                  <td className={TD}>{en ? "Provincial and regency/city governments; head one level below the governor or the regent/mayor" : "州・県市政府。長は知事または県知事・市長の一段下の職位"}</td>
                  <td className={TD}>{en ? "Law 24/2007 Art. 18; PP 21/2008; Perpres 93/2019 Art. 39" : "2007年法律第24号第18条、2008年政令第21号、2019年大統領令第93号第39条"}</td>
                  <td className={TD}>{en ? "Regional operations centres, command and control over local early warning systems, sirens, 24-hour dissemination, evacuation orders as emergency commander; established in 34 of 38 provinces, 398 regencies and 83 cities as of March 2023" : "地方作戦統制センター、地域の早期警報システムの指揮統制、サイレン、24時間伝達、緊急指揮官としての避難命令。2023年3月時点で38州中34州、398県・83市に設置"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Governors, regents and mayors" : "州知事・県知事・市長"}</td>
                  <td className={TD}>{en ? "Regional governments (38 provinces, 514 regencies and cities)" : "地方政府（38州・514県市）"}</td>
                  <td className={TD}>{en ? "Law 24/2007 Art. 51(2); PP 21/2008 Art. 23; Permen ESDM 15/2011" : "2007年法律第24号第51条2項、2008年政令第21号第23条、2011年 ESDM 大臣規則第15号"}</td>
                  <td className={TD}>{en ? "Declare provincial or regency/city emergency status (siaga darurat, tanggap darurat); order evacuation for volcanoes on the technical recommendation of ESDM" : "州・県市の緊急状況（警戒・緊急対応）を宣言。火山では ESDM の技術的勧告に基づき避難を命令"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Ministry of Home Affairs (Kementerian Dalam Negeri, Kemendagri)" : "内務省（Kementerian Dalam Negeri、Kemendagri）"}</td>
                  <td className={TD}>{en ? "Ministry" : "省"}</td>
                  <td className={TD}>{en ? "Perpres 93/2019 Art. 21; PP 2/2018; Permendagri 101/2018" : "2019年大統領令第93号第21条、2018年政令第2号、2018年内務大臣規則第101号"}</td>
                  <td className={TD}>{en ? "Regulates regional authority, enforces the minimum service standards for the disaster sub-function, trains regional apparatus" : "地方の権限を規定、防災サブ分野の最低サービス基準を監督、地方職員を研修"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Ministry of Communication and Digital Affairs (Kementerian Komunikasi dan Digital, Komdigi; until October 2024 Kominfo), mobile operators and broadcasters" : "通信デジタル省（Kementerian Komunikasi dan Digital、Komdigi。2024年10月まで通信情報省 Kominfo）、携帯事業者、放送事業者"}</td>
                  <td className={TD}>{en ? "Ministry; private and public operators" : "省、民間・公共の事業者"}</td>
                  <td className={TD}>{en ? "Permen Kominfo 2/2016; Perpres 93/2019 Art. 29; Law 31/2009 Art. 34(2)" : "2016年通信情報大臣規則第2号、2019年大統領令第93号第29条、2009年法律第31号第34条2項"}</td>
                  <td className={TD}>{en ? "Legally mandated relay: SMS blast since 2016, digital TV alerts since August 2024, the JICA-funded DPIS linking ministries, broadcasters and Call Centre 112; emergency number 112 available in 161 regencies and cities (March 2025)" : "法定の伝達経路。2016年からの SMS 一斉配信、2024年8月からのデジタル TV 警報、省庁・放送局・コールセンター112を結ぶ JICA 無償資金の DPIS。緊急番号112は161県市で利用可（2025年3月）"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Indonesian National Armed Forces (TNI) and National Police (Polri)" : "国軍（TNI）・国家警察（Polri）"}</td>
                  <td className={TD}>{en ? "National security forces" : "国の治安機関"}</td>
                  <td className={TD}>{en ? "Law 34/2004 Art. 7(2)(b); Perpres 93/2019 Art. 37-38; Perpres 1/2019 and 29/2021" : "2004年法律第34号第7条2項b、2019年大統領令第93号第37〜38条、大統領令第1号（2019年）・第29号（2021年）"}</td>
                  <td className={TD}>{en ? "Assist dissemination, secure evacuation routes and logistics, guard equipment; TNI generals have headed BNPB since 2021 and TNI or Polri officers may hold the emergency deputy post" : "警報伝達の補助、避難路と物流の警備、機材の警護。2021年以降 BNPB 長官は国軍将官で、緊急対応副長官にも国軍・警察官が就任可"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Basarnas (National Search and Rescue Agency), Ministry of Social Affairs (TAGANA volunteers), PMI (Palang Merah Indonesia; Indonesian Red Cross)" : "Basarnas（国家捜索救助庁）、社会省（TAGANA ボランティア）、PMI（Palang Merah Indonesia、インドネシア赤十字）"}</td>
                  <td className={TD}>{en ? "President (Basarnas); ministry; auxiliary to government (PMI)" : "大統領直属（Basarnas）、省、政府の補助組織（PMI）"}</td>
                  <td className={TD}>{en ? "Law 29/2014; Law 1/2018 Art. 22(f)" : "2014年法律第29号、2018年法律第1号第22条f号"}</td>
                  <td className={TD}>{en ? "Response capability: search and rescue, rapid assessments, relief; no warning role in law" : "対応能力：捜索救助、迅速評価、救援。法律上の警報役割はなし"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "BRIN (formerly BPPT) and BIG (Geospatial Information Agency)" : "BRIN（旧 BPPT）と BIG（地理空間情報庁）"}</td>
                  <td className={TD}>{en ? "Non-ministerial agencies" : "非省庁機関"}</td>
                  <td className={TD}>{en ? "Perpres 93/2019 Arts. 5, 7-8" : "2019年大統領令第93号第5条・第7〜8条"}</td>
                  <td className={TD}>{en ? "Equipment, maintenance and research for the tsunami system (INA-BUOY, INA-CBT, INA-CAT); geospatial data and bathymetry" : "津波システムの機材・保守・研究開発（INA-BUOY、INA-CBT、INA-CAT）、地理空間データ・海底地形"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Village governments and disaster-resilient villages (Desa Tangguh Bencana)" : "村政府と災害に強い村（Desa Tangguh Bencana）"}</td>
                  <td className={TD}>{en ? "Regency/city governments" : "県市政府"}</td>
                  <td className={TD}>{en ? "PP 21/2008 Art. 19(3) and (7); Perpres 93/2019 (cultural component)" : "2008年政令第21号第19条3項・7項、2019年大統領令第93号（文化部門）"}</td>
                  <td className={TD}>{en ? "Observation with local knowledge, community action on warnings, evacuation drills; the World Bank IDRIP project targeted 2,000 villages" : "地域知識を含む観測、警報を受けた住民行動、避難訓練。世界銀行の IDRIP は2,000村を対象"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "AHA Centre (ASEAN Coordinating Centre for Humanitarian Assistance on disaster management)" : "AHA センター（ASEAN 防災人道支援調整センター）"}</td>
                  <td className={TD}>{en ? "ASEAN intergovernmental body, housed in Graha BNPB, Jakarta" : "ASEAN の政府間機関、ジャカルタの Graha BNPB 内"}</td>
                  <td className={TD}>{en ? "AADMER (signed 2005, ratified 2009); establishment agreement of 17 November 2011" : "AADMER（2005年署名、2009年批准）、2011年11月17日の設立協定"}</td>
                  <td className={TD}>{en ? "Regional coordination with national disaster management organisations; no domestic warning role" : "各国防災機関との地域調整。国内の警報役割はなし"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <><strong className="text-foreground">BMKG</strong> owns the monitoring and forecasting pillar for atmospheric and seismic hazards and, under Art. 36(1) of Law 31/2009, holds a legal monopoly on official meteorological, climatological and geophysical information; non-BMKG observation stations may not publish their data directly to the public (Art. 19). Internally the mandate is split between the Directorate of Earthquake and Tsunami, the Directorate of Public Meteorology (extreme weather) and the Directorate of Applied Climate Services (climate anomalies). The agency was reorganised by Perpres 12/2024 and BMKG Regulation 2/2024 into five deputies, including a new Deputy for Weather Modification, and it serves regions through field units at 191 locations. Since 3 November 2025 it has been headed by Prof. Teuku Faisal Fathani, a geotechnical engineer from Universitas Gadjah Mada who developed an IoT landslide early-detection system installed in 12 provinces, succeeding Prof. Dwikorita Karnawati, who had led the agency since 2017.</>
            ) : (
              <><strong className="text-foreground">BMKG</strong>は大気・地震ハザードの監視予測の柱を担い、2009年法律第31号第36条1項により公式の気象・気候・地球物理情報を独占的に提供します。BMKG 以外の観測所は観測データを直接公表できません（第19条）。庁内では地震・津波局、公共気象局（極端気象）、応用気候サービス局（気候異常）に任務が分かれています。2024年大統領令第12号と BMKG 規則第2号で5副長官体制（気象改変担当を新設）に再編され、191か所の出先機関で地方に対応します。2025年11月3日からは、12州に導入された IoT 地すべり早期検知システムを開発したガジャマダ大学の地盤工学者テウク・ファイサル・ファタニ教授が長官を務め、2017年から率いたドゥイコリタ・カルナワティ教授の後任となりました。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <><strong className="text-foreground">The Geological Agency and its PVMBG</strong> in the Ministry of ESDM hold the volcano and landslide mandate under Permen ESDM 15/2011. They monitor 127 active volcanoes, 69 of them around the clock with more than 200 observers, publish levels, VONA messages and hazard maps through the MAGMA Indonesia platform (on 10 November 2026: three volcanoes at Level III, Anak Krakatau, Merapi and Semeru, and none at Level IV), and send regional governments monthly landslide-susceptibility overlays. For floods the technical input comes from the <strong className="text-foreground">Directorate General of Water Resources of the Ministry of Public Works</strong> and its river basin organisations (BBWS), which manage hydrological data and flood forecasting; their data, together with BMKG Signature and radar, feed the Disaster Prevention Dashboard that the BNPB Early Warning Directorate set up in 2021. Neither agency issues an evacuation order.</>
            ) : (
              <><strong className="text-foreground">地質庁と PVMBG</strong>（エネルギー鉱物資源省）は2011年大臣規則第15号に基づき火山と地すべりを担います。127の活火山を監視（69は200人超の観測員による24時間体制）し、MAGMA Indonesia でレベル・VONA・危険区域図を公表（2026年11月10日時点でレベルIIIはアナク・クラカタウ、メラピ、スメルの3火山、レベルIVはなし）し、地方政府に月次の地すべり感受性図を送ります。洪水の技術的入力は<strong className="text-foreground">公共事業省水資源総局</strong>と流域管理事務所（BBWS）が担い、水文データと洪水予測を管理します。そのデータは BMKG の Signature やレーダーとともに、BNPB 早期警報局が2021年に設けた防災ダッシュボードに統合されています。いずれの機関も避難命令は出しません。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <><strong className="text-foreground">BNPB</strong> and the <strong className="text-foreground">BPBDs</strong> own risk knowledge and response. BNPB maintains InaRISK (launched with UNDP in November 2016), the DIBI disaster database and the national Pusdalops, which Perpres 93/2019 requires to run 24 hours a day, and under PP 21/2008 the heads of BNPB and BPBD control emergency response and may order people out of a location. The agency has been led by army lieutenant generals since 2021; Lt Gen Kristomei Sianturi was inaugurated by President Prabowo on 15 October 2026, succeeding Lt Gen Suharyanto (17 November 2021 to 15 October 2026). The BPBDs, headed by an official one level below the regional head, are where warnings become decisions: they operate regional operations centres and sirens and advise the governor or regent on declaring siaga darurat, the status that PP 21/2008 and Perka BNPB 3/2016 tie to early-warning information. Coverage is incomplete and leadership turnover is high. Kemendagri is meant to enforce the three minimum disaster services on regencies and cities, but BNPB itself listed weak commitment of regional heads, minimal budgets, staff turnover, inadequate facilities and weak data as the obstacles in 2022.</>
            ) : (
              <><strong className="text-foreground">BNPB</strong>と<strong className="text-foreground">BPBD</strong>はリスク知識と対応を担います。BNPB は InaRISK（2016年11月に UNDP と共同で公開）、災害データベース DIBI、大統領令第93号が24時間運用を求める国家 Pusdalops を維持し、政令第21号に基づき BNPB・BPBD の長が緊急対応を統制し、住民の退去を命じることができます。2021年以降の長官は陸軍中将で、2026年10月15日にクリストメイ・シアントゥリ中将がプラボウォ大統領により任命され、スハルヤント中将（2021年11月17日〜2026年10月15日）の後任となりました。首長の一段下の職位の者が長を務める BPBD は、警報が決定に変わる場所です。地方の作戦統制センターとサイレンを運用し、政令第21号と2016年 BNPB 長官規則第3号が早期警報情報と結びつける警戒状況（siaga darurat）の宣言を知事・県知事に助言します。設置は未完で幹部の交代も頻繁です。内務省が県市に3つの最低防災サービスを課す立場ですが、BNPB 自身が2022年に、首長の意思の弱さ、最小限の予算、人員の入れ替わり、施設の不足、データの弱さを障害として挙げています。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <><strong className="text-foreground">Komdigi</strong> (Kominfo until October 2024) and the operators form the legally mandated relay. Permen Kominfo 2/2016 obliges mobile operators to send disaster SMS within two minutes of receipt, and Perpres 93/2019 Art. 29 makes the ministry responsible for relay within five minutes; before 2016 the ministry had, in its own words, no legal basis for handling disaster information and relied on agreements with BMKG and BNPB. Alerts have run on SMS blast since 2016 and on digital television since August 2024 (multiplex partners include TVRI, Transmedia, Metro TV, MNC, SCM, Viva, NTV and RTV), and the JICA-funded DPIS launched in September 2024 links ministries, broadcasters, Call Centre 112, TVRI and RRI. Law 31/2009 Art. 34(2) separately obliges broadcasters to air BMKG early warnings.</>
            ) : (
              <><strong className="text-foreground">Komdigi</strong>（2024年10月まで Kominfo）と通信事業者は法定の伝達経路です。2016年通信情報大臣規則第2号は携帯事業者に受信後2分以内の災害 SMS 送信を義務づけ、大統領令第93号第29条は同省に5分以内の転送責任を課しています。2016年以前は同省自身の言葉で災害情報を扱う法的根拠がない状態で、BMKG・BNPB との協定に頼っていました。警報は2016年から SMS 一斉配信、2024年8月からデジタル TV（TVRI、Transmedia、Metro TV、MNC、SCM、Viva、NTV、RTV が参加）で配信され、2024年9月に稼働した JICA 無償資金の DPIS が省庁・放送局・コールセンター112・TVRI・RRI を接続します。2009年法律第31号第34条2項は放送事業者に BMKG 早期警報の放送を別途義務づけています。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <><strong className="text-foreground">TNI and Polri</strong> assist dissemination and secure evacuation under Perpres 93/2019 Arts. 37-38 and Law 34/2004, and since Perpres 29/2021 their officers may head BNPB and hold its emergency deputy post. <strong className="text-foreground">Basarnas</strong> (Law 29/2014), the <strong className="text-foreground">Ministry of Social Affairs</strong> with its TAGANA volunteers and <strong className="text-foreground">PMI</strong> (Law 1/2018) provide response capability. At the last mile, PP 21/2008 Art. 19 gives communities a role in observing hazard signs with local knowledge, and the World Bank IDRIP project worked through 2,000 disaster-resilient villages; a 2021 UN Joint SDG Fund review nonetheless found that warning systems were &ldquo;seldom linked to either decision-makers or communities&rdquo; and not linked to social protection.</>
            ) : (
              <><strong className="text-foreground">国軍と警察</strong>は大統領令第93号第37〜38条と2004年法律第34号に基づき伝達補助と避難の警備を担い、2021年大統領令第29号以降は BNPB 長官と緊急対応副長官に就任できます。<strong className="text-foreground">Basarnas</strong>（2014年法律第29号）、TAGANA ボランティアを擁する<strong className="text-foreground">社会省</strong>、<strong className="text-foreground">PMI</strong>（2018年法律第1号）は対応能力を提供します。末端では政令第21号第19条が地域知識による兆候観測の役割を住民に認め、世界銀行の IDRIP は2,000の災害に強い村を通じて活動しました。それでも2021年の国連 Joint SDG Fund のレビューは、警報システムが「意思決定者にも地域社会にもほとんど結びついていない」と評価しています。</>
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
              <>The chain below is codified only for tsunami (Perpres 93/2019). For other hazards it follows the generic steps of Law 24/2007 Art. 46(2) and PP 21/2008 Art. 19 (observation, analysis, decision by the authorised party, dissemination, community action), filled in by agency procedures.</>
            ) : (
              <>以下の流れが法令で明文化されているのは津波（2019年大統領令第93号）だけです。他のハザードでは、2007年法律第24号第46条2項と政令第21号第19条の一般的手順（観測、分析、権限者の決定、伝達、住民行動）を各機関の手続きで埋めています。</>
            )}
          </p>
          <ol className={OL}>
            <li>
              {en ? (
                <>Observation and analysis by the agency competent for the hazard: BMKG for weather, climate, earthquakes and tsunami (165 seismograph and 238 accelerograph stations, 134 tide gauges and 2 DART buoys in 2025), PVMBG for volcanoes, the Directorate General of Water Resources for river levels.</>
              ) : (
                <>ハザードごとの権限機関による観測・分析。気象・気候・地震・津波は BMKG（2025年時点で地震計165、加速度計238、潮位計134、DART ブイ2）、火山は PVMBG、河川水位は水資源総局。</>
              )}
            </li>
            <li>
              {en ? (
                <>Decision and issuance. For tsunami BMKG must issue within 5 minutes of the earthquake, stating the affected area, estimated arrival time and estimated height; for volcanoes the Geological Agency changes the level and the exclusion radius. The analysis is conveyed to BNPB and/or BPBD (PP 21/2008 Art. 19(4)).</>
              ) : (
                <>決定と発表。津波では BMKG が地震発生から5分以内に対象地域・到達予想時刻・予想高さを発表。火山では地質庁がレベルと立入禁止半径を変更。分析結果は BNPB・BPBD に伝達（政令第21号第19条4項）。</>
              )}
            </li>
            <li>
              {en ? (
                <>Relay. Komdigi ensures that broadcasters and mobile operators pass tsunami information on within 5 minutes; operators send SMS within 2 minutes of receipt, twice. Digital TV, the BMKG website and apps, MAGMA Indonesia, radio and social media carry the message, and dissemination is mandatory for government bodies, private broadcasters and mass media (Art. 19(5)).</>
              ) : (
                <>伝達。Komdigi は放送・携帯事業者による5分以内の転送を確保し、事業者は受信後2分以内に SMS を2回送信。デジタル TV、BMKG のサイトとアプリ、MAGMA Indonesia、ラジオ、SNS も媒体となり、伝達は政府機関・民間放送・マスメディアの義務（第19条5項）。</>
              )}
            </li>
            <li>
              {en ? (
                <>Regional decision. The national Pusdalops and the regional operations centres of the BPBDs follow up with protective action; the governor or regent declares siaga darurat or tanggap darurat, and the head of BNPB or BPBD as emergency commander orders people out of the danger area. For volcanoes the regional government issues the evacuation order on the technical recommendation of ESDM. Sirens (55 InaTEWS units) are triggered at this level.</>
              ) : (
                <>地方の決定。国家 Pusdalops と BPBD の地方作戦統制センターが防護措置を実行し、知事・県知事が警戒状況または緊急対応状況を宣言、緊急指揮官としての BNPB・BPBD 長が危険区域からの退去を命令。火山では ESDM の技術的勧告に基づき地方政府が避難命令。サイレン（InaTEWS の55基）はこの段階で起動。</>
              )}
            </li>
            <li>
              {en ? (
                <>Community action. BNPB and/or BPBD coordinate the response of the population (Art. 19(7)); for tsunami, Perpres 93/2019 recognises self-evacuation without waiting for a warning (evakuasi mandiri); evacuation signage follows Perka BNPB 7/2015.</>
              ) : (
                <>住民行動。BNPB・BPBD が住民の対応を調整（第19条7項）。津波では大統領令第93号が警報を待たない自主避難（evakuasi mandiri）を認め、避難標識は2015年 BNPB 長官規則第7号に従う。</>
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
                  <td className={TDH}>{en ? "Tsunami" : "津波"}</td>
                  <td className={TD}>{en ? "BMKG (InaTEWS)" : "BMKG（InaTEWS）"}</td>
                  <td className={TD}>{en ? "AWAS: direct full evacuation; SIAGA: expected height 0.5-3 m, direct evacuation; WASPADA: below 0.5 m, keep away from beaches and river banks. First bulletin within 5 minutes by law; 2 min 16 s for the Flores M7.7 earthquake of 15 August 2026" : "AWAS：全面避難を指示、SIAGA：予想高さ0.5〜3 m、避難を指示、WASPADA：0.5 m未満、海岸と河岸から離れる。第1報は法定5分以内、2026年8月15日のフローレス M7.7 地震では2分16秒"}</td>
                  <td className={TD}>{en ? "SMS blast, digital TV (since 2024), 56 Warning Receiver System units, 205 DVB units, 55 sirens, website, apps, radio, social media" : "SMS 一斉配信、デジタル TV（2024年〜）、警報受信システム56基、DVB 205基、サイレン55基、サイト、アプリ、ラジオ、SNS"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Earthquake information" : "地震情報"}</td>
                  <td className={TD}>BMKG</td>
                  <td className={TD}>{en ? "Magnitude, depth and felt-intensity bulletins; only M 5 and above are pushed to TV and phones; InaTEWS bulletins to the Indian Ocean region for undersea events of M 6.5 and above; a public earthquake early warning (InaEEWS) is still being developed" : "規模・深さ・震度の速報。M5以上のみ TV・携帯に配信。海底 M6.5以上はインド洋地域向け InaTEWS 速報。一般向けの地震早期警報（InaEEWS）は開発段階"}</td>
                  <td className={TD}>{en ? "SMS blast, digital TV, website, apps" : "SMS 一斉配信、デジタル TV、サイト、アプリ"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Volcano" : "火山"}</td>
                  <td className={TD}>{en ? "Geological Agency / PVMBG (ESDM), conveyed through regional governments" : "地質庁／PVMBG（ESDM）、地方政府経由"}</td>
                  <td className={TD}>{en ? "Level I Normal; Level II Waspada (first signs of increased activity); Level III Siaga (clear increase, settlements not yet threatened); Level IV Awas (eruption threatening settlements); hazard-prone zones KRB I-III; VONA for aviation" : "レベルI Normal、レベルII Waspada（活動増加の兆候）、レベルIII Siaga（明確な増加、集落は未脅威）、レベルIV Awas（集落を脅かす噴火）。危険区域 KRB I〜III、航空向け VONA"}</td>
                  <td className={TD}>{en ? "MAGMA Indonesia web and app, Bandung hotline, SMS blast via Komdigi since April 2021, regional governments and BPBD" : "MAGMA Indonesia（ウェブ・アプリ）、バンドンのホットライン、2021年4月からの Komdigi 経由 SMS 一斉配信、地方政府・BPBD"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Extreme weather" : "極端気象"}</td>
                  <td className={TD}>BMKG</td>
                  <td className={TD}>{en ? "Warnings at one week, three days and three hours ahead; impact-based forecast Signature with levels waspada, siaga and awas at regency level, nationwide since 21 July 2024; floods, flash floods and landslides added to the impact models in July 2026" : "1週間前・3日前・3時間前の警報。影響予測型予報 Signature は県レベルで waspada・siaga・awas の3段階、2024年7月21日から全国。2026年7月に洪水・鉄砲水・地すべりを影響モデルに追加"}</td>
                  <td className={TD}>{en ? "BMKG website and apps, SMS blast and digital TV via Komdigi, media, BPBD groups" : "BMKG サイト・アプリ、Komdigi 経由の SMS 一斉配信とデジタル TV、メディア、BPBD の連絡網"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Climate anomaly (drought, heat)" : "気候異常（干ばつ・高温）"}</td>
                  <td className={TD}>BMKG</td>
                  <td className={TD}>{en ? "Outlooks up to six months ahead; no statutory level" : "最長6か月前の見通し。法定レベルなし"}</td>
                  <td className={TD}>{en ? "Website; sector services through field units (for example planting-date advice)" : "サイト、出先機関を通じた分野別サービス（作付け時期の助言など）"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "River and urban flood" : "河川・都市洪水"}</td>
                  <td className={TD}>{en ? "Ministry of Public Works (Ditjen SDA, BBWS), BPBD, BNPB dashboard; no single statutory issuer" : "公共事業省（水資源総局・BBWS）、BPBD、BNPB ダッシュボード。法定の単一発表機関なし"}</td>
                  <td className={TD}>{en ? "No national level scheme; gauge thresholds and regional procedures (for example the Jakarta floodgates at Manggarai, 850 cm on 4 March 2025); automatic water-level recorders with SMS gateway" : "全国統一のレベルなし。水位計の閾値と地方の手続き（例：ジャカルタのマンガライ水門、2025年3月4日に850 cm）、SMS ゲートウェイ付き自動水位計"}</td>
                  <td className={TD}>{en ? "SMS gateways, dashboards, local officials, BPBD" : "SMS ゲートウェイ、ダッシュボード、地方職員、BPBD"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Landslide" : "地すべり"}</td>
                  <td className={TD}>{en ? "PVMBG (monthly maps), BMKG (Signature; Sipora in Yogyakarta), regional governments" : "PVMBG（月次図）、BMKG（Signature、ジョグジャカルタの Sipora）、地方政府"}</td>
                  <td className={TD}>{en ? "Monthly rainfall-susceptibility overlays for regions; Signature levels; IoT early-detection devices in 12 provinces; no statutory level" : "地方向けの月次降雨×感受性図、Signature のレベル、12州の IoT 早期検知装置。法定レベルなし"}</td>
                  <td className={TD}>{en ? "Regional governments, BPBD, warning signs erected by regions" : "地方政府、BPBD、地方が設置する警告標識"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>Dissemination thus runs through several parallel channels: SMS blast (legally only for earthquakes and tsunami, in practice also for weather and volcano alerts), digital television since 2024, the BMKG and MAGMA Indonesia apps, sirens and warning receivers on the coast, radio and local officials. Komdigi announced in September 2024 that SMS blast would be replaced by cell broadcast and that a dedicated public-safety network would be built for BNPB, BPBD, BMKG, PVMBG and PMI, but officials said at the time that cell broadcast could not be realised in the near term and that the network needed at least a presidential regulation; as of March 2025 the ministry still described SMS blast and digital TV only. CFE-DM 2025 estimates that 75% of the population is served by early warning, mainly through radio and mobile phones, with gaps in rural areas and geo-fencing not always available. Impact-based forecasting has been BMKG practice since 2024 and is framed by the agency as its contribution to Early Warnings for All, but no national EW4All roadmap could be identified, and adoption of the Common Alerting Protocol is not documented. The warning levels for weather and floods are agency products, not legal categories, so regional declarations remain discretionary.</>
            ) : (
              <>伝達は複数の並行経路で行われます。SMS 一斉配信（法律上は地震・津波のみ、実務では気象・火山警報も）、2024年からのデジタル TV、BMKG と MAGMA Indonesia のアプリ、沿岸のサイレンと警報受信機、ラジオ、地方職員です。Komdigi は2024年9月に SMS 一斉配信をセルブロードキャストへ置き換え、BNPB・BPBD・BMKG・PVMBG・PMI 向けの専用公共安全網を構築すると発表しましたが、当時の担当者はセルブロードキャストは近いうちには実現できない、専用網には少なくとも大統領令が必要と述べており、2025年3月時点でも同省は SMS 一斉配信とデジタル TV のみを挙げています。CFE-DM 2025 は、人口の75%が主にラジオと携帯電話で早期警報の対象になっているものの、農村部に空白があり、ジオフェンシングも常には使えないと評価しています。影響予測型予報は2024年以降の BMKG の実務で、同庁はこれを Early Warnings for All への貢献と位置づけていますが、国としての EW4All ロードマップは確認できず、共通警報プロトコル（CAP）の採用も文書化されていません。気象・洪水の警報レベルは機関の製品であって法定区分ではないため、地方の状況宣言は裁量に委ねられたままです。</>
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
                <><strong className="text-foreground">December 2019 —</strong> Presidential Regulation 93/2019 on earthquake information and tsunami early warning, signed on 30 December 2019, is the first instrument to put time limits on a warning chain (BMKG 5 minutes, relay 5 minutes, BNPB operations centre 24 hours) and to recognise self-evacuation; it followed the 2018 Palu and Sunda Strait disasters.</>
              ) : (
                <><strong className="text-foreground">2019年12月 —</strong> 大統領令第93号（12月30日署名）。警報の連鎖に初めて時間制限（BMKG 5分、転送5分、BNPB 作戦統制センター24時間）を課し、自主避難を明記しました。2018年のパル・スンダ海峡の災害を受けたものです。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">September 2020 —</strong> Presidential Regulation 87/2020 adopts the Disaster Management Master Plan 2020-2044 in five stages, which CFE-DM describes as the source of the national multi-hazard early-warning vision; it is a plan, not a reallocation of authority.</>
              ) : (
                <><strong className="text-foreground">2020年9月 —</strong> 大統領令第87号が5段階の防災マスタープラン2020〜2044年を採択。CFE-DM はこれを国の多ハザード早期警報構想の出典としています。計画であり、権限の再配分ではありません。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">April 2021 —</strong> On 12 April the Geological Agency and Kominfo signed an agreement linking PVMBG hazard information to the SMS-blast system of four operators, extending in practice a channel that the 2016 rule reserves for earthquakes and tsunami; on 19 April Perpres 29/2021 allowed TNI or Polri officers to hold the BNPB Deputy for Emergency Response post, and Perpres 75/2021 created the Disaster Pooling Fund to raise regency-level financing capacity.</>
              ) : (
                <><strong className="text-foreground">2021年4月 —</strong> 4月12日、地質庁と Kominfo が PVMBG の災害情報を4事業者の SMS 一斉配信に接続する協定に署名し、2016年規則が地震・津波に限る経路を実務上拡張しました。4月19日の大統領令第29号で BNPB 緊急対応副長官に国軍・警察官の就任が可能になり、大統領令第75号が県市の財政能力を高める災害プーリング基金を創設しました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">2021 —</strong> The BNPB Early Warning Directorate launched a Disaster Prevention Dashboard pulling BMKG Signature, the flood task force of the public works ministry, BBWS Bengawan Solo and radar data into one view; on 17 November Lt Gen Suharyanto became head of BNPB, which has been led by army generals since that year.</>
              ) : (
                <><strong className="text-foreground">2021年 —</strong> BNPB 早期警報局が BMKG の Signature、公共事業省の洪水タスクフォース、BBWS ブンガワン・ソロ、レーダーを1画面に集約する防災ダッシュボードを開始。11月17日にスハルヤント中将が BNPB 長官に就任し、以後長官は陸軍将官が務めています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">2023 —</strong> BNPB Regulation 1/2023 establishes One Disaster Data (Satu Data Bencana Indonesia), the basis for the one-map, one-data language of later plans.</>
              ) : (
                <><strong className="text-foreground">2023年 —</strong> BNPB 規則第1号が「一つの災害データ（Satu Data Bencana Indonesia）」を制定し、後の計画にある「一つの地図・一つのデータ」の基盤となりました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">January 2024 —</strong> Perpres 12/2024 (in force 26 January) replaces the 2008 regulation on BMKG and, with BMKG Regulation 2/2024, reorganises the agency into five deputies, adding a Deputy for Weather Modification; the warning mandate itself is unchanged.</>
              ) : (
                <><strong className="text-foreground">2024年1月 —</strong> 大統領令第12号（1月26日施行）が2008年の BMKG 大統領令を置き換え、BMKG 規則第2号とともに同庁を5副長官体制に再編して気象改変担当副長官を新設しました。警報の任務自体は変わりません。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">July 2024 —</strong> On 21 July BMKG began operating digital forecasts and impact-based forecasts in every province under circular SE.1/DM/IV/2024 of the Scaling Up Strengthening BMKG Climate and Weather Services Capacity programme, giving regencies waspada, siaga and awas levels tied to predicted impacts.</>
              ) : (
                <><strong className="text-foreground">2024年7月 —</strong> 7月21日、BMKG は「BMKG 気候・気象サービス能力強化拡大（SUS）」事業の通達 SE.1/DM/IV/2024 に基づき、全州でデジタル予報と影響予測型予報の運用を開始し、県レベルで予測される影響に結びついた waspada・siaga・awas の3段階を提供し始めました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">August to October 2024 —</strong> Early warning on digital television went live in August; the JICA-funded DPIS was launched in Bali on 23 September, when Kominfo also announced plans for cell broadcast and a public-safety network; on 1 October the national system SNPDK (EWS plus DPIS) was presented with a target of alerts on TV and phones within three minutes of an earthquake.</>
              ) : (
                <><strong className="text-foreground">2024年8〜10月 —</strong> 8月にデジタル TV での早期警報が開始。9月23日に JICA 無償資金の DPIS がバリで稼働し、Kominfo はセルブロードキャストと公共安全網の計画も発表しました。10月1日には国家システム SNPDK（EWS＋DPIS）が、地震から3分以内に TV・携帯へ警報を出す目標とともに公表されました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">October 2024 —</strong> Perpres 139/2024 of 21 October restructures the cabinet: the Ministry of Public Works is separated from PUPR, Kominfo becomes Komdigi and KLHK is split; BNPB keeps Kemenko PMK as coordinating ministry and neither BNPB nor BMKG is mentioned, so the warning architecture changes only in names.</>
              ) : (
                <><strong className="text-foreground">2024年10月 —</strong> 10月21日の大統領令第139号で内閣再編。公共事業省を PUPR から分離、Kominfo は Komdigi に、環境林業省は分割されました。BNPB の調整省 Kemenko PMK は存続し、BNPB・BMKG への言及はなく、警報の構造は名称のみ変わりました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">January to February 2025 —</strong> Inpres 1/2025 of 22 January orders budget efficiencies of up to IDR 306.7 trillion; the BMKG ceiling falls from IDR 2.8 trillion to 1.4 trillion and is then revised to 1.7 trillion, with the earthquake and tsunami line kept; the episode shows that instrument maintenance is treated as discretionary spending.</>
              ) : (
                <><strong className="text-foreground">2025年1〜2月 —</strong> 1月22日の大統領指示第1号が最大306.7兆ルピアの予算効率化を命令。BMKG の上限は2.8兆から1.4兆ルピアに下がり、その後1.7兆に修正され、地震・津波の予算は維持されました。機器の保守が裁量的支出として扱われることを示す出来事です。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">March 2025 —</strong> After the Jabodetabek flood of 4 March, Komdigi and BMKG agreed on 5 March to strengthen coordination of extreme-weather alerts; on 20 March the chair of Commission VIII put revision of Law 24/2007 back on the agenda with the BNPB-BPBD command relationship as the central aim.</>
              ) : (
                <><strong className="text-foreground">2025年3月 —</strong> 3月4日の首都圏洪水を受け、Komdigi と BMKG は3月5日に極端気象警報の連携強化で合意。3月20日には第8委員会委員長が BNPB と BPBD の指揮関係を中心に2007年法律第24号の改正を再提起しました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">2025 —</strong> BNPB Regulation 1/2025 adopts the National Disaster Management Plan 2025-2029, calling for a sustainable early warning system and disaster data sharing under one map and one data; BMKG Regulation 5/2025 of 10 October adopts the BMKG Strategic Plan 2025-2029.</>
              ) : (
                <><strong className="text-foreground">2025年 —</strong> BNPB 規則第1号が国家防災計画2025〜2029年を採択し、「一つの地図・一つのデータ」の下で持続的な早期警報システムと災害データ共有を求めました。10月10日の BMKG 規則第5号が BMKG 戦略計画2025〜2029年を採択しました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">October to November 2025 —</strong> The World Bank IDRIP closed on 30 October, with BMKG reporting tsunami warnings within a maximum of three minutes and an integrated multi-hazard centre in Kemayoran with a backup in Denpasar; on 3 November Prof. Teuku Faisal Fathani was inaugurated as head of BMKG after an open selection that began on 4 August.</>
              ) : (
                <><strong className="text-foreground">2025年10〜11月 —</strong> 10月30日に世界銀行の IDRIP が終了し、BMKG は津波警報が最長3分以内となり、クマヨランの統合多ハザードセンターとデンパサールのバックアップが整ったと報告しました。11月3日、8月4日に始まった公開選考を経てテウク・ファイサル・ファタニ教授が BMKG 長官に就任しました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">2026 —</strong> On 30 January Commission VIII again announced a revision to make BNPB a single command; in July and August BMKG extended impact-based forecasting to floods, flash floods and landslides with Universitas Gadjah Mada and framed it as an end-to-end service through 191 field units; on 15 October Lt Gen Kristomei Sianturi was inaugurated as head of BNPB; on 9 November the new Peatland and Mangrove Agency (BPGMN) reported integrating BMKG climate data into its Sagara platform as a wildfire early-warning system. The disaster law itself remained unchanged.</>
              ) : (
                <><strong className="text-foreground">2026年 —</strong> 1月30日に第8委員会が BNPB を単一指揮とする改正を再表明。7〜8月に BMKG はガジャマダ大学と協力して影響予測型予報を洪水・鉄砲水・地すべりに拡張し、191か所の出先機関を通じた一貫したサービスと位置づけました。10月15日にクリストメイ・シアントゥリ中将が BNPB 長官に就任。11月9日には新設の国家泥炭マングローブ管理庁（BPGMN）が BMKG の気候データを Sagara プラットフォームに統合して森林火災の早期警報とすると報告しました。防災基本法そのものは変わっていません。</>
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
                <><strong className="text-foreground">A general law silent on warning authority.</strong> Law 24/2007 and PP 21/2008 define early warning as an act of &ldquo;the competent institution&rdquo; without naming one, and only the tsunami chain has a presidential regulation with time limits. Commission VIII of the DPR stated in March 2025 that the law &ldquo;does not regulate how BNPB relates to BPBD&rdquo;; the 2020-2022 revision attempt collapsed, and the 2025-2026 statements aim at a single command for BNPB rather than at warning authority. No amendment existed in November 2026.</>
              ) : (
                <><strong className="text-foreground">警報権限を定めない基本法。</strong>2007年法律第24号と政令第21号は早期警報を「権限を有する機関」の行為と定義するだけで機関名を示さず、時間制限つきの大統領令があるのは津波の連鎖のみです。国会第8委員会は2025年3月に、法律が「BNPB と BPBD の関係を規定していない」と述べました。2020〜2022年の改正の試みは頓挫し、2025〜2026年の発言は警報権限ではなく BNPB の単一指揮を目指しています。2026年11月時点で改正はありません。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Fragmented monitoring and regionally varying responsibilities.</strong> CFE-DM 2025 finds that, although BMKG is the lead technical agency, hazard-monitoring responsibilities are assigned to different ministries and agencies using a mix of new and legacy technology, that &ldquo;assignment of notifications and early warning responsibilities vary across the archipelago&rdquo;, that some hazards remain outside the multi-hazard system, and that alerts may come from technical agencies or from BPBDs. The five institutional owners sit under different parent ministries, so cross-pillar integration depends on memoranda and presidential regulations rather than on one chain of command.</>
              ) : (
                <><strong className="text-foreground">分断された監視と地域ごとに異なる責任。</strong>CFE-DM 2025 は、BMKG が主導的技術機関であるにもかかわらず、ハザード監視の責任が新旧混在の技術を使う複数の省庁・機関に割り振られ、「通知と早期警報の責任分担が群島各地で異なり」、一部のハザードは多ハザードシステムの外に残り、警報は技術機関からも BPBD からも出され得ると指摘しています。5つの機関の所属省が異なるため、柱をまたぐ統合は単一の指揮系統ではなく覚書と大統領令に依存しています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">The regional decision layer as the recurring failure point.</strong> At Semeru on 4 December 2021 (69 dead, 10,655 displaced) PVMBG said it had sent warnings to a WhatsApp group on 1 December and advised against approaching the crater on 2 December, yet villagers said they received no warning of a large eruption, the village evacuation system reportedly failed and pyroclastic flows reached an evacuation centre. At Lewotobi Laki-laki on 3-4 November 2024 homes were destroyed 4 km from the crater, and some 16,000 people were evacuated only after a further eruption on 9 November, following a PVMBG recommendation of a 7 km radius. The two-step design (PVMBG recommends, the regional government orders) is legally clean but places the decisive step with the actor that has the least technical capacity.</>
              ) : (
                <><strong className="text-foreground">繰り返し破綻する地方の決定層。</strong>2021年12月4日のスメル山噴火（死者69人、避難者1万655人）では、PVMBG は12月1日に WhatsApp グループへ警告を送り2日に火口接近を避けるよう助言したと説明しましたが、住民は大噴火の警報を受けていないと証言し、村の避難システムは機能せず、火砕流が避難所に達したと伝えられています。2024年11月3〜4日のレウォトビ・ラキラキ山では火口から4 km の家屋が破壊され、PVMBG が半径7 kmの避難を勧告したのち、約1万6,000人の避難は11月9日の再噴火後にようやく行われました。PVMBG が勧告し地方政府が命令する二段階の設計は法的には明快ですが、決定的な一歩を技術的能力が最も乏しい主体に委ねています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Hazards with no system at all.</strong> The Marapi lahar floods of 11-12 May 2024 (67 dead, 20 missing) struck without a dedicated early warning system; BNPB, BMKG and PVMBG announced a community-based system at 23 sites in Agam, Tanah Datar and Padang Panjang only on 26 May 2024. The Pekalongan landslide of 20 January 2025 (25 dead) and the West Bandung (Pasirlangu) landslide of 24 January 2026 (80 dead, 23 of them Marines training nearby, 53 homes buried) have no recorded pre-event warning or evacuation. In the Sumatra floods of 25-30 November 2025 (at least 1,201 dead, more than 3.3 million affected) BMKG issued its tropical-storm warning on 26 November, around landfall; whether earlier heavy-rain warnings were issued, and how BPBDs used them, is not documented in the sources reviewed.</>
              ) : (
                <><strong className="text-foreground">システムが存在しないハザード。</strong>2024年5月11〜12日のマラピ山ラハール洪水（死者67人、不明20人）は専用の早期警報システムがないまま発生し、BNPB・BMKG・PVMBG がアガム、タナダタール、パダンパンジャンの23か所に地域主体のシステムを設けると発表したのは5月26日でした。2025年1月20日のプカロンガン地すべり（死者25人）と2026年1月24日の西バンドン（パシルラング）地すべり（死者80人、うち23人は近くで訓練中の海兵隊員、家屋53戸が埋没）には、事前の警報や避難の記録がありません。2025年11月25〜30日のスマトラ洪水（死者1,201人以上、被災者330万人超）では、BMKG の熱帯暴風警報は上陸前後の11月26日に出されており、それより前に大雨警報があったか、BPBD がどう使ったかは参照した資料では確認できません。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Local capacity.</strong> As of March 2023, 4 of 38 provinces and 33 of 514 regencies and cities had no BPBD, and local BPBD leadership &ldquo;often changes&rdquo; (CFE-DM 2025); the chair of Commission VIII added in March 2025 that many BPBDs are merged into other local agencies, weakening staff, equipment and budgets. BNPB listed in 2022 the obstacles to the minimum disaster services: weak commitment of regional heads, minimal budgets, staff turnover, inadequate facilities, and weak data and coordination. Only around 50 of a projected 2,000 tsunami evacuation shelters have been built.</>
              ) : (
                <><strong className="text-foreground">地方の能力。</strong>2023年3月時点で38州中4州、514県市中33県市に BPBD がなく、BPBD の幹部は「頻繁に交代する」と CFE-DM 2025 は述べています。第8委員会委員長は2025年3月、多くの BPBD が他の地方機関に統合され人員・機材・予算が弱まっていると付け加えました。BNPB は2022年に最低防災サービスの障害として、首長の意思の弱さ、最小限の予算、人員の入れ替わり、施設の不足、データと調整の弱さを挙げています。津波避難所は計画2,000か所に対し約50か所しか整備されていません。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Funding and maintenance.</strong> Under Inpres 1/2025 (22 January 2025) the 2025 ceiling of BMKG was halved from IDR 2.8 trillion to 1.4 trillion; the head told Commission V on 12 February 2025 that planned capital spending and maintenance could not go ahead, a spokesman warned that forecast accuracy could fall from 90 to 60 percent and that almost 600 detection instruments, many already outdated, were at risk, and the figure was later revised to IDR 1.7 trillion with the earthquake and tsunami line (IDR 41.9 billion) and salaries protected. National disaster reserve funds of IDR 3.8-8.8 trillion a year in 2016-2020 compare with average direct losses above IDR 20 trillion. The World Bank IDRIP project (US$160 million), which financed instruments, sirens, operations centres and village preparedness, closed on 30 October 2025, so the recurrent cost of the expanded network now falls on the national budget.</>
              ) : (
                <><strong className="text-foreground">資金と保守。</strong>2025年1月22日の大統領指示第1号により BMKG の2025年度予算上限は2.8兆ルピアから1.4兆ルピアに半減されました。長官は2月12日に国会第5委員会で計画していた設備投資と保守ができないと述べ、報道官は予測精度が90%から60%に落ちる恐れと、多くが老朽化した約600の検知機器が危機にあると警告しました。その後1.7兆ルピアに修正され、地震・津波の予算（419億ルピア）と人件費は確保されました。2016〜2020年の国の災害準備金は年3.8〜8.8兆ルピアで、年平均20兆ルピアを超える直接被害に対して不足しています。機器・サイレン・作戦統制センター・村の備えに資金を出した世界銀行の IDRIP（1億6,000万ドル）は2025年10月30日に終了し、拡張した観測網の経常費用は国家予算に移りました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">A relay rule and a status that have not kept pace.</strong> Permen Kominfo 2/2016 still covers only earthquakes and tsunami although the SMS channel has carried extreme-weather alerts and, since April 2021, volcano alerts, and cell broadcast, announced in 2024, had no confirmed launch by 2026. The &ldquo;national disaster&rdquo; status provided by Law 24/2007 Art. 51(2) was used neither for the Sumatra floods of November 2025, when the President answered calls for it on 28 November by saying the government would keep monitoring, nor for the Flores earthquake of August 2026; both were handled under 14-day provincial emergencies. The status has become a proxy for the weakness of BNPB command powers that the DPR wants to fix.</>
              ) : (
                <><strong className="text-foreground">実態に追いつかない伝達規則と状況宣言。</strong>2016年通信情報大臣規則第2号は依然として地震・津波のみを対象としますが、SMS 経路は極端気象警報を、2021年4月以降は火山警報も運んでおり、2024年に発表されたセルブロードキャストは2026年までに開始が確認されていません。2007年法律第24号第51条2項の「国家災害」状況は、2025年11月のスマトラ洪水（11月28日に大統領は宣言を求める声に「引き続き監視する」と答えました）でも2026年8月のフローレス地震でも使われず、いずれも14日間の州緊急状況で対処されました。この状況宣言は、国会が是正しようとする BNPB の指揮権限の弱さの代理指標になっています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">The last metre: behaviour after a successful warning.</strong> The Flores earthquake of 15 August 2026 (Mw 7.7, at least 142 dead, more than 188,000 displaced) shows the tsunami chain working: the first bulletin came 2 minutes 16 seconds after origin, run-ups reached 2.68 m, more than 2,000 people fled to higher ground and no tsunami deaths were recorded. Yet a crowd crush at Anakoli beach in Nagekeo injured scouts, and the lesson of Palu in 2018, where equipment vandalism and an unforeseen trigger defeated the system, still applies. The 2021 Joint SDG Fund review found warnings &ldquo;seldom linked to either decision-makers or communities&rdquo;; a technical working group chaired by the Ministry of Social Affairs with BMKG, BNPB and KLHK was set up to link warnings to cash assistance through the DTKS register.</>
              ) : (
                <><strong className="text-foreground">最後の一歩：警報成功後の行動。</strong>2026年8月15日のフローレス地震（Mw 7.7、死者142人以上、避難者18万8,000人超）は津波の連鎖が機能した例です。第1報は発生から2分16秒後、遡上高は2.68 m、2,000人以上が高台に避難し、津波による死者は記録されていません。それでもナゲケオ県アナコリ海岸では群集事故でボーイスカウトの参加者が負傷し、機器の破壊と想定外の発生機構がシステムを無力化した2018年パルの教訓は今も有効です。2021年の Joint SDG Fund のレビューは警報が「意思決定者にも地域社会にもほとんど結びついていない」と評価し、社会省が議長を務め BMKG・BNPB・KLHK が参加する作業部会が、DTKS 登録に基づく現金給付と警報を結ぶために設置されました。</>
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
              <>External partners have mirrored the institutional split. Germany handed the GITEWS tsunami system to BMKG on 29 March 2011, and BMKG serves as one of three Tsunami Service Providers of the Indian Ocean system together with Australia and India; the UNESCO-IOC Indian Ocean Tsunami Information Centre in Jakarta has run a joint programme with BMKG since 2017, renewed in 2022. The World Bank Indonesia Disaster Resilience Initiatives Project (IDRIP, US$160 million, disclosed in May 2019) had BNPB as executing agency and BMKG as implementing agency, covered 25 provinces, 167 regencies and cities and 2,000 villages, financed instruments, sirens, operations-centre strengthening, 8,600 evacuation signs in 860 villages and contingency plans in 105 regencies and cities, and closed on 30 October 2025 with BMKG reporting tsunami warnings in a maximum of 3 minutes, down from 5, and an integrated multi-hazard centre in Kemayoran with a backup in Denpasar. UNDP prepared the InaRISK data services (2016), the Pacific Disaster Center built InAWARE, Australia (DFAT) works with Kemenko PMK, Kemendagri, Bappenas and BNPB on risk-sensitive planning and disaster data, and the UN Joint SDG Fund (UNICEF, UNDP, WFP, OCHA) worked from 2021 on linking warnings to adaptive social protection. BMKG took part in the WMO Extraordinary Congress in October 2025, arguing that warning systems &ldquo;must not stop at the stage of delivering information&rdquo;. The ASEAN AHA Centre is housed in Graha BNPB in Jakarta.</>
            ) : (
              <>外部パートナーの関与も制度の分割を映しています。ドイツは2011年3月29日に GITEWS 津波システムを BMKG に引き渡し、BMKG はオーストラリア・インドと並ぶインド洋津波システムの3つのサービスプロバイダの1つです。ジャカルタの UNESCO-IOC インド洋津波情報センターは2017年から BMKG と共同プログラムを運営し、2022年に更新しました。世界銀行の IDRIP（インドネシア災害レジリエンス・イニシアチブ事業、1億6,000万ドル、2019年5月公開）は BNPB を実施責任機関、BMKG を実施機関とし、25州・167県市・2,000村を対象に機器、サイレン、作戦統制センターの強化、860村での8,600基の避難標識、105県市の緊急時対応計画に資金を供給して2025年10月30日に終了しました。BMKG は終了時に津波警報が最長5分から3分に短縮され、クマヨランに統合多ハザードセンター、デンパサールにバックアップが整ったと報告しています。UNDP は InaRISK のデータサービスを整備（2016年）、米国の Pacific Disaster Center は InAWARE を構築し、オーストラリア（DFAT）は Kemenko PMK・内務省・Bappenas・BNPB とリスク考慮型計画と災害データで協力し、国連 Joint SDG Fund（UNICEF・UNDP・WFP・OCHA）は2021年から警報と適応型社会保護の接続に取り組みました。BMKG は2025年10月の WMO 臨時総会で、警報システムは「情報伝達の段階で止まってはならない」と主張しました。ASEAN の AHA センターはジャカルタの Graha BNPB 内にあります。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>Japan has worked mainly on the relay and on flood control. The JICA grant Project for Strengthening Disaster Management Information System (DPIS), surveyed in 2017 with the then Kominfo as executing agency, receives InaTEWS information from BMKG and relays it one way over a secured line to BNPB, BPBDs, mass media and carriers, modelled on the Japanese L-Alert; it was launched in Bali on 23 September 2024 (grant value 1.49 billion yen, about IDR 157.6 billion) and presented on 1 October 2024 as part of the national early-warning system SNPDK with a three-minute target, connecting Call Centre 112, TVRI and RRI. A team supported by Japanese ODA and led by the Disaster Prevention Research Institute of Kyoto University began a five-year earthquake early warning pilot in 2025 in three provinces of western Java including Jakarta, broadcasting alerts through mosque loudspeakers and radio, with trials planned until 2030 before any nationwide rollout. JICA has long cooperated with the Ministry of Public Works on flood control and river-basin management, currently on urban flood control in several cities, coastal protection in Nusa Dua and reconstruction in Central Sulawesi, and the JMA-run North West Pacific Tsunami Advisory Center counts Indonesia among its end users. The current BMKG head holds a doctorate from the Tokyo University of Agriculture and Technology (2005).</>
            ) : (
              <>日本の関与は主に伝達と洪水対策にあります。JICA 無償資金協力「防災情報システム強化計画（DPIS）」は2017年に当時の Kominfo を実施機関として調査され、BMKG の InaTEWS 情報を受けて専用回線で BNPB・BPBD・マスメディア・通信事業者に一方向で中継する、日本の L アラートを模した仕組みです。2024年9月23日にバリで稼働（供与額14.9億円、約1,576億ルピア）し、10月1日にはコールセンター112・TVRI・RRI を接続する国家早期警報システム SNPDK の一部として3分以内の目標とともに発表されました。京都大学防災研究所が率いる日本の ODA 支援チームは2025年、ジャカルタを含む西ジャワの3州で、モスクのスピーカーとラジオで警報を流す5年間の地震早期警報の試行を開始し、全国展開の前に2030年まで試験を続けます。JICA は公共事業省と長年にわたり洪水対策・流域管理で協力し、現在は複数都市の都市洪水対策、ヌサドゥアの海岸保全、中部スラウェシの復興を進めています。気象庁が運営する北西太平洋津波情報センターもインドネシアをエンドユーザーに含みます。現 BMKG 長官は東京農工大学で博士号（2005年）を取得しています。</>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 8. Conclusion ── */}
        <section>
          <h2 className={H2}>{en ? "8. Conclusion" : "8. まとめ"}</h2>
          <p className={P}>
            {en ? (
              <>The distinctive feature of the Indonesian design is that it regulates the response commander in detail while leaving the warning authority to be inferred hazard by hazard. The general law and its regulation fix who declares status and who orders evacuation, and the sectoral instruments fix who may speak about the weather, the sea and the volcanoes; the single place where the two meet with clocks attached is the tsunami regulation of 2019. That is also the single chain that demonstrably worked in 2026. For the hydrometeorological and geological hazards that account for most deaths in 2021-2026, the chain still ends in a regional decision whose legal trigger, siaga darurat, is discretionary and whose decision-makers have the thinnest capacity.</>
            ) : (
              <>インドネシアの制度設計の特徴は、対応の指揮官を詳細に定めながら、警報権限はハザードごとに読み取らせる点にあります。基本法と政令は誰が状況を宣言し誰が避難を命じるかを定め、分野別法令は誰が気象・海・火山について発言できるかを定めますが、両者が時間制限つきで結び合わされているのは2019年の津波大統領令だけです。そしてそれが2026年に実際に機能した唯一の連鎖でもありました。2021〜2026年の死者の大半を占める水文気象・地質ハザードでは、連鎖の終点は依然として地方の決定であり、その法的な引き金である警戒状況の宣言は裁量的で、決定者の能力は最も薄いのです。</>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>The unresolved question is therefore not whether BNPB should have a single command, which is how the DPR has framed the revision since 2025, but whether the law should name the issuing agency and the time-bound relay duty for each major hazard, as Perpres 93/2019 does for tsunami, and bind the regional decision to it. That would require either an amended Law 24/2007 that replaces &ldquo;the competent institution&rdquo; with a hazard-by-hazard allocation, or a set of presidential regulations for floods, landslides and volcanoes on the tsunami model, together with an updated relay rule covering all hazards and a BPBD standard that regencies cannot opt out of. Until then the quality of warning in Indonesia will continue to depend on which hazard strikes and in which regency.</>
            ) : (
              <>未解決の問いは、国会が2025年以降の改正論で枠づけてきた BNPB の単一指揮の是非ではなく、津波について大統領令第93号が行っているように、主要ハザードごとに発表機関と時間制限つきの伝達義務を法律に明記し、地方の決定をそれに結びつけるかどうかです。そのためには、「権限を有する機関」をハザード別の割り当てに置き換える2007年法律第24号の改正か、津波モデルに倣った洪水・地すべり・火山の大統領令群が必要であり、あわせて全ハザードを対象とする伝達規則の更新と、県市が回避できない BPBD の基準が求められます。それまでは、インドネシアの警報の質は、どのハザードがどの県市を襲うかによって左右され続けるでしょう。</>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── References ── */}
        <section>
          <h2 className={H2}>References</h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Republic of Indonesia (2007). Undang-Undang Nomor 24 Tahun 2007 tentang Penanggulangan Bencana. <em>JDIH Kementerian Keuangan</em>. https://jdih.kemenkeu.go.id/fulltext/2007/24TAHUN2007UU.htm
            </li>
            <li>
              Republic of Indonesia (2008). Peraturan Pemerintah Nomor 21 Tahun 2008 tentang Penyelenggaraan Penanggulangan Bencana. <em>JDIH Kementerian Keuangan</em>. https://jdih.kemenkeu.go.id/fulltext/2008/21TAHUN2008PP.htm
            </li>
            <li>
              Republic of Indonesia (2009). Undang-Undang Nomor 31 Tahun 2009 tentang Meteorologi, Klimatologi, dan Geofisika. <em>JDIH Kementerian Keuangan</em>. https://jdih.kemenkeu.go.id/fulltext/2009/31TAHUN2009UU.htm
            </li>
            <li>
              Kementerian Energi dan Sumber Daya Mineral (2011). Peraturan Menteri ESDM Nomor 15 Tahun 2011 tentang Pedoman Mitigasi Bencana Gunungapi, Gerakan Tanah, Gempa Bumi, dan Tsunami. <em>JDIH ESDM</em>. http://jdih.esdm.go.id/common/dokumen-external/permen%20ESDM%2015%202011.pdf
            </li>
            <li>
              Kementerian Komunikasi dan Informatika (2016). Peraturan Menteri Nomor 2 Tahun 2016 tentang Penyampaian Informasi Kebencanaan Melalui Jaringan Bergerak Seluler. <em>JDIH Komdigi</em>. https://jdih.komdigi.go.id/produk_hukum/view/id/514/t/peraturan+menteri+komunikasi+dan+informatika+nomor+2+tahun+2016+tanggal+27+januari+2016
            </li>
            <li>
              Republic of Indonesia (2019). Peraturan Presiden Nomor 93 Tahun 2019 tentang Penguatan dan Pengembangan Sistem Informasi Gempa Bumi dan Peringatan Dini Tsunami. <em>JDIH BPK</em>. https://peraturan.bpk.go.id/Download/120114/Perpres%20Nomor%2093%20Tahun%202019.pdf
            </li>
            <li>
              Sekretariat Kabinet Republik Indonesia (2019). Perpres No. 1/2019: Kepala BNPB Setingkat Menteri, Dapat Dijabat oleh TNI. <em>Setkab.go.id</em>. https://setkab.go.id/perpres-no-12019-kepala-bnpb-setingkat-menteri-dapat-dijabat-oleh-tni/
            </li>
            <li>
              Republic of Indonesia (2019). Undang-Undang Nomor 17 Tahun 2019 tentang Sumber Daya Air. <em>pasal.id</em>. https://pasal.id/peraturan/uu/uu-no-17-tahun-2019
            </li>
            <li>
              BMKG (2024). Abstrak Peraturan Presiden Nomor 12 Tahun 2024 tentang Badan Meteorologi, Klimatologi, dan Geofisika. <em>JDIH BMKG</em>. http://jdih.bmkg.go.id/storage/common/dokumen/2024absperpres012.pdf
            </li>
            <li>
              BMKG (2024). Surat Edaran SE.1/DM/IV/2024: Pra-Operasionalisasi Penyediaan dan Penyebaran Prakiraan Cuaca Berbasis Digital Forecast dan Impact Based Forecast pada Setiap Provinsi. <em>JDIH BMKG</em>. http://jdih.bmkg.go.id/storage/common/dokumen/2024sedmbmkg001.pdf
            </li>
            <li>
              Republic of Indonesia (2024). Peraturan Presiden Nomor 139 Tahun 2024 tentang Penataan Tugas dan Fungsi Kementerian Negara Kabinet Merah Putih Periode 2024-2029. <em>pasal.id</em>. https://pasal.id/peraturan/perpres/perpres-no-139-tahun-2024
            </li>
            <li>
              BPK Perwakilan Provinsi D.I. Yogyakarta (2025). Mekanisme Penetapan Status Keadaan Darurat Bencana. <em>Badan Pemeriksa Keuangan RI</em>. https://yogyakarta.bpk.go.id/wp-content/uploads/2025/01/1.-Mekanisme-Penetapan-Status-Keadaan-Darurat-Bencana_Net.pdf
            </li>
            <li>
              Center for Excellence in Disaster Management and Humanitarian Assistance (2025). Indonesia Disaster Management Reference Handbook, June 2025. <em>CFE-DM</em>. https://www.cfe-dmha.org/LinkClick.aspx?fileticket=4E8NsiWyX5Q%3d&amp;portalid=0
            </li>
            <li>
              Japan International Cooperation Agency and Kokusai Kogyo Co., Ltd. (2017). Preparatory Survey Report on the Project for Strengthening Disaster Management Information System in the Republic of Indonesia (Additional Survey). <em>JICA Open Report</em>. https://openjicareport.jica.go.jp/pdf/12289880.pdf
            </li>
            <li>
              BMKG (2025). Menutup IDRIP: Peringatan Dini Gempa-Tsunami Kini Maksimum 3 Menit, Akurasi 90%. <em>BMKG, 31 October 2025</em>. https://www.bmkg.go.id/berita/utama/menutup-idrip-peringatan-dini-gempa-tsunami-kini-maksimum-3-menit-akurasi-90
            </li>
            <li>
              BMKG (2025). Teuku Faisal Fathani Resmi Dilantik Jadi Kepala BMKG. <em>BMKG, 3 November 2025</em>. https://www.bmkg.go.id/berita/utama/teuku-faisal-fathani-resmi-dilantik-jadi-kepala-bmkg
            </li>
            <li>
              BMKG (2026). Peringatan Dini Tsunami: Gempa M7.7 Flores, 15 Agustus 2026. <em>BMKG</em>. https://www.bmkg.go.id/gempabumi/berpotensi-tsunami/20260815050954
            </li>
            <li>
              Antara (2025). DPR RI: Revisi UU Penanggulangan Bencana Penting untuk Dipertimbangkan, 20 March 2025. <em>Antara News</em>. https://www.antaranews.com/berita/4725777/dpr-ri-revisi-uu-penanggulangan-bencana-penting-untuk-dipertimbangkan
            </li>
            <li>
              DPR RI (2026). Upayakan Revisi UU Penanggulangan Bencana, Perkuat BNPB sebagai Komando Tunggal Penanganan Bencana, 2 February 2026. <em>DPR e-media</em>. https://emedia.dpr.go.id/news/2026/02/02/upayakan-revisi-uu-penanggulangan-bencana-perkuat-bnpb-sebagai-komando-tunggal-penanganan-bencana
            </li>
            <li>
              The Jakarta Post (2025). BMKG Finds Budget Cut 50% despite Presidential Assurance, 13 February 2025. <em>The Jakarta Post</em>. https://www.thejakartapost.com/indonesia/2025/02/13/bmkg-finds-budget-cut-50-despite-presidential-assurance.html
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
              <strong className="text-foreground">{en ? "Indonesia" : "インドネシア"}</strong>
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
