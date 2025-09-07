"use server";
import getMyToken from "@/utilities/getMyToken";

export default async function addToCart(productId: string) {
  try {
    const token = await getMyToken();

    if (!token) {
      throw new Error("login first");
    }
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        method: "POST",
        headers: { token, "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      }
    );
    const payload = await response.json();
    return payload;
  } catch (err) {
    return err;
  }
}
