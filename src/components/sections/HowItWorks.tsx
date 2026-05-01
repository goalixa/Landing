import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { steps } from '@/lib/constants'

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-light-surface">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Simple workflow
            </span>
            <h2 className="text-h2 font-bold text-light-text mb-4">
              How Goalixa Works
            </h2>
            <p className="text-lg text-light-muted max-w-2xl mx-auto">
              Simple steps to go from intention to execution
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
              )}

              {/* Step Number */}
              <div className="relative z-10 w-18 h-18 mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-3xl font-bold text-white shadow-glow mb-4">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-light-text mb-2">
                {step.title}
              </h3>
              <p className="text-light-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
