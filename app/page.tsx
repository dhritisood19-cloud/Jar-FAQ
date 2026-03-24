import Link from "next/link";
import SearchBar from "./components/SearchBar";
import VideoCarousel from "./components/VideoCarousel";
import ContactSupport from "./components/ContactSupport";
import TroubleshootingEntry from "./components/TroubleshootingEntry";
import TopIssues from "./components/TopIssues";
import { faqData } from "./data/faqData";
import CategoryIcon from "./components/CategoryIcon";

const browseTopicIds = [
  "kyc", "upi-id", "payments-savings", "autopay-subscription",
  "withdrawal", "refer-earn", "rewards", "profile", "nominee",
];

const browseProductIds = [
  "jar", "jar-gold", "jar-silver", "loans", "nek", "jar-pay",
];

export default function Home() {
  const browseTopics = faqData.filter((cat) => browseTopicIds.includes(cat.id));
  const browseProducts = faqData.filter((cat) => browseProductIds.includes(cat.id));

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
          <div className="mt-4"><TroubleshootingEntry /></div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-12 space-y-10">

        {/* Browse Topics */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Browse Topics</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {browseTopics.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="glass-card flex flex-col items-center p-5 rounded-2xl text-center transition-all cursor-pointer"
              >
                <div className="mb-3"><CategoryIcon categoryId={cat.id} /></div>
                <p className="text-xs font-semibold text-gray-800 leading-tight">{cat.faqCategory}</p>
              </Link>
            ))}
            <Link
              href="/category/nek/sub/tracking-delivery"
              className="glass-card flex flex-col items-center p-5 rounded-2xl text-center transition-all cursor-pointer"
            >
              <div className="mb-3"><CategoryIcon categoryId="nek-delivery" /></div>
              <p className="text-xs font-semibold text-gray-800 leading-tight">Nek Delivery</p>
            </Link>
            <a
              href="https://www.upihelp.npci.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex flex-col items-center p-5 rounded-2xl text-center transition-all cursor-pointer"
            >
              <div className="mb-3"><CategoryIcon categoryId="upi-help" /></div>
              <p className="text-xs font-semibold text-gray-800 leading-tight">UPI Help</p>
            </a>
            <Link
              href="/category/report-fraud"
              className="glass-card flex flex-col items-center p-5 rounded-2xl text-center transition-all cursor-pointer"
            >
              <div className="mb-3"><CategoryIcon categoryId="report-fraud" /></div>
              <p className="text-xs font-semibold text-gray-800 leading-tight">Report Fraud</p>
            </Link>
          </div>
        </section>

        {/* Top Issues */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Top Issues</h2>
          <TopIssues />
        </section>

        {/* Browse Products */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Browse Products</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {browseProducts.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="glass-card flex flex-col items-center p-5 rounded-2xl text-center transition-all cursor-pointer"
              >
                <div className="mb-3"><CategoryIcon categoryId={cat.id} /></div>
                <p className="text-xs font-semibold text-gray-800 leading-tight">{cat.faqCategory}</p>
              </Link>
            ))}
          </div>
        </section>

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
