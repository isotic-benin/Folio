import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'


const expertiseItems = [
  "l'automatisation d'infrastructure avec Terraform",
  'la mise en place de pipelines CI/CD',
  "l'orchestration de conteneurs avec Docker",
  'le développement fullstack avec Java Spring Boot, Node.js, React.js et Next.js',
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
                <span className="text-cancer-glow">"DevOps & Fullstack"</span>,{'\n'}
                {'  '}
                <span className="text-cancer-silver">location</span>:{' '}
                <span className="text-cancer-glow">"Cotonou, Bénin"</span>,{'\n'}
                {'  '}
                <span className="text-cancer-silver">passion</span>:{' '}
                <span className="text-cancer-glow">"Cloud & Automation"</span>,{'\n'}
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
            Administrateur système et ingénieur DevOps avec une solide expérience en administration de serveurs Linux et Windows, supervision d'infrastructures réseau (LAN/WAN), et gestion de services critiques (DNS, DHCP, Active Directory, VPN, sauvegardes). Expertise en automatisation d'infrastructure avec Terraform, conteneurisation avec Docker, mise en place de pipelines CI/CD, et supervision système (Nagios, Wasuh, Prometheus/Grafana). Profil polyvalent combinant compétences systèmes, réseaux et développement fullstack, avec une forte capacité d'analyse, de diagnostic et de documentation des incidents. Capable de travailler en autonomie, de s'adapter rapidement à de nouveaux environnements techniques et de transmettre ses connaissances à d'autres membres d'une équipe.
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
