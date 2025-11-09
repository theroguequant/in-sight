import { motion } from "framer-motion";

export default function CorporateGradient() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[#0b0c0e]">
      {/* Layer 1 – Subtle radial depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, #111418, transparent 50%),
            radial-gradient(circle at 80% 70%, #0d0e10, transparent 60%)
          `,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 90,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Layer 2 – Gentle motion */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: "linear-gradient(120deg, #0e1013, #131519, #0f1114)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 120,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 70%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Faint noise texture */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, transparent 1px), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
}
