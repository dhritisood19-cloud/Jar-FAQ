"use client";

import { ReactNode } from "react";
import { LocaleProvider } from "./LocaleContext";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
