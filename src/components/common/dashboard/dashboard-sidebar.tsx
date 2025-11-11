'use client';
import {
  ArrowRightLeft,
  Calendar,
  History,
  LayoutPanelTop,
  Link2,
  Settings,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const items = [
  {
    title: 'Content Planner',
    url: '/dashboard',
    icon: Calendar,
  },
  {
    title: 'Linking Configuration',
    url: '/dashboard/linking-configuration',
    icon: Link2,
  },
  {
    title: 'Backlink Exchange',
    url: '/dashboard/backlink-exchange',
    icon: ArrowRightLeft,
  },
  {
    title: 'Platform Integration',
    url: '/dashboard/platform-integration',
    icon: LayoutPanelTop,
  },
  {
    title: 'Content History',
    url: '/dashboard/content-history',
    icon: History,
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <h3 className="text-2xl font-bold text-main p-2">SEO Capitalist</h3>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-3">
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="hover:bg-gray-100">
                      <Link
                        href={item.url}
                        className={clsx(
                          isActive &&
                            'bg-main text-white hover:bg-main-hover hover:text-white',
                        )}
                      >
                        <item.icon size={28} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
