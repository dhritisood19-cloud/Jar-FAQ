import Link from "next/link";
import { notFound } from "next/navigation";
import { faqData } from "../../../../data/faqData";
import SearchBar from "../../../../components/SearchBar";

export function generateStaticParams() {
  const params: { categorySlug: string; subSlug: string }[] = [];
  for (const cat of faqData) {
    for (const sub of cat.subcategories) {
      params.push({ categorySlug: cat.id, subSlug: sub.id });
    }
  }
  return params;
}

export default async function SubCategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string; subSlug: string }>;
}) {
  const { categorySlug, subSlug } = await params;
  const category = faqData.find((c) => c.id === categorySlug);
  if (!category) notFound();
  const subcategory = category.subcategories.find((s) => s.id === subSlug);
  if (!subcategory) notFound();

  return (
    <main className="flex-1">
      {/* Header */}
      <div className="relative py-8 px-4 overflow-hidden">
        <div className="orb-1" />
        <div className="max-w-3xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-5 flex-wrap" style={{ color: "rgba(179, 157, 219, 0.5)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            <Link href={`/category/${category.id}`} className="hover:text-white transition-colors">{category.faqCategory}</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            <span className="text-white font-medium">{subcategory.name}</span>
          </nav>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">{subcategory.name}</h1>
          <p className="text-sm mb-5" style={{ color: "#B39DDB" }}>{subcategory.questions.length} questions</p>
          <SearchBar compact placeholder={`Search in ${subcategory.name}...`} />
        </div>
      </div>

      {/* Questions List */}
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-2">
        {subcategory.questions.map((q) => (
          <Link
            key={q.id}
            href={`/category/${category.id}/${q.id}`}
            className="flex items-center justify-between p-4 rounded-2xl transition-all group"
            style={{ background: "rgba(91, 58, 158, 0.08)", border: "1px solid rgba(91, 58, 158, 0.15)" }}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" strokeWidth="2" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span className="text-sm text-white/90 group-hover:text-[#FFD600] transition-colors line-clamp-2">
                {q.question}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
              {q.supportActionable === "In App Redirection" && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: "rgba(96, 165, 250, 0.1)", color: "#60A5FA" }}>In-App</span>
              )}
              {q.supportActionable === "Through In App Troubleshooting" && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: "rgba(255, 183, 77, 0.1)", color: "#FFB74D" }}>Troubleshoot</span>
              )}
              {q.supportActionable === "Support Required" && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: "rgba(255, 107, 107, 0.1)", color: "#FF6B6B" }}>Support</span>
              )}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
