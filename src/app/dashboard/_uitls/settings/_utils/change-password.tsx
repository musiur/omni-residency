"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  ChangeFormSchema,
  TChangeFormSchema,
} from "@/app/auth/_utils/types/types";
import ResponseX from "@/components/core/molecules/response-x.molecule";
import InputX from "@/components/core/molecules/input-x.molecule";
import SubmitX from "@/components/core/molecules/submit-x.molecule";
import { A__POST__ChangePassword } from "@/app/auth/_utils/actions";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const router = useRouter();
  const form = useForm<TChangeFormSchema>({
    resolver: zodResolver(ChangeFormSchema),
    defaultValues: {
      new_password: "",
      re_new_password: "",
      current_password: "",
    },
  });

  // form submission handler
  const onSubmit = async (data: TChangeFormSchema) => {
    const result = await A__POST__ChangePassword(data);
    ResponseX({ title: "Change password", result });
  };

  return (
    <div className="w-[280px] mx-auto md:mx-0 input-field">
      <Form {...form}>
        <form
          className="flex flex-col gap-[32px]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputX
            form={form}
            name="current_password"
            label="Current Password"
            type="password"
          />
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
            <SubmitX
              pending={form.formState.isSubmitting}
              text="Save changes"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};
export default ChangePassword;
