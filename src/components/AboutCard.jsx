import React from 'react'

function AboutCard({ children, className = '' }) {
  const baseStyles = {
    background: 'rgba(30, 30, 40, 0.7)',
    padding: '2px 20px 20px 20px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    borderRadius: '12px'
  }

  const h3Styles = {
    color: '#fc8200',
    marginBottom: '10px',
    fontSize: '1.2rem'
  }

  const pStyles = {
    color: '#f2ebeb',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    opacity: 0.9
  }

  const styledChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      if (child.type === 'h3') {
        return React.cloneElement(child, { style: { ...h3Styles, ...child.props.style } })
      }
      if (child.type === 'p') {
        return React.cloneElement(child, { style: { ...pStyles, ...child.props.style } })
      }
    }
    return child
  })

  return (
    <div className={`about-card-item ${className}`} style={baseStyles}>
      {styledChildren}
    </div>
  )
}

export default AboutCard