import Link from "next/link";
import { slugify } from '@/utils/slugify';

export default function PostCard({ data, cardLayout }) {
  return (
    <>
      {data.map((post, index) => {
        const layoutClass = cardLayout ? cardLayout(index) : "";
        const slug = slugify(post.title);

        return (
          <div
            key={index}
            className={`grid grid-cols-1 gap-y-4 md:gap-y-8 ${layoutClass}`}
          >
            {post.image.map((image, i) => (
              <Link
                href={`/article/${slug}`}
                key={i}
                className="w-full h-full"
              >
                <img
                  className="w-full h-[160px] xs:h-[200px] sm:h-full object-cover"
                  src={`/images/${image.src}`}
                  alt={image.alt || ""}
                  width={image.width}
                  height={image.height}
                />
              </Link>
            ))}

            <div>
              <ul className="flex items-center gap-3 text-xs font-semibold text-nowrap text--purple mb-3">
                <li className="relative first:before:content-[''] before:absolute before:inset-0 before:left-auto before:-right-2 before:w-1 before:h-1 before:bg--purple before:my-auto before:rounded-full">
                  <Link href="/" className="text--purple">
                    {post.author}
                  </Link>
                </li>
                <li>{post.date}</li>
              </ul>

              <h3 className="relative text-sm font-semibold mb-2 before:absolute before:content-none before:inset-0 before:left-auto before:w-6 before:h-6 before:bg-[url(/images/icons/arrow-up-right.png)] before:bg-no-repeat before:bg-contain before:bg-center before:my-auto">
                <Link
                  href={`/article/${slug}`}
                  className="w-full"
                >
                  {post.title}
                </Link>
              </h3>

              <p
                className={`${
                  index === 3 ? "line-clamp-5" : "line-clamp-3"
                } mb-6`}
              >
                {post.excerpt}
              </p>

              <ul className="flex flex-wrap items-center gap-2">
                {post.tags.map((tag, i) => (
                  <li key={i}>
                    <Link href={tag.href} className={`tag tag--${tag.color}`}>
                      {tag.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}
