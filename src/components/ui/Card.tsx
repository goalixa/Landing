import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
}

export default function Card({ children, className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-light-border p-6 shadow-soft',
        hover && 'transition-all duration-300 hover:shadow-medium hover:-translate-y-1 hover:border-primary/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
