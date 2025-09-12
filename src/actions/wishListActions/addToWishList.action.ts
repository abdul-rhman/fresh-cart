"use server";
import getMyToken from "@/utilities/getMyToken";

export default async function addToWishlist(productId: string) {
  try {
    const token = await getMyToken();

    if (!token) {
      return { status: "error", message: "login first" };
    }
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
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
