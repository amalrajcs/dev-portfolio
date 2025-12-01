import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code2, 
  FileCode, 
  Server, 
  Database, 
  Cloud, 
  Container, 
  Palette,
  Terminal,
  GitBranch,
  Figma,
  Send,
  LayoutGrid,
  FileText
} from "lucide-react";

const skills = [
  { name: "React / Next.js", level: 95, icon: Code2 },
  { name: "TypeScript", level: 90, icon: FileCode },
  { name: "Node.js", level: 88, icon: Server },
  { name: "Python", level: 75, icon: Terminal },
  { name: "PostgreSQL / MongoDB", level: 85, icon: Database },
  { name: "AWS / Cloud", level: 78, icon: Cloud },
  { name: "Docker / DevOps", level: 72, icon: Container },
  { name: "UI/UX Design", level: 82, icon: Palette },
];

const tools = [
  { name: "VS Code", icon: Code2 },
  { name: "Git", icon: GitBranch },
  { name: "Figma", icon: Figma },
  { name: "Postman", icon: Send },
  { name: "Vercel", icon: LayoutGrid },
  { name: "Notion", icon: FileText },
];

const AnimatedCounter = ({ value, isInView }: { value: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return <span>{count}%</span>;
};

const SkillBar = ({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) => {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconComponent className="w-5 h-5 text-primary" />
          </motion.div>
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-primary font-display font-semibold">
          <AnimatedCounter value={skill.level} isInView={isInView} />
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life. Always learning and staying up-to-date with the latest trends.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills bars */}
          <div className="space-y-6">
            <h3 className="font-display font-semibold text-xl mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
            ))}
          </div>

          {/* Tools & Tech */}
          <div>
            <h3 className="font-display font-semibold text-xl mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.3)" }}
                    className="glass-card p-4 rounded-xl text-center cursor-pointer"
                  >
                    <motion.div
                      className="w-12 h-12 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-6 h-6 text-primary" />
                    </motion.div>
                    <span className="text-sm font-medium">{tool.name}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6 rounded-2xl mt-6"
            >
              <h4 className="font-display font-semibold mb-3">Always Learning</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Currently exploring AI/ML integration in web apps, Web3 technologies, and advanced system design patterns.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI/ML", "Web3", "System Design", "Mobile Dev"].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
