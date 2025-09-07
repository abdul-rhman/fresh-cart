export interface cartResponseType {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: cartType;
}

export interface cartType {
  _id: string;
  cartOwner: string;
  products: cartItemType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface cartItemType {
  count: number;
  _id: string;
  product: cartProductType;
  price: number;
}

export interface cartProductType {
  subcategory: Subcategory[];
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  id: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
