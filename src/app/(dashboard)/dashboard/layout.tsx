import DashboardSidebar from '@/components/common/dashboard/dashboard-sidebar';
import '../../globals.css';
import DashboardHeader from '@/components/common/dashboard/dashboard-header';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <SidebarProvider>
          <div className="flex justify-between overflow-hidden w-full mx-auto h-dvh">
            <DashboardSidebar />

            <main className="overflow-y-auto size-full relative flex-1 overflow-x-hidden">
              <DashboardHeader />
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
