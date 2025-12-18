import { motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-white">{title}</span>
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">.</span>
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent max-w-[500px] hidden md:block" />
      </motion.div>
      <div>{children}</div>
    </section>
  );
}
  