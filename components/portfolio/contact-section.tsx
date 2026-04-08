"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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



  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "@rizkytyan15@gmail.com",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 857 7714 9410",
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Jakarta, Indonesia",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-6 lg:px-12 bg-card/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-mono text-2xl md:text-3xl font-bold tracking-widest text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] mb-2 uppercase">
            KONTAK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Hubungi Saya
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu
              untuk menghubungi saya melalui form otomatis di bawah ini. Bebas hambatan, langsung ke notifikasi HP saya.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/rizkytyan15@gmail.com"
            method="POST"
            className={`space-y-6 p-6 bg-card border border-border rounded-xl transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* FormSubmit Configurations */}
            <input type="hidden" name="_subject" value="🌟 Pesan Baru dari Website Portofolio Rizky!" />
            <input type="hidden" name="_template" value="box" />
            
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nama</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nama Lengkap Anda"
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email.utama@example.com"
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="message">Pesan</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Ceritakan tujuan Anda / Tawaran proyek..."
                  rows={4}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </Field>
            </FieldGroup>

            <Button
              type="submit"
              className="w-full group relative overflow-hidden"
            >
              <span className="flex items-center justify-center gap-2">
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Kirim Via FormSubmit
              </span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
