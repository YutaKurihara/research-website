"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

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
            2026-06-14
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {en
              ? "Framework for Resilient Development in the Pacific (FRDP) 2017–2030 — An Integrated DRR and Climate Change Adaptation Strategy for Pacific Island Nations"
              : "太平洋レジリエント開発枠組み（FRDP）2017–2030 — 太平洋島嶼国の統合的な防災・気候変動適応戦略"}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {en
              ? "A comprehensive analysis of the Framework for Resilient Development in the Pacific (FRDP) 2017–2030: its three-goal structure, integration of disaster risk reduction and climate change adaptation, implementation through the Pacific Resilience Partnership, financing mechanisms, progress, and linkages with the Sendai Framework, Paris Agreement, and SDGs. Based on PIF, SPC, SPREP, PIFS, UNDP, and UNDRR documentation."
              : "太平洋レジリエント開発枠組み（FRDP）2017–2030の包括的分析。三つの目標構造、防災と気候変動適応の統合、太平洋レジリエンスパートナーシップによる実施、資金メカニズム、進捗、仙台防災枠組み・パリ協定・SDGとの連携を論じる。PIF、SPC、SPREP、PIFS、UNDP、UNDRRの文書に基づく。"}
          </p>
        </div>
      </section>

      <hr className="border-border" />

      <article className="space-y-8 py-8 text-[13px] leading-relaxed">
        {/* ── 1. Background and Development Process ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "1. Background and Development Process"
              : "1. FRDPの背景と策定経緯"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                The{" "}
                <strong className="text-foreground">
                  Framework for Resilient Development in the Pacific (FRDP)
                  2017&ndash;2030
                </strong>{" "}
                was endorsed by Pacific Islands Forum Leaders at the 47th
                Pacific Islands Forum meeting in Pohnpei, Federated States of
                Micronesia, in September 2016, with implementation commencing in
                2017. It replaced two earlier regional frameworks that had
                addressed disaster risk reduction (DRR) and climate change
                adaptation (CCA) as separate policy domains: the{" "}
                <strong className="text-foreground">
                  Pacific Disaster Risk Reduction and Disaster Management
                  Framework for Action 2005
                </strong>{" "}
                and the{" "}
                <strong className="text-foreground">
                  Pacific Islands Framework for Action on Climate Change (PIFACC)
                  2006&ndash;2015
                </strong>
                .
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  太平洋レジリエント開発枠組み（FRDP）2017&ndash;2030
                </strong>{" "}
                は、2016年9月にミクロネシア連邦ポンペイで開催された第47回太平洋諸島フォーラム首脳会議において承認され、2017年から実施が開始されました。FRDPは、防災（DRR）と気候変動適応（CCA）を別々の政策領域として扱っていた二つの先行枠組み、すなわち{" "}
                <strong className="text-foreground">
                  太平洋災害リスク軽減・災害管理行動枠組み2005
                </strong>{" "}
                と{" "}
                <strong className="text-foreground">
                  太平洋島嶼気候変動行動枠組み（PIFACC）2006&ndash;2015
                </strong>{" "}
                を統合的に置き換えるものです。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                The key driver behind this consolidation was the growing
                recognition among Pacific Island Countries and Territories
                (PICTs) and their development partners that{" "}
                <strong className="text-foreground">
                  DRR and CCA are fundamentally interlinked
                </strong>{" "}
                and must not be treated as institutional silos. Climate change
                amplifies existing disaster risks &mdash; more intense tropical
                cyclones, accelerating sea-level rise, and shifting precipitation
                patterns &mdash; while effective disaster risk reduction builds
                the adaptive capacity needed to respond to a changing climate.
                Maintaining separate frameworks led to duplicated efforts,
                fragmented governance structures, and competition for limited
                resources.
              </>
            ) : (
              <>
                この統合の主な契機は、太平洋島嶼国・地域（PICTs）とその開発パートナーの間で、{" "}
                <strong className="text-foreground">
                  DRRとCCAは根本的に相互連関しており、制度的なサイロとして扱うべきではない
                </strong>{" "}
                という認識が高まったことにあります。気候変動は既存の災害リスクを増幅させ（より強力な熱帯低気圧、加速する海面上昇、変化する降水パターン）、効果的な防災は気候変動への対処に必要な適応能力を構築します。別々の枠組みを維持することは、努力の重複、ガバナンス構造の分断、限られた資源をめぐる競合を招いていました。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                The FRDP was developed through{" "}
                <strong className="text-foreground">
                  extensive multi-stakeholder consultations
                </strong>{" "}
                across the Pacific region over a two-year period (2014&ndash;2016),
                led by the Pacific Community (SPC), the Secretariat of the Pacific
                Regional Environment Programme (SPREP), the Pacific Islands
                Forum Secretariat (PIFS), the United Nations Development
                Programme (UNDP), and the United Nations Office for Disaster
                Risk Reduction (UNDRR). National consultations were held in all
                PICTs, with input from governments, civil society organizations,
                the private sector, academic institutions, and communities.
              </>
            ) : (
              <>
                FRDPは、太平洋共同体（SPC）、太平洋地域環境計画事務局（SPREP）、太平洋諸島フォーラム事務局（PIFS）、国連開発計画（UNDP）、国連防災機関（UNDRR）が主導し、2年間（2014&ndash;2016年）にわたる{" "}
                <strong className="text-foreground">
                  広範なマルチステークホルダー協議
                </strong>{" "}
                を経て策定されました。すべてのPICTsにおいて国内協議が実施され、政府、市民社会、民間セクター、学術機関、コミュニティからの意見が反映されています。
              </>
            )}
          </p>

          <p className="mb-4 text-muted">
            {en ? (
              <>
                Crucially, the FRDP was designed to{" "}
                <strong className="text-foreground">
                  align with three landmark global agreements
                </strong>{" "}
                adopted in 2015: the Sendai Framework for Disaster Risk Reduction
                2015&ndash;2030, the Paris Agreement on Climate Change, and the
                2030 Agenda for Sustainable Development (SDGs). This alignment
                was intentional, ensuring that Pacific regional action
                contributes to and is supported by global commitments.
              </>
            ) : (
              <>
                FRDPは、2015年に採択された三つの画期的な国際合意、すなわち仙台防災枠組み2015&ndash;2030、パリ協定（気候変動）、持続可能な開発のための2030アジェンダ（SDGs）と{" "}
                <strong className="text-foreground">
                  整合するよう意図的に設計
                </strong>{" "}
                されました。この整合により、太平洋地域の行動が国際的コミットメントに貢献し、かつ支援を受けることが確保されています。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Year" : "年"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Framework / Event" : "枠組み / 事項"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Significance" : "意義"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    2005
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Pacific DRR & DM Framework for Action"
                      : "太平洋DRR・DM行動枠組み"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "First regional DRR framework; aligned with Hyogo Framework"
                      : "初の地域DRR枠組み。兵庫行動枠組みと整合"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    2006
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "PIFACC 2006–2015"
                      : "PIFACC 2006–2015"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Separate CCA framework; addressed mitigation and adaptation"
                      : "別立てのCCA枠組み。緩和と適応を対象"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    2014&ndash;2016
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "FRDP development consultations"
                      : "FRDP策定協議"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Multi-stakeholder process across all PICTs"
                      : "全PICTsでのマルチステークホルダープロセス"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    2015
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Sendai Framework, Paris Agreement, SDGs adopted"
                      : "仙台枠組み・パリ協定・SDG採択"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Global frameworks that FRDP was designed to align with"
                      : "FRDPが整合するよう設計された国際枠組み"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    2016
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "FRDP endorsed at 47th PIF (Pohnpei)"
                      : "FRDPが第47回PIF（ポンペイ）で承認"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Formal adoption by Pacific Leaders"
                      : "太平洋首脳による正式採択"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    2017
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "FRDP implementation begins"
                      : "FRDP実施開始"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Pacific Resilience Partnership (PRP) established"
                      : "太平洋レジリエンスパートナーシップ（PRP）設立"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    2018
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Boe Declaration on Regional Security"
                      : "ボエ地域安全保障宣言"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Climate change recognized as greatest security threat"
                      : "気候変動を最大の安全保障上の脅威と認定"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 2. Structure and Vision ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "2. Structure and Vision"
              : "2. FRDPの構造とビジョン"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                The FRDP&apos;s vision statement articulates the overarching
                aspiration:{" "}
                <strong className="text-foreground">
                  &ldquo;A resilient Pacific whose people, communities and
                  ecosystems are able to prepare for, adapt to and recover from
                  the impacts of climate change and disasters.&rdquo;
                </strong>{" "}
                This vision encapsulates a holistic understanding of resilience
                that encompasses human security, ecological integrity, and
                institutional capacity across the entire disaster cycle &mdash;
                prevention, preparedness, response, and recovery.
              </>
            ) : (
              <>
                FRDPのビジョンは以下のように表現されています：{" "}
                <strong className="text-foreground">
                  「レジリエントな太平洋 &mdash; その人々、コミュニティ、生態系が気候変動と災害の影響に備え、適応し、そこから回復することができる太平洋」
                </strong>
                。このビジョンは、人間の安全保障、生態系の健全性、制度的能力を包含し、防災の全サイクル（予防・備え・対応・復旧）にわたるレジリエンスの包括的理解を示しています。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                The framework is structured around{" "}
                <strong className="text-foreground">three overarching Goals</strong>
                , each with specific priority areas and expected outcomes. It is
                fundamentally a{" "}
                <strong className="text-foreground">
                  voluntary, non-binding framework
                </strong>{" "}
                that provides guidance and a common platform rather than imposing
                mandates. It is designed to be inclusive, engaging governments at
                all levels, civil society organizations, the private sector,
                development partners, faith-based organizations, academia, and
                communities &mdash; reflecting the principle that resilience
                building is a whole-of-society endeavor.
              </>
            ) : (
              <>
                FRDPは{" "}
                <strong className="text-foreground">三つの包括的目標（Goal）</strong>
                を中心に構成されており、各目標に優先分野と期待される成果が設定されています。根本的に{" "}
                <strong className="text-foreground">
                  自発的・非拘束的な枠組み
                </strong>{" "}
                であり、義務を課すのではなく、指針と共通のプラットフォームを提供するものです。レジリエンス構築が社会全体の取り組みであるという原則を反映し、あらゆるレベルの政府、市民社会、民間セクター、開発パートナー、信仰に基づく組織、学術機関、コミュニティを包含する包摂的アプローチを採用しています。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Goal" : "目標"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Title" : "タイトル"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Priority Areas" : "優先分野"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Key Outcomes" : "主な成果"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    Goal 1
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Strengthened integrated adaptation and risk reduction"
                      : "統合的適応・リスク軽減の強化"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Mainstreaming; knowledge & understanding; governance; finance access"
                      : "主流化、知識・理解、ガバナンス、資金アクセス"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "DRR & CCA integrated into national plans and budgets"
                      : "DRRとCCAが国家計画・予算に統合"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    Goal 2
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Low carbon development"
                      : "低炭素開発"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Clean energy transition; energy efficiency; sustainable transport; waste management"
                      : "クリーンエネルギー転換、エネ効、持続可能な交通、廃棄物管理"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Reduced dependence on imported fossil fuels; enhanced energy security"
                      : "輸入化石燃料依存の低減、エネルギー安全保障の強化"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    Goal 3
                  </td>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Strengthened disaster preparedness, response and recovery"
                      : "災害への備え・対応・復旧の強化"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Preparedness; response coordination; recovery & Build Back Better; cultural heritage"
                      : "備え、対応調整、復旧・Build Back Better、文化遺産"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Enhanced preparedness capacity and post-disaster recovery"
                      : "備え能力と災害後の復旧の強化"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 3. Goal 1: Integrated Adaptation and Risk Reduction ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "3. Goal 1: Integrated Adaptation and Risk Reduction"
              : "3. Goal 1の詳細分析: 統合的な適応・リスク軽減"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Goal 1 is the conceptual heart of the FRDP, calling for{" "}
                <strong className="text-foreground">
                  strengthened integrated adaptation and risk reduction to
                  enhance resilience to climate change and disasters
                </strong>
                . It encompasses four priority areas that collectively aim to
                embed DRR and CCA into the fabric of national development
                planning, governance, knowledge systems, and financial
                architecture.
              </>
            ) : (
              <>
                Goal 1はFRDPの概念的な中核であり、{" "}
                <strong className="text-foreground">
                  気候変動と災害に対するレジリエンスを高めるための統合的な適応・リスク軽減の強化
                </strong>{" "}
                を求めています。四つの優先分野を包含し、DRRとCCAを国家開発計画、ガバナンス、知識システム、財政構造の中に組み込むことを目指しています。
              </>
            )}
          </p>

          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Priority 1-1: Mainstreaming DRR and CCA"
                  : "優先分野1-1: DRRとCCAの主流化"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Integrate DRR and CCA into development planning processes,
                    national budgets, and institutional arrangements at all
                    levels. This means that climate and disaster risk
                    considerations should be embedded in every sector &mdash;
                    agriculture, health, education, infrastructure, and finance
                    &mdash; rather than confined to environment or disaster
                    management agencies.
                  </>
                ) : (
                  <>
                    DRRとCCAをあらゆるレベルの開発計画プロセス、国家予算、制度的取り決めに統合すること。気候・災害リスクの考慮は、環境省や防災庁に限定されるのではなく、農業、保健、教育、インフラ、財政など全てのセクターに組み込まれるべきことを意味します。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Priority 1-2: Knowledge and Understanding"
                  : "優先分野1-2: 知識と理解"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Improve understanding of climate change and disaster risk
                    through research, data collection, knowledge management, and
                    education. This includes strengthening climate services,
                    conducting multi-hazard risk assessments, and building
                    scientific capacity within PICTs.
                  </>
                ) : (
                  <>
                    研究、データ収集、知識管理、教育を通じて気候変動と災害リスクの理解を向上させること。気候サービスの強化、マルチハザードリスク評価の実施、PICTs内の科学的能力の構築が含まれます。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Priority 1-3: Institutional Governance"
                  : "優先分野1-3: 制度的ガバナンス"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Strengthen institutional arrangements and governance
                    mechanisms for resilience building. This requires clear
                    mandates, coordination mechanisms between line ministries,
                    and accountability frameworks at national and sub-national
                    levels.
                  </>
                ) : (
                  <>
                    レジリエンス構築のための制度的取り決めとガバナンスメカニズムを強化すること。明確な権限、関係省庁間の調整メカニズム、国家・地方レベルでの説明責任枠組みが必要です。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Priority 1-4: Finance Access"
                  : "優先分野1-4: 資金アクセス"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Ensure access to adequate and sustained finance for
                    resilience building from domestic, regional, and
                    international sources, including climate finance mechanisms
                    such as the Green Climate Fund and the Adaptation Fund.
                  </>
                ) : (
                  <>
                    緑の気候基金や適応基金を含む国内・地域・国際的な資金源から、レジリエンス構築のための十分かつ持続的な資金へのアクセスを確保すること。
                  </>
                )}
              </p>
            </div>
          </div>

          <p className="mt-4 mb-3 text-muted">
            {en ? (
              <>
                A key practical mechanism for Goal 1 implementation is the{" "}
                <strong className="text-foreground">
                  Joint National Action Plan (JNAP) for DRR and CCA
                </strong>
                . JNAPs consolidate previously separate national DRR and CCA
                plans into a single, coherent policy instrument. As of
                2024, JNAPs have been developed and adopted in{" "}
                <strong className="text-foreground">
                  Tonga (JNAP 1 in 2010, JNAP 2 in 2018), Cook Islands (2016),
                  Tuvalu (2012), Marshall Islands (JNAP 2014, updated 2020),
                  Kiribati (KJIP 2019), Niue, and Nauru
                </strong>
                . Other countries such as Fiji have adopted integrated National
                Adaptation Plans or Climate Change Policies that serve a similar
                integrating function.
              </>
            ) : (
              <>
                Goal 1の実施における主要な実践的メカニズムは、{" "}
                <strong className="text-foreground">
                  DRRとCCAの統合国家行動計画（JNAP）
                </strong>{" "}
                です。JNAPは従来別々であった国家DRR計画とCCA計画を単一の一貫した政策文書に統合するものです。2024年時点で、{" "}
                <strong className="text-foreground">
                  トンガ（JNAP 1: 2010年、JNAP 2: 2018年）、クック諸島（2016年）、ツバル（2012年）、マーシャル諸島（JNAP 2014年、2020年更新）、キリバス（KJIP 2019年）、ニウエ、ナウル
                </strong>{" "}
                でJNAPが策定・採択されています。フィジーなど他の国々は、同様の統合機能を果たす統合国家適応計画や気候変動政策を採用しています。
              </>
            )}
          </p>

          <p className="text-muted">
            {en ? (
              <>
                Despite progress, significant{" "}
                <strong className="text-foreground">challenges to integration persist</strong>
                . In many PICTs, DRR and CCA continue to be managed by different
                ministries or agencies (e.g., disaster management under the
                National Disaster Management Office, and climate change under the
                Ministry of Environment or Office of the President), with limited
                coordination. Different funding streams reinforce these silos:
                climate finance flows through dedicated climate entities while
                DRR funding comes through humanitarian channels. Shared risk
                assessments, combined early warning systems, and unified funding
                proposals remain aspirational in many countries.
              </>
            ) : (
              <>
                進展はあるものの、{" "}
                <strong className="text-foreground">統合への重大な課題は残っています</strong>
                。多くのPICTsでは、DRRとCCAが依然として異なる省庁・機関（例：防災はNDMO、気候変動は環境省や大統領府）で管理されており、調整は限定的です。異なる資金の流れがこれらのサイロを強化しています。気候資金は専用の気候機関を通じて流れ、DRR資金は人道支援チャネルから来ます。共有リスク評価、統合早期警報、統一的な資金提案は多くの国で依然として理想にとどまっています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 4. Goal 2: Low Carbon Development ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "4. Goal 2: Low Carbon Development"
              : "4. Goal 2の詳細分析: 低炭素開発"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Goal 2 addresses the{" "}
                <strong className="text-foreground">
                  transition to low carbon development pathways
                </strong>{" "}
                across the Pacific region. While Pacific Island nations
                collectively contribute{" "}
                <strong className="text-foreground">
                  less than 0.03% of global greenhouse gas emissions
                </strong>
                , they face disproportionately catastrophic impacts from climate
                change. This fundamental inequity &mdash; the SIDS paradox
                &mdash; underpins the Pacific&apos;s moral leadership on climate
                action and the region&apos;s strong advocacy at global climate
                negotiations.
              </>
            ) : (
              <>
                Goal 2は太平洋地域全体の{" "}
                <strong className="text-foreground">
                  低炭素開発経路への移行
                </strong>{" "}
                を扱っています。太平洋島嶼国は全体で{" "}
                <strong className="text-foreground">
                  世界の温室効果ガス排出量の0.03%未満
                </strong>{" "}
                しか排出していないにもかかわらず、気候変動から不均衡に壊滅的な影響を受けています。このSIDSパラドックスと呼ばれる根本的な不公正が、気候行動における太平洋のモラル・リーダーシップと、地球規模の気候交渉における強力な提言活動を支えています。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                Despite their minimal emissions footprint, PICTs have compelling
                economic reasons to pursue low carbon development. Most Pacific
                nations are{" "}
                <strong className="text-foreground">
                  heavily dependent on imported fossil fuels
                </strong>{" "}
                for electricity generation and transport, making them
                highly vulnerable to global oil price volatility. Energy
                costs in the Pacific are among the highest in the world,
                with diesel-generated electricity costing USD 0.30&ndash;0.50/kWh
                in outer islands. The transition to renewable energy therefore
                enhances both energy security and economic resilience.
              </>
            ) : (
              <>
                排出量のフットプリントは極小であるものの、PICTsには低炭素開発を追求する切実な経済的理由があります。太平洋島嶼国の多くは発電と輸送において{" "}
                <strong className="text-foreground">
                  輸入化石燃料に大きく依存
                </strong>{" "}
                しており、世界の石油価格変動に対して極めて脆弱です。太平洋のエネルギーコストは世界で最も高い部類に属し、離島ではディーゼル発電のコストがkWhあたり0.30&ndash;0.50米ドルに達します。再生可能エネルギーへの転換はエネルギー安全保障と経済的レジリエンスの双方を強化します。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Country" : "国名"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Renewable Energy Target" : "再エネ目標"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "NDC Key Commitment" : "NDC主要コミットメント"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Fiji" : "フィジー"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "100% RE electricity by 2030" : "2030年までに電力100%再エネ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "30% emission reduction (BAU) by 2030" : "2030年までにBAU比30%削減"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Samoa" : "サモア"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "100% RE electricity by 2025" : "2025年までに電力100%再エネ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "26% emission reduction (BAU) by 2025" : "2025年までにBAU比26%削減"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Cook Islands" : "クック諸島"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "100% RE electricity by 2020 (revised)" : "2020年までに電力100%再エネ（改定）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "38% emission reduction (BAU) by 2030" : "2030年までにBAU比38%削減"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Tonga" : "トンガ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "70% RE electricity by 2030" : "2030年までに電力70%再エネ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "13% emission reduction (unconditional) by 2030" : "2030年までに13%削減（無条件）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Vanuatu" : "バヌアツ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "100% RE electricity by 2030" : "2030年までに電力100%再エネ"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "30% emission reduction (BAU) by 2030" : "2030年までにBAU比30%削減"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 mb-3 text-muted">
            {en ? (
              <>
                <strong className="text-foreground">Blue carbon</strong> and
                ocean-based climate solutions represent a growing priority under
                Goal 2. Pacific nations manage some of the world&apos;s largest
                Exclusive Economic Zones (EEZs), and the potential for carbon
                sequestration through mangrove conservation, seagrass protection,
                and sustainable ocean management is enormous. IRENA has
                identified the Pacific as a region with significant untapped
                potential for solar PV, wind, geothermal (in volcanic islands
                like Vanuatu and PNG), and ocean thermal energy conversion.
              </>
            ) : (
              <>
                <strong className="text-foreground">ブルーカーボン</strong>
                と海洋ベースの気候ソリューションはGoal 2の下で優先度が高まっている分野です。太平洋島嶼国は世界最大級の排他的経済水域（EEZ）を管理しており、マングローブ保全、海草保護、持続可能な海洋管理を通じた炭素隔離の可能性は巨大です。IRENAは太平洋地域を、太陽光PV、風力、地熱（バヌアツやPNGのような火山島）、海洋温度差発電において大きな未開拓のポテンシャルを持つ地域と位置づけています。
              </>
            )}
          </p>

          <p className="text-muted">
            {en ? (
              <>
                The{" "}
                <strong className="text-foreground">climate justice dimension</strong>{" "}
                is central to the Pacific&apos;s engagement with Goal 2. Pacific
                Leaders have been among the most vocal advocates at successive
                COP summits for the 1.5&deg;C temperature target, the
                establishment of a Loss and Damage fund (achieved at COP27 in
                2022), and recognition that SIDS bear disproportionate costs for
                a crisis they did not create. Pacific Nationally Determined
                Contributions (NDCs) frequently include conditional targets that
                depend on international financial and technical support.
              </>
            ) : (
              <>
                <strong className="text-foreground">気候正義の次元</strong>
                はGoal 2における太平洋の取り組みの中核です。太平洋首脳は歴代のCOPサミットにおいて、1.5&deg;C目標、損失と損害（Loss and Damage）基金の設立（COP27で実現）、そしてSIDSが自らが生み出したのではない危機に対して不均衡なコストを負っているという認識について最も声高な提唱者であり続けています。太平洋のNDCには、国際的な財政・技術支援を条件とする条件付き目標が頻繁に含まれています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 5. Goal 3: Preparedness, Response, Recovery ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "5. Goal 3: Preparedness, Response, and Recovery"
              : "5. Goal 3の詳細分析: 災害への備え・対応・復旧"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Goal 3 focuses on{" "}
                <strong className="text-foreground">
                  strengthening disaster preparedness, response, and recovery
                </strong>{" "}
                across the Pacific. It recognizes that even with the best risk
                reduction efforts, disasters will continue to occur, and PICTs
                must be equipped to respond effectively and recover in ways that
                build greater resilience.
              </>
            ) : (
              <>
                Goal 3は太平洋全域での{" "}
                <strong className="text-foreground">
                  災害への備え・対応・復旧の強化
                </strong>{" "}
                に焦点を当てています。最善のリスク軽減努力をもってしても災害は発生し続けることを認識し、PICTsが効果的に対応し、より大きなレジリエンスを構築する形で復旧する能力を備える必要性を強調しています。
              </>
            )}
          </p>

          <div className="space-y-4">
            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Priority 3-1: Enhanced Preparedness"
                  : "優先分野3-1: 備えの強化"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    The{" "}
                    <strong className="text-foreground">
                      Pacific Islands Emergency Management Alliance (PIEMA)
                    </strong>
                    , supported by SPC and Australia, plays a central role in
                    building preparedness capacity across PICTs. PIEMA
                    facilitates exercises, training programs, and
                    peer-to-peer exchange between National Disaster
                    Management Offices (NDMOs). Key preparedness activities
                    include pre-positioned relief supplies, contingency
                    planning, community-based disaster preparedness programs,
                    and simulation exercises (e.g., the biennial Pacific Wave
                    tsunami exercise).
                  </>
                ) : (
                  <>
                    SPCとオーストラリアの支援を受けた{" "}
                    <strong className="text-foreground">
                      太平洋島嶼防災管理連盟（PIEMA）
                    </strong>{" "}
                    がPICTs全体の備え能力構築において中心的役割を果たしています。PIEMAは訓練、研修プログラム、各国防災管理局（NDMO）間のピアツーピア交流を促進しています。主な備え活動には、事前配備された救援物資、緊急時対応計画、コミュニティベースの防災プログラム、シミュレーション演習（例：隔年の太平洋ウェーブ津波演習）が含まれます。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Priority 3-2: Post-Disaster Response Coordination"
                  : "優先分野3-2: 災害後の対応調整"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    The{" "}
                    <strong className="text-foreground">
                      Pacific Humanitarian Team (PHT)
                    </strong>
                    , led by OCHA, coordinates international humanitarian
                    response in the Pacific. The cluster system is activated for
                    major disasters, with Pacific-adapted arrangements that
                    reflect the unique operational context. Key clusters include
                    Shelter, Food Security, WASH, Health, Education, and
                    Logistics. The Franz Consultation Group provides a
                    coordination mechanism between the PHT, PIF, and affected
                    national governments.
                  </>
                ) : (
                  <>
                    OCHAが主導する{" "}
                    <strong className="text-foreground">
                      太平洋人道支援チーム（PHT）
                    </strong>{" "}
                    が太平洋における国際人道支援を調整しています。大規模災害時にはクラスターシステムが発動され、太平洋の独自の運用環境を反映した調整が行われます。主要クラスターにはシェルター、食料安全保障、WASH、保健、教育、ロジスティクスが含まれます。フランツ協議グループがPHT、PIF、被災国政府間の調整メカニズムを提供しています。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Priority 3-3: Recovery and Build Back Better"
                  : "優先分野3-3: 復旧とBuild Back Better"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    <strong className="text-foreground">
                      Build Back Better (BBB)
                    </strong>{" "}
                    is a core principle of Goal 3, requiring that post-disaster
                    reconstruction goes beyond restoring pre-disaster conditions
                    to actively reduce future risk. Notable examples include
                    post-TC Winston (Fiji, 2016) reconstruction, where the
                    government adopted improved building codes and constructed
                    community shelters to higher cyclone-resistant standards; and
                    post-TC Pam (Vanuatu, 2015) recovery, which included
                    relocation of vulnerable communities and strengthened
                    infrastructure. However, BBB implementation is often
                    constrained by financial pressures for rapid recovery that
                    prioritize speed over resilience.
                  </>
                ) : (
                  <>
                    <strong className="text-foreground">
                      Build Back Better（BBB: より良い復興）
                    </strong>{" "}
                    はGoal 3の中核原則であり、災害後の復旧が発災前の状態の回復にとどまらず、将来のリスクを積極的に軽減することを求めています。顕著な事例として、TC Winston後（フィジー、2016年）の復興では、政府が改良された建築基準を採用し、より高いサイクロン耐性基準のコミュニティシェルターを建設しました。また、TC Pam後（バヌアツ、2015年）の復旧では、脆弱なコミュニティの移転とインフラの強化が含まれました。しかし、BBBの実施は迅速な復旧を優先する財政的圧力により、レジリエンスよりもスピードが重視されることが多いです。
                  </>
                )}
              </p>
            </div>

            <div className="rounded border border-border p-4">
              <p className="mb-1 text-sm font-medium text-foreground">
                {en
                  ? "Priority 3-4: Cultural Heritage and Traditional Knowledge"
                  : "優先分野3-4: 文化遺産と伝統知識"}
              </p>
              <p className="text-muted">
                {en ? (
                  <>
                    Protect cultural heritage and traditional knowledge in
                    disaster contexts. Pacific cultures possess millennia of
                    accumulated wisdom on living with natural hazards. Traditional
                    construction techniques, food preservation methods,
                    environmental indicators, and social networks are vital
                    resilience resources that must be protected, documented, and
                    integrated into modern DRM approaches.
                  </>
                ) : (
                  <>
                    災害の文脈における文化遺産と伝統知識の保護。太平洋の文化は自然災害と共に生きる数千年の蓄積された知恵を有しています。伝統的建築技術、食料保存方法、環境指標、社会ネットワークは、保護・記録され、現代のDRMアプローチに統合されるべき重要なレジリエンス資源です。
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── 6. Implementation Mechanism and Governance ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "6. Implementation Mechanism and Governance"
              : "6. 実施メカニズムとガバナンス"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                The primary vehicle for FRDP implementation is the{" "}
                <strong className="text-foreground">
                  Pacific Resilience Partnership (PRP)
                </strong>
                , a multi-stakeholder partnership established in 2017. The PRP
                brings together governments, regional organizations, civil
                society, the private sector, development partners, and
                academia to coordinate and support resilience building across
                the Pacific. It is governed by a Taskforce comprising
                representatives from PICTs, regional agencies, and development
                partners.
              </>
            ) : (
              <>
                FRDPの実施の主要な手段は、2017年に設立された{" "}
                <strong className="text-foreground">
                  太平洋レジリエンスパートナーシップ（PRP）
                </strong>{" "}
                です。PRPは政府、地域機関、市民社会、民間セクター、開発パートナー、学術機関を結集し、太平洋全域のレジリエンス構築を調整・支援するマルチステークホルダーパートナーシップです。PICTs、地域機関、開発パートナーの代表で構成されるタスクフォースにより運営されています。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                The{" "}
                <strong className="text-foreground">
                  PRP Support Unit
                </strong>{" "}
                is hosted by the Pacific Community (SPC) in Suva, Fiji, and
                provides secretariat functions, technical coordination, and
                monitoring support. The PRP operates through several{" "}
                <strong className="text-foreground">
                  Technical Working Groups (TWGs)
                </strong>
                , including TWGs on Disaster Preparedness, Resilience
                Measurement, Risk Governance, and Localization. These TWGs
                develop technical guidance, share good practices, and support
                national implementation efforts.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  PRP支援ユニット
                </strong>{" "}
                はフィジー・スバの太平洋共同体（SPC）に設置され、事務局機能、技術的調整、モニタリング支援を提供しています。PRPはいくつかの{" "}
                <strong className="text-foreground">
                  技術作業部会（TWG）
                </strong>{" "}
                を通じて活動しており、災害への備え、レジリエンス測定、リスクガバナンス、ローカリゼーションに関するTWGが含まれます。これらのTWGは技術的指針を策定し、好事例を共有し、国レベルの実施を支援しています。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                The{" "}
                <strong className="text-foreground">
                  Pacific Resilience Meeting (PRM)
                </strong>{" "}
                serves as the key convening mechanism for the PRP, bringing
                together stakeholders biennially to review progress, share
                experiences, identify gaps, and set priorities. The PRM has
                evolved from primarily a reporting event to a more dynamic
                platform for peer learning and partnership building.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  太平洋レジリエンス会合（PRM）
                </strong>{" "}
                はPRPの主要な招集メカニズムとして機能し、隔年でステークホルダーを集めて進捗をレビューし、経験を共有し、ギャップを特定し、優先事項を設定しています。PRMは当初の報告イベントからより動的なピアラーニングとパートナーシップ構築のプラットフォームへと発展しています。
              </>
            )}
          </p>

          <p className="text-muted">
            {en ? (
              <>
                At the{" "}
                <strong className="text-foreground">national level</strong>,
                FRDP implementation is channeled through JNAPs, National
                Adaptation Programmes of Action (NAPAs), national DRM plans, and
                national climate change policies. A{" "}
                <strong className="text-foreground">
                  monitoring and reporting framework
                </strong>{" "}
                tracks progress against FRDP goals using indicators aligned with
                Sendai Framework monitoring. A{" "}
                <strong className="text-foreground">peer review mechanism</strong>{" "}
                has been introduced to enable PICTs to review each other&apos;s
                progress, share lessons, and provide constructive feedback. Tonga
                and Fiji were among the first countries to undergo FRDP peer
                reviews.
              </>
            ) : (
              <>
                <strong className="text-foreground">国家レベル</strong>では、
                FRDPの実施はJNAP、国家適応行動計画（NAPA）、国家DRM計画、国家気候変動政策を通じて行われています。仙台防災枠組みのモニタリングと整合した指標を用いてFRDP目標に対する進捗を追跡する{" "}
                <strong className="text-foreground">
                  モニタリング・報告枠組み
                </strong>{" "}
                が設けられています。また、PICTs相互の進捗レビュー、教訓の共有、建設的フィードバックの提供を可能にする{" "}
                <strong className="text-foreground">ピアレビューメカニズム</strong>{" "}
                が導入されており、トンガとフィジーが最初にFRDPピアレビューを受けた国々です。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 7. Financing and International Support ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "7. Financing and International Support"
              : "7. 資金メカニズムと国際支援"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                Financing for resilience building in the Pacific remains one of
                the most critical challenges for FRDP implementation. Pacific
                Leaders have proposed the{" "}
                <strong className="text-foreground">
                  Pacific Resilience Facility (PRF)
                </strong>{" "}
                as a dedicated funding mechanism designed specifically for the
                needs and scale of Pacific SIDS. The PRF concept, championed by
                the Pacific Islands Forum, would provide predictable, accessible
                finance for resilience activities at the community and national
                level, addressing the limitations of existing global mechanisms.
              </>
            ) : (
              <>
                太平洋におけるレジリエンス構築のための資金調達は、FRDP実施における最も重大な課題の一つです。太平洋首脳は、太平洋SIDSのニーズと規模に特化した専用資金メカニズムとして{" "}
                <strong className="text-foreground">
                  太平洋レジリエンスファシリティ（PRF）
                </strong>{" "}
                を提案しています。太平洋諸島フォーラムが推進するPRFの構想は、コミュニティおよび国家レベルのレジリエンス活動に対して予測可能でアクセスしやすい資金を提供し、既存の国際メカニズムの限界を克服することを目指しています。
              </>
            )}
          </p>

          <p className="mb-4 text-muted">
            {en ? (
              <>
                Access to the{" "}
                <strong className="text-foreground">
                  Green Climate Fund (GCF)
                </strong>{" "}
                has been a persistent challenge for PICTs. Most Pacific nations
                lack{" "}
                <strong className="text-foreground">
                  Direct Access Entity (DAE) status
                </strong>
                , meaning they must channel proposals through accredited
                international entities (such as UNDP, the World Bank, or
                regional bodies like SPC and SPREP), which adds complexity and
                delays. The GCF&apos;s accreditation requirements are onerous for
                small administrations with limited fiduciary capacity. The
                Adaptation Fund and GEF LDCF/SCCF face similar access barriers,
                though their smaller project scales are sometimes more
                appropriate for Pacific contexts.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  緑の気候基金（GCF）
                </strong>{" "}
                へのアクセスはPICTsにとって持続的な課題です。ほとんどの太平洋島嶼国は{" "}
                <strong className="text-foreground">
                  直接アクセス主体（DAE）のステータス
                </strong>{" "}
                を持たず、認定された国際機関（UNDP、世界銀行、SPCやSPREPなどの地域機関）を通じて申請書を提出する必要があり、複雑さと遅延が生じます。GCFの認定要件は限られた受託能力しかない小規模行政には過重な負担です。適応基金やGEF LDCF/SCCFも同様のアクセス障壁に直面していますが、小規模なプロジェクト規模が太平洋の文脈により適している場合もあります。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Funding Source" : "資金源"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Type" : "種別"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Pacific Allocation (approx.)" : "太平洋配分（概算）"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Focus Areas" : "重点分野"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Green Climate Fund (GCF)" : "緑の気候基金（GCF）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Multilateral climate" : "多国間気候"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    USD ~600M (2015&ndash;2024)
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Adaptation, mitigation, EWS, coastal resilience" : "適応、緩和、EWS、沿岸レジリエンス"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Australia (DFAT)" : "オーストラリア（DFAT）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Bilateral" : "二国間"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    AUD ~1.5B/yr (Pacific climate & DRR)
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "PIEMA, COSPPac, infrastructure, humanitarian" : "PIEMA、COSPPac、インフラ、人道支援"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "New Zealand (MFAT)" : "ニュージーランド（MFAT）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Bilateral" : "二国間"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    NZD ~700M/3yr (Pacific total ODA)
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Climate resilience, renewable energy, governance" : "気候レジリエンス、再エネ、ガバナンス"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Japan (JICA)" : "日本（JICA）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Bilateral" : "二国間"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    USD ~300M/yr (Pacific total)
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Met services, DRR capacity, infrastructure, PALM" : "気象サービス、防災能力、インフラ、PALM"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "World Bank" : "世界銀行"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Multilateral" : "多国間"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    USD ~500M (active portfolio)
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "PREP, CAT-DDO, resilient infrastructure" : "PREP、CAT-DDO、レジリエントインフラ"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    EU
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Multilateral" : "多国間"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    EUR ~400M (2021&ndash;2027 MFF)
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "GCCA+, ocean, climate adaptation, governance" : "GCCA+、海洋、気候適応、ガバナンス"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en ? "Adaptation Fund" : "適応基金"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Multilateral climate" : "多国間気候"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    USD ~80M (Pacific cumulative)
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en ? "Community adaptation, water security, food security" : "コミュニティ適応、水安全保障、食料安全保障"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            {en ? (
              <>
                The{" "}
                <strong className="text-foreground">
                  Pacific Islands Forum Secretariat (PIFS)
                </strong>{" "}
                plays a crucial advocacy role, representing Pacific interests in
                global climate and DRR negotiations and mobilizing political
                support for increased resilience financing. PIFS has been
                instrumental in securing Pacific priorities in COP outcomes and
                championing the establishment of the Loss and Damage fund.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  太平洋諸島フォーラム事務局（PIFS）
                </strong>{" "}
                は、国際的な気候・防災交渉において太平洋の利益を代表し、レジリエンス資金の増額に向けた政治的支持を動員する重要なアドボカシー役割を果たしています。PIFSはCOPの成果に太平洋の優先事項を確保し、損失と損害基金の設立を推進する上で主導的な役割を果たしてきました。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 8. Progress and Challenges ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "8. Progress and Challenges"
              : "8. 進捗と課題"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                As the FRDP enters its final years toward the 2030 horizon, a{" "}
                <strong className="text-foreground">
                  mid-term assessment (2022&ndash;2023)
                </strong>{" "}
                reveals uneven but meaningful progress. On the positive side,
                JNAPs have expanded to cover more PICTs, resilience
                considerations have been mainstreamed into some national budgets,
                the PRP has matured as a coordination platform, and several
                countries have made significant strides in renewable energy
                deployment.
              </>
            ) : (
              <>
                FRDPが2030年の期限に向けた最終段階に入る中、{" "}
                <strong className="text-foreground">
                  中間評価（2022&ndash;2023年）
                </strong>{" "}
                では不均一ながらも意義のある進捗が明らかになっています。肯定的な面として、JNAPはより多くのPICTsに拡大し、一部の国家予算にレジリエンスの考慮が主流化され、PRPは調整プラットフォームとして成熟し、いくつかの国は再生可能エネルギーの展開で大きな前進を遂げています。
              </>
            )}
          </p>

          <p className="mb-4 text-muted">
            {en ? (
              <>
                However,{" "}
                <strong className="text-foreground">
                  persistent and systemic challenges
                </strong>{" "}
                continue to constrain progress:
              </>
            ) : (
              <>
                しかしながら、{" "}
                <strong className="text-foreground">
                  持続的かつ体系的な課題
                </strong>{" "}
                が進捗を引き続き制約しています：
              </>
            )}
          </p>

          <ul className="ml-4 list-disc space-y-3 text-muted">
            <li>
              <strong className="text-foreground">
                {en
                  ? "Limited human and financial resources"
                  : "限られた人的・財政的資源"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; Small populations, limited tax bases, and
                  dependence on volatile external revenue streams (fisheries
                  licensing, tourism, remittances) constrain domestic funding for
                  resilience. Most PICTs lack dedicated resilience budget lines.
                </>
              ) : (
                <>
                  {" "}&mdash; 少ない人口、限られた課税基盤、不安定な外部収入（漁業ライセンス、観光、送金）への依存が、レジリエンスのための国内資金を制約しています。ほとんどのPICTsには専用のレジリエンス予算項目がありません。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Data gaps for evidence-based planning"
                  : "エビデンスに基づく計画のためのデータギャップ"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; Lack of comprehensive, disaggregated disaster
                  loss data, limited climate observation networks, and
                  insufficient baseline data for risk assessment hamper
                  evidence-based decision making and effective monitoring of
                  FRDP progress.
                </>
              ) : (
                <>
                  {" "}&mdash; 包括的で細分化された災害損失データの欠如、限られた気候観測ネットワーク、リスク評価のための不十分なベースラインデータが、エビデンスに基づく意思決定とFRDP進捗の効果的なモニタリングを阻んでいます。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Climate finance access barriers"
                  : "気候資金アクセスの障壁"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; Complex application processes, stringent fiduciary
                  requirements, and the need for large-scale projects that do
                  not match SIDS contexts create persistent barriers to
                  accessing GCF, GEF, and other global climate funds.
                </>
              ) : (
                <>
                  {" "}&mdash; 複雑な申請プロセス、厳格な受託要件、SIDSの文脈に合わない大規模プロジェクトの必要性が、GCF、GEF、その他のグローバル気候基金へのアクセスに対する持続的な障壁となっています。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Coordination fatigue"
                  : "調整疲れ"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; The proliferation of regional and global
                  frameworks (FRDP, Sendai, Paris Agreement, SDGs, Pacific
                  Islands Meteorological Strategy, Boe Declaration, 2050
                  Strategy for the Blue Pacific Continent) creates reporting
                  and coordination burdens on already stretched national
                  administrations.
                </>
              ) : (
                <>
                  {" "}&mdash; 地域的・国際的枠組みの増加（FRDP、仙台防災枠組み、パリ協定、SDGs、太平洋島嶼気象戦略、ボエ宣言、青い太平洋大陸のための2050戦略）が、すでに負担の大きい国家行政に報告・調整の負担を課しています。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Private sector engagement"
                  : "民間セクターの参画"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; Private sector involvement in resilience building
                  remains weak across most PICTs. The small scale of Pacific
                  economies, limited market size, and perceived high risk deter
                  private investment in resilient infrastructure and climate
                  adaptation.
                </>
              ) : (
                <>
                  {" "}&mdash; ほとんどのPICTsにおいてレジリエンス構築への民間セクターの参加は依然として弱い状況です。太平洋経済の小規模性、限られた市場規模、高いリスク認識が、レジリエントインフラや気候適応への民間投資を阻んでいます。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "Gender and social inclusion"
                  : "ジェンダーと社会的包摂"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; While the FRDP emphasizes inclusion, practical
                  implementation of gender-responsive and disability-inclusive
                  resilience programming remains insufficient. Women, youth,
                  persons with disabilities, and marginalized groups continue
                  to face disproportionate disaster impacts.
                </>
              ) : (
                <>
                  {" "}&mdash; FRDPは包摂性を重視していますが、ジェンダー対応型・障害包摂型のレジリエンスプログラミングの実践は依然として不十分です。女性、若者、障害者、社会的に疎外されたグループは引き続き不均衡な災害影響に直面しています。
                </>
              )}
            </li>
            <li>
              <strong className="text-foreground">
                {en
                  ? "COVID-19 and compound crises"
                  : "COVID-19と複合危機"}
              </strong>
              {en ? (
                <>
                  {" "}&mdash; The COVID-19 pandemic severely disrupted
                  resilience-building activities across the Pacific, diverting
                  resources, restricting international technical assistance, and
                  devastating tourism-dependent economies. The compound crisis
                  of TC Harold striking Fiji, Vanuatu, Tonga, and Solomon
                  Islands in April 2020 &mdash; at the peak of COVID-19
                  lockdowns &mdash; demonstrated the acute vulnerability of
                  PICTs to simultaneous, cascading crises.
                </>
              ) : (
                <>
                  {" "}&mdash; COVID-19パンデミックは太平洋全域のレジリエンス構築活動を深刻に混乱させ、資源を転用し、国際的技術支援を制限し、観光依存型経済を壊滅させました。2020年4月のCOVID-19ロックダウンのピーク時にTC Haroldがフィジー、バヌアツ、トンガ、ソロモン諸島を直撃するという複合危機は、PICTsの同時・連鎖的危機への鋭い脆弱性を実証しました。
                </>
              )}
            </li>
          </ul>
        </section>

        <hr className="border-border" />

        {/* ── 9. Linkage with Global Frameworks ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "9. Linkage with Global Frameworks"
              : "9. 他の国際枠組みとの連携"}
          </h2>
          <p className="mb-4 text-muted">
            {en ? (
              <>
                The FRDP was intentionally designed to serve as the{" "}
                <strong className="text-foreground">
                  Pacific regional implementation vehicle
                </strong>{" "}
                for the post-2015 global development agenda. The following table
                maps the alignment between FRDP Goals, Sendai Framework
                priorities, relevant SDGs, and Paris Agreement articles.
              </>
            ) : (
              <>
                FRDPは、ポスト2015の国際開発アジェンダに対する{" "}
                <strong className="text-foreground">
                  太平洋地域の実施手段
                </strong>{" "}
                として意図的に設計されました。以下の表はFRDP目標、仙台防災枠組みの優先事項、関連するSDGs、パリ協定条項の間の整合性を示しています。
              </>
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "FRDP Goal" : "FRDP目標"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Sendai Priorities" : "仙台優先行動"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "SDGs" : "SDGs"}
                  </th>
                  <th className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
                    {en ? "Paris Agreement" : "パリ協定"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Goal 1: Integrated adaptation & risk reduction"
                      : "Goal 1: 統合的適応・リスク軽減"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "P1: Understanding risk; P2: Risk governance; P3: Investing in DRR"
                      : "P1: リスク理解; P2: リスクガバナンス; P3: DRRへの投資"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    SDG 1, 2, 9, 11, 13
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Art. 7 (Adaptation); Art. 8 (Loss & Damage)"
                      : "第7条（適応）; 第8条（損失と損害）"}
                  </td>
                </tr>
                <tr className="bg-accent-light/50">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Goal 2: Low carbon development"
                      : "Goal 2: 低炭素開発"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "P3: Investing in DRR (co-benefits)"
                      : "P3: DRRへの投資（共便益）"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    SDG 7, 9, 13, 14, 15
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Art. 4 (Mitigation / NDCs); Art. 9 (Finance); Art. 10 (Technology)"
                      : "第4条（緩和/NDC）; 第9条（資金）; 第10条（技術）"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">
                    {en
                      ? "Goal 3: Preparedness, response, recovery"
                      : "Goal 3: 備え・対応・復旧"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "P4: Enhancing preparedness for effective response; Build Back Better"
                      : "P4: 効果的対応のための備え強化; BBB"}
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    SDG 1, 2, 11, 13
                  </td>
                  <td className="border border-border px-3 py-2 text-muted">
                    {en
                      ? "Art. 7 (Adaptation); Art. 8 (Loss & Damage)"
                      : "第7条（適応）; 第8条（損失と損害）"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-muted">
            {en ? (
              <>
                Pacific Leaders have been among the most influential voices at
                COP negotiations, advocating for the{" "}
                <strong className="text-foreground">
                  1.5&deg;C temperature limit
                </strong>{" "}
                as an existential necessity rather than a political aspiration.
                The Marshall Islands&apos; leadership of the High Ambition
                Coalition at COP21, Fiji&apos;s presidency of COP23 (the first
                SIDS to hold the COP presidency), and the Pacific&apos;s
                sustained advocacy were instrumental in the establishment of the{" "}
                <strong className="text-foreground">
                  Loss and Damage fund at COP27 (2022)
                </strong>
                . The FRDP provides the regional framework through which these
                global commitments are translated into national and
                community-level action in the Pacific.
              </>
            ) : (
              <>
                太平洋首脳はCOP交渉において最も影響力のある声の一つであり続け、{" "}
                <strong className="text-foreground">
                  1.5&deg;C目標
                </strong>{" "}
                を政治的野心ではなく存続のための必要条件として提唱してきました。COP21における高野心連合のマーシャル諸島の主導、COP23におけるフィジーの議長国（SIDS初のCOP議長国）、太平洋の持続的なアドボカシーは、{" "}
                <strong className="text-foreground">
                  COP27（2022年）における損失と損害基金の設立
                </strong>{" "}
                に不可欠な役割を果たしました。FRDPはこれらの国際的コミットメントを太平洋における国家・コミュニティレベルの行動に変換するための地域枠組みを提供しています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── 10. Outlook Toward 2030 ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {en
              ? "10. Outlook Toward 2030"
              : "10. 2030年に向けた展望"}
          </h2>
          <p className="mb-3 text-muted">
            {en ? (
              <>
                As the FRDP approaches its terminal year, discussions on a{" "}
                <strong className="text-foreground">
                  successor framework
                </strong>{" "}
                are beginning to take shape within the PRP and Pacific Islands
                Forum. The first decade of FRDP implementation has yielded
                critical lessons: the integration of DRR and CCA is
                conceptually sound but institutionally difficult; voluntary
                frameworks require strong coordination mechanisms to drive
                action; and climate finance architecture must be fundamentally
                reformed to serve SIDS effectively.
              </>
            ) : (
              <>
                FRDPが最終年に近づく中、PRPと太平洋諸島フォーラム内で{" "}
                <strong className="text-foreground">
                  後継枠組み
                </strong>{" "}
                に関する議論が始まりつつあります。FRDPの最初の10年間の実施からは重要な教訓が得られています。DRRとCCAの統合は概念的には妥当だが制度的には困難であること、自発的枠組みは行動を促すための強力な調整メカニズムを必要とすること、そして気候資金の構造はSIDSを効果的に支援するために根本的に改革されなければならないことです。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                <strong className="text-foreground">Emerging priorities</strong>{" "}
                that any successor framework must address include:{" "}
                <strong className="text-foreground">climate mobility</strong>{" "}
                and planned relocation (with several Pacific communities already
                in various stages of climate-induced displacement);{" "}
                <strong className="text-foreground">ocean resilience</strong>{" "}
                given the centrality of marine ecosystems to Pacific livelihoods
                and cultures;{" "}
                <strong className="text-foreground">
                  digital transformation
                </strong>{" "}
                in DRM and climate services (leveraging AI, remote sensing, and
                digital connectivity); and the intersections of{" "}
                <strong className="text-foreground">
                  health security, food security, and climate resilience
                </strong>{" "}
                exposed by the COVID-19 pandemic.
              </>
            ) : (
              <>
                後継枠組みが取り組むべき{" "}
                <strong className="text-foreground">新たな優先事項</strong>
                には以下が含まれます。{" "}
                <strong className="text-foreground">気候移動</strong>
                と計画的移転（複数の太平洋コミュニティがすでに気候変動による移転の様々な段階にある）、太平洋の生計と文化にとっての海洋生態系の中心性を踏まえた{" "}
                <strong className="text-foreground">海洋レジリエンス</strong>、
                DRMと気候サービスにおける{" "}
                <strong className="text-foreground">デジタル変革</strong>
                （AI、リモートセンシング、デジタル接続性の活用）、そしてCOVID-19パンデミックが露呈した{" "}
                <strong className="text-foreground">
                  保健安全保障・食料安全保障・気候レジリエンスの交差点
                </strong>
                です。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                The{" "}
                <strong className="text-foreground">
                  IPCC AR6 assessment
                </strong>{" "}
                has stark implications for Pacific resilience planning. Even
                under the most optimistic emission scenarios, Pacific nations
                face committed sea-level rise, ocean warming, and acidification
                that will continue for centuries. The concept of{" "}
                <strong className="text-foreground">adaptation limits</strong>{" "}
                &mdash; the point at which adaptive capacity is exhausted &mdash;
                is no longer theoretical for low-lying atolls. Successor
                frameworks must grapple with transformational adaptation, loss
                and damage responses, and the rights of climate-displaced
                populations.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  IPCC AR6の評価
                </strong>{" "}
                は太平洋のレジリエンス計画に厳しい示唆を与えています。最も楽観的な排出シナリオでも、太平洋諸国は数世紀にわたって続く海面上昇、海洋温暖化、酸性化に直面しています。{" "}
                <strong className="text-foreground">適応限界</strong>
                の概念（適応能力が尽きる段階）はもはや低地環礁にとって理論的なものではありません。後継枠組みは変革的適応、損失と損害への対応、気候変動により移転を余儀なくされた人々の権利に取り組む必要があります。
              </>
            )}
          </p>

          <p className="mb-3 text-muted">
            {en ? (
              <>
                The{" "}
                <strong className="text-foreground">
                  2050 Strategy for the Blue Pacific Continent
                </strong>
                , adopted by Pacific Islands Forum Leaders in 2022, provides the
                broader political framework within which FRDP&apos;s successor
                will be situated. This long-term strategy envisions the Pacific
                as a &ldquo;Blue Pacific Continent&rdquo; and articulates seven
                thematic areas including climate change, disaster resilience,
                ocean resources, and regional security. It represents a shift
                from framing Pacific nations as vulnerable small islands to
                asserting their identity as large ocean states with vast marine
                resources and rich cultural heritage.
              </>
            ) : (
              <>
                2022年に太平洋諸島フォーラム首脳が採択した{" "}
                <strong className="text-foreground">
                  青い太平洋大陸のための2050戦略
                </strong>{" "}
                は、FRDPの後継が位置づけられるより広い政治的枠組みを提供しています。この長期戦略は太平洋を「青い太平洋大陸」として構想し、気候変動、災害レジリエンス、海洋資源、地域安全保障を含む七つのテーマ分野を掲げています。脆弱な小島嶼という枠組みから、広大な海洋資源と豊かな文化遺産を持つ大洋国家としてのアイデンティティを主張する転換を示しています。
              </>
            )}
          </p>

          <p className="text-muted">
            {en ? (
              <>
                Integration with the{" "}
                <strong className="text-foreground">
                  WMO Early Warnings for All (EW4All) initiative
                </strong>{" "}
                targets represents another critical dimension. The UN
                Secretary-General&apos;s call for every person on Earth to be
                protected by early warning systems by 2027 has catalyzed
                investment in Pacific EWS, with the FRDP providing the regional
                policy framework through which EW4All targets are pursued. The
                Pacific region&apos;s experience offers lessons globally on how
                to build multi-hazard EWS in resource-constrained, geographically
                dispersed, and climatically exposed settings.
              </>
            ) : (
              <>
                <strong className="text-foreground">
                  WMOのEarly Warnings for All（EW4All：すべての人に早期警報を）イニシアティブ
                </strong>{" "}
                の目標との統合も重要な次元です。2027年までに地球上のすべての人を早期警報システムで保護するという国連事務総長の呼びかけは太平洋のEWSへの投資を促進し、FRDPがEW4All目標を追求するための地域政策枠組みを提供しています。太平洋地域の経験は、資源が制約され、地理的に分散し、気候的に露出度の高い環境でマルチハザードEWSを構築する方法について、世界に教訓を提供しています。
              </>
            )}
          </p>
        </section>

        <hr className="border-border" />

        {/* ── References ── */}
        <section>
          <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            References
          </h2>
          <ol className="ml-4 list-decimal space-y-2 text-xs text-muted">
            <li>
              Pacific Islands Forum Secretariat (2016). Framework for Resilient
              Development in the Pacific: An Integrated Approach to Address
              Climate Change and Disaster Risk Management (FRDP) 2017&ndash;2030.{" "}
              <em>PIFS</em>, Suva.
            </li>
            <li>
              Pacific Community / SPC (2017). Pacific Resilience Partnership:
              Governance Arrangements and Terms of Reference.{" "}
              <em>SPC Geoscience, Energy and Maritime Division</em>, Suva.
            </li>
            <li>
              SPREP (2016). Pacific Islands Framework for Action on Climate
              Change 2006&ndash;2015: Final Evaluation.{" "}
              <em>
                Secretariat of the Pacific Regional Environment Programme
              </em>
              , Apia.
            </li>
            <li>
              Pacific Islands Forum (2022). 2050 Strategy for the Blue Pacific
              Continent.{" "}
              <em>Pacific Islands Forum Secretariat</em>, Suva.
            </li>
            <li>
              UNDRR (2015). Sendai Framework for Disaster Risk Reduction
              2015&ndash;2030.{" "}
              <em>United Nations Office for Disaster Risk Reduction</em>,
              Geneva.
            </li>
            <li>
              UNFCCC (2015). Paris Agreement.{" "}
              <em>United Nations Framework Convention on Climate Change</em>.
            </li>
            <li>
              IPCC (2022). Climate Change 2022: Impacts, Adaptation and
              Vulnerability. Chapter 15: Small Islands.{" "}
              <em>
                Contribution of Working Group II to the Sixth Assessment Report
              </em>
              .
            </li>
            <li>
              Pacific Islands Forum (2018). Boe Declaration on Regional
              Security. Nauru.
            </li>
            <li>
              IRENA (2023). Renewable Energy Statistics 2023: Pacific Islands.{" "}
              <em>International Renewable Energy Agency</em>, Abu Dhabi.
            </li>
            <li>
              World Bank (2021). Pacific Resilience Program (PREP): Implementation
              Status and Results Report.{" "}
              <em>World Bank Group</em>, Washington, DC.
            </li>
            <li>
              Green Climate Fund (2024). GCF Portfolio: Pacific Small Island
              Developing States &mdash; Status Report.{" "}
              <em>GCF Secretariat</em>, Songdo.
            </li>
            <li>
              SPC (2023). PIEMA: Pacific Islands Emergency Management Alliance
              Strategic Plan 2023&ndash;2027.{" "}
              <em>Pacific Community</em>, Suva.
            </li>
            <li>
              Government of Fiji (2017). Post-Disaster Needs Assessment: Tropical
              Cyclone Winston, February 2016.{" "}
              <em>Government of Fiji / World Bank / EU / UNDP</em>.
            </li>
            <li>
              WMO (2023). Early Warnings for All: The UN Early Warnings for All
              Initiative &mdash; Executive Action Plan 2023&ndash;2027.{" "}
              <em>World Meteorological Organization</em>, Geneva.
            </li>
          </ol>
        </section>
      </article>
    </div>
  );
}
