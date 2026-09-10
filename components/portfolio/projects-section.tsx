"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  imageBadges: string[];
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Aika Sesilia — Official Merch Store",
    description:
      "Website resmi e-commerce merchandise store untuk cosplayer Aika Sesilia. Dilengkapi katalog produk interaktif, sistem keranjang belanja dinamis, leaderboard top supporter, dan integrasi WhatsApp.",
    imageBadges: ["E-Commerce", "REST API"],
    tech: ["JavaScript", "HTML5", "CSS3", "REST API", "E-Commerce"],
    github: "https://github.com/Napppz/portfolio-website-nappz",
    demo: "https://www.merch-aika.my.id/",
    image: "/images/merch-aika.png",
  },
  {
    title: "Interactive Cyberpunk Portfolio Website",
    description:
      "Website portfolio modern interaktif yang dibangun menggunakan Next.js, React, Tailwind CSS, dan Framer Motion dengan visual cyberpunk, particle background, dan performa optimal.",
    imageBadges: ["Next.js", "TypeScript"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"],
    github: "https://github.com/Napppz/portfolio-website-nappz",
    demo: "https://v0-portfolio-website.vercel.app/",
    image: "/images/portfolio-preview.jpg",
  },
  {
    title: "Task Flow: Smart Todo & Kanban Platform",
    description:
      "Aplikasi manajemen tugas dan workflow produktivitas berbasis web dengan fitur CRUD lengkap, filter prioritas, pelacakan progres, dan arsitektur RESTful menggunakan Python Flask.",
    imageBadges: ["Python", "Flask"],
    tech: ["Python", "Flask", "JavaScript", "HTML/CSS", "SQLite"],
    github: "https://github.com/Napppz",
    demo: "#",
    image: "/images/todolist-preview.jpg",
  },
  {
    title: "EduSphere: Sistem Informasi Mahasiswa",
    description:
      "Sistem informasi akademik terintegrasi untuk pengelolaan data mahasiswa, pelacakan nilai semester, absensi, dan analitik performa dengan database relasional MySQL dan antarmuka desktop modern.",
    imageBadges: ["Java", "MySQL"],
    tech: ["Java", "MySQL", "Swing GUI", "JDBC", "Data Analytics"],
    github: "https://github.com/Napppz",
    demo: "#",
    image: "/images/sim-preview.jpg",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden w-full max-w-full">
      {/* Background cyber grid & glow effects */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10" 
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(0, 240, 255, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(0, 255, 136, 0.05) 0%, transparent 50%)
          `
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold tracking-wider text-white drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              Projects <span className="text-[#00f0ff]">&amp;</span> Showcase
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 font-orbitron max-w-2xl mx-auto px-4 leading-relaxed">
            Temukan perjalanan saya dalam mengubah ide menjadi pengalaman digital yang inovatif dan fungsional.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#00f0ff]"></div>
            <div className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse shadow-[0_0_8px_#00f0ff]"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#00f0ff]"></div>
          </div>
        </motion.div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full flex"
            >
              <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 h-full flex flex-col w-full bg-[#0a0f1d]/90 border border-white/10 backdrop-blur-md hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
                {/* Top glowing line on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />

                {/* Corner pulse dots */}
                <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-pulse z-20 shadow-[0_0_6px_#00f0ff]" />
                <div 
                  className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-pulse z-20 shadow-[0_0_6px_#00ff88]" 
                  style={{ animationDelay: "0.5s" }} 
                />

                {/* Card Image Banner */}
                <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0 bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/40 to-transparent" />

                  {/* Top-Right Floating Badges */}
                  <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 z-10">
                    {project.imageBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2.5 py-1 text-xs font-orbitron font-bold bg-[#00f0ff] text-black rounded-full opacity-90 shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-orbitron font-bold text-[#00f0ff] group-hover:text-[#00ff88] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Green Outlined Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-orbitron border border-[#00ff88] text-[#00ff88] bg-[#00ff88]/5 rounded-md hover:bg-[#00ff88] hover:text-black transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Visit Website & GitHub */}
                  <div className="flex gap-3 pt-3 mt-auto">
                    <Link
                      href={project.demo !== "#" ? project.demo : project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 font-orbitron text-sm border border-[#00f0ff] text-[#00f0ff] rounded-lg hover:bg-[#00f0ff] hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] text-center font-medium"
                    >
                      Visit Website
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 font-orbitron text-sm border border-[#ff007f] text-[#ff007f] rounded-lg hover:bg-[#ff007f] hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,127,0.5)] text-center font-medium"
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Link
            href="https://github.com/Napppz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 font-orbitron font-medium text-[#00ff88] border-2 border-[#00ff88] rounded-lg overflow-hidden transition-all duration-300 hover:text-black hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]"
          >
            <div className="absolute inset-0 bg-[#00ff88] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center -z-10" />
            <span className="relative z-10 flex items-center gap-2">
              View All Projects <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
