import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSkillsSection } from "@/components/portfolio/about-skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { TimelineCertificatesSection } from "@/components/portfolio/timeline-certificates-section";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative selection:bg-[#00ffd2]/30 selection:text-[#00ffd2]">
      <Navbar />
      <HeroSection />
      <AboutSkillsSection />
      <ProjectsSection />
      <TimelineCertificatesSection />
      <Footer />
    </main>
  );
}
