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
import { checkoutFormSchema, checkoutShemaType } from "@/Schema/checkout.shema";
import { useParams } from "next/navigation";
import onlinePayment from "@/actions/checkoutAction/onlineCheckout.action";
import { toast } from "sonner";
import { useState } from "react";

export default function Checkout() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { cartId }: { cartId: string } = useParams();
  const form = useForm<checkoutShemaType>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
  });

  async function onSubmit(values: checkoutShemaType) {
    setIsLoading(true);
    const res = await onlinePayment(cartId, "http://localhost:3000", values);
    if (res.status === "success") {
      window.location.assign(res.session.url);
    } else {
      toast.error("something went wrong", {
        position: "top-center",
        duration: 2000,
      });
    }
    setIsLoading(false);
  }

  return (
    <div className="my-12 w-[90%] lg:w-[40%] mx-auto">
      <h1 className="text-3xl font-bold text-center">Checkout</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Details</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your Address details"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your city" {...field} />
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
            {isLoading ? <i className=" fa fa-spin fa-spinner"></i> : "pay"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
