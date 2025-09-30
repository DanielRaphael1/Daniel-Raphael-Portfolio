const TechIcon = ({
  logo,
  label,
  className = '',
  scrollProgress = 0,
  totalItems = 1,
  itemIndex = 0
}) => {
  const threshold = (itemIndex + 1) / totalItems
  const isVisible = scrollProgress >= threshold * 0.8 + 0.2

  const dynamicDelay = isVisible ? 0 : (itemIndex * 50)

  // Check for mobile view
  const isMobile = window.innerWidth <= 768
  const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768
  const isLargeDesktop = window.innerWidth >= 1440

  const getResponsiveStyles = () => {
    if (isMobile) {
      return {
        techIcon: {
          width: 'clamp(80px, 20vw, 100px)',
          height: 'clamp(80px, 20vw, 100px)',
          padding: '12px'
        },
        techLogo: {
          width: 'clamp(40px, 15vw, 60px)',
          height: 'clamp(40px, 15vw, 60px)'
        },
        techLabel: {
          fontSize: 'clamp(0.6rem, 3vw, 0.8rem)'
        }
      }
    } else if (isTablet) {
      return {
        techIcon: {
          width: 'clamp(80px, 20vw, 100px)',
          height: 'clamp(80px, 20vw, 100px)',
          padding: '12px'
        },
        techLogo: {
          width: 'clamp(40px, 15vw, 60px)',
          height: 'clamp(40px, 15vw, 60px)'
        },
        techLabel: {
          fontSize: 'clamp(0.6rem, 3vw, 0.8rem)'
        }
      }
    } else if (isLargeDesktop) {
      return {
        techIcon: {
          width: 'clamp(120px, calc((80vw - 220px) / 4), 180px)',
          height: 'clamp(120px, calc((80vw - 220px) / 4), 180px)',
          padding: 'clamp(12px, 2vw, 20px)'
        },
        techLogo: {
          width: 'clamp(50px, calc((80vw - 220px) / 6), 90px)',
          height: 'clamp(50px, calc((80vw - 220px) / 6), 90px)'
        },
        techLabel: {
          fontSize: 'clamp(0.7rem, 1.5vw, 1rem)'
        }
      }
    } else {
      // Default desktop
      return {
        techIcon: {
          width: 'clamp(120px, calc((80vw - 220px) / 4), 180px)',
          height: 'clamp(120px, calc((80vw - 220px) / 4), 180px)',
          padding: 'clamp(12px, 2vw, 20px)'
        },
        techLogo: {
          width: 'clamp(50px, calc((80vw - 220px) / 6), 90px)',
          height: 'clamp(50px, calc((80vw - 220px) / 6), 90px)'
        },
        techLabel: {
          fontSize: 'clamp(0.7rem, 1.5vw, 1rem)'
        }
      }
    }
  }

  const responsiveStyles = getResponsiveStyles()

  const techIconStyle = {
    flex: '0 0 auto',
    ...responsiveStyles.techIcon,
    background: 'var(--card-bg)',
    borderRadius: 'var(--border-radius-large)',
    transition: 'all var(--transition-standard)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(8px, 1vw, 12px)',
    backdropFilter: 'blur(5px)',
    // Rise animation styles
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
    transitionDelay: `${dynamicDelay}ms`
  }

  const techLogoStyle = {
    ...responsiveStyles.techLogo,
    objectFit: 'contain'
  }

  const techLabelStyle = {
    textAlign: 'center',
    ...responsiveStyles.techLabel,
    color: 'var(--text-light)',
    opacity: 0.8,
    fontWeight: 500,
    letterSpacing: '0.5px'
  }

  return (
    <div
      className={className}
      style={techIconStyle}
    >
      <img
        src={logo}
        alt={label}
        style={techLogoStyle}
      />
      <span style={techLabelStyle}>{label}</span>
    </div>
  );
};

export default TechIcon