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
              ? "Early Warning Governance in Timor-Leste — Laws, Actors and Current Challenges"
              : "ティモール・レステの予警報制度 — 法制度・アクターの役割・現在の課題"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "This article reviews the laws, agencies and warning chain of the newest ASEAN member state, drawing on the gazetted texts of the Civil Protection Law (Lei 12/2020) and of the organic decree-laws of the Civil Protection Authority and the Ministry of Transport and Communications, the 2025 CREWS/UNDRR household survey, SOFF and GCF project documents, the national Anticipatory Action Road Map 2025-2029 and the IOWave25 exercise report."
              : "ASEAN で最も新しい加盟国の予警報制度について、市民保護法（Lei 12/2020）、市民保護庁および運輸通信省の組織政令の官報本文、2025年の CREWS／UNDRR 世帯調査、SOFF・GCF の事業文書、国家予防的行動ロードマップ 2025〜2029年、IOWave25 演習報告に基づき、法制度・機関の役割・警報の流れ・課題を整理します。"}
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
                Timor-Leste deposited its instrument of accession to the ASEAN Charter on 25 October 2025 and, on 26 October 2025, signed the Declaration on its admission at the 47th ASEAN Summit in Kuala Lumpur, becoming the eleventh member state. The early-warning system discussed here is therefore the newest in ASEAN. Whether the country has also acceded to the ASEAN Agreement on Disaster Management and Emergency Response (AADMER) could not be confirmed from ASEAN Secretariat or Jornal da República sources as of November 2026: the organic law of the Civil Protection Authority already assigns it liaison with ASEAN, but at the National Civil Protection Workshop of 17 July 2026 alignment with AADMER was still being discussed as future work.
              </>
            ) : (
              <>
                ティモール・レステは2025年10月25日に ASEAN 憲章への加入書を寄託し、翌26日にクアラルンプールで開かれた第47回 ASEAN 首脳会議で加盟宣言に署名して、11番目の加盟国となりました。本記事が扱う予警報制度は、したがって ASEAN で最も新しいものです。一方、域内の災害管理協力の基礎である ASEAN 災害管理・緊急対応協定（AADMER）への加入は、2026年11月時点で ASEAN 事務局や官報（Jornal da República）の一次資料から確認できていません。市民保護庁の組織政令はすでに ASEAN との連絡調整を同庁の任務に含めていますが、2026年7月17日の国家市民保護ワークショップでは「AADMER との整合」が今後の課題として話し合われた段階でした。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Floods account for about half of all recorded disaster events between 1980 and 2020, and flash floods and landslides in Dili and on the south coast recur almost every rainy season. The defining event is Tropical Cyclone Seroja: on 4 April 2021 a day of torrential rain caused flash floods, landslides and liquefaction, a State of Calamity was declared on 8 April 2021, more than 30,000 households were affected according to the World Bank, and damage to agriculture, roads, bridges and housing was put at US$245 million. The death toll is reported variously between 34 and 48. Droughts driven by El Ni&ntilde;o are the second recurrent hazard: rainfall from October 2023 to January 2024 was more than 30 percent below normal and ten of the thirteen municipalities plus Oecusse were affected. The United Nations estimates that about 70 percent of the rural population, some 840,000 people, is highly exposed to floods, landslides, droughts and strong winds. Seismic risk is real but less frequent; a magnitude 6.9 earthquake and tsunami in 1995 killed eleven people. All of this falls on an economy of roughly US$2 billion in which 42 percent of the population lives below the national poverty line.
              </>
            ) : (
              <>
                1980〜2020年に記録された災害事象の約半数は洪水で、首都ディリと南岸では雨季のたびに鉄砲水と土砂崩れが繰り返されます。制度を画した出来事は2021年4月4日のサイクロン・セロジャで、1日の集中豪雨が鉄砲水・土砂崩れ・液状化を引き起こし、4月8日に災厄状態（State of Calamity）が宣言されました。世界銀行によれば3万世帯以上が被災し、農業・道路・橋梁・住宅の被害額は2億4,500万米ドルと算定されています。死者数は資料により34人から48人までばらつきがあります。もう一つの反復するハザードはエルニーニョに伴う干ばつで、2023年10月〜2024年1月の降雨は平年を30%以上下回り、13の市（município）のうち10市とオエクシが影響を受けました。国連は農村人口の約70%（約84万人）が洪水・土砂崩れ・干ばつ・強風に高度に曝露していると見積もっています。地震リスクも現実のもので、1995年のマグニチュード6.9の地震と津波は11人の命を奪いました。これらすべてが、国内総生産約20億米ドル、人口の42%が国の貧困線以下にある経済にのしかかります。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Institutional design matters here for three reasons. First, the legal architecture is very young: the Civil Protection Law dates only from December 2020, the Civil Protection Authority (APC, Autoridade de Prote&ccedil;&atilde;o Civil) was created in March 2022 and re-founded in May 2024, and the standard operating procedures that would formalise the warning chain were still awaiting endorsement in September 2025. Second, the state is small and its agencies are thin: the national meteorological service, DNMG (Dire&ccedil;&atilde;o Nacional de Meteorologia e Geof&iacute;sica; National Directorate of Meteorology and Geophysics), is a third-tier directorate inside the Ministry of Transport and Communications, moved in March 2026 under a new Directorate-General of Communications, rated 1 to 2 out of 5 in the Country Hydromet Diagnostic, dependent on Indonesian and Australian products, and it passes its warnings to the APC operations room by WhatsApp and e-mail. Third, almost every piece of observation and forecasting hardware acquired since 2022 has been financed by the Green Climate Fund, SOFF, CREWS or bilateral donors, so equipment is arriving faster than the rules and staff needed to run it. Below the national level, the 2021 decentralisation law gives municipalities civil-protection functions and the Civil Protection Law makes the sucos (villages) civil-protection agents, while a 2025 household survey found that about 90 percent of people trust their suco chief more than national electronic media. The article reviews the legal framework, the actors, the warning chain and levels, the reforms of 2020&ndash;2026, the current challenges, and international cooperation including Japan.
              </>
            ) : (
              <>
                この国で制度設計が問題になる理由は三つあります。第一に、法制度がきわめて若いことです。市民保護法は2020年12月に成立したばかりで、APC（Autoridade de Proteção Civil、市民保護庁）は2022年3月に創設され2024年5月に再編されました。警報の流れを正式化する標準作業手順（SOP）は2025年9月時点でなお承認待ちでした。第二に、国家が小さく機関が薄いことです。国家気象機関である DNMG（Direção Nacional de Meteorologia e Geofísica、国家気象地球物理局）は運輸通信省の中の一国家局（第三層の組織）にすぎず、2026年3月には新設の通信総局の下へ移されました。国別水文気象診断の評価は5段階の1〜2で、インドネシアとオーストラリアの予報産品に依存し、警報は WhatsApp と電子メールで APC の作戦室へ渡されています。第三に、2022年以降に導入された観測・予報機材のほとんどが緑の気候基金（GCF）・SOFF・CREWS や二国間ドナーの資金によるもので、機材が規則と人員より先に届いているという構図があります。国家レベルの下では、2021年の地方分権法が市に市民保護の権能を与え、市民保護法はスコ（suco、村）を市民保護の実施主体に位置づけていますが、2025年の世帯調査では約90%の人々が国の電子メディアよりスコ長を信頼していることが分かりました。本記事では、法制度、アクター、警報の流れとレベル、2020〜2026年の制度改革、現在の課題、日本を含む国際協力を順に整理します。
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
                The backbone is Lei n.&ordm; 12/2020 (Civil Protection Law), the organic decree-law of the APC adopted under its Art. 39 (Decreto-Lei n.&ordm; 23/2024, which replaced Decreto-Lei n.&ordm; 11/2022), the organic laws of the IX Constitutional Government (DL 46/2023) and of the Ministry of Transport and Communications (DL 75/2023, amended by DL 12/2026), and, for the local levels, the Local Power Law (Lei 23/2021) and the Suco Law (Lei 9/2016). Civil protection is framed within the Integrated National Security System of Lei n.&ordm; 2/2010 (Art. 53). The table lists the instruments and what each says about who warns and who evacuates.
              </>
            ) : (
              <>
                骨格をなすのは、市民保護法（Lei n.º 12/2020）、同法第39条に基づく APC の組織政令（Decreto-Lei n.º 23/2024。Decreto-Lei n.º 11/2022 を置き換え）、第9次立憲政府組織法（DL 46/2023）と運輸通信省組織法（DL 75/2023。DL 12/2026 で改正）、そして地方レベルの地方権力法（Lei 23/2021）とスコ法（Lei 9/2016）です。市民保護は国家安全保障法（Lei n.º 2/2010）第53条の統合国家安全保障システムの枠内に位置づけられています。以下の表に各法令と、誰が警報を出し誰が避難を決めるかに関する規定をまとめます。
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
                  <td className={TDH}>{en ? "Lei n.º 12/2020, de 2 de dezembro — Lei da Proteção Civil (Civil Protection Law)" : "法律第12号／2020年12月2日 市民保護法（Lei da Proteção Civil）"}</td>
                  <td className={TD}>2020</td>
                  <td className={TD}>{en ? "Defines civil protection within the national security system; three situations of alert, contingency and calamity (Ch. II); direction by the Prime Minister and the member of Government for civil protection; National, Regional and Municipal Civil Protection Councils; civil-protection agents including the fire corps, PNTL, F-FDTL and the sucos (Art. 41); SIOPS to be regulated by decree-law (Art. 44)." : "市民保護を国家安全保障システム内に定義。警戒（alerta）・緊急（contingência）・災厄（calamidade）の3つの状況（第2章）。首相と市民保護担当閣僚による指揮、国家・地域・市の市民保護評議会。消防、PNTL、F-FDTL、スコを含む市民保護の実施主体（第41条）。SIOPS は政令で規律（第44条）。"}</td>
                  <td className={TD}>{en ? "Alert of municipal scope declared by the President of the Municipal Authority or the Municipal Administrator after informing the member of Government; national alert by the member of Government for civil protection (Art. 12); contingency by the entity responsible in its territorial scope (Art. 14); calamity by Government Resolution of the Council of Ministers, which the Prime Minister may precede with an urgent despacho (Arts. 16, 24). Declarations are publicised through the media (Art. 11); media and telecom operators have a special duty of collaboration (Art. 13(4)); risk-monitoring bodies must pass detection data to the APC (Art. 43(3)). Evacuation appears only as a planning domain (Art. 4(2)(d)) and as grounds for entering homes under calamity (Art. 18(2)); no explicit evacuation-order power." : "市域の警戒は市当局長（Presidente da Autoridade Municipal）または市行政官（Administrador Municipal）が担当閣僚に通知のうえ宣言し、全国の警戒は市民保護担当閣僚が宣言（第12条）。緊急は各管轄で市民保護を担う主体（第14条）。災厄は閣僚評議会の政府決議で宣言し、首相が先行して緊急決定（despacho de urgência）を出せる（第16・24条）。宣言はメディアを通じて公表（第11条）。メディアと通信事業者に特別な協力義務（第13条4項）。リスク監視機関は検知情報を APC に伝達する義務（第43条3項）。避難は計画領域（第4条2項d）と災厄下の家屋立入り要件（第18条2項）にのみ現れ、避難命令権限の明文はない。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Decreto-Lei n.º 11/2022, de 9 de março — first organic structure of the APC (revoked)" : "政令第11号／2022年3月9日 APC 組織構造（初版、廃止）"}</td>
                  <td className={TD}>2022</td>
                  <td className={TD}>{en ? "Created the APC from the four national directorates of the Ministry of Interior Directorate-General for Civil Protection (fire, disaster risk management, public property, community-conflict prevention); regional (RAEOA) and 13 municipal civil-protection systems headed by operational commanders; deconcentrated services down to suco level (Art. 2)." : "内務省市民保護総局の4国家局（消防、災害リスク管理、公共財産保護、地域紛争予防）から APC を創設。RAEOA と13市の市民保護システムに作戦司令官。スコまで及ぶ出先組織（第2条）。"}</td>
                  <td className={TD}>{en ? "No warning provisions beyond the Civil Protection Law; superseded by DL 23/2024." : "市民保護法を超える警報規定はなし。DL 23/2024 により置き換え。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Decreto-Lei n.º 23/2024, de 10 de maio — Estrutura Orgânica da Autoridade de Proteção Civil" : "政令第23号／2024年5月10日 市民保護庁組織構造（Estrutura Orgânica da Autoridade de Proteção Civil）"}</td>
                  <td className={TD}>2024</td>
                  <td className={TD}>{en ? "APC within the Ministry of Interior with limited administrative but no financial autonomy (Arts. 2, 5); President, Executive Director and National Operations Commander; CNOPC with a permanent national operations room and the single national emergency number; six national directorates; Regional Command for Oe-Cusse and municipal commands; technical relations with CPLP and ASEAN (Art. 8(3)); National Civil Emergency Planning System to be regulated within one year (Art. 50)." : "APC を内務省内に置き、行政的自律は限定的で財政的自律はない（第2・5条）。長官、執行長、国家作戦司令官。常設の国家作戦室と全国統一緊急番号を持つ CNOPC。6つの国家局、オエクシ地域司令部と市司令部。CPLP・ASEAN との技術的関係（第8条3項）。国家民間緊急計画システムは1年以内に規律（第50条）。"}</td>
                  <td className={TD}>{en ? "The national operations room monitors all early-warning systems (regional, national and international, including those under bilateral agreements), disseminates information and organises the national system of risk monitoring, special alert and public warning in articulation with the telecommunications operators, plus an automatic warning network on high fire-risk days (Art. 19(2)); the DNGRD organises the national early-warning and alert system and the database for automatic warnings on high fire or flood risk days (Art. 25(2)(g)-(h)); municipal commanders organise the municipal alert and warning system and assume single command of operations (Art. 35); evacuation-plan drills are planned by the External Relations and Communication Office (Art. 48)." : "国家作戦室は地域・国家・国際（二国間協定に基づくものを含む）のすべての早期警戒システムを監視し、情報を伝達し、通信事業者と連携して国家のリスク監視・通信、特別警戒、住民への警報（aviso à população）のシステムを組織し、森林火災高リスク日の自動警報網を運用（第19条2項）。DNGRD は国家早期警戒・警報システムを組織し、火災・洪水高リスク日の自動警報用データベースを構築（第25条2項g・h）。市司令官は市の警戒・警報システムを組織し、作戦の単一指揮を執る（第35条）。避難計画訓練は対外関係・広報室が計画（第48条）。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Decreto-Lei n.º 46/2023, de 28 de julho — Orgânica do IX Governo Constitucional" : "政令第46号／2023年7月28日 第9次立憲政府組織法（Orgânica do IX Governo Constitucional）"}</td>
                  <td className={TD}>2023</td>
                  <td className={TD}>{en ? "Ministry of Interior responsible for civil protection with direction, superintendence and tutelage over the APC (Art. 32); the Minister is substituted by the Secretary of State for Civil Protection; Ministry of Transport and Communications maintains the national meteorological and seismological information and surveillance systems (Art. 25(g)); Ministry of Social Solidarity and Inclusion covers humanitarian aid and DRM with social incidence (Art. 33); Public Works covers flood-control works." : "内務省が市民保護を所管し APC を指揮・監督・後見（第32条）。大臣の代行は市民保護担当国務長官。運輸通信省は国家の気象・地震情報監視システムを維持（第25条g）。社会連帯・包摂省は人道援助と社会的側面の災害リスク管理（第33条）。公共事業省は治水工事。"}</td>
                  <td className={TD}>{en ? "Distributes ministerial mandates only; no provisions on who issues warnings." : "省の任務配分のみ。警報発表者に関する規定はない。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Decreto-Lei n.º 75/2023, de 15 de setembro — Orgânica do Ministério dos Transportes e Comunicações" : "政令第75号／2023年9月15日 運輸通信省組織法（Orgânica do Ministério dos Transportes e Comunicações）"}</td>
                  <td className={TD}>2023</td>
                  <td className={TD}>{en ? "Art. 15: DNMG is the service responsible for the national systems of meteorological, climatological and seismological information and surveillance; it collaborates with the Ministry of Interior in preparing the national civil protection plan, operates the measurement networks and manages national atmospheric, geophysical and marine data." : "第15条：DNMG は国家の気象・気候・地震情報監視システムを所管し、内務省の国家市民保護計画の策定に協力し、観測網を運用し、大気・地球物理・海洋データを管理。"}</td>
                  <td className={TD}>{en ? "DNMG must ensure surveillance and regularly disseminate information and forecasts of the state of the weather and the sea; the word aviso (warning) does not appear in the article." : "DNMG は監視を確保し、天気と海の状態に関する情報と予報を定期的に公表する義務。条文に「警報（aviso）」の語はない。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Decreto-Lei n.º 12/2026, de 11 de março — first amendment to DL 75/2023" : "政令第12号／2026年3月11日 DL 75/2023 第1次改正"}</td>
                  <td className={TD}>2026</td>
                  <td className={TD}>{en ? "Abolishes the Directorate-General for Transport and Communications and creates two directorates-general; DNMG is placed under the new Direção-Geral das Comunicações together with postal services and communications infrastructure, with competences unchanged." : "運輸通信総局を廃止し2総局を新設。DNMG は郵便・通信インフラとともに新設の通信総局（Direção-Geral das Comunicações）の下に置かれ、権限は不変。"}</td>
                  <td className={TD}>{en ? "None added." : "追加なし。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Lei n.º 23/2021, de 10 de novembro — Lei do Poder Local e da Descentralização Administrativa (Local Power Law)" : "法律第23号／2021年11月10日 地方権力・行政分権法（Lei do Poder Local e da Descentralização Administrativa）"}</td>
                  <td className={TD}>2021</td>
                  <td className={TD}>{en ? "Municipalities are attributed civil protection and the management of serious accidents and catastrophes; Art. 40: municipal civil-protection centres and fire equipment, identification of high-risk areas, public information on risks, stockpiles, shelters and humanitarian support." : "市に市民保護および重大事故・大災害の管理を帰属。第40条：市民保護センターと消防装備、高リスク地域の特定、リスク情報の提供、備蓄、避難所と人道支援。"}</td>
                  <td className={TD}>{en ? "Municipalities develop and execute, with the central administration, the municipal emergency and civil protection plan and evacuation plans for public buildings and collective facilities; planning powers, not operational evacuation orders." : "市は中央行政と協力して市の緊急・市民保護計画と公共建築物・集合施設の避難計画を策定・実施。計画権限であり、避難命令権ではない。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Lei n.º 9/2016, de 8 de julho — Lei dos Sucos (Suco Law)" : "法律第9号／2016年7月8日 スコ法（Lei dos Sucos）"}</td>
                  <td className={TD}>2016</td>
                  <td className={TD}>{en ? "Sucos are public-law legal persons of associative character; duties include collaborating with the public administration, disseminating laws and decisions of State organs and informing the municipal administration about vulnerable individuals; the suco chief (seven-year term) may request PNTL intervention and must report environmental problems such as soil erosion." : "スコは結社的性格の公法人。行政との協力、国家機関の法令・決定の周知、脆弱な住民に関する市行政への通報が義務。スコ長（任期7年）は PNTL の介入を要請でき、土壌浸食などの環境問題を当局に通報する義務。"}</td>
                  <td className={TD}>{en ? "The text contains no reference to disaster, calamity, emergency or civil protection; the suco role in warning rests solely on Art. 41 of Lei 12/2020." : "「災害」「災厄」「緊急」「市民保護」への言及はなく、スコの警報伝達の役割は Lei 12/2020 第41条のみに依拠。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Resolução do Governo n.º 8/2022, de 1 de março — Política Nacional de Alterações Climáticas (National Climate Change Policy)" : "政府決議第8号／2022年3月1日 国家気候変動政策（Política Nacional de Alterações Climáticas）"}</td>
                  <td className={TD}>2022</td>
                  <td className={TD}>{en ? "Approved by the Council of Ministers on 22 December 2021; assigns DRM across the country to the Ministry of Interior and the Secretary of State for Civil Protection, national meteorological and geophysical monitoring to the Ministry of Transport and Communications, agro-meteorological stations and their early warning system to the Ministry of Agriculture, and flood prevention and urban planning to Public Works." : "2021年12月22日に閣僚評議会で承認。全国の災害リスク管理を内務省と市民保護担当国務長官に、気象・地球物理の国家監視を運輸通信省に、農業気象観測所とその早期警戒システムを農業省に、洪水予防と都市計画を公共事業省に割り当て。"}</td>
                  <td className={TD}>{en ? "Policy document: lists improved early warning and forecasting systems for severe weather as an action of the Ministry of Interior; not binding on who issues warnings." : "政策文書。激しい気象に対する早期警戒・予報システムの改善を内務省の行動として列挙。警報発表者を拘束するものではない。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                The Civil Protection Law had a contested birth. Parliament approved it on 21 July 2020 (57 votes in favour, 4 abstentions); President Francisco Guterres Lu-Olo vetoed it in September 2020, arguing that the alert, contingency and calamity declarations were insufficiently delimited, that public calamity had no legal definition and that the Constitution knows only the states of siege and emergency; Parliament confirmed the text unchanged with 59 votes and one abstention in November 2020, and it was promulgated on 2 December 2020. The three-step ladder of declarations therefore has a qualified parliamentary majority behind it, and it settles clearly who declares what and at which level. What it leaves open is equally clear. No article read confers an explicit power to order evacuation: evacuation is a planning domain, a ground for entering homes under calamity, and in practice an operational decision of the APC operations command, politically covered by the declarations. The duty of monitoring agencies to feed the APC (Art. 43(3)) is the only statutory hook linking the DNMG to the warning authority, and DL 75/2023 gives the DNMG a mandate to disseminate information and forecasts rather than to issue warnings, so the law never designates a single authoritative voice for hazard warnings.
              </>
            ) : (
              <>
                市民保護法の成立過程は争いを伴いました。国民議会は2020年7月21日に法案を可決（賛成57、棄権4）しましたが、フランシスコ・グテレス・ルオロ大統領は同年9月に、警戒・緊急・災厄の宣言の範囲が不明確で「公的災厄」に法的定義がなく、憲法は戒厳と非常事態しか知らないとして拒否権を行使しました。議会は同年11月に原案を賛成59、棄権1で再可決し、同法は2020年12月2日に公布されました。したがって宣言の3段階の階梯は議会の特別多数の裏付けを持ち、誰がどのレベルで何を宣言するかは明確に定まっています。定まっていないことも同様に明確です。読み得た条文のいずれにも避難を命じる権限の明文はなく、避難は計画領域、災厄下での家屋立入りの要件、そして実務上は宣言により政治的に裏打ちされた APC 作戦司令部の作戦判断として現れるにとどまります。監視機関が APC に情報を伝達する義務（第43条3項）が DNMG と警報当局を結ぶ唯一の法的な接点であり、DL 75/2023 が DNMG に与えるのは「警報の発表」ではなく「情報と予報の公表」の任務であるため、法律はハザード警報について単一の権威ある発信者を指定していません。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Several enabling instruments remain outstanding. The decree-law on the Integrated Protection and Relief Operations System (SIOPS) required by Art. 44 and the regulation of the National Civil Emergency Planning System due by May 2025 under Art. 50 of DL 23/2024 could not be located in the gazette. The Standard Operating Procedures for the early warning system, drafted in 2024 with the EWS Technical Working Group, and the Inclusive Guidelines and Checklist were listed by the APC as awaiting endorsement in September 2025; CREWS reports that the SOPs were being applied operationally while waiting for the decree-law. A National Meteorological Strategy and a National Meteorological Act were drafted in 2024 under the GCF-UNEP project and shared with the DNMG, but no enactment was found. The National Disaster Risk Management Policy is recorded by FAOLEX as approved in March 2008 for 2007&ndash;2012, whereas the APC cites a version of 2012 revised in 2020; no later text was found.
              </>
            ) : (
              <>
                複数の実施法令が未整備のままです。第44条が求める統合保護救援作戦システム（SIOPS）の政令と、DL 23/2024 第50条が2025年5月までに定めるとした国家民間緊急計画システムの規則は、官報で確認できませんでした。2024年に早期警戒システム技術作業部会とともに起草された EWS 標準作業手順（SOP）と「包摂的ガイドラインとチェックリスト」は、2025年9月時点で APC が「承認待ち」として挙げており、CREWS は政令を待つ間 SOP を運用上先行適用していると報告しています。GCF-UNEP 事業の下で2024年に国家気象戦略と国家気象法の草案が作成され DNMG に共有されましたが、制定は確認できません。国家災害リスク管理政策は FAOLEX では2008年3月承認（対象2007〜2012年）と記録される一方、APC は「2012年策定、2020年改訂」版を挙げており、後者の本文は見つかっていません。
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
                The system is compact and centred on the Ministry of Interior. The Secretary of State for Civil Protection (SECP) steers the APC politically; the APC operations command (CNOPC) is the operational hub and its municipal commanders double as fire chiefs; the DNMG, two ministries away, supplies the hazard information; the Geosciences Institute (IGTL) has hosted the Indonesian-built earthquake and tsunami system since October 2025; the sucos and the Red Cross carry the warning to households; and a dense layer of donors finances almost all of the hardware.
              </>
            ) : (
              <>
                制度は小規模で、内務省を中心に組み立てられています。市民保護担当国務長官（SECP）が APC を政治的に統括し、APC の作戦司令部（CNOPC）が運用の中枢で、その市司令官は消防署長を兼ねます。二つ離れた省にある DNMG がハザード情報を供給し、地球科学研究所（IGTL）は2025年10月からインドネシアが構築した地震・津波システムを運用しています。スコと赤十字が警報を世帯へ届け、厚いドナー層が機材のほぼすべてを賄っています。
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
                  <td className={TDH}>{en ? "DNMG (Direção Nacional de Meteorologia e Geofísica; National Directorate of Meteorology and Geophysics)" : "DNMG（Direção Nacional de Meteorologia e Geofísica、国家気象地球物理局）"}</td>
                  <td className={TD}>{en ? "Ministry of Transport and Communications (MTC); since March 2026 under the Direção-Geral das Comunicações" : "運輸通信省（MTC）。2026年3月から通信総局（Direção-Geral das Comunicações）の下"}</td>
                  <td className={TD}>{en ? "DL 75/2023 Art. 15; DL 12/2026" : "DL 75/2023 第15条、DL 12/2026"}</td>
                  <td className={TD}>{en ? "Meteorological, climatological and seismological surveillance; daily, 3- and 7-day forecasts, 10-day municipal forecasts with a four-colour legend, monthly seasonal outlooks and ENSO updates; colour-coded municipal rainfall bulletins; passes warnings to the CNOPC by WhatsApp, e-mail and Facebook; portal with a CAP Alert link; co-monitors the Combined Drought Index." : "気象・気候・地震の監視。毎日の予報、3日・7日予報、4色凡例付き10日間市別予報、月例の季節見通しと ENSO 更新。色分けした市別降雨予報。WhatsApp・電子メール・Facebook で CNOPC に警報を伝達。CAP Alert リンクを持つポータル。複合干ばつ指数の共同監視。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Hydrological monitoring (no national hydrological service identified)" : "水文監視（国家水文機関は確認されず）"}</td>
                  <td className={TD}>{en ? "Water-level sensors donated to the DNMG (16 stations in Dili, March 2024); flood-control works by the Ministry of Public Works" : "DNMG に寄贈された水位センサー（ディリ16局、2024年3月）。治水工事は公共事業省"}</td>
                  <td className={TD}>{en ? "DL 46/2023 (Public Works: protection of rivers and coasts for flood control)" : "DL 46/2023（公共事業省：治水のための河川・海岸保護工事）"}</td>
                  <td className={TD}>{en ? "Flood warnings are rainfall-based; responsibility for river gauging is unconfirmed." : "洪水警報は降雨ベース。河川水位観測の責任主体は未確認。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "APC (Autoridade de Proteção Civil; Civil Protection Authority)" : "APC（Autoridade de Proteção Civil、市民保護庁）"}</td>
                  <td className={TD}>{en ? "Ministry of Interior, under the Secretary of State for Civil Protection" : "内務省（市民保護担当国務長官の下）"}</td>
                  <td className={TD}>{en ? "Lei 12/2020 Art. 39; DL 23/2024" : "Lei 12/2020 第39条、DL 23/2024"}</td>
                  <td className={TD}>{en ? "Plans, coordinates and executes civil-protection policy; national steward of disaster loss data; hosts the TERS and MHVRA platforms; liaison with ASEAN and CPLP; chairs the Anticipatory Action Technical Working Group." : "市民保護政策の計画・調整・執行。災害損失データの国家管理者。TERS・MHVRA プラットフォームの運用。ASEAN・CPLP との連絡調整。予防的行動技術作業部会の議長。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "CNOPC (Comando Nacional de Operações de Proteção Civil) and its national operations room" : "CNOPC（Comando Nacional de Operações de Proteção Civil、国家市民保護作戦司令部）と国家作戦室"}</td>
                  <td className={TD}>{en ? "APC" : "APC"}</td>
                  <td className={TD}>{en ? "DL 23/2024 Arts. 17-19" : "DL 23/2024 第17〜19条"}</td>
                  <td className={TD}>{en ? "Monitors all early-warning systems, analyses and disseminates to municipal commands and the public, organises public warning with the telecom operators, runs the single emergency number; decides the official call for evacuation in the national tsunami SOP." : "すべての早期警戒システムを監視し、分析して市司令部と住民へ伝達。通信事業者と連携した住民警報の組織、統一緊急番号の運用。国家津波 SOP では公式の避難呼びかけを決定。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "DNGRD (Direção Nacional de Gestão de Riscos de Desastres; National Directorate for Disaster Risk Management)" : "DNGRD（Direção Nacional de Gestão de Riscos de Desastres、国家災害リスク管理局）"}</td>
                  <td className={TD}>{en ? "APC" : "APC"}</td>
                  <td className={TD}>{en ? "DL 23/2024 Art. 25" : "DL 23/2024 第25条"}</td>
                  <td className={TD}>{en ? "Organises the national early-warning and alert system; risk assessment for earthquakes, tsunamis, slope movements, storms, floods and droughts; database for automatic fire and flood warnings; coordinates CPLP, ASEAN and UNDRR decisions." : "国家早期警戒・警報システムの組織。地震・津波・斜面変動・暴風・洪水・干ばつのリスク評価。火災・洪水自動警報用データベース。CPLP・ASEAN・UNDRR の決定の調整。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "IGTL (Instituto de Geociências de Timor-Leste; Timor-Leste Geosciences Institute)" : "IGTL（Instituto de Geociências de Timor-Leste、ティモール・レステ地球科学研究所）"}</td>
                  <td className={TD}>{en ? "Parent ministry and founding act not identified" : "所管省と設置法令は未確認"}</td>
                  <td className={TD}>{en ? "2024 MoU and Implementation Agreement with BMKG" : "BMKG との2024年覚書・実施協定"}</td>
                  <td className={TD}>{en ? "Hosts the InaTEWS-based earthquake information and tsunami early-warning system inaugurated on 9 October 2025; legal designation as National Tsunami Warning Centre not confirmed." : "2025年10月9日に開設された InaTEWS 方式の地震情報・津波早期警戒システムを運用。国家津波警報センターとしての法的指定は未確認。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Conselho Nacional de Proteção Civil (National Civil Protection Council)" : "国家市民保護評議会（Conselho Nacional de Proteção Civil）"}</td>
                  <td className={TD}>{en ? "Chaired by the member of Government for civil protection; APC provides the secretariat" : "市民保護担当閣僚が議長。事務局は APC"}</td>
                  <td className={TD}>{en ? "Lei 12/2020 Arts. 29-32" : "Lei 12/2020 第29〜32条"}</td>
                  <td className={TD}>{en ? "Director-level representatives of thirteen ministries plus F-FDTL, PNTL and other agencies; approves regional and municipal emergency plans; monitors the presuppositions of alert, contingency and calamity declarations." : "13省の局長級代表と F-FDTL、PNTL ほかの機関。地域・市の緊急計画を承認。警戒・緊急・災厄宣言の前提を監視。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Municipal Authorities and Administrators; Municipal Civil Protection Councils" : "市当局長・市行政官、市市民保護評議会"}</td>
                  <td className={TD}>{en ? "Ministry of State Administration (local power)" : "国家行政省（地方権力）"}</td>
                  <td className={TD}>{en ? "Lei 12/2020 Arts. 12, 28, 36-38; Lei 23/2021 Art. 40" : "Lei 12/2020 第12・28・36〜38条、Lei 23/2021 第40条"}</td>
                  <td className={TD}>{en ? "Declare alert of municipal scope; trigger prevention, relief and recovery actions; municipal emergency and evacuation plans; public information and shelters." : "市域の警戒を宣言。予防・救援・復旧行動の発動。市の緊急計画と避難計画。住民への情報提供と避難所。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Municipal and Regional Civil Protection Commanders" : "市・地域市民保護司令官"}</td>
                  <td className={TD}>{en ? "APC municipal commands; Regional Command of Oe-Cusse Ambeno" : "APC 市司令部、オエクシ・アンベノ地域司令部"}</td>
                  <td className={TD}>{en ? "DL 23/2024 Arts. 31-35" : "DL 23/2024 第31〜35条"}</td>
                  <td className={TD}>{en ? "Organise the municipal or regional alert and warning system; command the emergency plan; single command of operations when a disaster occurs; the municipal commander is by inherence the fire-corps commander." : "市・地域の警戒・警報システムの組織。緊急計画の指揮。災害発生時の作戦の単一指揮。市司令官は消防隊長を兼ねる。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Sucos (suco chiefs; Suco Disaster Management Committees)" : "スコ（スコ長、スコ災害管理委員会）"}</td>
                  <td className={TD}>{en ? "Ministry of State Administration" : "国家行政省"}</td>
                  <td className={TD}>{en ? "Lei 12/2020 Art. 41; Lei 9/2016" : "Lei 12/2020 第41条、Lei 9/2016"}</td>
                  <td className={TD}>{en ? "Civil-protection agents and the last link of the chain; relay messages by loud-hailer and word of mouth; about 90 percent of surveyed households trust them more than national digital sources." : "市民保護の実施主体で、警報連鎖の最終リンク。拡声器と口頭で伝達。調査世帯の約90%が国のデジタル情報源より信頼。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "PNTL (Polícia Nacional de Timor-Leste) and F-FDTL (Falintil-Forças de Defesa de Timor-Leste)" : "PNTL（Polícia Nacional de Timor-Leste、国家警察）と F-FDTL（Falintil-Forças de Defesa de Timor-Leste、国防軍）"}</td>
                  <td className={TD}>{en ? "Ministry of Interior; Ministry of Defence" : "内務省、国防省"}</td>
                  <td className={TD}>{en ? "Lei 12/2020 Arts. 41, 50-51" : "Lei 12/2020 第41・50〜51条"}</td>
                  <td className={TD}>{en ? "Collaborate in civil protection within their missions; PNTL took part in the IOWave25 table-top exercise." : "各自の任務の範囲で市民保護に協力。PNTL は IOWave25 の机上演習に参加。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Telecommunications operators (Telkomcel, Telemor, Timor Telecom) and media (RTTL)" : "通信事業者（Telkomcel、Telemor、Timor Telecom）とメディア（RTTL）"}</td>
                  <td className={TD}>{en ? "Private and public operators" : "民間・公共事業者"}</td>
                  <td className={TD}>{en ? "Lei 12/2020 Art. 13(4); DL 23/2024 Art. 19(2)(c)" : "Lei 12/2020 第13条4項、DL 23/2024 第19条2項c"}</td>
                  <td className={TD}>{en ? "Special duty of collaboration on alert declaration; partners for the statutory public-warning network; no formal cell-broadcast or CAP agreement was found." : "警戒宣言時の特別な協力義務。法定の住民警報網の相手方。セルブロードキャストや CAP の正式協定は見つからず。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "CVTL (Cruz Vermelha de Timor-Leste; Timor-Leste Red Cross)" : "CVTL（Cruz Vermelha de Timor-Leste、ティモール・レステ赤十字社）"}</td>
                  <td className={TD}>{en ? "Auxiliary to the Government" : "政府の補助機関"}</td>
                  <td className={TD}>{en ? "DL 6/2005; Lei 12/2020 Art. 41(2)" : "DL 6/2005、Lei 12/2020 第41条2項"}</td>
                  <td className={TD}>{en ? "Community-based EWS in six sucos of three municipalities; simplified Early Action Protocol for floods (approved 19 February 2025) triggered by DNMG orange bulletins; five-year MoU with MTC/DNMG (10 November 2024)." : "3市6スコのコミュニティ早期警戒システム。DNMG のオレンジ予報を発動条件とする洪水の簡易早期行動プロトコル（2025年2月19日承認）。MTC／DNMG との5年間の覚書（2024年11月10日）。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Line ministries: Social Solidarity and Inclusion (MSSI), Public Works (MPW), Agriculture, Livestock, Fisheries and Forestry (MALFF), Health (SNAEM)" : "各省：社会連帯・包摂省（MSSI）、公共事業省（MPW）、農業・畜産・漁業・林業省（MALFF）、保健省（SNAEM）"}</td>
                  <td className={TD}>{en ? "Government of Timor-Leste" : "ティモール・レステ政府"}</td>
                  <td className={TD}>{en ? "DL 46/2023 Art. 33 and sector articles; Res. Gov. 8/2022; Lei 12/2020 Art. 41" : "DL 46/2023 第33条ほか、政府決議 8/2022、Lei 12/2020 第41条"}</td>
                  <td className={TD}>{en ? "MSSI: humanitarian aid and social DRM; MPW: flood control and heavy equipment mobilised on DNMG and BoM flood warnings; MALFF/ALGIS: Combined Drought Index with DNMG and FAO, agro-meteorological bulletins; SNAEM: medical emergency; Climate and Health Working Group co-led by the DNMG director (2024)." : "MSSI：人道援助と社会的側面の災害リスク管理。MPW：治水と DNMG・BoM の洪水警報を受けた重機出動。MALFF／ALGIS：DNMG・FAO との複合干ばつ指数、農業気象速報。SNAEM：救急医療。DNMG 局長が共同議長の気候・保健作業部会（2024年）。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                The <strong className="text-foreground">DNMG</strong> (Dire&ccedil;&atilde;o Nacional de Meteorologia e Geof&iacute;sica; National Directorate of Meteorology and Geophysics) is the national meteorological service, organised in three departments for meteorology, geophysics and climate monitoring. According to the 2025 Anticipatory Action Road Map, the meteorology department operated three automatic and two manual stations and produced rainfall forecasts with three- and seven-day lead times; the portal network page now lists 26 stations, and automatic weather stations were installed in six municipalities by May 2026 under the GCF programme. The SOFF diagnostic rates overall capacity between 1 and 2 out of 5, notes a shortage of technical staff with four GCF-funded technicians on short-term contracts, and records that Timor-Leste shares no data internationally and lacks the connectivity for WIS 2.0. Maritime forecasts, earthquake information and impact-based forecasts come from BMKG (Badan Meteorologi, Klimatologi, dan Geofisika; Agency for Meteorology, Climatology and Geophysics), tropical-cyclone advisories and aviation services from the Australian Bureau of Meteorology (BoM), three-day forecasts from RIMES and satellite data from the Japan Meteorological Agency. In the four-pillar scheme the DNMG covers monitoring and forecasting, but it also disseminates directly to the public through its portal, Facebook, radio and television.
              </>
            ) : (
              <>
                <strong className="text-foreground">DNMG</strong>（Direção Nacional de Meteorologia e Geofísica、国家気象地球物理局）は国家気象機関で、気象・地球物理・気候監視の3部門から成ります。2025年の予防的行動ロードマップによれば気象部門は自動観測所3か所と有人観測所2か所を運用し、3日先と7日先の降雨予報を作成していました。ポータルの観測網ページには現在26観測点が載り、GCF 事業により2026年5月までに6市で自動気象観測所が設置されました。SOFF の診断は総合能力を5段階の1〜2と評価し、技術職員の不足（GCF 資金による技術者4人は短期契約）、国際的なデータ共有の不在、WIS 2.0 に必要な通信環境の欠如を記しています。海上予報・地震情報・影響予測型予報は BMKG（Badan Meteorologi, Klimatologi, dan Geofisika、気象気候地球物理庁）から、熱帯サイクロン勧告と航空気象はオーストラリア気象局（BoM）から、3日予報は RIMES から、衛星データは気象庁（JMA）から得ています。4本柱でいえば DNMG は監視・予報を担いますが、ポータル、Facebook、ラジオ、テレビで住民に直接発信もしています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The <strong className="text-foreground">APC</strong> (Autoridade de Prote&ccedil;&atilde;o Civil; Civil Protection Authority), created in 2022 out of the Directorate-General for Civil Protection of the Ministry of Interior and re-founded by DL 23/2024, is the warning authority and the response coordinator. Its <strong className="text-foreground">CNOPC</strong> (Comando Nacional de Opera&ccedil;&otilde;es de Prote&ccedil;&atilde;o Civil; National Civil Protection Operations Command) receives DNMG information by WhatsApp, e-mail and Facebook and disseminates it to the municipal commands and the public; by law its operations room monitors every early-warning system and organises public warning with the telecom operators. The <strong className="text-foreground">DNGRD</strong> (Dire&ccedil;&atilde;o Nacional de Gest&atilde;o de Riscos de Desastres; National Directorate for Disaster Risk Management), successor of the former National Disaster Management Directorate, holds the risk-knowledge pillar: multi-hazard risk assessment, the loss-and-damage accounting system built with CREWS in 2024&ndash;2025, the MHVRA and TERS platforms built with UNDP, and the statutory task of organising the national early-warning system. The APC has limited administrative autonomy and no financial autonomy, and all its leadership mandates lapsed when DL 23/2024 entered into force in May 2024.
              </>
            ) : (
              <>
                <strong className="text-foreground">APC</strong>（Autoridade de Proteção Civil、市民保護庁）は2022年に内務省市民保護総局から創設され、DL 23/2024 で再編された警報当局であり、対応の調整機関です。その<strong className="text-foreground">CNOPC</strong>（Comando Nacional de Operações de Proteção Civil、国家市民保護作戦司令部）は DNMG の情報を WhatsApp・電子メール・Facebook で受け取り、市司令部と住民へ伝達します。法律上、その作戦室はすべての早期警戒システムを監視し、通信事業者と連携して住民への警報を組織する責務を負います。<strong className="text-foreground">DNGRD</strong>（Direção Nacional de Gestão de Riscos de Desastres、国家災害リスク管理局）は旧国家災害管理局の後身で、リスク知識の柱を担います。多ハザードのリスク評価、2024〜2025年に CREWS と構築した損失・被害会計システム、UNDP と構築した MHVRA・TERS プラットフォーム、そして国家早期警戒システムを組織する法定任務です。APC の行政的自律は限定的で財政的自律はなく、DL 23/2024 の施行（2024年5月）に伴い幹部の任期はすべて終了しました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The <strong className="text-foreground">IGTL</strong> (Instituto de Geoci&ecirc;ncias de Timor-Leste; Timor-Leste Geosciences Institute) entered the warning chain on 9 October 2025, when BMKG inaugurated an earthquake information and tsunami early-warning system built on InaTEWS technology at the institute in Dili, under a 2024 MoU and Implementation Agreement. The national tsunami SOP routes messages from the Tsunami Service Providers of Australia, India and Indonesia to a National Tsunami Warning Centre and then to the CNOPC, which decides the official call for evacuation. The sources do not name the agency legally designated as that centre: the hardware sits at IGTL, DL 75/2023 assigns seismological surveillance to the DNMG, and the DNMG seismic page draws on USGS data. With the APC operations room also mandated to monitor international systems, three bodies now hold partly overlapping geophysical mandates.
              </>
            ) : (
              <>
                <strong className="text-foreground">IGTL</strong>（Instituto de Geociências de Timor-Leste、ティモール・レステ地球科学研究所）は2025年10月9日、BMKG が2024年の覚書と実施協定に基づき InaTEWS 技術による地震情報・津波早期警戒システムをディリの同研究所に開設したことで、警報の流れに加わりました。国家津波 SOP は、オーストラリア・インド・インドネシアの津波サービスプロバイダ（TSP）からのメッセージを国家津波警報センター（NTWC）経由で CNOPC に送り、CNOPC が公式の避難呼びかけを決定すると定めます。しかし、どの機関がそのセンターとして法的に指定されているかは資料に現れません。機材は IGTL にあり、DL 75/2023 は地震監視を DNMG に割り当て、DNMG の地震ページは USGS のデータに依拠しています。APC の作戦室も国際的なシステムの監視を任務とするため、地球物理の権限が部分的に重なる機関が3つ併存することになりました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Below the national level, the <strong className="text-foreground">Municipal Authorities and Administrators</strong> declare alerts of municipal scope and chair the Municipal Civil Protection Councils, while the <strong className="text-foreground">Municipal Civil Protection Commanders</strong>, who are by inherence the municipal fire chiefs, organise the municipal alert and warning system and take single command when a disaster strikes. The Local Power Law of 2021 adds planning duties: emergency and civil-protection plans, evacuation plans for public buildings, identification of high-risk areas, stockpiles and shelters. The <strong className="text-foreground">sucos</strong> are civil-protection agents under Art. 41 of the Civil Protection Law, although the Suco Law itself does not mention disasters; Suco Disaster Management Committees appear in the tsunami SOP and in donor projects (Mercy Corps supports committees in 15 sucos of Dili). The RCRC Climate Centre has called for clarifying the roles of the disaster management committees, the municipal civil-protection service and the municipal APC commanders, which overlap at the local level.
              </>
            ) : (
              <>
                国家レベルの下では、<strong className="text-foreground">市当局長・市行政官</strong>が市域の警戒を宣言し、市市民保護評議会を主宰します。一方、市の消防署長を兼ねる<strong className="text-foreground">市市民保護司令官</strong>が市の警戒・警報システムを組織し、災害発生時には単一指揮を執ります。2021年の地方権力法は計画上の義務を加えました。緊急・市民保護計画、公共建築物の避難計画、高リスク地域の特定、備蓄、避難所です。<strong className="text-foreground">スコ</strong>は市民保護法第41条により市民保護の実施主体ですが、スコ法自体は災害に触れていません。スコ災害管理委員会（SDMC）は津波 SOP やドナー事業に現れ、Mercy Corps はディリの15スコの委員会を支援しています。赤十字・赤新月社気候センターは、災害管理委員会、市の市民保護サービス、市 APC 司令官の役割が地方レベルで重なっているとして、その明確化を求めています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">CVTL</strong> (Cruz Vermelha de Timor-Leste; Timor-Leste Red Cross), auxiliary to the Government since 2005, is the main non-state actor in dissemination and anticipatory action: it operates community early-warning systems in six sucos of three municipalities, holds a simplified Early Action Protocol for floods approved by IFRC in February 2025 and signed a five-year MoU with the MTC and DNMG in November 2024. Line ministries hold sectoral pieces: <strong className="text-foreground">Social Solidarity and Inclusion</strong> for humanitarian assistance, <strong className="text-foreground">Public Works</strong> for flood-control works and the heavy equipment mobilised on DNMG and BoM flood warnings, <strong className="text-foreground">MALFF</strong> for the Combined Drought Index co-monitored with DNMG and FAO, and <strong className="text-foreground">Health</strong> for the medical emergency service and a Climate and Health Working Group co-led by the DNMG director. The response-capability pillar thus sits with the APC, the municipalities and CVTL, while the financing of almost every pillar depends on UNEP-GCF, UNDP-GCF, SOFF (WMO, FMI, BMKG, RIMES), CREWS/UNDRR, FAO, IFRC, Australia, Japan and the EU/KOICA.
              </>
            ) : (
              <>
                <strong className="text-foreground">CVTL</strong>（Cruz Vermelha de Timor-Leste、ティモール・レステ赤十字社）は2005年から政府の補助機関と位置づけられ、伝達と予防的行動における主要な非国家アクターです。3市6スコでコミュニティ早期警戒システムを運用し、2025年2月に IFRC が承認した洪水の簡易早期行動プロトコル（sEAP）を持ち、2024年11月に MTC・DNMG と5年間の覚書を結びました。各省は分野ごとの役割を持ちます。<strong className="text-foreground">社会連帯・包摂省</strong>は人道援助、<strong className="text-foreground">公共事業省</strong>は治水工事と DNMG・BoM の洪水警報を受けた重機の出動、<strong className="text-foreground">MALFF</strong>（農業・畜産・漁業・林業省）は DNMG・FAO と共同監視する複合干ばつ指数、<strong className="text-foreground">保健省</strong>は救急医療（SNAEM）と DNMG 局長が共同議長を務める気候・保健作業部会です。したがって対応能力の柱は APC・市・CVTL が担い、ほぼすべての柱の資金は UNEP-GCF、UNDP-GCF、SOFF（WMO、FMI、BMKG、RIMES）、CREWS／UNDRR、FAO、IFRC、オーストラリア、日本、EU／KOICA に依存しています。
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
                The documented chain for hydro-meteorological hazards runs from the DNMG through the APC operations command to the municipalities and sucos, in parallel with the DNMG direct-to-public channels; for tsunamis a separate written SOP exists. The steps below follow the 2025 Anticipatory Action Road Map, the IFRC Early Action Protocol and the IOWave25 exercise report.
              </>
            ) : (
              <>
                水文気象ハザードについて文書化された流れは、DNMG から APC 作戦司令部を経て市とスコへ至るもので、DNMG が住民へ直接発信する経路と並行しています。津波については別個の文書化された SOP があります。以下の段階は2025年の予防的行動ロードマップ、IFRC 早期行動プロトコル、IOWave25 演習報告に基づきます。
              </>
            )}
          </p>
          <ol className={OL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Observation and forecasting.</strong> The DNMG produces daily, three- and seven-day forecasts, a ten-day municipal forecast with a Low, Moderate, High and Danger legend, monthly seasonal outlooks and ENSO updates, relying on BMKG, BoM and RIMES products for much of the modelling; the Combined Drought Index for agricultural drought is monitored with MALFF and FAO.
                </>
              ) : (
                <>
                  <strong className="text-foreground">観測と予報。</strong>DNMG は毎日の予報、3日・7日予報、「低・中・高・危険」の凡例付き10日間市別予報、月例の季節見通し、ENSO 更新を作成し、モデルの多くを BMKG・BoM・RIMES の産品に依存します。農業干ばつの複合干ばつ指数は MALFF・FAO と共同で監視します。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Transmission to the warning authority.</strong> The CNOPC receives weather information and early warnings from the DNMG through WhatsApp, e-mail and Facebook; the legal basis is the duty of risk-monitoring bodies to communicate detection data to the APC (Lei 12/2020 Art. 43(3)).
                </>
              ) : (
                <>
                  <strong className="text-foreground">警報当局への伝達。</strong>CNOPC は DNMG から気象情報と早期警戒を WhatsApp・電子メール・Facebook で受け取ります。法的根拠はリスク監視機関が検知情報を APC に伝える義務（Lei 12/2020 第43条3項）です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">National dissemination.</strong> The national operations room analyses the information and disseminates it to the APC municipal commands (CPAM); at the same time the DNMG publishes on its portal (Severe Weather Warnings and a CAP Alert link), on Facebook and through radio and television, so two tracks reach the public.
                </>
              ) : (
                <>
                  <strong className="text-foreground">全国への伝達。</strong>国家作戦室は情報を分析して市の APC 司令部（CPAM）へ伝達します。同時に DNMG はポータル（Severe Weather Warnings と CAP Alert のリンク）、Facebook、ラジオ・テレビで発信するため、住民には2つの経路で情報が届きます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Political declaration.</strong> Where preventive measures are needed, the Municipal Authority President or Administrator declares an alert of municipal scope after informing the member of Government; a national alert is declared by the member of Government for civil protection; contingency and calamity follow the ladder of Lei 12/2020, the latter by Government Resolution. On alert, media and telecom operators are under a special duty of collaboration.
                </>
              ) : (
                <>
                  <strong className="text-foreground">政治的宣言。</strong>予防措置が必要な場合、市当局長または市行政官が担当閣僚に通知のうえ市域の警戒を宣言し、全国の警戒は市民保護担当閣僚が宣言します。緊急と災厄は Lei 12/2020 の階梯に従い、災厄は政府決議で宣言されます。警戒下ではメディアと通信事業者に特別な協力義務が生じます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Last mile.</strong> Municipal commands pass the message to suco structures and Suco Disaster Management Committees; CVTL coordinates with municipal and village structures and uses loud-hailers and WhatsApp flow charts. Its flood protocol is triggered when more than three target municipalities are placed on orange (special attention) for three or more consecutive days in the DNMG five-day rainfall bulletin, giving about three days of lead time.
                </>
              ) : (
                <>
                  <strong className="text-foreground">ラストマイル。</strong>市司令部はメッセージをスコの組織とスコ災害管理委員会に渡します。CVTL は市・村の組織と連携し、拡声器と WhatsApp の情報伝達図を使います。その洪水プロトコルは、DNMG の5日間降雨予報で対象3市超が3日以上連続してオレンジ（特別注意）に置かれた場合に発動し、約3日の先行時間を確保します。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Tsunami.</strong> Messages from the Tsunami Service Providers of Australia, India and Indonesia reach the National Tsunami Warning Centre under the InaTEWS agreement and then the CNOPC, which is the agency responsible for the official call for evacuation; the public is reached by SMS alert, social media, local radio and a siren in Dili, with targets of five and ten minutes after the earthquake for the first message.
                </>
              ) : (
                <>
                  <strong className="text-foreground">津波。</strong>オーストラリア・インド・インドネシアの津波サービスプロバイダのメッセージは InaTEWS 協定に基づく国家津波警報センターに届き、次いで CNOPC に渡されます。CNOPC が公式の避難呼びかけに責任を持つ機関です。住民へは SMS 警報、ソーシャルメディア、地域ラジオ、ディリの1基のサイレンで伝え、第一報は地震発生後5分および10分が目標です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Anticipatory action.</strong> The APC-chaired Anticipatory Action Technical Working Group links forecasts to pre-agreed actions; FAO activated its drought protocol in October 2023 on the El Ni&ntilde;o declaration, and the CVTL flood protocol was approved in February 2025.
                </>
              ) : (
                <>
                  <strong className="text-foreground">予防的行動。</strong>APC が議長を務める予防的行動技術作業部会が予報を事前合意の行動に結びつけます。FAO は2023年10月のエルニーニョ宣言で干ばつプロトコルを発動し、CVTL の洪水プロトコルは2025年2月に承認されました。
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
                  <td className={TDH}>{en ? "Heavy rain, flood, landslide" : "大雨・洪水・土砂崩れ"}</td>
                  <td className={TD}>{en ? "DNMG (bulletins); APC/CNOPC (alerts to municipalities)" : "DNMG（予報・速報）、APC／CNOPC（市への警戒情報）"}</td>
                  <td className={TD}>{en ? "Ten-day municipal forecast legend Low / Moderate / High / Danger; municipal rainfall bulletin with colour code in which orange means special attention; the criteria behind the colours are not published." : "10日間市別予報の凡例「低・中・高・危険」。市別降雨予報の色分け（オレンジ＝特別注意）。色の判定基準は未公表。"}</td>
                  <td className={TD}>{en ? "Portal, Facebook, radio, TV; WhatsApp and e-mail to the CNOPC; municipal commands to sucos; loud-hailers." : "ポータル、Facebook、ラジオ、テレビ。CNOPC へは WhatsApp と電子メール。市司令部からスコへ。拡声器。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Civil-protection situations (all hazards)" : "市民保護上の状況（全ハザード）"}</td>
                  <td className={TD}>{en ? "Municipal Authority President or Administrator; member of Government for civil protection; Council of Ministers" : "市当局長または市行政官、市民保護担当閣僚、閣僚評議会"}</td>
                  <td className={TD}>{en ? "Alerta (preventive measures), contingência (means beyond the municipality), calamidade (exceptional measures)" : "警戒（alerta、予防措置）、緊急（contingência、市の手段を超える対応）、災厄（calamidade、例外的措置）"}</td>
                  <td className={TD}>{en ? "Publicised through the media (Art. 11); special duty of media and telecom operators (Art. 13(4))." : "メディアを通じて公表（第11条）。メディア・通信事業者の特別協力義務（第13条4項）。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Earthquake and tsunami" : "地震・津波"}</td>
                  <td className={TD}>{en ? "National Tsunami Warning Centre under the InaTEWS agreement (agency designation unconfirmed), then CNOPC" : "InaTEWS 協定に基づく国家津波警報センター（機関指定は未確認）、次いで CNOPC"}</td>
                  <td className={TD}>{en ? "First warning message targeted at 5 and 10 minutes after the earthquake; CNOPC decides the official call for evacuation." : "第一報は地震後5分・10分が目標。CNOPC が公式の避難呼びかけを決定。"}</td>
                  <td className={TD}>{en ? "SMS alert, social media, local radio, siren in Dili." : "SMS 警報、ソーシャルメディア、地域ラジオ、ディリのサイレン。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Tropical cyclone" : "熱帯サイクロン"}</td>
                  <td className={TD}>{en ? "Australian Bureau of Meteorology advisories, relayed by the DNMG" : "オーストラリア気象局（BoM）の勧告を DNMG が中継"}</td>
                  <td className={TD}>{en ? "BoM advisory products; no national category scheme documented." : "BoM の勧告産品。国内の区分体系は文書化されていない。"}</td>
                  <td className={TD}>{en ? "Same channels as rainfall warnings." : "大雨警報と同じ経路。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Drought and El Niño" : "干ばつ・エルニーニョ"}</td>
                  <td className={TD}>{en ? "MALFF and DNMG with FAO (Combined Drought Index); DNMG ENSO updates" : "MALFF・DNMG と FAO（複合干ばつ指数）、DNMG の ENSO 更新"}</td>
                  <td className={TD}>{en ? "Combined Drought Index high-risk flags by municipality; FAO Anticipatory Action Protocol trigger on an El Niño / IOD declaration." : "複合干ばつ指数の市別高リスク判定。エルニーニョ／IOD 宣言による FAO 予防的行動プロトコルの発動。"}</td>
                  <td className={TD}>{en ? "Agro-meteorological and seasonal bulletins via ALGIS; DNMG portal." : "ALGIS 経由の農業気象・季節速報、DNMG ポータル。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Wildfire (high fire-risk days)" : "森林火災（高リスク日）"}</td>
                  <td className={TD}>{en ? "APC operations room and DNGRD" : "APC 作戦室と DNGRD"}</td>
                  <td className={TD}>{en ? "Automatic public-warning network on high fire-risk days provided for in DL 23/2024 (Arts. 19(2)(d), 25(2)(h)); operational status not documented." : "DL 23/2024（第19条2項d、第25条2項h）が定める高リスク日の自動住民警報網。運用状況は文書化されていない。"}</td>
                  <td className={TD}>{en ? "Automatic network with the telecom operators (statutory design)." : "通信事業者との自動警報網（法律上の設計）。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Marine" : "海上"}</td>
                  <td className={TD}>{en ? "DNMG (OSFAS)" : "DNMG（OSFAS）"}</td>
                  <td className={TD}>{en ? "Marine warnings and bulletins." : "海上警報・速報。"}</td>
                  <td className={TD}>{en ? "Portal." : "ポータル。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                Dissemination remains low-tech and person-based. The CREWS/UNDRR study of 2025, based on 909 household surveys, 27 focus groups and eight municipalities, found that 65 percent of households had received early warnings and 22 percent had received none, that 56 percent of rural households face weak or no mobile coverage, and that about 90 percent trust local leaders, above all suco chiefs, more than national digital sources; technical language was a further barrier, and women relay information within households while men access digital sources. The study concluded that reliance on apps and online databases is premature and recommended equipping local intermediaries with megaphones and sirens. A CAP Alert link exists on the DNMG portal, but whether the feed is operational and consumed by the three mobile operators could not be verified, and no cell-broadcast agreement was found; the statutory public-warning network with the telecom operators in DL 23/2024 is a design, not yet a documented system. Impact-based forecasting enters through BMKG products and the GCF-funded DRR decision-support system, which combines hazard and exposure data into warnings and recommended actions. On Early Warnings for All, Timor-Leste is not an initial-focus country; the Ministry of Interior has stated its intention to embed EW4All in the forthcoming APC strategic plan, the APC listed a roll-out of the initiative and a 2026&ndash;2030 Android and iOS alert app among needed reforms in September 2025, and a national launch reported as planned for 2026 had not been confirmed as of November 2026.
              </>
            ) : (
              <>
                伝達は依然としてローテクで人に依存しています。2025年の CREWS／UNDRR 調査（909世帯、27のフォーカスグループ、8市）では、警報を受け取った世帯は65%、まったく受け取らなかった世帯は22%で、農村世帯の56%は携帯電話の電波が弱いか届かず、約90%が国の電子的な情報源より地域の指導者、とりわけスコ長を信頼していました。専門的な用語も障壁で、世帯内では女性が情報を伝え、男性がデジタル情報源にアクセスする傾向が見られました。調査はアプリやオンラインデータベースへの依存は時期尚早と結論し、地域の仲介者に拡声器やサイレンを備えることを勧めています。DNMG のポータルには CAP Alert のリンクがありますが、配信が稼働し3つの携帯事業者に取り込まれているかは確認できず、セルブロードキャストの協定も見つかりませんでした。DL 23/2024 が定める通信事業者との住民警報網は設計であって、文書化された運用システムではまだありません。影響予測型予報は BMKG の産品と、ハザードと曝露を組み合わせて警報と推奨行動を出す GCF 資金の防災意思決定支援システム（DRR-DSS）を通じて入り始めています。「すべての人に早期警戒を（EW4All）」については、ティモール・レステは初期重点国ではなく、内務省は策定中の APC 戦略計画に EW4All を組み込む意向を表明し、APC は2025年9月に同イニシアティブの展開と2026〜2030年の Android／iOS 警報アプリを必要な改革として挙げました。2026年に予定と報じられた国内立ち上げは、2026年11月時点で確認できていません。
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
                <><strong className="text-foreground">July&ndash;December 2020 —</strong> The Civil Protection Law is approved by Parliament on 21 July, vetoed by the President in September, confirmed unchanged in November and promulgated on 2 December 2020 as Lei 12/2020: the first statutory basis for the alert, contingency and calamity declarations and for a Civil Protection Authority.</>
              ) : (
                <><strong className="text-foreground">2020年7〜12月 —</strong> 市民保護法が7月21日に議会で可決、9月に大統領が拒否、11月に原案で再可決、12月2日に Lei 12/2020 として公布。警戒・緊急・災厄の宣言と市民保護庁の最初の法的基盤となりました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">April 2021 —</strong> Tropical Cyclone Seroja (4 April) and the State of Calamity of 8 April; the World Bank/GFDRR assessment of January 2022 recommended a multi-hazard national DRM regulatory framework, 24/7 hazard monitoring and regional partnerships for real-time forecasting, setting the agenda for the following years.</>
              ) : (
                <><strong className="text-foreground">2021年4月 —</strong> サイクロン・セロジャ（4月4日）と4月8日の災厄状態宣言。2022年1月の世界銀行／GFDRR 評価は多ハザードの国家 DRM 法制度、24時間監視、リアルタイム予報のための域内連携を勧告し、その後の課題設定となりました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">October 2021 —</strong> GCF approves FP171 (UNEP; US$21.7 million; effective 24 March 2022, completion 24 March 2027), which finances the DNMG decision-support systems, radars and stations, a national forecasting centre, the EWS SOP and the draft Meteorological Act; it complements UNDP FP109 (approved July 2019; US$59.4 million; completed March 2026), which built 65 resilient infrastructure schemes and the TERS and MHVRA platforms.</>
              ) : (
                <><strong className="text-foreground">2021年10月 —</strong> GCF が FP171（UNEP、2,170万米ドル、2022年3月24日発効、2027年3月24日完了予定）を承認。DNMG の意思決定支援システム、レーダーと観測所、国家予報センター、EWS SOP、気象法草案を賄います。UNDP の FP109（2019年7月承認、5,940万米ドル、2026年3月完了）を補完し、同事業は65件の強靱なインフラと TERS・MHVRA を構築しました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">November 2021 —</strong> Lei 23/2021 on Local Power assigns civil protection, emergency planning and evacuation planning for public buildings to the municipalities.</>
              ) : (
                <><strong className="text-foreground">2021年11月 —</strong> 地方権力法 Lei 23/2021 が市民保護、緊急計画、公共建築物の避難計画を市に帰属させました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">March 2022 —</strong> DL 11/2022 creates the APC out of the Ministry of Interior Directorate-General for Civil Protection (9 March); Government Resolution 8/2022 adopts the National Climate Change Policy, assigning improved early warning to the Ministry of Interior; the DNMG states that the early-warning system covers only Dili and aims at one per municipality within three years.</>
              ) : (
                <><strong className="text-foreground">2022年3月 —</strong> DL 11/2022 が内務省市民保護総局から APC を創設（3月9日）。政府決議 8/2022 が国家気候変動政策を採択し、早期警戒の改善を内務省に割り当て。DNMG は早期警戒システムがディリしか覆っておらず、3年以内に全市へ広げる目標を表明しました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">February 2023 —</strong> Government-to-government MoU between Indonesia and Timor-Leste on meteorology, climatology and geophysics (13 February, Bogor); first national anticipatory-action workshop (16&ndash;17 February) leading to a Technical Working Group chaired by the APC.</>
              ) : (
                <><strong className="text-foreground">2023年2月 —</strong> インドネシアとの気象・気候・地球物理に関する政府間覚書（2月13日、ボゴール）。最初の予防的行動ワークショップ（2月16〜17日）から APC が議長の技術作業部会が生まれました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">July&ndash;September 2023 —</strong> The IX Constitutional Government adopts its organic law DL 46/2023 (28 July) and the MTC organic law DL 75/2023 (15 September) defining the DNMG mandate; the change of government delays GCF procurement and the call-centre telephony.</>
              ) : (
                <><strong className="text-foreground">2023年7〜9月 —</strong> 第9次立憲政府が組織法 DL 46/2023（7月28日）と DNMG の任務を定める運輸通信省組織法 DL 75/2023（9月15日）を制定。政権交代で GCF の調達とコールセンターの電話設備が遅れました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">October 2023 —</strong> FAO activates its Anticipatory Action Protocol for agricultural drought on the El Ni&ntilde;o declaration, with the Combined Drought Index monitored by MALFF and DNMG; the National Framework for Climate Services coordination mechanism is launched the same year.</>
              ) : (
                <><strong className="text-foreground">2023年10月 —</strong> エルニーニョ宣言を受けて FAO が農業干ばつの予防的行動プロトコルを発動。複合干ばつ指数は MALFF と DNMG が監視。同年、国家気候サービス枠組みの調整メカニズムが立ち上がりました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">March 2024 —</strong> Mercy Corps, the EU and KOICA hand 16 stations (water-level sensors, automatic weather stations, soil-moisture and rain gauges) to the DNMG on 27 March, all located in Dili.</>
              ) : (
                <><strong className="text-foreground">2024年3月 —</strong> Mercy Corps・EU・KOICA が水位センサー・自動気象観測所・土壌水分計・雨量計からなる16局を3月27日に DNMG へ引き渡し。すべてディリ市内です。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">April&ndash;May 2024 —</strong> The Anticipatory Action Road Map is validated nationally (19 April); DL 23/2024 (published 10 May) re-founds the APC with six national directorates, gives the operations room and the DNGRD their statutory early-warning tasks and ends all leadership mandates; validation workshops for the DNMG decision-support systems follow on 13&ndash;17 May.</>
              ) : (
                <><strong className="text-foreground">2024年4〜5月 —</strong> 予防的行動ロードマップの国内検証（4月19日）。DL 23/2024（5月10日公布）が APC を6国家局で再編し、作戦室と DNGRD に早期警戒の法定任務を与え、幹部の任期をすべて終了。DNMG の意思決定支援システムの検証ワークショップが5月13〜17日に続きました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">2024 —</strong> The EWS Standard Operating Procedures are drafted with the Technical Working Group; the final drafts of a National Meteorological Strategy and Act are shared with the DNMG; CREWS starts its accelerated-support action on 9 July (loss-and-damage accounting, EWS reach study); CVTL and the MTC/DNMG sign a five-year MoU on 10 November.</>
              ) : (
                <><strong className="text-foreground">2024年 —</strong> EWS 標準作業手順を技術作業部会と起草。国家気象戦略・気象法の最終草案を DNMG に共有。CREWS が7月9日に加速支援（損失・被害会計、EWS 到達度調査）を開始。CVTL と MTC／DNMG が11月10日に5年間の覚書を締結。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">February 2025 —</strong> IFRC approves the simplified Early Action Protocol for floods (19 February; CHF 168,518; five municipalities), the first forecast-based trigger tied to the DNMG orange bulletin.</>
              ) : (
                <><strong className="text-foreground">2025年2月 —</strong> IFRC が洪水の簡易早期行動プロトコルを承認（2月19日、16万8,518スイスフラン、5市）。DNMG のオレンジ予報に結びついた最初の予報ベースの発動条件です。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">2025 —</strong> The APC publishes the Anticipatory Action Road Map 2025&ndash;2029; SOFF enters its investment phase (US$5.76 million; UNEP as implementing entity, FMI as peer advisor, cooperation agreements with RIMES and BMKG signed in November 2025); in September the APC tells an ADB workshop that the EWS SOP and the inclusive guidelines are awaiting endorsement.</>
              ) : (
                <><strong className="text-foreground">2025年 —</strong> APC が予防的行動ロードマップ 2025〜2029年を公表。SOFF が投資段階に入り（576万米ドル、実施機関 UNEP、ピアアドバイザー FMI、RIMES・BMKG との協力協定は2025年11月署名）、9月には APC が ADB のワークショップで EWS SOP と包摂的ガイドラインが承認待ちであると報告しました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">October 2025 —</strong> BMKG inaugurates the InaTEWS-based earthquake and tsunami early-warning system at IGTL (9 October); Timor-Leste deposits its instrument of accession to the ASEAN Charter (25 October) and is admitted as the eleventh member (26 October).</>
              ) : (
                <><strong className="text-foreground">2025年10月 —</strong> BMKG が IGTL に InaTEWS 方式の地震・津波早期警戒システムを開設（10月9日）。ティモール・レステが ASEAN 憲章加入書を寄託（10月25日）し、11番目の加盟国として承認（10月26日）。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">November&ndash;December 2025 —</strong> IOWave25 table-top and full exercise (7 November; seven schools, more than 200 participants including persons with disabilities); lessons recorded in December: the first message did not consistently reach the local level within the 5&ndash;10 minute target, municipal stakeholders need more involvement, and Tsunami Ready is not yet fully implemented.</>
              ) : (
                <><strong className="text-foreground">2025年11〜12月 —</strong> IOWave25 の机上演習と実動演習（11月7日、7校・200人超、障害者を含む）。12月の教訓として、第一報が5〜10分の目標内に地方レベルへ一貫して届かなかったこと、市レベルの関与拡大の必要、Tsunami Ready の未完が記録されました。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">February&ndash;March 2026 —</strong> The AHA Centre leadership visits CVTL in Dili (4 February) to support integration into regional disaster-management mechanisms; DL 12/2026 (11 March) moves the DNMG under the new Directorate-General of Communications; the CREWS final report (30&ndash;31 March) recommends national and municipal technical working groups and elevating Timor-Leste to a CREWS priority country.</>
              ) : (
                <><strong className="text-foreground">2026年2〜3月 —</strong> AHA センター幹部がディリの CVTL を訪問（2月4日）し、域内災害管理メカニズムへの統合を支援。DL 12/2026（3月11日）が DNMG を新設の通信総局の下へ移管。CREWS 最終報告（3月30〜31日）が国家・市の技術作業部会の設置とティモール・レステの CREWS 優先国への格上げを勧告。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">May&ndash;August 2026 —</strong> Automatic weather stations are installed in six municipalities (DNMG, 20 May); the National Civil Protection Workshop (17 July; Ministry of Interior and UNDP) discusses alignment with AADMER and a ministerial platform for resilient development; BMKG, the MTC, DNMG and IGTL meet in Jakarta (26 August) on radar nowcasting, maritime modelling and a national geophysics roadmap.</>
              ) : (
                <><strong className="text-foreground">2026年5〜8月 —</strong> 6市で自動気象観測所を設置（DNMG、5月20日）。国家市民保護ワークショップ（7月17日、内務省と UNDP）が AADMER との整合と強靱な開発のための閣僚級プラットフォームを議論。BMKG・MTC・DNMG・IGTL がジャカルタで会合（8月26日）し、レーダーによる短時間予報、海洋モデル、国家地球物理ロードマップを協議。</>
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
                <><strong className="text-foreground">Authority gaps in a modern code (structural).</strong> The Civil Protection Law and DL 23/2024 say who declares alert, contingency and calamity and who organises the national warning system, but no provision confers an explicit evacuation-order power, the DNMG mandate is to inform rather than to warn, and the body designated as National Tsunami Warning Centre is not named anywhere. The EWS SOP drafted in 2024 was still awaiting endorsement in September 2025, the SIOPS decree-law and the civil-emergency planning regulation due by May 2025 could not be found, and the RCRC Climate Centre reports unresolved ambiguities among disaster management committees, the municipal civil-protection service and the municipal APC commanders. CREWS calls the pattern policy lag versus operational need.</>
              ) : (
                <><strong className="text-foreground">近代的な法典の中の権限の空白（構造的）。</strong>市民保護法と DL 23/2024 は、誰が警戒・緊急・災厄を宣言し誰が国家警報システムを組織するかを定めますが、避難命令権限を明示する条文はなく、DNMG の任務は「警報」ではなく「情報提供」で、国家津波警報センターに指定された機関はどこにも書かれていません。2024年に起草された EWS SOP は2025年9月時点で承認待ち、SIOPS 政令と2025年5月期限の民間緊急計画規則は見つからず、赤十字・赤新月社気候センターは災害管理委員会、市の市民保護サービス、市 APC 司令官の間の役割の曖昧さを指摘しています。CREWS はこの構図を「政策の遅れと運用上の必要の乖離」と呼んでいます。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">A very small meteorological service (structural).</strong> The SOFF diagnostic rates the DNMG between 1 and 2 out of 5; four of its technicians are GCF-funded on short-term contracts; staff turnover is high; the country shares no observations internationally and lacks the connectivity for WIS 2.0; the GBON gap is one surface station to upgrade and one upper-air station to install. Maritime, earthquake and impact-based products come from BMKG and tropical-cyclone and aviation services from the Australian BoM. DL 12/2026 kept the DNMG a third-tier directorate, now under a Directorate-General of Communications, while the drafted Meteorological Act that would strengthen its status remains unenacted. The Anticipatory Action Road Map notes inconsistent forecast skill and coverage across hazards, which shortens lead times.</>
              ) : (
                <><strong className="text-foreground">きわめて小さな気象機関（構造的）。</strong>SOFF の診断は DNMG を5段階の1〜2と評価します。技術者4人は GCF 資金の短期契約で、職員の離職率は高く、観測データは国際的に共有されておらず、WIS 2.0 に必要な通信環境もありません。GBON の不足は地上観測所1か所の更新と高層観測所1か所の新設です。海上・地震・影響予測型の産品は BMKG、熱帯サイクロンと航空気象はオーストラリア BoM に依存しています。DL 12/2026 は DNMG を通信総局の下の一国家局のまま据え置き、地位を強化するはずの気象法草案は未制定です。予防的行動ロードマップは、ハザード間で予報の精度と範囲が一貫しておらず先行時間が短くなると記しています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">No hydrological service and an informal interface (structural).</strong> No national hydrological service could be identified; the only water-level sensors documented are the 16 stations handed to the DNMG in March 2024, all in Dili, and responsibility for river gauging is unconfirmed, so flood warnings rest on rainfall forecasts. The Road Map records that the lack of local weather stations and flood monitoring sensors prevents the DNMG from specifying danger levels and flood warnings. The DNMG-to-CNOPC link runs through WhatsApp, e-mail and Facebook, and the APC itself lists a limited coordination mechanism for data sharing among ministries and limited technical capacity for system maintenance among its constraints.</>
              ) : (
                <><strong className="text-foreground">水文機関の不在と非公式なインターフェース（構造的）。</strong>国家水文機関は確認できません。文書化された水位センサーは2024年3月に DNMG へ渡された16局のみで、すべてディリにあり、河川水位観測の責任主体も未確認のため、洪水警報は降雨予報に依拠しています。ロードマップは、地域の気象観測所と洪水監視センサーの不足のために DNMG が危険水準と洪水警報を特定できないと記しています。DNMG と CNOPC の接続は WhatsApp・電子メール・Facebook を通じており、APC 自身も省庁間のデータ共有の調整メカニズムの不足とシステム保守の技術能力の限界を制約として挙げています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Last mile and trust (operational).</strong> The 2025 CREWS/UNDRR survey of 909 households found 65 percent reached, 22 percent not reached at all, 56 percent of rural households with weak or no mobile signal, and about 90 percent trusting suco chiefs over national electronic sources; technical language is a further barrier. The only siren documented is in Dili, and IOWave25 showed that the first tsunami message did not consistently reach the local level within the 5&ndash;10 minute target. UNDRR reported after Seroja that the early-warning system, designed to pass warnings through community leaders, did not work as planned on 4 April 2021 while residents were under COVID-19 confinement. CVTL notes that flood-prone villages lack warning before onset and have no evacuation centres.</>
              ) : (
                <><strong className="text-foreground">ラストマイルと信頼（運用上）。</strong>2025年の CREWS／UNDRR 調査（909世帯）では、警報が届いた世帯は65%、まったく届かなかった世帯は22%、農村世帯の56%は携帯電話の電波が弱いか届かず、約90%が国の電子的情報源よりスコ長を信頼していました。専門用語も障壁です。文書化されたサイレンはディリの1基だけで、IOWave25 では津波の第一報が5〜10分の目標内に地方レベルへ一貫して届きませんでした。UNDRR はセロジャ後、地域指導者を介して警報を伝える設計の早期警戒システムが2021年4月4日に計画どおり機能せず、住民は新型コロナの外出制限下にあったと報告しています。CVTL は洪水常襲の村に発生前の警報がなく、避難センターもないと指摘しています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Finance and absorptive capacity (structural).</strong> The APC has no financial or patrimonial autonomy (DL 23/2024 Art. 5); access to the national contingency fund is described by the RCRC Climate Centre as too cumbersome and lengthy for anticipatory action, no dedicated disaster-risk-management fund could be identified, and national anticipatory-action mechanisms are still financed by donors. The GCF-UNEP programme was 87 percent disbursed by December 2025 and ends in March 2027; SOFF pays the salaries of the technicians it places. A Japanese assessment of 2024 judged current policy to be focused on response and recovery, with insufficient investment in prevention, mitigation and preparedness, and called for a Sendai-aligned national disaster-prevention investment plan. The economy is about US$2 billion and 42 percent of the population lives below the national poverty line.</>
              ) : (
                <><strong className="text-foreground">資金と吸収能力（構造的）。</strong>APC には財政的・財産的自律がありません（DL 23/2024 第5条）。国の緊急準備基金へのアクセスは、赤十字・赤新月社気候センターによれば予防的行動には煩雑で時間がかかりすぎ、専用の災害リスク管理基金は確認できず、国内の予防的行動の仕組みはなおドナー資金に依存しています。GCF-UNEP 事業は2025年12月までに87%が支出され2027年3月に終了し、SOFF は配置する技術者の給与を負担しています。2024年の日本側の評価は、現行政策が対応と復旧に偏り予防・軽減・備えへの投資が不十分だとして、仙台枠組に沿った国家防災投資計画の策定を求めました。経済規模は約20億米ドルで、人口の42%が国の貧困線以下にあります。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Institutional turnover (structural).</strong> Two APC organic laws were issued within 26 months and the second ended every leadership mandate in May 2024. The 2023 change of government postponed the call-centre telephony, site preparation for GCF-procured stations by the national executing entity had not started by the end of 2024, and the SOFF cooperation agreement with the MTC was still waiting for banking arrangements through 2025, with no implementation activity that year. CREWS lists high staff rotation as a threat to the sustainability of the loss-data and EWS work.</>
              ) : (
                <><strong className="text-foreground">制度の記憶の断絶（構造的）。</strong>APC の組織政令は26か月の間に2本出され、2本目は2024年5月に幹部の任期をすべて終了させました。2023年の政権交代でコールセンターの電話設備は先送りされ、GCF が調達した観測所の設置準備は国の執行機関側で2024年末まで着手されず、SOFF と運輸通信省の協力協定は2025年を通じて銀行手続きの確認待ちで、同年の実施活動はありませんでした。CREWS は高い職員の回転率を損失データと EWS の取り組みの持続性への脅威として挙げています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">Recurrent floods and the next El Ni&ntilde;o (operational).</strong> Flash floods in Dili displaced 132 people from eleven neighbourhoods in January 2024 and 127 families in a single week in February 2024, with one death in Oecusse; a lightning death and a missing child were recorded across six municipalities in January 2025; flash floods in July 2023 killed four children. The 2023&ndash;2024 El Ni&ntilde;o brought rainfall more than 30 percent below normal to ten of thirteen municipalities plus Oecusse, and ACAPS found insufficient coordination, early warning and resources in the response, with donors often requiring a formal disaster declaration before releasing funds. The DNMG ENSO update of 11 September 2026 reports El Ni&ntilde;o conditions, with WMO giving an 80 percent probability through August 2026 and NOAA a 63 percent chance of a very strong event in November 2026&ndash;January 2027.</>
              ) : (
                <><strong className="text-foreground">反復する洪水と次のエルニーニョ（運用上）。</strong>ディリの鉄砲水は2024年1月に11地区から132人を避難させ、2024年2月には1週間で127家族が被災し、オエクシで1人が死亡しました。2025年1月には6市で落雷死1人と行方不明の子ども1人が記録され、2023年7月の鉄砲水では子ども4人が亡くなりました。2023〜2024年のエルニーニョでは13市のうち10市とオエクシで降雨が平年を30%以上下回り、ACAPS は対応における調整・早期警戒・資源の不足を指摘し、ドナーは資金拠出に正式な災害宣言を求めることが多いと報告されています。DNMG の2026年9月11日の ENSO 更新はエルニーニョ状態を伝え、WMO は2026年8月までの発生確率を80%、NOAA は2026年11月〜2027年1月に非常に強いイベントとなる確率を63%としています。</>
              )}
            </li>
            <li>
              {en ? (
                <><strong className="text-foreground">New ASEAN obligations (structural).</strong> Accession adds participation in the ASEAN disaster-management bodies and exercises to an APC that already serves as the hub for CPLP, UNDRR, GCF and SOFF processes. Yet the official Post-Accession Vision and Strategy 2024&ndash;2031 contains no reference to AADMER, the AHA Centre, early warning or civil protection, and the first post-accession workshop in November 2025 was devoted to the economic community. Disaster-management integration therefore lags economic integration, and the legal status of AADMER remains to be confirmed.</>
              ) : (
                <><strong className="text-foreground">ASEAN 加盟に伴う新たな義務（構造的）。</strong>加盟により、すでに CPLP・UNDRR・GCF・SOFF の各プロセスの中枢を務める APC に、ASEAN の災害管理機関や演習への参加が加わります。しかし公式の「加盟後ビジョン・戦略 2024〜2031年」には AADMER、AHA センター、早期警戒、市民保護への言及がなく、2025年11月の最初の加盟後ワークショップは経済共同体に充てられました。災害管理の統合は経済統合に遅れており、AADMER の法的地位も確認が残っています。</>
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
                The division of labour among partners is clear. Indonesia is the operational backbone: a 2016 ministry-level MoU on calibration, training and data exchange, the government-to-government MoU of February 2023 and the 2024 MoU and Implementation Agreement that produced the InaTEWS system at IGTL, BMKG on-the-job training on station siting and calibration, a role as SOFF technical partner, and the Jakarta meeting of August 2026 on radar nowcasting and a national geophysics roadmap. Australia provides tropical-cyclone advisories, aviation forecasts and climate projections through BoM and CSIRO, finances community anticipatory action through the Australian Humanitarian Partnership (AUD 1.66 million to 2026) and gave about US$3.3 million for El Ni&ntilde;o prepositioning in January 2024. Multilateral finance comes from the Green Climate Fund (UNEP FP171, US$21.7 million; UNDP FP109, US$59.4 million), SOFF (US$5.76 million with UNEP, WMO, the Finnish Meteorological Institute as peer advisor, RIMES and BMKG), CREWS through UNDRR (US$249,165 for loss data, the reach study and the training of 36 journalists), FAO and WFP for drought anticipatory action, the EU and KOICA through Mercy Corps for the Dili stations, and the World Bank/GFDRR for the Seroja assessment. UNESCO-IOC, UNDRR Bangkok and the Portuguese Embassy supported IOWave25; the APC also maintains technical relations with CPLP civil-protection services, and the AHA Centre made its first visit in February 2026. No partner currently covers the hydrological-services gap.
              </>
            ) : (
              <>
                パートナー間の分業は明確です。インドネシアは運用面の基盤で、較正・研修・データ交換に関する2016年の省庁間覚書、2023年2月の政府間覚書、IGTL の InaTEWS システムにつながった2024年の覚書と実施協定、観測所の設置・較正に関する BMKG の実地研修、SOFF 技術パートナーとしての役割、レーダー短時間予報と国家地球物理ロードマップを協議した2026年8月のジャカルタ会合がこれに当たります。オーストラリアは BoM と CSIRO を通じて熱帯サイクロン勧告、航空予報、気候予測を提供し、オーストラリア人道パートナーシップ（2026年まで166万豪ドル）でコミュニティの予防的行動を支え、2024年1月にはエルニーニョ対策の事前配置に約330万米ドルを供与しました。多国間の資金は緑の気候基金（UNEP の FP171 が2,170万米ドル、UNDP の FP109 が5,940万米ドル）、SOFF（576万米ドル。UNEP、WMO、ピアアドバイザーのフィンランド気象研究所、RIMES、BMKG）、UNDRR を通じた CREWS（24万9,165米ドル。損失データ、到達度調査、ジャーナリスト36人の研修）、干ばつの予防的行動を担う FAO と WFP、ディリの観測局を Mercy Corps 経由で供与した EU と KOICA、セロジャ評価を行った世界銀行／GFDRR から来ています。UNESCO-IOC、UNDRR バンコク、ポルトガル大使館は IOWave25 を支援し、APC は CPLP の市民保護機関とも技術的関係を持ち、AHA センターは2026年2月に初訪問しました。水文サービスの空白を担うパートナーは現在ありません。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Japan concentrates on flood-control engineering and equipment. After a JICA survey on flood control in Dili, an Exchange of Notes was signed in August 2022 for the Programme for Urgent Rehabilitation of Flood Damaged Infrastructures; the works, including a revetment on the Comoro River, the Bemos water-intake weir and the Buluto and Mariana irrigation schemes, ran from February to October 2023 and were completed before the rainy season, with a ceremony on 27 October 2023 attended by the JICA President. A grant agreement of January 2023 worth 801 million yen financed the Project for the Improvement of Equipment for Disaster Risk Reduction and Recovery (a drainage pump truck, excavators, bulldozers, dump trucks and a mobile workshop), with a soft component on clarifying responsibilities among agencies, information-sharing and equipment operation. A technical-cooperation Project for Capacity Development of Flood Disaster Risk Reduction has run since October 2024 for Dili and its environs; JICA also lists technical cooperation on seismology, earthquake engineering and tsunami disaster mitigation, watershed management in the Laclo and Comoro basins and the Upriver Comoro Bridge. In January 2026 the Minister of Public Works, Samuel Mar&ccedil;al, visited JICA headquarters, the Ministry of Land, Infrastructure, Transport and Tourism, the Hyogo Prefecture disaster management centre, the Rokko Sabo Office and the Arakawa floodway, and a working session with JICA experts set priorities for rivers with recurrent flooding. The Japan Meteorological Agency supplies satellite data and imagery to the DNMG, and the Minister of Interior thanked UNDP and the Government of Japan at the July 2026 civil-protection workshop.
              </>
            ) : (
              <>
                日本は治水工学と機材に重点を置いています。JICA のディリ治水情報収集調査の後、2022年8月に「洪水被害インフラ緊急復旧計画」の交換公文が署名され、コモロ川の護岸、ベモス取水堰、ブルト・マリアナ灌漑施設を含む工事は2023年2〜10月に実施されて雨季前に完了し、2023年10月27日の式典には JICA 理事長が出席しました。2023年1月の贈与契約（8億100万円）は「防災・復旧用機材整備計画」（排水ポンプ車、掘削機、ブルドーザー、ダンプトラック、移動工房など）を賄い、ソフトコンポーネントとして機関間の責任の明確化、情報共有の仕組み、機材運用研修を含みます。技術協力「洪水災害リスク削減能力強化プロジェクト」は2024年10月からディリとその周辺を対象に実施されており、JICA の協力一覧には地震学・地震工学・津波防災の技術協力、ラクロ川・コモロ川流域の流域管理、コモロ川上流橋の建設も載っています。2026年1月にはサムエル・マルサル公共事業大臣が JICA 本部、国土交通省、兵庫県の防災センター、六甲砂防事務所、荒川放水路を訪れ、JICA 専門家との作業会合で洪水が繰り返す河川への介入の優先順位を定めました。気象庁は DNMG に衛星データと画像を提供しており、内務大臣は2026年7月の市民保護ワークショップで UNDP と日本政府に謝意を表しました。
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
                What is distinctive about Timor-Leste is the combination of a modern, Portuguese-style civil-protection code with a state apparatus too small to fill it. The law is explicit about political declarations and about which body organises the national warning system, and it is unusual in the region in making villages statutory civil-protection agents and in obliging monitoring agencies to feed the warning authority. Yet it does not say who may order an evacuation, it gives the meteorological service a mandate to inform rather than to warn, and it has not yet designated the body that speaks for tsunamis. The formal design is therefore a two-agency chain, hazard information from the DNMG and authoritative warning from the APC, held together in practice by WhatsApp messages and a handful of individuals.
              </>
            ) : (
              <>
                ティモール・レステの特徴は、ポルトガル型の近代的な市民保護法典と、それを満たすには小さすぎる国家機構の組み合わせにあります。法律は政治的な宣言と、国家警報システムを組織する機関について明示的で、村を法定の市民保護実施主体とし、監視機関に警報当局への情報提供を義務づける点で域内でも珍しい作りです。しかし誰が避難を命じ得るかは書かれておらず、気象機関には「警報」ではなく「情報提供」の任務が与えられ、津波について発言する機関もまだ指定されていません。したがって形式上の設計は、DNMG のハザード情報と APC の権威ある警報という二機関の連鎖であり、実務では WhatsApp のメッセージと少数の個人がそれをつないでいます。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The main unresolved question is whether the rules will catch up with the hardware before the current project cycle ends in 2027. Three changes would close most of the gap: endorsing the EWS SOP and designating a single authoritative issuer per hazard, including the tsunami warning centre; enacting the drafted Meteorological Act so that the DNMG has a warning mandate, a stable budget line and a status above a third-tier directorate; and writing an explicit, tiered evacuation-order power into the Civil Protection Law or the APC organic decree-law, matched by a protocol with the mobile operators. Until then, the finding that nine in ten households trust the suco chief more than any electronic channel is not a weakness to be engineered away but the design parameter around which a Timorese warning system should be built.
              </>
            ) : (
              <>
                最大の未解決の問いは、現行の事業サイクルが2027年に終わる前に、規則が機材に追いつくかどうかです。三つの変更で隔たりの大半は埋まります。EWS 標準作業手順を承認し、津波警報センターを含めてハザードごとに単一の権威ある発表者を指定すること。草案段階の気象法を制定し、DNMG に警報の任務、安定した予算、一国家局より上の地位を与えること。そして市民保護法か APC 組織政令に段階的で明示的な避難命令権限を書き込み、携帯事業者との協定でそれを裏打ちすることです。それまでは、10世帯のうち9世帯がどの電子的経路よりスコ長を信頼しているという事実は、技術で取り除くべき弱点ではなく、ティモール・レステの警報システムを組み立てる際の設計条件そのものです。
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
              Rep&uacute;blica Democr&aacute;tica de Timor-Leste (2020). Lei n.&ordm; 12/2020, de 2 de dezembro — Lei da Prote&ccedil;&atilde;o Civil. <em>Jornal da Rep&uacute;blica</em> (copy hosted by the Laut&eacute;m Municipal Administration). https://lautem.gov.tl/wp-content/uploads/2026/03/LEI-PROTECAO-CIVIL.pdf
            </li>
            <li>
              Governo de Timor-Leste (2022). Decreto-Lei n.&ordm; 11/2022, de 9 de mar&ccedil;o — Estrutura Org&acirc;nica da Autoridade de Prote&ccedil;&atilde;o Civil. <em>Jornal da Rep&uacute;blica</em>, S&eacute;rie I, n.&ordm; 11. https://www.mj.gov.tl/jornal/public/docs/2022/serie_1/SERIE_I_NO_11.pdf
            </li>
            <li>
              Governo de Timor-Leste (2024). Decreto-Lei n.&ordm; 23/2024, de 10 de maio — Estrutura Org&acirc;nica da Autoridade de Prote&ccedil;&atilde;o Civil. <em>Jornal da Rep&uacute;blica</em>, S&eacute;rie I, n.&ordm; 19 B. https://mj.gov.tl/jornal/public/docs/2024/serie_1/SERIE_I_NO_19_B.pdf
            </li>
            <li>
              Governo de Timor-Leste (2023). Decreto-Lei n.&ordm; 46/2023, de 28 de julho — Org&acirc;nica do IX Governo Constitucional. <em>Jornal da Rep&uacute;blica</em>, S&eacute;rie I, n.&ordm; 27 A (FAOLEX copy). https://faolex.fao.org/docs/pdf/tim221893.pdf
            </li>
            <li>
              Governo de Timor-Leste (2023). Decreto-Lei n.&ordm; 75/2023, de 15 de setembro — Org&acirc;nica do Minist&eacute;rio dos Transportes e Comunica&ccedil;&otilde;es. <em>Jornal da Rep&uacute;blica</em>, S&eacute;rie I, n.&ordm; 34 D. https://mj.gov.tl/jornal/public/docs/2023/serie_1/SERIE_I_NO_34_D.pdf
            </li>
            <li>
              Governo de Timor-Leste (2026). Decreto-Lei n.&ordm; 12/2026, de 11 de mar&ccedil;o — Primeira altera&ccedil;&atilde;o ao Decreto-Lei n.&ordm; 75/2023. <em>Jornal da Rep&uacute;blica</em>, S&eacute;rie I, n.&ordm; 10. https://www.mj.gov.tl/jornal/public/docs/2026/serie_1/SERIE_I_NO_10.pdf
            </li>
            <li>
              Parlamento Nacional (2021). Lei n.&ordm; 23/2021, de 10 de novembro — Lei do Poder Local e da Descentraliza&ccedil;&atilde;o Administrativa. <em>Jornal da Rep&uacute;blica</em>, S&eacute;rie I, n.&ordm; 45. https://www.mj.gov.tl/jornal/public/docs/2021/serie_1/SERIE_I_NO_45.pdf
            </li>
            <li>
              Parlamento Nacional (2016). Lei n.&ordm; 9/2016, de 8 de julho — Lei dos Sucos (unofficial English translation). <em>IFES/USAID</em>. https://ifes.org/sites/default/files/migrate/suco_law.2016.english.final_.pdf
            </li>
            <li>
              Governo de Timor-Leste (2022). Resolu&ccedil;&atilde;o do Governo n.&ordm; 8/2022, de 1 de mar&ccedil;o — Pol&iacute;tica Nacional de Altera&ccedil;&otilde;es Clim&aacute;ticas (unofficial English translation). <em>La&rsquo;o Hamutuk</em>. https://www.laohamutuk.org/Env/Climate/2023/220301GovRes8NationalClimateChangePolicyEn.pdf
            </li>
            <li>
              Civil Protection Authority of Timor-Leste and FAO (2025). Timor-Leste Anticipatory Action Road Map 2025&ndash;2029. <em>Anticipation Hub</em>. https://www.anticipation-hub.org/Documents/Other/250829_FAO_Timor-Leste_AA_report.pdf
            </li>
            <li>
              CREWS Initiative and UNDRR (2026). Enhancing Risk Data Ecosystem and People-Centered Early Warning Systems in Timor-Leste: Final Report (CREWS/ASW/09). <em>CREWS Initiative</em>. https://crews-initiative.org/wp-content/uploads/2026/04/CREWS-ASW-Timor-Leste-Final-Report.pdf
            </li>
            <li>
              SOFF, UNEP and WMO (2026). Timor-Leste SOFF Investment Phase Project Document Package. <em>UN Multi-Partner Trust Fund Office</em>. https://mptf.undp.org/sites/default/files/documents/2026-05/soff_timor-leste_pro_doc_package.pdf
            </li>
            <li>
              UNEP (2025). FP171 Enhancing Early Warning Systems to Build Greater Resilience to Hydro-meteorological Hazards in Timor-Leste: Annual Performance Report CY2024. <em>Green Climate Fund</em>. https://www.greenclimate.fund/sites/default/files/document/fp171-50867-annual-performance-report-cy2024-v1.pdf
            </li>
            <li>
              Civil Protection Authority of Timor-Leste (2025). Timor-Leste CIEWS Status and Priorities (presentation to the ADB Early Warning Systems Investment Planning Workshop, Manila, 2 September 2025). <em>ADB Development Asia</em>. https://events.development.asia/system/files/democratic-republic-of-timor-leste_s-ciews-status-and-priorities.pdf
            </li>
            <li>
              UNESCO-IOC (2025). IOWave25 Lessons Learnt Webinar, 16&ndash;17 December 2025: Timor-Leste national presentation. <em>OceanExpert</em>. https://oceanexpert.org/downloadFile/61427
            </li>
            <li>
              IFRC (2025). Simplified Early Action Protocol Timor-Leste | Flood (sEAP2024TL01, MDRTL001). <em>IFRC GO</em>. https://go-api.ifrc.org/api/downloadfile/90489/sEAP2024TL01_MDRTL001
            </li>
            <li>
              BMKG (2025). BMKG builds a tsunami early warning system in Timor-Leste (press release, 9 October 2025). <em>Badan Meteorologi, Klimatologi, dan Geofisika</em>. https://www.bmkg.go.id/siaran-pers/bmkg-bangun-sistem-peringatan-dini-tsunami-di-timor-leste-perkuat-ketangguhan-kawasan-dari-ancaman-gempabumi-dan-tsunami
            </li>
            <li>
              World Bank (2022). Recovery and resilience building: learning from Tropical Cyclone Seroja in Timor-Leste (blog, 22 January 2022). <em>World Bank Blogs</em>. https://blogs.worldbank.org/en/eastasiapacific/recovery-resilience-building-learning-tropical-cyclone-seroja-timor-leste
            </li>
            <li>
              JICA (2023). The Project for the Improvement of Equipment for Disaster Risk Reduction and Recovery (ODA project page); JICA (2025). Plan in Operation: Timor-Leste (July 2025). <em>Japan International Cooperation Agency</em>. https://www.jica.go.jp/oda/project/2260610/index.html ; https://libportal.jica.go.jp/library/Public/files/plan/in-operation/english/SoutheastAsia/026_Timor_Leste-e.pdf
            </li>
            <li>
              Al Jazeera (2025). East Timor becomes the eleventh member of ASEAN (26 October 2025); Tatoli (2026). Report on the visit of the Minister of Public Works to Japan (22 January 2026). <em>Al Jazeera; Tatoli</em>. https://www.aljazeera.com/news/2025/10/26/dream-realised-east-timor-becomes-aseans-11th-member ; https://en.tatoli.tl/?p=67467
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
              <Link href="/blog/ews-governance-brunei" className="text-highlight hover:underline">
                {en ? "Brunei Darussalam" : "ブルネイ"}
              </Link>
            </li>
            <li>
              <strong className="text-foreground">{en ? "Timor-Leste" : "ティモール・レステ"}</strong>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
