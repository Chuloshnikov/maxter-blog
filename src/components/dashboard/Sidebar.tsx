import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapse } from '../../redux/navbarSlice';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MdDashboard } from "react-icons/md";
import { PiUsersFourLight } from "react-icons/pi";
import { FaCommentAlt } from "react-icons/fa";
import { RiFilePaperFill } from "react-icons/ri";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state: any) => state.navbar.isCollapsed);

  const path = usePathname();

  return (
    <div className={`fixed top-0 left-0 h-full bg-accentBg text-white transition-width duration-300 ${isCollapsed ? 'w-16' : 'w-44'}`}>
      <button
        className="text-white text-2xl p-2 text-right"
        onClick={() => dispatch(toggleCollapse())}
      >
        <div className='flex items-end justify-end'>
            {isCollapsed ? '→' : '←'}
        </div>
      </button>
      <nav className="mt-4 font-semibold text-sm">
        <ul className='sidebar-tabs'>
          <li className={` hover:bg-white hover:text-black hover:opacity-80 ${path === '/admin' ? 'active' : ''}`}>
            
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
            <FaCommentAlt className='text-black w-5 h-5'/>
            {!isCollapsed ? <span>Comments</span> : ''}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;