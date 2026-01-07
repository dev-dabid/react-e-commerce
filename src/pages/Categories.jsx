import { useStore } from "../store/store";
import { useState, useEffect } from "react";

const Categories = () => {
  const products = useStore((state) => state.products);

  const getCategories = () => {
    const catObjs = {};
    const catArr = [];

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
    <div>
      {getCategories().map((category, index) => {
        return <div key={index}>{category}</div>;
      })}
    </div>
  );
};

export default Categories;
