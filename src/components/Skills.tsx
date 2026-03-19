import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGitlab,
  SiPrometheus,
  SiGrafana,
  SiSentry,
  SiSonarqubeserver,
  SiSpringboot,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiGraphql,
  SiSwagger,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiVmware,
  SiVirtualbox,
  SiFlutter,
  SiDart,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
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
    title: 'DevOps & Cloud',
    color: 'from-indigo-500/20 to-indigo-500/0',
    borderColor: 'border-indigo-500/20',
    skills: [
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Terraform', icon: <SiTerraform /> },
      { name: 'GitLab CI/CD', icon: <SiGitlab /> },
      { name: 'Prometheus', icon: <SiPrometheus /> },
      { name: 'Grafana', icon: <SiGrafana /> },
      { name: 'Sentry', icon: <SiSentry /> },
      { name: 'SonarQube', icon: <SiSonarqubeserver /> },
      { name: 'AWS', icon: <FaAws /> },
    ],
  },
  {
    title: 'Développement',
    color: 'from-purple-500/20 to-purple-500/0',
    borderColor: 'border-purple-500/20',
    skills: [
      { name: 'Java / Spring Boot', icon: <SiSpringboot /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'Dart', icon: <SiDart /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
      { name: 'Swagger', icon: <SiSwagger /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss /> },
    ],
  },
  {
    title: 'Bases de données',
    color: 'from-cyan-500/20 to-cyan-500/0',
    borderColor: 'border-cyan-500/20',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Redis', icon: <SiRedis /> },
    ],
  },
  {
    title: 'Infrastructure & Systèmes',
    color: 'from-emerald-500/20 to-emerald-500/0',
    borderColor: 'border-emerald-500/20',
    skills: [
      { name: 'VMware', icon: <SiVmware /> },
      { name: 'VirtualBox', icon: <SiVirtualbox /> },
      { name: 'Admin réseau', icon: <HiServer /> },
      { name: 'Maintenance', icon: <HiCog /> },
      { name: 'Sécurité backend', icon: <HiShieldCheck /> },
    ],
  },
]

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="gradient-text">Compétences</span>
        </h2>
        <div className="w-16 h-1 bg-indigo-500 rounded-full mx-auto mb-4" />
        <p className="text-gray-400 max-w-lg mx-auto">
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
            className={`glass-card p-6 border ${cat.borderColor} overflow-hidden relative`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} pointer-events-none`} />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-white mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/15 transition-colors text-sm text-gray-300"
                  >
                    <span className="text-indigo-400 text-base">{skill.icon}</span>
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
