import z from "zod";

export const loginFormSchema = z.object({
  email: z.email().nonempty("this field can't be empty"),
  password: z
    .string()
    .nonempty("this field can't be empty")
    .min(2, "cant't be less thatn 6 chars"),
});

export type loginSchemaType = z.infer<typeof loginFormSchema>;
