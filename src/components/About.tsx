import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { HiCheckCircle } from 'react-icons/hi'

const expertiseItems = [
  "l'automatisation d'infrastructure avec Terraform",
  'la mise en place de pipelines CI/CD',
  "l'orchestration de conteneurs avec Docker",
  'le développement fullstack avec Java Spring Boot, Node.js, React.js et Next.js',
]

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left — decorative card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="glass-card p-8 border-gray-200/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/40" />
            </div>
            <pre className="text-sm font-mono text-gray-500 leading-relaxed">
              <code>
                <span className="text-emerald-600">const</span>{' '}
                <span className="text-gray-700">developer</span> = {'{\n'}
                {'  '}
                <span className="text-gray-500">name</span>:{' '}
                <span className="text-emerald-700">"Ange-Fortuné"</span>,{'\n'}
                {'  '}
                <span className="text-gray-500">role</span>:{' '}
                <span className="text-emerald-700">"DevOps & Fullstack"</span>,{'\n'}
                {'  '}
                <span className="text-gray-500">location</span>:{' '}
                <span className="text-emerald-700">"Cotonou, Bénin"</span>,{'\n'}
                {'  '}
                <span className="text-gray-500">passion</span>:{' '}
                <span className="text-emerald-700">"Cloud & Automation"</span>,{'\n'}
                {'  '}
                <span className="text-gray-500">available</span>:{' '}
                <span className="text-emerald-600">true</span>{'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Right — text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-gray-900">À propos</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-600 rounded-full mb-6" />

          <p className="text-gray-600 leading-relaxed mb-6">
            Développeur et ingénieur informatique spécialisé dans la conception et la mise en
            production de solutions informatiques modernes. Passionné par le{' '}
            <span className="text-emerald-600 font-medium">Cloud</span>, le{' '}
            <span className="text-emerald-600 font-medium">DevOps</span> et l'optimisation des
            processus de livraison logicielle, je conçois des architectures fiables, scalables et
            performantes.
          </p>

          <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-4">
            Expertise dans :
          </p>
          <ul className="space-y-3">
            {expertiseItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-3 text-gray-600"
              >
                <HiCheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={20} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default About
