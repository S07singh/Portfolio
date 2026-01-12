import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaPlay } from 'react-icons/fa';
import { projects } from '../data/projects';
import { getTechIcon } from '../utils/techIcons';
import { getYouTubeVideoId, getYouTubeEmbedUrl } from '../utils/youtubeHelper';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = ['All', 'Featured', 'AI', 'LangGraph', 'LangChain', 'Full Stack'];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return project.featured;
    return project.tags.includes(filter);
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">
            All Projects
          </h1>
          <div className="w-24 h-1 bg-green-accent mx-auto mb-6"></div>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Explore my complete portfolio of projects spanning full-stack development, AI/ML applications, and modern web technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <FaFilter className="text-green-accent" />
          {filters.map((filterName) => (
            <motion.button
              key={filterName}
              onClick={() => setFilter(filterName)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === filterName
                  ? 'bg-green-accent text-dark-bg'
                  : 'bg-dark-secondary text-slate border border-slate/20 hover:border-green-accent/50'
              }`}
            >
              {filterName}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects List with Alternating Layout */}
        <div className="space-y-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image/Video */}
              <motion.div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div 
                  className="relative overflow-hidden rounded-lg bg-dark-tertiary border border-slate/20 hover:border-green-accent/50 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => {
                    if (project.video) {
                      window.open(project.video, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  {/* Thumbnail - Always visible */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={`w-full h-full object-cover aspect-video transition-opacity duration-500 ${
                      hoveredProject === project.id && project.video ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'
                    }`}
                  />

                  {/* YouTube Video - Shows on hover if video exists */}
                  {project.video && hoveredProject === project.id && (
                    <div className="absolute inset-0">
                      <iframe
                        src={getYouTubeEmbedUrl(getYouTubeVideoId(project.video))}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={project.title}
                      />
                    </div>
                  )}

                  {project.featured && (
                    <span className="absolute top-3 right-3 px-3 py-1.5 bg-green-accent text-dark-bg text-xs font-bold rounded z-10">
                      Featured
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                className={`space-y-4 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2">
                  <h3 className="text-2xl font-bold text-light-slate">
                    {project.title}
                  </h3>
                </div>

                <div className="bg-dark-tertiary p-4 rounded-lg border border-slate/20">
                  <p className="text-slate leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack with Icons */}
                <div className="flex flex-wrap gap-2">
                  {project.techstack.slice(0, 5).map((tech) => {
                    const techInfo = getTechIcon(tech);
                    const IconComponent = techInfo.icon;
                    return (
                      <div
                        key={tech}
                        className="flex items-center space-x-2 bg-dark-bg px-3 py-1 rounded-full border border-slate/20"
                      >
                        <IconComponent size={16} style={{ color: techInfo.color }} />
                        <span className="text-sm text-slate">{tech}</span>
                      </div>
                    );
                  })}
                  {project.techstack.length > 5 && (
                    <div className="flex items-center bg-dark-bg px-3 py-1 rounded-full border border-slate/20">
                      <span className="text-sm text-slate">
                        +{project.techstack.length - 5}
                      </span>
                    </div>
                  )}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-green-accent hover:text-green-accent/80 transition-colors duration-300"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-green-accent hover:text-green-accent/80 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate text-lg">No projects found for this filter.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
