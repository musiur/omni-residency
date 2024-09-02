/**
 * @author: github.com/musiur
 * date: 29 May, 2024
 *
 * @description Unified & reusable INPUT component
 *
 * @params form, name, type, label, placeholder
 * form: react-hook-form
 * name: input name
 * type: input types
 * placeholder: input placeholder
 */

"use client";
import { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Eye, EyeOff } from "lucide-react";
import clsx from "clsx";
import { T__SelectOption } from "@/lib/type";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

type inputType =
  | "text"
  | "password"
  | "textarea"
  | "select"
  | "date"
  | "number";

const InputX = ({
  form,
  name = "input",
  type = "text",
  label = "Input Field",
  placeholder = "",
  options = [{ label: "Test", value: "test" }],
  required = false,
}: {
  form: any;
  name: string;
  type?: inputType;
  label: string;
  placeholder?: string;
  options?: T__SelectOption[];
  required?: boolean;
}) => {
  /**
   * State to manage showing password fields input as text or, password
   */
  const [showPass, setShowPass] = useState(false);

  /**
   * All Input fields in an Object Scaffold
   */

  const inputFields = {
    text: (field: any) => (
      <Input placeholder={placeholder} {...field} type={type} />
    ),
    number: (field: any) => (
      <Input
        placeholder={placeholder}
        value={field.value}
        onChange={(e: any) => {
          e.target.value && field.onChange(parseInt(e.target.value));
        }}
        type={type}
      />
    ),
    textarea: (field: any) => (
      <Textarea placeholder={placeholder} {...field} type={type} rows="8" />
    ),
    password: (field: any) => (
      <div className="relative">
        <Input
          placeholder={placeholder}
          {...field}
          type={!showPass ? type : "text"}
          className={clsx({
            "text-4xl caret-white": !showPass,
            "text-base": showPass,
          })}
        />
        <div
          className="inline-flex w-8 h-8 items-center justify-center absolute top-[8px] right-2"
          role="button"
          onClick={() => setShowPass(!showPass)}
        >
          <Eye
            className={clsx(
              "h-4 text-gray-400 dark:text-gray-500 transition-all duration-300",
              {
                "opacity-100 w-4": showPass,
                "opacity-0 w-0": !showPass,
              }
            )}
          />
          <EyeOff
            className={clsx(
              "h-4 text-gray-400 dark:text-gray-500 transition-all duration-300",
              {
                "opacity-100 w-4": !showPass,
                "opacity-0 w-0": showPass,
              }
            )}
          />
        </div>
      </div>
    ),
    select: (field: any) => (
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options?.length
            ? options?.map((option: T__SelectOption) => {
                const { value, label } = option;
                return (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                );
              })
            : null}
        </SelectContent>
      </Select>
    ),
  };
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel>
            {label} {required ? <span className="text-pink-600">*</span> : null}
          </FormLabel>
          <FormControl>
            {type === "date" ? (
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(value) => {
                      value && field.onChange(new Date(value));
                    }}
                    disabled={(date: any) =>
                      date < new Date() && date > new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            ) : (
              // @ts-ignore
              inputFields[type](field)
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputX;
