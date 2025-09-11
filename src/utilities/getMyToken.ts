"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getMyToken() {
  try {
    const jwt =
      (await cookies()).get("next-auth.session-token")?.value ||
      (await cookies()).get("__Secure-next-auth.session-token")?.value;
    const decoded = await decode({
      token: jwt,
      secret: process.env.NEXTAUTH_SECRET!,
    });
    if (!decoded) return null;
    return decoded?.token || null;
  } catch (err: unknown) {
    if (err instanceof Error) {
    }
    return null;
  }
}
