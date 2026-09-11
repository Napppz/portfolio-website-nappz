"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
            Karya yang telah saya rancang dan kembangkan.
          </p>
        </motion.div>

        {/* 2-Column Responsive Card Grid (Matching arifgiovanni.my.id) */}
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
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/70 shadow-inner">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Year Tag */}
                  <div className="text-xs font-semibold text-[#00ffd2] tracking-wider">
                    {project.year}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00ffd2] transition-colors leading-snug">
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
    </section>
  );
}
