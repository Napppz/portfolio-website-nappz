import { HeroSection } from "@/components/portfolio/hero-section";
import { Navbar } from "@/components/portfolio/navbar";
import { AboutSection } from "@/components/portfolio/about-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { CertificatesSection } from "@/components/portfolio/certificates-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Global Cyberpunk Grid Background */}
      <div className="fixed inset-0 pointer-events-none cyberpunk-grid z-0 mix-blend-screen opacity-40"></div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
