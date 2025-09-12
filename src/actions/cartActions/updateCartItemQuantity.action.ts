"use server";
import getMyToken from "@/utilities/getMyToken";
import { toast } from "sonner";

export default async function updateCartItemQuantity(
  productId: string,
  count: number
) {
  try {
    const token = await getMyToken();

    if (!token) {
      toast.error("Login first", {
        position: "top-center",
        duration: 20000,
      });
      if (!token) {
        return { status: "error", message: "login first" };
      }
    }
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        method: "PUT",
        headers: { token, "Content-Type": "application/json" },
        body: JSON.stringify({ count: String(count) }),
      }
    );
    const payload = await response.json();
    return payload;
  } catch (err) {
    return err;
  }
}
