import { motion } from 'framer-motion'
import { Rocket, Play } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <span className="text-lg">⭐</span>
              The Productivity App
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-hero font-bold text-light-text mb-6 leading-tight"
            >
              Turn Big <span className="gradient-text">Goals</span> into Clear
              Plans
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-light-muted mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Goalixa helps you break outcomes into projects, tasks, and weekly
              focus so you stay on track and finish what matters.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
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
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-light-muted"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Free forever
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                No credit card
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                2,500+ users
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Product Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Phone Mockup Container */}
              <div className="relative perspective-1000">
                <div className="bg-gradient-to-br from-light-surface to-white rounded-2xl shadow-large p-6 border border-light-border transform hover:rotate-y-6 transition-transform duration-500">
                  {/* Mock App Interface */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-light-text">
                          🎯 Goalixa
                        </h3>
                        <p className="text-sm text-light-muted">
                          Ready to make progress?
                        </p>
                      </div>
                      <span className="text-xs text-light-muted">Today</span>
                    </div>

                    {/* Progress Card */}
                    <div className="bg-white rounded-lg p-4 shadow-soft border border-light-border">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-lg">
                          🚀
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-light-text">
                            Launch MVP
                          </h4>
                          <span className="text-xs text-primary">
                            12 days left
                          </span>
                        </div>
                        <span className="text-lg font-bold text-primary">
                          68%
                        </span>
                      </div>
                      <div className="h-2 bg-light-surface rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '68%' }}
                          transition={{ delay: 0.8, duration: 1 }}
                          className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Today's Tasks */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-sm font-semibold text-light-text">
                          Today's Focus
                        </h5>
                        <span className="text-xs text-light-muted bg-light-surface px-2 py-1 rounded-full">
                          3 tasks
                        </span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: 'Design homepage', done: true, time: '25 min' },
                          { name: 'Write API docs', active: true, time: 'In progress' },
                          { name: 'Test user flow', done: false, time: '2:00 PM' },
                        ].map((task, i) => (
                          <motion.div
                            key={task.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                            className={cn(
                              'flex items-center gap-3 p-3 rounded-lg border transition-all duration-200',
                              task.active
                                ? 'bg-primary/5 border-primary'
                                : 'bg-white border-light-border hover:border-primary/30'
                            )}
                          >
                            <div
                              className={cn(
                                'w-6 h-6 rounded-md flex items-center justify-center text-xs',
                                task.done
                                  ? 'bg-primary text-white'
                                  : task.active
                                  ? 'bg-primary text-white'
                                  : 'bg-light-surface text-light-muted'
                              )}
                            >
                              {task.done ? '✓' : task.active ? '⏱' : '○'}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-light-text truncate">
                                {task.name}
                              </p>
                              <p className="text-xs text-light-muted">
                                {task.time}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white rounded-lg p-3 shadow-soft border border-light-border flex items-center gap-2">
                        <span className="text-lg">🔥</span>
                        <span className="text-xs font-semibold text-light-muted">
                          7 day streak
                        </span>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-soft border border-light-border flex items-center gap-2">
                        <span className="text-lg">⏱</span>
                        <span className="text-xs font-semibold text-light-muted">
                          2h 15m today
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-large p-3 border border-light-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-light-text">
                      Task completed!
                    </p>
                    <p className="text-xs text-light-muted">+15 XP</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Helper to use cn()
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
