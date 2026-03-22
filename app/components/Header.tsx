"use client";

import { useState } from "react";
import Link from "next/link";
import { supportedLanguages } from "../data/faqData";

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(supportedLanguages[0]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5" style={{ background: "rgba(13, 6, 24, 0.85)", backdropFilter: "blur(16px)" }}>
      <div className="max-w-5xl mx-auto px-4 h-[58px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-[34px] h-[34px] rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FFD600, #FFB300)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D0618" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <span className="text-base font-bold text-white">Jar</span>
          <span className="text-xs font-medium ml-0.5" style={{ color: "rgba(179, 157, 219, 0.7)" }}>Help Center</span>
        </Link>

        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full transition-colors"
            style={{ color: "#B39DDB", background: "rgba(91, 58, 158, 0.15)", border: "1px solid rgba(91, 58, 158, 0.25)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            {selectedLang.nativeName}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
          </button>
          {langOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
              <div className="absolute right-0 top-full mt-2 z-50 rounded-2xl shadow-2xl py-1 min-w-[200px]" style={{ background: "#1A0E2E", border: "1px solid rgba(91, 58, 158, 0.3)" }}>
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors"
                    style={{
                      color: selectedLang.code === lang.code ? "#FFD600" : "#B39DDB",
                      background: selectedLang.code === lang.code ? "rgba(255, 214, 0, 0.06)" : "transparent",
                    }}
                  >
                    <span className="font-medium">{lang.nativeName}</span>
                    <span style={{ color: "rgba(179, 157, 219, 0.5)", fontSize: "11px" }}>{lang.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
