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
        <div className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-mono text-sm tracking-wider mb-2">
            TENTANG SAYA
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Mengenal Lebih Dekat
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Saya adalah seorang mahasiswa Informatika yang memiliki passion
              dalam dunia teknologi dan pengembangan software. Selama masa
              perkuliahan, saya telah mengembangkan berbagai keahlian dalam
              bahasa pemrograman dan framework modern.
            </p>
            <p className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Saya percaya bahwa teknologi dapat memberikan solusi untuk berbagai
              permasalahan di dunia nyata. Oleh karena itu, saya selalu berusaha
              untuk terus belajar dan mengembangkan kemampuan saya dalam bidang
              software development.
            </p>
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
