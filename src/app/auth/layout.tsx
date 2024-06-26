import PublicRoutes from "@/components/core/layouts/public.layout";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

const AuthLayout = ({ children }: { children: ReactElement }) => {
  return (
    <PublicRoutes>
      <section className="min-h-[100vh]">
        <Image
          src="/auth/grid.svg"
          alt=""
          fill
          style={{ objectPosition: "center", zIndex: "-1" }}
        />
        <Link href="/" className="group container flex items-center gap-[8px]">
          <ChevronLeft className="w-[16px] h-[16px] stroke-gray-500 stroke-[1.3px] group-hover:stroke-secondary translate-x-0 group-hover:translate-x-[-10px] transition ease-in-out duration-500" />
          <span className="text-gray-500 group-hover:text-secondary">
            Back to home
          </span>
        </Link>
        <>{children}</>
      </section>
    </PublicRoutes>
  );
};

export default AuthLayout;
