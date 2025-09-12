"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useContext } from "react";
import { cartCountContext } from "@/Contexts/CartCountContextProvider";

export default function Navbar() {
  const { status } = useSession();
  // const { data: session, status } = useSession();
  const { cartItemsCount } = useContext(cartCountContext)!;
  function handleSignOut() {
    signOut({ callbackUrl: "/signin" });
  }

  return (
    <nav className="bg-emerald-700 text-white">
      <div className="container px-4 py-3 mx-auto w-full lg:w-[85%] flex  flex-col lg:flex-row justify-between gap-4 items-center">
        <div id="left">
          <ul className="flex gap-2 lg:gap-4 items-center">
            <li>
              <Link href="/">
                <i className="fa-solid fa-cart-shopping text-2xl "></i>{" "}
                FreshCart
              </Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
          </ul>
        </div>

        <div id="right">
          <ul className="flex gap-1.5 lg:gap-3">
            {status === "unauthenticated" ? (
              <>
                <li>
                  <i className="cursor-pointer fab fa-facebook"></i>
                </li>
                <li>
                  <i className="cursor-pointer fab fa-instagram"></i>
                </li>
                <li>
                  <i className="cursor-pointer fab fa-youtube"></i>
                </li>
                <li>
                  <i className="cursor-pointer fab fa-tiktok"></i>
                </li>
                <li>
                  <i className="cursor-pointer fab fa-linkedin"></i>
                </li>
                <li className="cursor-pointer">
                  <Link href={"/register"}>Register</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href={"/signin"}>Login</Link>
                </li>
              </>
            ) : status === "authenticated" ? (
              <>
                <li className="relative">
                  <Link
                    href="/cart"
                    className="flex size-[45px] bg-emerald-800 items-center justify-center rounded-full"
                  >
                    <i className="text-2xl fa-solid fa-cart-shopping text-white"></i>
                  </Link>
                  {cartItemsCount > 0 && (
                    <div className="flex items-center justify-center absolute size-[20px] p-2 rounded-full -right-2 -top-1 bg-white text-emerald-900">
                      {cartItemsCount}
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    href="/wishlist"
                    className="flex size-[45px] bg-emerald-800 items-center justify-center rounded-full"
                  >
                    <i className="text-2xl fa-solid fa-heart "></i>
                  </Link>
                </li>
                <li className="cursor-pointer" onClick={handleSignOut}>
                  <span className="flex size-[45px] bg-emerald-800 items-center justify-center rounded-full">
                    <i className="text-2xl fa-solid fa-right-from-bracket text-white"></i>
                  </span>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
