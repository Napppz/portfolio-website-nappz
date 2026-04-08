import { HeroSection } from "@/components/portfolio/hero-section";
import { Navbar } from "@/components/portfolio/navbar";
import { AboutSection } from "@/components/portfolio/about-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { CertificatesSection } from "@/components/portfolio/certificates-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
