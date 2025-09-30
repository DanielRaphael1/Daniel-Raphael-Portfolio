import SectionDivider from './SectionDivider'

const Section = ({
  children,
  className = '',
  showDivider = true,
  id
}) => {
  return (
    <div className={`section-background-wrapper ${className}-bg`}>
      <section id={id} className={`content-section ${className}`}>
        {children}
        {showDivider && <SectionDivider />}
      </section>
    </div>
  )
}

export default Section