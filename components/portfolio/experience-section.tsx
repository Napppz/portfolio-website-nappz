"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Code2 } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      year: "Sekarang",
      title: "Mahasiswa Informatika",
      organization: "Program Studi S1",
      description: "Menekuni studi komprehensif di bidang Teknik Informatika dengan spesialisasi pada pengembangan perangkat lunak (Software Engineering), Kecerdasan Buatan (AI), dan Sistem Terdistribusi.",
      icon: GraduationCap,
      color: "text-[#00f0ff] animate-pulse",
      bgColor: "bg-[#00f0ff]/10",
      borderColor: "border-[#00f0ff]/30",
    },
    {
      id: 2,
      year: "2025",
      title: "Sertifikasi CCNA Introduction to Networks",
      organization: "Cisco",
      description: "Meraih sertifikasi profesional CCNA untuk mendalami pondasi infrastruktur jaringan komputer.",
      icon: Award,
      color: "text-[#00f0ff]",
      bgColor: "bg-[#00f0ff]/10",
      borderColor: "border-[#00f0ff]/30",
    },
    {
      id: 3,
      year: "2025",
      title: "Sertifikat Workshop Data & Machine Learning",
      organization: "Workshop Data",
      description: "Mendalami pengelolaan dataset skala besar dan pengimplementasian model Machine Learning industri.",
      icon: Briefcase,
      color: "text-[#00f0ff]",
      bgColor: "bg-[#00f0ff]/10",
      borderColor: "border-[#00f0ff]/30",
    },
    {
      id: 4,
      year: "2025",
      title: "Sertifikat IT Bootcamp",
      organization: "Bootcamp Intensif",
      description: "Menyelesaikan program pelatihan intensif terkait pengembangan dan administrasi teknologi informasi.",
      icon: Code2,
      color: "text-[#00f0ff]",
      bgColor: "bg-[#00f0ff]/10",
      borderColor: "border-[#00f0ff]/30",
    },
    {
      id: 5,
      year: "2024",
      title: "Sertifikat PCAP Programming in Python",
      organization: "Python Institute",
      description: "Memperoleh sertifikasi PCAP bergengsi atas kompetensi pemrograman lanjutan menggunakan bahasa Python.",
      icon: Award,
      color: "text-[#00f0ff]",
      bgColor: "bg-[#00f0ff]/10",
      borderColor: "border-[#00f0ff]/30",
    },
    {
      id: 6,
      year: "2024",
      title: "Sertifikat Workshop AI",
      organization: "Workshop",
      description: "Eksplorasi wawasan praktis seputar implementasi teknologi Artificial Intelligence kontemporer.",
      icon: Briefcase,
      color: "text-[#00f0ff]",
      bgColor: "bg-[#00f0ff]/10",
      borderColor: "border-[#00f0ff]/30",
    },
    {
      id: 7,
      year: "2023",
      title: "Sertifikat Golang",
      organization: "Bootcamp",
      description: "Memulai karir backend dengan menguasai bahasa Golang dan mengimplementasikan arsitektur microservices.",
      icon: Code2,
      color: "text-[#00f0ff]",
      bgColor: "bg-[#00f0ff]/10",
      borderColor: "border-[#00f0ff]/30",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="mb-16 text-center"
        >
          <p className="font-mono text-2xl md:text-3xl font-bold tracking-widest text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] mb-2 uppercase">
            PERJALANAN
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Edukasi & Pengalaman
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline Icon Node */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 ${exp.bgColor} ${exp.color} backdrop-blur-md`}
              >
                <exp.icon className="w-4 h-4" />
              </motion.div>

              {/* Timeline Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -2, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className={`px-3 py-1 text-xs font-mono font-bold tracking-wider rounded-full border ${exp.borderColor} ${exp.color} ${exp.bgColor}`}>
                      {exp.year}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground bg-black/20 px-2 py-1 rounded-md">
                      {exp.organization}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  
                  <p className="text-muted-foreground mt-2 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
