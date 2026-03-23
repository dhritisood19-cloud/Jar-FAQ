"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-6 px-4 mt-auto border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Image src="/jar-logo.png" alt="Jar" width={20} height={20} className="rounded" />
          Jar Help Center
        </div>
        <div className="flex gap-6 text-xs text-gray-400">
          <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">Privacy Policy</a>
          <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">Terms of Service</a>
          <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">Grievance Redressal</a>
        </div>
      </div>
    </footer>
  );
}
