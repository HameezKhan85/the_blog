import React from 'react'
import RecentPosts from '@/components/RecentPosts'
import AllPosts from '@/components/AllPosts'

function Home() {
  return (
    <>
      <div className='mb-5 lg:mb-7.5'>
        <div className='lg:max-w-(--container) lg:px-(--container-padding) mx-auto'>
          <div className='text-center px-3 border-y dark:border-white border-dark mx-auto'>
            <h1 className='text--mega uppercase'>The Blog</h1>
          </div>      
        </div>
      </div>
      <RecentPosts />
      <AllPosts />
    </>
  )
}

export default Home