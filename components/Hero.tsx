'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { techStack } from '@/constants/data'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-white/10"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Développeur Backend & Architectures Distribuées</span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            <span className="gradient-text">Développeur</span>
            <br />
            <span className="gradient-accent-text">Logiciel</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Spécialisé en <span className="text-foreground font-medium">architectures distribuées</span> et{' '}
            <span className="text-foreground font-medium">systèmes backend</span> performants
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200 }}
                className="px-5 py-2.5 glass rounded-full border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <span className="text-sm font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8"
        >
          <motion.a
            href="#skills"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="inline-flex flex-col items-center gap-3 text-gray-400 hover:text-foreground transition-colors group"
          >
            <span className="text-sm font-medium">Découvrir mon parcours</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={24} className="text-blue-400" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

