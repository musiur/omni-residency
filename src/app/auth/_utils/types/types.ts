import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const RegisterFormSchema = z
  .object({
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    re_password: z.string().min(8, 'Password must be at least 8 characters'),
  })
  .refine((values) => values.password === values.re_password, {
    message: "Password and confirm password must match",
    path: ["re_password"],
  });

export const ForgotFormSchema = z
  .object({
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
  })

export const ResetFormSchema = z
  .object({
    new_password: z.string().min(8, "Password must be at least 8 characters"),
    re_new_password: z.string(),
  })
  .refine((data) => data.new_password === data.re_new_password, {
    message: "Passwords do not match",
    path: ["new_password"],
  });

export const ChangeFormSchema = z
  .object({
    new_password: z.string().min(8, "Password must be at least 8 characters"),
    re_new_password: z.string(),
    current_password: z.string().min(8, "Current password must be at least 8 characters")
  })
  .refine((data) => data.new_password === data.re_new_password, {
    message: "Passwords do not match",
    path: ["new_password"],
  });

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>;
export type TRegisterFormSchema = z.infer<typeof RegisterFormSchema>;
export type TForgotFormSchema = z.infer<typeof ForgotFormSchema>;
export type TResetFormSchema = z.infer<typeof ResetFormSchema>;
export type TChangeFormSchema = z.infer<typeof ChangeFormSchema>;