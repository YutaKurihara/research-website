import type { Metadata } from "next";
import Link from "next/link";
import { publications } from "@/lib/data";

export const metadata: Metadata = { title: "Publications" };

const typeLabels: Record<string, string> = {
  journal: "Journal",
  preprint: "Preprint",
};

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);
  const years = [...new Set(sorted.map((p) => p.year))];

  return (
    <div className="mx-auto max-w-2xl px-6">
      <section className="pb-8 pt-20">
        <h1 className="text-4xl font-light tracking-tight">Publications</h1>
      </section>

      <hr className="border-border" />

      {years.map((year) => (
        <section key={year} className="py-8">
          <h2 className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {year}
          </h2>
          <div className="space-y-6">
            {sorted
              .filter((p) => p.year === year)
              .map((pub) => (
                <Link
                  key={pub.id}
                  href={`/publications/${pub.id}`}
                  className="group block"
                >
                  <span className="text-[10px] uppercase tracking-widest text-muted">
                    {typeLabels[pub.type]}
                  </span>
                  <p className="mt-1 text-sm font-medium leading-snug transition-colors group-hover:text-highlight">
                    {pub.title}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {pub.authors} &middot; {pub.venue}
                  </p>
                </Link>
              ))}
          </div>
          <hr className="mt-8 border-border" />
        </section>
      ))}
    </div>
  );
}
