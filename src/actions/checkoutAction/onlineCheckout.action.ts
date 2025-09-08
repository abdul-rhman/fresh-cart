"use server";
import { checkoutShemaType } from "@/Schema/checkout.shema";
import getMyToken from "@/utilities/getMyToken";

export default async function onlinePayment(
  cartId: string,
  url: string,
  formData: checkoutShemaType
) {
  try {
    const token = await getMyToken();

    if (!token) {
      throw new Error("login first");
    }
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
      {
        method: "POST",
        headers: { token, "Content-Type": "application/json" },
        body: JSON.stringify({ shippingAddress: formData }),
      }
    );
    const payload = await response.json();
    return payload;
  } catch (err) {
    return err;
  }
}
