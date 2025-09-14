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
import {
  checkoutFormSchema,
  checkoutSchemaType,
} from "@/Schema/checkout.shema";
import { useParams, useRouter } from "next/navigation";
import onlinePayment from "@/actions/checkoutAction/onlineCheckout.action";
import createCashOrder from "@/actions/checkoutAction/cashOrder.action";
import { toast } from "sonner";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Checkout() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { cartId }: { cartId: string } = useParams();
  const router = useRouter();
  const form = useForm<checkoutSchemaType>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      details: "",
      phone: "",
      city: "",
      paymentMethod: "cash",
    },
  });

  async function onSubmit(values: checkoutSchemaType) {
    setIsLoading(true);
    const { paymentMethod, ...input } = values;
    const res =
      paymentMethod === "cash"
        ? await createCashOrder(cartId, input)
        : await onlinePayment(cartId, "http://localhost:3000", input);
    if (res.status === "success") {
      if (paymentMethod === "cash") router.push("/allorders");
      else window.location.assign(res.session.url);
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
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Payment Method</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col gap-2"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="cash" id="cash" />
                      </FormControl>
                      <Label htmlFor="cash">Pay on Delivery</Label>
                    </FormItem>

                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="visa" id="visa" />
                      </FormControl>
                      <Label htmlFor="visa">Visa</Label>
                    </FormItem>
                  </RadioGroup>
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
            {isLoading ? (
              <i className=" fa fa-spin fa-spinner"></i>
            ) : (
              "Place your Order"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
