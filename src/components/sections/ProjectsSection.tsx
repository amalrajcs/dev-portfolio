import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Target } from "lucide-react";
import infernoClub from "@/assets/Inferno Club.png";

const projects = [
  {
    id: 1,
    title: "Inferno-club | College Club",
    description:
      "Inferno Club is a stylish frontend web project built with HTML, CSS, and JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "🛒",
    gradient: "from-primary/20 to-accent/20",
    link: "https://en4128.github.io/InfernoClub/",
    github: "https://github.com/En4128/InfernoClub",
  },
  {
    id: 2,
    title: "FoodyFlow",
    description:
      "A clean, responsive food ordering app built with TypeScript and Tailwind CSS.",
    tags: ["Typescript", "Tailwind"],
    image: "📊",
    gradient: "from-accent/20 to-primary/20",
    link: "https://foody-flow.vercel.app/",
    github: "https://github.com/amalrajcs/foody-flow",
  },
  {
    id: 3,
    title: "Job Tracker Application",
    description:
      "A MERN stack web app designed to help users efficiently manage and track their job applications.",
    tags: ["MERN Stack"],
    image: "💬",
    gradient: "from-primary/20 to-accent/20",
    link: "https://job-application-tracker-webapp.vercel.app/",
    github: "https://github.com/amalrajcs/job-application-tracker",
  },
  {
    id: 4,
    title: "Task Management Tool",
    description:
      "Collaborative project management with Kanban boards and team features.",
    tags: ["Vue.js", "GraphQL", "PostgreSQL"],
    image: "✅",
    gradient: "from-accent/20 to-primary/20",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description:
      "Health and fitness app with workout plans and progress tracking.",
    tags: ["React", "Express", "MongoDB"],
    image: "💪",
    gradient: "from-primary/20 to-accent/20",
    link: "#",
    github: "#",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

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
        {/* <div className={`h-40 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 overflow-hidden`}>
          <motion.span
            className="text-6xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.image}
          </motion.span>
        </div> */}

        {/* <div className={`h-60 rounded-xl bg-gradient-to-br  flex items-center justify-center mb-6 overflow-hidden`}>
         <motion.img
         src={infernoClub}
         alt="Inferno Club"
         className="h-full w-full object-cover"
         whileHover={{ scale: 1.05 }}
         transition={{ type: "spring", stiffness: 200 }}
        />
        </div> */}

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
            target="_blank"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ x: 3 }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
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

interface ProjectsSectionProps {
  limit?: number;
  onViewMore?: () => void;
  showViewMoreButton?: boolean;
}

const ProjectsSection = ({
  limit,
  onViewMore,
  showViewMoreButton = true,
}: ProjectsSectionProps = {}) => {
  const displayedProjects =
    typeof limit === "number" ? projects.slice(0, limit) : projects;
  const shouldShowButton =
    showViewMoreButton && displayedProjects.length < projects.length;
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
            Here are the projects I’ve created, each one shaping my skills and
            experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {shouldShowButton && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => onViewMore?.()}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-display font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!onViewMore}
            >
              View More Projects
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
