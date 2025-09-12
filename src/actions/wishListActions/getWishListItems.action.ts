"use server";
import getMyToken from "@/utilities/getMyToken";

export default async function getWishListItems() {
  try {
    const token = await getMyToken();

    if (!token) {
      return { status: "error", message: "login first" };
    }
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        method: "GET",
        headers: { token, "Content-Type": "application/json" },
      }
    );
    const payload = await response.json();
    return payload;
  } catch (err) {
    return err;
  }
}
