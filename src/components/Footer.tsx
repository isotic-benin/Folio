import { FaLinkedinIn } from 'react-icons/fa'


const quickLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 bg-gray-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero') }} className="text-xl font-bold tracking-tight inline-block mb-3">
              <span className="gradient-text">A.</span>
              <span className="text-white">Fortuné</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ingénieur DevOps & Cloud · Fullstack Developer
              <br />
              Cotonou, Bénin
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-sm text-gray-500 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Réseaux sociaux
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/l-ange-fortun%C3%A9-akande-020671231"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/15 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} AKANDE L. Ange-Fortuné. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            Fait avec React.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
