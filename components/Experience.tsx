'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'
import { experiences } from '@/constants/data'
import type { Experience } from '@/types'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      aria-label="Expériences professionnelles"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 gradient-accent-text">
            Expériences Professionnelles
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Parcours centré sur le développement backend, les architectures
            distribuées et la gestion opérationnelle de systèmes en production
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                      <Briefcase className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-gray-300 font-medium">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 mt-4 md:mt-0 glass rounded-lg border border-white/10"
                >
                  <Calendar className="text-blue-400" size={16} />
                  <span className="text-sm font-medium text-gray-300">
                    {exp.period}
                  </span>
                </motion.div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed text-base">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                {exp.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-1.5 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {exp.missions && exp.missions.length > 0 && (
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-lg font-bold text-gray-300 mb-6 text-blue-400">
                    Missions
                  </h4>
                  <div className="space-y-6">
                    {exp.missions.map((mission, missionIndex) => (
                      <motion.div
                        key={mission.company}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{
                          delay: index * 0.15 + missionIndex * 0.1 + 0.5,
                          duration: 0.4,
                        }}
                        className="glass-strong rounded-xl p-6 border border-white/5"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h5 className="text-xl font-bold text-foreground mb-1">
                              {mission.company}
                            </h5>
                            <p className="text-base text-gray-300 font-medium">
                              {mission.role}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 mt-2 md:mt-0 glass rounded-lg border border-white/10">
                            <Calendar className="text-blue-400" size={14} />
                            <span className="text-xs font-medium text-gray-300">
                              {mission.period}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                          {mission.description}
                        </p>

                        <div className="mb-4">
                          <h6 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                            Points clés
                          </h6>
                          <ul className="space-y-2">
                            {mission.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs text-gray-400"
                              >
                                <CheckCircle2
                                  className="text-blue-400 mt-0.5 flex-shrink-0"
                                  size={14}
                                />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                          {mission.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

