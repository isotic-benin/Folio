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
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="text-gray-900">Formation & Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-emerald-600 rounded-full mx-auto mb-4" />
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
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/50">
              <HiAcademicCap size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Formation</h3>
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
                   className={`glass-card p-5 transition-colors block ${edu.url ? 'hover:border-emerald-300 cursor-pointer' : 'hover:border-emerald-200'}`}
                >
                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100/50 mb-3">
                    {edu.year}
                  </span>
                  <h4 className="text-gray-900 font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-gray-600 text-sm">{edu.school}</p>
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
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/50">
              <HiBadgeCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
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
                 whileHover={{ y: -2 }}
                 className="glass-card p-5 hover:border-emerald-300 transition-all cursor-pointer block group"
               >
                 <h4 className="text-gray-900 font-semibold mb-1 group-hover:text-emerald-600 transition-colors">{cert.name}</h4>
                 <p className="text-gray-600 text-sm flex items-center gap-1.5">
                   <HiBadgeCheck className="text-emerald-500" size={14} />
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
