"use client";

import { useLocale } from "./LocaleContext";
import { faqHi } from "../data/faqData.hi";
import { subcategoryNamesHi, categoryHeadersHi } from "../data/uiStrings";

/** Returns the Hindi question text if locale is Hindi, otherwise English */
export function useLocalizedQuestion(questionId: string, englishText: string): string {
  const { locale } = useLocale();
  if (locale === "hi" && faqHi[questionId]) return faqHi[questionId].question;
  return englishText;
}

/** Returns the Hindi answer text if locale is Hindi, otherwise English */
export function useLocalizedAnswer(questionId: string, englishText: string): string {
  const { locale } = useLocale();
  if (locale === "hi" && faqHi[questionId]) return faqHi[questionId].answer;
  return englishText;
}

/** Client component to render locale-aware question title */
export function LocaleQuestionTitle({ questionId, english, className }: { questionId: string; english: string; className?: string }) {
  const text = useLocalizedQuestion(questionId, english);
  return <h1 className={className}>{text}</h1>;
}

/** Client component to render locale-aware inline text */
export function LocaleQuestionText({ questionId, english, className }: { questionId: string; english: string; className?: string }) {
  const text = useLocalizedQuestion(questionId, english);
  return <span className={className}>{text}</span>;
}

/** Client component for category name */
export function LocaleCategoryName({ categoryId, english }: { categoryId: string; english: string }) {
  const { locale } = useLocale();
  if (locale === "hi" && categoryHeadersHi[categoryId]) return <>{categoryHeadersHi[categoryId].faqCategory}</>;
  return <>{english}</>;
}

/** Client component for category page header */
export function LocaleCategoryHeader({ categoryId, english, className }: { categoryId: string; english: string; className?: string }) {
  const { locale } = useLocale();
  const text = locale === "hi" && categoryHeadersHi[categoryId] ? categoryHeadersHi[categoryId].faqPageHeader : english;
  return <h1 className={className}>{text}</h1>;
}

/** Client component for subcategory name */
export function LocaleSubcategoryName({ subcategoryId, english, className, as: Tag = "span" }: { subcategoryId: string; english: string; className?: string; as?: "span" | "h1" | "h3" | "p" }) {
  const { locale } = useLocale();
  const text = locale === "hi" && subcategoryNamesHi[subcategoryId] ? subcategoryNamesHi[subcategoryId] : english;
  return <Tag className={className}>{text}</Tag>;
}
