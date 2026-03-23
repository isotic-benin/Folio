import { motion } from 'framer-motion'
import { HiArrowDown, HiDocumentDownload, HiMail } from 'react-icons/hi'
import { HiMapPin } from 'react-icons/hi2'
import ParticlesBackground from './ParticlesBackground'

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticlesBackground />
      
      <motion.div 
        className="container relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Status badge - Monochrome variant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-700 text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Disponible immédiatement · Ouvert aux opportunités remote
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-gray-900">AKANDE L.</span>
          <br />
          <span className="text-emerald-600">Ange-Fortuné</span>
        </motion.h1>

        {/* Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-1 mb-8"
        >
          <p className="text-lg sm:text-xl text-gray-500 font-medium">
            Ingénieur de Production Informatique
          </p>
          <p className="text-lg sm:text-xl text-gray-800 font-semibold">
            DevOps & Cloud Engineer
          </p>
          <p className="text-lg sm:text-xl text-gray-600 font-semibold">
            Fullstack Developer
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 text-gray-500 mb-10"
        >
          <HiMapPin className="text-emerald-600" />
          <span>Cotonou, Bénin</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-emerald-600/20 flex items-center justify-center gap-2"
          >
            Voir mes projets
            <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-3.5 border border-gray-200 hover:border-emerald-600/50 text-gray-700 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50 flex items-center justify-center gap-2"
          >
            <HiMail className="text-emerald-600" />
            Me contacter
          </button>
          <a
            href="/cv-akande-ange-fortune.pdf"
            download
            className="w-full sm:w-auto px-8 py-3.5 border border-gray-200 hover:border-emerald-600/50 text-gray-600 hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50 flex items-center justify-center gap-2"
          >
            <HiDocumentDownload className="text-emerald-600" />
            Télécharger mon CV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-9 rounded-full border-2 border-gray-200 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-emerald-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
