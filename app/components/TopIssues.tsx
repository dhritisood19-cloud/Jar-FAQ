"use client";

import { useState } from "react";
import Link from "next/link";
import { topFAQs } from "../data/faqData";
import { ChevronRightIcon } from "./Icons";

export default function TopIssues() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? topFAQs : topFAQs.slice(0, 3);

  return (
    <div className="space-y-2">
      {visible.map((faq, i) => (
        <Link
          key={i}
          href={`/category/${faq.categoryId}/${faq.questionId}`}
          className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 hover:border-violet-200 hover:shadow-sm transition-all group"
        >
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <span className="text-xs font-bold px-2 py-1 rounded-lg flex-shrink-0 bg-violet-100 text-violet-600">
              {i + 1}
            </span>
            <p className="text-sm font-medium text-gray-800 line-clamp-2 min-w-0">{faq.title}</p>
          </div>
          <ChevronRightIcon sx={{ fontSize: 20, color: "#9CA3AF" }} className="flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      ))}
      {topFAQs.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors pt-1"
        >
          {showAll ? "Show less" : `View more (+${topFAQs.length - 3})`}
        </button>
      )}
    </div>
  );
}
