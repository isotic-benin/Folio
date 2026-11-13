import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const expertiseItems = [
  "l'automatisation des déploiements (Docker, CI/CD)",
  "l'administration de serveurs et de services critiques (DNS, DHCP, Active Directory, pare-feu)",
  'la supervision et la sécurisation des infrastructures (Nagios)',
  'le développement fullstack (PHP, Node.js, Next.js, HTML5, CSS3, JavaScript)',
]

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <h2 className="font-space text-4xl md:text-5xl font-medium tracking-tight text-cancer-moonlight">
            À propos
          </h2>
          <div className="mt-4 w-12 h-px bg-cancer-cyan" />
        </div>

        <div className="md:col-span-8">
          <p className="text-cancer-silver leading-relaxed text-base">
            Développeur Fullstack & Ingénieur DevOps polyvalent, fort d'une solide expertise en développement d'applications de bout en bout et en gestion d'infrastructures critiques. Spécialisé dans la conception d'architectures logicielles robustes, l'automatisation des déploiements (Docker, CI/CD) et l'administration de serveurs (Linux/Windows, réseaux). Alliant des compétences analytiques poussées à une culture de l'excellence technique (clean code, supervision, sécurité), je suis capable de piloter un projet du code jusqu'à la mise en production. Autonome, adaptable et adepte du partage de connaissances, j'ai à cœur de concevoir des solutions performantes, évolutives et documentées au sein d'équipes agiles.
          </p>

          <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-cancer-silver font-medium mb-4">
            Expertise dans
          </p>
          <ul className="space-y-3 border-t border-cancer-silver/20 pt-4">
            {expertiseItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="flex items-start gap-4 text-cancer-pearl"
              >
                <span className="mt-2 flex-shrink-0 w-6 h-px bg-cancer-cyan" />
                <span className="text-sm leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About