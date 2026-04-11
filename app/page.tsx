import Link from "next/link";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-1 text-2xl font-bold">{profile.name}</h1>
      <p className="mb-1 text-sm">{profile.nameJa}</p>
      <p className="mb-6 text-sm text-muted">{profile.affiliation} / {profile.tagline}</p>

      <div className="mb-10 flex flex-wrap gap-4 text-sm">
        <a
          href={profile.links.orcid}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          ORCID
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          GitHub
        </a>
        <a
          href={profile.links.note}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          NOTE
        </a>
      </div>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
          Research Fields
        </h2>
        <ul className="space-y-1 text-sm leading-relaxed">
          <li>リモートセンシングによる洪水リスク解析</li>
          <li>マクロ経済モデルを使用した洪水による経済影響評価</li>
          <li>途上国における防災計画と災害リスクアセスメント</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
          Biography
        </h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="mb-1 font-semibold">学歴</h3>
            <ul className="space-y-1 text-muted">
              <li>2018.03　東京工業大学 生命理工学部 生命科学科 卒業</li>
              <li>2021.03　東京工業大学 環境・社会理工学院 融合理工学系 地球環境共創コース 修了</li>
              <li>2023.10　政策研究大学院大学 防災学プログラム 博士課程 入学（ICHARM）</li>
              <li>2026.09　同 修了予定</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1 font-semibold">職歴</h3>
            <ul className="space-y-1 text-muted">
              <li>2021.04〜現在　オリエンタルコンサルタンツグローバル株式会社 資源・防災部</li>
              <li className="ml-12 text-xs">河川水理・水文・防災・リモートセンシング</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1 font-semibold">海外プロジェクト（主な渡航先）</h3>
            <ul className="space-y-1 text-muted">
              <li>フィリピン / ホンジュラス / インド / インドネシア / トルコ</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1 font-semibold">語学</h3>
            <ul className="space-y-1 text-muted">
              <li>TOEIC 895点 / DELE B1（スペイン語）</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1 font-semibold">学会登壇</h3>
            <ul className="space-y-1 text-muted">
              <li>2024.09　16th AOGEO Symposium - Young Career and Earth Intelligence（日本）</li>
              <li>2025.07　第2回国際社会水文学会議 ポスター発表（日本）</li>
              <li>2025.10　17th AOGEO Symposium - AWCI Session, Special Speaker（タイ）</li>
              <li>2026.06　16th International Conference on Hydroinformatics（スペイン）</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <Link
          href="/publications"
          className="text-sm text-accent hover:underline"
        >
          Publications &rarr;
        </Link>
      </div>
    </div>
  );
}
