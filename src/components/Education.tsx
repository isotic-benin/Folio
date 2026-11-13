import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { HiAcademicCap, HiBadgeCheck, HiGlobe } from 'react-icons/hi'

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

const languages = [
  { name: 'Français', level: 'Natif', progress: 100 },
  { name: 'Anglais', level: 'Intermédiaire (B1)', progress: 60 },
]

const certifications = [
  {
    name: 'Technicien Réseau',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    url: 'https://www.credly.com/badges/97c42235-7ba6-4d06-a843-3608de42aae2/public_url',
  },
  {
    name: 'Introduction to Cloud Infrastructure Technologies',
    issuer: 'The Linux Foundation',
    year: '2025',
    url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/6b9cbcca-175d-4ccb-aaab-025d3bb437a8-latoudji-ange-fortun-akande-e45faccf-37c4-42ff-8e3a-8680bc71b0d2-certificate.pdf',
  },
  {
    name: 'DevSecOps for Manager',
    issuer: 'The Linux Foundation',
    year: '2025',
    url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/6b9cbcca-175d-4ccb-aaab-025d3bb437a8-latoudji-ange-fortun-akande-545d4ead-2313-410a-8cfe-47df0d0628c0-certificate.pdf',
  },
  {
    name: 'Flutter Dart',
    issuer: 'Udemy',
    year: '2022',
    url: 'https://www.udemy.com/certificate/UC-c11dc014-8025-42b2-a8ac-2bfa362a9533/',
  },
]

const Education = () => {
  return (
    <SectionWrapper id="education">
      <div className="grid md:grid-cols-12 gap-10 mb-8">
        <div className="md:col-span-4">
          <h2 className="font-space text-4xl md:text-5xl font-medium tracking-tight text-cancer-moonlight">
            Formation & Certifications
          </h2>
          <div className="mt-4 w-12 h-px bg-cancer-cyan" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 border-t border-cancer-silver/20 pt-8">
        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <HiAcademicCap className="text-cancer-cyan" size={18} />
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium text-cancer-silver">
              Formation
            </h3>
          </div>
          <div className="space-y-5">
            {education.map((edu, idx) => {
              const EduWrapper = edu.url ? motion.a : motion.div
              return (
                <EduWrapper
                  key={idx}
                  href={edu.url}
                  target={edu.url ? '_blank' : undefined}
                  rel={edu.url ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`block border-l-2 border-cancer-silver/20 pl-4 ${edu.url ? 'hover:border-cancer-cyan cursor-pointer' : ''}`}
                >
                  <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-cancer-cyan">
                    {edu.year}
                  </span>
                  <h4 className="mt-1 text-cancer-pearl font-medium">{edu.degree}</h4>
                  <p className="text-cancer-silver text-sm">{edu.school}</p>
                </EduWrapper>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <HiBadgeCheck className="text-cancer-cyan" size={18} />
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium text-cancer-silver">
              Certifications
            </h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="block border-l-2 border-cancer-silver/20 pl-4 hover:border-cancer-cyan transition-colors group"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="text-cancer-pearl font-medium group-hover:text-cancer-cyan transition-colors">
                    {cert.name}
                  </h4>
                  <span className="shrink-0 text-[11px] font-medium text-cancer-cyan">
                    {cert.year}
                  </span>
                </div>
                <p className="text-cancer-silver text-sm flex items-center gap-1.5 mt-0.5">
                  <HiBadgeCheck className="text-cancer-cyan shrink-0" size={13} />
                  {cert.issuer}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Langues */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 border-t border-cancer-silver/20 pt-8"
      >
        <div className="flex items-center gap-2 mb-5">
          <HiGlobe className="text-cancer-cyan" size={18} />
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium text-cancer-silver">
            Langues
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {languages.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <div className="flex items-baseline justify-between mb-2">
                <h4 className="text-cancer-pearl font-medium">{lang.name}</h4>
                <span className="text-[11px] uppercase tracking-[0.18em] text-cancer-cyan font-medium">
                  {lang.level}
                </span>
              </div>
              <div className="h-px w-full bg-cancer-silver/20">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
                  className="h-px bg-cancer-cyan"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

export default Education