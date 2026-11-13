import { motion } from 'framer-motion'
import { HiArrowDown, HiDocumentDownload, HiMail } from 'react-icons/hi'
import { HiMapPin } from 'react-icons/hi2'

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          {/* Left — headline */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-cancer-cyan" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-cancer-silver font-medium">
                Disponible immédiatement · Remote
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-space text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight text-cancer-moonlight"
            >
              AKANDE
              <br />
              <span className="text-cancer-cyan">Ange-Fortuné</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-cancer-silver"
            >
              <span className="font-medium text-cancer-moonlight">Ingénieur de Production Informatique</span>
              <span className="text-cancer-silver/40">/</span>
              <span>Développeur Fullstack & DevOps</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-6 max-w-xl text-base text-cancer-silver leading-relaxed"
            >
              J'administre les serveurs, j'automatise les déploiements et je développe
              les applications qui tournent dessus — du code à la production.
            </motion.p>
          </div>

          {/* Right — meta + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="md:col-span-4 flex flex-col gap-6 md:pb-2"
          >
            <div className="flex items-center gap-2 text-sm text-cancer-silver">
              <HiMapPin className="text-cancer-cyan" />
              <span>Cotonou, Bénin</span>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollTo('projects')}
                className="group w-full px-6 py-3 bg-cancer-cyan hover:bg-cancer-teal text-white font-medium text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                Voir mes projets
                <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full px-6 py-3 border border-cancer-silver/30 hover:border-cancer-cyan text-cancer-moonlight font-medium text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <HiMail className="text-cancer-cyan" size={16} />
                Me contacter
              </button>
              <a
                href="/cv-akande-ange-fortune.pdf"
                download
                className="w-full px-6 py-3 text-cancer-silver hover:text-cancer-moonlight font-medium text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <HiDocumentDownload className="text-cancer-cyan" size={16} />
                Télécharger le CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-8 bg-cancer-silver/40"
        />
      </motion.div>
    </section>
  )
}

export default Hero