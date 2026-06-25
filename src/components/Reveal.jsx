import { motion } from "framer-motion";

/**
 * Reveal — slow fade-up used across all pages for scroll-triggered entry.
 * Keep delays small and consistent so staggered groups feel orchestrated,
 * not scattered.
 */
export default function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
