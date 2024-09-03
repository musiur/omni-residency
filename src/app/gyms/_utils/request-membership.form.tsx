"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ResponseX from "@/components/core/molecules/response-x.molecule";
import { useSearchParams } from "next/navigation";
import { A__POST__RequestGymMembership } from "./actions";
import {
  GymRequestMembershipFormSchema,
  TGymRequestMembershipFormSchema,
} from "@/lib/type";
import InputX from "@/components/core/molecules/input-x.molecule";
import SubmitX from "@/components/core/molecules/submit-x.molecule";
import { Form } from "@/components/ui/form";

const GymRequestMembershipForm = () => {
  const params = useSearchParams();
  const branchid = params.get("branchid");

  const form = useForm<TGymRequestMembershipFormSchema>({
    resolver: zodResolver(GymRequestMembershipFormSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      gender: "Male",
      age: 0,
      additional_information: "",
    },
  });

  const onSubmit = async (data: TGymRequestMembershipFormSchema) => {
    const result = await A__POST__RequestGymMembership({
      ...data,
      branchid,
    });

    ResponseX({ title: "Get Gym Membership", result });

    if (result?.success) {
      form.reset();
    }
  };
  return (
    <section className="max-w-[700px] px-[16px] mx-auto">
      <h3 className="text-[20px] md:text-[32px] font-semibold pb-[32px] text-center">
        Fill in the form below to get your membership
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-[32px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div className="grid grid-cols-1 gap-[20px]">
              <InputX
                form={form}
                name="name"
                label="Your Name"
                required={true}
              />
              <InputX
                form={form}
                name="mobile"
                label="Your Mobile"
                required={true}
              />
            </div>
            <div className="grid grid-cols-1 gap-[20px]">
              <InputX
                form={form}
                name="email"
                label="Your Email"
                required={true}
              />
              <InputX
                form={form}
                name="age"
                label="Your Age"
                required={true}
                type="number"
              />
            </div>
          </div>
          <InputX
            form={form}
            name="gender"
            label="You gender"
            type="select"
            options={[
              {
                value: "Male",
                label: "Male",
              },
              {
                value: "Female",
                label: "Female",
              },
            ]}
            required={true}
          />
          <div className="form-input">
            <InputX
              form={form}
              name="additional_information"
              label="Additional Information"
              type="textarea"
            />
          </div>
          <div className="flex justify-center">
            <SubmitX
              pending={form.formState.isSubmitting}
              text="Get Membership"
            />
          </div>
        </form>
      </Form>
    </section>
  );
};

export default GymRequestMembershipForm;
