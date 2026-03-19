import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  children: ReactNode
  id: string
  className?: string
}

const SectionWrapper = ({ children, id, className = '' }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  )
}

export default SectionWrapper
