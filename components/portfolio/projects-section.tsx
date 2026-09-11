"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  year: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Web Gaji Karyawan — Employee Payroll & Attendance System",
    year: "2026",
    description:
      "Platform komprehensif manajemen penggajian dan rekapitulasi kehadiran karyawan secara real-time. Dilengkapi dashboard analitik keuangan (gaji bersih & PPh 21), pelacakan absensi otomatis, persetujuan izin/cuti, serta manajemen data karyawan terintegrasi.",
    tech: ["NEXT.JS", "REACT", "TAILWIND CSS", "TYPESCRIPT", "ANALYTICS", "PAYROLL SYSTEM"],
    github: "https://github.com/Napppz/Web-Gaji-Karyawan",
    demo: "https://web-gaji-karyawan.vercel.app/",
    image: "/images/web-gaji-karyawan.png",
  },
  {
    title: "QR Resto Order — Scan QR Food Ordering System",
    year: "2026",
    description:
      "Website pemesanan makanan dan minuman berbasis scan QR per meja secara real-time. Dilengkapi fitur checkout pelanggan, integrasi pembayaran online (Midtrans) & kasir, manajemen meja & QR code, serta dashboard kasir operasional lengkap.",
    tech: ["NEXT.JS", "REACT", "TAILWIND CSS", "PRISMA", "MIDTRANS", "SQLITE"],
    github: "https://github.com/Napppz/Website-Order-Makanan-Berbasis-Scan-QR",
    demo: "https://website-order-makanan-berbasis-scan.vercel.app/",
    image: "/images/qr-resto-order.png",
  },
  {
    title: "Aika Sesilia — Official Merch Store",
    year: "2025",
    description:
      "Website resmi e-commerce merchandise store untuk cosplayer Aika Sesilia. Dilengkapi katalog produk interaktif, sistem keranjang belanja dinamis, leaderboard top supporter, dan checkout terintegrasi WhatsApp.",
    tech: ["JAVASCRIPT", "HTML5", "CSS3", "REST API", "E-COMMERCE"],
    github: "https://github.com/Napppz/portfolio-website-nappz",
    demo: "https://www.merch-aika.my.id/",
    image: "/images/merch-aika.png",
  },
  {
    title: "Interactive Cyberpunk Portfolio Website",
    year: "2025",
    description:
      "Website portfolio modern interaktif yang dibangun menggunakan Next.js, React, Tailwind CSS, dan Framer Motion dengan visual cyberpunk, particle background, dan performa optimal.",
    tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "REACT", "FRAMER MOTION"],
    github: "https://github.com/Napppz/portfolio-website-nappz",
    demo: "https://v0-portfolio-website.vercel.app/",
    image: "/images/portfolio-preview.jpg",
  },
  {
    title: "Task Flow: Smart Todo & Kanban Platform",
    year: "2024",
    description:
      "Aplikasi manajemen tugas dan workflow produktivitas berbasis web dengan fitur CRUD lengkap, filter prioritas, pelacakan progres real-time, dan arsitektur RESTful menggunakan Python Flask.",
    tech: ["PYTHON", "FLASK", "JAVASCRIPT", "SQLITE", "REST API"],
    github: "https://github.com/Napppz",
    demo: "#",
    image: "/images/todolist-preview.jpg",
  },
  {
    title: "EduSphere: Sistem Informasi Mahasiswa",
    year: "2024",
    description:
      "Sistem informasi akademik terintegrasi untuk pengelolaan data mahasiswa, pelacakan nilai semester, absensi, dan analitik performa dengan database relasional MySQL dan antarmuka responsif modern.",
    tech: ["JAVA", "MYSQL", "JDBC", "DATA ANALYTICS", "DESKTOP GUI"],
    github: "https://github.com/Napppz",
    demo: "#",
    image: "/images/sim-preview.jpg",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const zoomLevels = [1, 1.25, 1.5, 2, 2.5, 3];

  const handleZoomIn = () => {
    setZoomLevel((prev) => {
      const nextIdx = zoomLevels.findIndex((z) => z > prev);
      return nextIdx !== -1 ? zoomLevels[nextIdx] : 3;
    });
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const prevIdx = [...zoomLevels].reverse().findIndex((z) => z < prev);
      return prevIdx !== -1 ? [...zoomLevels].reverse()[prevIdx] : 1;
    });
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
            PROYEK UNGGULAN
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal">
            Karya yang telah saya rancang dan kembangkan. Klik foto atau kartu untuk melihat preview portofolio.
          </p>
        </motion.div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full flex"
            >
              <div className="group w-full rounded-2xl bg-[#050b16]/85 border border-slate-800/80 hover:border-[#00ffd2]/50 hover:shadow-[0_0_30px_rgba(0,255,210,0.12)] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300">
                {/* Top Image Preview Banner */}
                <div className="space-y-4">
                  <div
                    onClick={() => {
                      setSelectedProject(project);
                      setZoomLevel(1);
                    }}
                    className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/70 shadow-inner group/img cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Dark gradient overlay with action buttons on hover */}
                    <div className="absolute inset-0 bg-[#020813]/70 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-3">
                      <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#00ffd2] text-slate-950 text-xs font-bold shadow-[0_0_20px_rgba(0,255,210,0.5)]">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Lihat Detail</span>
                      </div>

                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900/90 border border-[#00ffd2]/40 text-[#00ffd2] hover:bg-[#00ffd2]/20 text-xs font-bold shadow-lg transition-colors"
                        >
                          <span>Kunjungi</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Expand icon pill badge in top right corner */}
                    <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/70 text-slate-300 backdrop-blur-md border border-white/10 opacity-75 group-hover/img:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-medium">
                      <Eye className="w-3.5 h-3.5 text-[#00ffd2]" />
                    </div>
                  </div>

                  {/* Year Tag */}
                  <div className="text-xs font-semibold text-[#00ffd2] tracking-wider">
                    {project.year}
                  </div>

                  {/* Project Title */}
                  <h3
                    onClick={() => {
                      setSelectedProject(project);
                      setZoomLevel(1);
                    }}
                    className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00ffd2] transition-colors leading-snug cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills & Bottom Buttons */}
                <div className="pt-6 space-y-5">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold tracking-wider rounded-full bg-[#00ffd2]/10 text-[#00ffd2] border border-[#00ffd2]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="flex-1 py-2.5 px-4 rounded-xl border border-[#00ffd2]/40 text-[#00ffd2] hover:bg-[#00ffd2]/15 hover:border-[#00ffd2] hover:shadow-[0_0_15px_rgba(0,255,210,0.3)] font-semibold text-xs sm:text-sm tracking-wider uppercase text-center transition-all duration-300"
                    >
                      VISIT WEBSITE
                    </Link>

                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex-1 py-2.5 px-4 rounded-xl border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/50 font-semibold text-xs sm:text-sm tracking-wider uppercase text-center transition-all duration-300"
                    >
                      GIT-HUB
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Lightbox & Detail Modal (Widescreen High-Resolution Viewer) */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
            setZoomLevel(1);
          }
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="p-0 border-0 bg-transparent shadow-none !max-w-[96vw] !w-[96vw] sm:!max-w-[95vw] md:!max-w-6xl xl:!max-w-7xl max-h-[96vh] flex flex-col items-center justify-center outline-none ring-0 focus:outline-none z-50 select-none"
        >
          <DialogTitle className="sr-only">
            {selectedProject?.title || "Detail Proyek"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {selectedProject?.description || "Detail Proyek"}
          </DialogDescription>

          {selectedProject && (
            <div className="w-full animate-in fade-in-0 zoom-in-95 duration-200">
              {/* Card Container with Glowing Cyan Border */}
              <div className="relative rounded-2xl border-2 border-[#00ffd2] bg-[#070e1b]/95 backdrop-blur-2xl p-4 sm:p-5 shadow-[0_0_60px_rgba(0,255,210,0.35)] flex flex-col w-full max-h-[94vh] gap-3">
                {/* Header Bar */}
                <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="px-3 py-1 rounded-full bg-[#00ffd2]/15 text-[#00ffd2] border border-[#00ffd2]/40 font-bold text-xs tracking-wider uppercase shrink-0">
                      {selectedProject.year} • PROYEK UNGGULAN
                    </span>
                    <h3 className="text-base sm:text-xl font-bold text-white truncate">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {selectedProject.demo && selectedProject.demo !== "#" && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#00ffd2] text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(0,255,210,0.4)] hover:shadow-[0_0_25px_rgba(0,255,210,0.7)] hover:bg-[#33ffdc] transition-all"
                      >
                        <span>Kunjungi Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 text-xs font-semibold tracking-wider uppercase transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-9 h-9 rounded-full bg-slate-900 border border-[#00ffd2]/60 text-slate-300 hover:text-white hover:border-[#00ffd2] hover:bg-slate-800 flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                      aria-label="Tutup"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Massive Image Display Area with Pan & Scroll Support */}
                <div className="relative w-full h-[58vh] sm:h-[64vh] md:h-[68vh] rounded-xl bg-slate-950 border border-slate-800/90 overflow-auto p-2 flex items-center justify-center">
                  <div
                    className="relative flex items-center justify-center transition-all duration-300 min-w-full"
                    style={{
                      width: zoomLevel === 1 ? "100%" : `${zoomLevel * 100}%`,
                    }}
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className={`block rounded-lg transition-all duration-300 ${
                        zoomLevel === 1
                          ? "w-full max-h-[56vh] sm:max-h-[62vh] md:max-h-[66vh] object-contain cursor-zoom-in"
                          : "w-full h-auto object-contain cursor-grab active:cursor-grabbing"
                      }`}
                      onClick={() => {
                        if (zoomLevel === 1) handleZoomIn();
                        else handleZoomReset();
                      }}
                    />
                  </div>

                  {/* Floating Zoom Control Bar */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/85 backdrop-blur-md border border-[#00ffd2]/30 rounded-xl p-1.5 shadow-2xl z-20">
                    <span className="px-2 py-0.5 text-[11px] font-mono font-bold text-[#00ffd2]">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      className="p-1.5 text-slate-300 hover:text-[#00ffd2] hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                      title="Perbesar (+)"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleZoomOut}
                      className="p-1.5 text-slate-300 hover:text-[#00ffd2] hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                      title="Perkecil (-)"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    {zoomLevel !== 1 && (
                      <button
                        onClick={handleZoomReset}
                        className="p-1.5 text-slate-300 hover:text-[#00ffd2] hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                        title="Reset Ukuran (100%)"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    )}
                    <a
                      href={selectedProject.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-300 hover:text-[#00ffd2] hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                      title="Buka Gambar Asli di Tab Baru"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Footer Details */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                  <div className="space-y-1.5 max-w-3xl">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold tracking-wider rounded-full bg-[#00ffd2]/10 text-[#00ffd2] border border-[#00ffd2]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="flex sm:hidden items-center gap-2 w-full pt-1">
                    {selectedProject.demo && selectedProject.demo !== "#" && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl bg-[#00ffd2] text-slate-950 font-bold text-xs tracking-wider uppercase text-center shadow-md flex items-center justify-center gap-1.5"
                      >
                        <span>Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl border border-slate-700 text-slate-300 font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
