"use client";

import { useState, useEffect, useRef } from "react";
import { FileImage, Eye, Download, Award } from "lucide-react";
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
      name: "Sertifikat Workshop",
      issuer: "Workshop",
      date: "2024",
      imageUrl: "/Sertifikat/Sertifikat Workshop.pdf",
      fileType: "application/pdf",
    },
  ];
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);

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
      id="certificates"
      ref={sectionRef}
      className="py-20 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-mono text-sm tracking-wider mb-2">
            PENCAPAIAN
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Achievement Timeline
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                <Award className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-card border border-border rounded-xl shadow-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group-hover:-translate-y-1 relative">
                
                {/* Arrow indicator (desktop) */}
                <div className="hidden md:block absolute top-5 w-4 h-4 bg-card border-border border-b border-l rotate-45 -right-2 group-odd:-left-2 group-odd:border-l-0 group-odd:border-r group-even:border-b-0 group-even:border-t group-even:rotate-45" />

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-mono font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                      {cert.date}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium truncate">
                      {cert.issuer}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-foreground mt-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.name}
                  </h3>

                  {cert.imageUrl && (
                    <div className="mt-4 flex gap-3 pt-4 border-t border-border/50">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setPreviewCert(cert)}
                        className="flex-1 bg-primary/5 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Lihat
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="flex-1 bg-accent/5 hover:bg-accent/10 hover:text-accent-foreground transition-colors"
                      >
                        <a href={cert.imageUrl} download={cert.name}>
                          <Download className="w-4 h-4 mr-2" />
                          Unduh
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
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
          <DialogContent className="max-w-[95vw] w-full h-[95vh] max-h-[100dvh] flex flex-col p-4 sm:p-6">
            <DialogHeader className="flex flex-row items-center justify-between space-y-0 pr-8">
              <DialogTitle className="text-xl md:text-2xl truncate">{previewCert?.name}</DialogTitle>
              {previewCert && (
                <Button size="sm" asChild>
                  <a href={previewCert.imageUrl} download={previewCert.name}>
                    <Download className="w-4 h-4 md:mr-2" />
                    <span className="hidden md:inline">Unduh PDF/Gambar</span>
                  </a>
                </Button>
              )}
            </DialogHeader>
            {previewCert?.imageUrl && (
              <div className="relative flex-1 w-full min-h-0 bg-muted/20 rounded-lg overflow-hidden border border-border mt-2">
                {previewCert.fileType === "application/pdf" ? (
                  <iframe
                    src={previewCert.imageUrl}
                    className="w-full h-full border-0"
                    title={previewCert.name}
                  />
                ) : (
                  <Image
                    src={previewCert.imageUrl}
                    alt={previewCert.name}
                    fill
                    className="object-contain"
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
