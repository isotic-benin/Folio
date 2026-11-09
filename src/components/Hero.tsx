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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-cancer-cyan/10 border border-cancer-cyan/30 text-cancer-cyan text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cancer-cyan" />
          </span>
          Disponible immédiatement · Ouvert aux opportunités remote
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl heading-title mb-6"
        >
          <span>AKANDE L.</span>
          <br />
          <span className="text-cancer-cyan">Ange-Fortuné</span>
        </motion.h1>

        {/* Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-1 mb-8"
        >
          <p className="text-lg sm:text-xl text-cancer-pearl font-semibold tracking-wide">
            Ingénieur de Production Informatique
          </p>
          <p className="text-lg sm:text-xl text-cancer-silver font-semibold">
            Développeur Fullstack & DevOps
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-xl text-sm sm:text-base text-cancer-silver/70 leading-relaxed mb-8"
        >
          J'administre les serveurs, j'automatise les déploiements et je développe
          les applications qui tournent dessus — du code à la production.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 text-cancer-silver/80 mb-10"
        >
          <HiMapPin className="text-cancer-cyan" />
          <span className="tracking-wide">Cotonou, Bénin</span>
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
            className="group w-full sm:w-auto px-8 py-3.5 bg-cancer-cyan hover:bg-cancer-teal text-cancer-deep font-bold tracking-wider uppercase text-sm transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] flex items-center justify-center gap-2"
          >
            Voir mes projets
            <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-3.5 border border-cancer-silver/20 hover:border-cancer-cyan/50 text-cancer-pearl font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-cancer-cyan/10 flex items-center justify-center gap-2"
          >
            <HiMail className="text-cancer-cyan" size={18} />
            Me contacter
          </button>
          <a
            href="/cv-akande-ange-fortune.pdf"
            download
            className="w-full sm:w-auto px-8 py-3.5 border border-cancer-silver/20 hover:border-cancer-cyan/50 text-cancer-silver hover:text-cancer-pearl font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-cancer-cyan/5 flex items-center justify-center gap-2"
          >
            <HiDocumentDownload className="text-cancer-cyan" size={18} />
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
          className="w-5 h-9 rounded-full border-2 border-cancer-silver/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-cancer-cyan rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
