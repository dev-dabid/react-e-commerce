import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { Product, CartItem } from "../types/index";

interface ProductSlice {
  products: Product[];
  currentCategory: string;
  searchQuery: string;
  hasFetched: boolean;

  productActions: {
    fetchProducts: () => Promise<void>;
    searchProducts: (keyword: string) => void;
    selectCategory: (category: string) => void;
  };
}

interface CartSlice {
  cart: CartItem[];

  cartActions: {
    addToCart: (
      productId: number,
      product: object,
      selectedQty: number,
    ) => void;
    checkAllCartItem: (checkVal: boolean) => void;
    checkCartItem: (id: number, checkVal: boolean) => void;
    removeAllCartItem: () => void;
    removeCartItem: (id: number) => void;
    updateQuantity: (id: number, newQty: number) => void;
    resetCart: () => void;
  };
}

interface StoreState extends ProductSlice, CartSlice {}

const createProductSlice: StateCreator<StoreState, [], [], ProductSlice> = (
  set,
  get,
) => ({
  products: [],
  currentCategory: "all",
  searchQuery: "",
  hasFetched: false,

  productActions: {
    fetchProducts: async () => {
      if (get().hasFetched) return;
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = (await response.json()) as Product[];
        set({ products: data, hasFetched: true });
      } catch (error) {
        console.log(error);
      }
    },

    searchProducts: (keyword) => set(() => ({ searchQuery: keyword })),

    selectCategory: (category) => set(() => ({ currentCategory: category })),
  },
});

const createCartSlice: StateCreator<StoreState, [], [], CartSlice> = (
  set,
  get,
) => ({
  cart: [],

  cartActions: {
    addToCart: (productId, product, selectedQty) => {
      const existingItem = get().cart.find((item) => item.id === productId);

      if (existingItem) {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity:
                    item.quantity + selectedQty > 50
                      ? item.quantity
                      : item.quantity + selectedQty,
                }
              : item,
          ),
        }));
      } else {
        set((state) => ({
          cart: [
            ...state.cart,
            { ...product, quantity: selectedQty, isChecked: true } as CartItem,
          ],
        }));
      }
    },

    checkAllCartItem: (checkVal) =>
      set((state) => ({
        cart: state.cart.map((item) => {
          return { ...item, isChecked: checkVal };
        }),
      })),

    checkCartItem: (id, checkVal) =>
      set((state) => ({
        cart: state.cart.map((item) => {
          return item.id === id ? { ...item, isChecked: checkVal } : item;
        }),
      })),

    removeAllCartItem: () =>
      set((state) => ({
        cart: state.cart.filter((item) => item.isChecked === false),
      })),

    removeCartItem: (id) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),

    updateQuantity: (id, newQty) => {
      if (Number.isNaN(newQty)) return;
      set((state) => ({
        cart: state.cart.map((item) => {
          return item.id === id ? { ...item, quantity: newQty } : item;
        }),
      }));
    },

    resetCart: () => set({ cart: [] }),
  },
});

export const useStore = create<StoreState>()((...a) => ({
  ...createProductSlice(...a),
  ...createCartSlice(...a),
}));
