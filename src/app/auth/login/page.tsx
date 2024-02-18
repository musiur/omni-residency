"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  LoginFormSchema,
  TLoginFormSchema,
} from "@/app/auth/_utils/types/types";
import AuthGraphic from "@/components/core/molecules/auth-graphic.molecule";
import InputField from "@/components/core/molecules/input-field.molecule";
import PasswordField from "@/components/core/molecules/password-filed.molecule";

const Login = () => {
  //   const { setAuth } = useAuthContext();
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // form submission handler
  const onSubmit = async (values: TLoginFormSchema) => {
    // action on successfull response
    // const result = await LoginAction(values);
    // ActionResponseHandler(result, "User login", true);
    // if (result.success) {
    //   setAuth({ ...result.data });
    // }
  };

  return (
    <div className="py-[90px] h-[100dvh] flex items-center justify-center">
      <div className="relative container grid grid-cols-1 md:grid-cols-2 gap-10">
        <AuthGraphic
          H1="Login"
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
              <InputField
                form={form}
                name="email"
                label="Email"
                placeholder="e.g. hello@example.com"
              />
              <PasswordField form={form} name="password" label="Password" />
              <div className="grid grid-cols-1 gap-[16px]">
                <div className="flex items-center justify-end gap-[10px]">
                  {/* <Toggler text="Remember me" textSize="" handler={() => {}} /> */}
                  <Link href="/auth/forgot-password" className="mt-[-15px]">
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Login..." : "Login"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
