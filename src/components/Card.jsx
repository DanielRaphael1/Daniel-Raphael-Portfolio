const Card = ({ children, variant = 'default', className = '', style = {} }) => {
  return (
    <div className={`card card-${variant} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;