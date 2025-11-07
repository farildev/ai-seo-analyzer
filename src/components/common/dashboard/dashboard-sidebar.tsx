'use client';

import {
  ArrowLeftRight,
  Blocks,
  Calendar,
  History,
  Link2,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const DashboardSidebar = () => {
  const pathname = usePathname();

  const sidebarLinks = [
    {
      id: 'daily-contents',
      label: 'Daily Contents',
      href: '/dashboard',
      icon: <Calendar size={20} />,
    },
    {
      id: 'linking-configuration',
      label: 'Linking Configuration',
      href: '/dashboard/linking-configuration',
      icon: <Link2 size={20} />,
    },
    {
      id: 'backlink-exchange',
      label: 'Backlink Exchange',
      href: '/dashboard/backlink-exchange',
      icon: <ArrowLeftRight size={20} />,
    },
    {
      id: 'platform-integration',
      label: 'Platform Integration',
      href: '/dashboard/platform-integration',
      icon: <Blocks size={20} />,
    },
    {
      id: 'content-history',
      label: 'Content History',
      href: '/dashboard/content-history',
      icon: <History size={20} />,
    },
    {
      id: 'settings',
      label: 'Settings',
      href: '/dashboard/settings',
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="h-full w-[320px] border-r border-custom-border shrink-0 py-5 px-3">
      <div className="flex flex-col">
        <div className="text-2xl text-main font-semibold">Analyzer</div>
        <nav className="flex flex-col gap-5 mt-10">
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.id}
                className={clsx(
                  'flex items-center py-2 px-3 rounded-md gap-2',
                  isActive
                    ? 'bg-main text-white font-medium'
                    : 'text-black font-normal',
                )}
                href={item.href}
              >
                {item.icon} {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
