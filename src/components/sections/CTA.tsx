import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Rocket, Play } from 'lucide-react'
import Button from '../ui/Button'

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-light-surface to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-h2 font-bold text-light-text mb-4">
            Start planning in minutes
          </h2>
          <p className="text-lg text-light-muted mb-8">
            Join focused individuals who turn goals into consistent action and
            measurable progress.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild variant="primary" size="lg">
              <a href="https://app.goalixa.com/signup">
                <Rocket size={20} />
                Let's Go!
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#demo">
                <Play size={20} />
                Watch Demo
              </a>
            </Button>
          </div>

          <p className="text-sm text-light-muted">
            No credit card required. Completely free.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
