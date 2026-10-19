import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Modal from "./Modal";
import ProjectDetail from "./ProjectDetail";
import Magnetic from "./Magnetic";
import { projects } from "../data/projects";

const yearOf = (date) => date.split(" ").pop();

const Projects = () => {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  // Floating preview follows the pointer across the list (desktop only)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 26 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 26 });
  const onMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <section id="projects" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading index="04" label="Selected work" title={<>Things I&apos;ve <span className="italic text-accent">built</span>.</>}>
          A few projects across LLM agents, computer vision and machine learning. Open one for the full story.
        </SectionHeading>

        <ul className="border-t border-ink" onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
          {featured.map((project, i) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <button
                data-cursor="Open"
                onMouseEnter={() => setHovered(project)}
                onClick={() => setSelected(project)}
                className="group relative grid w-full grid-cols-12 items-center gap-4 border-b border-line py-7 text-left md:py-9"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
                <span className="relative col-span-2 font-mono text-xs text-muted transition-colors duration-300 group-hover:text-accent md:col-span-1 md:pl-4">
                  0{i + 1}
                </span>
                <span className="relative col-span-10 md:col-span-6">
                  <span className="block font-serif text-2xl leading-tight transition-all duration-500 group-hover:translate-x-3 group-hover:italic group-hover:text-cream sm:text-4xl">
                    {project.title.trim()}
                  </span>
                  <img
                    src={project.thumbnail}
                    alt=""
                    className="mt-4 aspect-video w-full rounded-xl border border-line object-cover md:hidden"
                  />
                </span>
                <span className="relative col-span-8 col-start-3 flex flex-wrap gap-2 md:col-span-3 md:col-start-auto">
                  {project.tags.slice(0, 2).map((t) => (
                    <span key={t} className="chip transition-colors duration-300 group-hover:border-cream/30 group-hover:bg-transparent group-hover:text-cream/80">
                      {t}
                    </span>
                  ))}
                </span>
                <span className="relative col-span-2 flex items-center justify-end gap-3 font-mono text-xs text-muted transition-colors duration-300 group-hover:text-cream md:pr-4">
                  {yearOf(project.date)}
                  <FaArrowRight className="-rotate-45 transition-transform duration-500 group-hover:rotate-0 group-hover:text-accent" />
                </span>
              </button>
            </motion.li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <Magnetic>
            <Link to="/projects" className="btn-line group !px-8 !py-4">
              View all {projects.length} projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </div>
      </div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
        style={{ x, y }}
      >
        <div className="absolute bottom-8 left-0 aspect-video w-80 -translate-x-1/2">
          <AnimatePresence>
            {hovered && (
              <motion.div
                key={hovered.id}
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-hidden rounded-2xl border-4 border-paper shadow-2xl"
              >
                <img src={hovered.thumbnail} alt="" className="h-full w-full object-cover" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <Modal isOpen={selected !== null} onClose={() => setSelected(null)}>
        {selected && <ProjectDetail project={selected} />}
      </Modal>
    </section>
  );
};

export default Projects;
