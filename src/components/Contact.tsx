import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="grid md:grid-cols-12 gap-10 mb-8">
        <div className="md:col-span-4">
          <h2 className="font-space text-4xl md:text-5xl font-medium tracking-tight text-cancer-moonlight">
            Contact
          </h2>
          <div className="mt-4 w-12 h-px bg-cancer-cyan" />
          <p className="mt-4 text-sm text-cancer-silver">
            Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter.
          </p>
        </div>
      </div>

      <div className="border-t border-cancer-silver/20 pt-8">
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:isoticsarl@gmail.com"
            className="group border-l-2 border-cancer-silver/20 pl-4 hover:border-cancer-cyan transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <HiMail className="text-cancer-cyan" size={16} />
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-cancer-silver">
                Email
              </p>
            </div>
            <p className="text-cancer-pearl font-medium group-hover:text-cancer-cyan transition-colors break-all">
              isoticsarl@gmail.com
            </p>
          </a>

          <a
            href="tel:+2290149674513"
            className="group border-l-2 border-cancer-silver/20 pl-4 hover:border-cancer-cyan transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <HiPhone className="text-cancer-cyan" size={16} />
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-cancer-silver">
                Téléphone
              </p>
            </div>
            <p className="text-cancer-pearl font-medium group-hover:text-cancer-cyan transition-colors">
              +229 01 49 67 45 13
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/l-ange-fortun%C3%A9-akande-020671231"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-l-2 border-cancer-silver/20 pl-4 hover:border-cancer-cyan transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaLinkedinIn className="text-cancer-cyan" size={16} />
              <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-cancer-silver">
                LinkedIn
              </p>
            </div>
            <p className="text-cancer-pearl font-medium group-hover:text-cancer-cyan transition-colors">
              Ange-Fortuné AKANDE
            </p>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex items-center gap-3 text-sm text-cancer-silver"
        >
          <span className="w-2 h-2 rounded-full bg-cancer-cyan" />
          <span>Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités de collaboration.</span>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Contact