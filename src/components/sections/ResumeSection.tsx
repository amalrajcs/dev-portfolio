import { motion } from "framer-motion";
import { Download, FileText, Eye, ExternalLink } from "lucide-react";

const ResumeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const experience = [
    {
      role: "Senior Full-Stack Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React and Node.js.",
    },
    {
      role: "Full-Stack Developer",
      company: "StartUp Inc",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects from scratch.",
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Developed responsive web interfaces and improved UX.",
    },
  ];

  return (
    <section id="resume" className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">Resume</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            My <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my career, skills, and achievements. Download my full resume for more details.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resume Preview Card */}
          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">John Doe - Resume</h3>
                <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
              </div>
            </div>

            {/* Mini preview */}
            <div className="bg-secondary/50 rounded-xl p-6 mb-6 border border-border/50">
              <div className="space-y-3">
                <div className="h-4 bg-primary/20 rounded w-3/4" />
                <div className="h-3 bg-muted rounded w-full" />
                <div className="h-3 bg-muted rounded w-5/6" />
                <div className="h-3 bg-muted rounded w-4/5" />
                <div className="h-4 bg-primary/20 rounded w-1/2 mt-4" />
                <div className="h-3 bg-muted rounded w-full" />
                <div className="h-3 bg-muted rounded w-3/4" />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4">
              <motion.button
                className="flex-1 glow-button text-primary-foreground flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Download PDF
              </motion.button>
              <motion.button
                className="px-6 py-4 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="w-5 h-5" />
                Preview
              </motion.button>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-display font-semibold text-xl mb-6">Work Experience</h3>
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                
                <div className="glass-card p-4 rounded-xl hover:border-primary/20 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-display font-semibold">{exp.role}</h4>
                      <p className="text-primary text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              whileHover={{ x: 5 }}
            >
              View full experience
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
