import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import {
  SiDocker,
  SiTerraform,
  SiGitlab,
  SiGit,
  SiPrometheus,
  SiGrafana,
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
  SiLinux,
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
    title: 'DevOps & Cloud',
    color: 'from-emerald-50 to-white',
    borderColor: 'border-emerald-100/60',
    skills: [
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Docker Swarm', icon: <SiDocker /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'Terraform', icon: <SiTerraform /> },
      { name: 'GitLab CI/CD', icon: <SiGitlab /> },
      { name: 'Prometheus', icon: <SiPrometheus /> },
      { name: 'Grafana', icon: <SiGrafana /> },
      { name: 'SonarQube', icon: <SiSonarqubeserver /> },
      { name: 'AWS', icon: <FaAws /> },
    ],
  },
  {
    title: 'Développement',
    color: 'from-emerald-50 to-white',
    borderColor: 'border-emerald-100/60',
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
    color: 'from-emerald-50 to-white',
    borderColor: 'border-emerald-100/60',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Redis', icon: <SiRedis /> },
    ],
  },
  {
    title: 'Infrastructure & Systèmes',
    color: 'from-emerald-50 to-white',
    borderColor: 'border-emerald-100/60',
    skills: [
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'Windows', icon: <FaWindows /> },
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
          <span className="text-gray-900">Compétences</span>
        </h2>
        <div className="w-16 h-1 bg-emerald-600 rounded-full mx-auto mb-4" />
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
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-40 pointer-events-none`} />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-100/80 shadow-sm hover:border-emerald-200 transition-colors text-sm text-gray-600 hover:text-emerald-700"
                  >
                    <span className="text-emerald-600 text-base">{skill.icon}</span>
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
