import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Button from './Button';

const ProjectCard = ({
  image,
  imageAlt,
  icon,
  title,
  description,
  githubUrl,
  liveUrl,
  techStack = [],
  bgGradient
}) => {
  return (
    <div className="card-item card-item-project">
      <div
        className="project-card-image"
        style={bgGradient ? { background: bgGradient } : {}}
      >
        {icon ? (
          <div className="project-icon-wrapper">
            {icon}
          </div>
        ) : image ? (
          <img
            src={image}
            alt={imageAlt || title}
            className="project-image"
          />
        ) : null}
      </div>

      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {techStack.length > 0 && (
          <div className="project-tech-stack">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}

        <div className="project-links">
          {githubUrl && (
            <Button
              variant="project-github"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View code on GitHub"
            >
              <FaGithub size={20} />
              <span>Code</span>
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="project-live"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
            >
              <FaExternalLinkAlt size={18} />
              <span>Live Demo</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;