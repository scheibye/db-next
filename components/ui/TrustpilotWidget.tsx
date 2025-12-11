'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement?: (element: HTMLElement, forceReload?: boolean) => void
    }
  }
}

export function TrustpilotWidget({
  className,
  theme = 'light',
}: {
  className?: string
  theme?: 'light' | 'dark'
}) {
  const ref = useRef<HTMLDivElement>(null)

  // Initialize widget when component mounts
  useEffect(() => {
    function initWidget() {
      if (ref.current && window.Trustpilot && window.Trustpilot.loadFromElement) {
        window.Trustpilot.loadFromElement(ref.current, true)
      }
    }

    initWidget()
  }, [])

  return (
    <div
      ref={ref}
      className={cn('trustpilot-widget', className)}
      data-locale="da-DK"
      data-template-id="53aa8807dec7e10d38f59f32"
      data-businessunit-id="5ed6a20389c572000158ee34"
      data-token="1a6834da-1b77-4f9f-98e8-bac56ad3f87e"
      data-style-width="255px"
      data-style-height="120px"
      {...(theme === 'dark' && { 'data-theme': 'dark' })}
    />
  )
}
