'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle2, Zap } from 'lucide-react'

const certifications = [
  { name: 'FSSAI', description: 'Food Safety & Standards Authority' },
  { name: 'GMP', description: 'Good Manufacturing Practice' },
  { name: 'ISO 22000', description: 'Food Safety Management' },
  { name: 'HACCP', description: 'Hazard Analysis & Control' },
  { name: 'ISO 9001', description: 'Quality Management System' },
  { name: 'Export Ready', description: 'International Standards Compliant' },
]

const qualityPoints = [
  'Advanced testing laboratories',
  'Microbiological testing',
  'Chemical analysis',
  'Sensory evaluation',
  'Shelf-life studies',
  'Traceability systems',
]

export default function QualitySection() {
  return (
    <section id="quality" className="py-16 md:py-24 bg-gradient-to-b from-white to-accent-beige">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-800 mb-4">
            Quality & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-dark-600 text-lg max-w-2xl mx-auto">
            Industry-leading quality standards and international compliance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-display font-bold text-dark-800 mb-8">
              Our Certifications
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * idx }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 border border-primary-100 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <Award size={20} className="text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-dark-800">{cert.name}</p>
                      <p className="text-dark-600 text-xs">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quality Assurance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-display font-bold text-dark-800 mb-8">
              Quality Assurance
            </h3>
            <div className="space-y-4">
              {qualityPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * idx }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-primary-100 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <CheckCircle2 size={24} className="text-primary-600 flex-shrink-0" />
                  <span className="text-dark-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Quality Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-beige rounded-lg border-2 border-primary-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <Zap className="text-primary-600" />
                <span className="font-semibold text-dark-800">Zero Compromise</span>
              </div>
              <p className="text-dark-600 text-sm">
                Every product undergoes rigorous testing before dispatch to ensure premium quality standards.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
