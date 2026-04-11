import type { Metadata } from "next";
import Link from "next/link";
import { publications } from "@/lib/data";

export const metadata: Metadata = { title: "Publications" };

const typeLabels: Record<string, string> = {
  journal: "Journal",
  conference: "Conference",
  working: "Working Paper",
};

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);
  const years = [...new Set(sorted.map((p) => p.year))];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-10 text-2xl font-bold">Publications</h1>

      {years.map((year) => (
        <section key={year} className="mb-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
            {year}
          </h2>
          <div className="space-y-3">
            {sorted
              .filter((p) => p.year === year)
              .map((pub) => (
                <Link
                  key={pub.id}
                  href={`/publications/${pub.id}`}
                  className="group block rounded-lg border border-border bg-card-bg p-4 transition-shadow hover:shadow-md"
                >
                  <span className="mb-1 inline-block rounded bg-accent-light px-1.5 py-0.5 text-xs text-accent">
                    {typeLabels[pub.type]}
                  </span>
                  <p className="mt-1 text-sm font-medium group-hover:text-accent">
                    {pub.title}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {pub.authors} &middot; {pub.venue}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
