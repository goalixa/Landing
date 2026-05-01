import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { features } from '@/lib/constants'
import Card from '../ui/Card'

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Goalixa
            </span>
            <h2 className="text-h2 font-bold text-light-text mb-4">
              Powerful Personal Planning Features
            </h2>
            <p className="text-lg text-light-muted max-w-2xl mx-auto">
              Everything you need to connect goals, projects, and daily
              execution in one clean view.
            </p>
          </motion.div>
        </div>

        {/* Features Grid - Bento Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover className="h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-glow">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-light-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-light-muted leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
