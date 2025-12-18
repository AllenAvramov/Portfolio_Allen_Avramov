import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaCertificate, FaCog, FaExternalLinkAlt, FaArrowRight, FaChevronDown } from "react-icons/fa";
import ProjectsShowcase from "./ProjectsShowcase";
import CertificatesShowcase from "./CertificatesShowcase";
import TechStackShowcase from "./TechStackShowcase";

const tabs = [
  { id: "projects", label: "Projects", icon: FaCode },
  { id: "certificates", label: "Certificates", icon: FaCertificate },
  { id: "techstack", label: "Tech Stack", icon: FaCog },
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center gap-3 mb-12"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300
                ${isActive
                  ? "bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white shadow-lg shadow-purple-500/50 border border-purple-400/30"
                  : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20"
                }
              `}
            >
              <Icon className="text-base" />
              <span className="text-sm">{tab.label}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "projects" && <ProjectsShowcase />}
          {activeTab === "certificates" && <CertificatesShowcase />}
          {activeTab === "techstack" && <TechStackShowcase />}
        </motion.div>
      </AnimatePresence>

      
    </section>
  );
}

