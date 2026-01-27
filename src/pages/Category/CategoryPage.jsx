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

  const [activeCat, setActiveCat] = useState(currentCategory);

  const changeCategory = (e, category) => {
    selectCategory(e.target.innerText.toLowerCase());
    setActiveCat(category);
    console.log(category);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-30 md:w-32 h-full bg-gray-100 overflow-y-auto border-r border-gray-200">
        {getCategories().map((category, index) => (
          <button
            key={index}
            className={`${category.toLowerCase() === activeCat ? "bg-gray-300" : ""} w-full hover:bg-gray-300 active:bg-gray-400`}
            onClick={(e) => changeCategory(e, category.toLowerCase())}
          >
            <p className="text-xs p-2 leading-tight wrap-break-word">
              {category}
            </p>
          </button>
        ))}
      </div>
      <div className="flex-1  overflow-y-auto">
        <div className=" grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-1 p-1 bg-white">
          {filteredProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
