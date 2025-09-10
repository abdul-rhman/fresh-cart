import React from "react";
import MainSlider from "./_components/MainSlider/MainSlider";
import CategoriesSlider from "./_components/CategoriesSlider/CategoriesSlider";
import getCategories from "../APIs/allCategories.api";
import AllProducts from "./_components/AllProducts/AllProducts";

export default async function Home() {
  const categories = await getCategories();
  return (
    <div>
      <MainSlider />
      <CategoriesSlider data={categories} />
      <AllProducts />
    </div>
  );
}
