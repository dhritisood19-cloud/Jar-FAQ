import Link from "next/link";
import SearchBar from "./components/SearchBar";
import VideoCarousel from "./components/VideoCarousel";
import ContactSupport from "./components/ContactSupport";
import TroubleshootingEntry from "./components/TroubleshootingEntry";
import { faqData, topFAQs } from "./data/faqData";
import { ChevronRightIcon } from "./components/Icons";
import CategoryIcon from "./components/CategoryIcon";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero + Search */}
      <section className="relative py-4 px-4 bg-gradient-to-br from-violet-50 via-white to-blue-50">
        <div className="overflow-hidden absolute inset-0 pointer-events-none">
          <div className="orb-1" />
          <div className="orb-2" />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-2 text-violet-600 bg-violet-100 border-glow">
            need help?
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            How can we <span className="text-violet-600">help</span> you?
          </h1>
          <SearchBar placeholder="Search for questions, topics, or keywords..." />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-12 space-y-10">
        {/* Browse Topics */}
        <section className="pt-2">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Browse Topics</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {faqData.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="glass-card flex flex-col items-center p-5 rounded-2xl text-center transition-all cursor-pointer"
              >
                <div className="mb-3"><CategoryIcon categoryId={cat.id} /></div>
                <p className="text-sm font-semibold text-gray-800">{cat.faqCategory}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Issues */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Top Issues</h2>
          <div className="space-y-2">
            {topFAQs.map((faq, i) => (
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
          </div>
        </section>

        {/* Troubleshooting */}
        <section><TroubleshootingEntry /></section>

        {/* Contact Support */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Contact Support</h2>
          <ContactSupport />
        </section>

        {/* Videos */}
        <section><VideoCarousel /></section>
      </div>
    </main>
  );
}
