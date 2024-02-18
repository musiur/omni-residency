import Image from "next/image";
import { ReactElement } from "react";

const AuthLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Image
        src="/auth/grid.svg"
        alt=""
        fill
        style={{ objectPosition: "center", zIndex: "-1" }}
      />
      {children}
    </>
  );
};

export default AuthLayout;
