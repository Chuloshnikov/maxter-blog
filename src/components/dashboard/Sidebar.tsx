import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapse } from '../../redux/navbarSlice';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MdDashboard } from "react-icons/md";
import { PiUsersFourLight } from "react-icons/pi";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state: any) => state.navbar.isCollapsed);

  const path = usePathname();

  return (
    <div className={`fixed top-0 left-0 h-full bg-accentBg text-white transition-width duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <button
        className="text-white text-2xl p-2 text-right"
        onClick={() => dispatch(toggleCollapse())}
      >
        {isCollapsed ? '→' : '←'}
      </button>
      <nav className="mt-4 font-semibold text-sm">
        <ul className='sidebar-tabs'>
          <li className={` hover:bg-white hover:text-black hover:opacity-80 ${path === '/admin' ? 'active' : ''}`}>
            
            <Link href="/admin" className="flex gap-1 items-center p-4">
            <MdDashboard className='text-black w-6 h-6'/> 
            <span>Dashboard</span>
            </Link>
          </li>
          <li className={` hover:bg-white hover:text-black hover:opacity-80 ${path === '/admin/users' ? 'active' : ''}`}>
            <Link href="/admin/users" className="block p-4">
            <PiUsersFourLight/>
            <span>Users</span>
            </Link>
          </li>
          <li className={`sidebar-tabs hover:bg-white hover:text-black hover:opacity-80 ${path === '/admin/posts' ? 'active' : ''}`}>
            <Link href="/admin/posts" className="block p-4">
              Posts
            </Link>
          </li>
          <li className={`sidebar-tabs hover:bg-white hover:text-black hover:opacity-80 ${path === '/admin/comments' ? 'active' : ''}`}>
            <Link href="/admin/comments" className="block p-4">
              Comments
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;