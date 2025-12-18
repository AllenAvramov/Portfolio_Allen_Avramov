import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Splitify",
    desc: "Scan receipts, extract items with AI, and split costs between friends. Built with React Native for seamless mobile experience.",
    tags: ["React Native", "Node.js", "PostgreSQL", "JWT", "AI"],
    link: "#",
    github: "#",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "JobPilot",
    desc: "Job tracking dashboard with authentication, CRUD operations, and a clean, intuitive UI for managing applications.",
    tags: ["React", "Express", "SQL", "JWT"],
    link: "#",
    github: "#",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "IMDb Search Platform",
    desc: "Movie search platform with persistence and CRUD features. Integrated with external APIs for comprehensive movie data.",
    tags: ["JavaScript", "SQL", "REST API", "HTML/CSS"],
    link: "#",
    github: "#",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
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

export default function Projects() {
  return (
    <motion.div
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((p, index) => (
        <motion.div
          key={p.title}
          variants={item}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-6
                     hover:border-white/20 transition-all duration-300 overflow-hidden"
        >
          {/* Gradient background on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
          />

          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                {p.title}
              </h3>
              <div className="flex gap-2">
                {p.github && (
                  <motion.a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <FaGithub className="text-white/70 text-sm" />
                  </motion.a>
                )}
                {p.link && (
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-white/70 text-sm" />
                  </motion.a>
                )}
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-5 min-h-[60px]">
              {p.desc}
            </p>

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
        </motion.div>
      ))}
    </motion.div>
  );
}
  