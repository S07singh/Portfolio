import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { journey } from "../data/journey";

// journey dates are "M/YYYY"
const toKey = (date) => {
  const [m, y] = date.split("/").map(Number);
  return y * 100 + m;
};
const monthName = (date) =>
  new Date(Number(date.split("/")[1]), Number(date.split("/")[0]) - 1).toLocaleString("en", { month: "short" });

const JourneyPage = () => {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const sorted = [...journey].sort((a, b) => toKey(b.date) - toKey(a.date));
  const years = sorted.reduce((acc, item) => {
    const year = item.date.split("/")[1];
    (acc[year] ||= []).push(item);
    return acc;
  }, {});
  const yearKeys = Object.keys(years).sort((a, b) => b - a);

  return (
    <div className="min-h-screen pb-24 pt-36">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-ink pb-10"
        >
          <p className="eyebrow mb-6">Changelog · {journey.length} entries</p>
          <h1 className="display text-7xl sm:text-8xl md:text-9xl">
            The <span className="italic text-accent">journey</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            From C and C++ in 2024 to agentic AI today: a log of what I learned and when.
          </p>
        </motion.div>

        <div ref={listRef} className="relative mt-16">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-[calc(25%+7px)]" />
          <motion.div
            className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-accent md:left-[calc(25%+7px)]"
            style={{ scaleY: lineScale }}
          />

          {yearKeys.map((year) => (
            <div key={year} className="relative grid grid-cols-1 md:grid-cols-4">
              <div className="mb-6 pl-10 md:mb-0 md:pl-0">
                <div className="md:sticky md:top-32">
                  <span className="display text-6xl text-ink/80 md:text-8xl">{year}</span>
                </div>
              </div>

              <ol className="pb-16 md:col-span-3">
                {years[year].map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    viewport={{ once: true, margin: "-60px" }}
                    className="group relative pb-10 pl-10"
                  >
                    <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-cream bg-ink ring-1 ring-line transition-colors duration-300 group-hover:bg-accent" />
                    <div className="rounded-2xl border border-transparent p-0 transition-all duration-500 md:-ml-4 md:p-4 md:group-hover:border-line md:group-hover:bg-paper">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="eyebrow">{monthName(item.date)} {year}</span>
                        <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${
                          item.type.toLowerCase() === "milestone" ? "bg-accent text-cream" : "bg-cream-2 text-ink-soft"
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <h2 className="mt-2 font-serif text-3xl leading-tight">{item.title}</h2>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.technologies.map((t) => (
                          <span key={t} className="chip">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyPage;
