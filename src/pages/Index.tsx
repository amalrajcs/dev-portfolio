import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import SocialSection from "@/components/sections/SocialSection";
import Footer from "@/components/Footer";

const sections = ["hero", "about", "resume", "projects", "skills", "contact"];

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Page Transition Wrapper */}
      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <HeroSection onNavigate={handleNavigate} />

          {/* About Section */}
          <AboutSection />

          {/* Resume Section */}
          <ResumeSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Social Links */}
          <SocialSection />

          {/* Footer */}
          <Footer />
        </motion.main>
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />
    </div>
  );
};

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-primary z-50 origin-left"
      style={{ scaleX: progress / 100 }}
    />
  );
};

export default Index;
