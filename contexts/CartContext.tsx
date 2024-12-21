"use client";
import { CartItemType } from "@/types/cart-items-type";
import { getItem, setItem } from "@/utils/helper";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

interface CartContextType {
  cart: CartItemType[];
  addToCart: (cartItem: CartItemType) => void;
  removeFromCart: (id: number | string) => void;
  updateCart: (updatedCart: CartItemType[]) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  total: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const addToCart = useCallback(
    (item: CartItemType) => {
      setCart((prevCart) => {
        // Check if the item already exists in the cart
        const existingItem = prevCart.find(
          (cartItem) => cartItem.id === item.id,
        );

        if (existingItem) {
          // If it exists, update the quantity
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem,
          );
        } else {
          // If it doesn't exist, add it to the cart
          return [...prevCart, item];
        }
      });
      // Add to local storage
      setItem("cart", JSON.stringify(cart));

      // Notify user about the added item
      toast.success(
        <div className="font-poppins font-bold">
          Added <span className="text-lg text-primary">{item.title}</span> to
          cart
        </div>,
      );
    },
    [cart],
  );

  const removeFromCart = (id: string | number) => {
    const items = cart.filter((c) => c.id !== id);

    // The RemovedItem is the item that was removed from the cart
    const removedItem = cart.find((c) => c.id === id);

    // Remove the item from the cart
    setCart(items);

    // Remove the item from local storage
    setItem("cart", JSON.stringify(items));

    // Notify user about the removed item
    if (removedItem)
      toast.info(
        <div className="font-poppins font-bold text-red-400">
          Removed{" "}
          <span className="text-lg text-primary">{removedItem?.quantity}</span>{" "}
          of <span className="text-lg text-primary">{removedItem?.title}</span>{" "}
          from cart
        </div>,
      );
  };

  const updateCart = (updatedCart: CartItemType[]) => {
    setCart(updatedCart);
    // Update the cart in local storage
    setItem("cart", JSON.stringify(updatedCart));
  };

  // Get the total price of the cart
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

  // Get the cart from local storage
  useEffect(() => {
    const storedCart = getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        open,
        setOpen,
        total,
        removeFromCart,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
