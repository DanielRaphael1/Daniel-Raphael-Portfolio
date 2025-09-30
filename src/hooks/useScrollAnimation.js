import { useEffect, useRef, useState } from 'react'

function useScrollAnimation(options = {}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    progressive = false
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const thresholds = progressive
      ? Array.from({ length: 101 }, (_, i) => i / 100)
      : [threshold]

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (progressive) {
            const rect = entry.boundingClientRect
            const viewportHeight = window.innerHeight

            let progress = 0

            if (rect.top <= 0) {
              progress = 1
            } else if (rect.bottom <= viewportHeight) {
              progress = 1
            } else if (rect.top < viewportHeight) {
              const visibleHeight = viewportHeight - rect.top
              const elementHeight = rect.height
              progress = Math.min(visibleHeight / Math.min(elementHeight, viewportHeight), 1)
            }

            setScrollProgress(progress)
          }

          if (triggerOnce && !progressive) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
          setScrollProgress(0)
        }
      },
      {
        threshold: thresholds,
        rootMargin
      }
    )

    observer.observe(element)

    const handleScroll = () => {
      if (!progressive || !isVisible) return

      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      let progress = 0
      if (rect.top <= 0) {
        progress = 1
      } else if (rect.bottom <= viewportHeight) {
        progress = 1
      } else if (rect.top < viewportHeight) {
        const visibleHeight = viewportHeight - rect.top
        const elementHeight = rect.height
        progress = Math.min(visibleHeight / Math.min(elementHeight, viewportHeight), 1)
      }

      setScrollProgress(progress)
    }

    if (progressive) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      observer.disconnect()
      if (progressive) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [threshold, rootMargin, triggerOnce, progressive])

  return { elementRef, isVisible, scrollProgress }
}

export default useScrollAnimation