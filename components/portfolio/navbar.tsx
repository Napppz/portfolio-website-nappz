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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground">
          My <span className="text-primary">Portofolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation - Scrollable Row */}
        <nav className="flex md:hidden items-center gap-4 overflow-x-auto pb-1 max-w-[50vw]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
