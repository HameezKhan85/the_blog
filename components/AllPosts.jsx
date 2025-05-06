import PostCard from "./PostCard";

function AllPosts({ posts }) {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-md font-semibold mb-5 lg:mb-8">All blog posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-12 gap-x-6 lg:gap-x-8">
            <PostCard data={posts} />
          </div>
        </div>
      </section>
    </>
  );
}

export default AllPosts;
