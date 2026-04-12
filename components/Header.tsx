"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Blog" },
  { href: "https://yutakurihara.github.io/MyProject/", label: "MyProject", external: true },
];

function NavLink({ item, className, onClick }: { item: (typeof navItems)[number]; className: string; onClick?: () => void }) {
  if ("external" in item) {
    return <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>{item.label}</a>;
  }
  return <Link href={item.href} className={className} onClick={onClick}>{item.label}</Link>;
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-sm font-medium tracking-tight">
          K.Y.
        </Link>
        <ul className="hidden gap-8 sm:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink item={item} className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground" />
            </li>
          ))}
        </ul>
        <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />}
          </svg>
        </button>
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
