import { motion } from "framer-motion";

/**
 * BilingualHeading — the site's signature device.
 * Rather than a language toggle, every heading is set as two stacked
 * baselines sharing one serif voice: Mongolian as the large display
 * line, English as a smaller, faded line directly beneath it, joined
 * by a single elevation-style tick mark — a nod to expedition route
 * markers. Order is reversible per-instance via `primary`.
 *
 * mn / en: strings. as: html tag for the wrapper (h1, h2...).
 * size: "display" | "h1" | "h2"
 */
export default function BilingualHeading({
  mn,
  en,
  as: Tag = "h2",
  size = "h2",
  align = "left",
  light = false,
}) {
  const sizeClass = {
    display: "text-display",
    h1: "text-h1",
    h2: "text-h2",
  }[size];

  const subSizeClass = {
    display: "text-h2",
    h1: "text-lede",
    h2: "text-micro",
  }[size];

  return (
    <div
      className={`flex ${align === "center" ? "items-center" : "items-start"} gap-4 sm:gap-5`}
    >
      <span
        aria-hidden
        className={`mt-[0.4em] h-[1.6em] w-px shrink-0 ${
          light ? "bg-ink-line" : "bg-line"
        }`}
      />
      <div>
        <Tag
          className={`${sizeClass} font-serif font-medium tracking-[-0.01em] ${
            light ? "text-paper" : "text-ink"
          }`}
        >
          {mn}
        </Tag>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`${subSizeClass} mt-1 font-serif italic ${
            light ? "text-paper/55" : "text-earth/80"
          }`}
        >
          {en}
        </motion.p>
      </div>
    </div>
  );
}
