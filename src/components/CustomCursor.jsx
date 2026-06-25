import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor
 * A minimal dot that rides a tight spring to the pointer, plus a
 * looser-trailing ring that expands and blends over images/links.
 * Elements opt in with data-cursor="media" | "link" | "text".
 * Hidden automatically on touch devices.
 */
export default function CustomCursor() {
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const ringX = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.4 });
  const ringY = useSpring(my, { stiffness: 260, damping: 28, mass: 0.4 });
  const dotX = useSpring(mx, { stiffness: 900, damping: 40, mass: 0.2 });
  const dotY = useSpring(my, { stiffness: 900, damping: 40, mass: 0.2 });

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    document.body.classList.add("has-custom-cursor");

    const move = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    const over = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (!target) {
        setVariant("default");
        setLabel("");
        return;
      }
      setVariant(target.dataset.cursor);
      setLabel(target.dataset.cursorText || "");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [mx, my]);

  if (!enabled) return null;

  const sizes = {
    default: 10,
    link: 64,
    media: 88,
    text: 96,
  };
  const size = sizes[variant] ?? sizes.default;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: variant === "default" ? "transparent" : "#F7F4EC",
          border: variant === "default" ? "1.5px solid #1C1B19" : "none",
        }}
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        {label && (
          <span className="flex h-full w-full items-center justify-center font-utility text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
            {label}
          </span>
        )}
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[5px] w-[5px] rounded-full bg-ink"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
