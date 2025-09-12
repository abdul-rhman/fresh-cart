"use client";
import getWishListItems from "@/actions/wishListActions/getWishListItems.action";
import { ProductType } from "@/types/Product.type";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type wishListContextType = {
  wishList: string[];
  setwishList: Dispatch<SetStateAction<string[]>>;
};

export const WishListContext = createContext<wishListContextType | undefined>(
  undefined
);

export function WishListContextProvider({ children }: { children: ReactNode }) {
  const [wishList, setwishList] = useState<string[]>([]);
  async function updaeWishList() {
    try {
      const res = await getWishListItems();
      if (res.status === "success") {
        console.log(res);
        setwishList(res.data.map((product: ProductType) => product._id));
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
      }
    }
  }

  useEffect(() => {
    updaeWishList();
  }, []);
  return (
    <WishListContext.Provider value={{ wishList, setwishList }}>
      {children}
    </WishListContext.Provider>
  );
}
