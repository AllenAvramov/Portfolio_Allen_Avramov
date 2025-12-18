import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const certificates = [
    {
        title: "Bachelor's Degree",
        issuer: "Tel Hai College",
        date: "March 2022 - August 2025",
        description: "Computer Science Degree",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
        file: "/certificates/Degree.pdf",
        fileName: "Allen_Avramov_Degree.pdf"
    },
    {
        title: "JavaScript Basics",
        issuer: "Course Completion",
        date: "2024",
        description: "Certificate of Completion for JavaScript Basics",
        hours: "Course completion",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
        file: "/certificates/certificate-of-completion-for-javascript-basics.pdf",
        fileName: "JavaScript_Basics_Certificate.pdf"
    },
    {
        title: "OOP in JavaScript",
        issuer: "Course Completion",
        date: "2024",
        description: "Certificate of Completion for Object-Oriented Programming in JavaScript",
        hours: "Course completion",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
        file: "/certificates/certificate-of-completion-for-object-oriented-programming-in-javascript.pdf",
        fileName: "OOP_JavaScript_Certificate.pdf"
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

export default function CertificatesShowcase() {
    return (
        <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {certificates.map((cert) => (
                <motion.div
                    key={cert.title}
                    variants={item}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10
                     hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                    {/* Certificate Image */}
                    <div className="relative h-64 overflow-hidden bg-white">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="mb-2">
                            <span className="text-xs text-white/60 uppercase tracking-wide">{cert.issuer}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                            {cert.title}
                        </h3>
                        <p className="text-white/70 text-sm mb-3">{cert.description}</p>
                        <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                            <span>{cert.date}</span>
                            {cert.hours && <span>{cert.hours}</span>}
                        </div>

                        {/* Download Button */}
                        {cert.file && (
                            <motion.a
                                href={cert.file}
                                download={cert.fileName || cert.file.split('/').pop()}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg
                           bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-500 hover:to-cyan-500
                           border border-purple-400/30 text-white text-sm font-medium transition-all
                           shadow-lg shadow-purple-500/20"
                            >
                                <FaDownload className="text-xs" />
                                Download PDF
                            </motion.a>
                        )}
                    </div>

                    {/* Glow effect */}
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
            ))}
        </motion.div>
    );
}

