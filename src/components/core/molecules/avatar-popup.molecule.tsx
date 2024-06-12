"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CSR__DELETE__Cookie } from "@/app/utils/actions";
import { useRouter } from "next/navigation";

const AvatarPopup = () => {
  const router = useRouter();
  const logout = async () => {
    await CSR__DELETE__Cookie("access");
    await CSR__DELETE__Cookie("refresh");
    router.push("/auth/login");
  };
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <ul className="space-y-2">
          <Link href="/dashobard/overview">
            <li className="px-4 py-2 hover:bg-gray-100 rounded-md">Overview</li>
          </Link>
          <Link href="/dashobard/settings">
            <li className="px-4 py-2 hover:bg-gray-100 rounded-md">settings</li>
          </Link>
          <li className="pt-2">
            <Button
              className="w-full text-pink-500 hover:text-pink-700"
              variant="outline"
              onClick={() => logout()}
            >
              Logout
            </Button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default AvatarPopup;
