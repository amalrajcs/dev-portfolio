import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/Footer";

const ProjectsPage = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <AnimatedBackground />
    <CustomCursor />

    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <Link to="/" className="text-xl font-display font-bold gradient-text">
          {"<Dev />"}
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-4 py-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </header>

    <main className="pt-10 pb-16 px-4 md:px-8">
      <ProjectsSection showViewMoreButton={false} />
    </main>

    <Footer />
  </div>
);

export default ProjectsPage;


