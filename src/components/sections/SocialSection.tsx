import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com", color: "#24292e" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "#0077B5" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "#1DA1F2" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "#E4405F" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "#FF0000" },
  { name: "Email", icon: Mail, href: "mailto:hello@johndoe.dev", color: "#00D4FF" },
];

const SocialSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground">
            Follow me on social media to stay updated with my latest work and thoughts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.15, 
                y: -5,
                boxShadow: `0 0 30px ${social.color}40`
              }}
              whileTap={{ scale: 0.95 }}
              className="social-icon"
              style={{ "--hover-color": social.color } as React.CSSProperties}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
