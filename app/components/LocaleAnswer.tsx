"use client";

import { useLocale } from "./LocaleContext";
import { faqHi } from "../data/faqData.hi";
import RichText from "./RichText";

export default function LocaleAnswer({ questionId, englishAnswer }: { questionId: string; englishAnswer: string }) {
  const { locale } = useLocale();
  const answer = locale === "hi" && faqHi[questionId] ? faqHi[questionId].answer : englishAnswer;
  return <RichText text={answer} />;
}
