"use client";

import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "mailto:email@example.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo/Name */}
          <Link
            href="#"
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Rizki Agustianto
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                aria-label={link.label}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-border" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            &copy; {currentYear} Made with{" "}
            <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Rizki Agustianto
          </p>
        </div>
      </div>
    </footer>
  );
}
