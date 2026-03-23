"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { supportedLanguages } from "../data/faqData";

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(supportedLanguages[0]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-[58px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/jar-logo.png" alt="Jar" width={34} height={34} className="rounded-lg" />
          <span className="text-base font-bold text-gray-900">Jar</span>
          <span className="text-xs font-medium ml-0.5 text-gray-400">Help Center</span>
        </Link>

        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <LanguageIcon sx={{ fontSize: 16 }} />
            {selectedLang.nativeName}
            <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
          </button>
          {langOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
              <div className="absolute right-0 top-full mt-2 z-50 rounded-2xl shadow-xl py-1 min-w-[200px] bg-white border border-gray-100">
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors hover:bg-gray-50 ${
                      selectedLang.code === lang.code ? "text-violet-600 bg-violet-50 font-medium" : "text-gray-700"
                    }`}
                  >
                    <span>{lang.nativeName}</span>
                    <span className="text-gray-400 text-xs">{lang.name}</span>
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
