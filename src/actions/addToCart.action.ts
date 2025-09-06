import getMyToken from "@/utilities/getMyToken";
import { toast } from "sonner";

export default async function addToCart(productId: string) {
  const token = await getMyToken();

  if (!token) {
    toast.error("Login first", {
      position: "top-center",
      duration: 20000,
    });
    throw new Error("login first");
  }
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
    method: "POST",
    headers: { token, "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
  });
  const payload = await response.json();
  return payload;
}
