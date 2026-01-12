import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaRobot } from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: "Full-Stack Development",
      description:
        "Building seamless and scalable web applications using the MERN stack.",
    },
    {
      icon: FaBrain,
      title: "AI Agent Development",
      description:
        "Creating intelligent agents using LangChain, LangGraph, and LangSmith for dynamic automation.",
    },
    {
      icon: FaRobot,
      title: "Machine Learning & Data Analysis",
      description:
        "Skilled in Pandas, NumPy, Matplotlib, and scikit-learn for AI-driven insights.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-light-slate mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-green-accent mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate leading-relaxed">
              Hello! I'm Sudhir Kumar Singh, a passionate Full-Stack Developer
              and AI & Data Science enthusiast pursuing my engineering degree at
              DYPIEMR. I build intelligent web applications that merge modern
              web technologies with AI frameworks like LangChain, LangGraph, and
              LangSmith to develop context-aware agents.
            </p>

            <p className="text-lg text-slate leading-relaxed">
              My journey in tech began with curiosity about how intelligent
              systems think, leading me to explore web development and
              data-driven AI solutions. I’m proficient with Pandas, NumPy,
              Matplotlib, and scikit-learn, helping me analyze data and develop
              models that power smarter, real-world applications.
            </p>

            <p className="text-lg text-slate leading-relaxed">
              Beyond coding, I love exploring AI research, experimenting with
              agentic systems, and contributing to open-source projects that
              fuse creativity with technology.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-light-slate mb-4">
                Technologies I've been working with recently:
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "Python",
                  "MongoDB",
                  "LangChain",
                  "LangGraph",
                  "LangSmith",
                  "scikit-learn",
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center text-slate"
                  >
                    <span className="text-green-accent mr-2">▹</span>
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="bg-dark-tertiary p-6 rounded-lg border border-slate/20 hover:border-green-accent/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-green-accent text-2xl">
                    <highlight.icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-light-slate mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-slate">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center"
            >
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-green-accent/20 to-transparent rounded-lg flex items-center justify-center border-2 border-green-accent/30 overflow-hidden">
                  <img
                    src="/images/sudhir.jpg"
                    alt="Sudhir Kumar Singh"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border-2 border-green-accent/20 rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
