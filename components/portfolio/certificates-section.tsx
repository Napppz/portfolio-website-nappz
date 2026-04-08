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
            SERTIFIKAT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Pencapaian & Sertifikat
          </h2>
        </div>

        {/* Certificates Grid (Like Projects Section) */}
        <div className="grid gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`group p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
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
                    <span className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full border border-border">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {cert.imageUrl && (
                  <div className="flex items-center justify-end gap-3 mt-2 md:mt-0 w-full md:w-auto border-t md:border-t-0 border-border/50 pt-4 md:pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPreviewCert(cert)}
                      className="flex-1 md:flex-none hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Lihat
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 md:flex-none hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
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
