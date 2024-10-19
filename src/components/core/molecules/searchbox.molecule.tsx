/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { clsx } from "clsx";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import InputX from "./input-x.molecule";
import { useRouter } from "next/navigation";
import { Utils___DateExtracter, Utils___DateFormatter } from "@/lib/utils";
import { useEffect } from "react";
import { useCartContext } from "@/lib/context/cart-provider.context";

const Schema__SearchForm = z.object({
  branch: z.string(),
  checkin: z.instanceof(Date),
  checkout: z.instanceof(Date),
  persons: z.string(),
});

export type Type___Search__SearchForm = z.infer<typeof Schema__SearchForm>;

const SearchBox = ({
  tab,
  branches,
  defaultValues,
}: {
  tab?: boolean;
  branches?: any;
  defaultValues?: any;
}) => {
  const { updateCart, cart } = useCartContext();

  const timeNow = new Date();
  const tomorrow = new Date(timeNow);
  tomorrow.setDate(timeNow.getDate() + 1);

  const router = useRouter();

  const form = useForm<Type___Search__SearchForm>({
    resolver: zodResolver(Schema__SearchForm),
    defaultValues: {
      branch: defaultValues?.branch
        ? defaultValues.branch
        : branches?.length
        ? branches[0]?.id?.toString()
        : "1",
      checkin: defaultValues?.checkin
        ? Utils___DateExtracter(defaultValues.checkin)
        : timeNow,
      checkout: defaultValues?.checkout
        ? Utils___DateExtracter(defaultValues.checkout)
        : tomorrow,
      persons: defaultValues?.persons || "1",
    },
  });

  const onSubmit = async (data: Type___Search__SearchForm) => {
    const convertedCheckIn = Utils___DateFormatter(data.checkin);
    const convertedCheckOut = Utils___DateFormatter(data.checkout);
    router.push(
      `/search?branch=${data?.branch}&checkin=${convertedCheckIn}&checkout=${convertedCheckOut}&persons=${data?.persons}`
    );
  };

  form.watch(() => {
    const values = form.getValues();
    console.log(JSON.stringify(values))
    localStorage.setItem("search", JSON.stringify(values));
  });

  useEffect(() => {
    updateCart(
      form.getValues("checkin").toISOString(),
      form.getValues("checkout").toISOString()
    );
  }, [form.getValues("checkin"), form.getValues("checkout")]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSearchData = localStorage.getItem("search");
      if (storedSearchData) {
        const parsedData = JSON.parse(storedSearchData);
        form.setValue("checkin", new Date(parsedData.checkin));
        form.setValue("checkout", new Date(parsedData.checkout));
      }
    }
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        {tab ? (
          <div className="w-full flex items-center justify-start">
            {branches?.length
              ? branches.map(
                  (
                    branch: { id: number; nick_name: string },
                    index: number
                  ) => {
                    const { id, nick_name } = branch;
                    const matched = form.watch("branch") === id.toString();
                    return (
                      <div
                        key={id}
                        role="button"
                        className={clsx(
                          "px-[24px] py-[16px] font-semibold transition ease-in-out duration-500",
                          {
                            "bg-white/50 text-white": !matched,
                            "bg-white text-muted_gray": matched,
                            "rounded-tl-[10px]": index === 0,
                          }
                        )}
                        onClick={() => {
                          form.setValue("branch", id.toString());
                        }}
                      >
                        {nick_name}
                      </div>
                    );
                  }
                )
              : null}
          </div>
        ) : null}
        <div
          className={clsx(
            "bg-white px-[24px] py-[32px] flex flex-col lg:flex-row items-center lg:items-end gap-[32px]",
            {
              "rounded-[10px] mt-[56px]": !tab,
              "rounded-b-[10px] rounded-r-[10px]": tab,
            }
          )}
        >
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <div className="grid grid-cols-1 gap-[16px]">
              <InputX form={form} name="checkin" label="Check in" type="date" />
            </div>
            <div className="grid grid-cols-1 gap-[16px]">
              <InputX
                form={form}
                name="checkout"
                label="Check out"
                type="date"
              />
            </div>
            <div className="grid grid-cols-1 gap-[16px]">
              <InputX
                form={form}
                name="persons"
                label="Persons"
                type="select"
                options={Data__PersonTypes}
              />
            </div>
          </div>

          <Button type="submit" className="min-w-[148px]">
            Search Now
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SearchBox;

const Data__PersonTypes = [
  {
    label: "1 Adult",
    value: "1",
  },
  {
    label: "2 Adult",
    value: "2",
  },
  {
    label: "3 Adult",
    value: "3",
  },
  {
    label: "4 Adult",
    value: "4",
  },
  {
    label: "5 Adult",
    value: "5",
  },
  {
    label: "6 Adult",
    value: "6",
  },
];
