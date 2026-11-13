import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import {
  SiDocker,
  SiGitlab,
  SiSonarqubeserver,
  SiNginx,
  SiApache,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiSwagger,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiVmware,
  SiVirtualbox,
  SiLinux,
  SiUbuntu,
  SiCentos
} from 'react-icons/si'
import { FaWindows } from 'react-icons/fa'
import {
  HiServer,
  HiShieldCheck,
  HiCog,
  HiDatabase,
  HiWifi,
  HiSwitchHorizontal,
  HiLightBulb,
} from 'react-icons/hi'

interface Skill {
  name: string
  icon: ReactNode
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const categories: SkillCategory[] = [
  {
    title: 'Infra & Systèmes',
    skills: [
      { name: 'Linux (Ubuntu, CentOS)', icon: <SiLinux /> },
      { name: 'Ubuntu', icon: <SiUbuntu /> },
      { name: 'CentOS', icon: <SiCentos /> },
      { name: 'VMware', icon: <SiVmware /> },
      { name: 'VirtualBox', icon: <SiVirtualbox /> },
      { name: 'Maintenance matérielle & logicielle', icon: <HiCog /> },
      { name: 'Sécurité : accès, authentification, pare-feu', icon: <HiShieldCheck /> },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker (Compose, Swarm)', icon: <SiDocker /> },
      { name: 'Docker Hub', icon: <SiDocker /> },
      { name: 'Nginx', icon: <SiNginx /> },
      { name: 'Apache', icon: <SiApache /> },
      { name: 'GitLab CI/CD', icon: <SiGitlab /> },
      { name: 'SonarQube', icon: <SiSonarqubeserver /> },
    ],
  },
  {
    title: 'Réseaux & Services',
    skills: [
      { name: 'LAN / WAN', icon: <HiServer /> },
      { name: 'Switchs & routeurs', icon: <HiSwitchHorizontal /> },
      { name: 'Wi-Fi', icon: <HiWifi /> },
      { name: 'Câblage réseau', icon: <HiServer /> },
      { name: 'DNS', icon: <HiServer /> },
      { name: 'DHCP', icon: <HiServer /> },
      { name: 'Active Directory', icon: <FaWindows /> },
      { name: 'Nagios', icon: <HiShieldCheck /> },
    ],
  },
  {
    title: 'Développement',
    skills: [
      { name: 'PHP', icon: <SiPhp /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Swagger', icon: <SiSwagger /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss /> },
      { name: 'JavaScript', icon: <SiNodedotjs /> },
    ],
  },
  {
    title: 'Données',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'Merise (MCD / MLD)', icon: <HiDatabase /> },
      { name: 'UML', icon: <HiDatabase /> },
    ],
  },
  {
    title: 'Utilisation de l’outil IA',
    skills: [
      { name: 'Maîtrise avancée du Prompt Engineering', icon: <HiLightBulb /> },
    ],
  },
]

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="grid md:grid-cols-12 gap-10 mb-8">
        <div className="md:col-span-4">
          <h2 className="font-space text-4xl md:text-5xl font-medium tracking-tight text-cancer-moonlight">
            Compétences
          </h2>
          <div className="mt-4 w-12 h-px bg-cancer-cyan" />
          <p className="mt-4 text-sm text-cancer-silver">
            Les technologies et outils que je manipule au quotidien, du serveur à l'interface.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 border-t border-cancer-silver/20 pt-8">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.06, duration: 0.4 }}
          >
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium text-cancer-cyan mb-3">
              {cat.title}
            </h3>
            <ul className="space-y-1.5">
              {cat.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 text-sm text-cancer-pearl"
                >
                  <span className="text-cancer-silver/60 text-xs">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Skills