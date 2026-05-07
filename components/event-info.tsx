'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'

const eventDetails = [
  {
    icon: Calendar,
    label: 'Data',
    value: '20.05',
    ariaLabel: '20 de maio',
  },
  {
    icon: Clock,
    label: 'Horário',
    value: '19h30',
    ariaLabel: '19 horas e 30 minutos',
  },
  {
    icon: MapPin,
    label: 'Local',
    value: 'Restaurante Pobre Juan',
    subValue: 'Rod. Dom Pedro I, 53 - Campinas',
    ariaLabel: 'Restaurante Pobre Juan, Rodovia Dom Pedro I, 53, Campinas',
  },
]

export function EventInfo() {
  return (
    <section 
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6B1E7A] to-[#4C1D6B]"
      aria-labelledby="event-info-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section heading (visually hidden for accessibility) */}
        <h2 id="event-info-heading" className="sr-only">
          Informações do Evento
        </h2>

        {/* Event details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {eventDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              aria-label={detail.ariaLabel}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E81E7C]/20 mb-4">
                <detail.icon className="w-7 h-7 text-[#E81E7C]" aria-hidden="true" />
              </div>
              <span className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">
                {detail.label}
              </span>
              <span className="text-white text-xl sm:text-2xl font-bold">
                {detail.value}
              </span>
              {detail.subValue && (
                <span className="text-white/70 text-sm mt-1">
                  {detail.subValue}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to action text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto">
            SUA PARTICIPAÇÃO É ESSENCIAL PARA CONSTRUIRMOS JUNTOS O{' '}
            <span className="text-[#E81E7C]">FUTURO DA SAÚDE</span>.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#E81E7C]/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#9F2B8C]/10 rounded-full blur-3xl" aria-hidden="true" />
    </section>
  )
}
