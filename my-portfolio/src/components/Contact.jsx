import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 shadow-glow"
      >
        <h3 className="text-2xl font-bold mb-2">Send a message</h3>
        <p className="text-white/70 text-sm mb-6">
          Have a project in mind? Let's collaborate and bring your ideas to life.
        </p>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm
                         outline-none focus:border-purple-400/50 focus:bg-black/40 transition-all
                         placeholder:text-white/40"
              placeholder="Your name"
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm
                         outline-none focus:border-purple-400/50 focus:bg-black/40 transition-all
                         placeholder:text-white/40"
              placeholder="Your email"
            />
          </div>
          <div>
            <textarea
              rows="5"
              className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm
                         outline-none focus:border-purple-400/50 focus:bg-black/40 transition-all
                         placeholder:text-white/40 resize-none"
              placeholder="Your message"
            />
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600
                       hover:from-purple-500 hover:to-cyan-500 border border-purple-400/30
                       text-white font-medium transition-all shadow-lg shadow-purple-500/20
                       flex items-center justify-center gap-2"
          >
            <FaPaperPlane />
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 shadow-glow"
      >
        <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.02, x: 5 }}
            className="rounded-xl bg-black/30 border border-white/10 p-5 hover:bg-black/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-400/30">
                <FaEnvelope className="text-purple-400" />
              </div>
              <div className="text-white/60 text-sm">Email</div>
            </div>
            <a href="mailto:allenjob96@gmail.com" className="text-white font-medium hover:text-purple-400 transition-colors">
              allenjob96@gmail.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, x: 5 }}
            className="rounded-xl bg-black/30 border border-white/10 p-5 hover:bg-black/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-400/30">
                <FaMapMarkerAlt className="text-cyan-400" />
              </div>
              <div className="text-white/60 text-sm">Location</div>
            </div>
            <div className="text-white font-medium">Israel</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, x: 5 }}
            className="rounded-xl bg-black/30 border border-white/10 p-5 hover:bg-black/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-green-500/20 border border-green-400/30">
                <FaBriefcase className="text-green-400" />
              </div>
              <div className="text-white/60 text-sm">Availability</div>
            </div>
            <div className="text-white font-medium">Open to junior roles</div>
          </motion.div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30">
          <p className="text-white/80 text-sm">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
  