import useScrollAnimation from '../hooks/useScrollAnimation'

function AnimatedSection({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  immediate = false,
  style = {}
}) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true
  })

  const shouldAnimate = immediate || isVisible

  return (
    <div
      ref={elementRef}
      className={`rise-animate ${shouldAnimate ? 'visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...style
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection