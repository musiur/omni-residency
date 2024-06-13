import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="mt-[10dvh] lg:mt-[20dvh] min-h-[60dvh] flex items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
