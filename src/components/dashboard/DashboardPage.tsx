"use client"
import { useEffect } from "react";
import Link from "next/link";
import PopularCategory from "./PopularCategory";
import TableColumn from "./TableColumn";
import { FaArrowRight } from "react-icons/fa";
import BlogGraph from "./BlogGraph";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/redux/postsSlice";
import { fetchUsers } from "@/redux/usersSlice";
import { fetchComments } from "@/redux/commentsSlice";

import { AppDispatch, RootState } from '../../redux/store';



const DashboardPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const users = useSelector((state: RootState) => state.users.users);
    const posts = useSelector((state: RootState) => state.posts.posts);
    const comments = useSelector((state: RootState) => state.comments.comments);
  
    const usersStatus = useSelector((state: RootState) => state.users.status);
    const postsStatus = useSelector((state: RootState) => state.posts.status);
    const commentsStatus = useSelector((state: RootState) => state.comments.status);

    useEffect(() => {
        if (usersStatus === 'idle') {
          dispatch(fetchUsers());
        }
        if (postsStatus === 'idle') {
          dispatch(fetchPosts());
        }
        if (commentsStatus === 'idle') {
          dispatch(fetchComments());
        }
      }, [dispatch, usersStatus, postsStatus, commentsStatus]);
    
      // Проверка статуса загрузки
      if (usersStatus === 'loading' || postsStatus === 'loading' || commentsStatus === 'loading') {
        return <div>Loading...</div>; // Загрузка
      }
    
      // Обработка ошибок
      if (usersStatus === 'failed' || postsStatus === 'failed' || commentsStatus === 'failed') {
        return <div>Error occurred while fetching data.</div>; // Ошибка
      }

  return (
    <div className='p-2 flex flex-col gap-4'>
        <div className="flex flex-col mdl:flex-row gap-2">
            <div className="flex flex-col gap-2 mdl:mt-20">
                <TableColumn title={"posts"} data={[...posts]}/>
                <TableColumn title={"comments"} data={[...comments]}/>
            </div>
            <BlogGraph posts={posts} comments={comments}/>
        </div>
        <div className="">
            <PopularCategory posts={[...posts]}/>
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