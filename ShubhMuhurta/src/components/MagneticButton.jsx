import { motion } from "framer-motion";

export default function MagneticButton({ children, className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-yellow-300 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}