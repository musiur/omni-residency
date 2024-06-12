import PrivateRoutes from "@/components/core/layouts/private.layout";
import { ReactElement } from "react";
import DashboardSidebar from "./_uitls/dashboard-sidebar";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <PrivateRoutes>
      <div className="flex items-start gap-8">
        <DashboardSidebar />
        <div>{children}</div>
      </div>
    </PrivateRoutes>
  );
};

export default Layout;
