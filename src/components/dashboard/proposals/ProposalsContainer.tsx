"use client"
import { useState } from 'react'
import ProposalItem from './ProposalItem';
import { ContactsTypes } from '@/models/Contacts';
import PostSkeleton from '@/components/ui/PostSkeleton';

const ProposalsContainer = ({ items, slug, loading }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;
  
    const totalPages = Math.ceil(items.length / postsPerPage);
  
    // POSTS ON MEIN PAGE
    const indexOfLastItem = currentPage * postsPerPage;
    const indexOfFirstItem = indexOfLastItem - postsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  
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
            className={`w-8 h-8 ${currentPage === totalPages ? 'bg-black' : 'bg-[#3DB4FF]'} text-white`}
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
              className={`w-8 h-8 ${currentPage === i ? 'bg-black' : 'bg-[#3DB4FF]'} text-white`}
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
    <div className='min-h-[450px]'>
      {loading && (
          <>
            {Array.from({ length: 5 }).map((_, index) => (
              <PostSkeleton key={index} />
            ))}
          </>
        )}
      {!items?.length && !loading ? (
        <div className='w-full h-[400px] flex items-center justify-center'>
          <div className='text-lg font-medium'>No {slug}s found</div>
        </div>
      ) : ''}
      {items && currentItems.reverse().map((item: ContactsTypes, index: number) => (
        <ProposalItem
        key={index} 
        status={item.read} 
        name={item.name} 
        email={item.email}
        phone={item.phone}
        id={item._id} 
        createdAt={item.createdAt}
        
        />
        ))}
    </div>
    {/* PAGINATION */}
    {totalPages > 1 && (
      <div className="flex justify-center space-x-2 mt-4">
        {renderPagination()}
      </div>
    )}
  </div>
  )
}

export default ProposalsContainer;