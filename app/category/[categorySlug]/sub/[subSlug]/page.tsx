import Link from "next/link";
import { notFound } from "next/navigation";
import { faqData } from "../../../../data/faqData";
import SearchBar from "../../../../components/SearchBar";
import { ChevronRightIcon, HelpOutlineIcon } from "../../../../components/Icons";

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
      <div className="relative py-8 px-4 overflow-hidden bg-gradient-to-br from-violet-50 via-white to-blue-50">
        <div className="orb-1" />
        <div className="max-w-3xl mx-auto relative z-10">
          <nav className="flex items-center gap-1 text-sm mb-5 flex-wrap text-gray-400">
            <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
            <ChevronRightIcon sx={{ fontSize: 16 }} />
            <Link href={`/category/${category.id}`} className="hover:text-violet-600 transition-colors">{category.faqCategory}</Link>
            <ChevronRightIcon sx={{ fontSize: 16 }} />
            <span className="text-gray-700 font-medium">{subcategory.name}</span>
          </nav>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{subcategory.name}</h1>
          <p className="text-sm mb-5 text-gray-500">{subcategory.questions.length} questions</p>
          <SearchBar compact placeholder={`Search in ${subcategory.name}...`} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-2">
        {subcategory.questions.map((q) => (
          <Link
            key={q.id}
            href={`/category/${category.id}/${q.id}`}
            className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 hover:border-violet-200 hover:shadow-sm transition-all group"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <HelpOutlineIcon sx={{ fontSize: 18, color: "#9CA3AF" }} className="flex-shrink-0" />
              <span className="text-sm text-gray-700 group-hover:text-violet-600 transition-colors line-clamp-2">{q.question}</span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
              {q.supportActionable === "In App Redirection" && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-500">In-App</span>
              )}
              {q.supportActionable === "Through In App Troubleshooting" && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-600">Troubleshoot</span>
              )}
              {q.supportActionable === "Support Required" && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-red-50 text-red-500">Support</span>
              )}
              <ChevronRightIcon sx={{ fontSize: 18, color: "#9CA3AF" }} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Other subcategories */}
      {category.subcategories.length > 1 && (
        <div className="max-w-3xl mx-auto px-4 pb-8">
          <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 p-5">
            <h2 className="text-sm font-bold text-gray-800 mb-3">More in {category.faqCategory}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.subcategories
                .filter((s) => s.id !== subcategory.id)
                .map((s) => (
                  <Link
                    key={s.id}
                    href={`/category/${category.id}/sub/${s.id}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 hover:bg-white hover:shadow-sm transition-all group"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-800 group-hover:text-violet-600 transition-colors">{s.name}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{s.questions.length} questions</p>
                    </div>
                    <ChevronRightIcon sx={{ fontSize: 16, color: "#9CA3AF" }} className="flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
