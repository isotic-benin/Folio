import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { HiExternalLink, HiEye, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
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
    url: 'https://bo.tcc.justice.bj/auth/login',
    tags: ['Backend Java Spring Boot', 'Sécurité', 'Justice'],
  },
  {
    title: 'ERP Multi-Stock & Retail',
    description:
      'Solution de gestion de stock multi-magasins destinée aux grands commerçants, pharmacies et supermarchés. Ventes avec tickets de caisse, approvisionnements, statistiques avancées, gestion des dettes (entreprise/clients), épargne client et gestion du personnel.',
    url: 'https://hgb.gestion-pro.shop/hgb/public/login.php',
    tags: ['Desktop', 'ERP', 'Gestion de stock', 'Retail', 'Supermarchés'],
    images: [sol1, sol2, sol3, sol4, sol5, sol6, sol7, sol8]
  },
  {
    title: 'Écosystème Gankpo',
    description:
      'Suite complète de logiciels pour la création, la sécurisation, la signature et la vérification de documents électroniques originaux au format standardisé ouvert (.gkp). Construit sur Rust (Tauri) et React, garantissant sécurité et respect des standards cryptographiques.',
    url: 'https://www.gankpo.bj/fr/format-gkp',
    tags: ['Rust', 'Tauri', 'React', 'Cryptographie', 'Desktop'],
    images: [gankpo1, gankpo2],
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
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="text-gray-900">Projets</span>
        </h2>
        <div className="w-16 h-1 bg-emerald-600 rounded-full mx-auto mb-4" />
        <p className="text-gray-400 max-w-lg mx-auto">
          Quelques projets significatifs auxquels j'ai contribué.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group glass-card p-6 cursor-pointer hover:border-emerald-200 transition-all duration-300 block shadow-sm border-gray-100"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <HiExternalLink
                size={20}
                className="text-gray-400 group-hover:text-emerald-600 transition-colors"
              />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Actions */}
            {project.images && (
              <div
                onClick={(e) => openModal(e, project.images!)}
                className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 transition-colors cursor-pointer"
              >
                <HiEye size={18} />
                <span className="text-sm font-medium">Voir images</span>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/95 backdrop-blur-md p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white hover:bg-red-500/20 hover:text-red-400 transition-colors z-10"
            >
              <HiX size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh] flex items-center justify-center">
                <img
                  key={currentImageIdx}
                  src={selectedImages[currentImageIdx]}
                  alt={`Screenshot ${currentImageIdx + 1}`}
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-black/50"
                />

                {selectedImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-white text-gray-700 hover:bg-gray-100 transition-colors shadow-lg border border-gray-200"
                    >
                      <HiChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-white text-gray-700 hover:bg-gray-100 transition-colors shadow-lg border border-gray-200"
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
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIdx ? 'bg-emerald-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
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
