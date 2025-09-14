"use server";
import { checkoutApiSchemaType } from "@/Schema/checkout.shema";
import getMyToken from "@/utilities/getMyToken";

export default async function createCashOrder(
  cartId: string,
  formData: checkoutApiSchemaType
) {
  try {
    const token = await getMyToken();

    if (!token) {
      return { status: "error", message: "login first" };
    }
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
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
