import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

const PrivateRoutes = ({ children }: { children: ReactElement }) => {
  const token = cookies().get("access")?.value;
  if (!token) {
    redirect("/auth/login");
  }
  return children;
};

export default PrivateRoutes;
