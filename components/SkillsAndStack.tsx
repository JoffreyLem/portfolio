'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { unifiedSkillsAndStack } from '@/constants/data'

export default function SkillsAndStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      ref={ref}
      aria-label="Compétences et Stack technique"
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
            Compétences & Stack
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Expertise technique, technologies et outils utilisés au quotidien pour développer des
            systèmes robustes et performants
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unifiedSkillsAndStack.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Compétences avec niveaux */}
                {category.skills && category.skills.length > 0 && (
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-medium text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
                            {skill.level}/5
                          </span>
                        </div>
                        <div className="h-2.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={
                              isInView
                                ? { width: `${(skill.level / 5) * 100}%` }
                                : { width: 0 }
                            }
                            transition={{
                              duration: 1.2,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                            className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full shadow-lg shadow-blue-500/50"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

