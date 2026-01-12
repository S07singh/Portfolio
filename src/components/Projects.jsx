import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaPlay } from "react-icons/fa";
import { projects } from "../data/projects";
import { getTechIcon } from "../utils/techIcons";
import { getYouTubeVideoId, getYouTubeEmbedUrl } from "../utils/youtubeHelper";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get only top 4 featured projects
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-light-slate mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-green-accent mx-auto mb-8"></div>
          <p className="text-lg text-slate max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development, AI/ML integration, and modern web
            technologies.
          </p>
        </motion.div>


        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <motion.div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div 
                  className="relative overflow-hidden rounded-lg bg-dark-tertiary border border-slate/20 hover:border-green-accent/50 transition-all duration-300 cursor-pointer"
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
                transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2">
                  <h3 className="text-2xl font-bold text-light-slate">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-xs bg-green-accent text-dark-bg px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <div className="bg-dark-tertiary p-4 rounded-lg border border-slate/20">
                  <p className="text-slate leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

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



        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 border-2 border-green-accent text-green-accent font-semibold rounded-lg hover:bg-green-accent hover:text-dark-bg transition-all duration-300"
            >
              View All Projects
              <FaArrowRight className="ml-2" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
