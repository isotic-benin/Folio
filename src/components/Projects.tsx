import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { HiExternalLink, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import dgeauFront from '../assets/captures/dgeau/front.png'
import dgeauBack from '../assets/captures/dgeau/back.png'
import sol1 from '../assets/captures/solution1/1.jpeg'
import sol2 from '../assets/captures/solution1/2.jpeg'
import sol3 from '../assets/captures/solution1/3.jpeg'
import sol4 from '../assets/captures/solution1/4.jpeg'
import sol5 from '../assets/captures/solution1/5.jpeg'
import sol6 from '../assets/captures/solution1/6.jpeg'
import sol7 from '../assets/captures/solution1/7.jpeg'
import sol8 from '../assets/captures/solution1/8.jpeg'
import gankpo1 from '../assets/captures/gankpo/image.png'
import gankpo2 from '../assets/captures/gankpo/image copy.png'
import immovr1 from '../assets/captures/immovr/1.png'
import immovr2 from '../assets/captures/immovr/2.png'
import immovr3 from '../assets/captures/immovr/3.png'
import immovr4 from '../assets/captures/immovr/4.png'
import sigs1 from '../assets/captures/SIGS/1.png'
import sigs2 from '../assets/captures/SIGS/2.png'
import sigs3 from '../assets/captures/SIGS/3.png'
import sigs4 from '../assets/captures/SIGS/4.png'
import tontine1 from '../assets/captures/tontinePro/1.png'
import tontine2 from '../assets/captures/tontinePro/2.png'
import tontine3 from "../assets/captures/tontinePro/Capture d'écran 2026-09-07 101313.png"
import eprocure1 from '../assets/captures/eprocure/1.png'
import eprocure2 from '../assets/captures/eprocure/2.png'
import eprocure3 from '../assets/captures/eprocure/3.png'
import eprocure4 from '../assets/captures/eprocure/4.png'
import eprocure5 from '../assets/captures/eprocure/5.png'
import eprocure6 from '../assets/captures/eprocure/6.png'

interface Project {
  title: string
  description: string
  url: string
  tags: string[]
  images?: string[]
}

const projects: Project[] = [
  {
    title: 'Plateforme DG Eau du Bénin',
    description:
      'Plateforme nationale de gestion des ressources en eau du Bénin. Développement web fullstack et déploiement.',
    url: 'https://ressources-eau.gouv.bj',
    tags: ['Fullstack', 'Web', 'Production'],
    images: [dgeauFront, dgeauBack],
  },
  {
    title: 'Projet Forseti',
    description:
      'Back-office de gestion pour la justice béninoise. Application web sécurisée avec authentification.',
    url: 'https://tcc.justice.bj/',
    tags: ['Backend web', 'Sécurité', 'Justice'],
  },
  {
    title: 'ERP Multi-Stock & Retail',
    description:
      'Solution de gestion de stock multi-magasins destinée aux grands commerçants, pharmacies et supermarchés. Ventes avec tickets de caisse, approvisionnements, statistiques avancées, gestion des dettes (entreprise/clients), épargne client et gestion du personnel.',
    url: 'https://hgb.gestion-pro.shop/hgb/public/login.php',
    tags: ['Desktop', 'ERP', 'Gestion de stock', 'Retail'],
    images: [sol1, sol2, sol3, sol4, sol5, sol6, sol7, sol8],
  },
  {
    title: 'Écosystème Gankpo',
    description:
      'Suite complète de logiciels pour la création, la sécurisation, la signature et la vérification de documents électroniques originaux au format standardisé ouvert (.gkp). Construit sur Rust (Tauri) et React, garantissant sécurité et respect des standards cryptographiques.',
    url: 'https://www.gankpo.bj/fr/format-gkp',
    tags: ['Rust', 'Tauri', 'React', 'Cryptographie'],
    images: [gankpo1, gankpo2],
  },
  {
    title: 'ImmoVR – Plateforme Immobilière VR',
    description:
      "Plateforme immobilière innovante permettant la visite virtuelle 360° d'appartements. Recherche de biens, disponibilité en temps réel et panneaux d'administration complets.",
    url: 'https://urbanstay229.com/',
    tags: ['React', 'Fullstack', 'Immobilier', 'VR 360°'],
    images: [immovr1, immovr2, immovr3, immovr4],
  },
  {
    title: 'SIGS',
    description:
      "Système Intégré de Gestion Scolaire. Application web complète pour la gestion administrative et pédagogique d'un établissement scolaire.",
    url: '#',
    tags: ['Fullstack', 'Web', 'Gestion'],
    images: [sigs1, sigs2, sigs3, sigs4],
  },
  {
    title: 'TontinePro',
    description:
      "Application mobile fintech de collecte et de distribution de tontine via la solution de paiement KkiaPay.",
    url: '#',
    tags: ['Mobile', 'Fintech', 'KkiaPay'],
    images: [tontine1, tontine2, tontine3],
  },
  {
    title: 'E-Procurement SaaS',
    description:
      "Plateforme SaaS complète d'e-procurement destinée à accompagner les entreprises dans la digitalisation de leurs processus d'achat : gestion des fournisseurs, appels d'offres, commandes, validations et suivi budgétaire. Interface moderne et sécurisée offrant une traçabilité totale des achats, du besoin à la livraison.",
    url: '#',
    tags: ['SaaS', 'E-procurement', 'Fullstack', 'Production'],
    images: [eprocure1, eprocure2, eprocure3, eprocure4, eprocure5, eprocure6],
  },
]

const Projects = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [currentImageIdx, setCurrentImageIdx] = useState(0)

  const openModal = (e: React.MouseEvent, images: string[]) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedImages(images)
    setCurrentImageIdx(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImages([])
    document.body.style.overflow = 'auto'
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIdx((prev) => (prev === selectedImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIdx((prev) => (prev === 0 ? selectedImages.length - 1 : prev - 1))
  }

  return (
    <SectionWrapper id="projects">
      <div className="grid md:grid-cols-12 gap-10 mb-8">
        <div className="md:col-span-4">
          <h2 className="font-space text-4xl md:text-5xl font-medium tracking-tight text-cancer-moonlight">
            Projets
          </h2>
          <div className="mt-4 w-12 h-px bg-cancer-cyan" />
          <p className="mt-4 text-sm text-cancer-silver">
            Quelques projets significatifs auxquels j'ai contribué.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 border-t border-cancer-silver/20 pt-8">
        {projects.map((project, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 2) * 0.08, duration: 0.4 }}
            className="group flex flex-col border-b border-cancer-silver/20 pb-8"
          >
            {project.images && (
              <div
                onClick={(e) => openModal(e, project.images!)}
                className="relative overflow-hidden mb-4 cursor-pointer bg-cancer-ocean"
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-cancer-moonlight/0 group-hover:bg-cancer-moonlight/5 transition-colors" />
                {project.images.length > 1 && (
                  <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.18em] font-medium text-white bg-cancer-moonlight/70 px-2 py-1">
                    {project.images.length} images
                  </span>
                )}
              </div>
            )}

            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-space text-xl font-medium text-cancer-moonlight group-hover:text-cancer-cyan transition-colors">
                {project.title}
              </h3>
              {project.url && project.url !== '#' && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-cancer-silver hover:text-cancer-cyan transition-colors"
                  aria-label="Ouvrir le projet"
                >
                  <HiExternalLink size={18} />
                </a>
              )}
            </div>

            <p className="text-sm text-cancer-silver leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-[0.16em] font-medium text-cancer-silver border border-cancer-silver/30 px-2 py-1"
                >
                  {tag}
                </span>
              ))}
              {project.images && (
                <button
                  onClick={(e) => openModal(e, project.images!)}
                  className="text-[10px] uppercase tracking-[0.16em] font-medium text-cancer-cyan border border-cancer-cyan/40 px-2 py-1 hover:bg-cancer-cyan/10 transition-colors"
                >
                  Voir les captures
                </button>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-10"
            >
              <HiX size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh] flex items-center justify-center">
                <img
                  key={currentImageIdx}
                  src={selectedImages[currentImageIdx]}
                  alt={`Screenshot ${currentImageIdx + 1}`}
                  className="max-w-full max-h-full object-contain"
                />

                {selectedImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors"
                    >
                      <HiChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors"
                    >
                      <HiChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {selectedImages.length > 1 && (
                <div className="mt-4 flex gap-2">
                  {selectedImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIdx(idx)}
                      className={`h-px transition-all ${idx === currentImageIdx ? 'bg-white w-8' : 'bg-white/30 w-4 hover:bg-white/60'
                        }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}

export default Projects