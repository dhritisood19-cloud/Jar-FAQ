"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";

export default function FeedbackWidget() {
  const [feedback, setFeedback] = useState<"yes" | "no" | "contact" | null>(null);

  if (feedback === "contact") {
    return (
      <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(91, 58, 158, 0.1)", border: "1px solid rgba(91, 58, 158, 0.2)" }}>
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(255, 214, 0, 0.1)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </div>
        <h4 className="font-semibold text-white mb-2">Contact Support</h4>
        <p className="text-sm mb-4" style={{ color: "#B39DDB" }}>We&apos;re sorry we couldn&apos;t help. Our support team is here for you.</p>
        <div className="flex gap-3 justify-center">
          <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-colors" style={{ background: "#FFD600", color: "#0D0618" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
            Chat with Support
          </a>
          <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-colors" style={{ background: "rgba(91, 58, 158, 0.15)", color: "#B39DDB", border: "1px solid rgba(91, 58, 158, 0.25)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Talk to Support
          </a>
        </div>
      </div>
    );
  }

  if (feedback === "no") {
    return (
      <div className="rounded-2xl p-6" style={{ background: "rgba(91, 58, 158, 0.1)", border: "1px solid rgba(91, 58, 158, 0.2)" }}>
        <p className="text-sm font-medium text-white/80 mb-3">Sorry about that! Search for your question below:</p>
        <SearchBar compact placeholder="Type your question here..." autoFocus />
        <button onClick={() => setFeedback("contact")} className="mt-3 text-sm font-medium" style={{ color: "#FFD600" }}>
          Still need help? Contact Support
        </button>
      </div>
    );
  }

  if (feedback === "yes") {
    return (
      <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(105, 240, 174, 0.06)", border: "1px solid rgba(105, 240, 174, 0.15)" }}>
        <div className="text-2xl mb-2" style={{ color: "#69F0AE" }}>&#10003;</div>
        <p className="text-sm font-medium" style={{ color: "#69F0AE" }}>Glad we could help!</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(91, 58, 158, 0.08)", border: "1px solid rgba(91, 58, 158, 0.15)" }}>
      <p className="text-sm font-medium text-white/80 mb-4">Was this helpful?</p>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setFeedback("yes")}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all"
          style={{ background: "rgba(105, 240, 174, 0.08)", color: "#69F0AE", border: "1px solid rgba(105, 240, 174, 0.2)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
            <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
          </svg>
          Yes
        </button>
        <button
          onClick={() => setFeedback("no")}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all"
          style={{ background: "rgba(255, 107, 107, 0.08)", color: "#FF6B6B", border: "1px solid rgba(255, 107, 107, 0.2)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 15V19a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10z" />
            <path d="M17 2h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17" />
          </svg>
          No
        </button>
      </div>
    </div>
  );
}
