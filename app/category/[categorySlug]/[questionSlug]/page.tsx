import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { faqData, findQuestionById, getRelatedQuestions } from "../../../data/faqData";
import AudioPlayer from "../../../components/AudioPlayer";
import FeedbackWidget from "../../../components/FeedbackWidget";
import { YouTubeEmbed, GifEmbed } from "../../../components/MediaEmbed";
import { ChevronRightIcon, OpenInNewIcon, ChatBubbleOutlineIcon } from "../../../components/Icons";
import { LocaleQuestionTitle, LocaleQuestionText, LocaleCategoryName } from "../../../components/LocaleText";
import LocaleAnswer from "../../../components/LocaleAnswer";

// Strip to alphanumeric only for fuzzy comparison
function fuzzyNorm(s: string): string {
  return s
    .normalize("NFKD")
    .replace(/[\u2018\u2019\u201C\u201D\u201E\u00AB\u00BB]/g, "")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
}

// Common text variations between edited questions and original audio filenames
const textAliases: Record<string, string[]> = {
  "lose": ["loose"],
  "losing": ["loosing"],
  "saving plan": ["savings plans", "savings plan"],
  "orders": ["order"],
  "instantly": ["instanly"],
  "appear": ["apprear"],
  "completing": ["completeing"],
  "i am being asked for kyc again. why": ["why am i being asked to do it again"],
};

function expandVariants(text: string): string[] {
  const variants = [text];
  const lower = text.toLowerCase();
  for (const [edited, originals] of Object.entries(textAliases)) {
    if (lower.includes(edited)) {
      for (const orig of originals) {
        variants.push(text.replace(new RegExp(edited, "gi"), orig));
      }
    }
  }
  return variants;
}

function findAudioFile(questionText: string): string | null {
  const audioDir = path.join(process.cwd(), "public", "audio");
  let files: string[];
  try {
    files = fs.readdirSync(audioDir).filter(f => f.endsWith(".mp3"));
  } catch {
    return null;
  }

  const normalize = (s: string) =>
    s.replace(/[\/\?]/g, "_").toLowerCase().trim();

  // Try exact match with variants
  const variants = expandVariants(questionText);
  for (const variant of variants) {
    const nq = normalize(variant);
    for (const file of files) {
      if (normalize(file.slice(0, -4)) === nq) {
        return `/audio/${encodeURIComponent(file)}`;
      }
    }
  }

  // Fuzzy match: strip to alphanumeric
  const fuzzyQ = fuzzyNorm(questionText);
  const fuzzyQNoSuffix = fuzzyNorm(questionText.replace(/\s*\([^)]+\)\s*$/, ""));
  const fuzzyVariants = variants.map(v => fuzzyNorm(v));
  const fuzzyVariantsNoSuffix = variants.map(v => fuzzyNorm(v.replace(/\s*\([^)]+\)\s*$/, "")));
  const allFuzzy = [...new Set([...fuzzyVariants, ...fuzzyVariantsNoSuffix])];

  let bestMatch: string | null = null;
  let bestScore = 0;

  for (const file of files) {
    const fuzzyF = fuzzyNorm(file.slice(0, -4));

    // Direct fuzzy match with any variant
    for (const fq of allFuzzy) {
      if (fuzzyF === fq) {
        return `/audio/${encodeURIComponent(file)}`;
      }
    }

    // Substring containment match
    const shorter = fuzzyQ.length < fuzzyF.length ? fuzzyQ : fuzzyF;
    const longer = fuzzyQ.length < fuzzyF.length ? fuzzyF : fuzzyQ;
    if (shorter.length > 10 && longer.includes(shorter)) {
      const score = shorter.length / longer.length;
      if (score > bestScore && score > 0.6) {
        bestScore = score;
        bestMatch = file;
      }
    }
  }

  if (bestMatch) {
    return `/audio/${encodeURIComponent(bestMatch)}`;
  }

  return null;
}

const PLACEHOLDER_VIDEO = "https://www.youtube.com/watch?v=2p5tgCAE4EI&t=4s";

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

  // Use explicit relatedQuestions if set, otherwise auto-find
  const related = question.relatedQuestions?.length
    ? question.relatedQuestions
        .map((id) => {
          const f = findQuestionById(id);
          if (!f) return null;
          return { ...f.question, categoryId: f.category.id, categoryName: f.category.faqPageHeader, subcategoryName: f.subcategory.name };
        })
        .filter(Boolean) as (ReturnType<typeof getRelatedQuestions>)
    : getRelatedQuestions(questionSlug, 4);
  const contentType = question.faqContent || "Text Suffices";
  const audioSrc = findAudioFile(question.question);

  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-1 text-xs flex-wrap text-gray-400">
            <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
            <ChevronRightIcon sx={{ fontSize: 14 }} />
            <Link href={`/category/${category.id}`} className="hover:text-violet-600 transition-colors"><LocaleCategoryName categoryId={category.id} english={category.faqCategory} /></Link>
            <ChevronRightIcon sx={{ fontSize: 14 }} />
            <span className="text-gray-500">{subcategory.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <LocaleQuestionTitle questionId={question.id} english={question.question} className="text-xl sm:text-2xl font-bold text-gray-900 mb-6" />

        {audioSrc && <div className="mb-6"><AudioPlayer src={audioSrc} /></div>}

        {/* Answer */}
        <div className="rounded-2xl p-6 mb-6 bg-gray-50 border border-gray-100">
          <div className="text-sm leading-relaxed whitespace-pre-line text-gray-700">
            <LocaleAnswer questionId={question.id} englishAnswer={question.answer} />
          </div>
        </div>

        {/* Media: Video or GIF based on faqContent */}
        {contentType === "Video" && (
          <div className="mb-6">
            <YouTubeEmbed url={PLACEHOLDER_VIDEO} />
          </div>
        )}

        {contentType === "GIF" && (
          <div className="mb-6">
            <GifEmbed />
          </div>
        )}

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
          <div className="mb-6">
            <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 font-semibold rounded-2xl text-sm bg-red-500 text-white hover:bg-red-600 transition-colors">
              <ChatBubbleOutlineIcon sx={{ fontSize: 18 }} /> Contact Jar Support
            </a>
          </div>
        )}

        {/* Related */}
        {related.length > 0 && (
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">Related Questions</h3>
            <div className="space-y-2">
              {related.map((rq) => (
                <Link key={rq.id} href={`/category/${rq.categoryId}/${rq.id}`} className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-100 hover:border-violet-200 hover:shadow-sm transition-all group">
                  <LocaleQuestionText questionId={rq.id} english={rq.question} className="text-sm text-gray-700 group-hover:text-violet-600 transition-colors line-clamp-2" />
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
