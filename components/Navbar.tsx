"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              AutoGrowth<span className="text-emerald-500">.</span>
            </span>
          </Link>

          {/* Center nav — desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/how-it-works"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/roi"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              ROI Calculator
            </Link>
            <Link
              href="/blog"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* CTA — desktop */}
          <div className="hidden md:block">
            <Link
              href="/audit"
              className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors"
            >
              Get Free Audit
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 p-2"
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
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="/how-it-works"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/roi"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              ROI Calculator
            </Link>
            <Link
              href="/blog"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors"
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
