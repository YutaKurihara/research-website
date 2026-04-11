import Link from "next/link";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      {/* Hero */}
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

      {/* Research Fields */}
      <section className="py-10">
        <h2 className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          Research Fields
        </h2>
        <ul className="space-y-2 text-[13px] leading-relaxed">
          <li>リモートセンシングによる洪水リスク解析</li>
          <li>マクロ経済モデルを使用した洪水による経済影響評価</li>
          <li>途上国における防災計画と災害リスクアセスメント</li>
        </ul>
      </section>

      <hr className="border-border" />

      {/* Biography */}
      <section className="py-10">
        <h2 className="mb-8 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          Biography
        </h2>
        <div className="space-y-6 text-[13px]">
          <BioRow label="学歴">
            <p>2018.03　東京工業大学 生命理工学部 生命科学科 卒業</p>
            <p>2021.03　東京工業大学 環境・社会理工学院 融合理工学系 地球環境共創コース 修了</p>
            <p>2023.10　政策研究大学院大学 防災学プログラム 博士課程 入学（ICHARM）</p>
            <p>2026.09　同 修了予定</p>
          </BioRow>
          <BioRow label="職歴">
            <p>2021.04〜現在　オリエンタルコンサルタンツグローバル株式会社 資源・防災部</p>
          </BioRow>
          <BioRow label="海外">
            <p>フィリピン / ホンジュラス / インド / インドネシア / トルコ</p>
          </BioRow>
          <BioRow label="語学">
            <p>TOEIC 895 / DELE B1</p>
          </BioRow>
          <BioRow label="登壇">
            <p>2024.09　16th AOGEO Symposium（日本）</p>
            <p>2025.07　第2回国際社会水文学会議（日本）</p>
            <p>2025.10　17th AOGEO Symposium - AWCI Session（タイ）</p>
            <p>2026.06　16th International Conference on Hydroinformatics（スペイン）</p>
          </BioRow>
        </div>
      </section>

      <hr className="border-border" />

      <div className="py-10">
        <Link
          href="/publications"
          className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          Publications &rarr;
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
