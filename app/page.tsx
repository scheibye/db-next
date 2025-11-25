import { sanityClient } from "@/lib/sanity.client";

async function getData() {
  // Henter de 5 første blog posts (hvis du har nogen)
  return sanityClient.fetch(`*[_type == "post"][0...5]{ _id, title }`);
}

export default async function Home() {
  const posts = await getData();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dansk Boliglån – Beta</h1>
      <h2>Data fra Sanity CMS:</h2>

      {posts.length === 0 && <p>Ingen posts endnu — opret nogle i Sanity Studio.</p>}

      <ul>
        {posts.map((post: any) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
