"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "TENTANG", href: "#about" },
    { name: "KEAHLIAN", href: "#skills" },
    { name: "PROYEK", href: "#projects" },
    { name: "SERTIFIKAT", href: "#certificates" },
    { name: "KONTAK", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b-2 border-primary/40 shadow-[0_4px_30px_rgba(0,240,255,0.15)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-foreground tracking-tighter uppercase flex items-center gap-2 group">
          <span className="bg-primary text-background px-2 py-1 rounded-sm shadow-[0_0_10px_rgba(0,240,255,0.8)] group-hover:bg-secondary group-hover:shadow-[0_0_15px_rgba(255,0,255,0.8)] transition-all duration-300">
            MY
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-all duration-500 drop-shadow-sm">
            PORTOFOLIO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 bg-card/60 px-8 py-3 rounded-full border border-primary/20 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-muted-foreground hover:text-[#00f0ff] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300 tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation - Scrollable Row */}
        <nav className="flex md:hidden items-center gap-4 overflow-x-auto pb-2 max-w-[50vw] scrollbar-hide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors whitespace-nowrap tracking-widest px-3 py-1 border border-transparent hover:border-primary/50 rounded-md bg-card/50"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
