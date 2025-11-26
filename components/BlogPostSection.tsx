// components/BlogPostSection.tsx
import Image from "next/image";

type BlogPost = {
  title: string;
  excerpt?: string;
  href?: string;
  imageUrl?: string;
};

type BlogPostSectionProps = {
  title?: string;
  posts?: BlogPost[];
};

export function BlogPostSection({ title, posts = [] }: BlogPostSectionProps) {
  if (!posts.length) return null;

  return (
    <section className="py-12 px-4 bg-brand-card/40">
      <div className="mx-auto max-w-[1900px] px-[10px]">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-6">
            {title}
          </h2>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, idx) => {
            const card = (
              <article className="h-full rounded-2xl bg-white border border-brand-dark/10 overflow-hidden flex flex-col">
                {post.imageUrl && (
                  <div className="relative w-full h-40">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-brand-dark">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-brand-text/80 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </article>
            );

            return post.href ? (
              <a key={idx} href={post.href}>
                {card}
              </a>
            ) : (
              <div key={idx}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
