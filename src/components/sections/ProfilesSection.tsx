import { motion } from "framer-motion";
import { Github, Code2, Trophy, Star, ExternalLink } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "GitHub",
    username: "@johndoe",
    icon: Github,
    stats: { label: "Contributions", value: "2,847" },
    description: "Open source contributions and personal projects",
    color: "from-[#24292e] to-[#40444a]",
    link: "https://github.com",
  },
  {
    id: 2,
    name: "LeetCode",
    username: "johndoe_dev",
    icon: Code2,
    stats: { label: "Problems Solved", value: "450+" },
    description: "Data structures & algorithms practice",
    color: "from-[#FFA116] to-[#FFB84D]",
    link: "https://leetcode.com",
  },
  {
    id: 3,
    name: "HackerRank",
    username: "john_doe",
    icon: Trophy,
    stats: { label: "Badges Earned", value: "25" },
    description: "Coding challenges and certifications",
    color: "from-[#00EA64] to-[#00CB4C]",
    link: "https://hackerrank.com",
  },
  {
    id: 4,
    name: "CodePen",
    username: "@johndoe",
    icon: Star,
    stats: { label: "Pens Created", value: "120+" },
    description: "Frontend experiments and creative coding",
    color: "from-[#47CF73] to-[#2C3E50]",
    link: "https://codepen.io",
  },
];

const ProfilesSection = () => {
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="profiles" className="section-container">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Coding Profiles</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Find Me <span className="gradient-text">Online</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my coding profiles across different platforms. I'm always active and learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {profiles.map((profile) => (
            <motion.a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="profile-card group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <profile.icon className="w-8 h-8 text-foreground" />
              </motion.div>

              {/* Platform name */}
              <h3 className="font-display font-semibold text-lg mb-1">{profile.name}</h3>
              <p className="text-sm text-primary mb-3">{profile.username}</p>

              {/* Stats */}
              <div className="glass-card px-4 py-2 rounded-lg inline-block mb-3">
                <span className="text-xs text-muted-foreground">{profile.stats.label}</span>
                <p className="font-display font-bold text-lg gradient-text">{profile.stats.value}</p>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground mb-4">{profile.description}</p>

              {/* Visit link */}
              <motion.div
                className="flex items-center justify-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                Visit Profile
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* GitHub Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 glass-card p-8 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-semibold text-xl mb-2">GitHub Activity</h3>
              <p className="text-muted-foreground text-sm">
                I'm most active on GitHub with regular commits and contributions to open source projects.
              </p>
            </div>
            <div className="flex gap-8">
              {[
                { label: "Repositories", value: "45+" },
                { label: "Stars", value: "500+" },
                { label: "Followers", value: "1.2k" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display font-bold text-2xl gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfilesSection;
