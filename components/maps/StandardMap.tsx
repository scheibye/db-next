'use client'

import { Map, Marker } from '@vis.gl/react-google-maps'
import type { Coordinates } from '@/types/coordinates'

const INITIAL_ZOOM = 16

export function StandardMap({ position }: { position: Coordinates }) {
  return (
    <Map
      defaultCenter={position}
      defaultZoom={INITIAL_ZOOM}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    >
      <Marker position={position} />
    </Map>
  )
}
