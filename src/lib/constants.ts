import { Target, Clock, FolderKanban, Flame, BarChart3, Cloud } from 'lucide-react'

export const features = [
  {
    icon: Target,
    title: 'Goal Mapping',
    description: 'Turn long-term outcomes into measurable milestones with clear owners and timelines.',
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Built-in Pomodoro timer and automatic time tracking for every task.',
  },
  {
    icon: FolderKanban,
    title: 'Project Organization',
    description: 'Organize tasks into projects and track progress across multiple initiatives.',
  },
  {
    icon: Flame,
    title: 'Habit Building',
    description: 'Build consistent habits with daily tracking and streak motivation.',
  },
  {
    icon: BarChart3,
    title: 'Progress Analytics',
    description: 'Track completion rates, time spent, and momentum across goals and projects.',
  },
  {
    icon: Cloud,
    title: 'Cloud Sync',
    description: 'Your goals, projects, and tasks stay synced across all your devices.',
  },
]

export const steps = [
  {
    number: 1,
    title: 'Define Goals',
    description: 'Capture outcomes and set targets with due dates and priorities.',
  },
  {
    number: 2,
    title: 'Plan Projects',
    description: 'Break goals into projects and key deliverables.',
  },
  {
    number: 3,
    title: 'Execute Tasks',
    description: 'Stay focused with daily tasks and weekly plans.',
  },
  {
    number: 4,
    title: 'Review Progress',
    description: 'Reflect weekly, adjust priorities, and keep momentum.',
  },
]

export const useCases = [
  {
    icon: Target,
    title: 'Goal Achievement',
    description: 'Turn ambitious goals into actionable plans with clear deadlines and progress tracking.',
    features: [
      'Set long-term goals with target dates',
      'Break goals into projects and tasks',
      'Track completion percentage',
      'Review progress week over week',
    ],
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Stay focused and productive with built-in time tracking and Pomodoro sessions.',
    features: [
      'Built-in 25-minute Pomodoro timer',
      'Track time spent on each task',
      'Daily and weekly time analytics',
      'Calendar view for time blocking',
    ],
  },
  {
    icon: Flame,
    title: 'Habit Building',
    description: 'Build consistent habits with daily tracking and streak motivation.',
    features: [
      'Create daily, weekly, or custom habits',
      'Track streaks and completion rates',
      'Link habits to your goals',
      'Daily check-in reminders',
    ],
  },
]

export const faqs = [
  {
    question: 'Is Goalixa free to use?',
    answer: 'Yes. Goalixa is completely free with full access to all features including goal planning, time tracking, habit building, and progress analytics.',
  },
  {
    question: 'Does it work on mobile?',
    answer: 'Absolutely. Goalixa is built as a Progressive Web App (PWA) that works on desktop, tablet, and mobile with offline support.',
  },
  {
    question: "What's the time tracking feature?",
    answer: 'Built-in Pomodoro-style timer (25-minute sessions) that tracks time spent on tasks, helping you measure real progress vs. planned work.',
  },
  {
    question: 'Can I export my data?',
    answer: 'Yes. You can export your goals, tasks, time entries, and progress data to CSV for backup or analysis.',
  },
  {
    question: 'Do I need to create an account?',
    answer: 'Yes, a free account is required to sync your data across devices. Sign up with email or Google OAuth in seconds.',
  },
  {
    question: 'What makes Goalixa different from other productivity apps?',
    answer: 'Goalixa connects your long-term goals to daily execution in one unified view. Unlike task managers that focus only on to-dos, or goal trackers that stay high-level, Goalixa bridges the gap.',
  },
]

export const socialProof = {
  users: '2,500+',
  tasksCompleted: '150,000+',
  rating: '4.8',
}
