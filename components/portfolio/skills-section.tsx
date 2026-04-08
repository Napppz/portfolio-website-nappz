"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    name: "Python",
    level: 85,
    description: "Data Analysis, Machine Learning, Automation",
    color: "from-blue-500 to-blue-400",
  },
  {
    name: "Java",
    level: 75,
    description: "OOP, Desktop Applications, Android Development",
    color: "from-orange-500 to-orange-400",
  },
  {
    name: "JavaScript",
    level: 80,
    description: "React, Node.js, Interactive Web Apps",
    color: "from-yellow-500 to-yellow-400",
  },
  {
    name: "HTML",
    level: 90,
    description: "Semantic HTML, Accessibility, SEO",
    color: "from-red-500 to-red-400",
  },
  {
    name: "CSS",
    level: 85,
    description: "Responsive Design, Tailwind CSS, Animations",
    color: "from-cyan-500 to-cyan-400",
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(
    skills.map(() => 0)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate the skill levels
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels((prev) => {
                const newLevels = [...prev];
                newLevels[index] = skill.level;
                return newLevels;
              });
            }, index * 150);
          });
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
        <div className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-mono text-sm tracking-wider mb-2">
            KEAHLIAN
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Bahasa Pemrograman
          </h2>
        </div>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
                <span className="text-primary font-mono text-lg font-bold">
                  {animatedLevels[index]}%
                </span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                  style={{ width: `${animatedLevels[index]}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
