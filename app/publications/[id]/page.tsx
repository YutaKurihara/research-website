import type { Metadata } from "next";
import Link from "next/link";
import { publications } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return publications.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const pub = publications.find((p) => p.id === id);
  if (!pub) return {};
  return { title: pub.title };
}

const typeLabels: Record<string, string> = {
  journal: "Journal",
  conference: "Conference",
  working: "Working Paper",
};

export default async function PublicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pub = publications.find((p) => p.id === id);
  if (!pub) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/publications"
        className="mb-8 inline-block text-sm text-accent hover:underline"
      >
        &larr; Back
      </Link>

      <span className="mb-2 inline-block rounded bg-accent-light px-1.5 py-0.5 text-xs text-accent">
        {typeLabels[pub.type]}
      </span>
      <h1 className="mb-2 text-xl font-bold leading-tight">{pub.title}</h1>
      <p className="mb-1 text-xs text-muted">
        {pub.authors} &middot; {pub.venue} &middot; {pub.year}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {pub.keywords.map((kw) => (
          <span
            key={kw}
            className="rounded bg-accent-light px-1.5 py-0.5 text-xs text-accent"
          >
            {kw}
          </span>
        ))}
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <h2 className="mb-2 text-sm font-semibold">Abstract</h2>
        <p className="text-sm leading-relaxed text-muted">{pub.abstract}</p>
      </div>

      <div className="mt-8 border-t border-border pt-6 text-sm leading-relaxed">
        <DetailContent markdown={pub.details} />
      </div>
    </div>
  );
}

function DetailContent({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mb-2 mt-6 text-base font-semibold first:mt-0">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mb-1 mt-4 text-sm font-semibold">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*\s*(.*)$/);
      if (match) {
        elements.push(
          <li key={i} className="ml-4 list-disc text-muted">
            <strong className="text-foreground">{match[1]}</strong>
            {match[2] && ` ${match[2]}`}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-4 list-disc text-muted">
          {line.slice(2)}
        </li>
      );
    } else if (line.trim() === "") {
      continue;
    } else {
      elements.push(
        <p key={i} className="mb-2 text-muted">
          {line}
        </p>
      );
    }
  }

  return <>{elements}</>;
}
