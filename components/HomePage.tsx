"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { profile, tools } from "@/lib/data";

const t = {
  ja: {
    researchFields: "Research Fields",
    biography: "Biography",
    tools: "Tools",
    education: "学歴",
    employment: "職歴",
    overseas: "海外",
    languages: "語学",
    talks: "登壇",
    fields: [
      "SAR 衛星画像による洪水・災害被害の迅速把握と直接被害額の推定",
      "気候変動下の洪水リスクと不確実性の確率的評価（ベイズ推定・CMIP6）",
      "アンサンブル降雨予測に基づく影響予測型（Impact-based）の洪水早期警報",
      "マクロ経済モデル（DSGE）による洪水の長期的な経済影響評価",
      "途上国における防災計画と災害リスクアセスメント",
    ],
    edu: [
      "2018.03　東京工業大学 生命理工学部 生命科学科 卒業",
      "2021.03　東京工業大学 環境・社会理工学院 融合理工学系 地球環境共創コース 修了",
      "2023.10　政策研究大学院大学 防災学プログラム 博士課程 入学（ICHARM）",
      "2026.09　同 修了　博士（防災学）",
    ],
    emp: [
      "2021.04〜現在　オリエンタルコンサルタンツグローバル株式会社（水資源・防災部）",
      "2026〜現在　水災害・リスクマネジメント国際センター（ICHARM）招聘研究員",
    ],
    abroad:
      "フィリピン / ホンジュラス / インド / インドネシア / トルコ / パプアニューギニア / コンゴ民主共和国",
    lang: "TOEIC 895 / DELE B1",
    talks_list: [
      "2024.09　16th AOGEO Symposium - Young Career and Earth Intelligence（日本）",
      "2025.07　第2回国際社会水文学会議 ポスター発表（日本）",
      "2025.10　17th AOGEO Symposium - AWCI Session, Special Speaker（タイ）",
      "2026.06　16th International Conference on Hydroinformatics（スペイン）",
    ],
    toolsIntro:
      "研究成果を実務で使えるかたちにしたツールを公開しています。",
  },
  en: {
    researchFields: "Research Fields",
    biography: "Biography",
    tools: "Tools",
    education: "Education",
    employment: "Employment",
    overseas: "Overseas",
    languages: "Languages",
    talks: "Talks",
    fields: [
      "Rapid flood and disaster damage mapping with SAR imagery and direct damage estimation",
      "Probabilistic assessment of flood risk and its uncertainty under climate change (Bayesian inference, CMIP6)",
      "Impact-based flood early warning from ensemble rainfall forecasts",
      "Long-run economic impacts of floods using macroeconomic (DSGE) models",
      "Disaster risk reduction planning and risk assessment in developing countries",
    ],
    edu: [
      "2018.03　B.S. in Bioscience, Tokyo Institute of Technology",
      "2021.03　M.Eng. in Global Engineering for Development, Tokyo Institute of Technology",
      "2023.10　Ph.D. Program in Disaster Management, GRIPS / ICHARM (enrolled)",
      "2026.09　Ph.D. in Disaster Management, GRIPS / ICHARM",
    ],
    emp: [
      "2021.04–Present　Oriental Consultants Global Co., Ltd. (Water Resources and Disaster Management Dept.)",
      "2026–Present　Visiting Researcher, International Centre for Water Hazard and Risk Management (ICHARM)",
    ],
    abroad:
      "Philippines / Honduras / India / Indonesia / Türkiye / Papua New Guinea / DR Congo",
    lang: "TOEIC 895 / DELE B1",
    talks_list: [
      "2024.09　16th AOGEO Symposium - Young Career and Earth Intelligence (Japan)",
      "2025.07　2nd International Conference on Socio-Hydrology, poster (Japan)",
      "2025.10　17th AOGEO Symposium - AWCI Session, Special Speaker (Thailand)",
      "2026.06　16th International Conference on Hydroinformatics (Spain)",
    ],
    toolsIntro:
      "Open tools that turn the research into something practitioners can use.",
  },
};

export default function HomePage() {
  const { locale } = useLocale();
  const l = t[locale];
  const en = locale === "en";

  return (
    <div className="mx-auto max-w-2xl px-6">
      <section className="pb-10 pt-20">
        <h1 className="text-4xl font-light tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-sm text-muted">{profile.nameJa}</p>
        <p className="mt-4 text-[13px] leading-relaxed text-muted">
          {profile.affiliation} / {profile.tagline}
        </p>

        <div className="mt-6 flex gap-6">
          {[
            { label: "ORCID", href: profile.links.orcid },
            { label: "GitHub", href: profile.links.github },
            { label: "NOTE", href: profile.links.note },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <hr className="border-border" />

      <section className="py-10">
        <h2 className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          {l.researchFields}
        </h2>
        <ul className="space-y-2 text-[13px] leading-relaxed">
          {l.fields.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <hr className="border-border" />

      <section className="py-10">
        <h2 className="mb-8 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          {l.biography}
        </h2>
        <div className="space-y-6 text-[13px]">
          <BioRow label={l.education}>
            {l.edu.map((e) => (
              <p key={e}>{e}</p>
            ))}
          </BioRow>
          <BioRow label={l.employment}>
            {l.emp.map((e) => (
              <p key={e}>{e}</p>
            ))}
          </BioRow>
          <BioRow label={l.overseas}>
            <p>{l.abroad}</p>
          </BioRow>
          <BioRow label={l.languages}>
            <p>{l.lang}</p>
          </BioRow>
          <BioRow label={l.talks}>
            {l.talks_list.map((tk) => (
              <p key={tk}>{tk}</p>
            ))}
          </BioRow>
        </div>
      </section>

      <hr className="border-border" />

      <section className="py-10">
        <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          {l.tools}
        </h2>
        <p className="mb-5 text-[13px] text-muted">{l.toolsIntro}</p>
        <ul className="space-y-4 text-[13px]">
          {tools.map((tool) => (
            <li key={tool.url}>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-highlight"
              >
                {en ? tool.name : tool.nameJa} &rarr;
              </a>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {en ? tool.descriptionEn : tool.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-border" />

      <div className="flex gap-8 py-10">
        <Link
          href="/publications"
          className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          Publications &rarr;
        </Link>
        <Link
          href="/blog"
          className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          Blog &rarr;
        </Link>
      </div>
    </div>
  );
}

function BioRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-4">
      <p className="pt-px text-[11px] font-medium uppercase tracking-wider text-muted">{label}</p>
      <div className="space-y-1 text-muted">{children}</div>
    </div>
  );
}
