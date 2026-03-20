"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled ? "bg-[#FDFAF4]" : "bg-transparent";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${navBg}`}
    >
      <nav className="mx-auto flex max-w-[960px] items-center justify-between px-6 py-5 md:px-12">
        <Link
          href="/"
          className="font-serif text-xl font-light text-[#1a1a1a] tracking-[0.02em]"
        >
          ツナカン.
        </Link>

        {/* Desktop: center menu */}
        <div className="hidden flex-1 items-center justify-center gap-10 md:flex">
          <Link
            href="/about"
            className="font-sans text-[15px] font-extralight text-[#1a1a1a] tracking-[0.02em] hover:text-[#FF6B35]"
          >
            About
          </Link>
          <Link
            href="/events"
            className="font-sans text-[15px] font-extralight text-[#1a1a1a] tracking-[0.02em] hover:text-[#FF6B35]"
          >
            Events
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <div className="flex items-center justify-end md:hidden">
          <button
            type="button"
            aria-label="メニューを開く"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-0.5 w-5 bg-[#1a1a1a] transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#1a1a1a] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#1a1a1a] transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-[#eee] bg-[#FDFAF4] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/about"
              className="font-sans text-[15px] font-extralight text-[#1a1a1a]"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/events"
              className="font-sans text-[15px] font-extralight text-[#1a1a1a]"
              onClick={() => setMobileOpen(false)}
            >
              Events
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
