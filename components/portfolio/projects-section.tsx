"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <section id="projects" className="py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="mb-12 text-center"
        >
          <p className="font-mono text-2xl md:text-3xl font-bold tracking-widest text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] mb-2 uppercase">
            PROYEK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Proyek Terbaru
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              className="group p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl hover:bg-white/10 hover:border-primary/50 transition-colors duration-200 shadow-lg cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
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
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-[1.1] active:scale-95"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-[1.1] active:scale-95"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
