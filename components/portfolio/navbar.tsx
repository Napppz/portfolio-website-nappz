"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX, Download } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<{ osc1: OscillatorNode; osc2: OscillatorNode; gain: GainNode } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ["hero", "about", "projects", "timeline"];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 150) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle ambient cosmic drone synthesizer via Web Audio API
  const toggleSound = () => {
    if (!isPlayingSound) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.connect(ctx.destination);

        const osc1 = ctx.createOscillator();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(144, ctx.currentTime); // D3 subtle drone
        osc1.connect(gain);
        osc1.start();

        const osc2 = ctx.createOscillator();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(216, ctx.currentTime); // Harmonic
        osc2.connect(gain);
        osc2.start();

        oscRef.current = { osc1, osc2, gain };
        setIsPlayingSound(true);
      } catch (e) {
        console.error("Audio playback error:", e);
      }
    } else {
      if (oscRef.current && audioCtxRef.current) {
        try {
          oscRef.current.osc1.stop();
          oscRef.current.osc2.stop();
          audioCtxRef.current.close();
        } catch (e) {
          console.error("Audio stop error:", e);
        }
      }
      setIsPlayingSound(false);
    }
  };

  const navLinks = [
    { id: "hero", name: "BERANDA", href: "#hero" },
    { id: "about", name: "TENTANG & SKILL", href: "#about" },
    { id: "projects", name: "PROYEK", href: "#projects" },
    { id: "timeline", name: "ACHIEVEMENT", href: "#timeline" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-lg border-b border-slate-800/70 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left spacer to keep center nav perfectly balanced */}
        <div className="w-10 sm:w-16 hidden md:block" />

        {/* Center Nav Links */}
        <nav className="flex items-center justify-center gap-6 sm:gap-10 mx-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 relative py-1 ${
                  isActive
                    ? "text-[#00ffd2] drop-shadow-[0_0_8px_rgba(0,255,210,0.8)] font-bold"
                    : "text-slate-300 hover:text-[#00ffd2]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00ffd2] rounded-full shadow-[0_0_8px_#00ffd2]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: CV Download & Audio Toggle */}
        <div className="shrink-0 flex items-center gap-2.5 sm:gap-3">
          <a
            href="/CV_Rizki_Agustinto.pdf"
            download="CV - Rizki Agustinto.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Unduh CV (PDF)"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#00ffd2]/40 bg-[#00ffd2]/10 text-[#00ffd2] hover:bg-[#00ffd2] hover:text-slate-950 font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_12px_rgba(0,255,210,0.2)] hover:scale-105"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          <button
            onClick={toggleSound}
            aria-label="Toggle ambient sound"
            title={isPlayingSound ? "Matikan Suara Atmosfer" : "Putar Suara Atmosfer"}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
              isPlayingSound
                ? "border-[#00ffd2] bg-[#00ffd2]/10 text-[#00ffd2] shadow-[0_0_12px_rgba(0,255,210,0.4)] animate-pulse"
                : "border-slate-700 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-500"
            }`}
          >
            {isPlayingSound ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
