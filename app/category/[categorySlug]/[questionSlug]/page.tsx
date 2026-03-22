import Link from "next/link";
import { notFound } from "next/navigation";
import { faqData, findQuestionById, getRelatedQuestions } from "../../../data/faqData";
import AudioPlayer from "../../../components/AudioPlayer";
import FeedbackWidget from "../../../components/FeedbackWidget";

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
      <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(91, 58, 158, 0.1)" }}>
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs flex-wrap" style={{ color: "rgba(179, 157, 219, 0.5)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            <Link href={`/category/${category.id}`} className="hover:text-white transition-colors">{category.faqCategory}</Link>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            <span style={{ color: "#B39DDB" }}>{subcategory.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Question */}
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-6">{question.question}</h1>

        {/* Audio Player */}
        <div className="mb-6">
          <AudioPlayer />
        </div>

        {/* Answer */}
        <div className="rounded-2xl p-6 mb-6" style={{ background: "rgba(91, 58, 158, 0.1)", border: "1px solid rgba(91, 58, 158, 0.2)" }}>
          <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#E0D4F5" }}>
            {question.answer}
          </div>
        </div>

        {/* Video */}
        <div className="rounded-2xl p-5 flex items-center gap-4 mb-6" style={{ background: "rgba(91, 58, 158, 0.08)", border: "1px solid rgba(91, 58, 158, 0.15)" }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0" style={{ background: "rgba(255, 214, 0, 0.1)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFD600"><polygon points="5 3 19 12 5 21 5 3" /></svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Watch related video</p>
            <a href="https://wiki.myjar.app/hi/help-videos/" target="_blank" rel="noopener noreferrer" className="text-xs font-medium" style={{ color: "#FFD600" }}>
              View on Jar Help Videos &rarr;
            </a>
          </div>
        </div>

        {/* In-App CTA */}
        {(question.supportActionable === "In App Redirection" || question.supportActionable === "Through In App Troubleshooting") && question.deeplink && (
          <div className="mb-6">
            <a
              href={question.deeplink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 font-semibold rounded-2xl transition-colors text-sm"
              style={{ background: "linear-gradient(135deg, #FFD600, #FFB300)", color: "#0D0618" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {question.supportActionable === "In App Redirection" ? "Open in Jar App" : "Troubleshoot in Jar App"}
            </a>
          </div>
        )}

        {/* Support Required CTA */}
        {question.supportActionable === "Support Required" && (
          <div className="mb-6 rounded-2xl p-5" style={{ background: "rgba(255, 107, 107, 0.08)", border: "1px solid rgba(255, 107, 107, 0.15)" }}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255, 107, 107, 0.12)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">This requires support assistance</p>
                <p className="text-xs mt-1 mb-3" style={{ color: "#FF6B6B" }}>Please contact our team for help with this issue.</p>
                <div className="flex gap-2">
                  <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl transition-colors" style={{ background: "#FF6B6B", color: "white" }}>
                    Chat with Support
                  </a>
                  <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl transition-colors" style={{ background: "rgba(255, 107, 107, 0.1)", color: "#FF6B6B", border: "1px solid rgba(255, 107, 107, 0.2)" }}>
                    Call Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Questions */}
        {related.length > 0 && (
          <div className="mb-6">
            <h3 className="text-base font-bold text-white mb-3">Related Questions</h3>
            <div className="space-y-2">
              {related.map((rq) => (
                <Link
                  key={rq.id}
                  href={`/category/${rq.categoryId}/${rq.id}`}
                  className="flex items-center justify-between p-4 rounded-xl transition-all group"
                  style={{ background: "rgba(91, 58, 158, 0.08)", border: "1px solid rgba(91, 58, 158, 0.15)" }}
                >
                  <span className="text-sm text-white/80 group-hover:text-[#FFD600] transition-colors line-clamp-2">{rq.question}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" strokeWidth="2" className="flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Feedback */}
        <FeedbackWidget />
      </div>
    </main>
  );
}
