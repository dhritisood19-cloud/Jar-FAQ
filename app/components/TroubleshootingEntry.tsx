"use client";

import { useState } from "react";
import Link from "next/link";
import BuildIcon from "@mui/icons-material/Build";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const transactions = [
  {
    amount: "₹800",
    type: "Withdrawal",
    status: "PENDING",
    statusColor: "bg-orange-100 text-orange-600",
    date: "16 Feb '26 · 04:20am · HDFC ···9034",
    link: "/category/withdrawal/gold-withdrawal-in-progress",
  },
  {
    amount: "₹500",
    type: "Week Saving",
    status: "FAILED",
    statusColor: "bg-red-100 text-red-600",
    date: "15 Feb '26 · 05:10am · Auto-deduct",
    link: "/category/payments-savings/gold-purchase-pending",
  },
  {
    amount: "₹1,200",
    type: "Withdrawal",
    status: "PENDING",
    statusColor: "bg-orange-100 text-orange-600",
    date: "14 Feb '26 · 04:10am · SBI ···4821",
    link: "/category/withdrawal/gold-withdrawal-in-progress",
  },
];

export default function TroubleshootingEntry() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl bg-red-50/50 border border-red-100 overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-5 text-left"
      >
        <div className="flex items-start gap-3">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0 mt-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold text-gray-800 leading-snug">
              {transactions.length} transactions need<br className="sm:hidden" /> your attention
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Issues detected in your recent activity
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-red-600 text-white text-xs font-semibold shadow-sm">
                <BuildIcon sx={{ fontSize: 14 }} />
                Troubleshoot
              </span>
              <KeyboardArrowDownIcon
                sx={{ fontSize: 22, color: "#9CA3AF" }}
                className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </div>
          </div>
        </div>
      </button>

      {/* Expandable transaction list */}
      {expanded && (
        <div className="border-t border-red-100">
          {transactions.map((tx, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-5 py-4 ${i < transactions.length - 1 ? "border-b border-red-100" : ""}`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-800">
                  {tx.amount} {tx.type}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${tx.statusColor}`}>
                    {tx.status}
                  </span>
                  <span className="text-xs text-gray-400">{tx.date}</span>
                </div>
              </div>
              <Link
                href={tx.link}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-600 hover:border-gray-300 transition-colors flex-shrink-0"
              >
                <BuildIcon sx={{ fontSize: 12 }} />
                Fix
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
