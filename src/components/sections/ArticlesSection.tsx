import { motion } from "framer-motion";
import { ArrowRight, Clock, Eye } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn best practices for structuring large-scale React projects with TypeScript for better maintainability.",
    date: "Nov 15, 2024",
    readTime: "8 min read",
    views: "2.4k",
    tags: ["React", "TypeScript"],
    featured: true,
  },
  {
    id: 2,
    title: "The Complete Guide to CSS Grid Layout",
    excerpt: "Master CSS Grid with practical examples and real-world use cases for modern web layouts.",
    date: "Oct 28, 2024",
    readTime: "12 min read",
    views: "1.8k",
    tags: ["CSS", "Layout"],
    featured: false,
  },
  {
    id: 3,
    title: "Understanding Server-Side Rendering in Next.js",
    excerpt: "Deep dive into SSR, SSG, and ISR in Next.js - when to use each and performance considerations.",
    date: "Oct 10, 2024",
    readTime: "10 min read",
    views: "3.1k",
    tags: ["Next.js", "Performance"],
    featured: false,
  },
  {
    id: 4,
    title: "Modern Authentication Patterns for Web Apps",
    excerpt: "Exploring JWT, OAuth, and session-based authentication with security best practices.",
    date: "Sep 22, 2024",
    readTime: "15 min read",
    views: "4.2k",
    tags: ["Security", "Auth"],
    featured: true,
  },
];

const ArticlesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="articles" className="section-container">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Articles</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Latest <span className="gradient-text">Thoughts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I write about web development, design, and technology. Here are some of my recent articles.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className={`article-card ${article.featured ? "md:col-span-2" : ""}`}
            >
              <div className={`${article.featured ? "md:flex md:gap-8" : ""}`}>
                {/* Thumbnail */}
                <div className={`${article.featured ? "md:w-1/3" : ""} mb-4 md:mb-0`}>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`${article.featured ? "md:w-2/3" : ""}`}>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.featured && (
                      <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-semibold text-xl mb-2 group-hover:gradient-text transition-all">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {article.views}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

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
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
