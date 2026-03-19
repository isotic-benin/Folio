import { motion } from 'framer-motion'
import { HiArrowDown, HiMail, HiDocumentDownload } from 'react-icons/hi'
import { HiMapPin } from 'react-icons/hi2'

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
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
          <span className="text-white">AKANDE L.</span>
          <br />
          <span className="gradient-text">Ange-Fortuné</span>
        </motion.h1>

        {/* Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-1 mb-8"
        >
          <p className="text-lg sm:text-xl text-gray-300 font-medium">
            Ingénieur de Production Informatique
          </p>
          <p className="text-lg sm:text-xl text-indigo-400 font-semibold">
            DevOps & Cloud Engineer
          </p>
          <p className="text-lg sm:text-xl text-purple-400 font-semibold">
            Fullstack Developer
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 text-gray-400 mb-10"
        >
          <HiMapPin className="text-indigo-400" />
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
            className="group w-full sm:w-auto px-8 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
          >
            Voir mes projets
            <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-3.5 border border-white/10 hover:border-indigo-400/50 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2"
          >
            <HiMail />
            Me contacter
          </button>
          <a
            href="/cv-akande-ange-fortune.pdf"
            download
            className="w-full sm:w-auto px-8 py-3.5 border border-white/10 hover:border-purple-400/50 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2"
          >
            <HiDocumentDownload />
            Télécharger mon CV
          </a>
        </motion.div>
      </div>

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
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 bg-indigo-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
