'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Footer() {
  return (
    <footer 
      className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#4C1D6B] border-t border-white/10"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-8"
        >
          {/* WTM Saúde Logo */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/wtmlogo.webp"
              alt="WTM Saúde"
              width={140}
              height={50}
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-90"
            />
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-white/20" aria-hidden="true" />

          {/* LivaNova Epilepsy Logo */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/logoLIVANOVA.webp"
              alt="LivaNova Epilepsy"
              width={160}
              height={50}
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-90"
            />
          </div>
        </motion.div>

        {/* Copyright and legal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-white/50 text-xs sm:text-sm">
            © {new Date().getFullYear()} LivaNova. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Este é um evento exclusivo para profissionais de saúde. 
            Convite pessoal e intransferível.
          </p>
        </motion.div>
      </div>

      {/* Decorative gradient line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6B1E7A] via-[#E81E7C] to-[#9F2B8C]" 
        aria-hidden="true" 
      />
    </footer>
  )
}
