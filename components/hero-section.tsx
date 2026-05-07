'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface HeroSectionProps {
  onOpenModal: () => void
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg geometric-overlay" />
      
      {/* Content */}
      <div className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
        {/* Header badge */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-white/90 text-sm font-medium tracking-wide">
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <ChevronRight className="w-4 h-4 -ml-3" aria-hidden="true" />
            <ChevronRight className="w-4 h-4 -ml-3" aria-hidden="true" />
            <span className="uppercase">Convite Pessoal e Intransferível</span>
          </div>
        </motion.header>

        {/* Main title badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <h1 className="inline-block px-8 py-4 text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight shadow-lg shadow-black/30 rounded-full bg-gradient-to-r from-[#6b6b6b] to-[#8b7c83]">
            VNS Therapy Night
          </h1>
        </motion.div>

        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-center mb-8"
        >
          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
            A <strong className="text-white font-semibold">LivaNova Epilepsy</strong> tem o prazer de convidá-lo(a) 
            para uma noite exclusiva de conhecimento, networking e celebração. 
            Junte-se a nós para descobrir as mais recentes inovações em 
            <strong className="text-white font-semibold"> VNS Therapy</strong> e seu impacto transformador 
            no tratamento da epilepsia.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mb-10"
        >
          <button
            onClick={onOpenModal}
            className="group relative px-10 py-5 bg-[#E81E7C] hover:bg-[#C91868] text-white text-lg sm:text-xl font-bold rounded-full shadow-xl shadow-[#E81E7C]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#E81E7C]/50 focus:outline-none focus:ring-4 focus:ring-[#E81E7C]/50"
            aria-label="Abrir formulário de participação"
          >
            <span className="relative z-10">EU QUERO PARTICIPAR</span>
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#E81E7C] animate-ping opacity-20" />
          </button>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-md mx-auto mb-10"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
            {/* Diagonal overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E81E7C]/20 to-transparent z-10" />
            <Image
              src="/images/hero-image.webp"
              alt="Família feliz - pai, mãe e filha sorrindo representando a esperança no tratamento da epilepsia"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 448px"
            />
            {/* Decorative corner cut */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#E81E7C] transform rotate-45 translate-x-12 translate-y-12" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
