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
      'Conception et développement d\'APIs RESTful, packagées et déployées via Docker sur un registry privé (Docker Hub, Harbor).',
      'Mise en place et configuration de serveurs web (Nginx/Apache) pour le déploiement et l\'exposition des services.',
      'Analyse de la qualité du code avec SonarQube pour assurer la fiabilité et la maintenabilité des applications.',
      'Développement d\'interfaces utilisateur dynamiques et responsives avec Next.js (SSR, SSG, ISR).',
      'Intégration d\'APIs côté frontend via Axios / Fetch API, avec gestion des états asynchrones (loading, error, retry).',
      'Documentation technique des APIs facilitant l\'intégration entre équipes et les tests.',
      'Tests unitaires et d\'intégration avec Jest.',
      'Collaboration avec les équipes produit et design dans un environnement agile.'
    ],
  },
  {
    title: 'Technicien Support Informatique en Réseau',
    company: 'CPET ESTAM',
    location: 'Porto-Novo',
    period: 'Oct. 2022 – Juil. 2025',
    tasks: [
      'Administration et supervision quotidienne de serveurs Linux et Windows Server en production.',
      'Gestion et maintenance de serveurs physiques et virtuels (VMware, VirtualBox).',
      'Administration et supervision de l\'infrastructure réseau LAN/WAN (switchs, routeurs, points d\'accès sans fil).',
      'Déploiement et gestion de services réseau essentiels : DNS, DHCP, Active Directory, VPN (OpenVPN/IPSec).',
      'Mise en œuvre de sauvegardes automatisées et de plans de reprise d\'activité (PRA).',
      'Administration de bases de données MySQL et PostgreSQL (installation, maintenance, sécurisation).',
      'Supervision proactive de l\'infrastructure avec Nagios et Wasuh.',
      'Gestion des comptes utilisateurs, des droits d\'accès et application de bonnes pratiques de sécurité système.',
      'Diagnostic, documentation et résolution d\'incidents systèmes et réseau.',
      'Veille technologique continue, maintenance et formateur en informatique.',
    ],
  },
  {
    title: 'Stage – Développeur Web',
    company: 'Méalen Technology',
    location: 'Cotonou',
    period: 'Janv. 2022 – Août 2022',
    tasks: [
      'Développement d\'applications web pour les clients de l\'entreprise.',
      'Rédaction de rapports techniques et de documentation utilisateur.',
    ],
  },
]

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <h2 className="heading-title text-3xl sm:text-4xl mb-4">
          Expériences
        </h2>
        <div className="editorial-divider mx-auto" />
        <p className="text-cancer-silver max-w-lg mx-auto">
          Mon parcours professionnel et les projets auxquels j'ai contribué.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cancer-silver/10" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className={`relative mb-12 last:mb-0 ${idx % 2 === 0
              ? 'md:pr-[calc(50%+2rem)] md:text-right'
              : 'md:pl-[calc(50%+2rem)]'
              } pl-12 md:pl-0`}
          >
            {/* Dot */}
            <div
              className={`absolute top-2 w-3 h-3 rounded-full bg-cancer-cyan border-4 border-cancer-deep shadow-[0_0_10px_rgba(20,184,166,0.5)] z-10 ${idx % 2 === 0
                ? 'left-[10px] md:left-1/2 md:-translate-x-1/2'
                : 'left-[10px] md:left-1/2 md:-translate-x-1/2'
                }`}
            />

            <div className={`editorial-card p-6 ${idx % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}`}>
              <div className={`flex flex-wrap items-center gap-3 mb-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm bg-cancer-cyan/10 text-cancer-cyan border border-cancer-cyan/30">
                  <HiCalendar size={12} />
                  {exp.period}
                </span>
              </div>

              <h3 className="text-lg font-space font-bold text-cancer-moonlight mb-1">{exp.title}</h3>
              <div className={`flex items-center gap-3 text-sm text-cancer-silver mb-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                <span className="flex items-center gap-1">
                  <HiBriefcase className="text-cancer-cyan" size={14} />
                  {exp.company}
                </span>
                <span className="flex items-center gap-1">
                  <HiLocationMarker className="text-cancer-cyan" size={14} />
                  {exp.location}
                </span>
              </div>

              <ul className={`space-y-3 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                {exp.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="text-sm text-cancer-silver flex items-start gap-3">
                    <div className={`mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-cancer-cyan ${idx % 2 === 0 ? 'md:order-2' : ''}`} />
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
