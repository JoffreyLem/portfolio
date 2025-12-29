'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { projectsWithIcons } from '@/constants/data'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f] to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 gradient-accent-text">
            Projets
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Mes projets personnels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsWithIcons.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 mb-4 transition-colors"
                    >
                      <Github size={18} />
                      <span>Voir sur GitHub</span>
                      <ExternalLink size={14} />
                    </motion.a>
                  )}

                  <p className="text-gray-400 mb-6 leading-relaxed text-base">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                      Points techniques
                    </h4>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -10 }
                          }
                          transition={{
                            delay: index * 0.1 + i * 0.1 + 0.3,
                            duration: 0.4,
                          }}
                          className="flex items-start gap-3 text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                    {project.technologies && project.technologies.length > 0 ? (
                      project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-400 rounded-full border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-500 italic">Technologies à venir</span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

