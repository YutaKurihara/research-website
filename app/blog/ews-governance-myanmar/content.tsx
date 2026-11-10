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
              ? "Early Warning Governance in Myanmar — Laws, Actors and Current Challenges"
              : "ミャンマーの予警報制度 — 法制度・アクターの役割・現在の課題"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "Who holds the legal power to warn and to order evacuation in Myanmar, and how the chain has actually worked since 2021 — based on the Natural Disaster Management Law of 2013, official country reports, DMH and DDM sources, AHA Centre situation updates and independent reporting."
              : "サイクロン・洪水・地震の予警報を誰が出し、誰が避難を命じるのか。2013年自然災害管理法、公式の国別報告、DMH・DDM の一次資料、AHA センターの状況報告、独立系の報道に基づき、2021年以降の運用実態まで整理します。"}
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
                The hazards that kill and cost most in Myanmar are tropical cyclones from the Bay of Bengal, with their storm surges and floods. <strong className="text-foreground">Cyclone Mocha</strong>, which made landfall just north of Sittwe (Rakhine State) on 14 May 2023 with IMD three-minute winds of 215 km/h and a surge of about 3&ndash;3.5 m, left a death toll of 145&ndash;156 by official count but 413&ndash;463 according to the National Unity Government (NUG); the World Bank put the damage at US$2.24 billion. The floods that followed <strong className="text-foreground">Typhoon Yagi</strong> on 11&ndash;12 September 2024 were described in the government account as unseen for roughly 50 years and affected Nay Pyi Taw and seven states and regions; the official toll was 433&ndash;455 dead, the NUG counted more than 600, and the UN estimated about one million people affected in 70 of 330 townships. The <strong className="text-foreground">Mw 7.7 earthquake of 28 March 2025</strong> on the Sagaing Fault (USGS; epicentre about 16 km west of Mandalay, depth 10 km) killed 3,757&ndash;3,818 people by official count, 4,200 according to the NUG and 4,549&ndash;5,352 according to media tallies; the World Bank estimated damage at US$11 billion, about 14 per cent of GDP. Landslides such as the Hpakant jade-mine collapse of 2 July 2020 (172 to about 200 dead, after a warning that many miners ignored), dry-season drought, and earlier earthquakes on the Sagaing Fault (Tarlay 2011, M6.8, 76 dead; Thabeikkyin 2012, M6.8, 18 dead) complete the hazard profile.
              </>
            ) : (
              <>
                ミャンマーで最も多くの人命と資産を奪ってきたのは、ベンガル湾から上陸するサイクロンと、それに伴う高潮・洪水です。2023年5月14日にラカイン州シットウェ北方に上陸した<strong className="text-foreground">サイクロン・モカ</strong>（IMD 3分平均風速215 km/h、高潮約3〜3.5 m）の死者数は、公式には145〜156人、国民統一政府（NUG）側の集計では413〜463人と大きく食い違い、世界銀行は被害額を22.4億ドルと推計しました。2024年9月11〜12日の<strong className="text-foreground">台風ヤギに伴う洪水</strong>は、政府報告でネピドーと7つの州・地域に及ぶ「約50年来」の規模とされ、死者は公式433〜455人、NUG 側は600人超、国連は330郡のうち70郡で約100万人が被災したと推計しています。さらに2025年3月28日のサガイン断層による<strong className="text-foreground">Mw7.7 地震</strong>（USGS、震源はマンダレー西約16 km、深さ10 km）は、公式3,757〜3,818人、NUG 4,200人、報道4,549〜5,352人という幅のある死者数を残し、世界銀行は被害を GDP の約14%に相当する110億ドルと見積もりました。これに2020年7月2日のパカン翡翠鉱山崩落（死者172〜約200人。前日の警告を多くの鉱夫が無視）のような地すべり、乾季の干ばつ、サガイン断層沿いの過去の地震（タルレー2011年 M6.8・死者76人、タベイッキン2012年 M6.8・死者18人）が加わり、ハザード像を構成します。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Institutional design matters in Myanmar because the legal path of a warning runs through a single administrative hierarchy. The Natural Disaster Management Law of 2013 never names the Department of Meteorology and Hydrology (DMH): it assigns the prompt dissemination of early warnings to a centre under the national committee, gives the power to direct evacuation to Region and State bodies chaired by Chief Ministers, and places administrators of the General Administration Department (GAD) at the head of district, township, ward and village-tract committees. After the military takeover of 1 February 2021, every node of that hierarchy passed to the military administration: the GAD was returned to the military-held Ministry of Home Affairs in May 2021 and the national committee was chaired by the Vice-Chairman of the State Administration Council (SAC). At the same time an estimate for 2024 put 86 per cent of the territory and 67 per cent of the population outside stable military control, and 65 of 330 townships could not vote in the elections held from December 2025 to January 2026. The NUG humanitarian ministry and ethnic organisations such as the ULA/AA run their own warnings and evacuations. The central institutional problem is therefore not forecast accuracy but the fact that the legally mandated last mile of the warning chain belongs to one party to an armed conflict.
              </>
            ) : (
              <>
                ミャンマーで制度設計が決定的に重要になるのは、予警報の法的な伝達経路が単一の行政系統に依存しているからです。2013年の自然災害管理法は気象水文局（DMH）を一度も名指しせず、「早期警報の迅速な伝達」を国家委員会の下に置く災害管理センターに、避難の指示を首席大臣が率いる地域・州の災害管理機関に、そして末端の県・郡・区・村落区の委員会の長を総務局（GAD）の行政官に委ねています。2021年2月1日の軍による権力掌握以降、この系統の各結節点は軍政の側に移りました。GAD は2021年5月に軍が握る内務省へ戻され、国家委員会の議長は国家行政評議会（SAC）副議長が務めました。他方で、2024年には国土の86%・人口の67%が軍の安定的統制外にあったとの推計があり、2025年12月〜2026年1月の選挙では330郡のうち65郡で投票が実施できませんでした。NUG の人道担当省や ULA/AA などの民族組織は、独自の警報と避難を運用しています。したがってミャンマーの制度上の中心課題は予報の精度ではなく、「法律上の警報伝達の最終経路が武力紛争の一方当事者に属している」という点にあります。
              </>
            )}
          </p>
          <p className={P}>
            {en
              ? "This article reviews, in turn, the legal framework, the actors and their roles, the warning chain and warning levels, institutional changes since 2020, current challenges, and international cooperation including the role of Japan."
              : "本記事では、法制度、アクターの役割、警報の流れと警報レベル、2020年以降の制度変化、現在の課題、国際協力と日本の関与を順に整理します。"}
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
                Disaster law in Myanmar rests on a single statute, the <strong className="text-foreground">Natural Disaster Management Law (Pyidaungsu Hluttaw Law No. 21/2013)</strong>, enacted on 31 July 2013, supplemented by the Natural Disaster Management Rules issued by the Ministry of Social Welfare, Relief and Resettlement (MSWRR) on 7 April 2015 under section 43(a), and by an administrative Standing Order on Disaster Management first published in January 2009 and revised in 2011 and, according to the ADRC country report, again in 2022. The planning layer consists of the Myanmar Action Plan on Disaster Risk Reduction (MAPDRR 2017, replacing the 2012 plan), the Myanmar National Framework for Community Disaster Resilience (2016) and the National Earthquake Preparedness and Response Plan (2019). Two further laws, outside the disaster field, shape the chain in practice: the Telecommunications Law of 2013 and the Organization Registration Law of 2022.
              </>
            ) : (
              <>
                ミャンマーの災害法制は、2013年7月31日に制定された<strong className="text-foreground">自然災害管理法（Natural Disaster Management Law、連邦議会法律第21号／2013年）</strong>という単一の法律を中核とし、同法43条(a)に基づき社会福祉・救済・再定住省（MSWRR）が2015年4月7日に定めた自然災害管理規則、そして2009年1月に公表され2011年に、また ADRC の国別報告によれば2022年にも改訂された行政文書「災害管理に関する常設命令（Standing Order）」で構成されます。計画文書としては、2012年版を更新したミャンマー防災行動計画（MAPDRR 2017）、国家コミュニティ災害レジリエンス枠組み（2016年）、国家地震準備対応計画（2019年）があります。災害分野の外にある2013年電気通信法と2022年組織登録法も、警報の伝達経路に実務上の影響を与えています。
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
                  <td className={TDH}>{en ? "Natural Disaster Management Law (Pyidaungsu Hluttaw Law No. 21/2013)" : "自然災害管理法（Natural Disaster Management Law、連邦議会法律第21号／2013年）"}</td>
                  <td className={TD}>2013</td>
                  <td className={TD}>{en ? "Section 2(b) defines natural disaster very broadly, from fire, landslides, storms, floods, drought, earthquakes and tsunamis to epidemics, violence and armed insurgencies, and industrial or nuclear accidents. National Natural Disaster Management Committee chaired by a Vice-President (s.4); MSWRR as its office and budget holder (ss.6, 33); Region/State bodies chaired by Chief Ministers (s.7); district, township, ward and village-tract bodies (s.8); national and Region/State disaster funds (Chapter VII); penalties for negligence and obstruction (ss.25–26)." : "2条(b)は火災・地すべり・暴風・洪水・干ばつ・地震・津波から感染症、「暴力と武装反乱」、産業・原子力事故まで含む極めて広い「自然災害」を定義。副大統領を議長とする国家自然災害管理委員会（4条）、MSWRR が事務局・予算負担（6条・33条）、首席大臣が率いる地域・州機関（7条）、県・郡・区・村落区の機関（8条）、国家および地域・州の災害管理基金（第7章）、過失・妨害への罰則（25・26条）。"}</td>
                  <td className={TD}>{en ? "s.5(h): the national committee establishes a Natural Disaster Management Centre for monitoring information and prompt dissemination of early warnings; s.5(i): coordination of timely evacuation when a warning is received; s.9(b): Region/State bodies report imminent disasters to the national committee; s.9(i): Region/State bodies direct the population to leave areas and buildings at risk; s.11: the President declares a natural disaster affected area; s.15(e): issuing early warning information to the public so that it can evacuate in time; s.31: wilful failure to comply with an evacuation direction is punishable by up to one month of imprisonment and/or a fine; s.36: pre-disaster evacuation is to be undertaken in accord with the consent of those concerned. DMH is not mentioned anywhere in the Law." : "5条(h)：国家委員会が情報監視と「早期警報の迅速な伝達」のための自然災害管理センターを設置。5条(i)：警報受領時の適時の避難の調整。9条(b)：地域・州機関は切迫した災害を国家委員会へ速報。9条(i)：地域・州機関が「危険な地域・建物から退去するよう住民に指示」。11条：大統領が「自然災害被災地域」を宣言。15条(e)：「適時に避難できるよう公衆に早期警報情報を発出」。31条：退去・避難指示への故意の不服従は1か月以下の拘禁・罰金。36条：災害発生前の避難は「住民の同意に基づいて」実施。DMH への言及は法文中に一切ない。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Natural Disaster Management Rules (MSWRR, under s.43(a))" : "自然災害管理規則（Natural Disaster Management Rules、MSWRR が43条(a)に基づき制定）"}</td>
                  <td className={TD}>2015</td>
                  <td className={TD}>{en ? "Rule 6: MSWRR establishes the Disaster Management Centre (DMC); Rule 12(a),(k): the Department of Disaster Management (DDM) coordinates the work committees and performs the functions of the DMC under NDMC/MSWRR guidance; Rule 26: a disaster-area declaration lasts up to two months, extendable by two months; Rule 30: five Emergency Status Levels from Level 5 (ward/village tract) to Level 1 (national), as reported by the ADRC." : "Rule 6：MSWRR に災害管理センター（DMC）を設置。Rule 12(a)(k)：災害管理局（DDM）が作業委員会を調整し、NDMC・MSWRR の指導下で DMC の機能を担う。Rule 26：被災地域宣言は最長2か月、2か月延長可。Rule 30：レベル5（区・村落区）からレベル1（国家）までの5段階の「緊急事態レベル」（ADRC 報告による）。"}</td>
                  <td className={TD}>{en ? "By entrusting the DMC to the DDM, the Rules make the DDM the body that legally disseminates warnings; no provision on DMH as the issuing authority appears in the secondary sources available." : "DMC の運営を DDM に委ねることで、法律上の警報伝達機関は DDM となる。入手できた二次資料には、DMH を発表機関と定める規定は現れない。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Standing Order on (Natural) Disaster Management" : "災害管理に関する常設命令（Standing Order on Natural Disaster Management）"}</td>
                  <td className={TD}>2009 / 2011 / 2022</td>
                  <td className={TD}>{en ? "Issued by the National Disaster Preparedness Central Committee in January 2009. Specifies mandates, roles and responsibilities of national institutions; delineates the responsibilities of the Ministry of Defence and the Tatmadaw across four phases (normal times; alert and warning; during disaster; relief and rehabilitation). The 2022 version reportedly sets the conditions for declaring a disaster-affected area, the operation of the DMC, the duties of the twelve working committees and the Union Territory, State and Region bodies, and civil-military coordination." : "2009年1月に国家災害準備中央委員会が発出。国家レベル機関の任務・役割を規定し、国防省・国軍の責任を「平時／警戒・警報／災害時／救済・復興」の4段階で区分。2022年版は被災地域宣言の条件、DMC の運営、12作業委員会と連邦直轄地・州・地域機関の任務、文民・軍調整を定めるとされる。"}</td>
                  <td className={TD}>{en ? "The colour-coded cyclone warnings of DMH have been used since the 2009 cyclone season as per the Standing Order. Whether the Standing Order or the 2015 Rules prevails was raised as an open question by IFRC in 2016." : "DMH の色別サイクロン警報は「2009年サイクロン期から常設命令に基づき」運用。常設命令と2015年規則の法的優劣は、2016年に IFRC が未解決の論点として提起。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Myanmar Action Plan on Disaster Risk Reduction (MAPDRR 2017)" : "ミャンマー防災行動計画（Myanmar Action Plan on Disaster Risk Reduction、MAPDRR 2017）"}</td>
                  <td className={TD}>2017</td>
                  <td className={TD}>{en ? "Replaces MAPDRR 2012 (aligned to the Hyogo Framework). 32 actions under four pillars with targets through 2030, aligned to the Sendai Framework." : "兵庫行動枠組みに整合した2012年版を更新。4本柱・32行動、2030年を目標年とし仙台枠組みに整合。"}</td>
                  <td className={TD}>{en ? "A planning document; it does not alter the statutory allocation of warning and evacuation powers." : "計画文書であり、警報・避難の法的権限配分は変更しない。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "National Earthquake Preparedness and Response Plan" : "国家地震準備対応計画（National Earthquake Preparedness and Response Plan）"}</td>
                  <td className={TD}>2019</td>
                  <td className={TD}>{en ? "Specifies roles and responsibilities across the relevant ministries and the activation of emergency mechanisms for earthquakes." : "地震時の関係省庁の役割・責任と緊急メカニズムの発動手順を規定。"}</td>
                  <td className={TD}>{en ? "There is no earthquake early warning system; the National Earthquake Data Center of DMH provides seismic monitoring and tsunami early warning, and post-event reports are relayed by the DDM." : "地震早期警報は存在しない。DMH の国家地震データセンター（NEDC）が地震観測と津波早期警報を担い、発生後の地震情報を DDM が転送する。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Organization Registration Law (SAC Law No. 46/2022)" : "組織登録法（Organization Registration Law、SAC 法律第46号／2022年）"}</td>
                  <td className={TD}>2022</td>
                  <td className={TD}>{en ? "Replaces the Association Registration Law (Pyidaungsu Hluttaw Law No. 31/2014) and makes registration compulsory. After the March 2025 earthquake a directive required aid groups to register before operating." : "結社登録法（連邦議会法律第31号／2014年）を置き換え、登録を義務化。2025年3月の地震後には、支援団体に活動前の登録を求める指令が出された。"}</td>
                  <td className={TD}>{en ? "No warning provisions, but it governs which organisations may legally carry out relief and evacuation support after a warning and has been used to restrict access." : "警報規定はないが、警報後に救援・避難支援を行える団体の範囲を規定し、アクセス制限の根拠として使われている。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Telecommunications Law" : "電気通信法（Telecommunications Law）"}</td>
                  <td className={TD}>2013</td>
                  <td className={TD}>{en ? "Liberalised the sector (Ooredoo and Telenor entered in 2014; Mytel, with military-linked shareholders, licensed in January 2017). Article 66(d) has been the main provision used to prosecute online speech. Starlink terminals are unauthorised under this law." : "通信市場を自由化（2014年に Ooredoo・Telenor が参入、2017年1月に軍系資本を含む Mytel に免許）。66条(d)はオンライン言論の訴追に多用される。Starlink 端末は同法上未認可。"}</td>
                  <td className={TD}>{en ? "No duty to carry warnings (cell broadcast or SMS) has been documented. The sector has instead been subject to shutdown orders: township-level in Rakhine and Chin (June 2019 to February 2020) and nationwide mobile internet from 15 March 2021." : "警報配信（セルブロードキャストや SMS）の義務規定は確認されていない。むしろ通信遮断命令の対象となってきた（ラカイン・チン州の郡単位の遮断：2019年6月〜2020年2月、全国のモバイル通信遮断：2021年3月15日）。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                The Law settles four things clearly: the declaration of a disaster-affected area belongs to the President (s.11); the direction to evacuate belongs to the Region/State bodies (s.9(i)); refusal to evacuate is an offence (s.31); and warning dissemination is a function of the centre created under the national committee (s.5(h)). All four have been exercised since 2021 by the military administration. After Cyclone Mocha the SAC declared 17 Rakhine townships (15 May 2023, Announcement No. 1/2023) and four Chin townships (16 May 2023, Announcement No. 2/2023) disaster-affected areas under section 11, and SAC Order No. 34/2023 of 18 May 2023 assigned lieutenant-generals and brigadier-generals as rehabilitation leads by township. Three days earlier, on 12 May 2023, seven Rakhine townships had been designated red-level with a warning that people who stayed would face prosecution under the Law. What the Law leaves open is equally important. It never names DMH, so the authority of the meteorological service to issue warnings rests on its departmental mandate and on the Standing Order rather than on statute. Evacuation authority is split: section 9(i) directs, section 31 enforces, yet section 36 requires consent for pre-disaster evacuation; the then Relief and Resettlement Department itself listed law enforcement for evacuation as a gap in its 2016 lessons from the 2015 floods. The relative weight of the Standing Order and the Rules was questioned by IFRC in 2016 and has not been clarified in any public text.
              </>
            ) : (
              <>
                同法が明確に定めているのは四点です。被災地域の宣言は大統領の権限（11条）、避難の指示は地域・州機関の権限（9条(i)）、避難拒否は犯罪（31条）、警報の伝達は国家委員会の下に設置するセンターの機能（5条(h)）です。この四つはいずれも2021年以降、軍政によって行使されてきました。サイクロン・モカの後、SAC は11条に基づきラカイン州17郡（2023年5月15日、告示1/2023）とチン州4郡（5月16日、告示2/2023）を被災地域と宣言し、5月18日の SAC 命令34/2023で郡ごとに中将・准将を復興責任者に任命しました。その3日前の5月12日には、ラカイン州7郡を「赤レベル」に指定し、残留者は同法により訴追されると警告しています。同法が定めていないことも同じく重要です。DMH を一度も名指ししないため、気象機関が警報を出す権限は法律ではなく部局の所掌と常設命令に依拠します。避難権限は分裂しており、9条(i)が指示し31条が強制する一方で、36条は災害発生前の避難に住民の同意を求めています。当時の救済再定住局（RRD）自身が、2015年洪水の教訓（2016年）で「避難の法執行」を課題として挙げました。常設命令と規則の優劣は2016年に IFRC が疑問を提起し、以後も公開文書で整理されていません。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                A redraft of the Law, possibly dropping the word Natural from its title, was reported before 2021, but no evidence was found that a new law was enacted; the ADRC report and official usage now say Disaster Management Law and Rules while still citing the 2013 statute. No evidence was found either way that the SAC (2021&ndash;2025) or the parliament convened in March 2026 has amended the disaster legislation. The provisions of the Ward or Village Tract Administration Law (2012, as amended) and of the Myanmar National Building Code (2016, revised 2020) that bear on preparedness could not be verified from primary texts and are not discussed here.
              </>
            ) : (
              <>
                同法の改正草案（名称から「自然」を外す案）が2021年以前に報じられましたが、新法が制定された証拠は見つかっていません。ADRC 報告や公式の用語法は現在「災害管理法・規則」と呼びつつ、根拠として2013年法を引いています。SAC（2021〜2025年）や2026年3月に召集された議会が災害法制を改正したという証拠も、していないという証拠も確認できていません。区・村落区行政法（2012年、改正あり）とミャンマー国家建築基準（2016年、2020年改訂）の準備・警報に関わる規定は一次資料で確認できなかったため、本稿では扱いません。
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
                In form, the institutional map is the one built in 2013&ndash;2016: the National Disaster Management Committee (NDMC), twelve work committees each chaired by a Union Minister (the last four by Deputy Ministers), Region/State bodies under Chief Ministers, and district, township, ward and village-tract bodies chaired by GAD administrators. The Department of Disaster Management (DDM), successor to the Relief and Resettlement Department, runs the Disaster Management Centre and the Emergency Operations Centre and is the national disaster management organisation recognised by ASEAN; DMH is the only producer of meteorological, hydrological and seismic warnings. Since 2021 a parallel set of actors has grown outside the control of the de facto authorities: the NUG humanitarian ministry and ethnic organisations that issue their own warnings and run their own relief.
              </>
            ) : (
              <>
                制度の骨格は2013〜2016年に築かれたものがそのまま残っています。国家災害管理委員会（NDMC）、連邦大臣が議長を務める12の作業委員会（後ろの4つは副大臣）、首席大臣の下の地域・州機関、GAD 行政官が長を務める県・郡・区・村落区の機関という構造です。救済再定住局の後身である災害管理局（DDM）が災害管理センター（DMC）と緊急オペレーションセンター（EOC）を運営し、ASEAN が認める国家防災機関（NDMO）となっています。DMH は気象・水文・地震の警報を生産する唯一の機関です。2021年以降は、事実上の当局の統制外で、NUG の人道担当省や独自に警報と救援を行う民族組織という並行アクターが育っています。
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
                  <td className={TDH}>{en ? "DMH (Department of Meteorology and Hydrology)" : "DMH（Department of Meteorology and Hydrology、気象水文局）"}</td>
                  <td className={TD}>{en ? "Ministry of Transport and Communications; since the April 2026 cabinet apparently the Ministry of Transport" : "運輸通信省。2026年4月の内閣発足後は「運輸省」と表記"}</td>
                  <td className={TD}>{en ? "Departmental mandate and the Standing Order; not named in the 2013 Law" : "部局の所掌と常設命令。2013年法に名指しなし"}</td>
                  <td className={TD}>{en ? "Sole producer of cyclone, flood, strong-wind, heavy-rainfall, low-water, tsunami and seismic bulletins; eight divisions including hydrology and seismology, a Multi-Hazard Early Warning Center and the National Earthquake Data Center; operates three radars; sends warnings to the NDMC, ministers and broadcasters and to the public via website, social media and hotline" : "サイクロン・洪水・強風・大雨・低水位・津波・地震の各情報を発表する唯一の機関。水文・地震を含む8部門、多災害早期警報センター、国家地震データセンターを持つ。レーダー3基を運用。警報を NDMC・大臣・放送局に送り、ウェブ・SNS・ホットラインで公衆に伝える"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "DDM (Department of Disaster Management, formerly RRD)" : "DDM（Department of Disaster Management、災害管理局。旧 RRD）"}</td>
                  <td className={TD}>{en ? "MSWRR (Ministry of Social Welfare, Relief and Resettlement)" : "MSWRR（社会福祉・救済・再定住省）"}</td>
                  <td className={TD}>{en ? "Law ss.6, 10, 43(b); Rules 6 and 12" : "法6条・10条・43条(b)、規則6・12"}</td>
                  <td className={TD}>{en ? "Runs the DMC and the national EOC (set up 28 July 2015); collects DMH information in normal times; produces infographics and maps in disasters; relays warnings via social media and the Myanmar Disaster Alert app; runs the Disaster Management Training Centre (Ayeyarwady, 2015) and drills; counterpart of the AHA Centre and ASEAN NDMO" : "DMC と国家 EOC（2015年7月28日設置）を運営。平時は DMH の情報を収集し、災害時にはインフォグラフィックや地図を作成。SNS と Myanmar Disaster Alert アプリで警報を転送。災害管理訓練センター（エーヤワディ、2015年）と訓練を実施。AHA センターの対応機関で ASEAN の NDMO"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "NDMC (National Disaster Management Committee) and 12 work committees" : "NDMC（National Disaster Management Committee、国家災害管理委員会）と12作業委員会"}</td>
                  <td className={TD}>{en ? "Union Government; chaired by a Vice-President under s.4; 2021–2025 chaired by SAC Vice-Chairman Vice-Senior General Soe Win; chair after April 2026 not confirmed" : "連邦政府。4条により副大統領が議長。2021〜2025年は SAC 副議長ソーウィン（Soe Win）副上級大将。2026年4月以降の議長は未確認"}</td>
                  <td className={TD}>{en ? "Law ss.4–5" : "法4〜5条"}</td>
                  <td className={TD}>{en ? "Leading body; establishes the warning-dissemination centre (s.5(h)); coordinates evacuation (s.5(i)); reports to the President for declarations (s.5(f)); convenes emergency meetings and activates the DMC (8 May 2023, 13 September 2024, 29 March 2025). Ministers of Defence are members; work committees include Security, News and Information, and Search and Rescue" : "最上位機関。警報伝達センターの設置（5条(h)）、避難の調整（5条(i)）、大統領への宣言上申（5条(f)）。緊急会議を開き DMC を起動（2023年5月8日、2024年9月13日、2025年3月29日）。国防相も構成員で、作業委員会には治安、報道・情報、捜索救助が含まれる"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "President" : "大統領"}</td>
                  <td className={TD}>{en ? "Union Government (power exercised by the SAC in 2023; President Min Aung Hlaing since 10 April 2026)" : "連邦政府（2023年は SAC が行使。2026年4月10日以降はミンアウンフライン（Min Aung Hlaing）大統領）"}</td>
                  <td className={TD}>{en ? "Law ss.11–12" : "法11〜12条"}</td>
                  <td className={TD}>{en ? "Declares, extends or alters a natural disaster affected area on the report of the NDMC or by other means" : "NDMC の上申または他の手段により「自然災害被災地域」を宣言・延長・変更"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Region/State Natural Disaster Management Bodies" : "地域・州自然災害管理機関"}</td>
                  <td className={TD}>{en ? "Region/State governments; chaired by Chief Ministers; GAD directors serve as secretaries of the governments" : "地域・州政府。首席大臣が議長。GAD 局長が政府書記を兼務"}</td>
                  <td className={TD}>{en ? "Law ss.7, 9, 10" : "法7・9・10条"}</td>
                  <td className={TD}>{en ? "Monitor potential disasters and report imminent ones (s.9(b)); direct the population to leave areas and buildings at risk and arrange evacuation (s.9(i)); supervise Region/State Relief and Resettlement Offices (s.10)" : "災害の兆候を監視し切迫した災害を速報（9条(b)）。危険地域・建物からの退去を住民に指示し避難を手配（9条(i)）。地域・州の救済再定住事務所を監督（10条）"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "District, township, ward and village-tract bodies" : "県・郡・区・村落区の災害管理機関"}</td>
                  <td className={TD}>{en ? "Formed by Region/State governments; chaired by the GAD administrator of each level" : "地域・州政府が設置。各級の GAD 行政官が議長"}</td>
                  <td className={TD}>{en ? "Law s.8" : "法8条"}</td>
                  <td className={TD}>{en ? "Last mile of the official chain: local governments share forecasts and warnings with the public through their subordinate offices; door-to-door awareness drives (El Niño campaigns in Wakhema and Hpa-An, October–November 2026); evacuation to cyclone shelters and school-cum-shelters" : "公式経路の最終段。地方政府は下部機関を通じて予報・警報を住民に伝達。戸別の啓発（2026年10〜11月のワケマ・パアンでのエルニーニョ啓発）、サイクロンシェルターや学校兼シェルターへの避難誘導"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "GAD (General Administration Department)" : "GAD（General Administration Department、総務局）"}</td>
                  <td className={TD}>{en ? "Ministry of Home Affairs (MOHA); under the Ministry of the Office of the Union Government from 28 December 2018 to 5 May 2021" : "内務省（MOHA）。2018年12月28日〜2021年5月5日は連邦政府府省の下"}</td>
                  <td className={TD}>{en ? "SAC Order No. 119/2021; Law s.8 (chairs of local bodies)" : "SAC 命令119/2021、法8条（地方機関の議長）"}</td>
                  <td className={TD}>{en ? "Staffs all Region/State governments and administers townships, wards and village tracts; receives DMH warnings as a ministry-level recipient; co-executes early warning dissemination and relief distribution with the DDM" : "全ての地域・州政府に職員を配置し、郡・区・村落区を管理。DMH 警報の省レベルの受信先。DDM と共同で警報伝達と救援物資配布を実施"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Fire Services Department; Myanmar Police Force" : "消防局（Fire Services Department）、ミャンマー警察"}</td>
                  <td className={TD}>{en ? "MOHA" : "内務省（MOHA）"}</td>
                  <td className={TD}>{en ? "Law s.15(g); Standing Order" : "法15条(g)、常設命令"}</td>
                  <td className={TD}>{en ? "First responders; the Fire Services Department monitors river levels locally (Mandalay, July 2024) and takes part in DDM drills; police among the designated recipients of JICA-funded radar products" : "初動対応機関。消防局は河川水位を現地で監視（2024年7月、マンダレー）し DDM の訓練に参加。警察は JICA 供与レーダー情報の利用先の一つ"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Defence Services (Tatmadaw)" : "国軍（Defence Services、Tatmadaw）"}</td>
                  <td className={TD}>{en ? "Ministry of Defence" : "国防省"}</td>
                  <td className={TD}>{en ? "Law s.15(g); Standing Order (four disaster phases)" : "法15条(g)、常設命令（災害4段階）"}</td>
                  <td className={TD}>{en ? "Assistance in large-scale disasters; minister and deputy minister of defence sit on the NDMC and work committees; after Mocha, generals were appointed as township rehabilitation leads (SAC Order 34/2023)" : "大規模災害での支援。国防相・副大臣が NDMC と作業委員会に参加。モカ後は将官が郡ごとの復興責任者に任命された（SAC 命令34/2023）"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "State broadcasters and press (MRTV, MRTV-4, Myawaddy TV, Myanmar Voice, City FM)" : "国営・軍系放送と報道（MRTV、MRTV-4、ミャワディ TV、Myanmar Voice、City FM）"}</td>
                  <td className={TD}>{en ? "Ministry of Information; Myawaddy TV is military-owned" : "情報省。ミャワディ TV は軍所有"}</td>
                  <td className={TD}>{en ? "News and Information work committee of the NDMC; Standing Order" : "NDMC の報道・情報作業委員会、常設命令"}</td>
                  <td className={TD}>{en ? "Broadcast DMH cyclone bulletins at stage-dependent frequency (two to six times per hour on radio) with TV subtitles; radio broadcasting hours 05:00–23:00 as of 2014" : "DMH のサイクロン情報を段階別の頻度（ラジオで毎時2〜6回）で放送し TV に字幕表示。2014年時点でラジオ放送は5時〜23時"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Mobile operators (MPT, Atom, Ooredoo, Mytel)" : "通信事業者（MPT、Atom、Ooredoo、Mytel）"}</td>
                  <td className={TD}>{en ? "Former Ministry of Transport and Communications; from April 2026 a Ministry of Digital Development and Communications" : "旧運輸通信省。2026年4月以降はデジタル開発通信省"}</td>
                  <td className={TD}>{en ? "Telecommunications Law 2013" : "2013年電気通信法"}</td>
                  <td className={TD}>{en ? "No documented cell-broadcast or SMS alerting role; mobile penetration rose from about 3 per cent (2008) to about 90 per cent (2017), but operators have also executed shutdown orders" : "セルブロードキャストや SMS 警報の役割は文書上確認されない。携帯普及率は約3%（2008年）から約90%（2017年）に上昇したが、事業者は通信遮断命令の実行主体でもある"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "MRCS (Myanmar Red Cross Society)" : "MRCS（Myanmar Red Cross Society、ミャンマー赤十字社）"}</td>
                  <td className={TD}>{en ? "National society; Disaster Management Division at headquarters" : "国内赤十字社。本部に災害管理部"}</td>
                  <td className={TD}>{en ? "Burma Red Cross Act 1959 (amended 1964, 1971, 1988); Law s.15(g)" : "1959年ビルマ赤十字法（1964・1971・1988年改正）、法15条(g)"}</td>
                  <td className={TD}>{en ? "Over 250,000 volunteers in 330 township branches; MRCS EOC opened 28 July 2015; more than 1,400 volunteers supported evacuations in the 2015 floods; member of the DRR Working Group; the Tachileik branch was destroyed in the 2024 floods" : "330郡支部に25万人超のボランティア。2015年7月28日に MRCS の EOC を開設。2015年洪水では1,400人超が避難支援。DRR ワーキンググループの構成員。2024年洪水でタチレク支部が損壊"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "NUG Ministry of Humanitarian Affairs and Disaster Management (MoHADM)" : "NUG 人道問題・災害管理省（Ministry of Humanitarian Affairs and Disaster Management、MoHADM）"}</td>
                  <td className={TD}>{en ? "National Unity Government (formed 16 April 2021 by the CRPH; not recognised by any state); minister Win Myat Aye, MSWRR minister 2016–2021; the ministry name varies across NUG pages" : "国民統一政府（2021年4月16日に CRPH が設立。いずれの国家からも未承認）。大臣は2016〜2021年に MSWRR 大臣だったウィンミャッエー（Win Myat Aye）。省名は NUG のページ間で表記が異なる"}</td>
                  <td className={TD}>{en ? "None under Union law" : "連邦法上の根拠なし"}</td>
                  <td className={TD}>{en ? "Issues its own flood warnings (Rakhine coast, Ayeyarwady delta, Mon and Tanintharyi, July 2024), casualty and impact figures (earthquake 2025; upper Myanmar floods August 2026) and relief; joint aid guidelines with KNU, KNPP and CNF (17 September 2024)" : "独自の洪水警報（2024年7月、ラカイン沿岸・エーヤワディデルタ・モン・タニンダーリ）、死者・被災者の集計（2025年地震、2026年8月の上ミャンマー洪水）、救援を実施。KNU・KNPP・CNF と共同の支援ガイドライン（2024年9月17日）"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Ethnic organisations: ULA/AA Humanitarian and Development Coordination Office (HDCO), KNU, KNPP, CNF, RCSS" : "民族組織：ULA/AA 人道開発調整室（HDCO）、KNU、KNPP、CNF、RCSS"}</td>
                  <td className={TD}>{en ? "Ethnic resistance administrations" : "民族抵抗組織の行政機構"}</td>
                  <td className={TD}>{en ? "None under Union law" : "連邦法上の根拠なし"}</td>
                  <td className={TD}>{en ? "The HDCO issued cyclone warnings from 7 May 2023 and evacuated more than 102,000 people in Rakhine on 9–13 May 2023; RCSS formed relief committees in September 2024; recipients of aid under the NUG–K2C guidelines" : "HDCO は2023年5月7日からサイクロン警報を出し、5月9〜13日にラカイン州で10万2,000人超を避難させた。RCSS は2024年9月に救援委員会を設置。NUG と K2C のガイドラインで支援の受け手に位置づけられる"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "AHA Centre; DRR Working Group (UNDP chair)" : "AHA センター、DRR ワーキンググループ（UNDP 議長）"}</td>
                  <td className={TD}>{en ? "ASEAN; UN and NGO coordination in Myanmar" : "ASEAN、国連・NGO の国内調整枠組み"}</td>
                  <td className={TD}>{en ? "ASEAN disaster-management cooperation; DDM reports to the AHA Centre" : "ASEAN の防災協力枠組み。DDM が AHA センターへ報告"}</td>
                  <td className={TD}>{en ? "The DDM EOC is linked to the AHA Centre EOC; ASEAN-ERAT deployed after the 2025 earthquake; DELSA relief mobilised for the 2026 floods at the request of the DDM; the DRR Working Group has the DDM Director-General as honorary chair" : "DDM の EOC は AHA センターの EOC と接続。2025年地震で ASEAN-ERAT を派遣、2026年洪水では DDM の要請で DELSA 物資を動員。DRR ワーキンググループは DDM 局長を名誉議長とする"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Dam operators (irrigation department of MOALI; electricity ministry for hydropower)" : "ダム管理者（農業畜産灌漑省の灌漑部門、電力省系の水力発電）"}</td>
                  <td className={TD}>{en ? "Ministry of Agriculture, Livestock and Irrigation; Ministry of Electricity and Energy (2026 cabinet)" : "農業畜産灌漑省、電力エネルギー省（2026年内閣）"}</td>
                  <td className={TD}>{en ? "Not documented" : "文書上不明"}</td>
                  <td className={TD}>{en ? "No public protocol for pre-release notification was located; dam releases were alleged in the Taungoo floods of August 2024 and the upper Myanmar floods of August 2026, and five dams were reported damaged in the 2024 floods" : "放流事前通知の公開プロトコルは見つからない。2024年8月のタウングー洪水と2026年8月の上ミャンマー洪水で放流が指摘され、2024年洪水では5つのダムが損傷したと報告された"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                The <strong className="text-foreground">DMH (Department of Meteorology and Hydrology)</strong> covers the monitoring and forecasting pillar alone. It is headquartered in Nay Pyi Taw and organised in eight divisions (meteorology, hydrology, agro-meteorology, aviation meteorology, seismology, upper and lower Myanmar, engineering), with a Multi-Hazard Early Warning Center and the National Earthquake Data Center for seismic monitoring and tsunami warning. In July 2025 it described early warning as its main responsibility, listing automatic observation, three installed radars, Himawari-8 and CMA satellite data, WRF and Diana numerical prediction, two seasonal forecasts a year and a National Monsoon Forum. Its warnings go first to the higher authorities (the NDMC and the ministers responsible for transport, relief and resettlement and general administration), then to broadcasters, and to the public through its website, Facebook page and hotline. Because the Law does not name it, DMH has no statutory monopoly on warning: its authority is professional and administrative.
              </>
            ) : (
              <>
                <strong className="text-foreground">DMH（Department of Meteorology and Hydrology、気象水文局）</strong>は、監視・予測の柱を単独で担います。本部はネピドーにあり、気象・水文・農業気象・航空気象・地震・上ミャンマー・下ミャンマー・工務の8部門に、多災害早期警報センターと、地震観測・津波警報を担う国家地震データセンターを備えます。2025年7月の自己紹介では早期警報を「主たる責務」と位置づけ、自動観測、設置済みレーダー3基、ひまわり8号と中国気象局の衛星データ、WRF と Diana による数値予報、年2回の季節予報、国家モンスーンフォーラムを挙げています。警報はまず上位当局（NDMC、運輸・救済再定住・総務を担当する大臣）に、次いで放送局に送られ、ウェブサイト・Facebook・ホットラインで公衆に届きます。法律が名指ししていないため、DMH は警報発表の法的独占権を持たず、その権威は専門性と行政慣行に基づくものです。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The <strong className="text-foreground">DDM (Department of Disaster Management)</strong> and the <strong className="text-foreground">NDMC</strong> hold the dissemination and response pillars. The DDM performs the functions of the Disaster Management Centre under the Rules, runs the national EOC that is linked to the AHA Centre EOC, relays DMH products on its website and app, trains ward and village-tract administrators (a course in Tatkon on 13 October 2026) and organises drills with the Fire Services Department, the Department of Public Health, the GAD and the MRCS. The NDMC provides the political authority: it met on 6 May 2023 before Mocha and activated the DMC on 8 May; it met with the Chief Ministers on 13 September 2024 during the Yagi floods and activated the DMC the same day; and it met on 29 March 2025, the day after the earthquake, activating the DMC and a Reception and Departure Centre for search-and-rescue and medical teams from 25 partner countries. The DMC then ran for about six months after Mocha, four months after Yagi and six months after the earthquake. Expenditure of the committee is borne by the MSWRR budget (s.33).
              </>
            ) : (
              <>
                <strong className="text-foreground">DDM（Department of Disaster Management、災害管理局）</strong>と<strong className="text-foreground">NDMC</strong>は、伝達と対応の柱を担います。DDM は規則上の災害管理センターの機能を果たし、AHA センターの EOC と接続された国家 EOC を運営し、DMH の情報をウェブサイトとアプリで転送し、区・村落区行政官の研修（2026年10月13日、タッコン）や、消防局・公衆衛生局・GAD・MRCS との訓練を実施しています。NDMC は政治的権威を与える機関です。モカの前の2023年5月6日に会議を開き5月8日に DMC を起動、ヤギ洪水では2024年9月13日に首席大臣を集めた会議を開いて同日に DMC を起動、地震翌日の2025年3月29日に会議を開いて DMC と、25か国からの捜索救助・医療チームを受け入れる受付・出国センターを稼働させました。DMC はモカ後に約6か月、ヤギ後に約4か月、地震後に約6か月運用されました。委員会の経費は MSWRR の予算で賄われます（33条）。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The <strong className="text-foreground">GAD</strong> and the security ministries supply the last mile. GAD officers chair every sub-national committee below the Region/State level and double as secretaries of the Region/State governments, so the official chain from Nay Pyi Taw to a village tract is an internal GAD line. The GAD sat under the Ministry of the Office of the Union Government from 28 December 2018, a civilian-era reform, and was returned to the Ministry of Home Affairs by SAC Order No. 119/2021 on 5 May 2021; the Ministry of Home Affairs is one of the three ministries reserved to the military under the 2008 Constitution and also houses the Police and the Fire Services Department. The Standing Order assigns the Tatmadaw roles in each of four disaster phases, and large-scale disasters still require its support. In the township and village, the same administrator who chairs the disaster committee compiled the voter lists for the 2025&ndash;2026 elections and was a target of resistance attacks.
              </>
            ) : (
              <>
                <strong className="text-foreground">GAD</strong>と治安関係省庁がラストマイルを担います。GAD の職員は地域・州より下の全ての委員会で議長を務め、地域・州政府の書記も兼ねるため、ネピドーから村落区までの公式経路は GAD の内部系統そのものです。GAD は文民政権期の改革で2018年12月28日に連邦政府府省の下へ移されましたが、2021年5月5日の SAC 命令119/2021で内務省に戻されました。内務省は2008年憲法で軍に留保された3省の一つで、警察と消防局も抱えます。常設命令は国軍に災害4段階ごとの役割を割り当て、大規模災害では依然として軍の支援が必要とされています。郡や村落では、災害委員会の議長を務める行政官が2025〜2026年選挙の有権者名簿を作成し、抵抗勢力の攻撃対象にもなりました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Outside the official chain, the <strong className="text-foreground">MRCS</strong>, with more than 250,000 volunteers in 330 township branches, is the largest community actor and a formal auxiliary under section 15(g). The <strong className="text-foreground">NUG humanitarian ministry</strong>, headed by the former MSWRR minister Win Myat Aye, issued flood warnings in July 2024 alongside DMH alerts and publishes its own impact figures; on 17 September 2024 it adopted joint guidelines with the KNU, KNPP and CNF asking donors to channel aid directly to its personnel, ethnic resistance administrations and local civil society. The <strong className="text-foreground">ULA/AA</strong> ran a complete warning-and-evacuation operation before Mocha through its HDCO. These parallel actors have no standing under Union law and, in May 2023, soldiers destroyed HDCO cyclone-awareness posters in Kyaukphyu. The <strong className="text-foreground">AHA Centre</strong>, finally, works government-to-NDMO: its situation updates encourage partners to reach out directly to the DDM, which means that regional data on Myanmar reflects the areas the DDM can report on.
              </>
            ) : (
              <>
                公式経路の外では、330郡支部に25万人超のボランティアを持つ<strong className="text-foreground">MRCS</strong>が最大のコミュニティ側アクターであり、15条(g)上の公的な補助組織でもあります。元 MSWRR 大臣ウィンミャッエーが率いる<strong className="text-foreground">NUG の人道担当省</strong>は、2024年7月に DMH の警報と並行して独自の洪水警報を出し、独自の被害集計を公表しています。2024年9月17日には KNU・KNPP・CNF と共同で、支援を同省の要員・民族抵抗組織の行政機構・地元市民社会へ直接届けるよう求めるガイドラインを採択しました。<strong className="text-foreground">ULA/AA</strong>は HDCO を通じてモカの前に警報から避難まで一貫した運用を行いました。これらの並行アクターは連邦法上の地位を持たず、2023年5月にはチャウピューで兵士が HDCO のサイクロン啓発ポスターを破棄しています。最後に<strong className="text-foreground">AHA センター</strong>は政府対 NDMO の枠組みで動き、状況報告ではパートナーに「DDM に直接連絡する」よう促しています。つまり ASEAN が持つミャンマーのデータは、DDM が報告できる地域のものに限られます。
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
                The official chain is top-down and administrative. It starts with DMH products, passes through the NDMC and the DDM, descends through Region/State governments and the GAD line to the ward or village-tract administrator, and is mirrored by state broadcasters. Where that line is contested or absent, a second chain operated by the NUG, ethnic organisations, charities and religious institutions takes its place.
              </>
            ) : (
              <>
                公式の流れは上意下達の行政経路です。DMH の情報から始まり、NDMC と DDM を経て、地域・州政府と GAD の系統を下って区・村落区の行政官に至り、国営放送がそれを並行して流します。この系統が争われていたり存在しなかったりする地域では、NUG・民族組織・慈善団体・宗教施設が運用する第二の経路がそれに代わります。
              </>
            )}
          </p>
          <ol className={OL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Monitoring and forecasting (DMH).</strong> Three radars, Himawari-8 and CMA satellite imagery, automatic stations and WRF/Diana models; cyclone track and intensity guidance taken mainly from RSMC New Delhi, CIMSS and JTWC, storm-surge advisories from RSMC New Delhi, IIT and JMA models issued 36&ndash;48 hours before landfall; river forecasts for the Ayeyarwady, Chindwin and eight major basins with lead times of one to two days (short range) and three to five days (delta), using regression, Sacramento, HBV and Tank models.
                </>
              ) : (
                <>
                  <strong className="text-foreground">監視・予測（DMH）。</strong>レーダー3基、ひまわり8号と中国気象局の衛星画像、自動観測、WRF・Diana モデル。サイクロンの進路・強度は主に RSMC ニューデリー、CIMSS、JTWC の情報に依拠し、高潮情報は RSMC ニューデリー・IIT・JMA のモデルから上陸36〜48時間前に発表。河川予報はエーヤワディ川・チンドウィン川と主要8流域を対象に、短期で1〜2日、デルタでは3〜5日のリードタイム（回帰・Sacramento・HBV・Tank モデル）。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Issuing bulletins (DMH).</strong> A Cyclone News bulletin when a storm moves away and a numbered Cyclone Warning when it heads for the coast (Cyclonic Storm Warning No. 33 for Mocha, 15 May 2023); flood alerts naming each station above danger level (in July 2024 seven Chindwin and eight Ayeyarwady stations, Mandalay 38 cm above); seismic reports after each event. Recipients are the higher authorities, local authorities, relevant ministries and the public, by telephone and SSB transceiver for departments and by radio, TV, press, website and Facebook for the public.
                </>
              ) : (
                <>
                  <strong className="text-foreground">情報の発表（DMH）。</strong>サイクロンが遠ざかる場合は「Cyclone News」、沿岸に向かう場合は番号付きの「Cyclone Warning」（モカでは2023年5月15日に第33号）。洪水は危険水位を超えた観測所名を列挙する警報（2024年7月はチンドウィン川7地点・エーヤワディ川8地点、マンダレーは38 cm 超過）。地震は発生後の地震情報。宛先は上位当局・地方当局・関係省庁・公衆で、省庁には電話と SSB 無線、公衆にはラジオ・TV・新聞・ウェブ・Facebook。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Activation (NDMC and DDM).</strong> The NDMC convenes an emergency coordination meeting and activates the Disaster Management Centre (8 May 2023, 13 September 2024, 29 March 2025); the DDM EOC produces maps and infographics, relays warnings on social media and the Myanmar Disaster Alert app and reports to the AHA Centre EOC.
                </>
              ) : (
                <>
                  <strong className="text-foreground">起動（NDMC・DDM）。</strong>NDMC が緊急調整会議を開き災害管理センターを起動（2023年5月8日、2024年9月13日、2025年3月29日）。DDM の EOC が地図とインフォグラフィックを作成し、SNS と Myanmar Disaster Alert アプリで警報を転送し、AHA センターの EOC に報告。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Political decisions (Region/State bodies; President).</strong> Chief Ministers direct the population to leave areas at risk (s.9(i)); the President, or in 2023 the SAC, declares disaster-affected areas (s.11). Before Mocha the SAC designated seven Rakhine townships red-level on 12 May 2023 with a threat of prosecution; the authorities reported more than 78,250 people evacuated including 18,800 displaced persons, shelters stocked for 100,000, and 3,207 search-and-rescue personnel on standby.
                </>
              ) : (
                <>
                  <strong className="text-foreground">政治的決定（地域・州機関、大統領）。</strong>首席大臣が危険地域からの退去を住民に指示（9条(i)）し、大統領（2023年は SAC）が被災地域を宣言（11条）。モカの前、SAC は2023年5月12日にラカイン州7郡を「赤レベル」に指定し訴追を警告。当局は国内避難民1万8,800人を含む7万8,250人超を避難させ、10万人分のシェルターを備蓄し、捜索救助要員3,207人を待機させたと報告。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Last mile (GAD administrators, DDM, Fire Services, MRCS, volunteers).</strong> Township and ward or village-tract administrators pass the warning on through subordinate offices and door-to-door visits and organise evacuation to cyclone shelters, multipurpose shelters and school-cum-shelters built since 2008; wilful refusal is punishable under section 31, but pre-disaster evacuation requires consent under section 36. In July 2024 charities moved more than 1,000 people to pagodas and monasteries in Mandalay after a flood alert in Amarapura.
                </>
              ) : (
                <>
                  <strong className="text-foreground">ラストマイル（GAD 行政官、DDM、消防局、MRCS、ボランティア）。</strong>郡と区・村落区の行政官が下部機関や戸別訪問で警報を伝え、2008年以降に整備されたサイクロンシェルター・多目的シェルター・学校兼シェルターへの避難を組織。故意の拒否は31条で処罰され得るが、災害前の避難は36条により同意を要する。2024年7月にはアマラプラへの洪水警報の後、慈善団体がマンダレーで1,000人超をパゴダや僧院へ移送。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Parallel chain (NUG, ethnic organisations).</strong> In areas outside stable military control, the NUG humanitarian ministry issues its own warnings (July 2024) and ethnic administrations warn and evacuate: the ULA/AA HDCO began cyclone warnings on 7 May 2023 and evacuated more than 102,000 people between 9 and 13 May. The two chains do not exchange information through any recognised mechanism.
                </>
              ) : (
                <>
                  <strong className="text-foreground">並行経路（NUG、民族組織）。</strong>軍の安定的統制外の地域では、NUG の人道担当省が独自の警報を出し（2024年7月）、民族組織の行政機構が警報と避難を担う。ULA/AA の HDCO は2023年5月7日にサイクロン警報を開始し、5月9〜13日に10万2,000人超を避難させた。二つの経路の間に、公式に認められた情報交換の仕組みはない。
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
                  <td className={TDH}>{en ? "Tropical cyclone" : "サイクロン"}</td>
                  <td className={TD}>DMH</td>
                  <td className={TD}>{en ? "Five colour stages used since the 2009 season: Yellow (storm formed, not moving toward the Myanmar coast), Orange (heading toward the coast), Red (expected to cross the coast within 12 hours), Brown (crossing the coast), Green (abated). Seven intensity categories from Low Pressure Area (under 20 mph) to Super Cyclonic Storm (138 mph or more). Text bulletins three times a day, four to six times a day at emergency colours." : "2009年期から5色の段階：黄（発生したがミャンマー沿岸に向かっていない）、橙（沿岸に向かっている）、赤（12時間以内に上陸見込み）、茶（上陸中）、緑（衰弱）。強度は低圧部（20 mph 未満）から超サイクロン（138 mph 以上）まで7区分。文字情報を1日3回、緊急色では1日4〜6回更新。"}</td>
                  <td className={TD}>{en ? "Radio two to three times per hour at Yellow, three to four at Orange with TV subtitles, three to six in the 12 hours before landfall at Red; TV; press; website and Facebook; hotline; telephone and SSB to departments" : "ラジオは黄で毎時2〜3回、橙で3〜4回＋TV 字幕、赤では上陸前12時間に毎時3〜6回。TV、新聞、ウェブ・Facebook、ホットライン。省庁へは電話と SSB 無線"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Storm surge" : "高潮"}</td>
                  <td className={TD}>DMH</td>
                  <td className={TD}>{en ? "Advisory issued 36–48 hours before landfall based on RSMC New Delhi, IIT and JMA model guidance" : "RSMC ニューデリー・IIT・JMA モデルに基づき上陸36〜48時間前に発表"}</td>
                  <td className={TD}>{en ? "Included in cyclone bulletins" : "サイクロン情報に含めて伝達"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "River flood" : "河川洪水"}</td>
                  <td className={TD}>DMH</td>
                  <td className={TD}>{en ? "Station-by-station exceedance of danger level with the margin in centimetres or feet and a 24-hour outlook (Sittaung about five feet above danger level, September 2024); flash floods in small catchments remain outside the system" : "観測所ごとの危険水位超過を超過量（cm またはフィート）と24時間見通し付きで発表（2024年9月のシッタン川は危険水位を約5フィート超過）。小流域の鉄砲水は対象外"}</td>
                  <td className={TD}>{en ? "Website and Facebook; broadcasters; GAD and DDM line; Fire Services Department monitoring on the ground; the NUG issued parallel warnings in July 2024" : "ウェブ・Facebook、放送、GAD と DDM の系統、消防局の現地監視。2024年7月には NUG が並行して警報"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Strong wind, heavy rainfall, untimely rainfall, minimum water level" : "強風・大雨・季節外れの降雨・低水位"}</td>
                  <td className={TD}>DMH</td>
                  <td className={TD}>{en ? "Warning types listed on the DMH site; no public colour scale documented" : "DMH サイトに列挙された警報種別。公表された色区分はない"}</td>
                  <td className={TD}>{en ? "Same as above; relayed by the DDM" : "上と同じ。DDM が転送"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Earthquake and tsunami" : "地震・津波"}</td>
                  <td className={TD}>{en ? "DMH National Earthquake Data Center" : "DMH 国家地震データセンター"}</td>
                  <td className={TD}>{en ? "No earthquake early warning; post-event magnitude and location reports (M3.8 near Taungoo, 8 November 2026); tsunami early warning function" : "地震早期警報はなし。発生後の規模・位置情報（2026年11月8日、タウングー近傍 M3.8）。津波早期警報機能"}</td>
                  <td className={TD}>{en ? "DMH and DDM websites; media" : "DMH・DDM のウェブサイト、メディア"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Drought and El Niño" : "干ばつ・エルニーニョ"}</td>
                  <td className={TD}>DMH; DDM</td>
                  <td className={TD}>{en ? "Seasonal forecasts twice a year and the National Monsoon Forum; an El Niño warning of about 22 May 2026 projected a weak phase from June with a strong probability of a major event by late 2026" : "年2回の季節予報と国家モンスーンフォーラム。2026年5月22日頃のエルニーニョ警報は6月から弱い位相、2026年後半に大規模化する可能性が高いと予測"}</td>
                  <td className={TD}>{en ? "Sector advisories to agriculture, water management and public health; DDM door-to-door awareness drives (October–November 2026)" : "農業・水管理・公衆衛生部門への助言。DDM の戸別啓発（2026年10〜11月）"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Administrative emergency status" : "行政上の緊急事態レベル"}</td>
                  <td className={TD}>{en ? "NDMC / MSWRR under the 2015 Rules" : "NDMC・MSWRR（2015年規則）"}</td>
                  <td className={TD}>{en ? "Five Emergency Status Levels: Level 5 ward or village tract, Level 4 township, Level 3 self-administered area or district, Level 2 State or Region, Level 1 national; disaster-area declaration by the President for up to two months, extendable" : "5段階：レベル5＝区・村落区、レベル4＝郡、レベル3＝自治区・県、レベル2＝州・地域、レベル1＝国家。大統領の被災地域宣言は最長2か月（延長可）"}</td>
                  <td className={TD}>{en ? "Internal to the administration; declarations published in state media" : "行政内部の区分。宣言は国営メディアで公表"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                Dissemination relies on broadcasting, the web and the administrative line rather than on telecommunications technology. Radio was described by DMH in 2014 as the most effective channel, although stations broadcast only from 05:00 to 23:00 and a 24-hour weather channel remained a proposal. Opt-in applications exist: the Disaster Alert Notification (DAN) app released in October 2016 by the then RRD with UNDP and Adaptation Fund support, and the Myanmar Disaster Alert app of the DDM, which carries warnings, DRR information and the laws and rules; UNOPS commissioned the NEO forecasting web application for DMH in 2017. No operator-based SMS or cell-broadcast system has been documented, and no evidence of Common Alerting Protocol adoption by DMH was found. Impact-based forecasting is at the consultation stage: on 14 May 2026 DMH held a stakeholder workshop on impact-based forecasting for temperature-related hazards at its Multi-Hazard Early Warning Center in Nay Pyi Taw, with about 50 participants from disaster management, public health and agriculture and with RIMES and UK Met Office experts joining online, to discuss impact thresholds, action triggers and lead times. DMH states that it contributes to the UN Early Warnings for All initiative and is piloting machine-learning rainfall and flood forecasting, but a formal country roadmap under that initiative could not be confirmed. A critical commentary on Mocha argued that official warnings relied on state television and a Facebook weather page that did not reach rural communities well and used language that local people often struggled to understand.
              </>
            ) : (
              <>
                伝達は通信技術よりも放送・ウェブ・行政系統に依存しています。DMH は2014年にラジオを最も有効な手段としましたが、放送時間は5時〜23時に限られ、24時間の気象専門チャンネルは提案段階でした。利用者が登録するアプリとしては、2016年10月に当時の RRD が UNDP と適応基金の支援で公開した Disaster Alert Notification（DAN）、警報・防災情報・法令を載せる DDM の Myanmar Disaster Alert があり、UNOPS は2017年に DMH 向けの予報ウェブアプリ NEO を導入しました。通信事業者による SMS やセルブロードキャストの警報システムは文書上確認できず、DMH による共通警報プロトコル（CAP）採用の証拠も見つかりません。影響予測型予報（IBF）は協議段階にあります。2026年5月14日、DMH はネピドーの多災害早期警報センターで気温関連ハザードの IBF に関する関係者協議ワークショップを開き、防災・公衆衛生・農業の約50人が参加し、RIMES と英国気象庁の専門家がオンラインで加わって、影響の閾値・行動のトリガー・リードタイムを議論しました。DMH は国連の Early Warnings for All（EW4All）への貢献と、機械学習による降雨・洪水予測の試行を表明していますが、同イニシアティブの正式な国別ロードマップは確認できていません。モカに関する批判的な論評は、公式警報が国営テレビと Facebook の天気ページに依存し、農村部に十分届かず、住民が理解しにくい言語で出されたと論じています。
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
                  <strong className="text-foreground">February&ndash;May 2021 — Military takeover and re-militarisation of the chain.</strong> The state of emergency declared on 1 February 2021 placed the entire NDMC hierarchy under the SAC; the MSWRR minister was replaced on 4 February; nationwide mobile internet was cut on 15 March; and SAC Order No. 119/2021 of 5 May 2021 moved the GAD back from the Ministry of the Office of the Union Government to the Ministry of Home Affairs, reversing the civilian reform of December 2018. The NDMC was re-formed under SAC Vice-Chairman Soe Win (reportedly by a 2021 notification; confirmed in that capacity in May 2023).
                </>
              ) : (
                <>
                  <strong className="text-foreground">2021年2〜5月 — 軍による権力掌握と伝達系統の再軍事化。</strong>2021年2月1日の非常事態宣言により NDMC の階層全体が SAC の下に置かれ、2月4日に MSWRR 大臣が交代、3月15日に全国のモバイルインターネットが遮断されました。5月5日の SAC 命令119/2021は GAD を連邦政府府省から内務省へ戻し、2018年12月の文民改革を巻き戻しました。NDMC は SAC 副議長ソーウィンを議長として再編されました（2021年の告示によるとされ、2023年5月にその立場が確認されています）。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">16 April 2021 — Creation of a parallel disaster ministry.</strong> The NUG, formed by the Committee Representing Pyidaungsu Hluttaw, appointed the former MSWRR minister Win Myat Aye as Minister of Humanitarian Affairs and Disaster Management, institutionalising a second, unrecognised warning and relief authority.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2021年4月16日 — 並行する災害担当省の創設。</strong>連邦議会代表委員会（CRPH）が設立した NUG は、元 MSWRR 大臣ウィンミャッエーを人道問題・災害管理大臣に任命し、公式には承認されない第二の警報・救援当局を制度化しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">2022 — Revised Standing Order and new NGO law.</strong> According to the ADRC country report, the Standing Order on Disaster Management was revised in 2022 to specify declaration conditions, DMC operation, the duties of the twelve working committees and civil-military coordination; the Organization Registration Law (SAC Law No. 46/2022) made registration of associations compulsory, which later governed access of aid groups after the 2025 earthquake.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2022年 — 常設命令の改訂と新たな団体規制法。</strong>ADRC の国別報告によれば、災害管理に関する常設命令が2022年に改訂され、宣言の条件、DMC の運営、12作業委員会の任務、文民・軍調整が規定されました。組織登録法（SAC 法律第46号／2022年）は団体登録を義務化し、2025年地震後の支援団体のアクセスを左右しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">May 2023 — First use of the Law by the SAC in a major cyclone.</strong> Before and after Cyclone Mocha the SAC designated red-level townships (12 May), declared disaster-affected areas under section 11 (Announcements No. 1/2023 and 2/2023, 15&ndash;16 May) and appointed generals as township rehabilitation leads (Order No. 34/2023, 18 May); it did not authorise UN or INGO travel to Rakhine until mid-June and suspended transport for aid groups on 8 June. In August 2023 Dr Soe Win became MSWRR minister.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2023年5月 — 大型サイクロンで SAC が同法を初めて本格適用。</strong>サイクロン・モカの前後に SAC は郡を「赤レベル」に指定（5月12日）し、11条に基づき被災地域を宣言（告示1/2023・2/2023、5月15〜16日）、将官を郡ごとの復興責任者に任命しました（命令34/2023、5月18日）。他方で国連・国際 NGO のラカイン州への移動は6月中旬まで許可せず、6月8日には支援団体の輸送を停止しました。2023年8月には Dr ソーウィンが MSWRR 大臣に就任しています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">September 2024 — Yagi floods and an appeal for foreign aid.</strong> The NDMC met with the Chief Ministers on 13 September 2024 and activated the DMC for about four months; Min Aung Hlaing issued an appeal for foreign aid; on 17 September the NUG and the KNU, KNPP and CNF issued joint guidelines for aid providers, formalising the parallel relief channel.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年9月 — ヤギ洪水と対外支援要請。</strong>NDMC は2024年9月13日に首席大臣を集めて会議を開き、DMC を約4か月運用しました。ミンアウンフラインは外国支援を要請し、9月17日には NUG と KNU・KNPP・CNF が支援提供者向けの共同ガイドラインを出して並行救援経路を公式化しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">March&ndash;April 2025 — Earthquake emergency and ASEAN deployment.</strong> Emergencies were declared in Sagaing, Mandalay, Bago, Magway, Shan and Nay Pyi Taw; the NDMC met and activated the DMC on 29 March; a Reception and Departure Centre handled teams from 25 partner countries; the AHA Centre deployed ASEAN-ERAT and an in-country liaison team until 23 April and handed over US$633,044 of relief to the DDM. The military declared a 20-day ceasefire on 2 April, yet airstrikes between 28 March and 5 April killed at least 68 people and April 2025 became the heaviest month of airstrikes since the takeover.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年3〜4月 — 地震の緊急事態と ASEAN の派遣。</strong>サガイン・マンダレー・バゴー・マグウェ・シャン・ネピドーに非常事態が宣言され、NDMC は3月29日に会議と DMC 起動を行い、受付・出国センターが25か国からのチームを受け入れました。AHA センターは ASEAN-ERAT と現地連絡チームを4月23日まで派遣し、63万3,044ドル相当の物資を DDM に引き渡しました。軍は4月2日から20日間の停戦を宣言しましたが、3月28日〜4月5日の空爆で少なくとも68人が死亡し、2025年4月は権力掌握以降で最も空爆の多い月となりました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">31 July 2025 — End of the state of emergency.</strong> The SAC was dissolved and its functions passed to the National Defence and Security Council; NDSC Order No. 4/2025 created the State Security and Peace Commission (SSPC) under section 427 of the 2008 Constitution, with Min Aung Hlaing as acting president and chair, Soe Win as vice-chair and Nyo Saw as prime minister.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年7月31日 — 非常事態の終了。</strong>SAC は解散し、その機能は国防安全保障評議会（NDSC）に移りました。NDSC 命令4/2025は2008年憲法427条に基づき国家安全平和委員会（SSPC）を設置し、ミンアウンフラインが大統領代行兼議長、ソーウィンが副議長、ニョーソー（Nyo Saw）が首相となりました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">28 December 2025 &ndash; 25 January 2026 — Elections in three phases.</strong> Voting took place in 102, 100 and 61&ndash;63 townships respectively; 65 townships did not vote because of fighting; the USDP won more than 80 per cent of contested seats. The exclusion of 65 townships marks, almost exactly, the area where the official warning chain does not function.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年12月28日〜2026年1月25日 — 3段階の総選挙。</strong>投票はそれぞれ102郡、100郡、61〜63郡で実施され、65郡は戦闘のため投票できませんでした。連邦団結発展党（USDP）が争われた議席の8割超を獲得しました。投票できなかった65郡は、公式の警報経路が機能しない地域とほぼ重なります。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">16 March &ndash; 10 April 2026 — New government under the 2008 Constitution.</strong> Parliament convened on 16 March; Min Aung Hlaing was elected president on 3 April with 429 of 584 votes and sworn in on 10 April together with Vice-Presidents Nyo Saw and Nan Ni Ni Aye; the SSPC was abolished and an eleven-member Union Consultative Council led by Soe Win was formed. The cabinet split the former Ministry of Transport and Communications into a Ministry of Transport and a Ministry of Digital Development and Communications; DMH now describes itself as part of the Ministry of Transport. The section 11 power is thus formally back with a president, and section 4 again points to a Vice-President as NDMC chair, although the current chair has not been confirmed.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年3月16日〜4月10日 — 2008年憲法下の新政府。</strong>3月16日に議会が召集され、4月3日にミンアウンフラインが584票中429票で大統領に選出、4月10日に副大統領ニョーソーとナンニーニーエー（Nan Ni Ni Aye）とともに就任しました。SSPC は廃止され、ソーウィンが率いる11人の連邦諮問評議会が設置されました。内閣では旧運輸通信省が運輸省とデジタル開発通信省に分割され、DMH は現在「運輸省」所属と自己紹介しています。11条の権限は形式上ふたたび大統領に戻り、4条により NDMC 議長は副大統領となるはずですが、現在の議長は確認できていません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">May 2026 — First steps toward impact-based forecasting.</strong> DMH held its IBF stakeholder consultation on 14 May with RIMES and the UK Met Office and issued an El Niño warning around 22 May advising the agriculture, water and health sectors to adjust contingency plans; the DDM followed with door-to-door awareness drives in October and November 2026.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年5月 — 影響予測型予報への第一歩。</strong>DMH は5月14日に RIMES・英国気象庁と IBF の関係者協議を開き、5月22日頃にエルニーニョ警報を出して農業・水・保健部門に対応計画の見直しを促しました。DDM は2026年10〜11月に戸別の啓発活動を続けています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">July&ndash;September 2026 — Ngawun dyke breach and renewed ASEAN support.</strong> The breach of the Ngawun River embankment on 30 July 2026 flooded Laymyethna, Hinthada, Yekyi and Kyangin townships in Ayeyarwady Region; the DDM reported one death, 63,000 people affected and 45 evacuation centres by 18 August and 103,000 affected cumulatively by 22 September, requested ASEAN assistance, and received 17,500 DELSA relief units at Yangon on 19 September.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年7〜9月 — ンガウン川堤防の決壊と ASEAN 支援の再開。</strong>2026年7月30日のンガウン川堤防決壊により、エーヤワディ地域のレーミェッナー・ヒンタダ・イェーチー・チャンジンの各郡が浸水しました。DDM は8月18日時点で死者1人・被災6万3,000人・避難所45か所、9月22日時点で累計10万3,000人の被災を報告し、ASEAN に支援を要請、9月19日にヤンゴンで DELSA の救援物資1万7,500点を受領しました。
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
                  <strong className="text-foreground">Structural: a legal last mile that stops at the front line.</strong> The only legally mandated dissemination line (NDMC to GAD to ward and village-tract administrators) belongs to the de facto authorities, while an estimate for 2024 placed 86 per cent of the territory and 67 per cent of the population outside their stable control and 65 of 330 townships could not hold elections in 2025&ndash;2026. In Rakhine in May 2023 the ULA/AA warned and evacuated more than 102,000 people while the SAC threatened residents of red-level townships with prosecution and soldiers destroyed HDCO awareness posters. The ward or village-tract administrator, the legal chair of the lowest committee, is also the election official and a target of attacks; in contested townships the node is absent or avoided. Trust compounds the problem: analysts noted an element of distrust in SAC announcements before Mocha, and the RRD itself concluded in 2016 that mutual trust between authorities and communities on warning information had to be strengthened.
                </>
              ) : (
                <>
                  <strong className="text-foreground">構造的課題：前線で止まる法律上のラストマイル。</strong>法律が定める唯一の伝達経路（NDMC → GAD → 区・村落区行政官）は事実上の当局に属しますが、2024年の推計では国土の86%・人口の67%がその安定的統制外にあり、2025〜2026年の選挙は330郡のうち65郡で実施できませんでした。2023年5月のラカイン州では ULA/AA が10万2,000人超を警報・避難させる一方、SAC は「赤レベル」郡の住民に訴追を警告し、兵士が HDCO の啓発ポスターを破棄しました。最下層の委員会の法定議長である区・村落区行政官は選挙事務の担当者でもあり攻撃対象でもあるため、係争中の郡ではこの結節点が存在しないか住民に避けられます。信頼の問題がこれに重なります。モカの前には SAC の発表に対する不信が指摘され、RRD 自身も2016年に「警報情報に関する当局とコミュニティの相互信頼の強化」を教訓として挙げています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Structural: statutory gaps around issuance and evacuation.</strong> The Law does not name DMH, so no statute identifies the authoritative source of a warning; it directs evacuation (s.9(i)) and penalises refusal (s.31) yet requires consent for pre-disaster evacuation (s.36); the precedence of the Standing Order over the 2015 Rules was questioned by IFRC in 2016 and remains unsettled; and no amendment has been traced since 2013, either under the SAC or in the parliament convened in March 2026. The Hpakant jade-mine collapse of 2 July 2020, where a warning had been issued the day before and ignored by many miners, shows the practical cost of an evacuation regime without a clear enforcement design.
                </>
              ) : (
                <>
                  <strong className="text-foreground">構造的課題：発表権限と避難をめぐる法の空白。</strong>同法は DMH を名指ししないため、どの機関の警報が権威あるものかを法律は定めていません。避難を指示し（9条(i)）拒否を処罰する（31条）一方で、災害前の避難には同意を要求し（36条）、常設命令と2015年規則の優劣は2016年に IFRC が疑問を提起したまま未解決です。2013年以降、SAC 下でも2026年3月召集の議会でも改正の痕跡はありません。2020年7月2日のパカン翡翠鉱山崩落では前日に警告が出ていたにもかかわらず多くの鉱夫が無視しており、執行設計の不明確な避難制度の実際の代償を示しています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Structural: humanitarian access governed by security law.</strong> The Organization Registration Law of 2022, visa and travel authorisations and military checkpoints decide who may act on a warning. After Mocha the UN waited for permission until mid-June 2023 and aid transport was suspended on 8 June; after the earthquake aid providers were turned back at checkpoints in Sagaing, Mandalay and Shan, WFP recorded at least 86 access-related incidents in one month, foreign media were barred and Taiwanese rescuers were refused, while an internal UN report found opposition-controlled areas largely devoid of external assistance. Myanmar remained excluded from high-level ASEAN meetings as of April 2025.
                </>
              ) : (
                <>
                  <strong className="text-foreground">構造的課題：治安法制に支配される人道アクセス。</strong>2022年組織登録法、査証・移動許可、軍の検問所が、警報を受けて誰が行動できるかを決めています。モカの後、国連は2023年6月中旬まで許可を待ち、6月8日には支援輸送が停止されました。地震後はサガイン・マンダレー・シャンの検問所で支援団体が引き返させられ、WFP は1か月で少なくとも86件のアクセス関連事案を記録し、外国メディアは締め出され、台湾の救援隊は受け入れられず、国連内部報告は反体制派支配地域が「外部支援をほぼ受けていない」と結論づけました。ミャンマーは2025年4月時点で ASEAN の高級会合から除外されたままでした。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Operational: information blackouts at the moment of need.</strong> Myanmar recorded 95 internet shutdowns in 2025, more than any other country (India 65, Pakistan 20, Russia 19); in late January 2025 local forces cut internet and phone lines in Tamu township, Sagaing, and aid workers treat signal loss as a sign of imminent airstrikes. Communications were cut from Sittwe after Mocha; the Yagi floods damaged telecommunications and electricity across all nine affected states and regions; after the earthquake VPN bans, Facebook restrictions and shutdowns continued in affected areas. Starlink terminals, estimated at more than 3,000 in 2025, are unauthorised. For a warning system whose public channels are radio (05:00&ndash;23:00), television and Facebook, these conditions remove the channel exactly when it is needed.
                </>
              ) : (
                <>
                  <strong className="text-foreground">運用上の課題：必要な瞬間の情報遮断。</strong>ミャンマーは2025年に95件のインターネット遮断を記録し、世界で最多でした（インド65件、パキスタン20件、ロシア19件）。2025年1月末にはサガイン地域タムー郡で地元部隊がインターネットと電話回線を切断し、支援従事者は電波の消失を空爆の前兆と見ています。モカの上陸後はシットウェとの通信が断たれ、ヤギ洪水では被災した9州・地域の全てで通信と電力が損傷し、地震後も被災地で VPN 禁止・Facebook 制限・遮断が続きました。2025年に3,000基超と推定される Starlink 端末は未認可です。公衆向け経路がラジオ（5時〜23時）・テレビ・Facebook である警報システムにとって、これらの条件は必要な時に経路そのものを失わせます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Operational: casualty and impact accounting that diverges by actor.</strong> Every major event since 2023 has two or three incompatible tolls: Mocha 145&ndash;156 (official) against 413&ndash;463 (NUG) and 164 (ULA/AA); Yagi 433&ndash;455 (official) against more than 600 (NUG), with UN estimates of 887,000 to one million affected; the earthquake 3,757&ndash;3,818 (DDM) against 4,200 (NUG) and 4,549&ndash;5,352 (DVB and Mizzima); the August 2026 floods 158,030 affected and one death nationwide (DDM, 22 September) against 452,663 affected and 25 dead in four regions (NUG, 12 August). The divergence is institutional rather than statistical: official counts cover areas the administration controls, and because the DDM EOC is the only link to the AHA Centre, ASEAN data inherits the same boundary.
                </>
              ) : (
                <>
                  <strong className="text-foreground">運用上の課題：主体ごとに食い違う死者・被災者の集計。</strong>2023年以降の主要災害には必ず2〜3通りの両立しない数字があります。モカは公式145〜156人に対し NUG 413〜463人・ULA/AA 164人、ヤギは公式433〜455人に対し NUG 600人超（国連の被災者推計は88万7,000〜約100万人）、地震は DDM 3,757〜3,818人に対し NUG 4,200人・報道（DVB・Mizzima）4,549〜5,352人、2026年8月の洪水は DDM が全国で被災15万8,030人・死者1人（9月22日）、NUG が4地域で被災45万2,663人・死者25人（8月12日）です。この乖離は統計的というより制度的なものです。公式集計は当局が統制する地域のみを対象とし、DDM の EOC が AHA センターへの唯一の接続である以上、ASEAN のデータも同じ境界を引き継ぎます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Operational: forecasting capacity and external dependence.</strong> DMH reported in 2014 that a shortage of skilled staff and computing caused inaccurate warnings, that low-pressure information was issued only after RSMC New Delhi, and that monsoon-depression warnings were delayed; in July 2025 it listed delayed detection of rapidly developing hazards, difficulty in customising alerts for different regions and populations, data gaps and limited historical records, and the need to develop human resources. Flash floods in small catchments remain outside its forecasting system, there is no earthquake early warning, cyclone products are text bulletins built on RSMC New Delhi, CIMSS and JTWC guidance, and impact-based forecasting reached a first stakeholder consultation only in May 2026.
                </>
              ) : (
                <>
                  <strong className="text-foreground">運用上の課題：予測能力と外部依存。</strong>DMH は2014年に、熟練人材と計算機資源の不足が警報の不正確さを招き、低圧部の情報は RSMC ニューデリーの発表後にしか出せず、モンスーン低気圧の警報が遅れると報告しました。2025年7月には、急速に発達するハザードの検知の遅れ、地域・住民別の警報のカスタマイズの困難、データの欠落と過去記録の不足、人材育成の必要を課題に挙げています。小流域の鉄砲水は予測の対象外のままで、地震早期警報はなく、サイクロン情報は RSMC ニューデリー・CIMSS・JTWC の情報に基づく文字情報であり、影響予測型予報は2026年5月にようやく最初の関係者協議に至りました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Operational: undocumented dam-release communication.</strong> Residents told a Karen news agency that the Ngalaik and Swar dams in Pyinmana and Yedashe townships had been breached around 27 August 2024, flooding Taungoo and affecting more than 5,000 people with no advance warning; the claim is unconfirmed, and a state-media report that the agriculture ministry had been instructed to issue dam notices could not be verified. Five dams were reported damaged in the Yagi floods, and the NUG attributed the August 2026 floods in upper Myanmar partly to dam water releases. No public protocol linking dam operators to DMH or DDM warnings was found.
                </>
              ) : (
                <>
                  <strong className="text-foreground">運用上の課題：文書化されていないダム放流の伝達。</strong>住民はカレン系通信社に対し、2024年8月27日頃にピンマナ郡のンガライ・ダムとイェダシェ郡のスワー・ダムが決壊させられ、タウングーが浸水して5,000人超が事前警告なしに被災したと証言しましたが、この主張は未確認であり、農業省にダム通知の発出を指示したとする国営メディアの報道も検証できていません。ヤギ洪水では5つのダムが損傷したと報告され、NUG は2026年8月の上ミャンマー洪水の一因をダム放流に求めています。ダム管理者を DMH や DDM の警報に結びつける公開プロトコルは見つかりませんでした。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Structural: earthquake preparedness and the building stock.</strong> The 2019 earthquake plan did not prevent the collapse of the state apparatus itself: in Nay Pyi Taw 665 deaths were officially recorded, military headquarters, parliament buildings and official housing were heavily damaged, the airport control tower collapsed, and more than 1,000 government buildings were damaged nationwide; the Sky Villa collapse in Mandalay killed 207 and about 90 per cent of structures in Sagaing were reported destroyed. Mandalay and Nay Pyi Taw accounted for 45.5 and 44.0 per cent of official losses. Twelve historical earthquakes are recorded along the Sagaing Fault, including Tarlay (2011) and Thabeikkyin (2012); whether building-code enforcement has changed since 2025 could not be established.
                </>
              ) : (
                <>
                  <strong className="text-foreground">構造的課題：地震への備えと建物ストック。</strong>2019年の地震計画は国家機構そのものの被災を防げませんでした。ネピドーでは公式に665人が死亡し、軍司令部・議会・官舎が大きく損壊し、空港の管制塔が崩落、全国で1,000棟超の政府建物が損傷しました。マンダレーの Sky Villa 崩落では207人が死亡し、サガインでは建物の約9割が破壊されたと報じられています。公式損失のうちマンダレーが45.5%、ネピドーが44.0%を占めます。サガイン断層沿いにはタルレー（2011年）・タベイッキン（2012年）を含む12件の歴史地震が記録されており、2025年以降に建築基準の執行が変わったかどうかは確認できていません。
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
                Much of the observing and forecasting capacity that DMH operates today was built with Japanese support before 2021. A JICA grant financed three Doppler weather radars installed in 2014&ndash;2017, with DMH under the Ministry of Transport as applicant, tower sites permitted by the Rakhine State Chief Minister (Kyaukpyu) and the Yangon and Mandalay city development committees, frequency permits from the then Ministry of Communications, Posts and Telegraphs, and products intended for the transport ministry, the Relief and Resettlement Department, other ministries and the police. DMH also uses JMA tools: the SATAID satellite-analysis software, Himawari imagery, the JMA global model and the JMA storm-surge model (30 km grid, 48-hour range). Since 1 February 2021 JICA has conducted no new ODA projects except humanitarian assistance delivered through international organisations and NGOs; after the 2025 earthquake Japan pledged US$6 million and sent tents and medical staff. In July 2025 DMH counted its three installed radars among its current capabilities and still named JMA and JICA among its partners, alongside WMO, CMA, RIMES, KMA, KOICA, ECMWF, ASMC and BIMSTEC; it uses Himawari-8 and CMA satellite data and takes part in the ASEAN and South Asian climate outlook forums. The legacy hardware therefore remains in service without Japanese technical follow-up, and continuity now depends on the DMH engineering division and on cooperation with Chinese and Korean agencies.
              </>
            ) : (
              <>
                DMH が今日運用している観測・予測能力の多くは、2021年以前に日本の支援で整備されたものです。JICA の無償資金協力により2014〜2017年にドップラー気象レーダー3基が設置されました。申請者は運輸省下の DMH で、鉄塔用地はラカイン州首席大臣（チャウピュー）とヤンゴン・マンダレーの市開発委員会が許可し、周波数は当時の通信・郵政・電信省が割り当て、成果は運輸省・救済再定住局・他省庁・警察が利用する計画でした。DMH は気象庁（JMA）のツールも使っています。衛星解析ソフト SATAID、ひまわり画像、JMA 全球モデル、JMA 高潮モデル（格子30 km、48時間先）です。2021年2月1日以降、JICA は国際機関・NGO を通じた人道支援を除き新規 ODA 事業を行っておらず、2025年地震の際に日本は600万ドルを拠出し、テントと医療要員を送りました。2025年7月、DMH は設置済みのレーダー3基を現在の能力の一つに挙げ、WMO・中国気象局（CMA）・RIMES・韓国気象庁（KMA）・KOICA・ECMWF・ASMC・BIMSTEC とともに JMA と JICA を引き続きパートナーに挙げています。ひまわり8号と CMA の衛星データを使い、ASEAN と南アジアの季節予報フォーラムにも参加しています。日本が整備した機材は技術的なフォローアップなしに稼働を続けており、その持続性は DMH の工務部門と中国・韓国の機関との協力にかかっています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Multilateral and regional cooperation has split along the same line as the warning chain. UNDP and the Adaptation Fund financed the DAN app (2016) and UNOPS the NEO forecasting application (2017), and UNDP still chairs the DRR Working Group; the status of World Bank and ADB disaster-risk financing after 2021 could not be confirmed from public project records. RIMES and the UK Met Office joined the DMH impact-based forecasting consultation in May 2026, showing that technical cooperation with the national meteorological service continues at arm&rsquo;s length. The AHA Centre has worked continuously with the DDM as the national disaster management organisation: it coordinated supplies with the SAC on 12 May 2023 and announced about US$60,000 of aid for Mocha on 22 May; after the 2025 earthquake it deployed ASEAN-ERAT and an in-country liaison team, flew in twelve relief flights and shipped 92.6 tonnes by sea, supported a Malaysian field hospital in Sagaing for 30 days and handed US$633,044 of relief to the DDM; for the 2026 floods it mobilised DELSA stocks at the DDM request. Bilateral relief after the earthquake came from China (US$13.77 million and a further US$137 million), India (Operation Brahma with a 200-bed field hospital in Mandalay), Russia (120 medical staff), Singapore, Malaysia and Thailand, the United States (US$9 million and US$7 million, with a team hampered by visa problems and USAID job terminations), the UN (US$93 million plus US$5 million from CERF), the IFRC (an appeal above US$100 million) and the EU (EUR 2.5 million). All of this passed through institutions of the de facto authorities, which is why the NUG and ethnic organisations asked in September 2024 for aid to be routed to them directly.
              </>
            ) : (
              <>
                多国間・地域協力も、警報経路と同じ線で分断されています。UNDP と適応基金が DAN アプリ（2016年）を、UNOPS が予報アプリ NEO（2017年）を支援し、UNDP は現在も DRR ワーキンググループの議長ですが、世界銀行と ADB の防災関連融資の2021年以降の状況は公開のプロジェクト記録から確認できませんでした。RIMES と英国気象庁は2026年5月の DMH の影響予測型予報協議に参加しており、国家気象機関との技術協力が距離を保ちつつ続いていることを示しています。AHA センターは国家防災機関としての DDM と一貫して協働してきました。2023年5月12日に SAC と物資を調整し、5月22日にモカ向けの約6万ドルの支援を発表、2025年地震では ASEAN-ERAT と現地連絡チームを派遣し、救援便12便と海上輸送92.6トンを運び、サガイン市のマレーシア野外病院を30日間支え、63万3,044ドル相当の物資を DDM に引き渡しました。2026年の洪水では DDM の要請で DELSA の備蓄を動員しています。地震後の二国間支援は、中国（1,377万ドルと追加の1億3,700万ドル）、インド（マンダレーに200床の野外病院を設けた Operation Brahma）、ロシア（医療要員120人）、シンガポール、マレーシア、タイ、米国（900万ドルと700万ドル。ただしチームは査証問題と USAID の人員削減に阻まれた）、国連（9,300万ドルと CERF の500万ドル）、IFRC（1億ドル超のアピール）、EU（250万ユーロ）から届きました。これら全てが事実上の当局の機関を経由しており、だからこそ NUG と民族組織は2024年9月に支援を自分たちへ直接届けるよう求めたのです。
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
                What is distinctive about Myanmar is that its single disaster statute vests the warning function in an administrative committee system rather than in the scientific agency, and that the committee system is, at every level from the Vice-President to the village tract, an extension of a state that is itself a party to an armed conflict. The machinery works where the state works: the NDMC has met and activated the Disaster Management Centre within a day or two of each major event since 2023, DMH has issued numbered cyclone bulletins and station-level flood alerts, and the AHA Centre has found a functioning counterpart in the DDM. But the chain has no legal existence in the townships where the GAD administrator is absent, and the parallel chains that do operate there are unrecognised, occasionally suppressed and invisible to regional reporting. The result is a country with two warning systems and two sets of casualty figures, neither of which covers the whole population.
              </>
            ) : (
              <>
                ミャンマーの特徴は、唯一の災害法が警報機能を科学機関ではなく行政の委員会制度に委ね、その委員会制度が副大統領から村落区まで全ての層で、武力紛争の一方当事者である国家の延長になっている点にあります。この機構は国家が機能する場所では機能します。NDMC は2023年以降の主要災害のたびに1〜2日以内に会議を開いて災害管理センターを起動し、DMH は番号付きのサイクロン情報と観測所単位の洪水警報を出し、AHA センターは DDM という機能する対応機関を得ています。しかし、GAD の行政官が存在しない郡ではこの経路は法的に存在せず、そこで実際に機能している並行経路は承認されず、時に抑圧され、地域機構の報告からは見えません。その結果が、二つの警報システムと二通りの死者数を持ち、どちらも全人口を覆っていない国です。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The unresolved question is whether a warning can be separated from the authority that delivers it. In law, that would mean naming DMH as the authoritative issuer with a duty to publish warnings to everyone irrespective of who controls the ground; a telecommunications obligation to carry warnings on cell broadcast that cannot be switched off with the rest of the network; a clear rule reconciling the direction to evacuate, the penalty for refusal and the consent requirement; and a duty on dam operators to notify releases through the same channel. In organisation, it would mean a reporting line for casualty and impact figures that does not stop at the boundary of administrative control, and a mode of regional cooperation that reaches the DDM without being limited to the areas it can report on. There is no sign that any of this is on the agenda of the government formed in April 2026, and none of it can be supplied by the technical cooperation that continues with DMH alone.
              </>
            ) : (
              <>
                未解決の問いは、警報をそれを届ける権力から切り離せるかどうかです。法制度の面では、DMH を権威ある発表機関として明記し、誰が現地を統制していようと全ての人に警報を公表する義務を課すこと、ネットワーク全体と一緒に遮断できないセルブロードキャストで警報を流す通信事業者の義務、避難の指示・拒否への罰則・同意要件を整合させる明確な規定、ダム管理者が同じ経路で放流を通知する義務が必要になります。組織の面では、行政統制の境界で止まらない死者・被災者の報告系統と、DDM に届きつつも DDM が報告できる地域に限定されない地域協力の形が必要です。これらが2026年4月に発足した政府の課題に挙がっている兆候はなく、DMH とだけ続く技術協力によって供給できるものでもありません。
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
              Republic of the Union of Myanmar (2013). Natural Disaster Management Law (The Pyidaungsu Hluttaw Law No. 21, 2013), English translation. <em>ADB Law and Policy Reform</em>. https://lpr.adb.org/sites/default/files/resource/683/myanmar-natural-disaster-management-law-2013-english.pdf
            </li>
            <li>
              Asian Disaster Reduction Center (2025). FY2025 Myanmar Country Report. <em>ADRC</em>. https://www.adrc.asia/countryreport/MMR/2025/FY2025_Myanmar_CountryReport.pdf
            </li>
            <li>
              Center for Excellence in Disaster Management and Humanitarian Assistance (2020). Myanmar Disaster Management Reference Handbook, March 2020. <em>CFE-DM</em>. https://www.cfe-dmha.org/LinkClick.aspx?fileticket=ruMUcWpK0E4%3d&amp;portalid=0
            </li>
            <li>
              Relief and Resettlement Department (2016). Presentation to the 15th ASEAN Regional Forum on Disaster Relief. <em>MIMU</em>. https://www.themimu.info/sites/themimu.info/files/documents/Presentation_15th_ASEAN_Regional_Forum_on_Disaster_Relief_Feb2016.pdf
            </li>
            <li>
              Department of Meteorology and Hydrology (2014). Country Report of Myanmar, JMA/WMO Workshop on Effective Tropical Cyclone Warning in Southeast Asia. <em>JMA RSMC Tokyo</em>. https://www.jma.go.jp/jma/jma-eng/jma-center/rsmc-hp-pub-eg/2014_Effective_TC_Warning/cr/country_report_Myanmar.pdf
            </li>
            <li>
              Department of Meteorology and Hydrology (2025). Presentation on DMH activities and early warning, Shanghai, July 2025. <em>CMA National Meteorological Centre (host)</em>. https://image.nmc.cn/userfiles/ueditor/userid/files/cms/article/2025/08/1755162694260.pdf
            </li>
            <li>
              Department of Meteorology and Hydrology (n.d.). Disaster Risk Reduction: cyclone warning stages and flood forecasting; Warning stages and broadcast frequency. <em>DMH</em>. https://moezala.gov.mm/en/node/88 ; https://moezala.gov.mm/en/node/80
            </li>
            <li>
              Department of Meteorology and Hydrology (2026). Stakeholders Consultation Workshop on Impact-Based Forecasting, 14 May 2026. <em>DMH</em>. https://moezala.gov.mm/en/node/129777
            </li>
            <li>
              Department of Disaster Management (2026). News and advisories, October&ndash;November 2026. <em>DDM</em>. https://www.ddm.gov.mm/
            </li>
            <li>
              Global New Light of Myanmar (2021). State Administration Council Order No. 119/2021, 6 May 2021. <em>GNLM</em>. https://uzo.sakura.ne.jp/burma/nlm/nlm_data/gnlm_2021/gnlm_05_2021/gnlm_06_05_2021.pdf
            </li>
            <li>
              Global New Light of Myanmar (2023). State Administration Council Order No. 34/2023 and Cyclone Mocha coverage, 19 May 2023. <em>GNLM</em>. https://cdn.digitalagencybangkok.com/file/client-cdn/gnlm/wp-content/uploads/2023/05/19_May_23_gnlm.pdf
            </li>
            <li>
              Kyaw Hsan Hlaing (2023). Responses to Humanitarian Needs in Western Myanmar after Cyclone Mocha. <em>ISEAS Perspective 2023/72</em>. https://www.iseas.edu.sg/articles-commentaries/iseas-perspective/2023-72-responses-to-humanitarian-needs-in-western-myanmar-after-cyclone-mocha-by-kyaw-hsan-hlaing/
            </li>
            <li>
              AHA Centre (2025). Situation Update No. 10: M7.7 Earthquake in Mandalay, Myanmar, 23 April 2025. <em>AHA Centre</em>. https://ahacentre.org/wp-content/uploads/2025/04/AHA-Situation_Update-no10-M7.7-EQ-in-Mandalay-MM-23-AprilFinal.pdf
            </li>
            <li>
              AHA Centre (2026). Situation Updates No. 1 and No. 2: Flooding and Landslides in Lao PDR and Myanmar, 28 August and 24 September 2026. <em>AHA Centre</em>. https://ahacentre.org/wp-content/uploads/2026/09/AHA-Situation_Update-no2-Flooding-and-Landslides-in-Lao-PDR-and-Myanmar-24-Sept-2026.pdf
            </li>
            <li>
              United Nations Myanmar (2024). Myanmar Flood Situation Report No. 3, 27 September 2024. <em>UN Myanmar</em>. https://myanmar.un.org/en/node/279958
            </li>
            <li>
              Human Rights Watch (2025, 2026). Myanmar: Allow Immediate Aid to Quake-Stricken Areas (1 April 2025); A Year On from Myanmar&rsquo;s Earthquake (27 March 2026). <em>HRW</em>. https://www.hrw.org/news/2025/04/01/myanmar-allow-immediate-aid-quake-stricken-areas ; https://www.hrw.org/news/2026/03/27/a-year-on-from-myanmars-earthquake
            </li>
            <li>
              Progressive Voice (2025). Aid Weaponization in Myanmar, briefing paper, 9 December 2025. <em>Progressive Voice</em>. https://wp.progressivevoicemyanmar.org/wp-content/uploads/2025/12/Final_AidWeaponization_BriefingPaper_20251209.pdf
            </li>
            <li>
              Access Now (n.d.). KeepItOn: internet shutdowns in 2025. <em>Access Now</em>. https://www.accessnow.org/keepiton-2025-report
            </li>
            <li>
              Japan International Cooperation Agency (n.d.). Preparatory Survey Report on the Project for Improvement of Meteorological Radar Systems in Myanmar, Chapter 3; JICA Myanmar Office, activities since February 2021. <em>JICA</em>. https://openjicareport.jica.go.jp/pdf/12112546_04.pdf ; https://www.jica.go.jp/english/overseas/myanmar/index.html
            </li>
            <li>
              National Unity Government of Myanmar (2026). Earthquake Emergency: casualty data and relief disbursement (updated 27 March 2026). <em>NUG</em>. https://www.nugmyanmar.org/earthquake-emergency/
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
              <strong className="text-foreground">{en ? "Myanmar" : "ミャンマー"}</strong>
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
