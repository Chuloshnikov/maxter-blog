"use client";
import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { CommentTypes } from "@/models/Comment";
import CommentSkeleton from "../ui/CommentSkeleton";

const CommentsContainer = ({ id }: any) => {
  const [comments, setComments] = useState<CommentTypes[]>([]); 
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
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
  }, [id]);

  return (
    <div className="border border-2 border-accentBg w-full mt-4">
      <h2 className="capitalize font-semibold text-xl text-white bg-accentBg p-2">
        All <span className="lowercase">comments</span>
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
          comments.slice().reverse().map((comment: CommentTypes, index: number) => (
            <CommentItem comment={comment} key={index} />
          ))}
      </div>
    </div>
  );
};

export default CommentsContainer;