"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/lib/locale-context";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Blog" },
];

function NavLink({ item, className, onClick }: { item: (typeof navItems)[number]; className: string; onClick?: () => void }) {
  return <Link href={item.href} className={className} onClick={onClick}>{item.label}</Link>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-sm font-medium tracking-tight">
          K.Y.
        </Link>
        <div className="hidden items-center gap-8 sm:flex">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink item={item} className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground" />
              </li>
            ))}
          </ul>
          <button
            onClick={() => setLocale(locale === "ja" ? "en" : "ja")}
            className="rounded border border-border px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted transition-colors hover:text-foreground"
          >
            {locale === "ja" ? "EN" : "JA"}
          </button>
        </div>
        <div className="flex items-center gap-3 sm:hidden">
          <button
            onClick={() => setLocale(locale === "ja" ? "en" : "ja")}
            className="rounded border border-border px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted"
          >
            {locale === "ja" ? "EN" : "JA"}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-border px-6 pb-4 sm:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink item={item} className="block py-2 text-xs uppercase tracking-widest text-muted" onClick={() => setOpen(false)} />
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
