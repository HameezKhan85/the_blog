import RecentPosts from '@/components/RecentPosts'
import AllPosts from '@/components/AllPosts'

async function getPosts() {
  const response = await fetch('http://localhost:3000/data/posts.json');
  return await response.json();
}

export default async function Home() {
  const allPosts = await getPosts();
  const sortedRecentPosts = [...allPosts].sort((a, b) =>
    new Date(b.date) - new Date(a.date)
  ).slice(0, 4);
  
  return (
    <>
      <div className='mb-5 lg:mb-7.5'>
        <div className='lg:max-w-(--container) lg:px-(--container-padding) mx-auto'>
          <div className='text-center px-3 border-y dark:border-white border-dark mx-auto'>
            <h1 className='text--mega uppercase'>The Blog</h1>
          </div>
        </div>
      </div>
      <RecentPosts posts={sortedRecentPosts} />
      {/* <AllPosts posts={allPosts} /> */}
    </>
  )
}