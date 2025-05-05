import React from "react";
import Link from "next/link";

const commonCard = "[&_h3]:text-md [&_h3]:mb-3 [&_h3]:before:content-['']";

let verticalCard = `
    xl:row-span-2 
    col-span-full
    lg:col-span-3
    xl:col-span-2
    ${commonCard}
  `;

let horizontalFullCard = `
    col-span-full
    lg:col-span-3
    xl:col-span-full
    xl:grid-cols-2
    gap-x-6
    lg:gap-x-8
    ${commonCard}
  `;

function recentPosts({ posts }) {
  return (
    <>
      <section className="py-5 lg:py-7.5">
        <div className="container">
          <h2 className="text-md font-semibold mb-5 lg:mb-8">
            Recent blog posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className={`
                  grid grid-cols-1 gap-y-4 md:gap-y-8
                  ${index === 0 ? verticalCard : index !== 3 ? "md:grid-cols-[minmax(295px,320px)_minmax(385px,550px)] lg:grid-cols-1 xl:grid-cols-[minmax(270px,320px)_248px]" : ""} ${index === 3 ? horizontalFullCard : 'md:col-span-full lg:col-span-2 md:gap-x-6'}`}
              >
                {post.image.map((image, index) => (
                  <Link
                    href={post.permalink}
                    key={index}
                    className="w-full h-full"
                  >
                    <img
                      className="w-full h-[160px] xs:h-[200px] sm:h-full object-cover"
                      src={`/images/${image.src}`}
                      alt={image}
                      width={image.width}
                      height={image.height}
                    />
                  </Link>
                ))}
                <div>
                  <ul className="flex items-center gap-3 text-xs font-semibold text-nowrap text--purple mb-3">
                    <li className="relative first:before:content-[''] before:absolute before:inset-0 before:left-auto before:-right-2 before:w-1 before:h-1 before:bg--purple before:my-auto before:rounded-full">
                      <Link href={"/"} className="text--purple">
                        {post.author}
                      </Link>
                    </li>
                    <li>{post.date}</li>
                  </ul>
                  <h3 className="relative text-sm font-semibold mb-2 before:absolute before:content-none before:inset-0 before:left-auto before:w-6 before:h-6 before:bg-[url(/images/icons/arrow-up-right.png)] before:bg-no-repeat before:bg-contain before:bg-center before:my-auto">
                    <Link href={post.permalink} className="w-full">
                      {post.title}
                    </Link>
                  </h3>
                  <p className={`${index === 3 ? 'line-clamp-5' : 'line-clamp-3'} mb-6`}>{post.excerpt}</p>
                  <ul className="flex flex-wrap items-center gap-2">
                    {post.tags.map((tag, index) => (
                      <li key={index}>
                        <Link
                          href={tag.href}
                          className={`tag tag--${tag.color}`}
                        >
                          {tag.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default recentPosts;
