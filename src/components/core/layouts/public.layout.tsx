import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

const PublicRoutes = ({ children }: { children: ReactElement }) => {
  const token = cookies().get("access")?.value;
  if (token) {
    redirect("/dashboard/overview");
  }
  return children;
};

export default PublicRoutes;
