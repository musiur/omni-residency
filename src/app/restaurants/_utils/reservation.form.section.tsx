"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReservationFormSchema, TReservationFormSchema } from "@/lib/type";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Errors from "../../../components/core/atoms/errors.atom";
import { A__POST__RestaurantReservation } from "./actions";
import ResponseX from "@/components/core/molecules/response-x.molecule";
import { useSearchParams } from "next/navigation";

const ReservationForm = () => {
  const params = useSearchParams();
  const restaurant_id = params.get("id");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TReservationFormSchema>({
    resolver: zodResolver(ReservationFormSchema),
  });

  const onSubmit = async (data: TReservationFormSchema) => {
    const result = await A__POST__RestaurantReservation({
      ...data,
      restaurant_id,
    });

    ResponseX({ title: "Restaurant Reservation", result });
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
              <input {...register("mobile")} type="text" required />
              <Errors details={{ errors, name: "mobile" }} />
            </div>
            <div className="form-input">
              <label>
                Reservation Date <span className="text-pink-600">*</span>
              </label>
              <input {...register("reservation_date")} type="date" required />
              <Errors details={{ errors, name: "reservation_date" }} />
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
              <input {...register("number_of_people")} type="number" />
              <Errors details={{ errors, name: "number_of_people" }} />
            </div>
            <div className="form-input">
              <label>
                Reservation Time <span className="text-pink-600">*</span>
              </label>
              <input {...register("reservation_time")} type="time" required />
              <Errors details={{ errors, name: "reservation_time" }} />
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

export default ReservationForm;
