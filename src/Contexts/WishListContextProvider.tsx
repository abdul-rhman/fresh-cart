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
  wishList: ProductType[];
  setwishList: Dispatch<SetStateAction<ProductType[]>>;
};

export const WishListContext = createContext<wishListContextType | undefined>(
  undefined
);

export function WishListContextProvider({ children }: { children: ReactNode }) {
  const [wishList, setwishList] = useState<ProductType[]>([]);
  async function updaeWishList() {
    try {
      const res = await getWishListItems();
      if (res.status === "success") {
        setwishList(res.data);
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
