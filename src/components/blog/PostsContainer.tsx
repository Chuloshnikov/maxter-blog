"use client"
import { useState } from 'react';
import PostSkeleton from '../ui/PostSkeleton';
import PostItem from './PostItem';
import { PostInfo } from '@/models/Post';

const PostsContainer = ({ posts, slug, loading = false }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  console.log(posts);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  // POSTS ON MEIN PAGE
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // CHANGE PAGE LOGIC
  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // PAGINATION VISIBILITY 
  const renderPagination = () => {
    const pagination = [];

    // TO START BUTTON
    if (currentPage > 1) {
      pagination.push(
        <button
          key="first"
          onClick={() => changePage(1)}
          className="w-8 h-8 bg-[#3DB4FF] text-white"
        >
          &laquo;
        </button>
      );
    }

    // DESTUCTURED PAGINATION
    if (totalPages > 3) {
      pagination.push(
        <button
          key={1}
          onClick={() => changePage(1)}
          className={`w-8 h-8 ${currentPage === 1 ? 'bg-black' : 'bg-[#3DB4FF]'} text-white`}
        >
          1
        </button>
      );

      if (currentPage > 2) {
        pagination.push(<span key="dots-start">...</span>);
      }

      // THIS AND SECOND PAGE
      if (currentPage > 1 && currentPage < totalPages) {
        pagination.push(
          <button
            key={currentPage}
            onClick={() => changePage(currentPage)}
            className={`w-8 h-8 bg-[#3DB4FF] text-white`}
          >
            {currentPage}
          </button>
        );
      }

      if (currentPage < totalPages - 1) {
        pagination.push(<span key="dots-end">...</span>);
      }

      pagination.push(
        <button
          key={totalPages}
          onClick={() => changePage(totalPages)}
          className={`w-8 h-8 ${currentPage === totalPages ? 'bg-blue-500' : 'bg-[#3DB4FF]'} text-white`}
        >
          {totalPages}
        </button>
      );
    } else {
      // PAGES VISIBILITY
      for (let i = 1; i <= totalPages; i++) {
        pagination.push(
          <button
            key={i}
            onClick={() => changePage(i)}
            className={`w-8 h-8 ${currentPage === i ? 'bg-blue-500' : 'bg-[#3DB4FF]'} text-white`}
          >
            {i}
          </button>
        );
      }
    }

    // NEXT PAGE BUTTON
    if (currentPage < totalPages) {
      pagination.push(
        <button
          key="next"
          onClick={() => changePage(currentPage + 1)}
          className="w-8 h-8 bg-[#3DB4FF] text-white"
        >
          &gt;
        </button>
      );
    }

    // TO END BUTTON
    if (currentPage < totalPages) {
      pagination.push(
        <button
          key="last"
          onClick={() => changePage(totalPages)}
          className="w-8 h-8 bg-[#3DB4FF] text-white"
        >
          &raquo;
        </button>
      );
    }

    return pagination;
  };

  return (
    <div className='border border-2 border-accentBg w-full my-8 pb-2'>
      <h2 className="capitalize font-semibold text-xl text-white bg-accentBg p-2">{slug}</h2>
      <div>
        {loading && (
          <>
            {Array.from({ length: 10 }).map((_, index) => (
              <PostSkeleton key={index} />
            ))}
          </>
        )}
        {!posts?.length && (
          <div className='w-full h-[400px] flex items-center justify-center'>
            <div className='text-lg font-medium'>No posts found</div>
          </div>
        )}
        {posts && currentPosts.reverse().map((post: PostInfo, index: number) => <PostItem key={index} post={post} />)}
      </div>
      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {renderPagination()}
        </div>
      )}
    </div>
  );
};

export default PostsContainer;