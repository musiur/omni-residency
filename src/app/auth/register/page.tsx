"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  RegisterFormSchema,
  TRegisterFormSchema,
} from "@/app/auth/_utils/types/types";
import { useRouter } from "next/navigation";
import AuthGraphic from "@/components/core/molecules/auth-graphic.molecule";
import InputField from "@/components/core/molecules/input-field.molecule";
import PasswordField from "@/components/core/molecules/password-filed.molecule";
import { A__POST__Register } from "../_utils/actions";
import ResponseX from "@/components/core/molecules/response-x.molecule";
import InputX from "@/components/core/molecules/input-x.molecule";
import SubmitX from "@/components/core/molecules/submit-x.molecule";
// import { ActionResponseHandler } from "@/lib/error";

const Register = () => {
  const Router = useRouter();
  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
      re_password: "",
    },
  });

  // form submission handler
  const onSubmit = async (data: TRegisterFormSchema) => {
    const result = await A__POST__Register(data);
    ResponseX({ title: "User register", result });
    if (result.success) {
      Router.push("/auth/login");
    }
  };

  return (
    <div className="py-[90px]">
      <div className="relative container grid grid-cols-1 md:grid-cols-2 gap-10">
        <AuthGraphic
          H1="Register"
          text="Don't have account?"
          link="/auth/login"
          linkText="Please login!"
        />
        <div className="p-[20px] md:p-[40px] rounded-[10px] border border-dark_gray backdrop-blur shadow-md min-w-[300px] max-w-[550px] mx-auto md:mx-0 input-field">
          <Form {...form}>
            <form
              className="flex flex-col gap-[32px]"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <InputX form={form} name="email" label="Email" />
              <InputX
                form={form}
                name="password"
                label="Password"
                type="password"
              />
              <InputX
                form={form}
                name="re_password"
                label="Confirm Password"
                type="password"
              />
              {/* <PasswordField form={form} name="password" label="Password" />
              <PasswordField
                form={form}
                name="re_password"
                label="Confirm Password"
              /> */}

              <div className="grid grid-cols-1 gap-[16px]">
                <SubmitX
                  pending={form.formState.isSubmitting}
                  text="Register"
                />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Register;
