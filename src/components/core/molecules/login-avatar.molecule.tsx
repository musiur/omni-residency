import { CSR__GET__Cookie } from "@/app/_utils/actions";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";
import AvatarPopup from "./avatar-popup.molecule";

const LoginAvatar = async () => {
  const token = await CSR__GET__Cookie("access");
  return (
    <div>
      {!token ? (
        <Link href="/auth/login">
          <Button className="rounded-full px-[16px] py-[12px] gap-[8px]">
            <User className="stroke-white w-[16px] h-[16px]" />
            Login
          </Button>
        </Link>
      ) : (
        <AvatarPopup />
      )}
    </div>
  );
};

export default LoginAvatar;
