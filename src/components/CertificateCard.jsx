import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Certificate card that tilts toward the pointer like a physical card.
const CertificateCard = ({ certificate, onClick, index = 0 }) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.7 }}
      viewport={{ once: true, margin: "-40px" }}
      style={{ perspective: 1000 }}
    >
      <motion.button
        data-cursor="View"
        onClick={onClick}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY }}
        className="group block h-full w-full overflow-hidden rounded-3xl border border-line bg-paper text-left transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(26,24,20,0.45)]"
      >
        <div className="relative overflow-hidden border-b border-line bg-cream-2 p-4">
          <img
            src={certificate.thumbnail}
            alt={certificate.title}
            className="aspect-[4/3] w-full rounded-xl object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="eyebrow text-accent">{certificate.issuer}</span>
            <span className="eyebrow">{certificate.issuedOn}</span>
          </div>
          <h3 className="mt-3 font-serif text-2xl leading-tight">{certificate.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{certificate.shortContext}</p>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default CertificateCard;
