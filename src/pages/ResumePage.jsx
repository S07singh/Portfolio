import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { site, socialLinks } from "../data/site";

const facts = [
  ["Role", "AI Engineer Intern, Acuron AI"],
  ["Before", "AI Intern, TANSU AI"],
  ["Education", "B.E. AI & Data Science, SPPU · CGPA 9.01"],
  ["Focus", "LLM agents · RAG · Computer vision · ML"],
  ["Location", `${site.location} · open to remote`],
];

const ResumePage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen pb-24 pt-36">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-8 border-b border-ink pb-10 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow mb-6">Curriculum vitae</p>
            <h1 className="display text-7xl sm:text-8xl md:text-9xl">
              Résu<span className="italic text-accent">mé</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/resume.pdf" download="Sudhir_Kumar_Singh_Resume.pdf" className="btn-ink group">
              Download PDF <FaArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-line">
              Open in new tab
            </a>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32">
              <p className="font-serif text-3xl leading-snug">
                {site.name}, an AI engineer who builds agents, vision systems and ML products end to end.
              </p>
              <dl className="mt-10 border-t border-line">
                {facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-4 border-b border-line py-4">
                    <dt className="eyebrow pt-1">{k}</dt>
                    <dd className="col-span-2 text-ink-soft">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-col gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-sm"
                  >
                    <span className="flex items-center gap-3"><s.icon className="text-accent" /> {s.handle}</span>
                    <FaArrowRight className="-rotate-45 text-muted transition-transform group-hover:rotate-0 group-hover:text-ink" size={11} />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <div className="relative rotate-0 rounded-3xl border border-line bg-paper p-3 shadow-[0_40px_80px_-40px_rgba(26,24,20,0.45)] transition-transform duration-700 lg:-rotate-1 lg:hover:rotate-0">
              <div className="relative h-[75vh] min-h-[560px] overflow-hidden rounded-2xl bg-cream-2">
                <iframe
                  src="/resume.pdf#view=FitH"
                  className="h-full w-full"
                  title="Résumé of Sudhir Kumar Singh"
                  onLoad={() => setLoading(false)}
                />
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="eyebrow animate-blink">Loading résumé…</span>
                  </div>
                )}
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-muted">
              PDF not showing on your device?{" "}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link-underline text-ink">
                Open it directly
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
