import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg hover:-translate-y-0.5',
  secondary:
    'bg-light-surface text-light-text hover:bg-light-border border border-light-border',
  outline:
    'bg-transparent text-light-text hover:bg-light-surface border border-light-border',
  ghost: 'bg-transparent text-light-muted hover:text-light-text hover:bg-light-surface/50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
