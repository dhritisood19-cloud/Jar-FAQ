import Link from "next/link";
import { notFound } from "next/navigation";
import { faqData, findQuestionById, getRelatedQuestions } from "../../../data/faqData";
import AudioPlayer from "../../../components/AudioPlayer";
import FeedbackWidget from "../../../components/FeedbackWidget";
import { ChevronRightIcon, PlayArrowIcon, OpenInNewIcon, PhoneInTalkIcon, ChatBubbleOutlineIcon } from "../../../components/Icons";

export function generateStaticParams() {
  const params: { categorySlug: string; questionSlug: string }[] = [];
  for (const cat of faqData) {
    for (const sub of cat.subcategories) {
      for (const q of sub.questions) {
        params.push({ categorySlug: cat.id, questionSlug: q.id });
      }
    }
  }
  return params;
}

export default async function AnswerPage({
  params,
}: {
  params: Promise<{ categorySlug: string; questionSlug: string }>;
}) {
  const { categorySlug, questionSlug } = await params;
  const found = findQuestionById(questionSlug);
  if (!found || found.category.id !== categorySlug) notFound();

  const { question, category, subcategory } = found;
  const related = getRelatedQuestions(questionSlug, 4);

  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-1 text-xs flex-wrap text-gray-400">
            <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
            <ChevronRightIcon sx={{ fontSize: 14 }} />
            <Link href={`/category/${category.id}`} className="hover:text-violet-600 transition-colors">{category.faqCategory}</Link>
            <ChevronRightIcon sx={{ fontSize: 14 }} />
            <span className="text-gray-500">{subcategory.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{question.question}</h1>

        <div className="mb-6"><AudioPlayer /></div>

        {/* Answer */}
        <div className="rounded-2xl p-6 mb-6 bg-gray-50 border border-gray-100">
          <div className="text-sm leading-relaxed whitespace-pre-line text-gray-700">{question.answer}</div>
        </div>

        {/* Video */}
        <div className="rounded-2xl p-5 flex items-center gap-4 mb-6 bg-violet-50 border border-violet-100">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 bg-white">
            <PlayArrowIcon sx={{ fontSize: 28, color: "#7C3AED" }} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">Watch related video</p>
            <a href="https://wiki.myjar.app/hi/help-videos/" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-violet-600 hover:text-violet-700">
              View on Jar Help Videos &rarr;
            </a>
          </div>
        </div>

        {/* In-App CTA */}
        {(question.supportActionable === "In App Redirection" || question.supportActionable === "Through In App Troubleshooting") && question.deeplink && (
          <div className="mb-6">
            <a href={question.deeplink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 font-semibold rounded-2xl text-sm bg-violet-600 text-white hover:bg-violet-700 transition-colors">
              <OpenInNewIcon sx={{ fontSize: 20 }} />
              {question.supportActionable === "In App Redirection" ? "Open in Jar App" : "Troubleshoot in Jar App"}
            </a>
          </div>
        )}

        {/* Support Required */}
        {question.supportActionable === "Support Required" && (
          <div className="mb-6 rounded-2xl p-5 bg-red-50 border border-red-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-red-100">
                <PhoneInTalkIcon sx={{ fontSize: 22, color: "#EF4444" }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">This requires support assistance</p>
                <p className="text-xs mt-1 mb-3 text-red-600">Please contact our team for help with this issue.</p>
                <div className="flex gap-2">
                  <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl bg-red-500 text-white hover:bg-red-600">
                    <ChatBubbleOutlineIcon sx={{ fontSize: 14 }} /> Chat with Support
                  </a>
                  <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl bg-white text-red-600 border border-red-200 hover:bg-red-50">
                    <PhoneInTalkIcon sx={{ fontSize: 14 }} /> Call Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related */}
        {related.length > 0 && (
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">Related Questions</h3>
            <div className="space-y-2">
              {related.map((rq) => (
                <Link key={rq.id} href={`/category/${rq.categoryId}/${rq.id}`} className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-100 hover:border-violet-200 hover:shadow-sm transition-all group">
                  <span className="text-sm text-gray-700 group-hover:text-violet-600 transition-colors line-clamp-2">{rq.question}</span>
                  <ChevronRightIcon sx={{ fontSize: 18, color: "#9CA3AF" }} className="flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        )}

        <FeedbackWidget />
      </div>
    </main>
  );
}
