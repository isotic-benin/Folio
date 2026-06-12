import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi'

const education = [
  {
    degree: 'Licence Professionnelle Internet et Multimédia',
    school: 'IFRI / UAC',
    year: '2023',
  },
  {
    degree: 'Certificat Professionnel Ingénierie Logicielle',
    school: 'Saylor Academy',
    year: '2025',
    url: 'https://learn.saylor.org/admin/tool/certificate/index.php?code=0481808172AL',
  },
]

const certifications = [
  {
    name: 'Introduction to Cloud Infrastructure Technologies',
    issuer: 'Linux Foundation',
    url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/6b9cbcca-175d-4ccb-aaab-025d3bb437a8-latoudji-ange-fortun-akande-e45faccf-37c4-42ff-8e3a-8680bc71b0d2-certificate.pdf',
  },
  {
    name: 'DevSecOps for Manager',
    issuer: 'Linux Foundation',
    url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/6b9cbcca-175d-4ccb-aaab-025d3bb437a8-latoudji-ange-fortun-akande-545d4ead-2313-410a-8cfe-47df0d0628c0-certificate.pdf',
  },
  {
    name: 'Flutter Dart',
    issuer: 'Udemy',
    url: 'https://www.udemy.com/certificate/UC-c11dc014-8025-42b2-a8ac-2bfa362a9533/',
  },
]

const Education = () => {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-16">
        <h2 className="heading-title text-3xl sm:text-4xl mb-4">
          Formation & Certifications
        </h2>
        <div className="editorial-divider mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-cancer-cyan/10 text-cancer-cyan border border-cancer-cyan/30">
              <HiAcademicCap size={24} />
            </div>
            <h3 className="text-xl font-space font-bold text-cancer-moonlight">Formation</h3>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => {
              const EduWrapper = edu.url ? motion.a : motion.div
              return (
                <EduWrapper
                  key={idx}
                  href={edu.url}
                  target={edu.url ? "_blank" : undefined}
                  rel={edu.url ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`editorial-card p-5 block border-cancer-silver/10 ${edu.url ? 'hover:border-cancer-cyan/50 cursor-pointer' : ''}`}
                >
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-cancer-deep text-cancer-cyan border border-cancer-silver/20 mb-3">
                    {edu.year}
                  </span>
                  <h4 className="text-cancer-pearl font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-cancer-silver text-sm">{edu.school}</p>
                </EduWrapper>
              )
            })}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-cancer-cyan/10 text-cancer-cyan border border-cancer-cyan/30">
              <HiBadgeCheck size={24} />
            </div>
            <h3 className="text-xl font-space font-bold text-cancer-moonlight">Certifications</h3>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="editorial-card p-5 hover:border-cancer-cyan/50 border-cancer-silver/10 transition-all cursor-pointer block group"
              >
                <h4 className="text-cancer-pearl font-semibold mb-1 group-hover:text-cancer-cyan transition-colors">{cert.name}</h4>
                <p className="text-cancer-silver text-sm flex items-center gap-1.5">
                  <HiBadgeCheck className="text-cancer-cyan" size={14} />
                  {cert.issuer}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Education
