"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, MessageCircle, Instagram } from "lucide-react";

export function HeroSection() {
  const phrases = [
    { prefix: "Hallo, Nama Saya", name: "Rizki Agustianto." },
    { prefix: "Hello, My Name is", name: "Rizki Agustianto." },
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex % phrases.length];
  const fullText = `${currentPhrase.prefix} ${currentPhrase.name}`;
  const prefixLength = currentPhrase.prefix.length;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 85);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, 35);
      } else {
        // Natural pause before starting next phrase
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 350);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullText.length, phrases.length]);

  // Compute displayed prefix and name
  let displayedPrefix = "";
  let displayedName = "";

  if (charIndex <= prefixLength) {
    displayedPrefix = fullText.slice(0, charIndex);
  } else {
    displayedPrefix = currentPhrase.prefix;
    displayedName = fullText.slice(prefixLength + 1, charIndex);
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-28 pb-16 relative z-10"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6 sm:space-y-8">
        {/* Centered Circular Portrait with Cyan Neon Glow Aura */}
        <div className="relative group">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1 bg-gradient-to-b from-[#00ffd2] to-transparent ring-4 ring-[#00ffd2]/50 shadow-[0_0_50px_rgba(0,255,210,0.35)] group-hover:shadow-[0_0_75px_rgba(0,255,210,0.6)] transition-all duration-500">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900">
              <Image
                src="/images/profile.jpg"
                alt="Rizki Agustianto"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 176px, 176px"
              />
            </div>
          </div>
          {/* Subtle spinning glow pulse behind */}
          <div className="absolute -inset-2 rounded-full bg-[#00ffd2]/10 blur-xl -z-10 group-hover:bg-[#00ffd2]/25 transition-all duration-500" />
        </div>

        {/* Heading with 2-Line Typewriter (Matching User's Reference) */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight flex flex-col items-center justify-center gap-1 sm:gap-2">
            {/* Line 1: White Greeting Prefix */}
            <span className="text-white flex items-center justify-center min-h-[1.25em]">
              <span>{displayedPrefix}</span>
              {charIndex <= prefixLength && (
                <span className="inline-block w-[3px] h-7 sm:h-11 md:h-14 bg-[#00ffd2] animate-pulse ml-1" />
              )}
            </span>

            {/* Line 2: Neon Cyan Highlighted Name */}
            <span className="text-[#00ffd2] drop-shadow-[0_0_15px_rgba(0,255,210,0.5)] flex items-center justify-center min-h-[1.25em]">
              <span>{displayedName}</span>
              {charIndex > prefixLength && (
                <span className="inline-block w-[3px] h-7 sm:h-11 md:h-14 bg-[#00ffd2] animate-pulse ml-1" />
              )}
            </span>
          </h1>

          {/* Subtitle Bio */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2 font-normal">
            Mahasiswa Informatika tingkat akhir di Universitas Bina Sarana Informatika. Berpengalaman dalam pengembangan Fullstack,
            Python, IoT, dan sistem Web Modern. Siap memberikan solusi teknologi yang inovatif.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-[#00ffd2] text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,255,210,0.45)] hover:shadow-[0_0_35px_rgba(0,255,210,0.7)] hover:scale-105 hover:bg-[#33ffdc] transition-all duration-300"
          >
            Lihat Portofolio
          </Link>
          <Link
            href="https://wa.me/6285777149410"
            target="_blank"
            className="px-8 py-3.5 rounded-full bg-transparent border border-[#00ffd2] text-[#00ffd2] font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#00ffd2]/10 hover:shadow-[0_0_25px_rgba(0,255,210,0.25)] hover:scale-105 transition-all duration-300"
          >
            Hubungi Saya
          </Link>
        </div>

        {/* Social Media Pills */}
        <div className="flex flex-col items-center gap-3 pt-4">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#00ffd2] hover:border-[#00ffd2]/50 hover:bg-slate-800/90 text-xs sm:text-sm transition-all duration-300 shadow-sm"
            >
              <Linkedin className="w-4 h-4 text-[#00ffd2]" />
              <span>Rizki Agustianto</span>
            </Link>

            <Link
              href="https://github.com/Napppz"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#00ffd2] hover:border-[#00ffd2]/50 hover:bg-slate-800/90 text-xs sm:text-sm transition-all duration-300 shadow-sm"
            >
              <Github className="w-4 h-4 text-white" />
              <span>@Napppz</span>
            </Link>

            <Link
              href="https://wa.me/6285777149410"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#00ffd2] hover:border-[#00ffd2]/50 hover:bg-slate-800/90 text-xs sm:text-sm transition-all duration-300 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </Link>
          </div>

          <Link
            href="https://instagram.com/nappzkun/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#00ffd2] hover:border-[#00ffd2]/50 hover:bg-slate-800/90 text-xs sm:text-sm transition-all duration-300 shadow-sm"
          >
            <Instagram className="w-4 h-4 text-[#E4405F]" />
            <span>@nappzkun</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
