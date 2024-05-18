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
// import { ActionResponseHandler } from "@/lib/error";

const Register = () => {
  const Router = useRouter();
  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
  });

  // form submission handler
  const onSubmit = async (values: TRegisterFormSchema) => {
    // action on successfull response
    // const result = await RegisterAction(values);
    // ActionResponseHandler(result, "User register");
    // if (result.success) {
    Router.push("/auth/login");
    // }
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
              <InputField
                form={form}
                name="firstName"
                label="First name"
                placeholder="e.g. John"
              />
              <InputField
                form={form}
                name="lastName"
                label="Last name"
                placeholder="e.g. Doe"
              />
              <InputField
                form={form}
                name="phone"
                label="Phone"
                placeholder="e.g +23423234524"
              />
              <InputField
                form={form}
                name="email"
                label="Email"
                placeholder="e.g. hello@example.com"
              />
              <PasswordField form={form} name="password" label="Password" />
              <PasswordField
                form={form}
                name="confirmPassword"
                label="Confirm Password"
              />

              <div className="grid grid-cols-1 gap-[16px]">
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Registering..." : "Register"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Register;
