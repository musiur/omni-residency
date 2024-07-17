"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReservationFormSchema, TReservationFormSchema } from "@/lib/type";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Errors from "../../atoms/errors.atom";
import { useToast } from "@/components/ui/use-toast";

const ReservationForm = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TReservationFormSchema>({
    resolver: zodResolver(ReservationFormSchema),
  });

  const onSubmit = async (data: TReservationFormSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Reservation",
      description: "Request has been placed successfully!",
    });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    reset();
  };
  return (
    <section className="max-w-[700px] px-[16px] mx-auto">
      <h3 className="text-[20px] md:text-[32px] font-semibold pb-[32px] text-center">
        Fill in the form below to make a reservation
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
              <input {...register("number")} type="text" required />
              <Errors details={{ errors, name: "number" }} />
            </div>
            <div className="form-input">
              <label>
                Reservation Date <span className="text-pink-600">*</span>
              </label>
              <input {...register("date")} type="date" required />
              <Errors details={{ errors, name: "date" }} />
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
            <div className="form-input">
              <label>Total Number of People</label>
              <input {...register("numberOfPeople")} type="number" />
              <Errors details={{ errors, name: "numberOfPeople" }} />
            </div>
            <div className="form-input">
              <label>
                Reservation Time <span className="text-pink-600">*</span>
              </label>
              <input {...register("time")} type="time" required />
              <Errors details={{ errors, name: "time" }} />
            </div>
          </div>
        </div>
        <div className="form-input">
          <label>
            Additional Information like arrival time, cuisine, menu etc.
          </label>
          <textarea {...register("additionalInformation")} />
          <Errors details={{ errors, name: "additionalInformation" }} />
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

export default ReservationForm;
