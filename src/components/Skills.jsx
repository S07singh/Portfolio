import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaChartBar,
  FaChartLine,
  FaSearch,
  FaLink,
  FaProjectDiagram,
  FaTools,
  FaRobot,
  FaInfinity,
  FaKey,
  FaRocket,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiCplusplus,
  SiCsharp,
  SiMongodb,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpenai,
  SiFastapi,
  SiVercel,
  SiNetlify,
  SiDocker
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science",
      skills: [
        { name: "Pandas", icon: SiPandas, color: "#150458" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "Matplotlib", icon: FaChartLine, color: "#11557C" },
        { name: "Seaborn", icon: FaChartBar, color: "#4E79A7" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        { name: "EDA", icon: FaSearch, color: "#22C55E" },
      ],
    },
    {
      title: "GenAI",
      skills: [
        { name: "LangChain", icon: FaLink, color: "#22C55E" },
        { name: "LangGraph", icon: FaProjectDiagram, color: "#3B82F6" },
        { name: "LangSmith", icon: FaTools, color: "#A855F7" },
        { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
        { name: "Gemini", icon: FaRobot, color: "#007396" },
        { name: "AI Agents", icon: FaRobot, color: "#EF4444" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "C#", icon: SiCsharp, color: "#239120" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#181717" },
        { name: "REST APIs", icon: FaDatabase, color: "#FF6B6B" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" }
      ],
    },
    {
      title: "Deployment & DevOps",
      skills: [
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "CI/CD", icon: FaInfinity, color: "#22C55E" },
        { name: "Env Management", icon: FaKey, color: "#F59E0B" },
        { name: "Prod Optimization", icon: FaRocket, color: "#EF4444" },
      ],
    }
    
  ];

  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-light-slate mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-green-accent mx-auto mb-8"></div>
          <p className="text-lg text-slate max-w-3xl mx-auto">
            Here are the technologies and tools I've been working with recently.
            I'm always eager to learn new technologies and expand my skill set.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-dark-secondary rounded-lg p-6 border border-slate/20 hover:border-green-accent/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-light-slate mb-6 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="flex flex-col items-center p-4 bg-dark-tertiary rounded-lg hover:bg-dark-tertiary/80 transition-all duration-300 group"
                  >
                    <div
                      className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: skill.color }}
                    >
                      <skill.icon />
                    </div>
                    <span className="text-sm font-medium text-light-slate text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
