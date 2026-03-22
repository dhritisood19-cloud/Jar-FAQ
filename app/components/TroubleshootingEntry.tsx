"use client";

import Link from "next/link";

export default function TroubleshootingEntry() {
  const items = [
    {
      title: "Payment pending or failed",
      description: "Amount deducted but not reflected in your locker",
      color: "#FF6B6B",
      bg: "rgba(255, 107, 107, 0.1)",
      link: "/category/payments-savings/gold-purchase-pending",
    },
    {
      title: "Withdrawal stuck",
      description: "Withdrawal in progress or failed",
      color: "#FFB74D",
      bg: "rgba(255, 183, 77, 0.1)",
      link: "/category/withdrawal/gold-withdrawal-in-progress",
    },
  ];

  return (
    <div className="rounded-2xl p-5" style={{ background: "rgba(255, 107, 107, 0.06)", border: "1px solid rgba(255, 107, 107, 0.15)" }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full pulse-dot" style={{ background: "#FF6B6B" }} />
        <span className="text-sm font-semibold text-white">Transaction Issues?</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="flex items-center gap-3 p-4 rounded-xl transition-all"
            style={{ background: item.bg, border: `1px solid ${item.color}22` }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15` }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs mt-0.5" style={{ color: "#B39DDB" }}>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
