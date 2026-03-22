"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { searchQuestions } from "../data/faqData";

export default function SearchBar({
  autoFocus = false,
  placeholder = "Search for help...",
  compact = false,
}: {
  autoFocus?: boolean;
  placeholder?: string;
  compact?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ReturnType<typeof searchQuestions>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const r = searchQuestions(query);
      setResults(r);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        className={`flex items-center rounded-2xl transition-all ${compact ? "px-3 py-2" : "px-5 py-3.5"}`}
        style={{
          background: "rgba(91, 58, 158, 0.15)",
          border: "1px solid rgba(91, 58, 158, 0.3)",
        }}
      >
        <svg
          width={compact ? "18" : "20"}
          height={compact ? "18" : "20"}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7E57C2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`flex-1 ml-3 outline-none bg-transparent ${compact ? "text-sm" : "text-base"}`}
          style={{ color: "#F0E6FF" }}
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setIsOpen(false); }}
            className="p-1 transition-colors"
            style={{ color: "#7E57C2" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-2xl max-h-[400px] overflow-y-auto z-50" style={{ background: "#1A0E2E", border: "1px solid rgba(91, 58, 158, 0.3)" }}>
          <div className="p-2">
            {results.map((item) => (
              <Link
                key={item.id}
                href={`/category/${item.categoryId}/${item.id}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl transition-colors"
                style={{ color: "#F0E6FF" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(91, 58, 158, 0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <p className="text-sm font-medium line-clamp-2">{item.question}</p>
                <p className="text-xs mt-1" style={{ color: "rgba(179, 157, 219, 0.6)" }}>
                  {item.categoryName} &rsaquo; {item.subcategoryName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {isOpen && query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-2xl z-50 p-6 text-center" style={{ background: "#1A0E2E", border: "1px solid rgba(91, 58, 158, 0.3)" }}>
          <p className="text-sm" style={{ color: "#B39DDB" }}>No results found for &ldquo;{query}&rdquo;</p>
          <p className="text-xs mt-1" style={{ color: "rgba(179, 157, 219, 0.5)" }}>Try different keywords or browse categories</p>
        </div>
      )}
    </div>
  );
}
