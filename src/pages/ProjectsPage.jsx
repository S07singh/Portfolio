import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Modal from '../components/Modal';
import ProjectDetail from '../components/ProjectDetail';
import { projects } from '../data/projects';

const hasTag = (...tags) => (p) => p.tags.some((t) => tags.includes(t));

const filters = [
  { name: 'All', test: () => true },
  { name: 'Featured', test: (p) => p.featured },
  { name: 'Generative AI', test: hasTag('AI', 'LangGraph', 'LangChain') },
  { name: 'Machine Learning', test: hasTag('Machine Learning', 'Time Series', 'Computer Vision') },
  { name: 'Data Analytics', test: hasTag('Data Analytics', 'Data Science', 'Analytics') },
  { name: 'Full Stack', test: hasTag('Full Stack', 'Frontend') },
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const active = filters.find((f) => f.name === filter);
  const filteredProjects = projects.filter(active.test);

  return (
    <div className="min-h-screen pb-24 pt-36">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-ink pb-10"
        >
          <p className="eyebrow mb-6">Archive · {projects.length} projects</p>
          <h1 className="display text-7xl sm:text-8xl md:text-9xl">
            All <span className="italic text-accent">work</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Everything from LLM agents and computer vision to dashboards and full-stack apps, newest first.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 py-8" role="tablist">
          {filters.map((f) => {
            const count = projects.filter(f.test).length;
            return (
              <button
                key={f.name}
                role="tab"
                aria-selected={filter === f.name}
                onClick={() => setFilter(f.name)}
                className={`relative rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                  filter === f.name ? 'border-ink text-cream' : 'border-line text-ink-soft hover:border-ink hover:text-ink'
                }`}
              >
                {filter === f.name && (
                  <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
                <span className="relative">
                  {f.name} <sup className="font-mono text-[10px] opacity-60">{count}</sup>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.button
                layout
                key={project.id}
                data-cursor="Open"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.04 }}
                onClick={() => setSelected(project)}
                className={`group text-left ${i % 2 === 1 ? 'md:mt-20' : ''}`}
              >
                <div className="relative overflow-hidden rounded-3xl border border-line bg-cream-2">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {project.techstack.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full bg-paper/90 px-3 py-1 text-xs backdrop-blur">{t}</span>
                    ))}
                  </div>
                  {project.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cream">
                      Featured
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow">{project.date} · {project.tags[0]}</p>
                    <h2 className="mt-2 font-serif text-3xl leading-tight transition-colors duration-300 group-hover:text-accent">
                      {project.title.trim()}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-ink-soft">{project.shortDescription}</p>
                  </div>
                  <span className="mt-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-cream">
                    <FaArrowRight className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" size={12} />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Modal isOpen={selected !== null} onClose={() => setSelected(null)}>
        {selected && <ProjectDetail project={selected} />}
      </Modal>
    </div>
  );
};

export default ProjectsPage;
