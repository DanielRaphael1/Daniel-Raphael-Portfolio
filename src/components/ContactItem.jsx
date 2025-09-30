import { cloneElement } from 'react'

function ContactItem({ icon, text, href }) {
  const content = (
    <div
      className="contact-item"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '6px 0',
        padding: '4px 0',
        minWidth: 0,
        flexWrap: 'wrap'
      }}
    >
      <div
        className="contact-icon"
        style={{
          width: '35px',
          height: '35px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        {icon && cloneElement(icon, {
          size: 20,
          style: {
            width: '20px',
            height: '20px',
            color: '#fc8200',
            stroke: '#fc8200',
            fill: 'none',
            strokeWidth: 2
          }
        })}
      </div>
      <span style={{
        color: '#f2ebeb',
        fontSize: '0.95rem',
        fontWeight: 500,
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        hyphens: 'auto'
      }}>{text}</span>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        {content}
      </a>
    )
  }

  return content
}

export default ContactItem