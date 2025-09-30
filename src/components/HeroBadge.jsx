import React from 'react'

const HeroBadge = ({ children, className = '' }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #f9bc05, #fc8200, #dc6d31)',
        color: '#0c041c',
        padding: '10px 20px',
        borderRadius: '8px',
        display: 'inline-block',
        fontWeight: '800',
        position: 'absolute',
        top: '75px',
        left: '90px',
        animation: 'float-vertical 3s ease-in-out infinite',
        fontStyle: 'italic',
        zIndex: 5,
        maxWidth: '400px',
        textAlign: 'center',
        whiteSpace: 'nowrap'
      }}
      className={`hero-badge-responsive ${className}`}
    >
      {children}
    </div>
  )
}

export default HeroBadge