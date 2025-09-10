"use client";
import getCartItems from "@/actions/cartActions/getCartItems.action";
import { cartItemType } from "@/types/cart.type";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type CartCountContextType = {
  cartItemsCount: number;
  setCartItemsCount: Dispatch<SetStateAction<number>>;
};

export const cartCountContext = createContext<CartCountContextType | undefined>(
  undefined
);

export function CartCountContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  async function updaeCartCount() {
    try {
      const res = await getCartItems();
      if (res.status === "success") {
        const sum = res.data.products.reduce(
          (acc: number, current: cartItemType) => acc + current.count,
          0
        );
        setCartItemsCount(sum);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
      }
    }
  }

  useEffect(() => {
    updaeCartCount();
  }, []);
  return (
    <cartCountContext.Provider value={{ cartItemsCount, setCartItemsCount }}>
      {children}
    </cartCountContext.Provider>
  );
}
