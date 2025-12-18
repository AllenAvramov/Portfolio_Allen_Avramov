import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "e7230e0a-b6f3-4e81-bc26-28d539cdb4ac");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully 🚀");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please try later.");
    }

    setLoading(false);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 shadow-glow"
      >
        <h3 className="text-2xl font-bold mb-2">Send a message</h3>
        <p className="text-white/70 text-sm mb-6">
          Have a project in mind? Let's collaborate and bring your ideas to life!
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm
                       outline-none focus:border-purple-400/50 focus:bg-black/40 transition-all
                       placeholder:text-white/40"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm
                       outline-none focus:border-purple-400/50 focus:bg-black/40 transition-all
                       placeholder:text-white/40"
          />

          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your message"
            className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm
                       outline-none focus:border-purple-400/50 focus:bg-black/40 transition-all
                       placeholder:text-white/40 resize-none"
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600
                       hover:from-purple-500 hover:to-cyan-500 border border-purple-400/30
                       text-white font-medium transition-all shadow-lg shadow-purple-500/20
                       flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {result && (
            <p className="text-sm text-center text-white/80 mt-2">
              {result}
            </p>
          )}
        </form>
      </motion.div>

      {/* CONTACT INFO */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 shadow-glow"
      >
        <h3 className="text-2xl font-bold mb-6">Get in touch</h3>

        <div className="space-y-4">
          <div className="rounded-xl bg-black/30 border border-white/10 p-5">
            <FaEnvelope className="text-purple-400 mb-1" />
            <a href="mailto:allenjob96@gmail.com" className="text-white font-medium">
              allenjob96@gmail.com
            </a>
          </div>

          <div className="rounded-xl bg-black/30 border border-white/10 p-5">
            <FaMapMarkerAlt className="text-cyan-400 mb-1" />
            <div className="text-white font-medium">Israel, Tel-Aviv</div>
          </div>

          <div className="rounded-xl bg-black/30 border border-white/10 p-5">
            <FaPhone className="text-green-400 mb-1" />
            <div className="text-white font-medium">+972-547683380</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
