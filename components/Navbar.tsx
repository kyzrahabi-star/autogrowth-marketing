"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Flame,
  Wrench,
  Zap,
  Home,
  Phone,
  Target,
  PenTool,
  Star,
  ChevronDown,
} from "lucide-react";

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  function openDropdown(key: string) {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveDropdown(key);
  }

  function scheduleClose() {
    closeTimerRef.current = setTimeout(() => setActiveDropdown(null), 250);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white shadow-sm backdrop-blur-sm"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Auto<span className="text-indigo-600">Growth</span> AI
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Who We Help dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown("whoWeHelp")}
              onMouseLeave={scheduleClose}
            >
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 font-medium py-2">
                Industries{" "}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeDropdown === "whoWeHelp" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "whoWeHelp" && (
                /* Outer wrapper: top-full + pt-2 bridges the visual gap so the
                   cursor never leaves the hover area while moving into the panel */
                <div className="absolute top-full left-0 w-56 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-200 py-2">
                    <p className="uppercase text-[10px] tracking-widest text-gray-400 px-4 pt-2 pb-2">
                      Industries
                    </p>
                    <Link
                      href="/"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-sm text-gray-700 mx-1"
                    >
                      <Flame className="w-4 h-4 text-orange-500 shrink-0" />
                      HVAC
                    </Link>
                    <Link
                      href="/plumbing"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-sm text-gray-500 hover:text-gray-700 mx-1"
                    >
                      <Wrench className="w-4 h-4 text-blue-400 shrink-0" />
                      Plumbing
                      <span className="ml-auto text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full whitespace-nowrap">
                        Coming Soon
                      </span>
                    </Link>
                    <Link
                      href="/electrical"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-sm text-gray-500 hover:text-gray-700 mx-1"
                    >
                      <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
                      Electrical
                      <span className="ml-auto text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full whitespace-nowrap">
                        Coming Soon
                      </span>
                    </Link>
                    <Link
                      href="/roofing"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-sm text-gray-500 hover:text-gray-700 mx-1"
                    >
                      <Home className="w-4 h-4 text-purple-400 shrink-0" />
                      Roofing
                      <span className="ml-auto text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full whitespace-nowrap">
                        Coming Soon
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Features dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown("features")}
              onMouseLeave={scheduleClose}
            >
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 font-medium py-2">
                Features{" "}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeDropdown === "features" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "features" && (
                <div className="absolute top-full left-0 w-56 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-200 py-2">
                    <p className="uppercase text-[10px] tracking-widest text-gray-400 px-4 pt-2 pb-2">
                      Your AI Staff
                    </p>
                    <Link
                      href="/features/ai-receptionist"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-sm text-gray-700 mx-1"
                    >
                      <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                      AI Receptionist
                    </Link>
                    <Link
                      href="/features/lead-scoring"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-sm text-gray-700 mx-1"
                    >
                      <Target className="w-4 h-4 text-emerald-500 shrink-0" />
                      Lead Scoring
                    </Link>
                    <Link
                      href="/features/content-creation"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-sm text-gray-700 mx-1"
                    >
                      <PenTool className="w-4 h-4 text-emerald-500 shrink-0" />
                      Content Creation
                    </Link>
                    <Link
                      href="/features/review-management"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-sm text-gray-700 mx-1"
                    >
                      <Star className="w-4 h-4 text-emerald-500 shrink-0" />
                      Review Management
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </Link>

            <Link
              href="/pricing"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/audit"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Free Tools
            </Link>
          </nav>

          {/* Right side — desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18449102116"
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
              (844) 910-2116
            </a>
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Contact
            </Link>
            <a
              href="/audit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
            >
              Free Audit
            </a>
          </div>

          {/* Mobile right side */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/audit"
              className="inline-flex items-center justify-center min-h-[44px] bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-full text-sm transition-colors"
            >
              Free Audit
            </a>
            <button
              className="flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-600 hover:text-gray-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          {/* Who We Help accordion */}
          <div className="mb-1">
            <button
              className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-700"
              onClick={() =>
                setMobileExpanded(
                  mobileExpanded === "whoWeHelp" ? null : "whoWeHelp"
                )
              }
            >
              Industries
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  mobileExpanded === "whoWeHelp" ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileExpanded === "whoWeHelp" && (
              <div className="pl-4 pb-3 flex flex-col">
                <Link
                  href="/"
                  className="flex items-center gap-3 py-3 text-sm text-gray-600 active:bg-gray-50 rounded-lg px-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Flame className="w-4 h-4 text-orange-500" />
                  HVAC
                </Link>
                <Link
                  href="/plumbing"
                  className="flex items-center gap-3 py-3 text-sm text-gray-500 active:bg-gray-50 rounded-lg px-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Wrench className="w-4 h-4 text-blue-400" />
                  Plumbing
                  <span className="ml-auto text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </Link>
                <Link
                  href="/electrical"
                  className="flex items-center gap-3 py-3 text-sm text-gray-500 active:bg-gray-50 rounded-lg px-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Zap className="w-4 h-4 text-yellow-400" />
                  Electrical
                  <span className="ml-auto text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </Link>
                <Link
                  href="/roofing"
                  className="flex items-center gap-3 py-3 text-sm text-gray-500 active:bg-gray-50 rounded-lg px-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Home className="w-4 h-4 text-purple-400" />
                  Roofing
                  <span className="ml-auto text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Features accordion */}
          <div className="mb-1">
            <button
              className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-700"
              onClick={() =>
                setMobileExpanded(
                  mobileExpanded === "features" ? null : "features"
                )
              }
            >
              Features
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  mobileExpanded === "features" ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileExpanded === "features" && (
              <div className="pl-4 pb-3 flex flex-col">
                <Link
                  href="/features/ai-receptionist"
                  className="flex items-center gap-3 py-3 text-sm text-gray-600 active:bg-gray-50 rounded-lg px-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  AI Receptionist
                </Link>
                <Link
                  href="/features/lead-scoring"
                  className="flex items-center gap-3 py-3 text-sm text-gray-600 active:bg-gray-50 rounded-lg px-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Target className="w-4 h-4 text-emerald-500" />
                  Lead Scoring
                </Link>
                <Link
                  href="/features/content-creation"
                  className="flex items-center gap-3 py-3 text-sm text-gray-600 active:bg-gray-50 rounded-lg px-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <PenTool className="w-4 h-4 text-emerald-500" />
                  Content Creation
                </Link>
                <Link
                  href="/features/review-management"
                  className="flex items-center gap-3 py-3 text-sm text-gray-600 active:bg-gray-50 rounded-lg px-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Star className="w-4 h-4 text-emerald-500" />
                  Review Management
                </Link>
              </div>
            )}
          </div>

          {/* Direct links */}
          <Link
            href="/about"
            className="block py-3 text-sm font-medium text-gray-700 border-t border-gray-100"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          <Link
            href="/pricing"
            className="block py-3 text-sm font-medium text-gray-700 border-t border-gray-100"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>

          <Link
            href="/audit"
            className="block py-3 text-sm font-medium text-gray-700 border-t border-gray-100"
            onClick={() => setMobileOpen(false)}
          >
            Free Tools
          </Link>

          {/* Contact + phone */}
          <div className="border-t border-gray-100 pt-2 mt-2 flex flex-col">
            <Link
              href="/contact"
              className="flex items-center min-h-[44px] py-3 text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            {/* Tap-to-call CTA */}
            <a
              href="tel:8449102116"
              className="flex items-center justify-center gap-2 min-h-[44px] mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-full text-sm transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              Call (844) 910-2116
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
