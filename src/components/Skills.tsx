import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import {
  SiDocker,
  SiTerraform,
  SiGitlab,
  SiPrometheus,
  SiGrafana,
  SiSonarqubeserver,
  SiNextdotjs,
  SiGraphql,
  SiSwagger,
  SiHtml5,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiVmware,
  SiVirtualbox,
  SiLinux,
  SiSpringboot,
} from 'react-icons/si'
import { FaAws, FaWindows } from 'react-icons/fa'
import { HiServer, HiShieldCheck, HiCog } from 'react-icons/hi'

interface Skill {
  name: string
  icon: ReactNode
}

interface SkillCategory {
  title: string
  color: string
  borderColor: string
  skills: Skill[]
}

const categories: SkillCategory[] = [
  {
    title: 'Infra & Systèmes',
    color: 'from-cancer-ocean/50 to-cancer-deep/50',
    borderColor: 'border-cancer-silver/10',
    skills: [
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'Windows Server', icon: <FaWindows /> },
      { name: 'VMware', icon: <SiVmware /> },
      { name: 'VirtualBox', icon: <SiVirtualbox /> },
      { name: 'Maintenance', icon: <HiCog /> },
      { name: 'Sécurité backend', icon: <HiShieldCheck /> },
    ],
  },
  {
    title: 'DevOps & Cloud',
    color: 'from-cancer-ocean/50 to-cancer-deep/50',
    borderColor: 'border-cancer-silver/10',
    skills: [
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Harbor', icon: <SiDocker /> },
      { name: 'Nginx / Apache', icon: <HiServer /> },
      { name: 'Prometheus', icon: <SiPrometheus /> },
      { name: 'Grafana', icon: <SiGrafana /> },
      { name: 'GitLab CI/CD', icon: <SiGitlab /> },
      { name: 'Terraform', icon: <SiTerraform /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'SonarQube', icon: <SiSonarqubeserver /> },
    ],
  },
  {
    title: 'Réseaux & Services',
    color: 'from-cancer-ocean/50 to-cancer-deep/50',
    borderColor: 'border-cancer-silver/10',
    skills: [
      { name: 'LAN/WAN', icon: <HiServer /> },
      { name: 'DNS, DHCP', icon: <HiServer /> },
      { name: 'Active Directory', icon: <FaWindows /> },
      { name: 'VPN', icon: <HiShieldCheck /> },
      { name: 'Nagios', icon: <HiCog /> },
      { name: 'Wasuh', icon: <HiShieldCheck /> },
    ],
  },
  {
    title: 'Développement',
    color: 'from-cancer-ocean/50 to-cancer-deep/50',
    borderColor: 'border-cancer-silver/10',
    skills: [
      { name: 'Next.js / Node.js', icon: <SiNextdotjs /> },
      { name: 'Java / Spring Boot', icon: <SiSpringboot /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
      { name: 'Swagger', icon: <SiSwagger /> },
      { name: 'HTML5 / CSS3', icon: <SiHtml5 /> },
    ],
  },
  {
    title: 'Données',
    color: 'from-cancer-ocean/50 to-cancer-deep/50',
    borderColor: 'border-cancer-silver/10',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'Merise / UML', icon: <HiCog /> },
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
          Technologies et outils que j'utilise au quotidien pour concevoir des solutions modernes.
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
            className={`editorial-card p-6 overflow-hidden relative`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-40 pointer-events-none`} />
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
