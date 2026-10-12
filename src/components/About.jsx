import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
import { certificates } from "../data/certificates";

const focusAreas = [
  {
    title: "Agentic AI & LLM apps",
    body: "Multi-step agents and RAG pipelines with LangChain, LangGraph and LangSmith, served through FastAPI.",
  },
  {
    title: "Computer vision & ML",
    body: "YOLOv8 detection, OCR, and classical ML: feature engineering, Optuna tuning and honest evaluation.",
  },
  {
    title: "Shipping end to end",
    body: "React / Next.js front ends, Docker, and deploys on Vercel and Hugging Face so models leave the notebook.",
  },
];

const Counter = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    { value: projects.length, suffix: "", label: "Projects built" },
    { value: projects.filter((p) => p.tags.some((t) => ["AI", "Machine Learning", "Computer Vision"].includes(t))).length, suffix: "", label: "AI / ML projects" },
    { value: certificates.length, suffix: "", label: "Certifications" },
    { value: 30, suffix: "+", label: "Tools in the kit" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading index="01" label="About" title={<>A builder who likes <span className="italic text-accent">thinking</span> machines.</>} />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7"
          >
            <p className="font-serif text-3xl leading-snug text-ink">
              I&apos;m Sudhir, an AI &amp; Data Science engineering student in Pune who turns models into things people can actually use.
            </p>
            <p>
              My path started with C++, the web and a lot of curiosity about how intelligent systems reason. That led
              me from MERN apps and hackathons into data science, and then into generative AI, where I now spend most of my time
              building agents, retrieval pipelines and vision systems.
            </p>
            <p>
              I care about the whole loop: clean data, a model that&apos;s honestly evaluated, an API around it, and an interface
              that makes it useful. Outside of shipping, I read AI research and experiment with agent architectures.
            </p>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line pt-0 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-paper p-5">
                  <div className="display text-5xl text-ink">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="eyebrow mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">What I focus on</p>
            <ul className="border-t border-line">
              {focusAreas.map((f, i) => (
                <motion.li
                  key={f.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  viewport={{ once: true }}
                  className="group border-b border-line py-6"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <div>
                      <h3 className="font-serif text-2xl transition-transform duration-500 group-hover:translate-x-2">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-base text-ink-soft">{f.body}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
