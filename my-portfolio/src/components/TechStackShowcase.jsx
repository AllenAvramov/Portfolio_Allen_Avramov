import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiDocker,
  SiJsonwebtokens,
  SiJenkins,
  SiFlask,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGitlab,
} from "react-icons/si";

const technologies = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "React + Native", icon: SiReact, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Node JS", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express JS", icon: SiExpress, color: "text-gray-400" },
  { name: "Flask", icon: SiFlask, color: "text-gray-900" },
  { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Jenkins", icon: SiJenkins, color: "text-red-500" },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-purple-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-900" },
  { name: "GitLab", icon: SiGitlab, color: "text-orange-500" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function TechStackShowcase() {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {technologies.map((tech) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={tech.name}
            variants={item}
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="group relative rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10
                       hover:border-white/20 p-6 flex flex-col items-center justify-center gap-3
                       transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
              <Icon />
            </div>

            {/* Name */}
            <span className="text-white/80 text-sm font-medium text-center group-hover:text-white transition-colors">
              {tech.name}
            </span>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

