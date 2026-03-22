import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jar Help Center",
  description: "Find answers to your questions about Jar - digital gold & silver savings app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ background: "#0D0618" }}>
        <Header />
        {children}
        <footer className="py-6 px-4 mt-auto" style={{ borderTop: "1px solid rgba(91, 58, 158, 0.1)" }}>
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(179, 157, 219, 0.4)" }}>
              <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FFD600, #FFB300)" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0D0618" strokeWidth="3">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                </svg>
              </div>
              Jar Help Center
            </div>
            <div className="flex gap-6 text-xs" style={{ color: "rgba(179, 157, 219, 0.3)" }}>
              <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Privacy Policy</a>
              <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Terms of Service</a>
              <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Grievance Redressal</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
