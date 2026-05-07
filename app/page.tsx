'use client'

import { useState } from 'react'
import { HeroSection } from '@/components/hero-section'
import { EventInfo } from '@/components/event-info'
import { SpeakersSection } from '@/components/speakers-section'
import { Footer } from '@/components/footer'
import { RegistrationModal } from '@/components/registration-modal'

/**
 * VNS Therapy Night - Landing Page
 * 
 * Página de evento exclusivo da LivaNova Epilepsy
 * Design: Premium, elegante, médico-científico, acolhedor e exclusivo
 * 
 * Paleta de cores:
 * - Roxo principal: #6B1E7A
 * - Roxo secundário: #9F2B8C
 * - Magenta/Rosa: #E81E7C
 * - Fundo: degradê #4C1D6B → #6B1E7A
 */
export default function VNSTherapyNightPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - Acima da dobra */}
      <HeroSection onOpenModal={handleOpenModal} />
      
      {/* Informações do Evento - Data, horário e local */}
      <EventInfo />
      
      {/* Seção de Palestrantes */}
      <SpeakersSection onOpenModal={handleOpenModal} />
      
      {/* Footer com logos */}
      <Footer />
      
      {/* Modal de Inscrição */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </main>
  )
}
