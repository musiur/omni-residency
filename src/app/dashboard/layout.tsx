import PrivateRoutes from "@/components/core/layouts/private.layout";
import { ReactElement } from "react";
import DashboardSidebar from "./_uitls/dashboard-sidebar";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <PrivateRoutes>
      <div className="flex items-start">
        <DashboardSidebar />
        <div className="w-full py-16 px-8">{children}</div>
      </div>
    </PrivateRoutes>
  );
};

export default Layout;
