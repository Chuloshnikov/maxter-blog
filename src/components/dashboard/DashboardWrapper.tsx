"use client"
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Provider, useSelector } from 'react-redux';

import { store } from '../../redux/store';

export default function DashboardWrapper({ children }: { children: React.ReactNode }) {
    return (
    <Provider store={store}>
      <LayoutWithSidebar>
            {children}
      </LayoutWithSidebar>
      </Provider>
    );
  };

 

  const LayoutWithSidebar = ({ children }: { children: React.ReactNode }) => {
    const isCollapsed = useSelector((state) => state.navbar.isCollapsed);
    const [marginLeft, setMarginLeft] = useState('16rem'); // 64 для 256px
  
    useEffect(() => {
      setMarginLeft(isCollapsed ? '5rem' : '16rem'); // 20 для 80px
    }, [isCollapsed]);
  
    return (
      <>
        <Sidebar />
        <main className={`ml-${marginLeft} p-4 transition-all duration-300`}>
            {children}
        </main>
      </>
    );
  };