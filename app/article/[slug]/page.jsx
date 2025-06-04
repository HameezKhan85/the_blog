import { slugify } from '@/utils/slugify';

export default async function BlogPost({ params: { slug } }) {
  const res = await fetch('http://localhost:3000/data/posts.json');
  const posts = await res.json();

  const post = posts.find(p => slugify(p.title) === slug);
  
  if (!post) {
    return <div className="p-6">Post not found</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {post.date} — by {post.author}
      </p>
      <div className="prose">{post.content}</div>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/data/posts.json');
  const posts = await res.json();

  return posts.map(post => ({
    slug: slugify(post.title),
  }));
}
