// components/VideoSection.tsx
type VideoSectionProps = {
  title?: string;
  lead?: string;       // stor tekst
  body?: string;       // mindre tekst
  ctaLabel?: string;
  ctaHref?: string;
  videoUrl?: string;
};

function isYouTube(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

export function VideoSection({
  title,
  lead,
  body,
  ctaLabel,
  ctaHref,
  videoUrl,
}: VideoSectionProps) {
  if (!videoUrl) return null;

  return (
    <section className="py-16 bg-brand-card">
      <div className="mx-auto max-w-[1900px] px-[10px] grid gap-10 md:grid-cols-2 items-center">
        {/* Tekstkolonne – matcher idéen fra Figma */}
        <div className="space-y-4 text-brand-dark">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          )}

          {lead && (
            <p className="text-base md:text-lg text-brand-text/90">
              {lead}
            </p>
          )}

          {body && (
            <p className="text-sm md:text-base text-brand-text/80">
              {body}
            </p>
          )}

          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="inline-flex items-center px-6 py-3 rounded-full bg-brand-primary text-white text-sm md:text-base font-medium hover:bg-brand-primary-soft transition"
            >
              {ctaLabel}
            </a>
          )}
        </div>

        {/* Video-kolonne */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-card">
          {isYouTube(videoUrl) ? (
            <iframe
              src={videoUrl}
              title={title || "Video"}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={videoUrl}
              controls
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
