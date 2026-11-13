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
    title: 'Développeur Fullstack',
    company: 'Péro Groupe',
    location: 'Cotonou, Bénin',
    period: 'Août 2025 – Présent',
    tasks: [
      "Conception et développement d'APIs RESTful, packagées et déployées via Docker sur un registry privé (Docker Hub).",
      "Mise en place et configuration de serveurs web (Nginx/Apache) pour le déploiement et l'exposition des services.",
      'Analyse de la qualité du code avec SonarQube pour assurer la fiabilité et la maintenabilité des applications.',
      "Développement d'interfaces utilisateur dynamiques et responsives avec NextJs.",
      "Intégration d'APIs côté frontend via Axios / Fetch API, avec gestion des états asynchrones (loading, error, retry).",
      "Documentation technique des APIs facilitant l'intégration entre équipes et les tests.",
      'Collaboration avec les équipes produit et design dans un environnement agile, avec revues de code régulières et amélioration continue.',
    ],
  },
  {
    title: 'Développeur Fullstack Freelance',
    company: 'Indépendant',
    location: 'Bénin & Remote',
    period: '2022 – Présent',
    tasks: [
      "Conception et développement d'applications web de bout en bout pour des clients, du cadrage du besoin à la mise en production.",
      "Développement d'APIs REST et d'interfaces web modernes (Node.js, Next.js, PHP, NextJs).",
      'Conteneurisation et déploiement des applications avec Docker, mise en place de pipelines CI/CD.',
      'Rédaction de la documentation technique et accompagnement des clients dans la prise en main des solutions.',
    ],
  },
  {
    title: 'Administration Réseau et Système',
    company: 'CPET ESTAM',
    location: 'Porto-Novo, Bénin',
    period: 'Oct. 2022 – Juil. 2025',
    tasks: [
      'Administration et supervision quotidienne de serveurs en production, hébergeant des applications métiers critiques.',
      "Administration de la base de données des apprenants et du personnel ; administration de bases PostgreSQL (installation, maintenance, sécurisation).",
      "Administration de l'infrastructure réseau LAN/WAN (switchs, routeurs, points d'accès sans fil, Pare feu).",
      'Déploiement et gestion de services réseau : DNS, DHCP, Active Directory.',
      "Mise en œuvre de sauvegardes automatisées et de plans de reprise d'activité (PRA) pour garantir la continuité de service.",
      'Supervision proactive avec Nagios : monitoring, alerting en temps réel et diagnostic d\'incidents.',
      "Gestion des comptes utilisateurs, des droits d'accès et application de bonnes pratiques de sécurité système.",
      'Diagnostic et résolution d\'incidents système et réseau dans des délais courts, avec analyse des causes racines (RCA).',
      "Documentation technique des incidents, des procédures d'exploitation et des changements ; veille technologique continue (sécurité, correctifs, outils Linux et Windows).",
      'Maintenance et gestion du parc informatique.',
      "Formateur en informatique : transmission des bonnes pratiques et assistance aux utilisateurs et collègues.",
    ],
  },
  {
    title: 'Stage – Développeur Web',
    company: 'Méalen Technology',
    location: 'Cotonou, Bénin',
    period: 'Janv. 2022 – Août 2022',
    tasks: [
      "Développement d'applications web pour les clients de l'entreprise.",
      'Rédaction de rapports techniques et de documentation utilisateur.',
    ],
  },
]

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="grid md:grid-cols-12 gap-10 mb-8">
        <div className="md:col-span-4">
          <h2 className="font-space text-4xl md:text-5xl font-medium tracking-tight text-cancer-moonlight">
            Expériences
          </h2>
          <div className="mt-4 w-12 h-px bg-cancer-cyan" />
          <p className="mt-4 text-sm text-cancer-silver">
            Mon parcours professionnel, du développement fullstack à l'administration système et réseau.
          </p>
        </div>
      </div>

      <div className="border-t border-cancer-silver/20">
        {experiences.map((exp, idx) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="grid md:grid-cols-12 gap-6 py-8 border-b border-cancer-silver/20"
          >
            <div className="md:col-span-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-medium text-cancer-cyan">
                <HiCalendar size={11} />
                {exp.period}
              </span>
              <h3 className="mt-3 font-space text-lg font-medium text-cancer-moonlight leading-snug">
                {exp.title}
              </h3>
              <div className="mt-2 space-y-1 text-sm text-cancer-silver">
                <span className="flex items-center gap-1.5">
                  <HiBriefcase className="text-cancer-cyan shrink-0" size={13} />
                  {exp.company}
                </span>
                <span className="flex items-center gap-1.5">
                  <HiLocationMarker className="text-cancer-cyan shrink-0" size={13} />
                  {exp.location}
                </span>
              </div>
            </div>

            <ul className="md:col-span-9 space-y-2.5">
              {exp.tasks.map((task, tIdx) => (
                <li
                  key={tIdx}
                  className="text-sm text-cancer-silver flex items-start gap-3 leading-relaxed"
                >
                  <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-cancer-cyan" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Experience