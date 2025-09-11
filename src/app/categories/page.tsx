import getCategories from "@/APIs/allCategories.api";
import React from "react";
import CategoryItem from "../_components/CategoryItem/CategoryItem";

export default async function Categories() {
  const data = await getCategories();
  return (
    <div className="container w-[80%] mx-auto my-4">
      <div className="flex flex-wrap">
        {data.map((currentCategory: CategoryType) => (
          <CategoryItem key={currentCategory._id} category={currentCategory} />
        ))}
      </div>
    </div>
  );
}
