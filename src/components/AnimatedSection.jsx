import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AnimatedSection = ({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up' // 'up', 'down', 'left', 'right', 'fade'
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
    fade: { opacity: 0 }
  }

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection

