import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

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
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Available for new projects</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
          Hi, I'm{" "}
          <span className="gradient-text">John Doe</span>
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
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-4">
          Full-Stack Developer & UI/UX Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12">
          I craft beautiful, performant web experiences with modern technologies. 
          Passionate about clean code, innovative design, and bringing ideas to life.
        </motion.p>

        {/* Stats */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" },
            { value: "30+", label: "Happy Clients" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={() => onNavigate("cta")}
            className="glow-button text-primary-foreground font-display"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.button>
          <motion.button
            onClick={() => onNavigate("projects")}
            className="px-8 py-4 rounded-full font-semibold border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-display"
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
