import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BrandType } from "@/types/Brand.type";

export default function BrandItem({ brand }: { brand: BrandType }) {
  return (
    <div className="w-full md:w-1/2 lg:1/4 xl:w-1/5 p-2">
      <Card className="gap-1 p-2">
        <Link href={`/products/?brand=${brand._id}`}>
          <CardHeader>
            <CardTitle>
              <Image
                height={200}
                width={200}
                src={brand.image}
                alt=""
                className="w-full h-[300px] object-contain"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="font-bold">
            <p className="line-clamp-2 min-h-[3rem]">{brand.name}</p>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
}
