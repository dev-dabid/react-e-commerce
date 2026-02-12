import React from "react";
import { useStore } from "../store/store";
import { useState, useEffect } from "react";
import { Product } from "../types/index";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const addToCart = useStore((state) => state.cartActions.addToCart);
  const [qty, setQty] = useState<number>(1);

  return (
    <div className="flex flex-col p-3">
      <div className="w-full flex p-5 justify-center">
        <img
          className="object-contain h-auto object-center w-full aspect-square"
          src={product.image}
          alt={product.title}
        />
      </div>
      <p className="text-lg/normal truncate">{product.title}</p>
      <div className="flex justify-between">
        <p className="text-md sm:text-xl font-medium">${product.price}</p>
        <select
          className="text-center"
          onChange={(e) => setQty(Number(e.target.value))}
          name={product.id.toString()}
        >
          {Array.from({ length: 10 }, (_, i) => {
            return (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            );
          })}
        </select>
      </div>
      <div className="w-full mt-4">
        <button
          onClick={() => addToCart(product.id, product, qty)}
          className="product-button py-1.5 w-full bg-white hover:bg-gray-300 active:bg-gray-200  rounded-sm border text-sm sm:text-lg"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
