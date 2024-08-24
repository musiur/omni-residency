import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

const PublicRoutes = ({ children }: { children: ReactElement }) => {
  const token = cookies().get("access")?.value;
  const from_location = cookies().get("from_location")?.value;
  if (token) {
    redirect(from_location?.replaceAll("___", "/") || "/dashboard/overview");
  }
  return children;
};

export default PublicRoutes;
