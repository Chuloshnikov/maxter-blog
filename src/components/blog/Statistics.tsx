import { useState, useEffect } from 'react';
import axios from 'axios';

import { FaEye } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

interface StatisticsTypes {
    postId: string;
    catSlug: string;
    views:string;
    initialLikes: string[] | string;
    initialDislikes: string[] | string;
}

const Statistics = ({ catSlug, postId, views, initialLikes, initialDislikes }: StatisticsTypes ) => {
    const [likes, setLikes] = useState(initialLikes);
    const [dislikes, setDislikes] = useState(initialDislikes);
    const [userReaction, setUserReaction] = useState<null | string>(null);

    useEffect(() => {
        const storedReaction = localStorage.getItem(`post-${postId}-reaction`);
        setUserReaction(storedReaction);
    }, [postId]);

    const handleLike = async () => {
        if (userReaction === 'like') return;
        try {
          const response = await axios.post(`/api/posts/${catSlug}/${postId}/like`, { userId: 'USER_ID' });
          setLikes(response.data.likes);
          setDislikes(response.data.dislikes);
          setUserReaction('like');
          localStorage.setItem(`post-${postId}-reaction`, 'like');
        } catch (error) {
          console.error(error);
        }
      };

    const handleDislike = async () => {
        if (userReaction === 'dislike') return;
        try {
          const response = await axios.post(`/api/posts/${catSlug}/${postId}/dislike`, { userId: 'USER_ID' });
          setLikes(response.data.likes);
          setDislikes(response.data.dislikes);
          setUserReaction('dislike');
          localStorage.setItem(`post-${postId}-reaction`, 'dislike');
        } catch (error) {
          console.error(error);
        }
    };

  return (
    <div className="flex gap-2 items-center text-sm text-gray-600 font-semibold">
        <div>
            <div className="flex gap-1 items-center">
                {views}
                <FaEye  className="w-5 h-5"/>
            </div>
        </div>
        <div>
            <div onClick={handleLike} className={`flex gap-1 items-center cursor-pointer ${userReaction === 'like' ? 'text-accentBg' : ''}`}>
                {likes}
                <BiSolidLike className="w-5 h-5"/>
            </div>
        </div>
        <div>
            <div onClick={handleDislike} className={`flex gap-1 items-center cursor-pointer ${userReaction === 'dislike' ? 'text-accentBg' : ''}`}>
                {dislikes}
                <BiSolidDislike className="w-5 h-5 -mb-1"/>
            </div>
        </div>
    </div>
  )
}

export default Statistics;