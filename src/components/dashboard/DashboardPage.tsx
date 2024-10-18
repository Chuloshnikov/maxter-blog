"use client"
import { useEffect } from "react";
import Link from "next/link";
import TableColumn from "./TableColumn";
import { FaArrowRight } from "react-icons/fa";
import BlogGraph from "./BlogGraph";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/redux/postsSlice";
import { fetchComments } from "@/redux/commentsSlice";

import { AppDispatch, RootState } from '../../redux/store';
import Preloader from "../ui/Preloader";
import CategoriesSection from "./CategoriesSection";



const DashboardPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const posts = useSelector((state: RootState) => state.posts.posts);
    const comments = useSelector((state: RootState) => state.comments.comments);
  
    const postsStatus = useSelector((state: RootState) => state.posts.status);
    const commentsStatus = useSelector((state: RootState) => state.comments.status);

    useEffect(() => {
        if (postsStatus === 'idle') {
          dispatch(fetchPosts());
        }
        if (commentsStatus === 'idle') {
          dispatch(fetchComments());
        }
      }, [dispatch, postsStatus, commentsStatus]);
    
      //dashboard status loading
      if (postsStatus === 'loading' || commentsStatus === 'loading') {
        return (
            <div className="w-full h-full flex items-center justify-center">
              <Preloader/>
            </div> 
        );
      }
    
      //dashboard status error
      if (postsStatus === 'failed' || commentsStatus === 'failed') {
        return (
            <div className="flex w-screen h-screen">
                 <div className="w-full h-full flex flex-col justify-center items-center">
                    <h4 className="text-accentBg font-bold text-7xl -mt-10">Error occurred while fetching data.</h4>
                 </div>
                 <Link 
                 className="submitButton mt-4"
                 href={'/'}
                 >
                    Back to blog
                 </Link>
            </div>
        );
      }

  return (
    <div className='p-2 flex flex-col justify-between gap-4'>
        <div className="text-accentBg text-4xl font-bold">
            Welcome to Ma<span className="text-black">X</span>ter admin panel
        </div>
        <div className="flex flex-col mdl:flex-row gap-2">
            <div className="flex flex-col gap-2 mdl:mt-20">
                <TableColumn title={"posts"} data={[...posts]}/>
                <TableColumn title={"comments"} data={[...comments]}/>
            </div>
            <BlogGraph posts={posts} comments={comments}/>
        </div>
        <div className="">
            <CategoriesSection posts={[...posts]}/>
        </div>
        <div>
            <Link 
            className="flex items-center justify-center py-6 px-10 bg-accentBg border-4 border-accentBg text-white text-2xl text-center hover:text-accentBg hover:bg-white duration-200  font-semibold"
            href={'/admin/advertisements'}>
               <div className="flex gap-2 items-center">
                    <span>Advertisements and marketing</span> <FaArrowRight />
                </div> 
            </Link>
        </div>
    </div>
  )
}

export default DashboardPage;