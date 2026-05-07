'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface SpeakersSectionProps {
  onOpenModal?: () => void
}

const speakers = [
  {
    name: 'Dra. Daniela Bezerra',
    title: 'Neurologista Especialista em Epilepsia',
    description: 'Especialista em neuromodulação e tratamento cirúrgico de epilepsia refratária, com vasta experiência em VNS Therapy.',
    image: '/images/dra-daniela.webp',
  },
  {
    name: 'Dra. Juliana Zuaini',
    title: 'Neurologista Especialista em Epilepsia',
    description: 'Referência em epileptologia clínica, dedicada ao cuidado integral de pacientes com epilepsia de difícil controle.',
    image: '/images/dra-juliana.webp',
  },
]

export function SpeakersSection({ onOpenModal }: SpeakersSectionProps) {
  return (
    <section 
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#4C1D6B] to-[#6B1E7A] geometric-overlay"
      aria-labelledby="speakers-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            id="speakers-heading"
            className="inline-block px-6 py-3 bg-[#E81E7C] rounded-full text-white text-xl sm:text-2xl font-bold"
          >
            Palestrantes
          </h2>
        </motion.div>

        {/* Speakers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {speakers.map((speaker, index) => (
            <motion.article
              key={speaker.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Speaker image with hexagon-like shape */}
              <div className="relative mb-6">
                <div className="w-48 h-48 sm:w-48 sm:h-48 relative">
                  {/* Hexagonal frame */}
                  <div className="absolute inset-0 hexagon-clip bg-gradient-to-br from-[#E81E7C] to-[#9F2B8C] p-1">
                    <div className="w-full h-full hexagon-clip bg-[#4C1D6B] flex items-center justify-center">
                      <div className="w-[95%] h-[95%] hexagon-clip overflow-hidden">
                        <Image
                          src={speaker.image}
                          alt={`Foto da ${speaker.name}`}
                          fill
                          className="object-cover object-center scale-110"
                          sizes="(max-width: 768px) 192px, 224px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative glow */}
                <div 
                  className="absolute inset-0 bg-[#E81E7C]/30 blur-2xl rounded-full scale-75 -z-10" 
                  aria-hidden="true" 
                />
              </div>

              {/* Speaker info */}
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                {speaker.name}
              </h3>
              <p className="text-[#E81E7C] font-semibold text-sm sm:text-base mb-3">
                {speaker.title}
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-sm">
                {speaker.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* CTA Button */}
        {onOpenModal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={onOpenModal}
              className="group relative px-10 py-5 bg-[#E81E7C] hover:bg-[#C91868] text-white text-lg sm:text-xl font-bold rounded-full shadow-xl shadow-[#E81E7C]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#E81E7C]/50 focus:outline-none focus:ring-4 focus:ring-[#E81E7C]/50"
              aria-label="Abrir formulário de participação"
            >
              <span className="relative z-10">EU QUERO PARTICIPAR</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
