"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60 dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto max-w-5xl px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        >
          {SITE_CONFIG.name}
        </Link>

        <button
          className="md:hidden rounded-md border border-gray-200 px-2 py-1 text-sm dark:border-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          className="hidden md:flex gap-6 text-sm text-gray-600 dark:text-gray-300"
          aria-label="Main"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-gray-900 dark:hover:text-gray-100"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-gray-200 px-6 py-4 space-y-3 text-sm dark:border-gray-800"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 dark:text-gray-200"
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
