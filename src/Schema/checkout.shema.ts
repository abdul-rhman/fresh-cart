import z from "zod";

export const checkoutFormSchema = z.object({
  details: z.string().nonempty("this field can't be empty"),
  phone: z
    .string()
    .regex(/^(\+2|2)?01[1235]\d{8}$/, "enter valid phone number"),
  city: z.string().nonempty("this field can't be empty"),
});

export type checkoutShemaType = z.infer<typeof checkoutFormSchema>;
