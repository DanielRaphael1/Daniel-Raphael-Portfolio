import { useEffect, useState } from 'react'

function Particles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const particleArray = []
    const particleCount = 30
    const colors = ['#fc8200', '#f9bc05', '#dc6d31'] // primary-orange, accent-yellow, dark-orange

    for (let i = 0; i < particleCount; i++) {
      particleArray.push({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: Math.random() * 10 + 7,
        animationDelay: Math.random() * 3,
        animationType: Math.floor(Math.random() * 3) + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    setParticles(particleArray)
  }, [])

  return (
    <>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            backgroundColor: particle.color,
            animation: `float-${particle.animationType} ${particle.animationDuration}s ${particle.animationDelay}s infinite ease-in-out`
          }}
        />
      ))}
    </>
  )
}

export default Particles