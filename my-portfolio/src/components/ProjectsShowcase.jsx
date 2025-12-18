import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Splitify",
    desc: "Scan receipts, extract items with AI, and split costs between friends. Built with React Native for seamless mobile experience.",
    tags: ["React Native", "Node.js", "PostgreSQL", "JWT", "AI"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "JobPilot",
    desc: "Job tracking dashboard with authentication, CRUD operations, and a clean, intuitive UI for managing applications.",
    tags: ["React", "Express", "SQL", "JWT"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "IMDb Search Platform",
    desc: "Movie search platform with persistence and CRUD features. Integrated with external APIs for comprehensive movie data.",
    tags: ["JavaScript", "SQL", "REST API", "HTML/CSS"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectsShowcase() {
  return (
    <motion.div
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((p, index) => (
        <motion.div
          key={p.title}
          variants={item}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10
                     hover:border-white/20 transition-all duration-300 overflow-hidden"
        >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
              {p.title}
            </h3>

            <p className="text-white/70 text-sm leading-relaxed mb-4 min-h-[60px]">
              {p.desc}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-4">
              <motion.a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                           bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white
                           transition-all text-sm font-medium"
              >
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </motion.a>
              <motion.a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                           bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white
                           transition-all text-sm font-medium"
              >
                Details
                <FaArrowRight className="text-xs" />
              </motion.a>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/70
                             group-hover:bg-white/10 group-hover:border-white/20 transition-all"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
      ))}
    </motion.div>
  );
}

