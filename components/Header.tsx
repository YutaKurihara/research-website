"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "https://yutakurihara.github.io/MyProject/", label: "Tools", external: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Kurihara Yuta
        </Link>

        <ul className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              {"external" in item ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <ul className="border-t border-border px-6 pb-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              {"external" in item ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-sm text-muted hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2 text-sm text-muted hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
