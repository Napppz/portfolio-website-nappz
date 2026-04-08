"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Website Portfolio",
    description:
      "Website portfolio pribadi yang dibangun menggunakan Next.js dan Tailwind CSS untuk menampilkan proyek dan keahlian.",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Aplikasi Todo List",
    description:
      "Aplikasi manajemen tugas dengan fitur CRUD lengkap, menggunakan Python Flask sebagai backend dan JavaScript untuk frontend.",
    tech: ["Python", "Flask", "JavaScript", "HTML/CSS"],
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Sistem Informasi Mahasiswa",
    description:
      "Sistem informasi berbasis Java untuk mengelola data mahasiswa dengan database MySQL dan antarmuka GUI.",
    tech: ["Java", "MySQL", "Swing"],
    github: "https://github.com",
    demo: "#",
  },
];

export function ProjectsSection() {
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
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 lg:px-12 bg-card/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-mono text-lg md:text-xl tracking-widest text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] mb-2 uppercase">
            PROYEK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Proyek Terbaru
          </h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
