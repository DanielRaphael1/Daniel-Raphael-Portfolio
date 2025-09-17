import { cloneElement } from 'react'

function ContactItem({ icon, text, href }) {
  const content = (
    <div className="contact-item">
      <div className="contact-icon">
        {icon && cloneElement(icon, { size: 20, className: 'contact-icon-svg' })}
      </div>
      <span className="contact-text">{text}</span>
    </div>
  )

  // If href is provided, wrap in a link
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