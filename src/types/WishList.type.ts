import { ProductType } from "./Product.type";

export interface WishListResponseType {
  status: string;
  count: number;
  data: ProductType[];
}