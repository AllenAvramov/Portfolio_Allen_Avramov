import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        className={[
          "mx-auto max-w-7xl px-4",
          "transition-all duration-300",
          scrolled ? "py-3" : "py-5",
        ].join(" ")}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={[
            "flex items-center justify-between rounded-2xl px-6 py-4",
            "border border-white/10",
            scrolled
              ? "bg-black/60 backdrop-blur-xl shadow-lg shadow-black/20"
              : "bg-black/30 backdrop-blur-lg",
          ].join(" ")}
        >
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="font-bold text-lg tracking-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Allen
            </span>{" "}
            <span className="text-white/90">Avramov</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-white/70 hover:text-white transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-white/80" />
              ) : (
                <FaBars className="text-white/80" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-6"
          >
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white transition-colors py-2 border-b border-white/10 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm
                           bg-gradient-to-r from-purple-600 to-cyan-600 border border-purple-400/30 text-white font-medium"
              >
                Let's talk
              </motion.a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
