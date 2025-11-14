'use client';
import {
  ArrowRightLeft,
  Calendar,
  ChevronDown,
  History,
  LayoutPanelTop,
  Link2,
  Settings,
  BookOpen,
  FileText,
  HelpCircle,
  Crown,
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

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

const helpItems = [
  {
    title: 'Invite Friends',
    url: '/dashboard/invite',
    icon: BookOpen,
  },
  {
    title: 'Invoices',
    url: '/dashboard/invoices',
    icon: FileText,
  },
];

const premiumItems = [
  {
    title: 'Human Curated Services',
    url: '/dashboard/human-curated-services',
    icon: Crown,
  },
  {
    title: 'Directory Submission',
    url: '/dashboard/directory-submission',
    icon: Link2,
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

              {/* Help Collapsible */}
              <SidebarMenuItem>
                <Collapsible defaultOpen className="group/collapsible w-full">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="hover:bg-gray-100 w-full">
                      <HelpCircle size={28} />
                      <span>Help</span>
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenu className="flex flex-col gap-2 mt-2">
                      {helpItems.map((item) => {
                        const isActive = pathname === item.url;

                        return (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                              asChild
                              className="hover:bg-gray-100 pl-8"
                            >
                              <Link
                                href={item.url}
                                className={clsx(
                                  isActive &&
                                    'bg-main text-white hover:bg-main-hover hover:text-white',
                                )}
                              >
                                <item.icon size={20} />
                                <span className="text-sm">{item.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarGroupLabel className="mt-2">
              Premium Services
            </SidebarGroupLabel>
            <SidebarMenu>
              {premiumItems.map((item) => {
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
