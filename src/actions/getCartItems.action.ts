'use server';
import getMyToken from "@/utilities/getMyToken";
import { toast } from "sonner";

export default async function getCartItems() {
  const token = await getMyToken();

  if (!token) {
    throw new Error("login first");
  }
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
    method: "GET",
    headers: { token, "Content-Type": "application/json" },
  });
  const payload = await response.json();
  return payload;
}
