const Card = ({ children, variant = 'default', className = '', style = {} }) => {
  const baseStyles = {
    borderRadius: '12px',
    ...style
  }

  return (
    <div className={`card-${variant} ${className}`} style={baseStyles}>
      {children}
    </div>
  )
}

export default Card