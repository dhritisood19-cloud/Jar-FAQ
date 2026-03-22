import Link from "next/link";
import { notFound } from "next/navigation";
import { faqData, findCategoryById } from "../../data/faqData";
import SearchBar from "../../components/SearchBar";

export function generateStaticParams() {
  return faqData.map((cat) => ({ categorySlug: cat.id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const category = findCategoryById(categorySlug);
  if (!category) notFound();

  return (
    <main className="flex-1">
      {/* Header */}
      <div className="relative py-8 px-4 overflow-hidden">
        <div className="orb-1" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-5" style={{ color: "rgba(179, 157, 219, 0.5)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            <span className="text-white font-medium">{category.faqCategory}</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">{category.faqPageHeader}</h1>
              <p className="text-sm mt-0.5" style={{ color: "#B39DDB" }}>
                {category.subcategories.reduce((s, sub) => s + sub.questions.length, 0)} articles
              </p>
            </div>
          </div>
          <SearchBar compact placeholder={`Search in ${category.faqCategory}...`} />
        </div>
      </div>

      {/* Bento Grid of Subcategories */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.subcategories.map((sub) => (
            <Link
              key={sub.id}
              href={`/category/${category.id}/sub/${sub.id}`}
              className="glass-card rounded-2xl p-5 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-white group-hover:text-[#FFD600] transition-colors">
                  {sub.name}
                </h3>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
              <p className="text-xs mb-3" style={{ color: "rgba(179, 157, 219, 0.6)" }}>
                {sub.questions.length} questions
              </p>
              <div className="space-y-1.5">
                {sub.questions.slice(0, 3).map((q) => (
                  <div key={q.id} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#7E57C2" }} />
                    <p className="text-xs line-clamp-1" style={{ color: "#B39DDB" }}>
                      {q.question}
                    </p>
                  </div>
                ))}
                {sub.questions.length > 3 && (
                  <p className="text-xs font-medium" style={{ color: "rgba(255, 214, 0, 0.6)" }}>
                    +{sub.questions.length - 3} more
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
