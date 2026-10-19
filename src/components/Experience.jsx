import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

const ease = [0.22, 1, 0.36, 1];
// Literal class names so Tailwind keeps them
const metricCols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4" };

const Experience = () => {
  // Current role starts open; each card toggles independently
  const [open, setOpen] = useState(() => new Set(experience.filter((e) => e.current).map((e) => e.id)));

  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <section id="experience" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading index="02" label="Experience" title={<>Where I&apos;ve <span className="italic text-accent">shipped</span>.</>}>
          Two AI internships at startups, building systems that run in production.
        </SectionHeading>

        <ol className="border-t border-ink">
          {experience.map((job, i) => {
            const isOpen = open.has(job.id);
            return (
              <motion.li
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.7, ease }}
                viewport={{ once: true, margin: "-60px" }}
                className="border-b border-line"
              >
                <button
                  onClick={() => toggle(job.id)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-12 items-start gap-4 py-8 text-left md:py-10"
                >
                  <span className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-3 md:pt-3">
                    <span className="eyebrow !text-ink">{job.start} — {job.end}</span>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-sage">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
                        Now
                      </span>
                    )}
                  </span>
                  <span className="col-span-10 md:col-span-8">
                    <span className="block font-serif text-4xl leading-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">
                      {job.role}
                    </span>
                    <span className="mt-2 flex flex-wrap items-center gap-2 text-ink-soft">
                      <span className="font-medium text-accent">{job.company}</span>
                      <span className="text-line">/</span>
                      <span className="eyebrow">{job.type}</span>
                    </span>
                  </span>
                  <span className="col-span-2 flex justify-end md:col-span-1 md:pt-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border border-ink transition-all duration-500 ${
                        isOpen ? "rotate-45 bg-ink text-cream" : "group-hover:bg-ink group-hover:text-cream"
                      }`}
                    >
                      <FaPlus size={12} />
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-4 pb-12">
                        <div className="col-span-12 md:col-span-8 md:col-start-4">
                          <div className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line ${metricCols[job.metrics.length] || "sm:grid-cols-3"}`}>
                            {job.metrics.map((m, mi) => (
                              <div
                                key={m.label}
                                className={`bg-paper p-5 ${job.metrics.length % 2 && mi === job.metrics.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
                              >
                                <div className="font-serif text-3xl text-ink">{m.value}</div>
                                <div className="eyebrow mt-1">{m.label}</div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-10 space-y-10">
                            {job.projects.map((p) => (
                              <div key={p.name}>
                                <h3 className="font-serif text-2xl italic">{p.name}</h3>
                                <ul className="mt-4 space-y-3">
                                  {p.points.map((point) => (
                                    <li key={point} className="flex gap-4 leading-relaxed text-ink-soft">
                                      <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          <div className="mt-10 flex flex-wrap gap-2">
                            {job.stack.map((t) => (
                              <span key={t} className="chip">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
