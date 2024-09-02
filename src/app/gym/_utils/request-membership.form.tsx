"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Errors from "../../../components/core/atoms/errors.atom";
import ResponseX from "@/components/core/molecules/response-x.molecule";
import { useSearchParams } from "next/navigation";
import { A__POST__RequestGymMembership } from "./actions";
import {
  GymRequestMembershipFormSchema,
  TGymRequestMembershipFormSchema,
} from "@/lib/type";

const GymRequestMembershipForm = () => {
  const params = useSearchParams();
  const gym_id = params.get("id");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TGymRequestMembershipFormSchema>({
    resolver: zodResolver(GymRequestMembershipFormSchema),
  });

  const onSubmit = async (data: TGymRequestMembershipFormSchema) => {
    const result = await A__POST__RequestGymMembership({
      ...data,
      gym_id,
    });

    ResponseX({ title: "Restaurant Reservation", result });
    reset();
  };
  return (
    <section className="max-w-[700px] px-[16px] mx-auto">
      <h3 className="text-[20px] md:text-[32px] font-semibold pb-[32px] text-center">
        Fill in the form below to get your membership
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-[32px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="grid grid-cols-1 gap-[20px]">
            <div className="form-input">
              <label>
                Your Name <span className="text-pink-600">*</span>
              </label>
              <input {...register("name")} type="text" required />
              <Errors details={{ errors, name: "name" }} />
            </div>
            <div className="form-input">
              <label>
                Your Number <span className="text-pink-600">*</span>
              </label>
              <input {...register("mobile")} type="text" required />
              <Errors details={{ errors, name: "mobile" }} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-[20px]">
            <div className="form-input">
              <label>
                Your Email <span className="text-pink-600">*</span>
              </label>
              <input {...register("email")} type="email" required />
              <Errors details={{ errors, name: "email" }} />
            </div>
          </div>
        </div>
        <div className="form-input">
          <label>
            Additional Information like arrival time, cuisine, menu etc.
          </label>
          <textarea {...register("additional_information")} />
          <Errors details={{ errors, name: "additional_information" }} />
        </div>
        <div className="flex justify-center">
          <Button
            disabled={isSubmitting}
            className={clsx("", { "disabled:opacity-50": isSubmitting })}
          >
            {isSubmitting ? "Please wait..." : "Send Message"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default GymRequestMembershipForm;
