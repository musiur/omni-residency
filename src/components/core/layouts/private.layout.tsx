import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

const PrivateRoutes = async ({
  children,
  from_location,
}: {
  children: ReactElement;
  from_location?: string;
}) => {
  const token = cookies().get("access")?.value;

  if (!token) {
    const redirectPath = `/auth/login?from_location=${from_location?.replaceAll(
      "/",
      "___"
    )}`;
    redirect(redirectPath);
  }

  return children;
};

export default PrivateRoutes;
