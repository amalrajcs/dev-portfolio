import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Target } from "lucide-react";
import infernoClub from "@/assets/Inferno Club.png";

const projects = [
  {
    id: 1,
    title: "Pulse Fitness | 3D Wellness",
    description:
      "A high-performance 3D fitness landing page featuring an interactive hero section with floating dumbbells, custom WebGL shaders, and a cinematic loader.",
    tags: ["React.js", "Three.js", "Framer Motion", "WebGL"],
    image: "⚡",
    gradient: "from-red-500/20 to-zinc-900/20",
    link: "https://pulsefitness.vercel.app/",
    github: "https://github.com/amalrajcs/pulse-fitness",
    category: "web",
  },
  {
    id: 2,
    title: "Inferno-club | College Club",
    description:
      "Inferno Club is a stylish frontend web project built with HTML, CSS, and JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "🛒",
    gradient: "from-primary/20 to-accent/20",
    link: "https://en4128.github.io/InfernoClub/",
    github: "https://github.com/En4128/InfernoClub",
    category: "web",
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
    category: "web",
  },
  {
    id: 4,
    title: "FoodyFlow",
    description:
      "A clean, responsive food ordering app built with TypeScript and Tailwind CSS.",
    tags: ["Typescript", "Tailwind"],
    image: "📊",
    gradient: "from-accent/20 to-primary/20",
    link: "https://foody-flow.vercel.app/",
    github: "https://github.com/amalrajcs/foody-flow",
    category: "web",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A weather application that fetches real-time weather data using a public API. Users can search cities to view temperature, humidity, wind speed, and weather conditions with dynamic UI updates.",
    tags: ["HTML", "CSS", "JavaScript", "Weather API"],
    image: "🌤️",
    gradient: "from-accent/20 to-primary/20",
    link: "https://todayweatherinfo.netlify.app/",
    github: "https://github.com/amalrajcs/weather-app",
    category: "web",
  },
  {
    id: 6,
    title: "EMI Calculator",
    description:
      "A EMI calculator that allows users to calculate monthly loan installments based on principal amount, interest rate, and tenure. Features real-time calculation with an intuitive and user-friendly interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "💰",
    gradient: "from-green-400/20 to-emerald-400/20",
    link: "https://amalrajcs.github.io/emi-calculator/",
    github: "https://github.com/amalrajcs/emi-calculator",
    category: "web",
  },
  {
    id: 7,
    title: "EV Landing Page",
    description:
      "A modern electric vehicle landing page designed with a clean UI layout. Showcases product highlights, features, and call-to-action sections with smooth visual structure and mobile-friendly design.",
    tags: ["React.js"],
    image: "⚡",
    gradient: "from-green-400/20 to-emerald-400/20",
    link: "https://zenvolt.netlify.app/",
    github: "https://github.com/amalrajcs/ev-webpage",
    category: "web",
  },
  {
    id: 8,
    title: "Admin Workflow UX Web Design",
    description:
      "Designed a structured admin workflow dashboard in Figma focusing on usability, clear data hierarchy, and streamlined task management. Created wireframes, user flows, and high-fidelity UI screens with a clean and modern interface.",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    image: "🎨",
    gradient: "from-green-400/20 to-emerald-400/20",
    link: "https://www.figma.com/design/ncZPbDmsZtADeLNeUwC2DY/Solytics-Partners-%E2%80%93-Admin-Workflow-UX?node-id=0-1&t=QNmDYy3owOyeU8Uf-1",
    github: "https://www.figma.com/design/ncZPbDmsZtADeLNeUwC2DY/Solytics-Partners-%E2%80%93-Admin-Workflow-UX?node-id=0-1&t=QNmDYy3owOyeU8Uf-1",
    category: "design",
  },
  {
    id: 9,
    title: "Student Management System Design",
    description:
      "Crafted a comprehensive UI/UX design for a Student Management System in Figma, focusing on intuitive navigation, clear data presentation, and seamless user flows for administrators and students. Includes layouts for dashboards, profiles, and key system functions.",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    image: "📚",
    gradient: "from-yellow-300/20 to-orange-400/20",
    link: "https://www.figma.com/design/QiyeBbutJqbqwoDDj0OV8x/Student-Management-System?t=QNmDYy3owOyeU8Uf-1",
    github: "https://www.figma.com/design/QiyeBbutJqbqwoDDj0OV8x/Student-Management-System?t=QNmDYy3owOyeU8Uf-1",
    category: "design",
  },
  {
    id: 10,
    title: "Cafe App Design",
    description:
      "Created a user-centric mobile interface for a Cafe App in Figma, focusing on seamless browsing, easy ordering flows, and visually appealing screens. Designed high-fidelity layouts with consistent styling and interactive prototype elements.",
    tags: ["Figma", "UI/UX Design", "Mobile App Design", "Prototyping"],
    image: "☕",
    gradient: "from-amber-300/20 to-red-400/20",
    link: "https://www.figma.com/design/ds1Nl5UjzP20R9QaNwChwd/Cafe-app?t=QNmDYy3owOyeU8Uf-1",
    github: "https://www.figma.com/design/ds1Nl5UjzP20R9QaNwChwd/Cafe-app?t=QNmDYy3owOyeU8Uf-1",
    category: "design",
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
        <h3 className="font-display font-bold text-xl mb-2 group-hover:gradient-text transition-all">
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
              className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground font-light"
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
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            whileHover={{ x: 3 }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            whileHover={{ x: 3 }}
          >
            <Github className="w-4 h-4" />
            Source
          </motion.a>
        </div>
      </motion.div >
    </motion.div >
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
  const webProjects = projects.filter((p) => p.category === "web");
  const designProjects = projects.filter((p) => p.category === "design");

  const displayedWebProjects =
    typeof limit === "number" ? webProjects.slice(0, limit) : webProjects;

  const shouldShowButton =
    showViewMoreButton && (displayedWebProjects.length < webProjects.length || designProjects.length > 0 && typeof limit === "number");

  return (
    <section id="projects" className="section-container">
      <div className="max-w-7xl mx-auto w-full">
        {/* Web Projects Section */}
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
            Here are the development projects I’ve created, each one shaping my skills and
            experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {displayedWebProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {shouldShowButton && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 mb-24"
          >
            <motion.button
              onClick={() => {
                if (onViewMore) {
                  onViewMore();
                  // Ensure we scroll to top after navigation
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-display font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Projects
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Design Projects Section */}
        {designProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Design <span className="gradient-text">Work</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My UI/UX design explorations and prototypes, focusing on usability and aesthetics.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + webProjects.length} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
