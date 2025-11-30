'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'

function BaseSlider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      className={cn(
        'relative flex h-8 w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col md:h-10',
        className
      )}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      data-slot="slider"
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          'bg-brand-primary relative grow overflow-hidden data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1'
        )}
        data-slot="slider-track"
      >
        <SliderPrimitive.Range
          className={cn(
            'bg-brand-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full'
          )}
          data-slot="slider-range"
        />
      </SliderPrimitive.Track>

      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className="border-brand-primary ring-brand-primary/50 bg-brand-card block size-8 shrink-0 cursor-pointer rounded-full border-4 transition-all hover:ring-2 focus-visible:ring-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 md:size-10"
          data-slot="slider-thumb"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { BaseSlider }
