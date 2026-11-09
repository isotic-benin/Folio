import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'


const expertiseItems = [
  "l'automatisation des déploiements (Docker, Terraform, CI/CD GitLab)",
  "l'administration de serveurs et de services critiques (DNS, DHCP, Active Directory, VPN)",
  'la supervision et la sécurisation des infrastructures (Nagios)',
  'le développement fullstack (PHP, Node.js, Next.js, HTML, CSS, JavaScript, TypeScript)',
]

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left — decorative card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="editorial-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-cancer-silver/40" />
              <div className="w-3 h-3 bg-cancer-pearl/40" />
              <div className="w-3 h-3 bg-cancer-cyan/40" />
            </div>
            <pre className="text-sm font-mono text-cancer-silver/60 leading-relaxed overflow-hidden">
              <code>
                <span className="text-cancer-cyan">const</span>{' '}
                <span className="text-cancer-pearl">developer</span> = {'{\n'}
                {'  '}
                <span className="text-cancer-silver">name</span>:{' '}
                <span className="text-cancer-glow">"Ange-Fortuné"</span>,{'\n'}
                {'  '}
                <span className="text-cancer-silver">role</span>:{' '}
                <span className="text-cancer-glow">"Production & Fullstack"</span>,{'\n'}
                {'  '}
                <span className="text-cancer-silver">location</span>:{' '}
                <span className="text-cancer-glow">"Cotonou, Bénin"</span>,{'\n'}
                {'  '}
                <span className="text-cancer-silver">passion</span>:{' '}
                <span className="text-cancer-glow">"DevOps & Automatisation"</span>,{'\n'}
                {'  '}
                <span className="text-cancer-silver">available</span>:{' '}
                <span className="text-cancer-cyan">true</span>{'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Right — text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-title text-3xl sm:text-4xl mb-4">
            À propos
          </h2>
          <div className="editorial-divider" />

          <p className="text-cancer-silver leading-relaxed mb-8">
            Développeur Fullstack & Ingénieur DevOps polyvalent, fort d'une solide expertise en développement d'applications de bout en bout et en gestion d'infrastructures critiques. Spécialisé dans la conception d'architectures logicielles robustes, l'automatisation des déploiements (Docker, Terraform, CI/CD) et l'administration de serveurs. Alliant des compétences analytiques poussées à une culture de l'excellence technique (clean code, supervision, sécurité), je suis capable de piloter un projet du code jusqu'à la mise en production. Autonome, adaptable et adepte du partage de connaissances, j'ai à cœur de concevoir des solutions performantes, évolutives et documentées au sein d'équipes agiles.
          </p>

          <p className="text-sm text-cancer-silver/50 uppercase tracking-widest font-semibold mb-6">
            Expertise dans :
          </p>
          <ul className="space-y-4">
            {expertiseItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-4 text-cancer-pearl tracking-wide"
              >
                <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cancer-cyan shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default About
