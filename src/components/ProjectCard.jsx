import { FaGithub } from 'react-icons/fa';
import Button from './Button';

const ProjectCard = ({
  image,
  imageAlt,
  icon,
  title,
  description,
  githubUrl,
  techStack = [],
  bgGradient
}) => {
  // Check for mobile view
  const isMobile = window.innerWidth <= 768

  const cardItemProjectStyle = {
    background: 'rgba(40, 40, 50, 0.8)',
    border: '1px solid var(--orange-alpha-15)',
    width: '300px',
    maxWidth: isMobile ? '100%' : '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    overflow: 'hidden',
    height: isMobile ? '570px' : '600px',
    borderRadius: 'var(--border-radius-large)',
    transition: 'all var(--transition-standard)',
    cursor: 'pointer'
  }

  const projectCardImageStyle = {
    height: '200px',
    background: bgGradient || 'linear-gradient(135deg, var(--border-orange) 0%, rgba(255, 193, 7, 0.1) 50%, var(--orange-alpha-05) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0
  }

  const projectImageStyle = {
    maxWidth: '80%',
    maxHeight: '80%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
  }

  const projectIconWrapperStyle = {
    color: 'var(--primary-orange)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'pulse 2s ease-in-out infinite',
    filter: 'drop-shadow(0 0 20px var(--orange-alpha-40))'
  }

  const projectIconSvgStyle = {
    transition: 'transform 0.3s ease'
  }

  const combinedIconStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const botOverlayStyle = {
    position: 'absolute',
    bottom: '-5px',
    right: '-5px',
    opacity: 0.8
  }

  const projectCardContentStyle = {
    padding: '15px 10px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }

  const projectTitleStyle = {
    color: '#ff9933',
    fontSize: '1.1rem',
    margin: '0 0 25px 0',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 1.3
  }

  const projectDescriptionStyle = {
    color: 'var(--text-light)',
    opacity: 0.85,
    lineHeight: 1.4
  }

  const projectTechStackStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    margin: '15px 0',
    alignContent: 'flex-start'
  }

  const techTagStyle = {
    background: 'var(--border-orange)',
    color: 'var(--primary-orange)',
    padding: '4px 12px',
    borderRadius: '15px',
    fontSize: '0.75rem',
    border: '1px solid var(--orange-alpha-20)'
  }

  const projectLinksStyle = {
    display: 'flex',
    gap: '15px',
    marginTop: 'auto',
    paddingTop: '15px',
    justifyContent: 'center'
  }

  return (
    <div
      className="card-item"
      style={cardItemProjectStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 10px 30px var(--orange-alpha-20)'
        e.currentTarget.style.borderColor = 'var(--border-orange-hover)'

        const svgElement = e.currentTarget.querySelector('svg')
        if (svgElement) {
          svgElement.style.transform = 'scale(1.1) rotate(5deg)'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = ''
        e.currentTarget.style.borderColor = 'var(--orange-alpha-15)'

        const svgElement = e.currentTarget.querySelector('svg')
        if (svgElement) {
          svgElement.style.transform = ''
        }
      }}
    >
      <div style={projectCardImageStyle}>
        {icon ? (
          <div style={projectIconWrapperStyle}>
            <div style={combinedIconStyle}>
              <div style={projectIconSvgStyle}>
                {icon}
              </div>
            </div>
          </div>
        ) : image ? (
          <img
            src={image}
            alt={imageAlt || title}
            style={projectImageStyle}
          />
        ) : null}
      </div>

      <div style={projectCardContentStyle}>
        <h3 style={projectTitleStyle}>{title}</h3>
        <p style={projectDescriptionStyle}>{description}</p>

        {techStack.length > 0 && (
          <div style={projectTechStackStyle}>
            {techStack.map((tech, index) => (
              <span key={index} style={techTagStyle}>{tech}</span>
            ))}
          </div>
        )}

        <div style={projectLinksStyle}>
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
        </div>
      </div>
    </div>
  );
};

export default ProjectCard