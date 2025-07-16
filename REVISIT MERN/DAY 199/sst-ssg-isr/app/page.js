import Image from "next/image";

export default async function Home() {
  const data = await fetch('https://api.vercel.app/blog', { next: { revalidate: 3600 } })
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export const dynamic = 'force-dynamic'