'use client'

import { useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#4C1D6B]/95 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-[#6B1E7A] to-[#4C1D6B] rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#E81E7C] z-10"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 pt-10">
                <h2
                  id="modal-title"
                  className="text-white text-2xl sm:text-3xl font-bold mb-5 text-center"
                >
                  Confirme sua Inscrição
                </h2>

                {/* Google Form iframe */}
                <div className="w-full flex justify-center rounded-2xl overflow-hidden">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe5yojtve_aNi5ZDrkam_E3aElloXrU-hSHkrcXiMzoHoU58w/viewform?embedded=true"
                    width="640"
                    height="556"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full max-w-xl"
                    title="Formulário de inscrição"
                  >
                    Carregando…
                  </iframe>
                </div>
              </div>

              {/* Decorative gradient line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6B1E7A] via-[#E81E7C] to-[#9F2B8C]"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
