"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-ink-100 shadow-[0_8px_24px_-12px_rgba(124,58,237,0.18)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between h-[72px] max-w-7xl mx-auto px-5 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Pro Lead Maker — Go to homepage"
        >
          <Image
            src="/images/Logo.png"
            alt="Pro Lead Maker logo"
            width={180}
            height={42}
            className="h-[36px] w-auto transition-transform duration-300 group-hover:scale-[1.03]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
                    active
                      ? "text-brand-purple-dark"
                      : "text-ink-700 hover:text-brand-purple-dark"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {active && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-6 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2.5 rounded-xl border border-ink-200 text-ink-800 hover:border-brand-purple/40 hover:text-brand-purple-dark hover:bg-brand-purple/5 transition-all duration-300"
          >
            Book a Call
          </a>
          <Link
            href="/#free-sample"
            className="btn-primary !py-2.5 !px-5 !text-[13px]"
          >
            Get FREE Sample Leads
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-ink-900 transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink-900 transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink-900 transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[72px] left-0 right-0 bg-white/97 backdrop-blur-xl border-b border-ink-100 shadow-lg transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-5 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-semibold px-4 py-3 rounded-xl transition-all ${
                  active
                    ? "text-brand-purple-dark bg-brand-purple/8"
                    : "text-ink-800 hover:text-brand-purple-dark hover:bg-brand-purple/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-ink-100">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-semibold px-5 py-3 rounded-xl border border-ink-200 text-ink-800"
            >
              📞 Book a Strategy Call
            </a>
            <Link
              href="/#free-sample"
              className="text-center text-sm font-bold px-5 py-3 rounded-xl bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-pink text-white shadow-lg shadow-brand-magenta/30"
            >
              🎁 Get FREE Sample Leads
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
