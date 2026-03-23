"use client";

import Link from "next/link";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

export default function TroubleshootingEntry() {
  const items = [
    {
      title: "Payment pending or failed",
      description: "Amount deducted but not reflected in your locker",
      icon: <ErrorOutlineIcon sx={{ fontSize: 20, color: "#EF4444" }} />,
      bg: "bg-red-50",
      borderColor: "border-red-100",
      iconBg: "bg-red-100",
      link: "/category/payments-savings/gold-purchase-pending",
    },
    {
      title: "Withdrawal stuck",
      description: "Withdrawal in progress or failed",
      icon: <HourglassEmptyIcon sx={{ fontSize: 20, color: "#F59E0B" }} />,
      bg: "bg-amber-50",
      borderColor: "border-amber-100",
      iconBg: "bg-amber-100",
      link: "/category/withdrawal/gold-withdrawal-in-progress",
    },
  ];

  return (
    <div className="rounded-2xl p-5 bg-red-50/50 border border-red-100">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full pulse-dot bg-red-500" />
        <span className="text-sm font-semibold text-gray-800">Transaction Issues?</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={`flex items-center gap-3 p-4 rounded-xl ${item.bg} border ${item.borderColor} hover:shadow-sm transition-all`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
              <p className="text-xs mt-0.5 text-gray-500">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
