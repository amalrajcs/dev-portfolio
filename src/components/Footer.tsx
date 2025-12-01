import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-4 border-t border-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.a
          href="#hero"
          className="text-xl font-display font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          {"<Dev />"}
        </motion.a>

        <p className="text-sm text-muted-foreground flex items-center gap-1">
          © 2025 Amal Raj . All right reserved.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
