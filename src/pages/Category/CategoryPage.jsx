import { useStore } from "../../store/store";
import { useState, useEffect } from "react";
import ProductCart from "../../components/ProductCard";

const Categories = () => {
  const products = useStore((state) => state.products);
  const currentCategory = useStore((state) => state.currentCategory);
  const searchQuery = useStore((state) => state.searchQuery);
  const selectCategory = useStore(
    (state) => state.productActions.selectCategory,
  );

  const filteredProducts = products
    .filter((product) => {
      return product.category === currentCategory || currentCategory === "all";
    })
    .filter((products) => {
      return products.title.toLowerCase().includes(searchQuery);
    });

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
          <button
            key={index}
            className="bg-red-50 w-full"
            onClick={(e) => selectCategory(e.target.innerText.toLowerCase())}
          >
            <p className="text-xs p-2 leading-tight wrap-break-word">
              {category}
            </p>
          </button>
        ))}
      </div>
      <div className="flex-1 grid grid-cols-2 xl:grid-cols-5 gap-2 p-1 overflow-y-auto bg-white">
        {filteredProducts.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
