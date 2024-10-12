"use client";
import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { CommentTypes } from "@/models/Comment";
import CommentSkeleton from "../ui/CommentSkeleton";
import { getUserComments } from "@/actions/commentsActions";

const CommentsContainer = ({ id, userComments, slug }: any) => {
  const [comments, setComments] = useState<CommentTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 10;


  useEffect(() => {
    setLoading(true);
    if (userComments) {
      setComments(userComments);
      setLoading(false);
    } 
    
    if (id) {
      fetch(`/api/comments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setComments(data);
          setLoading(false);
        } else {
          setComments([]);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setComments([]);
      });
    }
    
    
  }, [id, userComments]);

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  // COMMENT VISIBILITY LOGIC
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  // CHANGE MEIN LOGIC
  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // PAGINATION VISIBILITY LOGIC
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

    // PAGINATON DESTRUCTURIZATION
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

      // NEXT AND NEIGHBOUR PAGE
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
      // VISIBILITY BEFORE 3 PAGES
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
    <div className="border border-2 border-accentBg w-full mt-4 pb-2">
      <h2 className="capitalize font-semibold text-xl text-white bg-accentBg p-2">
        All <span className="lowercase">{slug && `${slug} `}comments</span>
      </h2>
      <div>
        {loading && (
          <>
            {Array.from({ length: 10 }).map((_, index) => (
              <CommentSkeleton key={index} />
            ))}
          </>
        )}
        {!comments.length && (
          <div className="w-full h-[400px] flex items-center justify-center">
            <div className="text-lg font-medium">No comments found</div>
          </div>
        )}
        {comments.length > 0 &&
          currentComments.slice().reverse().map((comment: CommentTypes, index: number) => (
            <CommentItem comment={comment} key={index} />
          ))}
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

export default CommentsContainer;