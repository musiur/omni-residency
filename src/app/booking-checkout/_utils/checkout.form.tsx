"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import InputX from "@/components/core/molecules/input-x.molecule";
import { useCartContext } from "@/lib/context/cart-provider.context";
import { A__POST__Booking } from "./actions";
import { usePathname, useRouter } from "next/navigation";
import SubmitX from "@/components/core/molecules/submit-x.molecule";
import ResponseX from "@/components/core/molecules/response-x.molecule";
import { CSR__DELETE__Cookie } from "@/app/_utils/actions";

const FormSchema = z.object({
  full_name: z.string().min(1),
  email: z.string().min(1),
  mobile: z.string().min(1),
  additional_info: z.string().optional(),
});

const CheckoutForm = () => {
  const router = useRouter();
  const pathname = usePathname();
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
        console.log(localStorage.getItem("search"),searchInfo)
        console.log(new Date(searchInfo.checkin).toDateString())
        const { checkin, checkout, branch } = searchInfo;
        const payload = {
          ...data,
          check_in: new Date(checkin),
          check_out: new Date(checkout),
          branch_id: parseInt(branch || 1),
          cart_id: cart?.id,
        };
        const result = await A__POST__Booking(payload);

        ResponseX({ title: "Booking", result });
        if (result?.status_code === 401) {
          await CSR__DELETE__Cookie("access");
          await CSR__DELETE__Cookie("refresh");
          router.push(
            `/auth/login?from_location=${pathname?.replaceAll("/", "___")}`
          );
        }
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
