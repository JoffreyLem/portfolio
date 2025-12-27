'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { stackCategoriesWithIcons } from '@/constants/data'

export default function Stack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="stack"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 gradient-accent-text">
            Stack & Outils
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies et outils utilisés au quotidien pour développer des
            systèmes robustes et performants
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategoriesWithIcons.map((category, categoryIndex) => {
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
                className="glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -10 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + itemIndex * 0.05 + 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="flex items-center gap-3 text-sm text-gray-400 group/item hover:text-gray-300 transition-colors"
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 group-hover/item:scale-125 transition-transform"
                        whileHover={{ scale: 1.3 }}
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

