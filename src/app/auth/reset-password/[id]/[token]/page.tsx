"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  ResetFormSchema,
  TResetFormSchema,
} from "@/app/auth/_utils/types/types";
import AuthGraphic from "@/components/core/molecules/auth-graphic.molecule";
import ResponseX from "@/components/core/molecules/response-x.molecule";
import InputX from "@/components/core/molecules/input-x.molecule";
import SubmitX from "@/components/core/molecules/submit-x.molecule";
import { A__POST__ResetPassword } from "@/app/auth/_utils/actions";
import { useRouter } from "next/navigation";

const Login = ({ params }: { params: { id: string; token: string } }) => {
  const payload = { uid: params.id, token: params.token };
  const router = useRouter();
  const form = useForm<TResetFormSchema>({
    resolver: zodResolver(ResetFormSchema),
    defaultValues: {
      new_password: "",
      re_new_password: "",
    },
  });

  // form submission handler
  const onSubmit = async (data: TResetFormSchema) => {
    const result = await A__POST__ResetPassword({ ...payload, ...data });
    ResponseX({ title: "Reset password", result });
    router.push("/auth/login");
  };

  return (
    <div className="py-[90px] h-[100dvh] flex items-center justify-center">
      <div className="relative container grid grid-cols-1 md:grid-cols-2 gap-10">
        <AuthGraphic
          H1="Reset"
          text="Already have account?"
          link="/auth/register"
          linkText="Please register!"
        />
        <div className="p-[20px] md:p-[40px] rounded-[10px] border border-dark_gray backdrop-blur shadow-md min-w-[300px] max-w-[550px] mx-auto md:mx-0 input-field">
          <Form {...form}>
            <form
              className="flex flex-col gap-[32px]"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <InputX
                form={form}
                name="new_password"
                label="New Password"
                type="password"
              />
              <InputX
                form={form}
                name="re_new_password"
                label="Confirm New Password"
                type="password"
              />
              <div className="grid grid-cols-1 gap-[16px]">
                <SubmitX pending={form.formState.isSubmitting} text="Reset" />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
