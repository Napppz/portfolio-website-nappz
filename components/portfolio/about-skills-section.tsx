"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "tools" | "ai";
  iconSvg: React.ReactNode;
}

export function AboutSkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const categories = [
    { key: "ALL", label: "SEMUA", color: "bg-white" },
    { key: "frontend", label: "FRONTEND", color: "bg-cyan-400" },
    { key: "backend", label: "BACKEND", color: "bg-emerald-400" },
    { key: "tools", label: "TOOLS & NETWORK", color: "bg-amber-400" },
    { key: "ai", label: "DATA & AI", color: "bg-purple-400" },
  ];

  const skills: SkillItem[] = [
    // --- Frontend ---
    {
      name: "HTML5",
      category: "frontend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="#E34F26">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.9 4.7H4.6l.4 4.5h13.9l-.4 4.6-4.5 1.2-4.5-1.2-.3-2.6H6.6l.5 4.7 4.9 1.4 4.9-1.4 1.1-11.2H4.2l-.2-2H19.5l-.1 2z" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      category: "frontend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="#1572B6">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.8 4.7H4.7l.4 4.5h13.8l-.4 4.6-4.5 1.2-4.5-1.2-.3-2.6H6.6l.5 4.7 4.9 1.4 4.9-1.4 1.1-11.2z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      category: "frontend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M6.5 18.5l2.2-1.3c.4.8.8 1.4 1.7 1.4.9 0 1.5-.4 1.5-1.3v-6.8h2.7v6.8c0 2.2-1.3 3.3-3.6 3.3-2 0-3.3-1-3.9-2.3zm8.3-2.1l2.2-1.3c.6.9 1.3 1.5 2.4 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.2-2-1.7l-.8-.3c-2.3-.9-3.3-2-3.3-3.7 0-2.1 1.7-3.7 4.2-3.7 1.8 0 3.2.7 4 2.2l-2.1 1.3c-.5-.8-1-1.2-1.9-1.2-.9 0-1.5.5-1.5 1.1 0 .7.5 1.1 1.8 1.5l.8.3c2.6 1 3.5 2.1 3.5 3.9 0 2.3-1.8 3.8-4.5 3.8-2.5 0-3.9-1.2-4.6-2.5z"
            fill="#000000"
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      category: "frontend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M13.2 12.3h-3v7.2H7.7v-7.2h-3v-2.3h8.5v2.3zm5.6 2.3c-.4-.3-.9-.6-1.6-.6-.7 0-1.1.3-1.1.7 0 .5.4.7 1.4 1.1 1.5.6 2.4 1.3 2.4 2.6 0 1.8-1.4 2.7-3.3 2.7-1.4 0-2.5-.5-3.2-1.2l1.3-1.6c.6.5 1.2.9 2 .9.7 0 1.2-.3 1.2-.8 0-.5-.4-.7-1.4-1.1-1.6-.6-2.4-1.3-2.4-2.6 0-1.6 1.3-2.6 3.1-2.6 1.3 0 2.2.4 2.9 1l-1.3 1.5z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "React",
      category: "frontend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="none" stroke="#61DAFB" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      category: "frontend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11">
          <circle cx="12" cy="12" r="12" fill="#000000" />
          <path
            d="M17.8 19.3L9.5 8.7H8v8.6h1.5v-6.5l7.5 9.7c.3-.3.5-.6.8-.9v-.3zM15.5 8.7h1.5v5.3l-1.5-1.9V8.7z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "Tailwind",
      category: "frontend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
        </svg>
      ),
    },

    // --- Backend ---
    {
      name: "Python",
      category: "backend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11">
          <path
            d="M11.9 1.5c-4 0-3.8 1.7-3.8 1.7v1.8h3.9v.6H4.4S1.5 5.3 1.5 9.4s2.6 3.9 2.6 3.9h1.5v-2.2s-.1-2.6 2.6-2.6h4.5s2.5-.1 2.5-2.5V3.8s.3-2.3-3.3-2.3h.7zm-2.2 1.2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22.5c4 0 3.8-1.7 3.8-1.7v-1.8h-3.9v-.6h7.6s2.9.3 2.9-3.8-2.6-3.9-2.6-3.9h-1.5v2.2s.1 2.6-2.6 2.6H8.9s-2.5.1-2.5 2.5v2.2s-.3 2.3 3.3 2.3h2.4zm2.2-1.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"
            fill="#FFD43B"
          />
        </svg>
      ),
    },
    {
      name: "Java",
      category: "backend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="#EA2D2E">
          <path d="M8.8 16.5s-1.8.2-1.2.8c.8.8 3.5.7 4.7.4 2-.4 4.5-.5 5.5-1.9 0 0-1 1-3.6 1.4-2.8.4-4.8.2-5.4-.7zm-1.1 2.5s-1.4.3-.8.7c.8.6 3 .5 4.3.3 2.3-.4 5.3-.2 6.5-1.8 0 0-1.1 1-3.7 1.3-3.4.4-5.6.3-6.3-.5zm6.8-9.4c1.1 1.2.3 2.5-.7 3.5-1.4 1.3-2.7 1.9-4.7 2.3 2.8-.7 4.9-1.9 5.6-3.2.7-1.3.1-2-1.3-2.7-.4-.2-.8-.4-1.1-.6.7.1 1.6.4 2.2.7z" />
          <path d="M14.9 3.5s2.2 2.2-2.1 5.7c-3.4 2.7-1.6 4.3-1.6 4.3s-1.8-1.6.8-3.9c3-2.5 2.9-6.1 2.9-6.1z" />
        </svg>
      ),
    },
    {
      name: "PHP",
      category: "backend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="#777BB4">
          <ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB4" />
          <path
            d="M5.5 13.5h1.2l.4-1.8h1.2c1.2 0 1.8-.6 2-1.5.2-.9-.3-1.5-1.5-1.5H6.2l-1.3 4.8h.6zm1.9-2.5l.3-1.5h.9c.5 0 .8.2.7.6-.1.5-.4.9-.9.9h-1zm5.1 2.5h1.4l.6-2.5h1.4l-.6 2.5h1.4l1.2-4.8h-1.4l-.5 1.8h-1.4l.5-1.8h-1.4l-1.2 4.8zm6.5 0h1.2l.4-1.8h1.2c1.2 0 1.8-.6 2-1.5.2-.9-.3-1.5-1.5-1.5h-2.6l-1.3 4.8h.6zm1.9-2.5l.3-1.5h.9c.5 0 .8.2.7.6-.1.5-.4.9-.9.9h-1z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "MySQL",
      category: "backend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="#4479A1">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.8 13.5c-.8.8-1.9 1.2-3.1 1.2-1.3 0-2.4-.4-3.2-1.3-.8-.9-1.2-2.1-1.2-3.4 0-1.4.4-2.5 1.2-3.4.8-.9 1.9-1.3 3.2-1.3 1.2 0 2.3.4 3.1 1.2.8.8 1.2 2 1.2 3.4 0 1.4-.4 2.6-1.2 3.6zm-1.8-6.1c-.4-.5-1-.7-1.6-.7-.7 0-1.2.2-1.6.7-.4.5-.6 1.2-.6 2.1 0 .9.2 1.6.6 2.1.4.5 1 .7 1.6.7.7 0 1.2-.2 1.6-.7.4-.5.6-1.2.6-2.1 0-.9-.2-1.6-.6-2.1z" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      category: "backend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="#336791">
          <path d="M12.1 1.9c-5.5 0-9.9 4.4-9.9 9.9 0 4.4 2.8 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.7c-2.7.6-3.3-1.3-3.3-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3.8 0 1.7.1 2.5.3 1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.8-5 6.8-9.4 0-5.5-4.4-9.9-9.8-9.9z" />
        </svg>
      ),
    },
    {
      name: "Golang",
      category: "backend",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="#00ADD8">
          <path d="M1.5 10.5h4.2c.1-.8.4-1.5 1-2 .6-.6 1.4-.9 2.4-.9 1.1 0 2 .3 2.6 1 .6.7.9 1.6.9 2.7v.5h-5.2c-1.5 0-2.7.4-3.6 1.2-.9.8-1.3 1.9-1.3 3.2 0 1.2.4 2.2 1.3 3 .9.8 2 1.2 3.4 1.2 1.4 0 2.6-.4 3.5-1.3.9-.9 1.4-2.1 1.5-3.6h4.1c-.2 2.5-1.1 4.5-2.7 5.9-1.6 1.4-3.7 2.1-6.3 2.1-2.7 0-4.9-.8-6.6-2.5C1.1 19.3.3 17.1.3 14.4c0-2.6.8-4.8 2.5-6.5C4.5 6.2 6.7 5.3 9.4 5.3c2.7 0 4.9.9 6.5 2.6 1.6 1.7 2.5 4 2.5 6.8v.8H1.5v-5z" />
        </svg>
      ),
    },

    // --- Tools & Network ---
    {
      name: "MikroTik MTCNA",
      category: "tools",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11">
          <rect width="24" height="24" rx="5" fill="#E01E2E" />
          <path
            d="M6 16.5V7.5h2.5l3.5 5 3.5-5H18v9h-2v-5.2l-3.3 4.7h-1.4L8 11.3v5.2H6z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "Cisco Network",
      category: "tools",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="#00BCEB">
          <path d="M2.5 14.5v-5h1.5v5H2.5zm4 3v-11h1.5v11H6.5zm4 2v-15H12v15h-1.5zm4-2v-11h1.5v11h-1.5zm4-3v-5h1.5v5H18.5zm3.5-2v-1h1.5v1H22zm-21 0v-1h1.5v1H1z" />
        </svg>
      ),
    },
    {
      name: "Git & GitHub",
      category: "tools",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="#F05032">
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.8 2.8c.6-.2 1.3-.1 1.8.4.5.5.6 1.3.4 1.9l2.7 2.7c.6-.2 1.3-.1 1.8.4.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.5-.5-.6-1.3-.4-1.9L12.4 11V16c.2.2.4.5.4.9 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.4-1.2 1-1.4v-4.9c-.6-.2-1-.8-1-1.4 0-.4.1-.7.4-1L7 6.4 2.4 11c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" />
        </svg>
      ),
    },
    {
      name: "Figma",
      category: "tools",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11">
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
          <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
          <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
          <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
          <circle cx="16" cy="12" r="4" fill="#1ABCFE" />
        </svg>
      ),
    },

    // --- Data & AI ---
    {
      name: "TensorFlow",
      category: "ai",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-11 h-11" fill="#FF6F00">
          <path d="M12 1.5L3.5 6.4v9.8L12 21.1l8.5-4.9V6.4L12 1.5zm6.5 13.5l-6.5 3.8-6.5-3.8V7.5L12 3.8l6.5 3.7v7.5z" />
          <path d="M12 6.5v11m-4.5-8.5l9 5.2m-9 0l9-5.2" stroke="#FF6F00" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  const filteredSkills =
    activeFilter === "ALL"
      ? skills
      : skills.filter((item) => item.category === activeFilter);

  const getCategoryDotColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-cyan-400 shadow-[0_0_8px_#22d3ee]";
      case "backend":
        return "bg-emerald-400 shadow-[0_0_8px_#34d399]";
      case "tools":
        return "bg-amber-400 shadow-[0_0_8px_#fbbf24]";
      case "ai":
        return "bg-purple-400 shadow-[0_0_8px_#c084fc]";
      default:
        return "bg-white";
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* ================= PART 1: PROFIL SINGKAT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-5 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Profil Singkat
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            Terampil merancang aplikasi modern berbasis web dan mobile, serta memiliki kemampuan{" "}
            <span className="text-[#00ffd2] font-semibold">analytical & problem solving</span> yang
            kuat dalam debugging maupun troubleshooting hardware/software. Memiliki dedikasi tinggi
            dalam arsitektur perangkat lunak, infrastruktur jaringan komputer, dan automasi.
            Berdomisili di <span className="text-[#00ffd2] font-medium">Jakarta, Indonesia</span>.
          </p>
        </motion.div>

        {/* ================= PART 2: SKILLS | TECH ================= */}
        <div className="space-y-10">
          {/* Header with cyan title & glowing line with center dot */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-[#00ffd2] drop-shadow-[0_0_18px_rgba(0,255,210,0.5)]">
              SKILLS | TECH
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 tracking-wide font-normal">
              Matriks teknologi yang dikuasai dalam ranah digital
            </p>

            {/* Glowing line with center cyan dot */}
            <div className="relative w-48 sm:w-64 mx-auto pt-3 flex items-center justify-center">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ffd2]/60 to-transparent" />
              <div className="absolute w-2 h-2 rounded-full bg-[#00ffd2] shadow-[0_0_10px_#00ffd2]" />
            </div>

            {/* Category Legend Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 text-xs font-semibold tracking-wider">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                    activeFilter === cat.key
                      ? "border-[#00ffd2] bg-[#00ffd2]/10 text-white shadow-[0_0_10px_rgba(0,255,210,0.3)]"
                      : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${cat.color}`} />
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group relative rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-3 bg-[#050b16]/80 border border-slate-800/80 hover:border-[#00ffd2]/60 hover:bg-[#071324]/90 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,210,0.18)] transition-all duration-300"
              >
                {/* Category Dot in Top Right */}
                <div
                  className={`absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full ${getCategoryDotColor(
                    skill.category
                  )}`}
                  title={skill.category.toUpperCase()}
                />

                {/* Skill Brand Icon */}
                <div className="p-2 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                  {skill.iconSvg}
                </div>

                {/* Skill Label */}
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white tracking-wide text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
