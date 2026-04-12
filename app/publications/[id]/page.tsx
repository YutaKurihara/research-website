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
    <div className="mx-auto max-w-2xl px-6">
      <section className="pb-8 pt-20">
        <Link
          href="/publications"
          className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          &larr; Publications
        </Link>

        <div className="mt-8">
          <span className="text-[10px] uppercase tracking-widest text-muted">
            {typeLabels[pub.type]} &middot; {pub.year}
          </span>
          <h1 className="mt-2 text-2xl font-light leading-tight tracking-tight">
            {pub.title}
          </h1>
          <p className="mt-3 text-xs text-muted">
            {pub.authors} &middot; {pub.venue}
          </p>
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-xs text-highlight hover:underline"
          >
            DOI: {pub.doi}
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {pub.keywords.map((kw) => (
            <span
              key={kw}
              className="rounded-full border border-border px-2.5 py-0.5 text-[10px] text-muted"
            >
              {kw}
            </span>
          ))}
        </div>
      </section>

      <hr className="border-border" />

      <section className="py-8">
        <h2 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          Abstract
        </h2>
        <p className="text-[13px] leading-relaxed text-muted">{pub.abstract}</p>
      </section>

      <hr className="border-border" />

      <section className="py-8">
        <div className="text-sm leading-relaxed">
          <DetailContent markdown={pub.details} />
        </div>
      </section>
    </div>
  );
}

function DetailContent({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("|") && i + 1 < lines.length && lines[i + 1]?.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headerCells = tableLines[0].split("|").filter(Boolean).map((c) => c.trim());
      const bodyRows = tableLines.slice(2);
      elements.push(
        <div key={`table-${i}`} className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                {headerCells.map((cell, ci) => (
                  <th key={ci} className="border border-border bg-accent-light px-3 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted">
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
        <h2 key={i} className="mb-3 mt-8 text-[11px] font-medium uppercase tracking-[0.2em] text-muted first:mt-0">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mb-2 mt-5 text-sm font-medium">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*[:\s]*(.*)$/);
      if (match) {
        elements.push(
          <li key={i} className="ml-4 list-disc text-[13px] text-muted">
            <strong className="text-foreground">{match[1]}</strong>
            {match[2] && `: ${match[2]}`}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-4 list-disc text-[13px] text-muted">
          <InlineFormat text={line.slice(2)} />
        </li>
      );
    } else if (line.trim() === "") {
      i++;
      continue;
    } else {
      elements.push(
        <p key={i} className="mb-3 text-[13px] leading-relaxed text-muted">
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
