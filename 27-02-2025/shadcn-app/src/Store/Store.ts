import { create } from 'zustand';
import { persist} from 'zustand/middleware';
import { CartState } from '../Types/ProductType';
import axios from 'axios';

const useCartStore = create(
  persist<CartState>(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      removeFromCart: async (productId) => {
        try {
          await axios.delete(`https://fakestoreapi.com/carts/${productId}`);
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
          }));
        } catch (error) {
          console.error("Error removing item from cart:", error);
        }
      },

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })),

      setCart: (cart) => set(() => ({ cart })),
    }),
    {
      name: "cart-storage",
    //   storage : createJSONStorage(()=>localStorage), 
    }
  )
);

export default useCartStore;
