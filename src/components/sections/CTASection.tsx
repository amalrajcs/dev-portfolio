import { motion } from "framer-motion";
import { ArrowRight, Zap, Mail } from "lucide-react";

interface CTASectionProps {
  onNavigate: (section: string) => void;
}

const CTASection = ({ onNavigate }: CTASectionProps) => {
  return (
    <section id="cta" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Decorative elements */}
        <div className="relative">
          <motion.div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Ready to collaborate</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
        >
          Let's Build Something{" "}
          <span className="gradient-text">Amazing Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind? I'm currently available for freelance work and exciting opportunities. 
          Let's turn your ideas into reality.
        </motion.p>

        {/* Main CTA Button with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={() => onNavigate("contact")}
            className="group relative px-10 py-5 rounded-full font-display font-semibold text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button background with gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-primary"
              initial={{ opacity: 1 }}
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 blur-xl"
              style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-foreground"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Button content */}
            <span className="relative flex items-center gap-3 text-primary-foreground">
              <Mail className="w-5 h-5" />
              Contact Me
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
          </motion.button>

          <motion.a
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("resume");
            }}
            className="px-10 py-5 rounded-full font-display font-semibold text-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Response time indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Average response time:{" "}
          <span className="text-primary font-medium">within 24 hours</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CTASection;
