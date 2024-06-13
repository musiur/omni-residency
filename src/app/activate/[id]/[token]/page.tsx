"use client";

import { A__POST__AccountVerification } from "@/app/auth/_utils/actions";
import ResponseX from "@/components/core/molecules/response-x.molecule";
import SubmitX from "@/components/core/molecules/submit-x.molecule";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = ({ params }: { params: { id: string; token: string } }) => {
  const payload = { uid: params.id, token: params.token };
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const ActivateAccount = async (e: any) => {
    e.preventDefault();
    setPending(true);
    const result = await A__POST__AccountVerification(payload);
    console.log(result);
    ResponseX({ title: "Account verification", result });
    setPending(false);
    if (result.success) {
      router.push("/auth/login");
    }
  };
  return (
    <div className="container section flex items-center justify-center">
      <form
        onSubmit={ActivateAccount}
        className="bg-white rounded-lg p-4 lg:p-8 min-w-[280px] max-w-[380px] shadow-xl space-y-8 border"
      >
        <h3 className="text-center text-xl lg:text-3xl font-semibold">
          Account Verification
        </h3>
        <SubmitX pending={pending} text="Verify Account" className="w-full" />
      </form>
    </div>
  );
};
export default Page;
