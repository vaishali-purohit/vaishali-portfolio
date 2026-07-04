"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-5xl px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground"
        >
          {SITE_CONFIG.name}
        </Link>

        <button
          className="md:hidden rounded-md border border-border px-2 py-1 text-sm"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          className="hidden md:flex gap-6 items-center text-sm text-muted-foreground"
          aria-label="Main"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-border px-6 py-4 space-y-3 text-sm"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
