"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getMyToken() {
  let jwt = (await cookies()).get("next-auth.session-token")?.value;
  let decoded = await decode({
    token: jwt,
    secret: process.env.NEXTAUTH_SECRET!,
  });
  console.log(decoded?.token);
  return decoded?.token;
}
