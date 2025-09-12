"use server";
import getMyToken from "@/utilities/getMyToken";
export default async function ClearCart() {
  try {
    const token = await getMyToken();

    if (!token) {
      return { status: "error", message: "login first" };
    }
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        method: "DELETE",
        headers: { token },
      }
    );
    const payload = await response.json();
    return payload;
  } catch (err) {
    return err;
  }
}
