import React, { useEffect, useState, useRef } from 'react'

const CursorLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMoving, setIsMoving] = useState(false)
  const animationFrameRef = useRef()
  const timeoutRef = useRef()

  useEffect(() => {
    let lastMoveTime = 0
    const throttleDelay = 16 // ~60fps

    const updateMousePosition = (e) => {
      const now = Date.now()
      if (now - lastMoveTime >= throttleDelay) {
        setMousePosition({ x: e.clientX, y: e.clientY })
        setIsVisible(true)
        setIsMoving(true)
        lastMoveTime = now

        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        // Set timeout to stop moving animation
        timeoutRef.current = setTimeout(() => {
          setIsMoving(false)
        }, 150)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setIsMoving(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const smoothFollow = () => {
      setSmoothPos(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
      animationFrameRef.current = requestAnimationFrame(smoothFollow);
    };
    smoothFollow();
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [mousePosition]);

  
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 transition-transform duration-200 ease-out"
      style={{
        background: `radial-gradient(600px at ${smoothPos.x}px ${smoothPos.y}px, rgba(255,255,255,0.08), transparent 80%)`,
        mixBlendMode: 'screen',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-out',
      }}
    ></div>
  )
  
}

export default CursorLight
