"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
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
  return (
    <cartCountContext.Provider value={{ cartItemsCount, setCartItemsCount }}>
      {children}
    </cartCountContext.Provider>
  );
}
