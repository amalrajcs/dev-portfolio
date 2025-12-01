import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden animated-gradient-bg">
      {/* Primary orb */}
      <motion.div
        className="floating-orb w-[600px] h-[600px] -top-48 -left-48"
        style={{ background: "radial-gradient(circle, hsl(185 100% 50% / 0.15), transparent 70%)" }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Accent orb */}
      <motion.div
        className="floating-orb w-[500px] h-[500px] top-1/2 -right-32"
        style={{ background: "radial-gradient(circle, hsl(280 100% 65% / 0.1), transparent 70%)" }}
        animate={{
          x: [0, -50, -100, 0],
          y: [0, -100, 50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Small accent orb */}
      <motion.div
        className="floating-orb w-[300px] h-[300px] bottom-20 left-1/4"
        style={{ background: "radial-gradient(circle, hsl(185 100% 50% / 0.1), transparent 70%)" }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(185 100% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(185 100% 50% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
};

export default AnimatedBackground;
