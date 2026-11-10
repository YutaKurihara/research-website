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
              ? "Early Warning Governance in Cambodia — Laws, Actors and Current Challenges"
              : "カンボジアの予警報制度 — 法制度・アクターの役割・現在の課題"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "This article reviews how early warning is organised in Cambodia — the Law on Disaster Management of 2015, the Law on Water Resources Management of 2007, the roles of NCDM, MOWRAM and the sub-national committees, the Mekong warning levels, the EWS1294 platform and the Early Warnings for All roadmap — on the basis of law texts, official plans and reports by international organisations."
              : "本記事は、2015年災害管理法と2007年水資源管理法、NCDMとMOWRAMおよび州・郡・コミューン委員会の役割、メコン川の警戒水位、伝達プラットフォームEWS1294、EW4Allロードマップまでを、法令原文・政府計画・国際機関の報告書に基づいて整理します。"}
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
                Disaster losses in Cambodia are dominated by two very different hazards. River floods along the Mekong and the Tonle Sap system cause the largest economic damage and, historically, the largest death tolls: the National Committee for Disaster Management (NCDM) records 347 deaths in the floods of 2000, 250 deaths and US$451 million of damage in 2011, 168 deaths and US$356 million in 2013, and 43 deaths from Typhoon Ketsana in 2009. In recent years, however, lightning has been the single largest killer every year. Of the 103 disaster deaths recorded by NCDM in 2023, 84 were caused by lightning, 10 by floods and 9 by storms; 68 people died from lightning in 2024; and of the 79 disaster deaths counted between January and September 2026, 54 were due to lightning, 13 to windstorms and 12 to floods, while floods affected 51,346 houses and 92,135 hectares of rice and drought affected 302,121 hectares. Releases from hydropower dams on the Sesan and Sekong tributaries and, since 2025, mass displacement caused by the border conflict with Thailand add hazards that the warning system was never designed for.
              </>
            ) : (
              <>
                カンボジアの災害被害は、性質の大きく異なる2つのハザードに集中しています。メコン川とトンレサップ水系の河川洪水は経済被害と歴史的な死者数の面で最大のハザードであり、NCDM（National Committee for Disaster Management、国家災害管理委員会）の記録では、2000年の洪水で347人、2011年の洪水で250人（被害額4億5,100万米ドル）、2013年の洪水で168人（同3億5,600万米ドル）、2009年の台風ケッツァーナで43人が死亡しました。一方、近年は毎年、落雷が単独で最大の死因となっています。NCDMが2023年に記録した災害死者103人のうち84人が落雷、10人が洪水、9人が暴風によるもので、2024年の落雷死者は68人、2026年1〜9月の災害死者79人のうち54人が落雷、13人が暴風、12人が洪水でした。同期間に洪水は51,346戸と水田92,135 haに、干ばつは302,121 haに被害を及ぼしています。セサン川・セコン川支流の水力発電ダムの放流や、2025年以降のタイとの国境紛争に伴う大規模な住民避難も、警報制度が本来想定していなかったハザードとして加わっています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                Institutional design matters in Cambodia because the state has created two headquarters and no statutory warning authority. The Law on Disaster Management of 2015 (Preah Reach Kram NS/RKM/0715/007) makes NCDM &ldquo;the headquarters of the Royal Government&rdquo; for disaster management (Article 6), but it names neither who issues hazard warnings nor who orders evacuation; emergency response is assigned to the commune, district and provincial committees in whose territory the disaster occurs (Articles 18 and 19), and the mobilisation of people and assets is tied to a prior disaster declaration by the Royal Government (Articles 21 and 25). Separately, Article 26 of the Law on Water Resources Management of 2007 makes the Ministry of Water Resources and Meteorology (MOWRAM) &ldquo;Headquarters of the Royal Government&rdquo; in the event of floods and droughts. Warning production therefore rests on the founding decrees of MOWRAM from 1999 and on administrative practice, the last mile rests on four tiers of largely volunteer committees and on a dissemination platform (EWS1294) built by a non-governmental organisation, and NCDM itself acknowledged in 2018 that warnings from the national level reach the provinces but not the communes.
              </>
            ) : (
              <>
                この国で制度設計が問題になるのは、国家が2つの「本部」を置きながら、警報を発する法定の権限をどこにも与えていないからです。2015年の災害管理法（Preah Reach Kram NS/RKM/0715/007）はNCDMを災害管理に関する「王国政府の本部」と定めています（第6条）が、誰がハザード警報を発するのか、誰が避難を命じるのかを定めていません。緊急対応は災害が発生した領域のコミューン・郡・州の委員会に割り当てられ（第18条・第19条）、住民と資産の動員は王国政府による事前の災害宣言に結びつけられています（第21条・第25条）。これとは別に、2007年の水資源管理法第26条は、洪水と干ばつの際にMOWRAM（Ministry of Water Resources and Meteorology、水資源気象省）を「王国政府の本部」としています。したがって警報の作成は1999年のMOWRAM設置法令と行政慣行に依拠し、ラストマイルは主としてボランティアからなる4層の委員会と、NGOが構築した伝達プラットフォーム（EWS1294）に依拠しています。NCDM自身も2018年に、国レベルの警報は州までしか届かずコミューンには届かないと認めています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The article sets out the legal instruments, the actors and their division of labour, the warning chain and the published warning levels, the reforms of 2020&ndash;2026, the current challenges and the role of international cooperation, including Japan.
              </>
            ) : (
              <>
                以下では、法令、アクターと役割分担、警報の流れと公表されている警戒水位、2020〜2026年の制度改革、現在の課題、日本を含む国際協力の順に整理します。
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
                The legal base for early warning is thin and layered: two laws, one of 2015 on disaster management and one of 2007 on water resources, a set of royal decrees and sub-decrees on the organisation of NCDM and MOWRAM, and a number of instruments on the sub-national committees. None of them is an early-warning law. In its reply to a questionnaire of the ESCAP/WMO Typhoon Committee in 2014, the government stated that &ldquo;Cambodia does not have any laws, administrative rules or legislation for early warning&rdquo; and that the Department of Meteorology had no Meteorological Service Act specifying its roles. The Law on Disaster Management adopted the following year did not change that position.
              </>
            ) : (
              <>
                予警報の法的基盤は薄く、何層にも重なっています。災害管理に関する2015年の法律と水資源に関する2007年の法律、NCDMとMOWRAMの組織に関する一連の王令（Preah Reach Kret）と政令（Anukret）、そして下位行政単位の委員会に関する諸文書がそれですが、いずれも予警報法ではありません。政府は2014年のESCAP/WMO台風委員会の質問票への回答で、「カンボジアには早期警報に関する法律、行政規則、法令は一切存在しない」こと、気象局にはその役割を定める気象業務法がないことを自ら述べています。翌年に制定された災害管理法も、この状況を変えませんでした。
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
                  <td className={TDH}>{en ? "Law on Disaster Management (Preah Reach Kram NS/RKM/0715/007)" : "災害管理法（Preah Reach Kram NS/RKM/0715/007、Law on Disaster Management）"}</td>
                  <td className={TD}>2015</td>
                  <td className={TD}>{en ? "NCDM as headquarters of the Royal Government (Art. 6); Secretariat-General (Art. 7); focal points in every ministry (Art. 8); provincial, district and commune committees (Art. 9); preparedness including early warning systems (Art. 11); disaster declaration (Arts 20-21); mobilisation of people and assets (Art. 25); budget from the Office of the Council of Ministers (Arts 38-39); penalties (Arts 44-45)." : "NCDMを王国政府の本部とする（第6条）、事務総局（第7条）、全省庁の窓口（第8条）、州・郡・コミューン委員会（第9条）、早期警報システムの整備を含む備え（第11条）、災害宣言（第20〜21条）、人と資産の動員（第25条）、閣僚評議会府予算からの支出（第38〜39条）、罰則（第44〜45条）。"}</td>
                  <td className={TD}>{en ? "No article names a warning issuer; Art. 11 only lists the development of early warning systems as a preparedness task. The word evacuation does not appear; response lies with the commune, district or provincial committee of the affected territory (Arts 18-19), and mobilisation of people requires a prior Royal Government declaration (Arts 21 and 25)." : "警報を発する機関を定めた条文はなく、第11条が備えの一つとして早期警報システムの整備を挙げるのみ。「避難」という語は登場せず、対応は被災領域のコミューン・郡・州委員会が担い（第18〜19条）、住民の動員には王国政府の事前の宣言が必要（第21条・第25条）。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Law on Water Resources Management of the Kingdom of Cambodia" : "水資源管理法（Law on Water Resources Management of the Kingdom of Cambodia）"}</td>
                  <td className={TD}>2007</td>
                  <td className={TD}>{en ? "MOWRAM mandated to lead implementation (Art. 5) and to develop water policy to prevent disasters (Art. 6); centralised data inventory to which other institutions must submit data (Art. 8); Flood Retention Areas and flood prevention plans (Art. 24); Mekong use consistent with the Cambodia National Mekong Committee (Art. 34). In force 29 June 2007." : "MOWRAMに法の実施を主導する権限（第5条）と災害防止のための水政策策定（第6条）、他機関がデータを提出すべき一元的台帳（第8条）、洪水貯留区域と洪水防止計画（第24条）、カンボジア国家メコン委員会と整合したメコン川利用（第34条）。2007年6月29日施行。"}</td>
                  <td className={TD}>{en ? "Art. 26: in the event of floods and droughts MOWRAM serves as Headquarters of the Royal Government in close collaboration with ministries and local authorities. No article on forecasting, warning or observation networks." : "第26条：洪水と干ばつの際、MOWRAMは関係省庁・地方当局と緊密に連携して王国政府の本部として行動する。予報・警報・観測網に関する条文はない。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Royal Decree NS/RKAM/0699/08 (23 June 1999) and Sub-Decree No. 58 (30 June 1999) on the Organization and Function of MOWRAM" : "MOWRAMの組織と機能に関する王令NS/RKAM/0699/08（1999年6月23日）および政令第58号（1999年6月30日）"}</td>
                  <td className={TD}>1999</td>
                  <td className={TD}>{en ? "Establishes MOWRAM, including the Department of Meteorology (DOM) and the Department of Hydrology and River Works (DHRW)." : "MOWRAMを設置。気象局（DOM）と水文河川工事局（DHRW）を含む。"}</td>
                  <td className={TD}>{en ? "The operational basis on which DOM produces weather forecasts and warnings and DHRW produces flood and drought forecasts and warnings; in practice warnings are signed by the Minister, and by the Prime Minister in very severe cases (as documented in 2014)." : "DOMが気象予報・警報を、DHRWが洪水・干ばつの予報・警報を発する実務上の根拠。慣行として警報は大臣が署名し、極めて深刻な場合は首相が署名する（2014年時点の記録）。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Sub-Decree No. 35 ANKR-BK (1995, amended 1999); Royal Decree SN/RKT/0804/234 (2004); Royal Decree on the Organization and Functioning of NCDM (24 December 2015)" : "政令第35号ANKR-BK（1995年、1999年改正）、王令SN/RKT/0804/234（2004年）、NCDMの組織と機能に関する王令（2015年12月24日）"}</td>
                  <td className={TD}>1995 / 2004 / 2015</td>
                  <td className={TD}>{en ? "Creates and reorganises NCDM: chaired by the Prime Minister, with two Senior Ministers as First and Second Vice-Presidents, the Ministers of Interior and National Defence as Vice-Presidents, and 19 ministries and institutions as members, including MOWRAM, the armed forces and the Cambodian Red Cross. Tasks include managing disaster-related information and disseminating to communities down to the commune level." : "NCDMを設置・再編。首相を委員長、上級大臣2名を第一・第二副委員長、内務大臣と国防大臣を副委員長とし、MOWRAM、軍、カンボジア赤十字社を含む19の省庁・機関が構成員。災害関連情報の管理と、コミューンまでの階層を通じた住民への周知を任務に含む。"}</td>
                  <td className={TD}>{en ? "Coordination and information-management functions only; no authority to issue hazard warnings. In 2014 the government itself described NCDM as having no decision-making, policy-making or advisory authority, only a coordination role." : "調整と情報管理の機能のみで、ハザード警報を発する権限はない。政府自身が2014年に、NCDMには意思決定・政策立案・助言の権限がなく調整役にとどまると説明。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Sub-Decree No. 61 (29 June 2006) on Commune Committees for Disaster Management; NCDM Direction No. 315 (21 July 2010) on Village Disaster Management Groups" : "コミューン災害管理委員会に関する政令第61号（2006年6月29日）、村災害管理グループに関するNCDM指示第315号（2010年7月21日）"}</td>
                  <td className={TD}>2006 / 2010</td>
                  <td className={TD}>{en ? "Authorises Commune Committees for Disaster Management (CCDM) chaired by the commune chief, and Village Disaster Management Groups (VDMG) led by the village headman; all members are volunteers." : "コミューン長を委員長とするコミューン災害管理委員会（CCDM）と、村長を長とする村災害管理グループ（VDMG）の設置を認める。構成員はすべてボランティア。"}</td>
                  <td className={TD}>{en ? "VDMG tasks include disseminating warnings of impending threats and assisting the evacuation of people and livestock; before 2010 these were the responsibility of the village chief with commune councillors." : "VDMGの任務に、差し迫った脅威の警報の周知と住民・家畜の避難支援が含まれる。2010年以前はコミューン評議員の支援を受けた村長の責務だった。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Law on Administration of the Capital, Provinces, Municipalities, Districts and Khans (Organic Law, NS/RKM/0508/017)" : "首都・州・市・郡・カンの行政に関する法律（組織法、NS/RKM/0508/017）"}</td>
                  <td className={TD}>2008</td>
                  <td className={TD}>{en ? "Unified administration of the sub-national tiers under the Ministry of Interior (decentralisation and deconcentration reform), dated 22 May 2008." : "内務省の下での下位行政単位の統一行政（地方分権・分散化改革）。2008年5月22日。"}</td>
                  <td className={TD}>{en ? "No early-warning provision recorded; it supplies the governors and district chiefs who chair the provincial and district disaster management committees." : "予警報に関する規定は確認されていないが、州・郡の災害管理委員会を率いる州知事・郡長の地位の根拠となる。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Law on the Management of the Nation in Emergencies (018/0420)" : "国家緊急事態管理法（018/0420、Law on the Management of the Nation in Emergencies）"}</td>
                  <td className={TD}>2020</td>
                  <td className={TD}>{en ? "Promulgated 29 April 2020 to maintain national security and public order and to protect lives, health, property and the environment when the nation is jeopardised; criticised by Human Rights Watch as overly broad (telecommunications surveillance, information restrictions, unlimited duration)." : "2020年4月29日公布。国民が危機にさらされた際に国家安全と公共秩序を維持し、生命・健康・財産・環境を保護する。ヒューマン・ライツ・ウォッチは通信監視・情報制限・期限の不在を過度に広範と批判。"}</td>
                  <td className={TD}>{en ? "Not a disaster-warning instrument; the grounds listed do not name natural disasters, and the record consulted does not state who declares the emergency." : "災害警報の法令ではなく、列挙された発動要件に自然災害の名はない。参照した記録は誰が緊急事態を宣言するかを示していない。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Circular No. 08 on Flood Preparedness and Response (Office of the Prime Minister)" : "洪水への備えと対応に関する通達第08号（首相府）"}</td>
                  <td className={TD}>2019</td>
                  <td className={TD}>{en ? "Issued 4 September 2019 ahead of Storm Kajiki, instructing ministries, institutions and local authorities to prepare for floods." : "2019年9月4日、暴風雨カジキに備えて省庁・機関・地方当局に洪水への準備を指示。"}</td>
                  <td className={TD}>{en ? "Illustrates the ad hoc, event-driven instruments through which the Prime Minister directs preparedness in the absence of a standing warning law." : "常設の警報法がない中で、首相が事案ごとの文書で備えを指示する運用を示す例。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                What the Law on Disaster Management settles is the architecture of response: NCDM as the headquarters, a Secretariat-General for day-to-day operations, a focal point in every ministry, a committee at each sub-national tier, and a two-step mechanism by which NCDM proposes and the Royal Government declares a &ldquo;disaster situation&rdquo; for areas affected by a disaster of great extent (Articles 20 and 21). It also contains sanctions that bear on warning indirectly: failure to report a risk situation is punishable by one to six months of imprisonment and a fine of 100,000 to 1,000,000 riel (Article 44), and disaster-management officials who neglect their duties and cause severe damage face six months to two years (Article 45). What the law leaves open is more consequential for early warning. Article 11 is the only article that mentions early warning, and it does so only as a preparedness task to &ldquo;develop early warning systems, strategies, contingency plans and emergency response plans&rdquo;; the annexed glossary defines an early warning system but no article designates an issuer. The word evacuation does not appear. Articles 7, 9, 25 and 34 all defer to sub-decrees, and Articles 38 and 39 provide only that NCDM is funded through the budget of the Office of the Council of Ministers and that the state shall keep an appropriate reserve; no article creates a named disaster management fund.
              </>
            ) : (
              <>
                災害管理法が定めているのは対応の骨格です。すなわち、本部としてのNCDM、日常業務を担う事務総局、全省庁の窓口、各行政階層の委員会、そしてNCDMが提案し王国政府が「大規模な災害」の被災地域を「災害状況」下に置くと宣言する二段階の仕組み（第20条・第21条）です。警報に間接的に関わる罰則もあります。危険な状況の報告を怠った者は1〜6か月の拘禁と10万〜100万リエルの罰金（第44条）、職務を怠り重大な被害を生じさせた災害管理担当官は6か月〜2年の拘禁（第45条）です。一方、予警報にとってより重要なのは、この法律が定めていないことです。早期警報に触れる唯一の条文である第11条は、備えの一環として「早期警報システム、戦略、コンティンジェンシープラン、緊急対応計画を整備する」と述べるにとどまり、附属の用語集に早期警報システムの定義はあっても、発表機関を指定する条文はありません。「避難」という語も登場しません。第7条・第9条・第25条・第34条はいずれも政令に委ね、第38条・第39条はNCDMの経費を閣僚評議会府の予算から支出すること、国が適切な予備費を確保することを定めるだけで、名称を持つ災害管理基金を創設する条文はありません。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The dependence on subsidiary legislation was recognised early. A press report of early 2016 described the law as stalled six months after passage because sub-decrees were needed before anything further could be done, and an IFRC/UNDP study of 2017 on developing subsidiary legislation was written to help draft them. Whether a sub-decree on the Secretariat-General or on the sub-national committees was ever adopted after 2015 could not be confirmed; the 2006 sub-decree on commune committees still appears to be the operative basis. On the water side, Article 26 of the law of 2007 gives MOWRAM a headquarters role that overlaps on its face with Article 6 of the law of 2015, and no official text reconciles the two. The draft standard operating procedure for a multi-hazard early warning system prepared with UNDP in November 2019 describes the working arrangement, with MOWRAM responsible for &ldquo;the technical part&rdquo; and NCDM for &ldquo;the administration part&rdquo;, but it remained a draft in October 2025, when the CREWS final report still spoke of updating it for the new impact-based flood forecasting system. The strategic plan of MOWRAM for 2024&ndash;2028 concedes that sub-decrees and procedures under the water law &ldquo;have not been sufficiently developed&rdquo; and that legal standards giving the Ministry &ldquo;sufficient authority&rdquo; have not been drafted. An update of the hydro-meteorological legislation planned under the CREWS project was put on hold after the change of government on 22 August 2023, and the resources were redirected to the Early Warnings for All process. The reform path since then has been a roadmap rather than a law.
              </>
            ) : (
              <>
                下位法令への依存は早くから認識されていました。2016年初めの報道は、政令が整わなければ何も進められないとして、成立半年後も法律が停滞していると伝え、2017年にはIFRCとUNDPが下位法令の起草を支援する報告書を作成しています。事務総局や下位行政単位の委員会に関する政令が2015年以降に制定されたかどうかは確認できず、コミューン委員会については2006年の政令が今も実務上の根拠になっているとみられます。水の側では、2007年法第26条がMOWRAMに与える本部の役割が2015年法第6条と文面上重なっており、両者を調整する公式文書はありません。2019年11月にUNDPとともに作成されたマルチハザード早期警報システムの標準作業手順（SOP）案は、MOWRAMが「技術部分」、NCDMが「行政部分」を担うという実務上の分担を記述していますが、2025年10月のCREWS最終報告書が新しい影響予測型洪水予報システムのために「更新する」と述べているとおり、依然として案のままです。MOWRAMの2024〜2028年戦略開発計画も、水法に基づく政令・手続きが「十分に整備されていない」こと、省に「十分な権限」を与える法的基準が未起草であることを認めています。CREWSプロジェクトで予定されていた水文気象法令の更新は、2023年8月22日の政権交代後に保留され、資源はEW4All（Early Warnings for All）プロセスに振り向けられました。それ以降の改革の道筋は、法律ではなくロードマップです。
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
                The actors fall into three groups: the forecasters inside MOWRAM, the coordination and response hierarchy headed by NCDM and running down to the villages, and a set of auxiliaries, among them the Cambodian Red Cross, the armed forces, the Ministry of Information, the telecommunications regulator and the non-governmental operator of the EWS1294 platform. The Mekong River Commission supplies the upstream forecasts on which the Mekong flood warnings depend. The table summarises mandates and roles; the paragraphs that follow describe how the four pillars of an early warning system (risk knowledge, monitoring and forecasting, dissemination and communication, response capability) are divided among them.
              </>
            ) : (
              <>
                アクターは3つのグループに分けられます。MOWRAM内の予報機関、NCDMを頂点として村まで続く調整・対応の階層、そしてカンボジア赤十字社、軍、情報省、通信規制当局、EWS1294プラットフォームを運営するNGOなどの補助的主体です。メコン河委員会は、メコン川の洪水警報が依拠する上流の予報を供給しています。表に権限と役割をまとめ、続く段落で早期警報システムの4つの柱（リスク知識、監視・予報、伝達・コミュニケーション、対応能力）がどのように分担されているかを説明します。
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
                  <td className={TDH}>{en ? "Department of Meteorology (DOM)" : "気象局（DOM、Department of Meteorology）"}</td>
                  <td className={TD}>MOWRAM</td>
                  <td className={TD}>{en ? "Royal Decree NS/RKAM/0699/08 and Sub-Decree No. 58 of 1999; no meteorological service act" : "1999年王令NS/RKAM/0699/08・政令第58号。気象業務法はない"}</td>
                  <td className={TD}>{en ? "Produces and disseminates weather forecasts and warnings (heavy rain, gusty wind, thunderstorm and lightning, tropical cyclone, storm surge); reports to the Minister; live announcements on television and radio. Trained in CAP but had issued no CAP warnings as of July 2025." : "気象予報と警報（大雨、強風、雷雨・落雷、熱帯低気圧、高潮）を作成・発表し、大臣に報告。テレビ・ラジオで生放送の発表を行う。CAPの訓練を受けたが、2025年7月時点でCAP形式の警報発表はゼロ。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Department of Hydrology and River Works (DHRW)" : "水文河川工事局（DHRW、Department of Hydrology and River Works）"}</td>
                  <td className={TD}>MOWRAM</td>
                  <td className={TD}>{en ? "Established 1999 under MOWRAM; Water Law Arts 8 and 24" : "1999年にMOWRAM下に設置。水法第8条・第24条"}</td>
                  <td className={TD}>{en ? "Issues flood and drought forecasts and warnings; receives Mekong River Commission telemetry and forecasts; hosts the MCH hydrological database installed under CREWS." : "洪水・干ばつの予報と警報を発表。メコン河委員会のテレメトリと予報を受領し、CREWSで導入されたMCH水文データベースを保持。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Ministry of Water Resources and Meteorology (MOWRAM)" : "水資源気象省（MOWRAM）"}</td>
                  <td className={TD}>{en ? "Royal Government" : "王国政府"}</td>
                  <td className={TD}>{en ? "Water Law 2007, Arts 5, 6, 8, 24, 26; founding decrees of 1999" : "2007年水法第5・6・8・24・26条、1999年設置法令"}</td>
                  <td className={TD}>{en ? "Headquarters of the Royal Government in floods and droughts (Art. 26); the Minister signs forecasts and warnings; 24 provincial departments (PDOWRAM) operate the provincial hydro-meteorological offices." : "洪水・干ばつ時の王国政府の本部（第26条）。大臣が予報・警報に署名。24の州水資源気象局（PDOWRAM）が州の水文気象事務所を運営。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "National Committee for Disaster Management (NCDM)" : "国家災害管理委員会（NCDM）"}</td>
                  <td className={TD}>{en ? "Chaired by the Prime Minister; budget line in the Office of the Council of Ministers" : "首相が委員長。予算は閣僚評議会府に計上"}</td>
                  <td className={TD}>{en ? "Law on Disaster Management 2015, Arts 6-9, 20-22; Royal Decrees of 2004 and 2015" : "2015年災害管理法第6〜9条・第20〜22条、2004年・2015年王令"}</td>
                  <td className={TD}>{en ? "Coordinates; receives MOWRAM announcements and relays them to provincial committees; verifies sensor triggers before EWS1294 call-outs; issues preparedness directives; runs the Emergency Coordination Centre (WebEOC) and the CamDi loss database; recognised EWS1294 as the national early warning system." : "調整役。MOWRAMの発表を受けて州委員会に中継し、EWS1294の一斉発信前にセンサー作動を検証。備えの指示を発出し、緊急調整センター（WebEOC）と被害データベースCamDiを運営。EWS1294を国の早期警報システムとして承認。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Provincial and District Committees for Disaster Management (PCDM, DCDM)" : "州・郡災害管理委員会（PCDM、DCDM）"}</td>
                  <td className={TD}>{en ? "Provincial governors and district chiefs" : "州知事・郡長"}</td>
                  <td className={TD}>{en ? "Law on Disaster Management Art. 9 and Art. 19; Organic Law 2008" : "災害管理法第9条・第19条、2008年組織法"}</td>
                  <td className={TD}>{en ? "Responsible for response in their territory; PCDMs operate EWS1294 call-outs in all 25 provinces and manage the river gauges; four PCDM working groups, including Communication and Information." : "管内の対応に責任を負う。PCDMは全25州でEWS1294の発信を担い、河川水位計を管理。情報伝達を含む4つの作業部会を持つ。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Commune Committees (CCDM) and Village Disaster Management Groups (VDMG)" : "コミューン災害管理委員会（CCDM）・村災害管理グループ（VDMG）"}</td>
                  <td className={TD}>{en ? "Commune chief; village headman" : "コミューン長、村長"}</td>
                  <td className={TD}>{en ? "Sub-Decree No. 61 of 2006; NCDM Direction No. 315 of 2010" : "2006年政令第61号、2010年NCDM指示第315号"}</td>
                  <td className={TD}>{en ? "Last-mile dissemination and organisation of evacuation; read local water-level poles and report upward; three CCDM teams (information and response led by Red Cross volunteers, health, security and rescue led by commune police). All volunteers." : "ラストマイルの伝達と避難の組織化。地元の水位標を読み上位へ報告。CCDMには赤十字ボランティアが率いる情報・対応チーム、保健チーム、コミューン警察が率いる警備・救助チームの3チーム。全員ボランティア。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Royal Cambodian Armed Forces (RCAF) and National Police" : "カンボジア王国軍（RCAF）・国家警察"}</td>
                  <td className={TD}>{en ? "Ministry of National Defence; Ministry of Interior" : "国防省、内務省"}</td>
                  <td className={TD}>{en ? "NCDM membership; Law on Disaster Management Art. 25" : "NCDM構成員、災害管理法第25条"}</td>
                  <td className={TD}>{en ? "Search and rescue and evacuation support; in September 2024 the Prime Minister ordered RCAF and the National Police to intervene in emergencies if needed." : "捜索救助と避難支援。2024年9月、首相は必要に応じて緊急事態に介入するようRCAFと国家警察に命令。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Ministry of Information; Ministry of Post and Telecommunications (MPTC)" : "情報省、郵便電気通信省（MPTC）"}</td>
                  <td className={TD}>{en ? "Royal Government" : "王国政府"}</td>
                  <td className={TD}>{en ? "NCDM membership; sectoral mandates" : "NCDM構成員、各省の所管"}</td>
                  <td className={TD}>{en ? "The Ministry of Information broadcasts severe weather advisories and flood situations through state television (with sign language) and radio; MPTC granted the free short code 1294 on the three mobile operators and co-ran the cell-broadcast demonstration of July 2025." : "情報省は国営テレビ（手話付き）とラジオで気象注意報と洪水状況を放送。MPTCは3つの通信事業者で無料短縮番号1294を付与し、2025年7月のセルブロードキャスト実演を共催。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Cambodian Red Cross (CRC)" : "カンボジア赤十字社（CRC、Cambodian Red Cross）"}</td>
                  <td className={TD}>{en ? "Auxiliary to the public authorities; President Bun Rany" : "公的機関の補助組織。社長はブン・ラニー"}</td>
                  <td className={TD}>{en ? "Statutory NCDM member (Royal Decrees of 2004 and 2015); memoranda with NCDM" : "NCDMの法定構成員（2004年・2015年王令）、NCDMとの覚書"}</td>
                  <td className={TD}>{en ? "Delivery of warnings at the local level through volunteers; main relief auxiliary; provincial branches headed by the governors." : "ボランティアを通じた地域レベルでの警報伝達。主要な救援補助組織で、州支部長は州知事が兼ねる。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "People in Need (PIN) and the EWS1294 platform" : "People in Need（PIN）とEWS1294プラットフォーム"}</td>
                  <td className={TD}>{en ? "Non-governmental organisation; NCDM recognition" : "NGO。NCDMによる承認"}</td>
                  <td className={TD}>{en ? "No sub-decree or prakas found; NCDM recognition (2019) and memoranda" : "政令・省令は確認されず。NCDMの承認（2019年）と覚書"}</td>
                  <td className={TD}>{en ? "Developed and maintains the national dissemination platform (interactive voice calls, SMS, Telegram, Facebook, radio, loudspeakers) and 28 sonar river sensors; CAP-compliant since August 2020." : "国の伝達プラットフォーム（音声自動通話、SMS、Telegram、Facebook、ラジオ、スピーカー）と28基のソナー河川センサーを開発・維持。2020年8月からCAP準拠。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Mekong River Commission, Regional Flood Management and Mitigation Centre (RFMMC)" : "メコン河委員会（MRC）地域洪水管理軽減センター（RFMMC）"}</td>
                  <td className={TD}>{en ? "Intergovernmental; Phnom Penh" : "政府間機関、プノンペン"}</td>
                  <td className={TD}>{en ? "Mekong Agreement of 1995 and its procedures" : "1995年メコン協定とその手続き"}</td>
                  <td className={TD}>{en ? "Daily Mekong flood forecasts and warnings (June to October) for Stung Treng, Kratie, Kampong Cham, Koh Khel and other stations, supplied as a service to member governments." : "ストゥントレン、クラチエ、コンポンチャム、コッケルなどの地点について、6〜10月に毎日メコン川洪水予報・警報を加盟国政府向けに提供。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Other ministries and partners" : "その他の省庁・パートナー"}</td>
                  <td className={TD}>{en ? "Ministry of Rural Development, MAFF, National Social Protection Council, WFP" : "農村開発省、農林水産省、国家社会保障評議会、WFP"}</td>
                  <td className={TD}>{en ? "NCDM membership; memoranda; UN arrangements" : "NCDM構成員、覚書、国連の取り決め"}</td>
                  <td className={TD}>{en ? "Groundwater drought sensors feeding EWS1294 (Ministry of Rural Development with ActionAid); co-author of the 2019 draft SOP (MAFF); shock-responsive social protection linked to the flood anticipatory action plan; WFP is the UN focal point for Early Warnings for All." : "EWS1294に接続する地下水干ばつセンサー（農村開発省とActionAid）、2019年SOP案の共同作成（農林水産省）、洪水の予測的行動計画と連動する社会保障、WFPはEW4Allの国連窓口。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                The monitoring and forecasting pillar belongs almost entirely to <strong className="text-foreground">MOWRAM</strong>, through DOM and DHRW. In 2014 DOM operated 21 synoptic stations (9 of them automatic), about 200 manual rain gauges, a government-funded S-band Doppler radar at Techo Sen in Phnom Penh installed in February 2012, a satellite ground station and a GTS message switching system, with the Synergie forecasting system supplied by Météo-France International in 2012. UNDP handed over 24 automatic weather stations and 29 automatic hydrological stations on 22 March 2019. The 2023 baseline in the MOWRAM strategic plan is 56 hydrological water-level stations, 19 water-quality stations and 98 meteorological stations, with targets of 81, 24 and 123 by 2028. Forecast products are still limited: in 2014 forecasts were issued once a day at 10:30 and updated three times, DOM was not staffed around the clock except during typhoon events, and no quantitative flood forecasts were computed; at the start of the CREWS project DOM provided forecasts of up to three days only. Since 30 April 2024 an ad hoc DOM working group has issued experimental weekly forecasts for four provinces, and since September 2024 an operational impact-based flood forecasting system has run in the pilot basins of Pursat, Prek Thnot and Sen.
              </>
            ) : (
              <>
                監視・予報の柱は、DOMとDHRWを通じてほぼ全面的に<strong className="text-foreground">MOWRAM</strong>に属しています。2014年時点でDOMは21の総観観測所（うち9が自動）、約200の手動雨量計、2012年2月にプノンペンのテチョセンに政府資金で設置されたSバンドドップラーレーダー、衛星受信局、GTSメッセージ交換システムを運用し、2012年にMétéo-France Internationalから予報システムSynergieを導入しました。2019年3月22日にはUNDPが自動気象観測所24基と自動水文観測所29基を引き渡しています。MOWRAM戦略開発計画の2023年ベースラインは水文水位観測所56、水質観測所19、気象観測所98で、2028年までにそれぞれ81、24、123に増やす目標です。予報プロダクトは今も限定的です。2014年には予報は1日1回10時30分に発表され3回更新されるのみで、DOMは台風時を除いて24時間体制ではなく、定量的な洪水予報は計算も発表もされていませんでした。CREWSプロジェクト開始時点でもDOMの予報は最長3日先まででした。2024年4月30日からDOMの臨時作業部会が4州を対象に試験的な週間予報を発表し、2024年9月からはプルサット川・プレクトノット川・セン川の3つのパイロット流域で影響予測型洪水予報システムが運用されています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                <strong className="text-foreground">NCDM</strong> is an inter-ministerial committee rather than an agency. The Prime Minister presides, two Senior Ministers serve as First and Second Vice-Presidents, and the Ministers of Interior and National Defence as Vice-Presidents; Nhim Vanda was First Vice-President when the law was promulgated in July 2015, and Kun Kim has held the post since late 2019. Operations are run by a Secretariat-General with five departments: Administration and Finance; Information and Relations, which includes an Information and Prediction Bureau tasked to follow weather, meteorology and hydrology and to broadcast emergency warnings; Emergency Response and Rehabilitation; Preparedness and Training; and Search and Rescue. An Emergency Coordination Centre runs WebEOC with support from the AHA Centre and JICS. NCDM hosts the CamDi disaster loss database launched with UNDP in July 2014, which the CREWS assessment of 2025 found underutilised, with economic loss data largely missing. In its own words of 2014, NCDM &ldquo;does not have decision-making, policy-making or advisory authority but plays a coordination role&rdquo;, and in 2018 it described the national DRR framework as &ldquo;very fragmented, mostly project based&rdquo;.
              </>
            ) : (
              <>
                <strong className="text-foreground">NCDM</strong>は官庁ではなく省庁横断の委員会です。首相が委員長を務め、上級大臣2名が第一・第二副委員長、内務大臣と国防大臣が副委員長を務めます。2015年7月の法律公布時の第一副委員長はニム・バンダで、2019年末からはクン・キムがその職にあります。実務は5つの部門を持つ事務総局が担います。総務財務部、気象・水文の状況を追い緊急警報を放送する任務を持つ情報予測課を含む情報渉外部、緊急対応復旧部、備え・訓練部、捜索救助部です。緊急調整センターは、AHAセンターとJICSの支援を受けてWebEOCを運用しています。NCDMは2014年7月にUNDPとともに立ち上げた災害被害データベースCamDiを保持していますが、2025年のCREWSの評価は、CamDiが十分に活用されておらず経済損失データがほぼ欠落していると指摘しました。NCDM自身は2014年に「意思決定、政策立案、助言の権限はなく、調整の役割を果たしている」と述べ、2018年には国のDRRの枠組みを「極めて断片的で、大半がプロジェクトベース」と評しています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The response pillar is carried by the <strong className="text-foreground">sub-national committees</strong>. Provincial governors and provincial departments make up the PCDM, district chiefs and district officers the DCDM, and the Red Cross branches sit in both. The PCDM has four working groups (search, rescue and security; health and WASH; communication and information; response and emergency relief). The CCDM is chaired by the commune chief with the first deputy as vice-chair and the commune clerk as secretary, and the VDMG is led by the village headman with a female village assistant as deputy and members including the health support team, the village veterinarian and the village Red Cross volunteer. The CDRI study of 2015 found that the CCDM is responsible for commune contingency planning and the VDMG for local risk reduction planning and for disseminating warnings and assisting evacuation, that all members are volunteers who receive funds only when an NGO supports them, and that the NCDM technical guidance of 2013 on contingency planning covered provinces and districts but not communes.
              </>
            ) : (
              <>
                対応の柱を担うのは<strong className="text-foreground">下位行政単位の委員会</strong>です。州知事と州の各局がPCDMを、郡長と郡の職員がDCDMを構成し、赤十字の支部が双方に参加します。PCDMには捜索救助・警備、保健・水衛生、情報伝達、対応・緊急救援の4つの作業部会があります。CCDMはコミューン長が委員長、第一副コミューン長が副委員長、コミューン書記が事務局を務め、VDMGは村長を長、女性の村長補佐を副とし、保健支援チーム、村の獣医、村の赤十字ボランティアなどが構成員です。CDRIの2015年の研究は、CCDMがコミューンのコンティンジェンシープランを、VDMGが地域のリスク削減計画と警報の周知・避難支援を担うこと、構成員は全員ボランティアでNGOの支援がある場合にしか資金を得られないこと、NCDMの2013年のコンティンジェンシープラン技術指針が州・郡を対象としコミューンを対象としていないことを指摘しています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The <strong className="text-foreground">Cambodian Red Cross</strong>, founded on 18 February 1955 and recognised as the primary auxiliary to the public authorities in humanitarian services, is a statutory member of NCDM, has memoranda with NCDM on early-warning preparedness, and is described as playing an important role in delivering warnings at the local level. Its provincial branches are headed by the provincial governors, which binds it to the PCDM; at the same time, its coordination with NCDM has been questioned on the record, as in June 2015 when a CRC deputy director said she did not work with NCDM and did not know what it did. The <strong className="text-foreground">armed forces and police</strong> are NCDM members whose means the Search and Rescue department plans to use. The <strong className="text-foreground">Ministry of Information</strong> is responsible for broadcasting severe weather advisories, warnings and flood situations, and in 2014 radio was still described as the most important channel. <strong className="text-foreground">MPTC</strong> granted the free short code 1294 for all users of the three mobile operators (Smart, Metfone and Cellcard).
              </>
            ) : (
              <>
                <strong className="text-foreground">カンボジア赤十字社</strong>は1955年2月18日に設立され、人道サービスにおける公的機関の第一の補助組織として認められています。NCDMの法定構成員であり、早期警報の備えに関する覚書をNCDMと結び、地域レベルでの警報伝達に重要な役割を果たすとされています。州支部長は州知事が兼ねており、PCDMと結びついていますが、他方でNCDMとの連携は公の場で疑問視されてきました。2015年6月には、赤十字の副局長が「NCDMとは一緒に仕事をしておらず、彼らが何をしているのか知らない」と述べています。<strong className="text-foreground">軍と警察</strong>はNCDMの構成員で、捜索救助部がその資源の活用を計画します。<strong className="text-foreground">情報省</strong>は気象注意報・警報と洪水状況の放送を担い、2014年時点でもラジオが最も重要なチャンネルとされていました。<strong className="text-foreground">MPTC</strong>は3つの通信事業者（Smart、Metfone、Cellcard）の全利用者に無料の短縮番号1294を付与しました。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The dissemination pillar is dominated by <strong className="text-foreground">EWS1294</strong>, a platform conceived after the floods of 2011 by the Czech organisation People in Need, piloted in three villages of Pursat in partnership with NCDM in 2013 and now recognised by NCDM as the national early warning system and operated by the PCDMs in all 25 provinces. It combines interactive voice calls, SMS, Telegram, a Facebook page, radio through ABC since January 2022 and public loudspeakers (piloted in Battambang in October 2021, recently installed in Pursat) with 28 Tepmachcha sonar river sensors developed in 2016 whose warning and severe-warning thresholds are set at installation. It counted 118,351 unique subscribers on 2 November 2021, had made 235 call-outs and 284,838 completed calls in 2019&ndash;2020 reaching an estimated 1.17 million people in 21 provinces, and had sent 774,000 alerts by March 2022; ActionAid onboarded a further 63,000 users between October 2023 and March 2025, but no later total has been published. Its funders have included the Czech Ministry of Foreign Affairs, UNDP, ECHO, WFP, the Swiss Agency for Development and Cooperation and USAID. Finally, the <strong className="text-foreground">Mekong River Commission</strong> and its Regional Flood Management and Mitigation Centre in Phnom Penh produce the daily Mekong forecasts from June to October; in 2014 DHRW received the telemetry six-hourly and passed the data to MOWRAM and NCDM once a day at about 07:30. <strong className="text-foreground">WFP</strong> acts as the UN focal point for Early Warnings for All, and Cambodia chaired the ASEAN Committee on Disaster Management in 2025.
              </>
            ) : (
              <>
                伝達の柱は<strong className="text-foreground">EWS1294</strong>が占めています。チェコのNGO People in Needが2011年の洪水を受けて構想し、2013年にNCDMと提携してプルサット州の3村で試行したプラットフォームで、現在はNCDMから国の早期警報システムとして承認され、全25州のPCDMが運用しています。音声自動通話、SMS、Telegram、Facebookページ、2022年1月からのABCラジオ、公共スピーカー（2021年10月にバッタンバンで試行、最近はプルサットに設置）を、2016年に開発された28基のソナー河川センサー「Tepmachcha」と組み合わせており、センサーの警報・重大警報の閾値は設置時に設定されます。2021年11月2日時点の登録者は118,351人、2019〜2020年には235回の発信と284,838件の通話完了で21州の推定117万人に到達し、2022年3月までに累計774,000件の警報を送信しました。ActionAidは2023年10月〜2025年3月にさらに63,000人以上を登録しましたが、それ以降の総登録者数は公表されていません。資金はチェコ外務省、UNDP、ECHO、WFP、スイス開発協力庁、USAIDなどが提供してきました。最後に、<strong className="text-foreground">メコン河委員会</strong>とプノンペンにある地域洪水管理軽減センターは6〜10月に毎日メコン川の予報を作成しており、2014年にはDHRWがテレメトリを6時間ごとに受信し、MOWRAMとNCDMに1日1回7時30分ごろにデータを渡していました。<strong className="text-foreground">WFP</strong>はEW4Allの国連窓口を務め、カンボジアは2025年にASEAN災害管理委員会の議長国でした。
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
                The chain from forecast to household, as described by NCDM in 2018, by the Typhoon Committee mission of 2014 and by the draft SOP of 2019, runs through MOWRAM, NCDM and the territorial committees, with EWS1294 as a parallel overlay. It has two institutional checkpoints that are not technical: the signature of the Minister (or the Prime Minister) on MOWRAM announcements, and the verification by NCDM before an EWS1294 call-out.
              </>
            ) : (
              <>
                予報から世帯までの流れは、NCDMの2018年資料、2014年の台風委員会ミッション報告、2019年のSOP案によれば、MOWRAM、NCDM、各行政階層の委員会を経由し、EWS1294が並行する重ね合わせの経路となっています。この流れには技術的ではない制度上のチェックポイントが2つあります。MOWRAMの発表に対する大臣（または首相）の署名と、EWS1294の一斉発信前のNCDMによる検証です。
              </>
            )}
          </p>
          <ol className={OL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Observation and forecast.</strong> MRC telemetry and forecasts and the DHRW flood forecasts from the major Mekong stations (10 near-real-time hydrological stations in 2018), together with DOM three-day forecasts and nowcasts, are compiled inside MOWRAM. Bulletins precede warnings.
                </>
              ) : (
                <>
                  <strong className="text-foreground">観測と予報。</strong>MRCのテレメトリと予報、主要メコン観測所からのDHRWの洪水予報（2018年時点で準リアルタイム水文観測所10か所）、DOMの3日予報とナウキャストがMOWRAM内で集約されます。警報の前には水位情報（ブルテン）が出されます。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Announcement.</strong> DOM reports to the Minister of MOWRAM; in urgent cases it prepares an &ldquo;Announcement&rdquo; that the Minister signs and reports to the Prime Minister, and the Minister or the Director of DOM makes a live announcement on television and radio. Severe weather forecasts and warnings are signed by the Minister and, where a very severe event is expected, by the Prime Minister. Warnings state the issuance time, the areas and period concerned, the potential hazards and quantitative forecasts; DHRW flood warnings add the actions required.
                </>
              ) : (
                <>
                  <strong className="text-foreground">発表。</strong>DOMはMOWRAM大臣に報告し、緊急時には大臣が署名する「発表文」を作成して首相に報告します。大臣またはDOM局長がテレビ・ラジオで生放送の発表を行います。荒天の予報と警報は大臣が署名し、極めて深刻な事象が見込まれる場合は首相が署名します。警報には発表時刻、対象地域と期間、想定されるハザード、定量的な予測が記され、DHRWの洪水警報には取るべき行動が加わります。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Distribution of the official announcement.</strong> The recipients listed by NCDM are the Cabinet of the Royal Palace, the Cabinet of the Prime Minister, NCDM, the Ministry of Information, the Cambodian Red Cross and the Ministries of Interior and National Defence; the provincial administrations, provincial departments and PCDMs; NGOs, international organisations, MRC and the UN; and the media. The means are upload to the MOWRAM website, e-mail, fax and telephone.
                </>
              ) : (
                <>
                  <strong className="text-foreground">公式発表の配信。</strong>NCDMが挙げる宛先は、王宮官房、首相官房、NCDM、情報省、カンボジア赤十字社、内務省と国防省、州行政・州の各局・PCDM、NGO・国際機関・MRC・国連、そしてメディアです。手段はMOWRAMウェブサイトへの掲載、電子メール、ファクス、電話です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Downward relay.</strong> NCDM and MOWRAM/DHRW pass the warning to the provincial water resources departments and the PCDM, which pass it to the DCDM, the CCDM and the village authorities. Upward, villagers read local water-level poles and the VDMG reports through the CCDM, DCDM and PCDM to NCDM; a community example cited by NCDM uses 7.50 m on a local pole for an emergency announcement and 8.00 m for flooding.
                </>
              ) : (
                <>
                  <strong className="text-foreground">下方への中継。</strong>NCDMとMOWRAM/DHRWは州水資源気象局とPCDMに警報を渡し、PCDMはDCDM、CCDM、村当局へと渡します。上方には、村民が地元の水位標を読み、VDMGがCCDM、DCDM、PCDMを経てNCDMに報告します。NCDMが挙げる地域の例では、地元の水位標で7.50 mが緊急発表、8.00 mが浸水の目安です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">EWS1294 overlay.</strong> When a sonar sensor reaches its threshold the PCDM focal points are called automatically and NCDM is notified; after verification, NCDM issues voice alerts to registered users in the affected area, and the message fans out to SMS, Telegram, Facebook, ABC radio and loudspeakers. In the flash floods of October 2020 a call reached a village chief in Banteay Meanchey five hours before the flood.
                </>
              ) : (
                <>
                  <strong className="text-foreground">EWS1294の重ね合わせ。</strong>ソナーセンサーが閾値に達するとPCDMの担当者に自動で電話がかかり、NCDMに通知されます。検証の後、NCDMが対象地域の登録者に音声警報を発信し、メッセージはSMS、Telegram、Facebook、ABCラジオ、スピーカーに展開されます。2020年10月の鉄砲水では、バンテイメンチェイ州の村長に洪水の5時間前に電話が届きました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Response and evacuation.</strong> NCDM issues directives to the capital and provincial committees, as on 19 August 2026 when it instructed them to mobilise resources, designate and publicise safe shelters, identify people needing evacuation assistance, prioritise pregnant women, the elderly, persons with disabilities, the chronically ill and children, and use the 1294 system and other media. The territorial committees organise the evacuation itself (Articles 18 and 19 of the law of 2015); in August 2026 the Kratie authorities prepared to evacuate residents of five districts as the Mekong rose.
                </>
              ) : (
                <>
                  <strong className="text-foreground">対応と避難。</strong>NCDMは首都と各州の委員会に指示を出します。2026年8月19日の指示では、資源の動員、安全な避難所の指定と周知、避難支援を要する人の特定、妊婦・高齢者・障害者・慢性疾患者・子どもの優先、1294システムと他のメディアの活用を求めました。避難そのものを組織するのは各行政階層の委員会です（2015年法第18条・第19条）。2026年8月にはメコン川の水位上昇を受けてクラチエ州当局が5郡の住民避難の準備に入りました。
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
                  <td className={TDH}>{en ? "Mekong river floods" : "メコン川の洪水"}</td>
                  <td className={TD}>{en ? "MOWRAM (DHRW), using MRC RFMMC forecasts" : "MOWRAM（DHRW）。MRC RFMMCの予報を利用"}</td>
                  <td className={TD}>{en ? "MOWRAM caution levels published in August 2026: Stung Treng 10.70 m, Kratie 22.0 m, Kampong Cham 15.2 m. MRC uses the terms alarm level and flood level for the same stations." : "2026年8月にMOWRAMが公表した警戒水位：ストゥントレン10.70 m、クラチエ22.0 m、コンポンチャム15.2 m。MRCは同じ観測所について「alarm level」「flood level」の用語を用いる。"}</td>
                  <td className={TD}>{en ? "MOWRAM announcement; television and radio; MOWRAM website; relay through PCDM, DCDM and CCDM; EWS1294." : "MOWRAMの発表、テレビ・ラジオ、MOWRAMウェブサイト、PCDM・DCDM・CCDMを通じた中継、EWS1294。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Mekong at Phnom Penh" : "プノンペンのメコン川"}</td>
                  <td className={TD}>MOWRAM (DHRW)</td>
                  <td className={TD}>{en ? "A flood warning level of 10 m was cited by a DHRW deputy director in August 2005; no current official figure was found." : "2005年8月にDHRW副局長が洪水警戒水位10 mに言及。現行の公式値は確認できていない。"}</td>
                  <td className={TD}>{en ? "As above." : "同上。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Local river floods (EWS1294 sensors)" : "地域河川の洪水（EWS1294センサー）"}</td>
                  <td className={TD}>{en ? "PCDM through EWS1294, after NCDM verification" : "PCDM（EWS1294経由、NCDMの検証後）"}</td>
                  <td className={TD}>{en ? "Site-specific Warning Level and Severe Warning Level set at installation (green, orange, red)." : "設置時に設定される地点ごとの警報水位と重大警報水位（緑・橙・赤）。"}</td>
                  <td className={TD}>{en ? "Interactive voice calls to 1294 subscribers, SMS, Telegram, Facebook, ABC radio, loudspeakers." : "1294登録者への音声自動通話、SMS、Telegram、Facebook、ABCラジオ、スピーカー。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Severe weather (heavy rain, gusty wind, thunderstorm and lightning, tropical cyclone, storm surge)" : "荒天（大雨、強風、雷雨・落雷、熱帯低気圧、高潮）"}</td>
                  <td className={TD}>DOM (MOWRAM)</td>
                  <td className={TD}>{en ? "Advisories and warnings using thresholds based on experience; no documented SOP (2014). No lightning warning product is documented; NCDM advice is to stay indoors." : "経験に基づく閾値による注意報と警報。文書化されたSOPはない（2014年）。落雷の警報プロダクトは確認されず、NCDMの助言は屋内退避。"}</td>
                  <td className={TD}>{en ? "Television (with sign language) and radio through the Ministry of Information; MOWRAM website; EWS1294 and the EWS-KH app carrying MOWRAM forecasts since October 2024." : "情報省を通じたテレビ（手話付き）・ラジオ、MOWRAMウェブサイト、EWS1294、2024年10月からMOWRAMの予報を配信するEWS-KHアプリ。"}</td>
                </tr>
                <tr>
                  <td className={TDH}>{en ? "Multi-hazard stages (draft SOP 2019)" : "マルチハザードの段階（2019年SOP案）"}</td>
                  <td className={TD}>MOWRAM / NCDM</td>
                  <td className={TD}>{en ? "Three stages: Normal, Alarm, Warning; roles of PDOWRAM and PCDM defined for normal, alert and warning times. Still a draft in 2025." : "平常・警戒・警報の3段階。平常時・警戒時・警報時のPDOWRAMとPCDMの役割を定義。2025年時点でも案のまま。"}</td>
                  <td className={TD}>{en ? "Seven channels counted by CREWS: telephone, fax, e-mail, mobile, radio, television, online." : "CREWSが数える7つのチャンネル：電話、ファクス、電子メール、携帯電話、ラジオ、テレビ、オンライン。"}</td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className={TDH}>{en ? "Drought" : "干ばつ"}</td>
                  <td className={TD}>{en ? "MOWRAM; EWS1294 groundwater sensors (ActionAid with the Ministry of Rural Development)" : "MOWRAM、EWS1294の地下水センサー（ActionAidと農村開発省）"}</td>
                  <td className={TD}>{en ? "Sensor thresholds used to trigger cash transfers to 1,615 families in four provinces; National Action Plan on Drought Management and Adaptation 2025-2030 led by MOWRAM." : "センサーの閾値を4州1,615世帯への現金給付のトリガーに使用。MOWRAM主導の干ばつ管理適応国家行動計画2025〜2030。"}</td>
                  <td className={TD}>{en ? "EWS1294 channels." : "EWS1294の各チャンネル。"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={`mt-4 ${P}`}>
            {en ? (
              <>
                Dissemination has broadened since 2020 but remains subscription-based rather than broadcast-based. Radio was described in 2014 as the most important channel, and state television carries warnings with sign language. EWS1294 added a Facebook page in March 2020 (about 130,000 followers in October 2021), Telegram, radio through ABC in January 2022, loudspeakers and, in October 2024, the EWS-KH application carrying MOWRAM forecasts. In practice the last mile still depends on local officials: in the flood of November 2025, residents of Prek Touch village received voicemail and Telegram alerts while officials drove through town broadcasting warnings from car speakers. Cell broadcast has reached the demonstration stage only: MPTC and the Indian C-DOT ran a live demonstration at an ITU masterclass in Siem Reap on 21 July 2025, and ActionAid and GSMA are exploring it. On standards, the sequencing is unusual. The dissemination layer, EWS1294, has been compliant with the Common Alerting Protocol (CAP) since August 2020, whereas the alerting authority, MOWRAM, had received CAP training under CREWS but had issued no warning in CAP format when the project closed in July 2025, although the Cambodian entry in the WMO Register of Alerting Authorities was updated. Impact-based forecasting exists only in the three pilot basins, and the Southeast Asia Flash Flood Guidance System was used for multiple flash flood warnings in the rainy season of 2024. The National Roadmap for Early Warnings for All 2025&ndash;2028 was endorsed by the Prime Minister in August 2025 and launched on 20 November 2025; it follows the four pillars and reports a funding shortfall of US$22.7 million, about 41 percent of its estimated cost. WFP, as UN focal point, is to help NCDM set up a multi-stakeholder coordination platform with UNDP, FAO, IFAD and the World Bank, and a WFP/NCDM Anticipatory Action Plan for floods, with defined triggers and thresholds, was piloted in 2025.
              </>
            ) : (
              <>
                伝達手段は2020年以降広がりましたが、放送型ではなく登録型にとどまっています。2014年にはラジオが最も重要なチャンネルとされ、国営テレビは手話付きで警報を放送しています。EWS1294は2020年3月にFacebookページ（2021年10月に約13万フォロワー）、Telegram、2022年1月にABCラジオ、スピーカー、2024年10月にMOWRAMの予報を配信するEWS-KHアプリを加えました。それでも実際のラストマイルは地元の職員に依存しています。2025年11月の洪水では、プレクトゥッチ村の住民は音声メッセージとTelegramの警報を受け取る一方、職員は車のスピーカーで警報を流しながら町を回りました。セルブロードキャストは実演段階にとどまります。2025年7月21日にシェムリアップで開かれたITUのマスタークラスで、MPTCとインドのC-DOTが実演を行い、ActionAidとGSMAも導入を検討しています。規格の面では順序が通常と逆です。伝達層であるEWS1294は2020年8月から共通警報プロトコル（CAP）に準拠していますが、警報発表機関であるMOWRAMはCREWSでCAPの訓練を受けたものの、2025年7月のプロジェクト終了時点でCAP形式の警報を1件も発表していません（WMOの警報発表機関登録簿のカンボジアの項目は更新済み）。影響予測型予報は3つのパイロット流域にしかなく、東南アジア鉄砲水ガイダンスシステムは2024年の雨季に複数の鉄砲水警報に使われました。EW4All国家ロードマップ2025〜2028は2025年8月に首相が承認し、同年11月20日に発表されました。4つの柱に沿った構成で、推定費用の約41%にあたる2,270万米ドルの資金不足を報告しています。国連窓口のWFPはUNDP、FAO、IFAD、世界銀行とともにNCDMのマルチステークホルダー調整プラットフォーム設置を支援することになっており、トリガーと閾値を定めたWFP/NCDMの洪水予測的行動計画は2025年に試行されました。
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
          <p className={P}>
            {en ? (
              <>
                No new disaster law or decree has been verified since 2020. The reforms of the period are plans, platforms and financing arrangements, while the legislative track was suspended.
              </>
            ) : (
              <>
                2020年以降、新しい災害法や王令・政令の制定は確認されていません。この時期の改革は計画、プラットフォーム、資金調達の枠組みであり、立法の軌道は停止しました。
              </>
            )}
          </p>
          <ul className={UL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">April 2020 —</strong> The Law on the Management of the Nation in Emergencies (29 April 2020) created broad emergency powers for the state; it does not name natural disasters among its grounds and is not an early-warning instrument, but it defines the constitutional backdrop against which Article 21 of the disaster law operates.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2020年4月 —</strong> 国家緊急事態管理法（4月29日）が国家に広範な緊急権限を与えました。発動要件に自然災害の名はなく予警報の法令でもありませんが、災害法第21条が機能する憲法上の背景を規定しています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">August 2020 —</strong> EWS1294 became CAP-compliant, giving Cambodia a standards-based dissemination layer before it had a CAP-issuing alerting authority; in October 2020 the system was tested by flash floods in 14 provinces, with 28 deaths and 192,240 people affected in Banteay Meanchey alone.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2020年8月 —</strong> EWS1294がCAPに準拠し、CAPで警報を発する機関が存在しないまま規格準拠の伝達層が整いました。2020年10月には14州の鉄砲水で試され、バンテイメンチェイ州だけで28人が死亡、192,240人が被災しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">2021 —</strong> The year in which NCDM was to take over EWS1294, as announced by Kun Kim in November 2019, passed without a legal transfer; subscribers reached 118,351 in November 2021, a loudspeaker pilot began in Battambang in October 2021, and in March 2022 PIN described the arrangement as government ownership with NCDM implementing, MPTC supporting and PIN developing. In July 2021 the CREWS project for Cambodia and Lao PDR (US$5.54 million, to July 2025) began.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2021年 —</strong> 2019年11月にクン・キムが表明したEWS1294のNCDMへの移管年は、法的な移転なしに過ぎました。登録者は2021年11月に118,351人に達し、同年10月にバッタンバンでスピーカーの試行が始まり、2022年3月にPINは「政府が所有し、NCDMが実施し、MPTCが支援し、PINが開発する」体制と説明しています。2021年7月にはカンボジア・ラオスを対象とするCREWSプロジェクト（554万米ドル、2025年7月まで）が始まりました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">22 August 2023 —</strong> The change of government put the planned update of hydro-meteorological legislation and the five-year strategic plan under CREWS on hold; the resources were redirected to the Early Warnings for All process, making the roadmap the substitute for a law.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2023年8月22日 —</strong> 政権交代により、CREWSで予定されていた水文気象法令の更新と5年戦略計画の策定が保留され、資源はEW4Allプロセスに振り向けられました。ロードマップが法律の代替になった転換点です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">4 October 2023 —</strong> The national EW4All consultation workshop agreed to establish a national coordination mechanism using the existing disaster management structures; a gap analysis followed on 17 May 2024 and a validation workshop on 27 September 2024.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2023年10月4日 —</strong> EW4All国家協議ワークショップが、既存の災害管理機構を用いた国家調整メカニズムの設置に合意しました。2024年5月17日にギャップ分析、同年9月27日に検証ワークショップが続きました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">4 April 2024 —</strong> MOWRAM adopted its Strategic Development Plan on Water Resources and Meteorology 2024&ndash;2028, which sets station targets, plans a National Center for Water Resources and Meteorology Data Management and lists the Korea-funded Sekong, Sesan and Srepok flood forecasting system and a Japan-funded forecasting and early-warning capacity project; on 30 April 2024 DOM began experimental weekly forecasts.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年4月4日 —</strong> MOWRAMが水資源気象戦略開発計画2024〜2028を策定しました。観測所の目標、国家水資源気象データ管理センターの設置計画、韓国資金によるセコン・セサン・スレポック川洪水予報システム、日本資金による予報・早期警報能力強化事業が盛り込まれています。同年4月30日にはDOMが試験的な週間予報を開始しました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">July and September 2024 —</strong> The National Action Plan for Disaster Risk Reduction 2024&ndash;2028 was endorsed by the Council of Ministers on 5 July 2024 and launched by Kun Kim on 2 September 2024, with four strategic goals and 18 priority programmes covering floods, storms, droughts, fires and building collapses; it followed the NAP-DRR 2014&ndash;2018 and a drafted but unpublished plan for 2019&ndash;2023.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年7月・9月 —</strong> 災害リスク削減国家行動計画（NAP-DRR）2024〜2028が7月5日に閣僚評議会で承認され、9月2日にクン・キムが発表しました。4つの戦略目標と18の優先プログラムで洪水、暴風、干ばつ、火災、建物崩壊を対象とします。前身はNAP-DRR 2014〜2018と、策定されたものの未公表の2019〜2023年計画です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">September and October 2024 —</strong> Operational impact-based flood forecasting began in the Pursat, Prek Thnot and Sen basins (myDEWETRA platform with a Khmer interface, five-day forecasts twice daily), and the EWS-KH application carrying MOWRAM forecasts was released; in the same month the Prime Minister directed Kun Kim to work with provincial governors on safe havens and ordered RCAF and police readiness during floods in nine provinces.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2024年9月・10月 —</strong> プルサット・プレクトノット・セン流域で影響予測型洪水予報の運用が始まり（クメール語インターフェースのmyDEWETRA、1日2回の5日予報）、MOWRAMの予報を配信するEWS-KHアプリが公開されました。同じ月、首相は9州の洪水に際してクン・キムに州知事と避難所整備で連携するよう指示し、RCAFと警察に待機を命じました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">20 February 2025 —</strong> The Green Climate Fund approved FP258, the UNDP multi-country project Advancing Early Warnings for All (US$103.25 million grant, Cambodia among seven countries; agreement effective 8 December 2025, completion estimated December 2030); CREWS reports a GCF allocation of US$5 million to kick-start the roadmap, SOFF support of US$7.5 million and a WFP-led GCF proposal of US$25 million in preparation.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年2月20日 —</strong> 緑の気候基金がUNDPの多国間事業FP258「Advancing Early Warnings for All」（無償1億325万米ドル、カンボジアを含む7か国。協定発効2025年12月8日、完了見込み2030年12月）を承認しました。CREWSの報告では、ロードマップ始動のためのGCF配分500万米ドル、SOFF支援750万米ドル、WFP主導のGCF提案2,500万米ドルが準備中です。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">July 2025 —</strong> MPTC and C-DOT demonstrated cell broadcast live in Siem Reap on 21 July 2025 under the ITU Partner2Connect framework; CREWS phase 1 closed the same month with MOWRAM CAP-trained but with zero CAP issuances, and with formal NCDM approval of two-way communication in EWS1294 still pending.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年7月 —</strong> 7月21日、ITUのPartner2Connectの枠組みでMPTCとC-DOTがシェムリアップでセルブロードキャストを実演しました。同月にCREWS第1期が終了しましたが、MOWRAMはCAPの訓練を受けたもののCAP形式の発表はゼロで、EWS1294の双方向通信に対するNCDMの正式承認も保留のままでした。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">August and November 2025 —</strong> The Prime Minister endorsed the National Roadmap for Early Warnings for All 2025&ndash;2028 in August 2025 and it was launched on 20 November 2025, with a funding gap of US$22.7 million (41 percent); CREWS phase 2 was launched in November 2025. The same year MOWRAM led a National Action Plan on Drought Management and Adaptation 2025&ndash;2030 and a Climate-Resilient IWRM Action Plan 2026&ndash;2030, a GEDSI guideline for early warning was validated, and the WFP/NCDM flood anticipatory action plan was piloted.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2025年8月・11月 —</strong> 首相が8月にEW4All国家ロードマップ2025〜2028を承認し、11月20日に発表されました。資金不足は2,270万米ドル（41%）です。CREWS第2期も2025年11月に始まりました。同年、MOWRAMは干ばつ管理適応国家行動計画2025〜2030と気候レジリエントIWRM行動計画2026〜2030を主導し、早期警報のGEDSI（ジェンダー・障害・社会的包摂）指針が検証され、WFP/NCDMの洪水予測的行動計画が試行されました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">2026 —</strong> A five-year UNDP/GCF project Advancing Early Warning for All (2026&ndash;2030) is reported to have been launched in June 2026, and the operationalisation of two-way communication in EWS1294 was deferred to it. An administrative reform announced in May 2026 cut 30 departments across 16 ministries; no report consulted mentions NCDM among them. In August 2026 NCDM issued a flood preparedness directive and MOWRAM warned of Mekong levels above caution at Stung Treng and Kratie as Storm Saudel approached.
                </>
              ) : (
                <>
                  <strong className="text-foreground">2026年 —</strong> UNDP/GCFの5年事業「Advancing Early Warning for All」（2026〜2030）が2026年6月に始動したと報じられており、EWS1294の双方向通信の本格運用はこの事業に先送りされました。2026年5月に発表された行政改革は16省の30部局を削減しましたが、参照した報道にNCDMへの言及はありません。2026年8月にはNCDMが洪水への備えの指示を出し、MOWRAMは暴風雨サウデルの接近に伴いストゥントレンとクラチエで警戒水位を超えるメコン川の水位を警告しました。
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
          <p className={P}>
            {en ? (
              <>
                Reports from 2014, 2018, 2021 and 2025 describe the same weaknesses in near-identical language. The first five challenges below are structural, the last three operational.
              </>
            ) : (
              <>
                2014年、2018年、2021年、2025年の報告書は、ほぼ同じ言葉で同じ弱点を記述しています。以下の最初の5項目は構造的な課題、後の3項目は運用上の課題です。
              </>
            )}
          </p>
          <ul className={UL}>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">No legal allocation of the duty to warn or to evacuate.</strong> The law of 2015 names no warning issuer and never uses the word evacuation; the law of 2007 gives MOWRAM a headquarters role without any article on forecasting or warning. The 2014 mission found that &ldquo;roles and responsibilities of the disaster management agencies have not clearly been established by law&rdquo; and that &ldquo;no well-documented SOPs or MOUs are available for any components of the early warning system&rdquo;; the multi-hazard SOP drafted in 2019 was still awaiting an update in October 2025, and the legislative update planned under CREWS has been on hold since August 2023.
                </>
              ) : (
                <>
                  <strong className="text-foreground">警報と避難の責務を定めた法律がない。</strong>2015年法は警報の発表機関を定めず、「避難」という語を用いていません。2007年法はMOWRAMに本部の役割を与えますが、予報や警報に関する条文はありません。2014年のミッションは「災害管理機関の役割と責任が法律で明確に定められていない」こと、「早期警報システムのいかなる要素についても十分に文書化されたSOPや覚書がない」ことを指摘しました。2019年に起草されたマルチハザードSOPは2025年10月時点でも更新待ちで、CREWSで予定された法令更新は2023年8月から保留されています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Signature and verification bottlenecks.</strong> Warnings are signed by the Minister of MOWRAM and, for very severe events, by the Prime Minister, a practice the 2014 mission called &ldquo;more complex and time consuming&rdquo; and which no later source records as abolished; EWS1294 call-outs wait for NCDM verification of the sensor trigger; and the mobilisation of people under Article 25 presupposes a Royal Government declaration under Article 21. For fast-onset events such as flash floods and dam releases, each step consumes lead time that the forecasts themselves rarely provide.
                </>
              ) : (
                <>
                  <strong className="text-foreground">署名と検証のボトルネック。</strong>警報はMOWRAM大臣が、極めて深刻な事象では首相が署名します。2014年のミッションはこれを「より複雑で時間を要する」と評し、その後に廃止されたと記す資料はありません。EWS1294の発信はセンサー作動に対するNCDMの検証を待ち、第25条による住民の動員は第21条の王国政府の宣言を前提とします。鉄砲水やダム放流のような急発生型の事象では、各段階が、予報自体がほとんど与えてくれないリードタイムを消費します。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">The relay stops at the province.</strong> NCDM stated in 2018 that &ldquo;the forecasting and early warning information from national level could only reach the provincial, but not the commune level&rdquo;, repeating the 2014 finding of a &ldquo;very slow progression&rdquo; of information to communes and villages. In September 2024 the EWS1294 project manager publicly criticised commune officials for delayed reporting and a lack of safety equipment, and drills run by ADPC in Tboung Khmum in March and April 2026 revealed &ldquo;unclear team roles, fragmented communication, delayed decisions&rdquo; and a need to build CCDM secretariat leadership.
                </>
              ) : (
                <>
                  <strong className="text-foreground">伝達が州で止まる。</strong>NCDMは2018年に「国レベルからの予報・早期警報情報は州までしか届かず、コミューンには届かない」と述べ、コミューンと村への情報伝達が「極めて遅い」という2014年の指摘を繰り返しました。2024年9月にはEWS1294のプロジェクトマネジャーが、報告の遅れと安全装備の不足を挙げてコミューン職員の備えを公に批判し、2026年3〜4月にADPCがトボンクムン州で行った訓練では「チームの役割の不明確さ、断片的なコミュニケーション、意思決定の遅れ」とCCDM事務局の指導力強化の必要が明らかになりました。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Under-funded observation and forecasting.</strong> The MOWRAM plan of 2024 states that priority in public investment for water resources and meteorology &ldquo;remains low&rdquo;, that the budget for maintaining the forecasting system is &ldquo;still too low&rdquo; and that data collection suffers from limited budgets. DOM provided forecasts of up to three days at the start of CREWS, relies on products from RSMC Hong Kong, RFSC Hanoi, ECMWF and Singapore, and runs impact-based forecasting in three basins only. CREWS warned that &ldquo;many previous capital investment projects have failed to deliver sustainable systems&rdquo;, and the 2023 baseline of 56 water-level and 98 meteorological stations shows how much of the network was donor-installed.
                </>
              ) : (
                <>
                  <strong className="text-foreground">観測・予報の予算不足。</strong>MOWRAMの2024年計画は、水資源・気象への公共投資の優先度が「依然として低い」こと、予報システムの維持予算が「なお少なすぎる」こと、予算の制約でデータ収集が十分でないことを述べています。DOMはCREWS開始時点で最長3日先までの予報しか提供しておらず、RSMC香港、RFSCハノイ、ECMWF、シンガポールのプロダクトに依存し、影響予測型予報は3流域に限られます。CREWSは「過去の多くの設備投資事業が持続可能なシステムを実現できなかった」と警告しており、水位観測所56・気象観測所98という2023年のベースラインは、観測網の多くがドナーによって設置されたことを物語っています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Coordination, data and finance.</strong> NCDM itself noted in 2025 the &ldquo;absence of a whole-of-government coordination mechanism&rdquo; and that, without a mandated cross-ministerial mechanism defining roles, coordination between national agencies and provincial working groups remains fragmented. The EW4All roadmap is 41 percent unfunded (US$22.7 million), climate finance is fragmented, and an ADB diagnostic of 2024 found no public post-disaster risk transfer instrument. CamDi lacks a standard loss methodology, and the CREWS assessment cites limited technical capacity and human resource constraints within NCDM.
                </>
              ) : (
                <>
                  <strong className="text-foreground">調整・データ・資金。</strong>NCDM自身が2025年に「政府全体の調整メカニズムの不在」を指摘し、役割を定める省庁横断の法定メカニズムがなければ国の機関と州の作業部会の調整は断片的なままだと述べています。EW4Allロードマップは費用の41%（2,270万米ドル）が未調達で、気候資金は断片化しており、ADBの2024年の診断は公的な災害後のリスク移転手段がないことを示しました。CamDiには標準的な損失算定手法がなく、CREWSの評価はNCDM内部の技術能力と人員の制約を挙げています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">A last mile built on subscription and donors.</strong> EWS1294 grew by about 50 subscribers a day, loses users when SIM cards change, and records a constant share of failed calls; PIN concluded in 2021 that investment in sensors might have been better spent on broadcast dissemination. The 2025 GSMA/ActionAid study found that &ldquo;awareness and registration remain relatively low, particularly at the community level&rdquo;, that persons with disabilities were unaware of the system and relied on village chiefs, that spam fatigue undermines trust, and that commune heads need training to read sensor data. The business model is &ldquo;primarily donor-funded&rdquo;, the planned handover of 2021 did not take legal form, and NCDM left the two-way communication function unapproved at the close of CREWS in 2025 out of concern that it might evolve into a grievance or emergency hotline.
                </>
              ) : (
                <>
                  <strong className="text-foreground">登録とドナーに依存するラストマイル。</strong>EWS1294の登録者増は1日約50人にとどまり、SIMカードの変更で利用者を失い、通話失敗の割合は一定して残ります。PINは2021年に、センサーへの投資は放送型の伝達に回したほうがよかったかもしれないと結論づけました。2025年のGSMA/ActionAidの調査は「認知と登録は、特にコミュニティレベルで依然として低い」こと、障害者はシステムを知らず村長に頼っていること、スパム疲れが信頼を損なうこと、コミューン長にはセンサーデータを読む訓練が必要なことを示しました。事業モデルは「主としてドナー資金」であり、2021年に予定された移管は法的な形を取らず、NCDMは2025年のCREWS終了時点でも、苦情窓口や緊急ホットラインに変質することを懸念して双方向通信機能を承認していません。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Volunteer committees without budgets.</strong> All CCDM and VDMG members are volunteers who receive funds only when an NGO supports them; CDRI found in 2015 that limited emergency funds constrained the implementation of local response and risk reduction plans and that some residents ignore the warnings of their VDMG and CCDM. Commune contingency plans are still being written with NGO support, as in Tboung Khmum between January and April 2026, and the NCDM guidance of 2013 on contingency planning stopped at the district level.
                </>
              ) : (
                <>
                  <strong className="text-foreground">予算のないボランティア委員会。</strong>CCDMとVDMGの構成員は全員ボランティアで、NGOの支援がある場合にしか資金を得られません。CDRIは2015年に、緊急資金の不足が地域の対応・リスク削減計画の実施を制約していること、一部の住民がVDMGとCCDMの警報を無視することを指摘しました。コミューンのコンティンジェンシープランは、2026年1〜4月のトボンクムン州の例のように今もNGOの支援で作成されており、NCDMの2013年の指針は郡レベルで止まっています。
                </>
              )}
            </li>
            <li>
              {en ? (
                <>
                  <strong className="text-foreground">Hazards outside the system.</strong> Lightning killed 84 people in 2023, 68 in 2024 and 54 between January and September 2026, yet the only institutional response on record is advice to stay indoors, and no lightning warning product or channel is documented. Dam releases are opaque: more than 1,000 families in Talat commune were flooded three times in July and August 2018 below the Lower Sesan 2 dam with no warning recorded, Laos did not notify MRC of the Sekong A project, and MRC has no veto. Since 2025 the border conflict with Thailand has absorbed the system itself: the Ministry of National Defence counted 134,707 displaced people in four provinces on 27 July 2025, further evacuations followed in December 2025, and in early 2026 officials of the disaster management, meteorology and hydrology agencies declined interviews citing their workload on the conflict.
                </>
              ) : (
                <>
                  <strong className="text-foreground">制度の外にあるハザード。</strong>落雷は2023年に84人、2024年に68人、2026年1〜9月に54人の命を奪いましたが、記録に残る制度的対応は屋内退避の助言だけで、落雷の警報プロダクトやチャンネルは確認されていません。ダム放流は不透明です。2018年7〜8月にはロワーセサン2ダム下流のタラットコミューンで1,000世帯以上が3度浸水しましたが警報の記録はなく、ラオスはセコンAダムをMRCに通知せず、MRCには拒否権がありません。2025年以降はタイとの国境紛争が制度そのものを吸収しています。国防省は2025年7月27日時点で4州の避難民を134,707人と集計し、2025年12月にも避難が続き、2026年初めには災害管理・気象・水文の各機関の職員が紛争対応の業務量を理由に取材を断っています。
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
                The Japanese contribution sits on the technical side of MOWRAM. The GTS message switching system of DOM was furnished with the assistance of JMA, JICA and WMO in 2006, and DOM has received satellite imagery through the JMA SATAID software and its GTS link with JMA. JICS (Japan International Cooperation System) trained NCDM staff and supplied equipment for the WebEOC of the Emergency Coordination Centre together with the AHA Centre. The MOWRAM plan for 2024&ndash;2028 lists Japan-funded projects under contract: a project to strengthen and improve capacity on weather and flood forecasting and early warning systems for climate change (2024&ndash;2026), the dispatch of a policy advisor on irrigation and drainage (2024&ndash;2026), the rehabilitation of irrigation and drainage in southern Phnom Penh (2014&ndash;2026), water resources development and flood management in Svay Rieng and Prey Veng and in Siem Reap and Banteay Meanchey (2024&ndash;2030), and master-plan studies on flood and drought mitigation. Cambodia is also a beneficiary of an ITU project supported by the Japanese Ministry of Internal Affairs and Communications, and CREWS names JICA and KOICA as agencies willing to provide capital investment that should be coordinated through the hydro-meteorological investment plan. No Japanese involvement in the institutional agenda (SOPs, legal drafting, the coordination platform) is visible in the sources consulted.
              </>
            ) : (
              <>
                日本の貢献はMOWRAMの技術面に集中しています。DOMのGTSメッセージ交換システムは2006年に気象庁（JMA）、JICA、WMOの支援で整備され、DOMはJMAのSATAIDソフトウェアとJMAとのGTS回線を通じて衛星画像を受信してきました。JICS（日本国際協力システム）はAHAセンターとともにNCDM職員を訓練し、緊急調整センターのWebEOC用機材を供与しました。MOWRAMの2024〜2028年計画は、契約済みの日本資金事業として、気候変動に対応した気象・洪水予報と早期警報システムの能力強化（2024〜2026年）、灌漑排水政策アドバイザーの派遣（2024〜2026年）、プノンペン南部の灌漑排水システム改修（2014〜2026年）、スバイリエン・プレイベン両州およびシェムリアップ・バンテイメンチェイ両州の水資源開発・洪水管理（2024〜2030年）、洪水・干ばつ軽減のマスタープラン調査を挙げています。カンボジアは日本の総務省が支援するITU事業の受益国でもあり、CREWSはJICAとKOICAを設備投資の意思を持つ機関として挙げ、水文気象投資計画を通じた調整を求めています。SOP、法令起草、調整プラットフォームといった制度面の課題への日本の関与は、参照した資料には見られません。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The institutional agenda has been driven by UN agencies and multilateral funds. The CREWS project of WMO, the World Bank and UNDRR (July 2021 to July 2025, US$5.54 million for Cambodia and Lao PDR, with WFP, RIMES, ADPC, KICT, CIMA, GWP, PIN and others as partners) delivered the NMHS assessments, hydro-meteorological investment plans, the impact-based forecasting system, flash flood guidance training, the MCH database at DHRW, community-based flood management in three communes, a GEDSI guideline and the EW4All roadmap itself, training 412 people of whom 42 percent were women; phase 2 began in November 2025. WFP is the UN focal point for Early Warnings for All and leads anticipatory action; UNDP financed 53 automatic stations under the GEF-LDCF project, funds EWS1294 and is the accredited entity for GCF FP258; the World Bank funded the 2011&ndash;2014 project under which the first flood-EWS SOP was written and sits on the roadmap coordination platform; ADB produced the 2024 diagnostic on disaster risk financing and finances flood and drought risk management in the Greater Mekong Subregion (phase 2, 2024&ndash;2030). Korea provided DWAT hydrological models for two pilot basins through KICT and is to fund the Sekong, Sesan and Srepok flood forecasting system (2024&ndash;2028) and an integrated water resources management centre in Phnom Penh (2024&ndash;2029); France supplied the Synergie system in 2012; ITU and the Indian C-DOT ran the cell-broadcast demonstration; the UK (FCDO through GSMA) financed the ActionAid drought-sensor work; the Czech Republic, Switzerland, the EU, the United States and the Gates Foundation (through ADPC) have funded EWS1294 and commune preparedness. Regionally, the MRC supplies the Mekong forecasts, the AHA Centre logs Cambodian events from NCDM-verified reports, and EWS1294 has been replicated in three southern provinces of Lao PDR.
              </>
            ) : (
              <>
                制度面の課題は国連機関と多国間基金が牽引してきました。WMO・世界銀行・UNDRRのCREWSプロジェクト（2021年7月〜2025年7月、カンボジアとラオスで554万米ドル、WFP、RIMES、ADPC、KICT、CIMA、GWP、PINなどがパートナー）は、気象水文機関の評価、水文気象投資計画、影響予測型予報システム、鉄砲水ガイダンスの訓練、DHRWのMCHデータベース、3コミューンでのコミュニティ主体の洪水管理、GEDSI指針、そしてEW4Allロードマップ自体を成果として残し、412人（うち女性42%）を訓練しました。第2期は2025年11月に始まっています。WFPはEW4Allの国連窓口として予測的行動を主導し、UNDPはGEF-LDCF事業で自動観測所53基を整備し、EWS1294に資金を提供し、GCF FP258の認定機関でもあります。世界銀行は最初の洪水EWS SOPが作成された2011〜2014年の事業に資金を提供し、ロードマップの調整プラットフォームに参加しています。ADBは2024年に災害リスクファイナンスの診断を行い、大メコン圏の洪水・干ばつリスク管理（第2期、2024〜2030年）を支援しています。韓国はKICTを通じて2つのパイロット流域にDWAT水文モデルを提供し、セコン・セサン・スレポック川の洪水予報システム（2024〜2028年）とプノンペンの統合水資源管理センター（2024〜2029年）に資金を出す予定です。フランスは2012年にSynergieシステムを供与し、ITUとインドのC-DOTはセルブロードキャストを実演し、英国（FCDO、GSMA経由）はActionAidの干ばつセンサー事業を支援し、チェコ、スイス、EU、米国、ゲイツ財団（ADPC経由）はEWS1294とコミューンの備えに資金を提供してきました。地域レベルでは、MRCがメコン川の予報を供給し、AHAセンターはNCDMが確認した報道からカンボジアの災害を記録し、EWS1294はラオス南部3州に複製されています。
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
                What distinguishes Cambodia is not the absence of institutions but the absence of a legal link between them. Two laws create two headquarters, NCDM for disaster management and MOWRAM for floods and droughts, and neither law obliges the forecaster to warn within a time limit or obliges the coordinator to relay. The chain that exists was assembled from the founding decrees of 1999, a committee structure built by sub-decree and instruction between 2006 and 2010, donor-written procedures that have remained drafts since 2014 and 2019, and a dissemination platform that the government recognises politically but has never taken over legally. The result is a system in which every link works by practice and goodwill, and in which the two formal checkpoints, the ministerial signature and the NCDM verification, are the points where time is lost.
              </>
            ) : (
              <>
                カンボジアの特徴は、機関が存在しないことではなく、機関同士を結ぶ法的な連結がないことです。2つの法律が2つの本部を、災害管理についてはNCDM、洪水と干ばつについてはMOWRAMを作り出しましたが、どちらの法律も予報機関に期限内の警報を義務づけず、調整機関に中継を義務づけていません。現に存在する流れは、1999年の設置法令、2006〜2010年に政令と指示で築かれた委員会構造、2014年と2019年以来案のままのドナー作成の手順、そして政府が政治的には承認しながら法的には引き継いでいない伝達プラットフォームから組み立てられたものです。その結果、すべての連結が慣行と善意で動き、大臣の署名とNCDMの検証という2つの正式なチェックポイントが時間を失う場所になっています。
              </>
            )}
          </p>
          <p className={P}>
            {en ? (
              <>
                The main unresolved question is whether the Early Warnings for All roadmap of 2025&ndash;2028 can do what the suspended legislation was meant to do. A roadmap can finance stations, train forecasters, and set up a coordination platform; it cannot assign a statutory duty to warn, name the authority that orders evacuation below the threshold of a national disaster declaration, or give the commune committees a budget line. Three changes would address the core of the problem: an amendment or sub-decree under the law of 2015 that designates MOWRAM as the alerting authority with a duty to notify NCDM and the public, and NCDM as the relaying authority with a duty to reach the commune; a provision allowing provincial and district committees to order evacuation on the basis of a MOWRAM warning without waiting for an Article 21 declaration; and the adoption of the multi-hazard SOP, with CAP-format issuance by MOWRAM and a broadcast channel such as cell broadcast, as binding procedure rather than project output. Until then, the number that best describes the system is the one NCDM gave in 2018: the warning reaches the province.
              </>
            ) : (
              <>
                最大の未解決の問いは、EW4Allロードマップ2025〜2028が、保留された法令改正が果たすはずだった役割を果たせるかどうかです。ロードマップは観測所の整備、予報官の訓練、調整プラットフォームの設置に資金をつけることはできますが、警報を発する法定の義務を割り当てること、国の災害宣言に至らない段階で避難を命じる当局を指名すること、コミューン委員会に予算項目を与えることはできません。問題の核心に対応するには3つの変更が必要です。第一に、2015年法に基づく改正または政令で、MOWRAMをNCDMと住民への通知義務を負う警報発表機関、NCDMをコミューンまで届ける義務を負う中継機関として指定すること。第二に、第21条の宣言を待たずに、MOWRAMの警報を根拠として州・郡の委員会が避難を命じられる規定を置くこと。第三に、MOWRAMによるCAP形式の発表とセルブロードキャストのような放送型チャンネルを含むマルチハザードSOPを、プロジェクトの成果物ではなく拘束力のある手続きとして採択することです。それまでは、この制度を最もよく表す数字は、NCDMが2018年に示したもの、すなわち「警報は州までは届く」という事実のままです。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── References ── */}
        <section>
          <h2 className={H2}>References</h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>Royal Government of Cambodia (2015). Law on Disaster Management, Preah Reach Kram NS/RKM/0715/007 (unofficial English translation). <em>UN Women, Women&rsquo;s Resilience to Disasters Knowledge Hub</em>. https://wrd.unwomen.org/sites/default/files/2023-02/DM-Law_English.pdf</li>
            <li>Kingdom of Cambodia (2007). Law on Water Resources Management of the Kingdom of Cambodia. <em>FAOLEX</em>. https://faolex.fao.org/docs/pdf/cam75723.pdf</li>
            <li>Royal Government of Cambodia (2015). Royal Decree on the Organization and Functioning of the National Committee for Disaster Management, 24 December 2015. <em>ADB Law and Policy Reform library</em>. https://lpr.adb.org/resource/royal-decree-organization-and-functioning-national-committee-disaster-management-2015</li>
            <li>ESCAP/WMO Typhoon Committee (2014). Synergized Standard Operating Procedures (SSOP) Mission Report for Cambodia, 3 October 2014. <em>Typhoon Committee</em>. https://www.typhooncommittee.org/SSOP/1st%20Phase/3b%20Mission%20Report%20for%20Cambodia%20(Final).pdf</li>
            <li>National Committee for Disaster Management (2018). Basic Disaster Management System in Cambodia. Presentation to the Sentinel Asia Joint Project Team Meeting. <em>Sentinel Asia</em>. https://sentinel-asia.org/meetings/SA3JPTM6/agenda/Day1/Session3/3.1-1_Basic_DM_system_in_Cambodia_NCDM_2018.pdf</li>
            <li>Cambodia Development Resource Institute (2015). Disaster Management Planning in Rural Cambodia. <em>Cambodia Development Review</em>, 19(3). https://cdri.org.kh/new/wp-content/uploads/2025/02/cdr15-3e-2_1617680463.pdf</li>
            <li>Ministry of Water Resources and Meteorology (2024). Strategic Development Plan on Water Resources and Meteorology 2024&ndash;2028. <em>Open Development Cambodia datahub</em>. https://data.opendevelopmentcambodia.net/en/dataset/e00fc697-799d-49b3-ab98-eda5697f5291</li>
            <li>UNDP Cambodia (2019). Draft Standard Operating Procedure for Multi-Hazard Early Warning System in Cambodia, 21 November 2019. <em>UNDP Climate Change Adaptation</em>. https://www.adaptation-undp.org/sites/default/files/resources/20191121-draft-sop_ews-cambodia.docx</li>
            <li>CREWS Initiative (2025). Cambodia and Lao PDR Project Final Report, 31 October 2025. <em>Climate Risk and Early Warning Systems</em>. https://crews-initiative.org/wp-content/uploads/2025/11/CREWS-Cambodia-and-Lao-PDR-Project-Final-Report_2025.pdf</li>
            <li>People in Need (2021). Early Warning System 1294. <em>People in Need resources</em>. https://resources.peopleinneed.net/documents/1055-1.pdf</li>
            <li>People in Need (2022). Cambodia&rsquo;s Early Warning System 1294: an adaptable technology promoting safety for all. <em>People in Need Cambodia</em>. https://cambodia.peopleinneed.net/en/cambodias-early-warning-system-1294-an-adaptable-technology-promoting-safety-for-all-9146gp</li>
            <li>GSMA and ActionAid (2025). Strengthening Cambodia&rsquo;s National Early Warning System. <em>GSMA Mobile for Development</em>. https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/wp-content/uploads/2025/10/GSMA_ActionAid_Strengthening-Cambodias-National-EWS_2025.pdf</li>
            <li>World Food Programme (2025). Cambodia launches national roadmap to save lives with people-centred early warning systems, 20 November 2025. <em>WFP News</em>. https://www.wfp.org/news/cambodia-launches-national-roadmap-save-lives-people-centred-early-warning-systems</li>
            <li>United Nations in Cambodia (2023). Early Warnings for All National Consultation Workshop, 4 October 2023. <em>UN Cambodia</em>. https://cambodia.un.org/km/node/248159</li>
            <li>ITU (2025). Workshop Report: Role of Broadcasting in Effective Early Warning Dissemination, Asia Media Summit 2025. <em>ITU Regional Office for Asia and the Pacific</em>. https://www.itu.int/en/ITU-D/Regional-Presence/AsiaPacific/Documents/Events/2025/AMS2025/Workshop%20Report%20-%20Role%20of%20Broadcasting%20in%20Effective%20EW%20Dissemination%20-%20AMS%202025_Final.pdf</li>
            <li>Green Climate Fund (2025). FP258: Multi-country Project Advancing Early Warnings for All. <em>GCF project portal</em>. https://www.greenclimate.fund/project/fp258</li>
            <li>Open Development Cambodia (2021). Disaster preparedness and emergency response policy and administration. <em>Open Development Cambodia topic page and law records</em>. https://opendevelopmentcambodia.net/topics/disaster-preparedness-and-emergency-response-policy-and-administration/</li>
            <li>IDE-JETRO (2026). Policy Brief No. 286, 17 July 2026. <em>Institute of Developing Economies</em>. https://www.ide.go.jp/library/Japanese/Publish/Reports/AjikenPolicyBrief/pdf/286.pdf</li>
            <li>Cambodianess (2026). Mekong levels to breach caution levels in Kratie and Stung Treng, 23 August 2026; Cambodian authorities told to heighten flood preparedness as water levels rise, 20 August 2026. <em>Cambodianess</em>. https://cambodianess.com/article/mekong-levels-to-breach-caution-levels-in-kratie-and-stung-treng</li>
            <li>Mekong River Commission (2026). Flood Forecasting and Warning: About us; station overview. <em>MRC Regional Flood Management and Mitigation Centre</em>. https://ffw.mrcmekong.org/aboutus.php</li>
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
              <strong className="text-foreground">{en ? "Cambodia" : "カンボジア"}</strong>
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
