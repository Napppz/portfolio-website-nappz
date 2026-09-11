"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 sm:px-12 border-t border-slate-900 bg-[#030712]/95 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Left Name */}
        <Link
          href="#hero"
          className="text-base sm:text-lg font-bold tracking-widest text-[#00ffd2] hover:text-white transition-colors uppercase drop-shadow-[0_0_8px_rgba(0,255,210,0.4)]"
        >
          RIZKI AGUSTIANTO
        </Link>

        {/* Center Copyright */}
        <p className="text-xs sm:text-sm text-slate-400 font-normal">
          &copy; {currentYear} Rizki Agustianto. Designed with Atmospheric Precision.
        </p>

        {/* Right Links */}
        <div className="flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
          <Link
            href="mailto:rizkytyan17@gmail.com"
            className="hover:text-[#00ffd2] transition-colors"
          >
            Email
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-[#00ffd2] transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Napppz"
            target="_blank"
            className="hover:text-[#00ffd2] transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
