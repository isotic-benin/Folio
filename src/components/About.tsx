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
          <div className="glass-card p-8 glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <pre className="text-sm font-mono text-gray-300 leading-relaxed">
              <code>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-400">developer</span> = {'{\n'}
                {'  '}
                <span className="text-indigo-300">name</span>:{' '}
                <span className="text-green-300">"Ange-Fortuné"</span>,{'\n'}
                {'  '}
                <span className="text-indigo-300">role</span>:{' '}
                <span className="text-green-300">"DevOps & Fullstack"</span>,{'\n'}
                {'  '}
                <span className="text-indigo-300">location</span>:{' '}
                <span className="text-green-300">"Cotonou, Bénin"</span>,{'\n'}
                {'  '}
                <span className="text-indigo-300">passion</span>:{' '}
                <span className="text-green-300">"Cloud & Automation"</span>,{'\n'}
                {'  '}
                <span className="text-indigo-300">available</span>:{' '}
                <span className="text-yellow-300">true</span>{'\n'}
                {'}'};
              </code>
            </pre>
          </div>
          <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-indigo-500/10 rounded-2xl blur-xl" />
        </motion.div>

        {/* Right — text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="gradient-text">À propos</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mb-6" />

          <p className="text-gray-300 leading-relaxed mb-6">
            Développeur et ingénieur informatique spécialisé dans la conception et la mise en
            production de solutions informatiques modernes. Passionné par le{' '}
            <span className="text-indigo-400 font-medium">Cloud</span>, le{' '}
            <span className="text-indigo-400 font-medium">DevOps</span> et l'optimisation des
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
                className="flex items-start gap-3 text-gray-300"
              >
                <HiCheckCircle className="text-indigo-400 mt-0.5 flex-shrink-0" size={20} />
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
