"use client";

import { GraduationCap, Code2, Briefcase, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: GraduationCap,
      title: "Pendidikan",
      description: "S1 Informatika",
    },
    {
      icon: Code2,
      title: "Fokus",
      description: "Web Development",
    },
    {
      icon: Briefcase,
      title: "Pengalaman",
      description: "Proyek Kampus",
    },
    {
      icon: Heart,
      title: "Minat",
      description: "AI & Data Science",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 lg:px-12 bg-card/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-mono text-2xl md:text-3xl font-bold tracking-widest text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] mb-2 uppercase">
            TENTANG SAYA
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Mengenal Lebih Dekat
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* Visi */}
            <div className={`space-y-3 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 font-mono">
                <span className="text-[#00f0ff] drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">&gt;</span> VISI
              </h3>
              <p className="text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4 italic">
                "Menerjemahkan imajinasi menjadi baris kode yang bernyawa; menciptakan ekosistem digital yang modern, efisien, dan bermakna bagi masa depan."
              </p>
            </div>

            {/* Misi */}
            <div className={`space-y-3 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 font-mono">
                <span className="text-[#00f0ff] drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">&gt;</span> MISI
              </h3>
              <ul className="text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4 space-y-3">
                <li className="relative pl-5 before:content-['//'] before:absolute before:left-0 before:text-primary before:font-mono">
                  Menyeimbangkan fungsionalitas murni dengan antarmuka yang indah (UI/UX) untuk pengalaman pengguna terbaik.
                </li>
                <li className="relative pl-5 before:content-['//'] before:absolute before:left-0 before:text-primary before:font-mono">
                  Berkomitmen pada eksplorasi dan pembelajaran tanpa henti (Long-life learning) di tengah evolusi pesat teknologi Web.
                </li>
                <li className="relative pl-5 before:content-['//'] before:absolute before:left-0 before:text-primary before:font-mono">
                  Membangun arsitektur kode yang bersih (Clean Code), adaptif, dan siap menjadi solusi dari permasalahan nyata.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={`p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:scale-105 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <card.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
