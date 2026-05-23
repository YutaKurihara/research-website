"use client";

import katex from "katex";
import "katex/dist/katex.min.css";

export function Math({
  tex,
  display = false,
}: {
  tex: string;
  display?: boolean;
}) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export function MathBlock({ tex }: { tex: string }) {
  return (
    <div className="my-3 overflow-x-auto rounded border border-border bg-accent-light/30 px-4 py-4">
      <Math tex={tex} display />
    </div>
  );
}
