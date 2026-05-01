import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, CheckCircle, Star } from 'lucide-react'
import { socialProof } from '@/lib/constants'

const stats = [
  { icon: Users, label: 'Active Users', value: socialProof.users },
  { icon: CheckCircle, label: 'Tasks Completed', value: socialProof.tasksCompleted },
  { icon: Star, label: 'Average Rating', value: `${socialProof.rating}/5` },
]

export default function SocialProof() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-12 bg-light-surface border-y border-light-border">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-light-text mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-light-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
