import { useStore } from "../../store/store";
import { useState, useEffect } from "react";
import ProductCart from "../../components/ProductCard";

const Categories = () => {
  const products = useStore((state) => state.products);

  const getCategories = () => {
    const catObjs = {};
    const catArr = ["All"].sort();

    products.forEach((product) => {
      catObjs[product.category] = true;
    });

    for (let cat in catObjs) {
      catArr.push(cat);
    }

    return catArr.map((rawData) => {
      return rawData
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-24 md:w-32 h-full bg-gray-100 overflow-y-auto border-r border-gray-200">
        {getCategories().map((category, index) => (
          <div
            className="w-full text-center bg-amber-300 hover:bg-amber-400 cursor-pointer transition-colors"
            key={index}
          >
            <p className="text-xs p-2 leading-tight wrap-break-word">
              {category}
            </p>
          </div>
        ))}
      </div>
      <div className="flex-1 grid grid-cols-2 xl:grid-cols-5 gap-2 p-1 overflow-y-auto bg-white">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
