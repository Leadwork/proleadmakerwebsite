"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/constants";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowLabel(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Expanded card */}
      <div
        className={`fixed bottom-24 right-6 z-[300] max-w-[300px] transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="bg-white rounded-2xl shadow-2xl shadow-[#25d366]/20 border border-ink-100 overflow-hidden">
          <div className="bg-[#25d366] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-lg">
              💬
            </div>
            <div>
              <div className="text-white font-bold text-sm">Pro Lead Maker</div>
              <div className="text-white/85 text-[11px]">Replies usually in &lt; 1 hour</div>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-ink-700 mb-3">
              Hi 👋 Have a question about signal-based leads, pricing, or your free sample?
              Message us directly on WhatsApp.
            </p>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2.5 rounded-xl bg-[#25d366] text-white font-bold text-sm hover:bg-[#1ebe5d] transition-colors"
              onClick={() => setOpen(false)}
            >
              Start WhatsApp Chat →
            </a>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-[300] flex flex-col items-end gap-2">
        {showLabel && !open && (
          <div className="bg-white text-ink-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-ink-100 animate-fade-up">
            Need help? Chat with us
          </div>
        )}
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-lg shadow-[#25d366]/40 hover:scale-110 hover:shadow-[#25d366]/60 transition-all duration-300 relative"
          aria-label={open ? "Close WhatsApp panel" : "Open WhatsApp chat"}
        >
          {/* Pulsing ring */}
          <span
            className="absolute inset-0 rounded-full bg-[#25d366] opacity-50 animate-ping"
            aria-hidden="true"
          />
          {open ? (
            <svg className="w-6 h-6 relative" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7 relative" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
