import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Award } from "lucide-react";
import abtImage from "@/assets/profile-image.jpg";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const achievements = [
    { icon: Code2, title: "Clean Code", description: "Writing maintainable, scalable code" },
    { icon: Palette, title: "UI/UX Design", description: "Creating beautiful user experiences" },
    { icon: Rocket, title: "Performance", description: "Optimizing for speed & efficiency" },
  ];

  return (
    <section id="about" className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto w-full"
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Image/Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-accent/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main image container */}
              <div className="absolute inset-8 rounded-full glass-card overflow-hidden">

                {/* <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  { <span className="text-8xl">👨‍💻</span> }
                </div> */}

                <div className="absolute inset-0 rounded-full bg-gradient-primary animate-pulse opacity-50 blur-xl" />
            <img
              src={abtImage}
              alt="Amalraj - Full Stack Developer"
              className="relative w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-2xl"
            />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 right-8 glass-card px-4 py-2 rounded-full"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-sm font-medium">React.js</span>
              </motion.div>
              <motion.div
                className="absolute bottom-8 -left-4 glass-card px-4 py-2 rounded-full"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <span className="text-sm font-medium">Python</span>
              </motion.div>
              <motion.div
                className="absolute  -left-4 glass-card px-4 py-2 rounded-full"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <span className="text-sm font-medium">Figma</span>
              </motion.div>
              <motion.div
                className="absolute bottom-16 -right-4 glass-card px-4 py-2 rounded-full"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <span className="text-sm font-medium">Node.js</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants}>
            <motion.span variants={itemVariants} className="text-primary font-medium mb-4 block">
              About Me
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-display ont-bold mb-6">
              Learning and Crafting{" "}
              <span className="gradient-text">Digital Excellence</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground mb-6 leading-relaxed">
              I am a passionate Full stack Web developer and UI/UX Enthusiast with a strong foundation in Web Developer. I hold a B.Sc. in Computer Science and have completed specialized training to strengthen my skills in building dynamic, user-friendly web applications.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground mb-8 leading-relaxed">
              I enjoy solving complex problems through clean, efficient code and continuously expanding my knowledge. With hands-on experience from internships and personal projects, I am eager to contribute to innovative teams and create impactful digital solutions.
            </motion.p>

            {/* Achievement cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="glass-card p-4 rounded-xl"
                  whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.3)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <achievement.icon className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-display font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
