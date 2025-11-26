// components/VideoSection.tsx
type VideoSectionProps = {
  title?: string;
  videoUrl?: string;
};

function isYouTube(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

export function VideoSection({ title, videoUrl }: VideoSectionProps) {
  if (!videoUrl) return null;

  return (
    <section className="py-12 px-4 bg-white">
      <div className="mx-auto max-w-[1900px] px-[10px]">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-4">
            {title}
          </h2>
        )}

        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black">
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
