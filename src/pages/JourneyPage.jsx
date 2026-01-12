import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";
import { journey } from "../data/journey";

const JourneyPage = () => {
  const getIcon = (type) => {
    switch (type) {
      case "Skill":
        return <FaCode className="text-green-accent" />;
      case "Project":
        return <FaProjectDiagram className="text-green-accent" />;
      case "Internship":
        return <FaBriefcase className="text-green-accent" />;
      case "Milestone":
        return <FaTrophy className="text-green-accent" />;
      default:
        return <FaCode className="text-green-accent" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">
            My Learning Journey
          </h1>
          <div className="w-24 h-1 bg-green-accent mx-auto mb-6"></div>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            A timeline showcasing my evolution from programming fundamentals to
            advanced AI development, highlighting key milestones and
            technologies learned along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Center Timeline Line - Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate/20 hidden lg:block"></div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate/20 lg:hidden"></div>

          {journey.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                variants={isLeft ? leftItemVariants : rightItemVariants}
                className="relative mb-12 lg:mb-16"
              >
                {/* Desktop Layout - 2 column grid */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 items-start">
                  {/* Left Column */}
                  <div className="lg:pr-8">
                    {isLeft && (
                      <div className="text-right">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-dark-secondary border border-slate/20 rounded-lg p-6 hover:border-green-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-accent/10"
                        >
                          {/* Date & Type */}
                          <div className="flex flex-wrap items-center gap-3 mb-3 justify-end">
                            <span className="text-green-accent font-bold text-lg">
                              {item.date}
                            </span>
                            <div className="flex items-center gap-2 px-3 py-1 bg-dark-bg border border-green-accent/30 rounded-full">
                              {getIcon(item.type)}
                              <span className="text-slate text-sm">
                                {item.type}
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-light-slate mb-3">
                            {item.title}
                          </h3>

                          {/* Technologies */}
                          {item.technologies &&
                            item.technologies.length > 0 && (
                              <div className="flex flex-wrap gap-2 justify-end">
                                {item.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-dark-bg text-green-accent text-sm rounded border border-green-accent/30"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="lg:pl-8">
                    {!isLeft && (
                      <div className="text-left">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-dark-secondary border border-slate/20 rounded-lg p-6 hover:border-green-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-accent/10"
                        >
                          {/* Date & Type */}
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="text-green-accent font-bold text-lg">
                              {item.date}
                            </span>
                            <div className="flex items-center gap-2 px-3 py-1 bg-dark-bg border border-green-accent/30 rounded-full">
                              {getIcon(item.type)}
                              <span className="text-slate text-sm">
                                {item.type}
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-light-slate mb-3">
                            {item.title}
                          </h3>

                          {/* Technologies */}
                          {item.technologies &&
                            item.technologies.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-dark-bg text-green-accent text-sm rounded border border-green-accent/30"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Center Timeline Dot - Desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-8 hidden lg:flex">
                  <div className="w-7 h-7 bg-dark-bg border-4 border-green-accent rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-green-accent rounded-full"></div>
                  </div>
                </div>

                {/* Mobile Timeline */}
                <div className="lg:hidden relative pl-20">
                  {/* Mobile Timeline Dot */}
                  <div className="absolute left-5 top-2 w-7 h-7 bg-dark-bg border-4 border-green-accent rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-green-accent rounded-full"></div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-secondary border border-slate/20 rounded-lg p-6 hover:border-green-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-accent/10"
                  >
                    {/* Date & Type */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-green-accent font-bold text-lg">
                        {item.date}
                      </span>
                      <div className="flex items-center gap-2 px-3 py-1 bg-dark-bg border border-green-accent/30 rounded-full">
                        {getIcon(item.type)}
                        <span className="text-slate text-sm">{item.type}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-light-slate mb-3">
                      {item.title}
                    </h3>

                    {/* Technologies */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-dark-bg text-green-accent text-sm rounded border border-green-accent/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate text-lg">The journey continues... 🚀</p>
        </motion.div>
      </div>
    </div>
  );
};

export default JourneyPage;
