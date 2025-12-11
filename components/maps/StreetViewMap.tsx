'use client'

import { useEffect, useRef } from 'react'
import { useMapsLibrary } from '@vis.gl/react-google-maps'
import type { Coordinates } from '@/types/coordinates'

export function StreetViewMap({ position }: { position: Coordinates }) {
  const streetViewRef = useRef<HTMLDivElement>(null)
  const streetViewLibrary = useMapsLibrary('streetView')

  useEffect(() => {
    if (!streetViewLibrary || !streetViewRef.current) return

    new streetViewLibrary.StreetViewPanorama(streetViewRef.current, {
      position,
      pov: {
        heading: 0,
        pitch: 0,
      },
      zoom: 1,
      addressControl: false,
      enableCloseButton: false,
      fullscreenControl: false,
    })
  }, [streetViewLibrary, position])

  return <div ref={streetViewRef} className="size-full" />
}
