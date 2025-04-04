'use client';

import React from "react";
import Link from "next/link";

function recentPosts({ posts }) {
  return (
    <>
      <section className="py-5 lg:py-7.5">
        <div className="container">
          <h2 className="text-md font-semibold mb-5 lg:mb-8">
            Recent blog posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="md:first:col-span-2 lg:first:row-span-2 lg:col-span-3 xl:col-span-2 nth-of-type-4:col-span-1 md:nth-of-type-4:col-span-2 lg:nth-of-type-4:col-span-5 xl:nth-of-type-4:col-span-4 lg:nth-of-type-[n+5]:col-span-5 xl:nth-of-type-[n+5]:col-span-2 flex lg:not-first:grid grid-cols-2 flex-col lg:not-first:flex-row not-first:items-center lg:items-start gap-x-6 gap-y-8 nth-of-type-4:mt-7 [&:first-of-type_h3]:text-md [&:first-of-type_h3]:mb-3 [&:first-of-type_h3]:before:content-['']"
              >
                {post.image.map((image, index) => (
                  <Link
                    href={post.permalink}
                    key={index}
                    className="w-full h-full"
                  >
                    <img
                      className="w-full h-full object-cover"
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
                  <p className="line-clamp-3 mb-6">{post.excerpt}</p>
                  <ul className="flex items-center gap-2">
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
