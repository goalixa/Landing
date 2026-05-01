import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'
import { useCases } from '@/lib/constants'
import Card from '../ui/Card'

export default function UseCases() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="use-cases" className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Built for focused individuals
            </span>
            <h2 className="text-h2 font-bold text-light-text mb-4">
              Achieve Your Personal Goals
            </h2>
            <p className="text-lg text-light-muted max-w-2xl mx-auto">
              From career ambitions to personal growth - one platform that
              connects your long-term vision to daily action.
            </p>
          </motion.div>
        </div>

        {/* Use Cases Grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover className="h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-light-text mb-2">
                  {useCase.title}
                </h3>
                <p className="text-light-muted mb-4">{useCase.description}</p>

                {/* Feature List */}
                <ul className="space-y-2">
                  {useCase.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-light-muted"
                    >
                      <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
