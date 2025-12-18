import { motion } from "framer-motion";

export default function AnimatedBackground() {
    // Create multiple animated orbs with different colors and movements
    const orbs = [
        {
            color: "purple",
            size: 600,
            blur: 100,
            left: "10%",
            top: "10%",
            animateX: [0, 300, -200, 0],
            animateY: [0, 200, -300, 0],
            duration: 20,
            delay: 0,
        },
        {
            color: "cyan",
            size: 640,
            blur: 120,
            left: "80%",
            top: "20%",
            animateX: [0, -400, 300, 0],
            animateY: [0, -200, 150, 0],
            duration: 25,
            delay: 2,
        },
        {
            color: "fuchsia",
            size: 680,
            blur: 130,
            left: "50%",
            top: "70%",
            animateX: [0, 200, -300, 0],
            animateY: [0, -300, 200, 0],
            duration: 30,
            delay: 4,
        },
        {
            color: "blue",
            size: 500,
            blur: 100,
            left: "20%",
            top: "60%",
            animateX: [0, 350, -250, 0],
            animateY: [0, -250, 300, 0],
            duration: 22,
            delay: 1,
        },
        {
            color: "pink",
            size: 550,
            blur: 110,
            left: "70%",
            top: "80%",
            animateX: [0, -300, 400, 0],
            animateY: [0, 250, -200, 0],
            duration: 28,
            delay: 3,
        },
        {
            color: "indigo",
            size: 520,
            blur: 105,
            left: "30%",
            top: "30%",
            animateX: [0, 250, -350, 0],
            animateY: [0, 350, -250, 0],
            duration: 24,
            delay: 5,
        },
    ];

    const getColorClass = (color) => {
        const colors = {
            purple: "bg-purple-600/30",
            cyan: "bg-cyan-500/25",
            fuchsia: "bg-fuchsia-500/20",
            blue: "bg-blue-500/20",
            pink: "bg-pink-500/25",
            indigo: "bg-indigo-500/20",
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
                        scale: [1, 1.2, 0.8, 1],
                        opacity: [0.3, 0.5, 0.4, 0.3],
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
                    className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-cyan-400/20"
                    style={{
                        width: `${200 + i * 50}px`,
                        height: `${200 + i * 50}px`,
                        filter: `blur(${60 + i * 10}px)`,
                        left: `${20 + i * 25}%`,
                        top: `${30 + i * 15}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                        x: [0, 100, -100, 0],
                        y: [0, -80, 120, 0],
                        scale: [1, 1.3, 0.7, 1],
                        opacity: [0.2, 0.4, 0.3, 0.2],
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
