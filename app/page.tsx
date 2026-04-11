import Link from "next/link";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-1 text-2xl font-bold">{profile.name}</h1>
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
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-muted">
          About
        </h2>
        <p className="text-sm leading-relaxed">
          防災・減災分野の研究者。フィリピン・カガヤン川流域を主な対象として、
          ベイズ統計手法とS2Sアンサンブル予測を組み合わせた確率的降水予測、
          衛星画像による洪水被害評価、気候変動下の洪水リスク評価などに取り組んでいます。
        </p>
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
