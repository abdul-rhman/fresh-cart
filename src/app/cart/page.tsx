"use client";
import getCartItems from "@/actions/getCartItems.action";
import React, { useContext, useEffect, useState } from "react";
import CartItem from "../_components/CartItem/CartItem";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ClearCart from "@/actions/clearCart.action";
import { cartCountContext } from "@/Contexts/CartCountContextProvider";
import { cartResponseType } from "@/types/Cart.type";

export default function Cart() {
  const [cart, SetCart] = useState<cartResponseType>();
  const [isCartLoading, setCartLoading] = useState(true);
  const [isClearCartLoading, setClearCartLoading] = useState(false);
  console.log(cart?.data.totalCartPrice);

  const { setCartItemsCount } = useContext(cartCountContext)!;
  function handleCartUpdate(newCart: cartResponseType) {
    SetCart(newCart);
  }
  async function handleClearCart() {
    setClearCartLoading(true);
    try {
      const res = await ClearCart();
      console.log(res);
      if (res.message === "success") {
        toast.success("cart cleared sucessfully", {
          position: "top-center",
          duration: 2000,
        });
        setCartItemsCount(0);
        updaeCart();
      } else {
        toast.error("can't clear your cart", {
          position: "top-center",
          duration: 2000,
        });
      }
    } catch (err) {}
    setClearCartLoading(false);
  }
  async function updaeCart() {
    try {
      let res = await getCartItems();
      console.log(res);
      setCartLoading(false);
      if (res.status === "success") {
        SetCart(res);
      }
    } catch (err) {}
  }

  useEffect(() => {
    updaeCart();
  }, []);

  if (isCartLoading) {
    return (
      <div className="h-[80vh] w-screen flex justify-center items-center ">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <>
      {cart?.data?.products?.length ? (
        <div className="lg:w-[60%] md:w-[75%] my-6 mx-auto w-[90%]">
          <div className="flex justify-between my-2">
            <p className="text-emerald-900  text-md border-b-2 border-emerald-900 p-2">
              {cart.numOfCartItems} {cart.numOfCartItems > 1 ? "Items" : "Item"}
            </p>
            <Button
              disabled={isClearCartLoading}
              onClick={handleClearCart}
              className="p-5 text-white w-[120px] bg-red-500 hover:bg-red-400 cursor-pointer rounded-2xl font-bold"
            >
              {isClearCartLoading ? (
                <i className=" fa fa-spin fa-spinner"></i>
              ) : (
                "Clear cart"
              )}
            </Button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart?.data?.products?.map((product) => (
                  <CartItem
                    key={product._id}
                    product={product}
                    updateCart={handleCartUpdate}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1 className="mt-[40vh] font-extrabold text-4xl text-emerald-900 text-center">
          {" "}
          Your cart is empty 🛒
        </h1>
      )}
    </>
  );
}
