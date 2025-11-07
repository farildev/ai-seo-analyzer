import DashboardSidebar from '@/components/common/dashboard/dashboard-sidebar';
import '../../globals.css';
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex justify-between overflow-hidden w-full mx-auto h-dvh">
          <DashboardSidebar />
          <main className="overflow-y-auto size-full flex-1 overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
