import React from "react";
import { FaGithub, FaArrowRight, FaYoutube } from "react-icons/fa";
import { getTechIcon } from "../utils/techIcons";
import { getYouTubeVideoId } from "../utils/youtubeHelper";

// Body of the project modal, shared by the home page index and /projects.
const ProjectDetail = ({ project }) => {
  const videoId = getYouTubeVideoId(project.video);

  return (
    <article>
      <p className="eyebrow">{project.date} · {project.tags.join(" / ")}</p>
      <h2 className="display mt-3 pr-12 text-4xl sm:text-5xl">{project.title}</h2>

      <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-cream-2">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            className="aspect-video w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title={project.title}
          />
        ) : (
          <img src={project.thumbnail} alt={project.title} className="aspect-video w-full object-cover" />
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <p className="text-lg leading-relaxed text-ink-soft md:col-span-2">{project.shortDescription}</p>
        <div>
          <p className="eyebrow mb-3">Built with</p>
          <div className="flex flex-wrap gap-2">
            {project.techstack.map((tech) => {
              const { icon: Icon } = getTechIcon(tech);
              return (
                <span key={tech} className="chip">
                  <Icon size={11} className="text-accent" />
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-6">
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-ink group">
            Live demo <FaArrowRight className="-rotate-45 transition-transform group-hover:rotate-0" />
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-line">
            <FaGithub /> Source code
          </a>
        )}
        {project.video && (
          <a href={project.video} target="_blank" rel="noopener noreferrer" className="btn-line">
            <FaYoutube /> Watch on YouTube
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectDetail;
