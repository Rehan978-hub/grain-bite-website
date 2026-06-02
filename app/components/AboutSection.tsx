'use client'

import { motion } from 'framer-motion'
import { Users, Briefcase, Target, Zap } from 'lucide-react'

const aboutPoints = [
  {
    icon: Users,
    title: 'Industry Expertise',
    description: 'Over 15 years of experience in food manufacturing and private label solutions',
  },
  {
    icon: Briefcase,
    title: 'Trusted Partner',
    description: 'Serving 500+ successful product launches across multiple categories',
  },
  {
    icon: Target,
    title: 'Quality Focus',
    description: '100% quality assured manufacturing with zero compromise on standards',
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Quick turnaround times without sacrificing premium quality',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-800 mb-4">
            Why <span className="gradient-text">Grain Bite</span>
          </h2>
          <p className="text-dark-600 text-lg">
            We're not just a manufacturer. We're your strategic partner in bringing innovative food products to market with speed, quality, and confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                viewport={{ once: true, margin: '-100px' }}
                className="bg-accent-beige rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors"
                >
                  <Icon size={24} className="text-primary-600 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="font-display font-bold text-lg text-dark-800 mb-2">
                  {point.title}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
