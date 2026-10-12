import React from "react";
import { motion } from "framer-motion";

// "(02) — Selected work" style heading shared by every section.
const SectionHeading = ({ index, label, title, children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, margin: "-80px" }}
    className={`mb-14 md:mb-20 ${className}`}
  >
    <div className="mb-6 flex items-center gap-4">
      {index && <span className="eyebrow text-accent">({index})</span>}
      <span className="eyebrow">{label}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
    <h2 className="display text-5xl sm:text-6xl md:text-7xl">{title}</h2>
    {children && <p className="mt-6 max-w-2xl text-lg text-ink-soft">{children}</p>}
  </motion.div>
);

export default SectionHeading;
