"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Session } from "next-auth";

export default function Navbar() {
  const { data: session, status } = useSession();

  function handleSignOut() {
    signOut({ callbackUrl: "/signin" });
  }
  return (
    <nav className="bg-emerald-700 text-white">
      <div className="container p-4 mx-auto w-full lg:w-[85%] flex flex-col lg:flex-row justify-between gap-4 items-center">
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
            {session ? (
              <li>
                <Link href="/cart">Cart</Link>
              </li>
            ) : (
              ""
            )}
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
              <li className="cursor-pointer" onClick={handleSignOut}>
                SignOut
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
