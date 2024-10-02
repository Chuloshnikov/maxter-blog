import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapse } from '../../redux/navbarSlice';
import Link from 'next/link';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state: any) => state.navbar.isCollapsed);

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-width duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <button
        className="text-white text-2xl p-2 text-right"
        onClick={() => dispatch(toggleCollapse())}
      >
        {isCollapsed ? '→' : '←'}
      </button>
      <nav className="mt-4">
        <ul>
          <li className="hover:bg-gray-700">
            <Link href="/admin/dashboard" className="block p-4">
              Главная
            </Link>
          </li>
          <li className="hover:bg-gray-700">
            <Link href="/admin/users" className="block p-4">
              Пользователи
            </Link>
          </li>
          <li className="hover:bg-gray-700">
            <Link href="/admin/posts" className="block p-4">
              Посты
            </Link>
          </li>
          <li className="hover:bg-gray-700">
            <Link href="/admin/comments" className="block p-4">
              Комментарии
            </Link>
          </li>
          {/* Добавьте другие пункты навбара по необходимости */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;