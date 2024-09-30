"use client";
import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { CommentTypes } from "@/models/Comment";

const CommentsContainer = ({ id }: any) => {
  const [comments, setComments] = useState<CommentTypes[]>([]); // Инициализируем как пустой массив

  useEffect(() => {
    fetch(`/api/comments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setComments(data);
        } else {
          setComments([]); 
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
        {!comments.length && (
          <div className="w-full h-[400px] flex items-center justify-center">
            <div className="text-lg font-medium">No comments found</div>
          </div>
        )}
        {comments.length > 0 &&
          comments.map((comment: CommentTypes, index: number) => (
            <CommentItem comment={comment} key={index} />
          ))}
      </div>
    </div>
  );
};

export default CommentsContainer;