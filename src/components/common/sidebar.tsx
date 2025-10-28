'use client';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import useSidebar from '@/store/useSidebarStore';

const Sidebar = () => {
  const isOpen = useSidebar((state) => state.isOpen);
  const closeSidebar = useSidebar((state) => state.closeSidebar);
  return (
    <aside
      className={`lg:w-[375px] md:w-1/2 w-full bg-white border-l border-custom-border h-full fixed top-0 ${
        isOpen ? 'right-0' : '-right-full'
      } transition-all duration-500 z-50 p-5`}
    >
      <div className="flex items-center justify-between">
        <Link className="text-2xl font-semibold text-main" href={'/'}>
          Analyzer
        </Link>
        <Button
          onClick={closeSidebar}
          className="bg-gray-100 border border-custom-border text-black p-0 w-10 h-10 cursor-pointer hover:bg-gray-200"
        >
          <X />
        </Button>
      </div>
      <nav className="mt-10">
        <ul className="flex flex-col gap-3">
          <Link
            className="text-lg font-medium hover:scale-105 hover:text-main py-2 px-3 rounded-md transition-all duration-300"
            href={'/'}
          >
            How it works?
          </Link>
          <Link
            className="text-lg font-medium hover:scale-105 hover:text-main py-2 px-3 rounded-md transition-all duration-300"
            href={'/'}
          >
            Writing examples
          </Link>
          <Link
            className="text-lg font-medium hover:scale-105 hover:text-main py-2 px-3 rounded-md transition-all duration-300"
            href={'/'}
          >
            Pricing
          </Link>
          <Link
            className="text-lg font-medium hover:scale-105 hover:text-main py-2 px-3 rounded-md transition-all duration-300"
            href={'/blogs'}
          >
            Blogs
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
