import { Input } from '@/components/ui/input';
import React from 'react';
import ProfileDropdown from './profile-dropdown';
import NofiticationsDropdown from './notifications-dropdown';
import { SidebarTrigger } from '@/components/ui/sidebar';
const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between gap-5 p-5 border-b border-custom-border">
      <div className="w-full flex items-center gap-3">
        <SidebarTrigger />
        <Input className="w-1/2" placeholder="Search..." />
      </div>
      <div className="flex items-center gap-3">
        <NofiticationsDropdown />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default DashboardHeader;
