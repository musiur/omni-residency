import PrivateRoutes from "@/components/core/layouts/private.layout";
import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <PrivateRoutes>
      <>{children}</>
    </PrivateRoutes>
  );
};

export default Layout;
