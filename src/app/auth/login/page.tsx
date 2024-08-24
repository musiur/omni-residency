"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  LoginFormSchema,
  TLoginFormSchema,
} from "@/app/auth/_utils/types/types";
import AuthGraphic from "@/components/core/molecules/auth-graphic.molecule";
import { A__POST__Login } from "../_utils/actions";
import ResponseX from "@/components/core/molecules/response-x.molecule";
import InputX from "@/components/core/molecules/input-x.molecule";
import SubmitX from "@/components/core/molecules/submit-x.molecule";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const params = useSearchParams();
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // form submission handler
  const onSubmit = async (data: TLoginFormSchema) => {
    const result = await A__POST__Login(
      data,
      params.get("from_location") || ""
    );
    ResponseX({ title: "User login", result });
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
              <InputX form={form} name="email" label="Email" />
              <InputX
                form={form}
                name="password"
                label="Password"
                type="password"
              />
              <div className="grid grid-cols-1 gap-[16px]">
                <div className="flex items-center justify-end gap-[10px]">
                  {/* <Toggler text="Remember me" textSize="" handler={() => {}} /> */}
                  <Link href="/auth/forgot-password" className="mt-[-15px]">
                    Forgot password?
                  </Link>
                </div>
                <SubmitX pending={form.formState.isSubmitting} text="Login" />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
