"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

const skills = [
  {
    name: "Python",
    icon: "/tech-icons/Python-icon-notext.png",
    description: "Data Analysis, Machine Learning, Automation",
    color: "from-blue-500 to-yellow-500",
  },
  {
    name: "Java",
    icon: "/tech-icons/Java-icon.png",
    description: "OOP, Desktop Applications",
    color: "from-orange-500 to-orange-400",
  },
  {
    name: "JavaScript",
    icon: "/tech-icons/JVS-icon.png",
    description: "Interactive Web Apps",
    color: "from-yellow-500 to-yellow-400",
  },
  {
    name: "React",
    icon: "/tech-icons/React-icon.png",
    description: "Frontend Framework",
    color: "from-cyan-400 to-cyan-500",
  },
  {
    name: "Next.js",
    icon: "/tech-icons/nextjs_icon_132160.png",
    description: "Full-stack React Framework",
    color: "from-gray-800 to-black",
  },
  {
    name: "PHP",
    icon: "/tech-icons/PHP-icon.png",
    description: "Backend Scripting",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    name: "MySQL",
    icon: "/tech-icons/mysql-icon.png",
    description: "Relational Database",
    color: "from-blue-600 to-orange-500",
  },
  {
    name: "HTML",
    icon: "/tech-icons/html-icon.png",
    description: "Semantic HTML",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "CSS",
    icon: "/tech-icons/CSS3_icon_and_wordmark.png",
    description: "Tailwind CSS, Styling",
    color: "from-blue-500 to-indigo-500",
  },
];

export function SkillsSection() {
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

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-mono text-lg md:text-xl tracking-widest text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] mb-2 uppercase">
            KEAHLIAN
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Bahasa Pemrograman
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative p-4 md:p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-500 flex flex-col items-center text-center gap-4 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background gradient glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-3 bg-secondary/50 rounded-xl group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
