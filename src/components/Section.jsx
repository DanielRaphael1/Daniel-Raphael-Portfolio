import SectionDivider from './SectionDivider';

const Section = ({
  children,
  className = '',
  showDivider = true
}) => {
  return (
    <section className={`content-section ${className}`}>
      {children}
      {showDivider && <SectionDivider />}
    </section>
  );
};

export default Section;