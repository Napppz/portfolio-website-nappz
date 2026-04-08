"use client";

import { useState, useEffect } from "react";
import { FileImage, Eye, Download, Award, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { motion } from "framer-motion";

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
  fileType: string;
}

export function CertificatesSection() {
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOrigin, setPanOrigin] = useState("center");

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 1));
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

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (zoomLevel <= 1) return;
    const touch = e.touches[0];
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((touch.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((touch.clientY - top) / height) * 100));
    setPanOrigin(`${x}% ${y}%`);
  };

  useEffect(() => {
    let url = "";
    if (previewCert && previewCert.fileType === "application/pdf") {
      // Menggunakan Proxy API untuk menyamarkan ekstensi agar tidak dilacak IDM
      fetch(`/api/pdf-proxy?path=${encodeURIComponent(previewCert.imageUrl)}`)
        .then((res) => res.blob())
        .then((rawBlob) => {
          // Re-assign MIME type menjadi application/pdf agar browser bisa merendernya
          const pdfBlob = new Blob([rawBlob], { type: "application/pdf" });
          url = URL.createObjectURL(pdfBlob);
          setBlobUrl(url + "#toolbar=0&navpanes=0&view=Fit");
        })
        .catch(console.error);
    }
    return () => {
      if (url) URL.revokeObjectURL(url);
      setBlobUrl(null);
    };
  }, [previewCert]);

  const certificates: Certificate[] = [
    {
      id: "1",
      name: "Sertifikat Golang",
      issuer: "Bootcamp",
      date: "2024",
      imageUrl: "/Sertifikat/Sertifikat Golang.pdf",
      fileType: "application/pdf",
    },
    {
      id: "2",
      name: "Sertifikat IT Bootcamp",
      issuer: "Bootcamp",
      date: "2024",
      imageUrl: "/Sertifikat/Sertifikat it bootcamp.pdf",
      fileType: "application/pdf",
    },
    {
      id: "3",
      name: "Sertifikat Workshop AI",
      issuer: "Workshop",
      date: "2024",
      imageUrl: "/Sertifikat/Sertifikat Workshop AI.pdf",
      fileType: "application/pdf",
    },
    {
      id: "4",
      name: "Sertifikat Workshop Data & Machine Learning",
      issuer: "Workshop",
      date: "2024",
      imageUrl: "/Sertifikat/Sertifikat Workshop.pdf",
      fileType: "application/pdf",
    },
    {
      id: "5",
      name: "Sertifikat CCNA Introduction to Networks",
      issuer: "Cisco",
      date: "2024",
      imageUrl: "/Sertifikat/Sertifikat CCNA Introduction to Networks.pdf",
      fileType: "application/pdf",
    },
    {
      id: "6",
      name: "Sertifikat PCAP Programming in Python",
      issuer: "Python Institute",
      date: "2024",
      imageUrl: "/Sertifikat/Sertifikat PCAP - Programming.pdf",
      fileType: "application/pdf",
    },
  ];

  return (
    <section id="certificates" className="py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="mb-12 text-center"
        >
          <p className="font-mono text-2xl md:text-3xl font-bold tracking-widest text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] mb-2 uppercase">
            SERTIFIKAT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Pencapaian & Sertifikat
          </h2>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              className="group p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl hover:bg-white/10 hover:border-primary/50 transition-colors duration-200 shadow-lg cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">
                      {cert.issuer}
                    </span>
                    <span className="px-3 py-1 bg-white/5 text-muted-foreground text-sm rounded-full border border-white/10 backdrop-blur-sm">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {cert.imageUrl && (
                  <div className="flex items-center justify-end gap-3 mt-2 md:mt-0 w-full md:w-auto border-t border-white/10 md:border-t-0 pt-4 md:pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPreviewCert(cert)}
                      className="flex-1 md:flex-none border-white/20 bg-transparent hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-200 hover:scale-[1.03] active:scale-95"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Lihat
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 md:flex-none border-white/20 bg-transparent hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-200 hover:scale-[1.03] active:scale-95"
                    >
                      <a href={cert.imageUrl} download={cert.name}>
                        <Download className="w-4 h-4 mr-2" />
                        Unduh
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {certificates.length === 0 && (
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-12 text-muted-foreground"
            >
              <FileImage className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Belum ada sertifikat. Upload sertifikat pertama Anda!</p>
            </motion.div>
        )}

        {/* Preview Dialog */}
        <Dialog open={!!previewCert} onOpenChange={(open) => {
          if (!open) {
            setPreviewCert(null);
            handleZoomReset();
          }
        }}>
          <DialogContent className="max-w-[95vw] w-full h-[95vh] max-h-[100dvh] flex flex-col p-4 sm:p-6 bg-card/60 backdrop-blur-3xl border-white/10 shadow-2xl">
            <DialogHeader className="flex flex-row items-center justify-between space-y-0 pr-8">
              <DialogTitle className="text-xl md:text-2xl truncate text-foreground">{previewCert?.name}</DialogTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={handleZoomOut} disabled={zoomLevel <= 1}>
                  <ZoomOut className="w-4 h-4" />
                </Button>
                 <Button variant="outline" size="icon" onClick={handleZoomReset} disabled={zoomLevel === 1}>
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleZoomIn} disabled={zoomLevel >= 3}>
                  <ZoomIn className="w-4 h-4" />
                </Button>
                {previewCert && (
                  <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10 bg-black/20 hidden md:flex" asChild>
                    <a href={previewCert.imageUrl} download={previewCert.name}>
                      <Download className="w-4 h-4 md:mr-2" />
                      <span>Unduh Manual</span>
                    </a>
                  </Button>
                )}
              </div>
            </DialogHeader>
            {previewCert?.imageUrl && (
              <div 
                className={`relative flex-1 w-full min-h-0 bg-black/40 rounded-lg overflow-auto border border-white/10 mt-2 shadow-inner flex items-center justify-center ${zoomLevel > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseLeave={() => setPanOrigin("center")}
                onWheel={(e) => {
                  if (e.deltaY < 0) {
                    handleZoomIn();
                  } else {
                    handleZoomOut();
                  }
                }}
                onClick={() => {
                  if (zoomLevel > 1) {
                    handleZoomReset();
                  } else {
                    setZoomLevel(2.5);
                  }
                }}
              >
                <div 
                  className="relative transition-all duration-200 ease-out w-full h-full flex items-center justify-center"
                  style={{ 
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: panOrigin 
                  }}
                >
                  {previewCert.fileType === "application/pdf" ? (
                    blobUrl ? (
                      <iframe
                        src={blobUrl}
                        className="w-full md:w-[80vw] lg:w-[70vw] min-h-[80vh] lg:h-[80vh] border-0 rounded-lg shadow-2xl pointer-events-auto md:pointer-events-none"
                        title={previewCert.name}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground p-6 text-center animate-pulse">
                        <p>Memuat PDF dengan aman untuk mencegah auto-download...</p>
                      </div>
                    )
                  ) : (
                    <div className="relative w-full h-full min-h-[50vh]">
                      <Image
                        src={previewCert.imageUrl}
                        alt={previewCert.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
