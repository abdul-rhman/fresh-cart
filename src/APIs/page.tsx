import getBrands from "@/APIs/allCategories.api";
import React from "react";
import { BrandType } from "@/types/Brand.type";
import BrandItem from "./../app/_components/BrandItem/BrandItem";

export default async function Brands() {
  const data = await getBrands();
  return (
    <div className="container w-[80%] mx-auto my-4">
      <div className="flex flex-wrap">
        {data.map((currentBrand: BrandType) => (
          <BrandItem key={currentBrand._id} brand={currentBrand} />
        ))}
      </div>
    </div>
  );
}
