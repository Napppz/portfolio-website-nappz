"use client";

import { Github, Linkedin, Mail, Instagram, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Info */}
        <div className="space-y-6">
          <div className="space-y-2 opacity-0 animate-fade-in-left">
            <p className="text-primary font-mono text-sm tracking-wider">
              MAHASISWA INFORMATIKA
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Rizki Agustianto
            </h1>
            <p className="text-xl text-muted-foreground">
              Aspiring Software Developer
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-lg opacity-0 animate-fade-in-left animation-delay-200">
            Saya adalah mahasiswa Informatika yang passionate dalam membangun
            aplikasi web dan software. Fokus pada pengembangan dengan{" "}
            <span className="text-primary font-medium">Python</span>,{" "}
            <span className="text-primary font-medium">Java</span>,{" "}
            <span className="text-primary font-medium">JavaScript</span>, dan{" "}
            <span className="text-primary font-medium">Web Development</span>.
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 pt-4 opacity-0 animate-fade-in-left animation-delay-300">
            <Link
              href="#about"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
              <span className="text-sm font-medium tracking-wide">TENTANG</span>
            </Link>
            <Link
              href="#skills"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
              <span className="text-sm font-medium tracking-wide">KEAHLIAN</span>
            </Link>
            <Link
              href="#projects"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
              <span className="text-sm font-medium tracking-wide">PROYEK</span>
            </Link>
            <Link
              href="#certificates"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
              <span className="text-sm font-medium tracking-wide">SERTIFIKAT</span>
            </Link>
            <Link
              href="#contact"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
              <span className="text-sm font-medium tracking-wide">KONTAK</span>
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6 opacity-0 animate-fade-in-left animation-delay-400">
            <Link
              href="https://github.com"
              target="_blank"
              className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:email@example.com"
              className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Right Side - Profile Photo */}
        <div className="flex justify-center items-center opacity-0 animate-fade-in-right animation-delay-200">
          <div className="relative">
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-xl opacity-50 animate-pulse-glow" />
            
            {/* Profile Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 animate-pulse-glow">
              <Image
                src="/images/profile.jpg"
                alt="Foto Profil"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground shadow-lg animate-float">
              Python
            </div>
            <div className="absolute top-1/4 -left-12 px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground shadow-lg animate-float animation-delay-200">
              Java
            </div>
            <div className="absolute bottom-1/4 -right-10 px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground shadow-lg animate-float animation-delay-400">
              JavaScript
            </div>
            <div className="absolute -bottom-4 left-8 px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground shadow-lg animate-float animation-delay-600">
              HTML/CSS
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animation-delay-600">
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium tracking-wider">SCROLL</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
