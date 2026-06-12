import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { HiMail, HiPhone } from 'react-icons/hi'

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <h2 className="heading-title text-3xl sm:text-4xl mb-4">
          Contact
        </h2>
        <div className="editorial-divider mx-auto" />
        <p className="text-cancer-silver max-w-lg mx-auto">
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
          <h3 className="text-2xl font-space font-bold text-cancer-moonlight mb-4">Restons en contact</h3>
          <p className="text-cancer-silver leading-relaxed">
            Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou
            d'opportunités de collaboration.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:isoticsarl@gmail.com"
            className="flex-1 editorial-card p-6 flex flex-col items-center text-center gap-4 hover:border-cancer-cyan/50 transition-colors group"
          >
            <div className="p-4 rounded-sm bg-cancer-deep text-cancer-cyan group-hover:bg-cancer-cyan/10 border border-cancer-silver/10 transition-colors">
              <HiMail size={28} />
            </div>
            <div>
              <p className="text-sm font-medium text-cancer-silver mb-1">Email</p>
              <p className="text-cancer-pearl font-semibold group-hover:text-cancer-cyan transition-colors">
                isoticsarl@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+22901698220265"
            className="flex-1 editorial-card p-6 flex flex-col items-center text-center gap-4 hover:border-cancer-cyan/50 transition-colors group"
          >
            <div className="p-4 rounded-sm bg-cancer-deep text-cancer-cyan group-hover:bg-cancer-cyan/10 border border-cancer-silver/10 transition-colors">
              <HiPhone size={28} />
            </div>
            <div>
              <p className="text-sm font-medium text-cancer-silver mb-1">Téléphone</p>
              <p className="text-cancer-pearl font-semibold group-hover:text-cancer-cyan transition-colors">
                +229 01 69 82 20 65 / 01 49 67 45 13
              </p>
            </div>
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Contact
