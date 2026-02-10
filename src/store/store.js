import { create } from "zustand";
import { persist } from "zustand/middleware";

const createProductSlice = (set, get) => ({
  products: [],
  currentCategory: "all",
  searchQuery: "",
  hasFetched: false,

  productActions: {
    fetchProducts: async () => {
      if (get().hasFetched) return;
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        set({ products: data, hasFetched: true });
      } catch (error) {
        console.log(error);
      }
    },

    searchProducts: (keyword) => set(() => ({ searchQuery: keyword })),

    selectCategory: (category) => set(() => ({ currentCategory: category })),
  },
});

const createCartSlice = (set, get) => ({
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
            { ...product, quantity: selectedQty, isChecked: true },
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
        cart: state.cart.filter((item) => item.id === id),
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

export const useStore = create((...a) => ({
  ...createProductSlice(...a),
  ...createCartSlice(...a),
}));
