import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Ink dot + trailing ring. The ring grows over anything clickable and shows a
// label when the hovered element sets data-cursor="View" (or similar).
const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      setHovering(Boolean(target));
      setLabel(target?.dataset.cursor || "");
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = label ? 84 : hovering ? 52 : 30;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-cream mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%", opacity: hidden || label ? 0 : 1 }}
      />
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full font-mono text-[10px] uppercase tracking-widest ${
          label ? "bg-accent text-cream" : "border border-cream mix-blend-difference"
        }`}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", opacity: hidden ? 0 : 1 }}
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {label}
      </motion.div>
    </>
  );
};

export default Cursor;
