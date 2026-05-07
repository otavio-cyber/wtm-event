'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Loader2 } from 'lucide-react'

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

type ModalStep = 'confirm' | 'form' | 'success'

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [step, setStep] = useState<ModalStep>('confirm')
  const [formData, setFormData] = useState({ name: '', crm: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; crm?: string }>({})

  const resetModal = useCallback(() => {
    setStep('confirm')
    setFormData({ name: '', crm: '' })
    setErrors({})
    setIsSubmitting(false)
  }, [])

  const handleClose = useCallback(() => {
    onClose()
    // Reset after animation completes
    setTimeout(resetModal, 300)
  }, [onClose, resetModal])

  const validateForm = () => {
    const newErrors: { name?: string; crm?: string } = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome completo é obrigatório'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres'
    }
    
    if (!formData.crm.trim()) {
      newErrors.crm = 'CRM é obrigatório'
    } else if (!/^\d{4,8}$/.test(formData.crm.trim())) {
      newErrors.crm = 'CRM deve conter apenas números (4-8 dígitos)'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Simula envio para Google Sheets via Webhook
      // Para integração real, substitua pelo endpoint do Make.com ou Zapier
      // Exemplo: 
      // await fetch('https://hook.make.com/seu-webhook-id', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     nome: formData.name,
      //     crm: formData.crm,
      //     evento: 'VNS Therapy Night',
      //     data_inscricao: new Date().toISOString(),
      //   }),
      // })
      
      // Simulação de delay de rede
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('[v0] Dados de inscrição:', {
        nome: formData.name,
        crm: formData.crm,
        evento: 'VNS Therapy Night',
        dataInscricao: new Date().toISOString(),
      })
      
      setStep('success')
    } catch (error) {
      console.error('[v0] Erro ao enviar inscrição:', error)
      setErrors({ name: 'Erro ao enviar. Tente novamente.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleConfirmNo = () => {
    handleClose()
  }

  const handleConfirmYes = () => {
    setStep('form')
  }

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
              className="relative w-full max-w-md bg-gradient-to-br from-[#6B1E7A] to-[#4C1D6B] rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#E81E7C]"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {/* Step: Confirm */}
                  {step === 'confirm' && (
                    <motion.div
                      key="confirm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <h2 id="modal-title" className="text-white text-2xl sm:text-3xl font-bold mb-6">
                        Confirmar sua participação?
                      </h2>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                          onClick={handleConfirmYes}
                          className="px-10 py-4 bg-[#6B1E7A] hover:bg-[#5A1968] text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#E81E7C]/50 shadow-lg"
                        >
                          SIM
                        </button>
                        <button
                          onClick={handleConfirmNo}
                          className="px-10 py-4 bg-white/20 hover:bg-white/30 text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
                        >
                          NÃO
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step: Form */}
                  {step === 'form' && (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 id="modal-title" className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
                        Dados de Inscrição
                      </h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Nome completo */}
                        <div>
                          <label 
                            htmlFor="name" 
                            className="block text-white/80 text-sm font-medium mb-2"
                          >
                            Nome Completo
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className={`w-full px-5 py-4 bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E81E7C] focus:border-transparent transition-all`}
                            placeholder="Digite seu nome completo"
                            autoComplete="name"
                            disabled={isSubmitting}
                          />
                          {errors.name && (
                            <p className="mt-2 text-red-400 text-sm" role="alert">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* CRM */}
                        <div>
                          <label 
                            htmlFor="crm" 
                            className="block text-white/80 text-sm font-medium mb-2"
                          >
                            CRM (número)
                          </label>
                          <input
                            type="text"
                            id="crm"
                            name="crm"
                            value={formData.crm}
                            onChange={(e) => setFormData(prev => ({ ...prev, crm: e.target.value.replace(/\D/g, '') }))}
                            className={`w-full px-5 py-4 bg-white/10 border ${errors.crm ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E81E7C] focus:border-transparent transition-all`}
                            placeholder="Digite seu CRM"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={8}
                            disabled={isSubmitting}
                          />
                          {errors.crm && (
                            <p className="mt-2 text-red-400 text-sm" role="alert">
                              {errors.crm}
                            </p>
                          )}
                        </div>

                        {/* Submit button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-8 py-4 bg-[#E81E7C] hover:bg-[#C91868] disabled:bg-[#E81E7C]/50 text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100 focus:outline-none focus:ring-4 focus:ring-[#E81E7C]/50 shadow-lg flex items-center justify-center gap-3"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            'Confirmar Inscrição'
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* Step: Success */}
                  {step === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, type: 'spring', damping: 20 }}
                      className="text-center py-8"
                    >
                      {/* Success animation */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', damping: 15 }}
                        className="mb-6"
                      >
                        <div className="w-20 h-20 mx-auto bg-[#E81E7C] rounded-full flex items-center justify-center shadow-lg shadow-[#E81E7C]/40">
                          <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>
                      
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        id="modal-title"
                        className="text-white text-2xl sm:text-3xl font-bold mb-3"
                      >
                        Inscrição Confirmada!
                      </motion.h2>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-white/80 text-base mb-8"
                      >
                        Aguardamos você no VNS Therapy Night!
                      </motion.p>
                      
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        onClick={handleClose}
                        className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
                      >
                        Fechar
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
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
