import { motion } from "framer-motion";
import { FaDownload, FaCode, FaCertificate, FaGlobe, FaArrowUp } from "react-icons/fa";

const stats = [
    {
        icon: FaCode,
        number: "4+",
        title: "TOTAL PROJECTS",
        description: "Innovative web & mobile solutions crafted",
    },
    {
        icon: FaCertificate,
        number: "3",
        title: "CERTIFICATES",
        description: "Professional skills validated",
    },
    {
        icon: FaGlobe,
        number: "3+",
        title: "YEARS OF EXPERIENCE",
        description: "Continuous learning journey",
    },
];

export default function About() {
    return (
        <section id="about" className="mx-auto max-w-7xl px-4 pt-32 md:pt-40 pb-16 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                        About Me
                    </span>
                </h2>

                <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                    Hello, I'm <span className="font-bold text-white">Allen Avramov</span> — a Computer Science graduate passionate about building smart and scalable web & mobile applications. I've completed a full-stack development course and constantly explore new technologies to refine my skills. Focused on continuous learning, I aim to transition into the IT industry and eventually move towards AI and data science.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <motion.a
                        href="/Allen.pdf"
                        download="Allen_Avramov_CV.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600
                       hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500
                       text-white font-medium transition-all shadow-lg shadow-purple-500/30"
                    >
                        <FaDownload />
                        Download CV
                    </motion.a>

                    <motion.a
                        href="#portfolio"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-white/5 border border-purple-400/30 hover:bg-white/10
                       text-white font-medium transition-all"
                    >
                        <FaCode />
                        View Projects
                    </motion.a>
                </div>
            </motion.div>

            {/* Showcase Cards */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
                className="grid gap-6 md:grid-cols-3"
            >
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 120,
                                damping: 12
                            }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] 
                         border border-white/10 p-6 hover:border-white/20 transition-all duration-300 overflow-hidden"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <Icon className="text-white text-xl" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold text-white">
                                        {stat.number}
                                    </div>
                                </div>

                                <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">
                                    {stat.title}
                                </h3>

                                <p className="text-white/60 text-sm mb-4">
                                    {stat.description}
                                </p>

                                <div className="flex justify-end">
                                    <FaArrowUp className="text-white/40 group-hover:text-white/80 transition-colors rotate-45" />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}

