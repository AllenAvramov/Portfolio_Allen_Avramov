import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt, FaEnvelope, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

const tech = ["React", "JavaScript", "Node.js", "PostgreSQL"];

function useTypewriter(words, speed = 100, pause = 2000) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [dir, setDir] = useState("forward");

  useEffect(() => {
    const word = words[wi % words.length];

    const tick = () => {
      if (dir === "forward") {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) {
          setTimeout(() => setDir("back"), pause);
        }
      } else {
        const next = word.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setDir("forward");
          setWi((x) => x + 1);
        }
      }
    };

    const t = setTimeout(tick, speed);
    return () => clearTimeout(t);
  }, [text, wi, dir, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(["Tech Enthusiast", "Computer Science Graduate","Secure Systems Enthusiast", "API & Database Developer", "Problem Solver" ], 100, 2000);

  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pt-40 md:pt-48 pb-20 md:pb-28">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Ready to Innovate Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2
                       bg-white/5 border border-white/10 text-white/90 text-sm mb-8"
          >
            <FaStar className="text-purple-400" />
            Ready to Innovate
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            Full Stack{" "}
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          {/* Subtitle with typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl text-white/90 mb-6 font-medium"
          >
            {typed}
            <span className="animate-pulse text-purple-400 ml-1">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-8"
          >
            Enhancing digital experiences that are smooth, scalable, and made to impress.
          </motion.p>

          {/* Technology Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                className="px-4 py-2 rounded-lg text-sm bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
                         bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-all"
            >
              Projects
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
                         bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-all"
            >
              Contact
              <FaEnvelope className="text-sm" />
            </motion.a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              href="https://github.com/AllenAvramov" target="_blank" rel="noreferrer"
            >
              <FaGithub className="text-white/80" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              href="https://linkedin.com/in/allen-avramov-7ab938315" target="_blank" rel="noreferrer"
            >
              <FaLinkedin className="text-white/80" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              href="https://instagram.com/" target="_blank" rel="noreferrer"
            >
              <FaInstagram className="text-white/80" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
