"use client";
import { CartItemType } from "@/types/cart-items-type";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

interface CartContextType {
  cart: CartItemType[];
  addToCart: (cartItem: CartItemType) => void;
  removeFromCart: (id: number | string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  total: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const addToCart = useCallback((item: CartItemType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        );
      } else {
        return [...prevCart, item];
      }
    });
  }, []);

  const removeFromCart = (id: string | number) => {
    const items = cart.filter((c) => c.id !== id);
    setCart(items);
  };

  useEffect(() => {
    const getTotal = () => {
      const theTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      setTotal(theTotal);
    };
    getTotal();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, open, setOpen, total, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
