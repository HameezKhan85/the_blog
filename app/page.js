"use client";

import RecentPosts from '@/components/RecentPosts';
import AllPosts from '@/components/AllPosts';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR('http://localhost:3000/data/posts.json', fetcher, {
    refreshInterval: 5000,
    revalidateOnFocus: true, 
    revalidateOnReconnect: true,
  });

  if (isLoading) return console.log('Loading...');
  if (error) return console.log('Error fetching data:', error);

  const sortedPosts = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentPosts = sortedPosts.slice(0, 4);
  const allPostsNoRecent = sortedPosts.filter(post => !recentPosts.includes(post));

  return (
    <>
      <div className='mb-5 lg:mb-7.5'>
        <div className='lg:max-w-(--container) lg:px-(--container-padding) mx-auto'>
          <div className='text-center px-3 border-y dark:border-white border-dark mx-auto'>
            <h1 className='text--mega uppercase'>The Blog</h1>
          </div>
        </div>
      </div>
      <RecentPosts posts={recentPosts} />
      <AllPosts posts={allPostsNoRecent} />
    </>
  )
}