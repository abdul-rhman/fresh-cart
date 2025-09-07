"use server";
import getMyToken from "@/utilities/getMyToken";
import { toast } from "sonner";
export default async function ClearCart() {
  const token = await getMyToken();

  if (!token) {
    throw new Error("login first");
  }
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
    method: "DELETE",
    headers: { token },
  });
  const payload = await response.json();
  return payload;
}
