'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactLinks = [
    {
      name: 'Email',
      href: 'mailto:contact@example.com',
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/joffrey-lemery-920b40164/',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/JoffreyLem',
      icon: Github,
      color: 'from-gray-600 to-gray-700',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f] to-[#0a0a0a]" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-white/10"
          >
            <Send className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Disponible pour échanges</span>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 gradient-accent-text">
            Contact
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Toujours ouvert aux échanges techniques
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="glass-strong rounded-3xl p-10 lg:p-12 border border-white/10"
        >
          <div className="flex flex-col items-center space-y-8">
            <p className="text-center text-gray-300 text-lg max-w-2xl leading-relaxed">
              Pour toute question technique ou échange professionnel, n&apos;hésitez pas à me
              contacter via les canaux suivants :
            </p>

            <div className="grid sm:grid-cols-3 gap-4 w-full max-w-3xl">
              {contactLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${link.color} bg-opacity-10 border border-white/10 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300`}>
                        <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                      </div>
                      <span className="text-sm font-semibold text-gray-300 group-hover:text-foreground transition-colors">
                        {link.name}
                      </span>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 text-sm text-gray-500"
        >
          <p>© 2025 - Portfolio Développeur Logiciel</p>
        </motion.div>
      </div>
    </section>
  )
}

