// components/BlogPostSection.tsx
import Image from 'next/image'

type BlogPost = {
  title: string
  excerpt?: string
  href?: string
  imageUrl?: string
}

type BlogPostSectionProps = {
  title?: string
  posts?: BlogPost[]
}

export function BlogPostSection({ title, posts = [] }: BlogPostSectionProps) {
  if (!posts.length) return null

  return (
    <section className="bg-brand-card/40 px-4 py-12">
      <div className="mx-auto max-w-[1900px] px-[10px]">
        {title && <h2 className="mb-6 text-2xl font-semibold md:text-3xl">{title}</h2>}

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, idx) => {
            const card = (
              <article className="border-brand-dark/10 flex h-full flex-col overflow-hidden rounded-2xl border bg-white">
                {post.imageUrl && (
                  <div className="relative h-40 w-full">
                    <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
                  </div>
                )}
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="text-base font-semibold">{post.title}</h3>
                  {post.excerpt && (
                    <p className="text-brand-text/80 line-clamp-3 text-sm">{post.excerpt}</p>
                  )}
                </div>
              </article>
            )

            return post.href ? (
              <a key={idx} href={post.href}>
                {card}
              </a>
            ) : (
              <div key={idx}>{card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
