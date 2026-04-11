import type { Metadata } from "next";
import Link from "next/link";
import { publications } from "@/lib/data";
import { notFound } from "next/navigation";
import FloodDirectDamageContent from "@/lib/flood-direct-damage-content";

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
  preprint: "Preprint",
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
      <a
        href={`https://doi.org/${pub.doi}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-accent hover:underline"
      >
        DOI: {pub.doi}
      </a>

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

      <div className="mt-8 border-t border-border pt-6">
        {pub.id === "flood-direct-damage" ? (
          <FloodDirectDamageContent />
        ) : (
          <div className="text-sm leading-relaxed">
            <DetailContent markdown={pub.details} />
          </div>
        )}
      </div>
    </div>
  );
}

function DetailContent({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Table detection
    if (line.startsWith("|") && i + 1 < lines.length && lines[i + 1]?.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headerCells = tableLines[0].split("|").filter(Boolean).map((c) => c.trim());
      const bodyRows = tableLines.slice(2); // skip header + separator
      elements.push(
        <div key={`table-${i}`} className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                {headerCells.map((cell, ci) => (
                  <th key={ci} className="border border-border bg-accent-light px-3 py-2 text-left font-semibold">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, ri) => {
                const cells = row.split("|").filter(Boolean).map((c) => c.trim());
                return (
                  <tr key={ri}>
                    {cells.map((cell, ci) => (
                      <td key={ci} className="border border-border px-3 py-2 text-muted">
                        <InlineFormat text={cell} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mb-2 mt-8 text-base font-semibold first:mt-0">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mb-1 mt-5 text-sm font-semibold">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*[:\s]*(.*)$/);
      if (match) {
        elements.push(
          <li key={i} className="ml-4 list-disc text-muted">
            <strong className="text-foreground">{match[1]}</strong>
            {match[2] && `: ${match[2]}`}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-4 list-disc text-muted">
          <InlineFormat text={line.slice(2)} />
        </li>
      );
    } else if (line.trim() === "") {
      i++;
      continue;
    } else {
      elements.push(
        <p key={i} className="mb-3 text-muted">
          <InlineFormat text={line} />
        </p>
      );
    }
    i++;
  }

  return <>{elements}</>;
}

function InlineFormat({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="text-foreground">{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
