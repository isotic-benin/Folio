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
  SiAngular,
  SiOpenjdk,
  SiSwagger,
  SiHtml5,
  SiCss,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiVmware,
  SiVirtualbox,
  SiLinux,
  SiUbuntu,
  SiCentos,
  SiGooglecloud,
  SiOpenvpn,
} from 'react-icons/si'
import { FaAws, FaWindows } from 'react-icons/fa'
import {
  HiServer,
  HiShieldCheck,
  HiCog,
  HiDatabase,
  HiWifi,
  HiSwitchHorizontal,
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
      { name: 'Ubuntu Server', icon: <SiUbuntu /> },
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
      { name: 'Terraform', icon: <SiTerraform /> },
      { name: 'SonarQube', icon: <SiSonarqubeserver /> }
    ],
  },
  {
    title: 'Réseaux & Services',
    skills: [
      { name: 'LAN / WAN', icon: <HiServer /> },
      { name: 'Switchs & routeurs', icon: <HiSwitchHorizontal /> },
      { name: 'Wi-Fi', icon: <HiWifi /> },
      { name: 'Câblage réseau', icon: <HiServer /> },
      { name: 'DNS & DHCP', icon: <HiServer /> },
      { name: 'Active Directory', icon: <FaWindows /> },
      { name: 'Nagios (supervision)', icon: <HiShieldCheck /> },
    ],
  },
  {
    title: 'Développement',
    skills: [
      { name: 'PHP', icon: <SiOpenjdk /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'JavaScript', icon: <SiAngular /> },
      { name: 'Swagger', icon: <SiSwagger /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss /> },
    ],
  },
  {
    title: 'Données & Modélisation',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'Merise (MCD / MLD)', icon: <HiDatabase /> },
      { name: 'UML', icon: <HiDatabase /> },
    ],
  },
]

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="relative">
      <div className="text-center mb-16">
        <h2 className="heading-title text-3xl sm:text-4xl mb-4">
          Compétences
        </h2>
        <div className="editorial-divider mx-auto" />
        <p className="text-cancer-silver max-w-lg mx-auto">
          Les technologies et outils que je manipule au quotidien, du serveur à l'interface.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1, duration: 0.5 }}
            className="editorial-card p-6 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cancer-ocean/50 to-cancer-deep/50 opacity-40 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-lg font-space font-semibold text-cancer-pearl mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-sm bg-cancer-deep border border-cancer-silver/20 shadow-sm hover:border-cancer-cyan/50 hover:bg-cancer-cyan/5 transition-colors text-sm text-cancer-silver hover:text-cancer-pearl"
                  >
                    <span className="text-cancer-cyan text-base">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Skills
