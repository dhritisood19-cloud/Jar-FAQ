import Link from "next/link";
import SearchBar from "./components/SearchBar";
import VideoCarousel from "./components/VideoCarousel";
import ContactSupport from "./components/ContactSupport";
import TroubleshootingEntry from "./components/TroubleshootingEntry";
import { faqData, topFAQs } from "./data/faqData";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero + Search */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="orb-1" />
        <div className="orb-2" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: "rgba(255, 214, 0, 0.1)", color: "#FFD600", border: "1px solid rgba(255, 214, 0, 0.2)" }}
          >
            need help?
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            How can we <span style={{ color: "#FFD600" }}>help</span> you?
          </h1>
          <p className="text-sm mb-6" style={{ color: "#B39DDB" }}>
            Search our FAQs or browse categories below
          </p>
          <SearchBar placeholder="Search for questions, topics, or keywords..." />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-12 space-y-10">
        {/* Browse Topics - Categories Grid */}
        <section>
          <h2 className="text-lg font-bold text-white mb-4">Browse Topics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {faqData.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="glass-card flex flex-col items-center p-5 rounded-2xl text-center transition-all cursor-pointer"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <p className="text-sm font-semibold text-white">
                  {cat.faqCategory}
                </p>
                <p className="text-xs mt-1" style={{ color: "rgba(179, 157, 219, 0.6)" }}>
                  {cat.subcategories.reduce((s, sub) => s + sub.questions.length, 0)} articles
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Questions */}
        <section>
          <h2 className="text-lg font-bold text-white mb-4">Top Issues</h2>
          <div className="space-y-2">
            {topFAQs.map((faq, i) => (
              <Link
                key={i}
                href={`/category/${faq.categoryId}/${faq.questionId}`}
                className="flex items-center justify-between p-4 rounded-2xl transition-all group"
                style={{ background: "rgba(91, 58, 158, 0.08)", border: "1px solid rgba(91, 58, 158, 0.15)" }}
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-lg flex-shrink-0"
                    style={{ background: "rgba(255, 214, 0, 0.1)", color: "#FFD600" }}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white/90 line-clamp-2">{faq.title}</p>
                    <span className="text-xs mt-0.5 inline-block" style={{ color: "rgba(179, 157, 219, 0.5)" }}>{faq.label}</span>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" strokeWidth="2" className="flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section>
          <TroubleshootingEntry />
        </section>

        {/* Contact Support */}
        <section>
          <h2 className="text-lg font-bold text-white mb-4">Contact Support</h2>
          <ContactSupport />
        </section>

        {/* Video Carousel */}
        <section>
          <VideoCarousel />
        </section>
      </div>
    </main>
  );
}
