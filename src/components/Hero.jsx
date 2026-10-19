import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import NeuralCanvas from "./NeuralCanvas";
import Magnetic from "./Magnetic";
import { site, socialLinks } from "../data/site";

const roles = ["AI Engineer", "LLM Agent Builder", "ML Engineer", "Vision Systems Dev"];
const ease = [0.22, 1, 0.36, 1];

const useLocalTime = (timeZone) => {
  const format = () =>
    new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const RevealLine = ({ children, delay = 0, className = "" }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const time = useLocalTime(site.timezone);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  // Portrait tilts toward the pointer
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });
  const onPortraitMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onPortraitLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28">
      <div className="absolute inset-0">
        <NeuralCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#F3EDE2_85%)]" />
      </div>

      <div className="container-x relative flex flex-1 flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <span className="chip">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
            </span>
            AI Engineer Intern @ Acuron AI
          </span>
          <span className="eyebrow hidden sm:block">
            {site.location} · <span className="tabular-nums text-ink">{time}</span> IST
          </span>
        </motion.div>

        <div className="grid flex-1 grid-cols-1 items-center gap-12 py-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="display text-[15vw] sm:text-[12vw] lg:text-[8.5rem] xl:text-[9.5rem]">
              <RevealLine delay={0.1}>Sudhir Kumar</RevealLine>
              <RevealLine delay={0.2}>
                Singh<span className="text-accent">.</span>
              </RevealLine>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease }}
              className="mt-6 flex items-center gap-3 font-serif text-3xl sm:text-4xl"
            >
              <span className="h-px w-10 bg-ink sm:w-16" />
              <span className="relative inline-flex h-[1.25em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="italic text-accent"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              AI &amp; Data Science engineering student at DYPIEMR. I build agentic LLM apps with LangChain and LangGraph,
              computer-vision pipelines with YOLO, and ML models that ship as real products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <Link to="/projects" className="btn-ink group">
                  See my work
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link to="/resume" className="btn-line">Read résumé</Link>
              </Magnetic>
              <div className="ml-2 flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-ink-soft transition-colors duration-300 hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease }}
            className="relative mx-auto w-full max-w-[300px] lg:col-span-4 lg:max-w-[340px]"
            style={{ perspective: 900 }}
          >
            <motion.div
              onMouseMove={onPortraitMove}
              onMouseLeave={onPortraitLeave}
              style={{ rotateX, rotateY }}
              className="relative"
            >
              <div className="overflow-hidden rounded-t-full border border-line bg-cream-2 p-2 shadow-[0_30px_60px_-25px_rgba(26,24,20,0.45)]">
                <img
                  src="/images/sudhir.jpg"
                  alt="Portrait of Sudhir Kumar Singh"
                  className="aspect-[3/4] w-full rounded-t-full object-cover grayscale-[25%] sepia-[15%] transition-all duration-700 hover:grayscale-0 hover:sepia-0"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 h-28 w-28 sm:-left-12">
                <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
                  <defs>
                    <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                  </defs>
                  <circle cx="50" cy="50" r="49" fill="#1A1814" />
                  <text fill="#F3EDE2" fontSize="9.5" fontFamily="JetBrains Mono" letterSpacing="2.4">
                    <textPath href="#circle">AI ENGINEER • BUILDER • LEARNER •</textPath>
                  </text>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-serif text-3xl italic text-accent">✦</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="eyebrow mb-8 inline-flex items-center gap-3 self-start hover:text-ink"
        >
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <FaArrowDown />
          </motion.span>
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
