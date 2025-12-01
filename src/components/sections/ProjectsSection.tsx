import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "🛒",
    gradient: "from-primary/20 to-accent/20",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: "Analytics dashboard with AI-powered insights and beautiful data visualizations.",
    tags: ["Next.js", "Python", "TensorFlow", "D3.js"],
    image: "📊",
    gradient: "from-accent/20 to-primary/20",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Real-time social platform with live messaging, stories, and content sharing.",
    tags: ["React Native", "Firebase", "WebSocket"],
    image: "💬",
    gradient: "from-primary/20 to-accent/20",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Task Management Tool",
    description: "Collaborative project management with Kanban boards and team features.",
    tags: ["Vue.js", "GraphQL", "PostgreSQL"],
    image: "✅",
    gradient: "from-accent/20 to-primary/20",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Health and fitness app with workout plans and progress tracking.",
    tags: ["React", "Express", "MongoDB"],
    image: "💪",
    gradient: "from-primary/20 to-accent/20",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Portfolio Generator",
    description: "SaaS tool for developers to create stunning portfolios in minutes.",
    tags: ["Next.js", "Tailwind", "Prisma"],
    image: "🎨",
    gradient: "from-accent/20 to-primary/20",
    link: "#",
    github: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="project-card-3d"
    >
      <motion.div
        className="glass-card p-6 rounded-2xl h-full cursor-pointer group"
        whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
      >
        {/* Project image/icon */}
        <div className={`h-40 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 overflow-hidden`}>
          <motion.span
            className="text-6xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.image}
          </motion.span>
        </div>

        {/* Content */}
        <h3 className="font-display font-semibold text-xl mb-2 group-hover:gradient-text transition-all">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <motion.a
            href={project.link}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ x: 3 }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ x: 3 }}
          >
            <Github className="w-4 h-4" />
            Source
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on. Each one taught me something new and helped me grow as a developer.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-display font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
