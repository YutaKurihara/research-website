import Link from "next/link";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-card-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-sm text-muted">{profile.nameJa}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {profile.affiliation} / {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-5 text-sm">
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
                className="text-accent hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Research Fields */}
        <section className="mb-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
            Research Fields
          </h2>
          <ul className="space-y-1.5 text-sm">
            <li>リモートセンシングによる洪水リスク解析</li>
            <li>マクロ経済モデルを使用した洪水による経済影響評価</li>
            <li>途上国における防災計画と災害リスクアセスメント</li>
          </ul>
        </section>

        {/* Biography */}
        <section>
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted">
            Biography
          </h2>

          <div className="space-y-6 text-sm">
            <BioBlock title="学歴">
              <li>2018.03　東京工業大学 生命理工学部 生命科学科 卒業</li>
              <li>2021.03　東京工業大学 環境・社会理工学院 融合理工学系 地球環境共創コース 修了</li>
              <li>2023.10　政策研究大学院大学 防災学プログラム 博士課程 入学（ICHARM）</li>
              <li>2026.09　同 修了予定</li>
            </BioBlock>

            <BioBlock title="職歴">
              <li>2021.04〜現在　オリエンタルコンサルタンツグローバル株式会社 資源・防災部</li>
            </BioBlock>

            <BioBlock title="海外プロジェクト">
              <li>フィリピン / ホンジュラス / インド / インドネシア / トルコ</li>
            </BioBlock>

            <BioBlock title="語学">
              <li>TOEIC 895点 / DELE B1（スペイン語）</li>
            </BioBlock>

            <BioBlock title="学会登壇">
              <li>2024.09　16th AOGEO Symposium - Young Career and Earth Intelligence（日本）</li>
              <li>2025.07　第2回国際社会水文学会議 ポスター発表（日本）</li>
              <li>2025.10　17th AOGEO Symposium - AWCI Session, Special Speaker（タイ）</li>
              <li>2026.06　16th International Conference on Hydroinformatics（スペイン）</li>
            </BioBlock>
          </div>
        </section>

        <div className="mt-12">
          <Link
            href="/publications"
            className="text-sm text-accent hover:underline"
          >
            Publications &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

function BioBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-2">
      <p className="text-xs font-semibold text-muted pt-0.5">{title}</p>
      <ul className="space-y-1 text-muted">{children}</ul>
    </div>
  );
}
