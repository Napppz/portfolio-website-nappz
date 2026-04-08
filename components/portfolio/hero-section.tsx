"use client";

import { Github, Linkedin, Mail, Instagram, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullName = "Rizki Agustianto";

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let currentIndex = 0;
    let isDeleting = false;

    const type = () => {
      setDisplayText(fullName.slice(0, currentIndex));

      let typeSpeed = 150; // Kecepatan mengetik

      if (!isDeleting) {
        if (currentIndex < fullName.length) {
          currentIndex++;
        } else {
          isDeleting = true;
          typeSpeed = 3000; // Jeda 3 detik sebelum dihapus
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--;
          typeSpeed = 80; // Kecepatan menghapus teks
        } else {
          isDeleting = false;
          typeSpeed = 500; // Jeda sebelum mulai mengetik lagi
        }
      }

      timeout = setTimeout(type, typeSpeed);
    };

    timeout = setTimeout(type, 150);

    return () => clearTimeout(timeout);
  }, []);

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
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-4 opacity-0 animate-fade-in-left">
            <p className="font-mono text-2xl md:text-3xl font-bold tracking-widest text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] mb-2 uppercase">
              MAHASISWA INFORMATIKA
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance flex justify-center lg:justify-start items-center">
              <span>{displayText}</span>
              <span className="w-[3px] h-[40px] md:h-[60px] bg-primary ml-1 animate-pulse"></span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Web Developer
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

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6 opacity-0 animate-fade-in-left animation-delay-400">
            <Link
              href="https://github.com/Napppz"
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
              href="https://instagram.com/nappzkun/"
              target="_blank"
              className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#contact"
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
