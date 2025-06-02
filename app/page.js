'use client';

import { useState } from 'react';
import RecentPosts from '@/components/RecentPosts';
import AllPosts from '@/components/AllPosts';
import useSWR from 'swr';
import Pagination from '@/components/Pagination';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR('http://localhost:3000/data/posts.json', fetcher);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  const sortedPosts = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentPosts = sortedPosts.slice(0, 4);
  const allPostsNoRecent = sortedPosts.filter(post => !recentPosts.includes(post));
  
  const totalPages = Math.ceil(allPostsNoRecent.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = allPostsNoRecent.slice(startIndex, startIndex + postsPerPage);
  

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="mb-5 lg:mb-7.5">
        <div className="lg:max-w-(--container) lg:px-(--container-padding) mx-auto">
          <div className="text-center px-3 border-y dark:border-white border-dark mx-auto">
            <h1 className="text--mega uppercase">The Blog</h1>
          </div>
        </div>
      </div>
      <RecentPosts posts={recentPosts} />
      <AllPosts posts={paginatedPosts} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
