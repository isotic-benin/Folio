import { FaLinkedinIn } from 'react-icons/fa'


const quickLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/l-ange-fortun%C3%A9-akande-020671231', icon: FaLinkedinIn },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-cancer-deep pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-cancer-silver/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero') }} className="text-xl font-space font-bold tracking-tight inline-block mb-3 text-cancer-moonlight">
              <span className="text-cancer-cyan">A.</span>
              <span>Fortuné</span>
            </a>
            <p className="text-cancer-silver text-sm leading-relaxed">
              Ingénieur DevOps & Cloud · Fullstack Developer
              <br />
              Cotonou, Bénin
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-space font-semibold text-cancer-pearl uppercase tracking-wider mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-sm text-cancer-silver hover:text-cancer-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-space font-semibold text-cancer-pearl uppercase tracking-wider mb-4">
              Réseaux sociaux
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm bg-cancer-ocean border border-cancer-silver/20 flex items-center justify-center text-cancer-silver hover:text-cancer-cyan hover:border-cancer-cyan/50 hover:bg-cancer-deep transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="pt-8 border-t border-cancer-silver/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cancer-silver/80 text-sm">
            © {new Date().getFullYear()} AKANDE L. Ange-Fortuné. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-cancer-silver/80 text-sm">
            <span>Portfolio</span>
            <span className="text-cancer-cyan">A.Fortuné</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
