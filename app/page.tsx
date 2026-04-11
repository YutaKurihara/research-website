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
