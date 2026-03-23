import Link from "next/link";
import { notFound } from "next/navigation";
import { faqData, findCategoryById } from "../../data/faqData";
import SearchBar from "../../components/SearchBar";
import { ChevronRightIcon } from "../../components/Icons";
import CategoryIcon from "../../components/CategoryIcon";

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
      <div className="relative py-8 px-4 overflow-hidden bg-gradient-to-br from-violet-50 via-white to-blue-50">
        <div className="orb-1" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-1 text-sm mb-5 text-gray-400">
            <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
            <ChevronRightIcon sx={{ fontSize: 16 }} />
            <span className="text-gray-700 font-medium">{category.faqCategory}</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <CategoryIcon categoryId={category.id} />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{category.faqPageHeader}</h1>
              <p className="text-sm mt-0.5 text-gray-500">
                {category.subcategories.reduce((s, sub) => s + sub.questions.length, 0)} articles
              </p>
            </div>
          </div>
          <SearchBar compact placeholder={`Search in ${category.faqCategory}...`} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.subcategories.map((sub) => (
            <Link
              key={sub.id}
              href={`/category/${category.id}/sub/${sub.id}`}
              className="glass-card rounded-2xl p-5 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-violet-600 transition-colors">
                  {sub.name}
                </h3>
                <ChevronRightIcon sx={{ fontSize: 18, color: "#9CA3AF" }} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs mb-3 text-gray-400">{sub.questions.length} questions</p>
              <div className="space-y-1.5">
                {sub.questions.slice(0, 3).map((q) => (
                  <div key={q.id} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0 bg-violet-300" />
                    <p className="text-xs text-gray-500 line-clamp-1">{q.question}</p>
                  </div>
                ))}
                {sub.questions.length > 3 && (
                  <p className="text-xs font-medium text-violet-500">+{sub.questions.length - 3} more</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
