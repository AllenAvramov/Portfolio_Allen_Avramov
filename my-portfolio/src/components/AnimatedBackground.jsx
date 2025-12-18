import { motion } from "framer-motion";

export default function AnimatedBackground() {
    // Create multiple animated orbs with different colors and movements
    const orbs = [
        {
            color: "purple",
            size: 650,
            blur: 85,
            left: "10%",
            top: "10%",
            animateX: [0, 400, -300, 0],
            animateY: [0, 300, -400, 0],
            duration: 20,
            delay: 0,
        },
        {
            color: "cyan",
            size: 680,
            blur: 90,
            left: "80%",
            top: "20%",
            animateX: [0, -500, 400, 0],
            animateY: [0, -300, 200, 0],
            duration: 25,
            delay: 2,
        },
        {
            color: "fuchsia",
            size: 720,
            blur: 95,
            left: "50%",
            top: "70%",
            animateX: [0, 300, -400, 0],
            animateY: [0, -400, 300, 0],
            duration: 30,
            delay: 4,
        },
        {
            color: "blue",
            size: 600,
            blur: 85,
            left: "20%",
            top: "60%",
            animateX: [0, 450, -350, 0],
            animateY: [0, -350, 400, 0],
            duration: 22,
            delay: 1,
        },
        {
            color: "pink",
            size: 630,
            blur: 88,
            left: "70%",
            top: "80%",
            animateX: [0, -400, 500, 0],
            animateY: [0, 350, -300, 0],
            duration: 28,
            delay: 3,
        },
        {
            color: "indigo",
            size: 660,
            blur: 90,
            left: "30%",
            top: "30%",
            animateX: [0, 350, -450, 0],
            animateY: [0, 450, -350, 0],
            duration: 24,
            delay: 5,
        },
    ];

    const getColorClass = (color) => {
        const colors = {
            purple: "bg-purple-500/35",
            cyan: "bg-cyan-400/30",
            fuchsia: "bg-fuchsia-500/28",
            blue: "bg-blue-400/30",
            pink: "bg-pink-500/32",
            indigo: "bg-indigo-400/28",
        };
        return colors[color] || colors.purple;
    };

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
            {/* Grid pattern overlay - smaller squares */}
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />

            {/* Animated orbs */}
            {orbs.map((orb, index) => (
                <motion.div
                    key={index}
                    className={`absolute rounded-full ${getColorClass(orb.color)}`}
                    style={{
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        filter: `blur(${orb.blur}px)`,
                        left: orb.left,
                        top: orb.top,
                        transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                        x: orb.animateX,
                        y: orb.animateY,
                        scale: [1, 1.2, 0.9, 1],
                        opacity: [0.4, 0.55, 0.45, 0.4],
                    }}
                    transition={{
                        x: {
                            duration: orb.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: orb.delay,
                        },
                        y: {
                            duration: orb.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: orb.delay,
                        },
                        scale: {
                            duration: orb.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: orb.delay,
                        },
                        opacity: {
                            duration: orb.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: orb.delay,
                        },
                    }}
                />
            ))}

            {/* Additional smaller floating orbs */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`small-${i}`}
                    className="absolute rounded-full bg-gradient-to-r from-purple-400/25 to-cyan-400/25"
                    style={{
                        width: `${250 + i * 60}px`,
                        height: `${250 + i * 60}px`,
                        filter: `blur(${65 + i * 10}px)`,
                        left: `${20 + i * 25}%`,
                        top: `${30 + i * 15}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                        x: [0, 120, -120, 0],
                        y: [0, -100, 150, 0],
                        scale: [1, 1.25, 0.85, 1],
                        opacity: [0.3, 0.45, 0.35, 0.3],
                    }}
                    transition={{
                        duration: 15 + i * 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 2,
                    }}
                />
            ))}
        </div>
    );
}
