import React from "react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ProductType } from "@/types/product.type";
import { Button } from "@/components/ui/button";

export default function SingleProduct({ product }: { product: ProductType }) {
  return (
    <div className="w-full md:w-1/2 lg:1/4 xl:w-1/5 p-2">
      <Card className="gap-1 p-2">
        <Link href={`/products/${product.id}`}>
          <CardHeader>
            <CardTitle>
              <Image
                height={300}
                width={300}
                src={product.imageCover}
                alt=""
                className="w-full"
              />
            </CardTitle>
            <CardDescription className="text-emerald-500">
              {product.category.name}
            </CardDescription>
          </CardHeader>
          <CardContent className="font-bold">
            <p className="line-clamp-2 min-h-[3rem]">{product.title}</p>
          </CardContent>
        </Link>
        <CardFooter>
          <div className="flex justify-between w-full">
            <div>{product.price} EGP</div>
            <div>
              {product.ratingsAverage}
              <i className="fas fa-star text-yellow-400"></i>
            </div>
          </div>
        </CardFooter>
        <Button className="rounded-md p-2 cursor-pointer bg-emerald-700 hover:bg-emerald-900 text-white font-bold">
          Add to Cart
        </Button>
      </Card>
    </div>
  );
}
