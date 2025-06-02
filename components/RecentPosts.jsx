import PostCard from "./PostCard";

const commonCard = "[&_h3]:text-md [&_h3]:mb-3 [&_h3]:before:content-['']";

const verticalCard = `
  xl:row-span-2 
  col-span-full
  lg:col-span-3
  xl:col-span-2
  ${commonCard}
`;

const horizontalFullCard = `
  col-span-full
  lg:col-span-3
  xl:col-span-full
  xl:grid-cols-2
  gap-x-6
  lg:gap-x-8
  ${commonCard}
`;

export function getHomepageLayout(index) {
  if (index === 0) return verticalCard;
  if (index === 3) return horizontalFullCard;
  return `
    md:grid-cols-[minmax(295px,320px)_minmax(385px,550px)]
    lg:grid-cols-1 
    xl:grid-cols-[minmax(270px,320px)_248px] 
    md:col-span-full 
    lg:col-span-2 
    md:gap-x-6 
    ${commonCard}
  `;
}

export function getDefaultLayout() {
  return verticalCard;
}


function recentPosts({ posts }) {
  return (
    <>
      <section className="py-5 lg:py-7.5">
        <div className="container">
          <h2 className="text-md font-semibold mb-5 lg:mb-8">
            Recent blog posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-6 md:gap-8">
            <PostCard data={posts} cardLayout={getHomepageLayout} />
          </div>
        </div>
      </section>
    </>
  );
}

export default recentPosts;
