"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Upload, X, FileImage, Eye, Download, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
  fileType: string;
}

export function CertificatesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: "1",
      name: "Contoh Sertifikat Python",
      issuer: "Coursera",
      date: "2024",
      imageUrl: "",
      fileType: "image/jpeg",
    },
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);
  const [dragActive, setDragActive] = useState(false);

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

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/") && file.type !== "application/pdf") {
      alert("Silakan upload file gambar atau PDF");
      return;
    }

    setIsUploading(true);

    const imageUrl = URL.createObjectURL(file);

    setTimeout(() => {
      const newCert: Certificate = {
        id: Date.now().toString(),
        name: file.name.replace(/\.[^/.]+$/, ""),
        issuer: "Issuer",
        date: new Date().getFullYear().toString(),
        imageUrl,
        fileType: file.type,
      };

      setCertificates((prev) => [...prev, newCert]);
      setIsUploading(false);
    }, 1000);
  };

  const removeCertificate = (id: string) => {
    setCertificates((prev) => prev.filter((cert) => cert.id !== id));
  };

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-20 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-mono text-sm tracking-wider mb-2">
            SERTIFIKAT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sertifikat & Pencapaian
          </h2>
        </div>

        {/* Upload Area */}
        <div
          className={`relative mb-8 p-8 border-2 border-dashed rounded-xl transition-all duration-500 ${
            dragActive
              ? "border-primary bg-primary/10 scale-[1.02]"
              : "border-border hover:border-primary/50 hover:bg-card/50"
          } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "100ms" }}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isUploading}
          />
          <div className="flex flex-col items-center gap-4 text-center">
            <div className={`p-4 bg-primary/10 rounded-full transition-transform duration-300 ${dragActive ? "scale-110" : ""}`}>
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-foreground font-medium">
                {isUploading ? "Mengupload..." : "Drag & drop sertifikat di sini"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                atau klik untuk memilih file (PNG, JPG, PDF)
              </p>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`group relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <button
                onClick={() => removeCertificate(cert.id)}
                className="absolute top-3 right-3 p-2 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="Hapus sertifikat"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              </div>

              {cert.imageUrl && (
                <div className="mt-4 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPreviewCert(cert)}
                    className="flex-1 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Lihat
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <a href={cert.imageUrl} download={cert.name}>
                      <Download className="w-4 h-4 mr-2" />
                      Unduh
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {certificates.length === 0 && (
          <div className={`text-center py-12 text-muted-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <FileImage className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Belum ada sertifikat. Upload sertifikat pertama Anda!</p>
          </div>
        )}

        {/* Preview Dialog */}
        <Dialog open={!!previewCert} onOpenChange={() => setPreviewCert(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{previewCert?.name}</DialogTitle>
            </DialogHeader>
            {previewCert?.imageUrl && (
              <div className="relative aspect-[4/3] w-full">
                {previewCert.fileType === "application/pdf" ? (
                  <iframe
                    src={`${previewCert.imageUrl}#toolbar=0`}
                    className="w-full h-full rounded-lg border-2 border-border"
                    title={previewCert.name}
                  />
                ) : (
                  <Image
                    src={previewCert.imageUrl}
                    alt={previewCert.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
