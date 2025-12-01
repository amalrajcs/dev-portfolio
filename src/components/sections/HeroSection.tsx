import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="hero" className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Profile Image */}
        <motion.div 
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40 mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-primary animate-pulse opacity-50 blur-xl" />
            <img
              src={profileImage}
              alt="Amalraj - Full Stack Developer"
              className="relative w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-2xl"
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs">✓</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Design. Build. Grow.</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
          Hi, I'm{" "}
          <span className="gradient-text">Amal Raj</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="inline-block"
          >
            👋
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-xl text-white md:text-2xl text-muted-foreground mb-4">
          Web Developer & UI/UX Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12">
          I build fast, elegant, and modern web experiences with a focus on clean code and creative design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={() => onNavigate("projects")}
            className="px-8 py-4 rounded-full font-semibold border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-display -my-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-3 left-1/2  -translate-x-1/2"
        >
          <motion.button
            onClick={() => onNavigate("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
