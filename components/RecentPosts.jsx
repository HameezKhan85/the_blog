import PostCard from "./PostCard";

function recentPosts({ posts }) {
  return (
    <>
      <section className="py-5 lg:py-7.5">
        <div className="container">
          <h2 className="text-md font-semibold mb-5 lg:mb-8">
            Recent blog posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-6 md:gap-8">
            <PostCard data={posts} />
          </div>
        </div>
      </section>
    </>
  );
}

export default recentPosts;
