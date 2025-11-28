// components/VideoSection.tsx
type VideoSectionProps = {
  title?: string
  lead?: string // stor tekst
  body?: string // mindre tekst
  ctaLabel?: string
  ctaHref?: string
  videoUrl?: string
}

function isYouTube(url: string) {
  return url.includes('youtube.com') || url.includes('youtu.be')
}

export function VideoSection({
  title,
  lead,
  body,
  ctaLabel,
  ctaHref,
  videoUrl,
}: VideoSectionProps) {
  if (!videoUrl) return null

  return (
    <section className="bg-brand-card py-16">
      <div className="mx-auto grid max-w-[1900px] items-center gap-10 px-[10px] md:grid-cols-2">
        {/* Tekstkolonne – matcher idéen fra Figma */}
        <div className="text-brand-dark space-y-4">
          {title && <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>}

          {lead && <p className="text-brand-text/90 text-base md:text-lg">{lead}</p>}

          {body && <p className="text-brand-text/80 text-sm md:text-base">{body}</p>}

          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="bg-brand-primary hover:bg-brand-primary-soft inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white transition md:text-base"
            >
              {ctaLabel}
            </a>
          )}
        </div>

        {/* Video-kolonne */}
        <div className="shadow-card relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
          {isYouTube(videoUrl) ? (
            <iframe
              src={videoUrl}
              title={title || 'Video'}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video src={videoUrl} controls className="h-full w-full object-cover" />
          )}
        </div>
      </div>
    </section>
  )
}
