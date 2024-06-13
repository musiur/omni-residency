"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  ForgotFormSchema,
  TForgotFormSchema,
} from "@/app/auth/_utils/types/types";
import AuthGraphic from "@/components/core/molecules/auth-graphic.molecule";
import { A__POST__ForgotPassword } from "../_utils/actions";
import ResponseX from "@/components/core/molecules/response-x.molecule";
import InputX from "@/components/core/molecules/input-x.molecule";
import SubmitX from "@/components/core/molecules/submit-x.molecule";

const ForgotPassword = () => {
  //   const { setAuth } = useAuthContext();
  const form = useForm<TForgotFormSchema>({
    resolver: zodResolver(ForgotFormSchema),
    defaultValues: {
      email: "",
    },
  });

  // form submission handler
  const onSubmit = async (data: TForgotFormSchema) => {
    const result = await A__POST__ForgotPassword(data);
    ResponseX({ title: "Forgot Password", result });
  };

  return (
    <div className="py-[90px] h-[100dvh] flex items-center justify-center">
      <div className="relative container grid grid-cols-1 md:grid-cols-2 gap-10">
        <AuthGraphic
          H1="Forgot"
          text="Don't have account?"
          link="/auth/register"
          linkText="Please register!"
        />
        <div className="p-[20px] md:p-[40px] rounded-[10px] border border-dark_gray backdrop-blur shadow-md min-w-[300px] max-w-[550px] mx-auto md:mx-0 input-field">
          <Form {...form}>
            <form
              className="flex flex-col gap-[32px]"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <InputX form={form} name="email" label="Email" />
              <div className="grid grid-cols-1 gap-[16px]">
                <SubmitX pending={form.formState.isSubmitting} text="Recover" />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
