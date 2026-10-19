import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub,
  FaDatabase, FaChartBar, FaChartLine, FaSearch, FaLink, FaProjectDiagram, FaTools,
  FaRobot, FaInfinity, FaEye,
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMysql, SiCplusplus, SiMongodb, SiPandas, SiNumpy,
  SiScikitlearn, SiOpenai, SiFastapi, SiVercel, SiDocker, SiNextdotjs, SiStreamlit,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Generative AI",
    blurb: "Agents, retrieval and orchestration around large language models.",
    skills: [
      { name: "LangChain", icon: FaLink },
      { name: "LangGraph", icon: FaProjectDiagram },
      { name: "LangSmith", icon: FaTools },
      { name: "OpenAI", icon: SiOpenai },
      { name: "Gemini", icon: FaRobot },
      { name: "RAG", icon: FaDatabase },
      { name: "AI Agents", icon: FaRobot },
    ],
  },
  {
    title: "Machine Learning",
    blurb: "Classical ML, time series and computer vision, tuned and evaluated properly.",
    skills: [
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "XGBoost", icon: FaChartLine },
      { name: "YOLOv8", icon: FaEye },
      { name: "OCR", icon: FaSearch },
      { name: "NLP", icon: FaLink },
      { name: "Optuna", icon: FaTools },
    ],
  },
  {
    title: "Data Science",
    blurb: "Exploring, cleaning and explaining data before modelling it.",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib", icon: FaChartLine },
      { name: "Seaborn", icon: FaChartBar },
      { name: "EDA", icon: FaSearch },
      { name: "Power BI", icon: FaChartBar },
    ],
  },
  {
    title: "Backend & APIs",
    blurb: "Serving models and data behind fast, typed APIs.",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    title: "Frontend",
    blurb: "Interfaces that make a model usable by people.",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Deploy & DevOps",
    blurb: "Getting it from my laptop to a URL.",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Hugging Face", icon: FaRobot },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "CI/CD", icon: FaInfinity },
    ],
  },
];

const marqueeItems = ["LangGraph", "RAG", "YOLOv8", "FastAPI", "Scikit-learn", "XGBoost", "LangChain", "Next.js", "Docker", "PaddleOCR", "Pandas", "Hugging Face"];

const Skills = () => {
  const [active, setActive] = useState(0);
  const category = skillCategories[active];

  return (
    <section id="skills" className="relative py-24 md:py-36">
      <div className="mb-24 -rotate-1 overflow-hidden border-y border-ink bg-ink py-5 text-cream">
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 pr-10 font-serif text-4xl italic sm:text-5xl">
              {item}
              <span className="text-2xl not-italic text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-x">
        <SectionHeading index="03" label="Toolkit" title={<>The <span className="italic text-accent">stack</span> I reach for.</>}>
          Pick a discipline to see the tools behind it.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <ul className="border-t border-line lg:col-span-5" role="tablist">
            {skillCategories.map((c, i) => (
              <li key={c.title}>
                <button
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="group flex w-full items-center justify-between border-b border-line py-5 text-left"
                >
                  <span className="flex items-baseline gap-5">
                    <span className={`font-mono text-xs transition-colors ${active === i ? "text-accent" : "text-muted"}`}>0{i + 1}</span>
                    <span
                      className={`font-serif text-3xl transition-all duration-500 sm:text-4xl ${
                        active === i ? "translate-x-2 italic text-ink" : "text-ink/40 group-hover:text-ink/70"
                      }`}
                    >
                      {c.title}
                    </span>
                  </span>
                  <span className={`font-mono text-xs transition-opacity ${active === i ? "opacity-100" : "opacity-0"}`}>
                    {c.skills.length} tools →
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-7">
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-line bg-paper p-8 sm:p-10 lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="eyebrow">{category.title}</p>
                  <p className="mt-3 max-w-md font-serif text-2xl leading-snug">{category.blurb}</p>
                  <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {category.skills.map((s, i) => (
                      <motion.div
                        key={s.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 }}
                        whileHover={{ y: -4 }}
                        className="group flex items-center gap-3 rounded-2xl border border-line bg-cream px-4 py-3 transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream"
                      >
                        <s.icon className="shrink-0 text-accent" size={18} />
                        <span className="text-sm font-medium">{s.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              <span aria-hidden="true" className="display pointer-events-none absolute -bottom-10 -right-2 text-[10rem] text-ink/[0.04]">
                0{active + 1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
