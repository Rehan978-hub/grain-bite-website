'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'Our MOQ varies based on product type and complexity. Typically, it ranges from 500 kg to 2000 kg for new products. We work with startups and can negotiate flexible terms for established brands.',
  },
  {
    question: 'How long does the product development process take?',
    answer: 'From initial consultation to final product delivery, the timeline is typically 6-12 weeks. This includes formulation, testing, sampling, and regulatory compliance. Urgent projects can be expedited.',
  },
  {
    question: 'Do you offer private label manufacturing?',
    answer: 'Yes, we specialize in private label manufacturing. We handle everything from formulation and packaging design to regulatory compliance and final delivery. Your brand identity is our priority.',
  },
  {
    question: 'What certifications and compliance do you maintain?',
    answer: 'We maintain FSSAI registration, GMP certification, ISO 22000, HACCP certification, and ISO 9001 quality management. All products comply with food safety standards and are export-ready.',
  },
  {
    question: 'Can you help with export to international markets?',
    answer: 'Absolutely! We have experience in international exports and can handle regulatory compliance, documentation, and shipping to multiple countries. We ensure all products meet international food standards.',
  },
  {
    question: 'What payment terms do you offer?',
    answer: 'We offer flexible payment terms including 50% upfront and 50% on delivery, 30-day payment terms for established clients, and LC options for large orders. We work with you to find suitable arrangements.',
  },
  {
    question: 'Can you customize recipes and formulations?',
    answer: 'Yes, we specialize in custom formulations. Our R&D team works closely with you to develop products matching your specifications, brand guidelines, and nutritional requirements.',
  },
  {
    question: 'What is your lead time for standard orders?',
    answer: 'Standard production lead time is 3-4 weeks from order confirmation. For expedited orders, we can sometimes reduce this to 10-15 days depending on capacity and product specifications.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-800 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-dark-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our manufacturing services and processes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              viewport={{ once: true, margin: '-100px' }}
              className="border border-primary-200 rounded-lg overflow-hidden hover:border-primary-400 transition-colors"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-primary-50 transition-colors text-left"
              >
                <span className="font-semibold text-dark-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-primary-600" />
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === idx ? 'auto' : 0,
                  opacity: openIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-gradient-to-br from-primary-50 to-accent-beige border-t border-primary-200">
                  <p className="text-dark-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-dark-600 mb-4">
            Didn't find what you're looking for?
          </p>
          <button className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  )
}
