import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Formation', href: '#education' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
      const sections = ['hero', ...navLinks.map(l => l.href.slice(1))]
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-cancer-deep/90 backdrop-blur-md border-b border-cancer-silver/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick('#hero') }}
            className="flex items-baseline gap-2 group"
          >
            <span className="font-space text-xl font-medium tracking-tight text-cancer-moonlight">
              A. Fortuné
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-cancer-silver font-mono">
              Prod. Inf.
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                className={`relative text-[11px] uppercase tracking-[0.18em] font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-cancer-cyan'
                    : 'text-cancer-silver hover:text-cancer-moonlight'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-cancer-cyan"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-cancer-silver hover:text-cancer-moonlight transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-cancer-deep/95 backdrop-blur-md border-b border-cancer-silver/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                  className={`block px-2 py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-cancer-cyan'
                      : 'text-cancer-silver hover:text-cancer-moonlight'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar