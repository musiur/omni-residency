"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import InputX from "@/components/core/molecules/input-x.molecule";
import { useCartContext } from "@/lib/context/cart-provider.context";
import { A__POST__Booking } from "./actions";
import { useRouter } from "next/navigation";
import SubmitX from "@/components/core/molecules/submit-x.molecule";

const FormSchema = z.object({
  full_name: z.string().min(1),
  email: z.string().min(1),
  mobile: z.string().min(1),
  additional_info: z.string().optional(),
});

const CheckoutForm = () => {
  const router = useRouter();
  const { cart, clearCart } = useCartContext();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      mobile: "",
      additional_info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("search")) {
        const searchInfo = JSON.parse(localStorage.getItem("search") || "");
        const { checkin, checkout, branch } = searchInfo;
        const payload = {
          ...data,
          check_in: checkin.split("T")[0],
          check_out: checkout.split("T")[0],
          branch_id: parseInt(branch || 1),
          cart_id: cart?.id,
        };
        const result = await A__POST__Booking(payload);
        if (result?.success) {
          clearCart();
          router.push("/dashboard/bookings");
        }
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <InputX form={form} name="full_name" label="Full name" />
        <InputX form={form} name="email" label="Email" />
        <InputX form={form} name="mobile" label="Mobile" />
        <InputX
          form={form}
          name="additional_info"
          label="Additional message"
          type="textarea"
        />
        <SubmitX pending={form.formState.isSubmitting} />
      </form>
    </Form>
  );
};

export default CheckoutForm;
