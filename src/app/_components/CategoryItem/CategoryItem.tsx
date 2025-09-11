import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function CategoryItem({ category }: { category: CategoryType }) {
  return (
    <div className="w-full md:w-1/2 lg:1/4 xl:w-1/5 p-2">
      <Card className="gap-1 p-2">
        <Link href={`/products/?category=${category._id}`}>
          <CardHeader>
            <CardTitle>
              <Image
                height={250}
                width={250}
                src={category.image}
                alt=""
                className="w-full h-[300px] object-contain"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="font-bold">
            <p className="line-clamp-2 min-h-[3rem]">{category.name}</p>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
}
