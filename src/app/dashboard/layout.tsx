import PrivateRoutes from "@/components/core/layouts/private.layout";
import { ReactElement } from "react";
import DashboardSidebar from "./_uitls/dashboard-sidebar";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <PrivateRoutes>
      <div className="space-y-8">
        <DashboardSidebar />
        <div className="container py-16">{children}</div>
      </div>
    </PrivateRoutes>
  );
};

export default Layout;
