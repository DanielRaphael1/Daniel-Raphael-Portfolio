import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const categoryThemes = {
  'tech-category-frontend': {
    background: 'linear-gradient(135deg, rgba(252, 130, 0, 0.2) 0%, rgba(249, 188, 5, 0.1) 100%)',
    borderColor: 'rgba(252, 130, 0, 0.3)'
  },
  'tech-category-backend': {
    background: 'linear-gradient(135deg, rgba(103, 58, 183, 0.2) 0%, rgba(63, 81, 181, 0.1) 100%)',
    borderColor: 'rgba(103, 58, 183, 0.3)'
  },
  'tech-category-database': {
    background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(56, 142, 60, 0.1) 100%)',
    borderColor: 'rgba(76, 175, 80, 0.3)'
  },
  'tech-category-infrastructure': {
    background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.2) 0%, rgba(3, 169, 244, 0.1) 100%)',
    borderColor: 'rgba(33, 150, 243, 0.3)'
  },
  'tech-category-tools': {
    background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 152, 0, 0.1) 100%)',
    borderColor: 'rgba(255, 193, 7, 0.3)'
  }
}

const TechCategory = ({ title, children, className = '' }) => {
  const { elementRef, scrollProgress } = useScrollAnimation({
    threshold: 0.7,
    progressive: true,
    triggerOnce: false
  })

  const headerThreshold = 0.1
  const isHeaderVisible = scrollProgress >= headerThreshold

  const theme = categoryThemes[className] || {}

  // Check for responsive styles
  const isMobile = window.innerWidth <= 768
  const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768
  const isMediumDesktop = window.innerWidth >= 900 && window.innerWidth <= 1199
  const isLargeDesktop = window.innerWidth >= 1200

  const getCategoryHeaderCardStyles = () => {
    const baseStyles = {
      borderRadius: 'var(--gap-small)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: theme.background || 'var(--card-bg)',
      border: `2px solid ${theme.borderColor || 'var(--border-orange)'}`,
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      // Rise animation styles
      opacity: isHeaderVisible ? 1 : 0,
      transform: isHeaderVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
    }

    if (isMobile) {
      return {
        ...baseStyles,
        flex: 'none',
        height: '60px',
        minHeight: 'auto',
        width: '80%',
        maxWidth: '300px',
        alignSelf: 'center'
      }
    } else if (isTablet) {
      return {
        ...baseStyles,
        flex: 'none',
        height: '60px',
        minHeight: 'auto',
        width: '80%',
        maxWidth: '300px',
        alignSelf: 'center'
      }
    } else if (isMediumDesktop) {
      return {
        ...baseStyles,
        flex: '0 0 180px',
        minHeight: 'clamp(100px, calc((80vw - 180px) / 4), 140px)'
      }
    } else if (isLargeDesktop) {
      return {
        ...baseStyles,
        flex: '0 0 180px',
        minHeight: 'clamp(120px, calc((80vw - 200px) / 4), 170px)'
      }
    } else {
      // Default desktop
      return {
        ...baseStyles,
        flex: '0 0 180px',
        width: '180px',
        maxWidth: '220px',
        minWidth: '220px',
        minHeight: '160px'
      }
    }
  }

  const getCategoryTitleStyles = () => {
    const baseStyles = {
      color: 'var(--text-light)',
      margin: 0,
      fontWeight: 600,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      writingMode: 'horizontal-tb',
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }

    if (isMobile || isTablet) {
      return {
        ...baseStyles,
        fontSize: '1.1rem'
      }
    } else if (isMediumDesktop) {
      return {
        ...baseStyles,
        fontSize: '1rem'
      }
    } else {
      return {
        ...baseStyles,
        fontSize: '1.3rem'
      }
    }
  }

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        scrollProgress,
        totalItems: React.Children.count(children),
        itemIndex: index
      })
    }
    return child
  })

  return (
    <div
      ref={elementRef}
      className={`tech-category ${className}`}
    >
      <div style={getCategoryHeaderCardStyles()}>
        <h3 style={getCategoryTitleStyles()}>{title}</h3>
      </div>
      <div className="tech-icons-container">
        {childrenWithProps}
      </div>
    </div>
  )
}
export default TechCategory