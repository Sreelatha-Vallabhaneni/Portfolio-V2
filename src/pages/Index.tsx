import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { CurrentlyLearning } from '@/components/CurrentlyLearning';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { FloatingElements } from '@/components/FloatingElements';
import { AnimatedCursor } from '@/components/AnimatedCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedCursor />
      <ScrollProgress />
      <FloatingElements />
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <CurrentlyLearning />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
