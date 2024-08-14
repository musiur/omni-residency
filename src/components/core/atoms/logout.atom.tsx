"use client";

import { CSR__DELETE__Cookie } from "@/app/_utils/actions";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const logout = async () => {
    await CSR__DELETE__Cookie("access");
    await CSR__DELETE__Cookie("refresh");
    router.push("/auth/login");
  };
  return (
    <Button
      variant="outline"
      className="py-3 px-4 w-full items-center gap-2 hover:text-pink-600"
      onClick={() => logout()}
    >
      <LogOutIcon className="w-4 h-4" />
      Logout
    </Button>
  );
};

export default Logout;
