"use client";

export default function ContactSupport() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a
        href="https://www.myjar.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-5 rounded-2xl transition-all"
        style={{ background: "rgba(91, 58, 158, 0.12)", border: "1px solid rgba(91, 58, 158, 0.2)" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255, 214, 0, 0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(91, 58, 158, 0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255, 214, 0, 0.15)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Chat with Support</p>
          <p className="text-xs mt-0.5" style={{ color: "#B39DDB" }}>Get instant help via chat</p>
        </div>
      </a>
      <a
        href="https://www.myjar.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-5 rounded-2xl transition-all"
        style={{ background: "rgba(91, 58, 158, 0.12)", border: "1px solid rgba(91, 58, 158, 0.2)" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255, 214, 0, 0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(91, 58, 158, 0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(126, 87, 194, 0.2)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B39DDB" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Talk to Support</p>
          <p className="text-xs mt-0.5" style={{ color: "#B39DDB" }}>Speak with our voice bot</p>
        </div>
      </a>
    </div>
  );
}
