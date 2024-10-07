import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapse } from '../../redux/navbarSlice';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MdDashboard, MdLocalPostOffice, MdAlternateEmail } from "react-icons/md";
import { PiUsersFourLight } from "react-icons/pi";
import { FaCommentAlt, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RiFilePaperFill } from "react-icons/ri";


const Sidebar = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state: any) => state.navbar.isCollapsed);

  const path = usePathname();

  return (
    <div className={`flex flex-col justify-between fixed top-0 left-0 h-full bg-accentBg text-white transition-width duration-300 ${isCollapsed ? 'w-14' : 'w-44'}`}>
            
      <nav className="mt-4 font-semibold text-sm">
      {!isCollapsed ? (
            <div className='p-4 flex items-end'>
            <Link 
              href={"/"}
              className='max-w-max text-black'
            >
              <h1 className='font-extrabold text-2xl'>
                Ma
                <span className='text-white'>X</span>
                ter
              </h1>
            </Link>
            <span className='text-xs font-semibold mb-[4px]'>Admin</span>
        </div>
      ) : (
        <Link href={'/'} className='relative p-4 flex items-end'>
            <div className='font-extrabold text-2xl text-black'>
                M
            </div>
            <div className='absolute bottom-2 left-[18px] font-extrabold text-2xl text-white'>
                X
            </div>
        </Link>
      )}
        
        <ul className='sidebar-tabs mt-8'>
          <li className={` hover:bg-white hover:text-black hover:opacity-80 ${path === '/admin' || path.includes("/advertisements") ? 'active' : ''}`}>
            
            <Link href="/admin" className="flex gap-1 items-center p-4">
            <MdDashboard className='text-black w-6 h-6'/> 
            {!isCollapsed ? <span>Dashboard</span> : ''}
            </Link>
          </li>
          <li className={` hover:bg-white hover:text-black hover:opacity-80 ${path === '/admin/users' ? 'active' : ''}`}>
            <Link href="/admin/users" className="flex gap-1 items-center p-4">
            <PiUsersFourLight className='text-black w-6 h-6'/>
            {!isCollapsed ? <span>Users</span> : ''}
            </Link>
          </li>
          <li className={`sidebar-tabs hover:bg-white hover:text-black hover:opacity-80 ${path === '/admin/posts' ? 'active' : ''}`}>
          <Link href="/admin/posts" className="flex gap-1 items-center p-4">
            <RiFilePaperFill className='text-black w-6 h-6'/>
            {!isCollapsed ? <span>Posts</span> : ''}
            </Link>
          </li>
          <li className={`sidebar-tabs hover:bg-white hover:text-black hover:opacity-80 ${path === '/admin/comments' ? 'active' : ''}`}>
            <Link href="/admin/comments" className="flex gap-1 items-center p-4">
            <FaCommentAlt className='text-black w-5 h-5 ml-[2px]'/>
            {!isCollapsed ? <span>Comments</span> : ''}
            </Link>
          </li>
          <li className={`sidebar-tabs hover:bg-white hover:text-black hover:opacity-80 ${path === '/admin/comments' ? 'active' : ''}`}>
            <Link href="/admin/proposals" className="flex gap-1 items-center p-4">
            <MdLocalPostOffice className='text-black w-6 h-6'/>
            {!isCollapsed ? <span>Proposals</span> : ''}
            </Link>
          </li>
          <li className={`sidebar-tabs hover:bg-white hover:text-black hover:opacity-80 ${path === '/admin/comments' ? 'active' : ''}`}>
            <Link href="/admin/submitters" className="flex gap-1 items-center p-4">
            <MdAlternateEmail className='text-black w-6 h-6'/>
            {!isCollapsed ? <span>Submitters</span> : ''}
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="text-white text-2xl p-2 text-right"
        onClick={() => dispatch(toggleCollapse())}
      >
        <div className='flex items-end justify-end'>
            {isCollapsed ? <span className='border-2 border-white'><FaArrowRight/></span> : <span className='border-2 border-white'><FaArrowLeft/></span>}
        </div>
      </button>
    </div>
  );
};

export default Sidebar;