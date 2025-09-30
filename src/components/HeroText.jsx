import React from 'react'

const HeroText = ({ title, bio }) => {
  return (
    <>
      <h3
        className="hero-title"
        style={{
          color: '#ed690a',
          fontSize: '20px',
          marginTop: '5px',
          fontWeight: 600,
          marginLeft: '90px',
          position: 'relative',
          zIndex: 10
        }}>
        {title}
      </h3>
      <p style={{
        color: '#f2ebeb',
        fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
        fontWeight: 600,
        lineHeight: 1.6,
        marginTop: '20px',
        marginLeft: '90px',
        marginRight: '90px',
        maxWidth: '500px',
        opacity: 0.9
      }}>
        "{bio}"
      </p>
    </>
  )
}

export default HeroText