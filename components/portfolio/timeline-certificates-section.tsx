"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  Award,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface TimelineItem {
  id: string;
  year: string;
  icon: string;
  badge: string;
  badgeColor: string;
  name: string;
  issuer: string;
  description: string;
  image: string;
  pdfUrl?: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    year: "2026",
    icon: "📡",
    badge: "📡 MTCNA",
    badgeColor: "from-amber-400 to-orange-600",
    name: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "Mikrotikls MTCNA",
    description:
      "Tersertifikasi internasional sebagai MikroTik Certified Network Associate (MTCNA). Memvalidasi keahlian mendalam dalam konfigurasi RouterOS, routing, firewall, bandwidth management, wireless, tunnel, dan manajemen jaringan komputer.",
    image: "/Sertifikat/Sertifikat Mikrotik MTCNA.png",
    pdfUrl: "/Sertifikat/Sertifikat Mikrotik MTCNA.pdf",
  },
  {
    id: "2",
    year: "2025",
    icon: "🌐",
    badge: "🌐 CCNA",
    badgeColor: "from-cyan-400 to-blue-600",
    name: "Sertifikat CCNA Introduction to Networks",
    issuer: "Cisco Networking Academy",
    description:
      "Meraih sertifikasi profesional CCNA untuk mendalami pondasi infrastruktur jaringan komputer, protokol TCP/IP, routing, switching, dan keamanan jaringan dasar.",
    image: "/Sertifikat/Sertifikat CCNA Introduction to Networks.png",
    pdfUrl: "/Sertifikat/Sertifikat CCNA Introduction to Networks.pdf",
  },
  {
    id: "3",
    year: "2025",
    icon: "📊",
    badge: "📊 Data & ML",
    badgeColor: "from-emerald-400 to-teal-600",
    name: "Sertifikat Workshop Data & Machine Learning",
    issuer: "Workshop Data Science",
    description:
      "Mendalami pengelolaan dataset skala besar, teknik Exploratory Data Analysis (EDA), perancangan pipeline data, dan evaluasi model Machine Learning di tingkat industri.",
    image: "/Sertifikat/Sertifikat Workshop.png",
    pdfUrl: "/Sertifikat/Sertifikat Workshop.pdf",
  },
  {
    id: "4",
    year: "2025",
    icon: "💻",
    badge: "💻 IT Bootcamp",
    badgeColor: "from-violet-400 to-purple-600",
    name: "Sertifikat IT Bootcamp",
    issuer: "Bootcamp Intensif Teknologi Informasi",
    description:
      "Menyelesaikan pelatihan intensif mencakup arsitektur modern web development, integrasi API, database relasional, dan praktik deployment berbasis cloud.",
    image: "/Sertifikat/Sertifikat it bootcamp.png",
    pdfUrl: "/Sertifikat/Sertifikat it bootcamp.pdf",
  },
  {
    id: "5",
    year: "2024",
    icon: "🐍",
    badge: "🐍 PCAP Python",
    badgeColor: "from-amber-400 to-orange-600",
    name: "Sertifikat PCAP Programming in Python",
    issuer: "Python Institute & OpenEDG",
    description:
      "Memperoleh sertifikasi PCAP internasional atas penguasaan fundamental hingga lanjutan bahasa Python, Object-Oriented Programming (OOP), dan efisiensi algoritma.",
    image: "/Sertifikat/Sertifikat PCAP - Programming.png",
    pdfUrl: "/Sertifikat/Sertifikat PCAP - Programming.pdf",
  },
  {
    id: "6",
    year: "2024",
    icon: "🤖",
    badge: "🤖 AI Workshop",
    badgeColor: "from-fuchsia-400 to-pink-600",
    name: "Sertifikat Workshop AI",
    issuer: "Workshop Artificial Intelligence",
    description:
      "Eksplorasi wawasan praktis seputar implementasi teknologi Artificial Intelligence kontemporer, model Generative AI, dan integrasi API cerdas.",
    image: "/Sertifikat/Sertifikat Workshop AI.png",
    pdfUrl: "/Sertifikat/Sertifikat Workshop AI.pdf",
  },
  {
    id: "7",
    year: "2023",
    icon: "🐹",
    badge: "🐹 Golang",
    badgeColor: "from-sky-400 to-cyan-600",
    name: "Sertifikat Golang Backend",
    issuer: "Bootcamp Backend Golang",
    description:
      "Memulai pendalaman rekayasa backend dengan menguasai Go (Golang), concurrency goroutines, penulisan clean REST API berkinerja tinggi, dan arsitektur microservices.",
    image: "/Sertifikat/Sertifikat Golang.png",
    pdfUrl: "/Sertifikat/Sertifikat Golang.pdf",
  },
  {
    id: "8",
    year: "Sekarang",
    icon: "🎓",
    badge: "🎓 S1 Informatika",
    badgeColor: "from-blue-400 to-indigo-600",
    name: "Mahasiswa S1 Teknik Informatika",
    issuer: "Program Studi S1 Teknik Informatika",
    description:
      "Menempuh pendidikan formal di bidang Teknik Informatika dengan fokus utama pada Rekayasa Perangkat Lunak (Software Engineering), Sistem Cerdas, dan Arsitektur Web Modern.",
    image: "/images/profile.jpg",
    pdfUrl: "/images/profile.jpg",
  },
];

export function TimelineCertificatesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewItem, setPreviewItem] = useState<TimelineItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOrigin, setPanOrigin] = useState("center");
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = timelineData.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (previewItem) return; // Don't slide if modal is open
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, previewItem]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  // Zoom handlers for modal
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 1));
  const handleZoomReset = () => {
    setZoomLevel(1);
    setPanOrigin("center");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomLevel <= 1) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - top) / height) * 100));
    setPanOrigin(`${x}% ${y}%`);
  };

  const activeItem = timelineData[activeIndex];

  // Calculate 3D styling for card at index i
  const getCardStyle = (index: number) => {
    let diff = (index - activeIndex) % total;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    const absDiff = Math.abs(diff);

    if (absDiff > 2) {
      return {
        transform: `translateX(${diff > 0 ? (isMobile ? 320 : 600) : isMobile ? -320 : -600}px) translateZ(-300px) scale(0.3)`,
        opacity: 0,
        zIndex: 0,
        filter: "blur(4px)",
        pointerEvents: "none" as const,
      };
    }

    if (diff === 0) {
      return {
        transform: "translateX(0px) translateZ(80px) rotateY(0deg) scale(1) rotate(0deg)",
        opacity: 1,
        zIndex: 10,
        filter: "drop-shadow(0 20px 30px rgba(0, 240, 255, 0.25))",
        pointerEvents: "auto" as const,
      };
    }

    const spacing = isMobile ? 160 : 280;
    const translateX = diff * spacing;
    const translateZ = absDiff === 1 ? -40 : -160;
    const rotateY = diff > 0 ? (absDiff === 1 ? -25 : -40) : absDiff === 1 ? 25 : 40;
    const rotate = diff > 0 ? (absDiff === 1 ? -3 : 4) : absDiff === 1 ? 3 : -4;
    const scale = absDiff === 1 ? (isMobile ? 0.78 : 0.82) : isMobile ? 0.6 : 0.65;
    const opacity = absDiff === 1 ? 0.85 : 0.45;
    const zIndex = 10 - absDiff * 2;
    const brightness = absDiff === 1 ? 0.85 : 0.65;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale}) rotate(${rotate}deg)`,
      opacity,
      zIndex,
      filter: `brightness(${brightness})`,
      pointerEvents: "auto" as const,
    };
  };

  return (
    <section
      id="certificates"
      className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden w-full select-none"
    >
      {/* Target anchor for #timeline navigation as well */}
      <span id="timeline" className="absolute -top-24" />

      {/* Cyber ambient lights */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(ellipse at 50% 30%, rgba(0, 240, 255, 0.07) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(57, 255, 20, 0.04) 0%, transparent 50%)
          `,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header matching arifgiovanni */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,240,255,0.35)]">
            Garis Waktu Pencapaian
          </h2>
          <div className="w-24 h-1 bg-[#00f0ff] mx-auto shadow-[0_0_10px_#00f0ff] rounded-full" />
          <p className="text-xs sm:text-sm text-gray-400 font-orbitron max-w-xl mx-auto px-4 pt-2">
            Klik foto untuk melihat detail • Geser atau gunakan tombol panah untuk navigasi
          </p>
        </motion.div>

        {/* 3D Carousel Container */}
        <div
          className="relative w-full mx-auto"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative mx-auto h-[400px] sm:h-[430px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {timelineData.map((item, index) => {
              const cardStyle = getCardStyle(index);
              const isCenter = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isCenter) {
                      setPreviewItem(item);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  className="absolute top-0 left-1/2 -ml-[130px] sm:-ml-[140px] w-[260px] sm:w-[280px] transition-all duration-500 ease-out cursor-pointer"
                  style={cardStyle}
                >
                  {/* Polaroid Frame */}
                  <div
                    className={`bg-white text-slate-900 rounded-2xl p-3 shadow-2xl border transition-all duration-300 ${isCenter
                        ? "border-[#00f0ff] shadow-[0_0_35px_rgba(0,240,255,0.3)] ring-2 ring-[#00f0ff]/50"
                        : "border-slate-200/80 shadow-xl"
                      }`}
                  >
                    {/* Inner Photo Area */}
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-950 group">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 240px, 260px"
                        priority={isCenter}
                      />

                      {/* Year Tag on top right */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-black/80 text-white backdrop-blur-sm border border-white/20 shadow-md">
                        {item.year} / {item.icon}
                      </div>

                      {/* Category Pill Tag on bottom left */}
                      <div
                        className={`absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full text-[11px] font-bold text-black shadow-md bg-gradient-to-r ${item.badgeColor}`}
                      >
                        {item.badge}
                      </div>

                      {/* Hover Overlay with 'Lihat' */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                        <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 text-black text-xs font-bold shadow-xl">
                          <Eye className="w-3.5 h-3.5 text-[#00f0ff]" />
                          <span>Lihat</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Polaroid Label */}
                    <div className="mt-3 px-1">
                      <p
                        className="font-bold text-sm text-slate-900 truncate"
                        title={item.issuer}
                      >
                        {item.issuer}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls: Arrows and Dots */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 mt-6">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#00f0ff]/40 bg-[#00f0ff]/10 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black transition-all duration-300 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.2)] active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2 sm:gap-3">
              {timelineData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Slide ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${dotIdx === activeIndex
                      ? "w-7 h-2 bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]"
                      : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#00f0ff]/40 bg-[#00f0ff]/10 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black transition-all duration-300 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.2)] active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Active Item Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-8 max-w-xl mx-auto text-center px-4"
          >
            {/* Year & Icon */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl sm:text-3xl">{activeItem.icon}</span>
              <span className="text-[#00f0ff] text-sm font-orbitron font-bold tracking-widest uppercase">
                {activeItem.year}
              </span>
            </div>

            {/* Title & Issuer */}
            <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white mb-1.5 leading-snug">
              {activeItem.issuer}
            </h3>
            <p className="text-[#00f0ff] font-medium text-xs sm:text-sm mb-3">
              {activeItem.name}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-6">
              {activeItem.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-5 flex-wrap">
              {activeItem.pdfUrl && (
                <a
                  href={activeItem.pdfUrl}
                  download={activeItem.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00f0ff] font-orbitron font-medium text-xs sm:text-sm flex items-center border-b-2 border-[#00f0ff]/30 hover:border-[#00f0ff] transition-colors pb-0.5 group"
                >
                  <span>Sertifikat</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}

              <button
                onClick={() => setPreviewItem(activeItem)}
                className="flex items-center gap-2 text-xs sm:text-sm font-orbitron font-medium px-4 py-1.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 hover:bg-[#00f0ff] hover:text-black transition-all shadow-[0_0_12px_rgba(0,240,255,0.25)] active:scale-95 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Lihat Gambar</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Certificate Modal Lightbox - Identical to arifgiovanni.my.id */}
      <Dialog
        open={!!previewItem}
        onOpenChange={(open) => {
          if (!open) {
            setPreviewItem(null);
          }
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="p-0 border-0 bg-transparent shadow-none max-w-fit w-auto flex flex-col items-center justify-center outline-none ring-0 focus:outline-none z-50 select-none"
        >
          <DialogTitle className="sr-only">
            {previewItem?.name || "Detail Sertifikat"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {previewItem?.description || "Detail Sertifikat"}
          </DialogDescription>

          {previewItem && (
            <div className="flex flex-col items-center max-w-[92vw] sm:max-w-[620px] md:max-w-[700px] mx-auto animate-in fade-in-0 zoom-in-95 duration-200">
              {/* Polaroid Frame with Glowing Cyan Border */}
              <div className="relative rounded-2xl border-2 border-[#00ffd2] bg-[#070e1b] p-2.5 sm:p-3 shadow-[0_0_50px_rgba(0,255,210,0.35)] flex flex-col items-center">
                {/* Floating Top Center Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 flex items-center gap-1.5 whitespace-nowrap">
                  <span>{previewItem.badge}</span>
                </div>

                {/* Floating Top Right Close Button */}
                <button
                  onClick={() => setPreviewItem(null)}
                  className="absolute -top-3.5 -right-3.5 z-30 w-8 h-8 rounded-full bg-[#0a1120] border border-[#00ffd2]/60 text-slate-300 hover:text-white hover:border-[#00ffd2] hover:bg-slate-800 flex items-center justify-center shadow-lg transition-all hover:scale-110 cursor-pointer"
                  aria-label="Tutup"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Inner Image Frame */}
                <div className="relative w-full rounded-xl overflow-hidden bg-white max-h-[76vh] flex items-center justify-center shadow-inner">
                  <img
                    src={previewItem.image}
                    alt={previewItem.name}
                    className="w-full h-auto max-h-[76vh] object-contain rounded-xl block"
                  />
                </div>
              </div>

              {/* Caption Underneath Modal */}
              <p className="text-xs sm:text-sm text-slate-200 font-medium text-center mt-3.5 px-3 drop-shadow-sm">
                {previewItem.name} - {previewItem.issuer}
              </p>

              {/* Download link for authentic PDF */}
              {previewItem.pdfUrl && previewItem.pdfUrl.endsWith(".pdf") && (
                <div className="mt-2 flex items-center gap-2">
                  <a
                    href={previewItem.pdfUrl}
                    download={previewItem.name}
                    className="inline-flex items-center gap-1.5 text-xs text-[#00ffd2] hover:underline font-medium drop-shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh Dokumen PDF Asli</span>
                  </a>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
