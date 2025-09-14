import z from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .nonempty("this field can't be empty")
      .min(2, "min name length should be 2"),
    email: z.email().nonempty("this field can't be empty"),
    password: z
      .string()
      .nonempty("this field can't be empty")
      .min(2, "cant't be less thatn 6 chars"),
    rePassword: z
      .string()
      .nonempty("this field can't be empty")
      .min(2, "cant't be less thatn 6 chars"),
    phone: z
      .string()
      .nonempty("this field can't be empty")
      .regex(/^(\+2|2)?01[0125][0-9]{8}$/),
  })
  .refine(
    (obj) => {
      return obj.password == obj.rePassword;
    },
    { message: "passowrd isn't match", path: ["rePassword"] }
  );

export type registerSchemaType = z.infer<typeof registerFormSchema>;
