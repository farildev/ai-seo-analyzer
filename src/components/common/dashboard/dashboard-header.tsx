import { Input } from '@/components/ui/input';
import React from 'react';
import ProfileDropdown from './profile-dropdown';
import NofiticationsDropdown from './notifications-dropdown';
const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between gap-5 p-5 border-b border-custom-border">
      <Input className="w-1/2" placeholder="Search..." />
      <div className="flex items-center gap-3">
        <NofiticationsDropdown />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default DashboardHeader;
