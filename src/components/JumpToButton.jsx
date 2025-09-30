import { useState, useEffect } from 'react';

function JumpToButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerStyle = {
    display: isMobile ? 'none' : 'flex',
    gap: '12px',
    alignItems: 'center',
    position: 'absolute',
    right: 'var(--padding-section)',
    top: '50%',
    transform: 'translateY(-50%)'
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    color: 'var(--text-light)',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    whiteSpace: 'nowrap',
    textDecoration: 'none'
  };

  const buttonHoverStyle = {
    color: 'var(--primary-orange)'
  };

  return (
    <nav style={containerStyle}>
      <button
        style={buttonStyle}
        onClick={() => scrollToSection('about-section')}
        onMouseEnter={(e) => {
          Object.assign(e.target.style, buttonHoverStyle);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.target.style, buttonStyle);
        }}
      >
        About
      </button>
      <button
        style={buttonStyle}
        onClick={() => scrollToSection('tech')}
        onMouseEnter={(e) => {
          Object.assign(e.target.style, buttonHoverStyle);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.target.style, buttonStyle);
        }}
      >
        Skills
      </button>
      <button
        style={buttonStyle}
        onClick={() => scrollToSection('projects-section')}
        onMouseEnter={(e) => {
          Object.assign(e.target.style, buttonHoverStyle);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.target.style, buttonStyle);
        }}
      >
        Projects
      </button>
    </nav>
  );
}

export default JumpToButton;
