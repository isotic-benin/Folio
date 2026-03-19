import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi'

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  tasks: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Développeur FullStack',
    company: 'Péro Groupe',
    location: 'Cotonou',
    period: 'Août 2025 – Présent',
    tasks: [
      'Conception et développement d\'APIs REST avec Java Spring Boot et Node.js',
      'Documentation d\'API avec Swagger / OpenAPI',
      'Développement frontend avec React.js et Next.js',
      'Intégration des APIs via Axios / Fetch',
      'Gestion des états asynchrones',
      'Tests avec Jest et React Testing Library',
      'Containerisation des microservices avec Docker',
      'Monitoring applicatif avec Sentry',
      'Analyse de qualité du code avec SonarQube',
    ],
  },
  {
    title: 'Chef de projet senior',
    company: 'Infot-Tec · Indépendant',
    location: 'Cotonou, Littoral, Bénin · À distance',
    period: 'Mars 2023 – Aujourd’hui',
    tasks: [
      'Co-fondateur et membre actif de la direction de l\'entreprise numérique Infot-Tec',
      'Gestion et pilotage de projets IT de bout en bout',
      'Management, coordination d\'équipes et prise de décisions stratégiques pour le développement de l\'entreprise',
    ],
  },
  {
    title: 'Technicien Support Informatique Réseau',
    company: 'CPET ESTAM',
    location: 'Porto-Novo',
    period: 'Octobre 2022 – Juillet 2025',
    tasks: [
      'Administration réseau LAN/WAN',
      'Gestion de serveurs physiques et virtuels',
      'Déploiement de DNS, DHCP et Active Directory',
      'Sauvegardes automatisées',
      'Administration MySQL et PostgreSQL',
      'Formation en informatique',
    ],
  },
  {
    title: 'Stage Développeur Web',
    company: 'Méalen Technology',
    location: 'Cotonou',
    period: 'Janvier 2022 – Août 2022',
    tasks: [
      'Développement d\'applications web',
      'Rédaction de documentation technique',
    ],
  },
]

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="gradient-text">Expériences</span>
        </h2>
        <div className="w-16 h-1 bg-indigo-500 rounded-full mx-auto mb-4" />
        <p className="text-gray-400 max-w-lg mx-auto">
          Mon parcours professionnel et les projets auxquels j'ai contribué.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className={`relative mb-12 last:mb-0 ${
              idx % 2 === 0
                ? 'md:pr-[calc(50%+2rem)] md:text-right'
                : 'md:pl-[calc(50%+2rem)]'
            } pl-12 md:pl-0`}
          >
            {/* Dot */}
            <div
              className={`absolute top-2 w-3 h-3 rounded-full bg-indigo-500 border-4 border-gray-950 z-10 ${
                idx % 2 === 0
                  ? 'left-[10px] md:left-1/2 md:-translate-x-1/2'
                  : 'left-[10px] md:left-1/2 md:-translate-x-1/2'
              }`}
            />

            <div className={`glass-card p-6 glow ${idx % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}`}>
              <div className={`flex flex-wrap items-center gap-3 mb-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  <HiCalendar size={12} />
                  {exp.period}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
              <div className={`flex items-center gap-3 text-sm text-gray-400 mb-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                <span className="flex items-center gap-1">
                  <HiBriefcase className="text-indigo-400" size={14} />
                  {exp.company}
                </span>
                <span className="flex items-center gap-1">
                  <HiLocationMarker className="text-indigo-400" size={14} />
                  {exp.location}
                </span>
              </div>

              <ul className={`space-y-2 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                {exp.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className={`text-indigo-400 mt-1 flex-shrink-0 ${idx % 2 === 0 ? 'md:order-2' : ''}`}>
                      ▹
                    </span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Experience
