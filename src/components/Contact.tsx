import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { HiMail, HiPhone } from 'react-icons/hi'

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="gradient-text">Contact</span>
        </h2>
        <div className="w-16 h-1 bg-indigo-500 rounded-full mx-auto mb-4" />
        <p className="text-gray-400 max-w-lg mx-auto">
          Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Restons en contact</h3>
          <p className="text-gray-400 leading-relaxed">
            Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou
            d'opportunités de collaboration.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:isoticsarl@gmail.com"
            className="flex-1 glass-card p-6 flex flex-col items-center text-center gap-4 hover:border-indigo-500/30 transition-colors group"
          >
            <div className="p-4 rounded-full bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
              <HiMail size={28} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Email</p>
              <p className="text-gray-300 font-medium">isoticsarl@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+22901698220265"
            className="flex-1 glass-card p-6 flex flex-col items-center text-center gap-4 hover:border-purple-500/30 transition-colors group"
          >
            <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
              <HiPhone size={28} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Téléphone</p>
              <p className="text-gray-300 font-medium">+229 01 69 82 20 65</p>
            </div>
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Contact
