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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "email@example.com",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 812 3456 7890",
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
        <div className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-mono text-sm tracking-wider mb-2">
            KONTAK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Hubungi Saya
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className={`text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu
              untuk menghubungi saya melalui form atau kontak di bawah ini.
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
            onSubmit={handleSubmit}
            className={`space-y-6 p-6 bg-card border border-border rounded-xl transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nama</FieldLabel>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Nama Anda"
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="email@example.com"
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="message">Pesan</FieldLabel>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Tulis pesan Anda..."
                  rows={4}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </Field>
            </FieldGroup>

            <Button
              type="submit"
              className="w-full group relative overflow-hidden"
              disabled={isSubmitting}
            >
              <span className={`flex items-center justify-center gap-2 transition-transform duration-300 ${submitted ? "-translate-y-10" : ""}`}>
                {isSubmitting ? (
                  "Mengirim..."
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Kirim Pesan
                  </>
                )}
              </span>
              <span className={`absolute inset-0 flex items-center justify-center gap-2 text-primary-foreground transition-transform duration-300 ${submitted ? "translate-y-0" : "translate-y-10"}`}>
                <CheckCircle className="w-4 h-4" />
                Pesan Terkirim!
              </span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
