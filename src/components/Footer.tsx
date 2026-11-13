const quickLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/l-ange-fortun%C3%A9-akande-020671231' },
  { label: 'Email', href: 'mailto:isoticsarl@gmail.com' },
]

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-cancer-deep border-t border-cancer-silver/20 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-cancer-silver/20">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
              className="font-space text-2xl font-medium tracking-tight text-cancer-moonlight"
            >
              A. Fortuné
            </a>
            <p className="mt-2 text-sm text-cancer-silver max-w-xs">
              Ingénieur de Production Informatique · Fullstack & DevOps
              <br />
              Cotonou, Bénin
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className="text-[11px] uppercase tracking-[0.18em] font-medium text-cancer-silver hover:text-cancer-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-xs text-cancer-silver">
            © {new Date().getFullYear()} AKANDE L. Ange-Fortuné. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.18em] font-medium text-cancer-silver hover:text-cancer-cyan transition-colors"
              >
                {social.label}
              </a>
            ))}
            <span className="text-xs text-cancer-silver/60">·</span>
            <span className="text-xs text-cancer-silver/60">Disponible pour opportunités remote</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer