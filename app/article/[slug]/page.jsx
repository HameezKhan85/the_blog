import { slugify } from "@/utils/slugify";
import RecentPosts from "@/components/RecentPosts";
import { getDefaultLayout } from "@/components/RecentPosts";
import Image from "next/image";

export default async function BlogPost({ params: { slug } }) {
  const res = await fetch("http://localhost:3000/data/posts.json");
  const posts = await res.json();

  const post = posts.find((p) => slugify(p.title) === slug);

  const latestPosts = posts
    .filter((p) => slugify(p.title) !== slug)
    .slice(0, 6);

  if (!post) {
    return <div className="p-6">Post not found</div>;
  }

  return (
    <section className="pb-5 lg:pb-7.5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(264px,_342px)_minmax(600px,_920px)] gap-8">
          <RecentPosts posts={latestPosts} cardLayout={getDefaultLayout} />
          <div className="order-first lg:order-none">
            <span className="text-primary text-xs">{post.date}</span>
            <h1 className="text-xl/10 my-3 md:my-6 lg:my-8">{post.title}</h1>
            <Image
              className="w-full my-4 md:my-6 lg:mb-8"
              src={`/images/${post.image[0].src}`}
              alt={post.image[0].alt}
              width={842}
              height={349}
            />
            <div>
              {post.content?.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p key={index} className="mb-3">
                        {block.text}
                      </p>
                    );
                  case "heading-md":
                    return (
                      <h2 key={index} className="text-sm font-semibold my-3">
                        {block.text}
                      </h2>
                    );
                  case "heading-sm":
                    return (
                      <h3 key={index} className="text-base font-medium my-3">
                        {block.text}
                      </h3>
                    );
                  case "list-bulleted":
                    return (
                      <ul
                        key={index}
                        className="list-disc text-text pl-5 space-y-1 mb-3"
                      >
                        {block.text.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              }) || <p className="text-sm text-gray-500">No content available.</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/data/posts.json");
  const posts = await res.json();

  return posts.map((post) => ({
    slug: slugify(post.title),
  }));
}
