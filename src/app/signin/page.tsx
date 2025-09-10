"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormSchema, loginShemaType } from "@/Schema/signin.shema";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<loginShemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: loginShemaType) {
    setIsLoading(true);
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });
    if (response?.ok) {
      window.location.href = "/";
    }
    if (response?.error)
      toast.error(response?.error, {
        position: "top-center",
        duration: 2000,
        style: {
          fontWeight: "bold",
          color: "red",
        },
      });
    setIsLoading(false);
  }

  return (
    <div className="my-12 w-[90%] lg:w-[40%] mx-auto">
      <h1 className="text-3xl font-bold text-center">Login to fresh cart</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your E-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pasword</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            className="cursor-pointer w-full disabled:bg-emerald-500 bg-emerald-800 hover:bg-emerald-900"
            type="submit"
          >
            {isLoading ? <i className=" fa fa-spin fa-spinner"></i> : "Sign In"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
