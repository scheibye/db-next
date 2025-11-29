import { cva } from 'class-variance-authority'
import { BaseLinkUnderline } from '@/components/ui/BaseLinkUnderline'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'

const cardVariants = cva(
  'flex flex-col items-start gap-12 md:gap-20 rounded-4xl px-8 py-10 md:p-12',
  {
    variants: {
      variant: {
        dark: 'bg-brand-dark text-brand-card [&>[data-slot="link"]]:border-brand-card',
        spring: 'bg-brand-spring text-brand-dark [&>[data-slot="link"]]:border-brand-dark',
        primary: 'bg-brand-primary text-brand-card [&>[data-slot="link"]]:border-brand-card',
        'primary-soft':
          'bg-brand-primary-soft text-brand-primary [&>[data-slot="link"]]:border-brand-primary',
        dusk: 'bg-brand-dusk text-brand-card [&>[data-slot="link"]]:border-brand-card',
        white: 'bg-white text-brand-text [&>[data-slot="link"]]:border-brand-text',
      },
    },
    defaultVariants: {
      variant: 'dark',
    },
  }
)

interface BlogCardProps {
  className?: string
  author: string
  category: string
  href: string
  title: string
}

export function BlogCard({
  category,
  className,
  author,
  href,
  title,
  variant,
  ...props
}: VariantProps<typeof cardVariants> & BlogCardProps) {
  return (
    <div className={cn(cardVariants({ variant, className }))} {...props}>
      <div className="flex flex-wrap gap-2 border-b border-current text-sm italic md:text-lg">
        {category}
      </div>

      <h3 className="text-2xl font-medium md:text-4xl">{title}</h3>
      <p className="mt-auto text-sm md:text-lg">{author}</p>

      <BaseLinkUnderline href={href} data-slot="link">
        Læs mere
      </BaseLinkUnderline>
    </div>
  )
}
