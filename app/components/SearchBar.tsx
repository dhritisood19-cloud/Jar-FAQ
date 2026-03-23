"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
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
      setResults(searchQuestions(query));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className={`flex items-center rounded-2xl bg-gray-50 border border-gray-200 focus-within:border-violet-400 focus-within:shadow-md transition-all ${compact ? "px-3 py-2" : "px-5 py-3.5"}`}>
        <SearchIcon sx={{ fontSize: compact ? 20 : 22, color: "#9CA3AF" }} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`flex-1 ml-3 outline-none bg-transparent text-gray-800 placeholder-gray-400 ${compact ? "text-sm" : "text-base"}`}
        />
        {query && (
          <button onClick={() => { setQuery(""); setIsOpen(false); }} className="p-1 text-gray-400 hover:text-gray-600">
            <CloseIcon sx={{ fontSize: 18 }} />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-xl max-h-[400px] overflow-y-auto z-50 bg-white border border-gray-100">
          <div className="p-2">
            {results.map((item) => (
              <Link
                key={item.id}
                href={`/category/${item.categoryId}/${item.id}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <p className="text-sm font-medium text-gray-800 line-clamp-2">{item.question}</p>
                <p className="text-xs text-gray-400 mt-1">{item.categoryName} &rsaquo; {item.subcategoryName}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {isOpen && query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-xl z-50 p-6 text-center bg-white border border-gray-100">
          <p className="text-sm text-gray-500">No results found for &ldquo;{query}&rdquo;</p>
          <p className="text-xs text-gray-400 mt-1">Try different keywords or browse categories</p>
        </div>
      )}
    </div>
  );
}
