import Link from "next/link";
import SearchBar from "./components/SearchBar";
import VideoCarousel from "./components/VideoCarousel";
import ContactSupport from "./components/ContactSupport";
import TroubleshootingEntry from "./components/TroubleshootingEntry";
import TopIssues from "./components/TopIssues";
import { faqData } from "./data/faqData";
import CategoryIcon from "./components/CategoryIcon";
import { categoryColors } from "./components/categoryColors";
import TrustSection from "./components/TrustSection";

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
<h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            How can we <span style={{ color: "#5F259F" }}>help</span> you?
          </h1>
          <SearchBar placeholder="Search for questions, topics, or keywords..." />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-12 space-y-10">

        {/* Trust Section */}
        {/* Trust Section */}
        <TrustSection />

        {/* Help Topics — Mixed Bento */}
        <section className="-mt-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Help Topics</h2>
          <div className="grid grid-cols-4 gap-2.5">
            {/* Row 1: 2-col + 2-col */}
            {(["upi-id", "payments-savings"] as const).map((id) => {
              const cat = browseTopics.find((c) => c.id === id)!;
              const cc = categoryColors[cat.id];
              return (
                <Link key={cat.id} href={`/category/${cat.id}`} className="group bento-card bento-card-wide col-span-2 glass-card flex items-center justify-center gap-3 px-5 py-4 rounded-2xl transition-all cursor-pointer" style={{ "--cat-bg": cc.bg, "--cat-color": cc.color } as React.CSSProperties}>
                  <CategoryIcon categoryId={cat.id} />
                  <p className="text-sm font-semibold text-gray-800">{cat.faqCategory}</p>
                </Link>
              );
            })}

            {/* Row 2: 2-col + 1-col + 1-col */}
            {(() => {
              const cat = browseTopics.find((c) => c.id === "withdrawal")!;
              const cc = categoryColors[cat.id];
              return (
                <Link key={cat.id} href={`/category/${cat.id}`} className="group bento-card bento-card-wide col-span-2 glass-card flex items-center justify-center gap-3 px-5 py-4 rounded-2xl transition-all cursor-pointer" style={{ "--cat-bg": cc.bg, "--cat-color": cc.color } as React.CSSProperties}>
                  <CategoryIcon categoryId={cat.id} />
                  <p className="text-sm font-semibold text-gray-800">{cat.faqCategory}</p>
                </Link>
              );
            })()}
            {(["kyc", "rewards"] as const).map((id) => {
              const cat = browseTopics.find((c) => c.id === id)!;
              const cc = categoryColors[cat.id];
              return (
                <Link key={cat.id} href={`/category/${cat.id}`} className="group bento-card col-span-1 glass-card flex flex-col items-center justify-center py-4 px-2 rounded-2xl text-center transition-all cursor-pointer" style={{ "--cat-bg": cc.bg, "--cat-color": cc.color } as React.CSSProperties}>
                  <CategoryIcon categoryId={cat.id} />
                  <p className="text-sm font-semibold text-gray-800 leading-tight mt-2">{cat.faqCategory}</p>
                </Link>
              );
            })}

            {/* Row 3: 1-col + 1-col + 2-col */}
            {(["profile", "nominee"] as const).map((id) => {
              const cat = browseTopics.find((c) => c.id === id)!;
              const cc = categoryColors[cat.id];
              return (
                <Link key={cat.id} href={`/category/${cat.id}`} className="group bento-card col-span-1 glass-card flex flex-col items-center justify-center py-4 px-2 rounded-2xl text-center transition-all cursor-pointer" style={{ "--cat-bg": cc.bg, "--cat-color": cc.color } as React.CSSProperties}>
                  <CategoryIcon categoryId={cat.id} />
                  <p className="text-sm font-semibold text-gray-800 leading-tight mt-2">{cat.faqCategory}</p>
                </Link>
              );
            })}
            {(() => {
              const cat = browseTopics.find((c) => c.id === "autopay-subscription")!;
              const cc = categoryColors[cat.id];
              return (
                <Link key={cat.id} href={`/category/${cat.id}`} className="group bento-card bento-card-wide col-span-2 glass-card flex items-center justify-center gap-3 px-5 py-4 rounded-2xl transition-all cursor-pointer" style={{ "--cat-bg": cc.bg, "--cat-color": cc.color } as React.CSSProperties}>
                  <CategoryIcon categoryId={cat.id} />
                  <p className="text-sm font-semibold text-gray-800">{cat.faqCategory}</p>
                </Link>
              );
            })()}

            {/* Row 4: 2-col + 1-col + 1-col */}
            {(() => {
              const cat = browseTopics.find((c) => c.id === "refer-earn")!;
              const cc = categoryColors[cat.id];
              return (
                <Link key={cat.id} href={`/category/${cat.id}`} className="group bento-card bento-card-wide col-span-2 glass-card flex items-center justify-center gap-3 px-5 py-4 rounded-2xl transition-all cursor-pointer" style={{ "--cat-bg": cc.bg, "--cat-color": cc.color } as React.CSSProperties}>
                  <CategoryIcon categoryId={cat.id} />
                  <p className="text-sm font-semibold text-gray-800">{cat.faqCategory}</p>
                </Link>
              );
            })()}
            <Link href="/category/nek/sub/tracking-delivery" className="group bento-card col-span-1 glass-card flex flex-col items-center justify-center py-4 px-2 rounded-2xl text-center transition-all cursor-pointer" style={{ "--cat-bg": categoryColors["nek-delivery"].bg, "--cat-color": categoryColors["nek-delivery"].color } as React.CSSProperties}>
              <CategoryIcon categoryId="nek-delivery" />
              <p className="text-sm font-semibold text-gray-800 leading-tight mt-2">Nek Delivery</p>
            </Link>
            <Link href="/category/report-fraud" className="group bento-card col-span-1 glass-card flex flex-col items-center justify-center py-4 px-2 rounded-2xl text-center transition-all cursor-pointer" style={{ "--cat-bg": categoryColors["report-fraud"].bg, "--cat-color": categoryColors["report-fraud"].color } as React.CSSProperties}>
              <CategoryIcon categoryId="report-fraud" />
              <p className="text-sm font-semibold text-gray-800 leading-tight mt-2">Report Fraud</p>
            </Link>

            {/* UPI Help — external link, full width */}
            <a href="https://www.upihelp.npci.org.in/" target="_blank" rel="noopener noreferrer" className="group bento-card col-span-4 glass-card flex items-center justify-center gap-2.5 py-3 rounded-2xl transition-all cursor-pointer" style={{ "--cat-bg": categoryColors["upi-help"].bg, "--cat-color": categoryColors["upi-help"].color } as React.CSSProperties}>
              <CategoryIcon categoryId="upi-help" />
              <p className="text-xs font-semibold text-gray-700">UPI Help · Powered by NPCI</p>
            </a>
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
                className="group glass-card flex flex-col items-center p-5 rounded-2xl text-center transition-all cursor-pointer"
              >
                <div className="mb-3"><CategoryIcon categoryId={cat.id} /></div>
                <p className="text-sm font-semibold text-gray-800 leading-tight">{cat.faqCategory}</p>
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
          <h2 className="text-lg font-bold text-gray-900 mb-4">Contact Support</h2>
          <ContactSupport />
        </section>

        {/* Videos */}
        <section><VideoCarousel /></section>
      </div>
    </main>
  );
}
