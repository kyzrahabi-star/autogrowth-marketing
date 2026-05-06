"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white tracking-tight">
            AutoGrowth
          </Link>

          {/* Center nav — desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/how-it-works"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/roi"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              ROI Calculator
            </Link>
            <Link
              href="/blog"
              className="text-sm text-zinc-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* CTA — desktop */}
          <div className="hidden md:block">
            <Link
              href="/audit"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "#10B981" }}
            >
              Get Free Audit
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden text-zinc-300 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <div className="px-4 py-4 flex flex-col gap-4">
            <Link
              href="/how-it-works"
              className="text-sm text-zinc-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-zinc-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/roi"
              className="text-sm text-zinc-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              ROI Calculator
            </Link>
            <Link
              href="/blog"
              className="text-sm text-zinc-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: "#10B981" }}
              onClick={() => setMenuOpen(false)}
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
