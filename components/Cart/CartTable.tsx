"use client";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/utils/helper";
import { Trash, Trash2 } from "lucide-react";
import Image from "next/image";

export default function CartTable() {
  const { cart, updateCart, removeFromCart } = useCart();

  const handleChange = (
    id: number | string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newQuantity = parseInt(e.target.value, 10);

    // Ensure the quantity is valid (not less than 1 and not more than 10)
    if (isNaN(newQuantity) || newQuantity < 1 || newQuantity > 10) {
      return; // Ignore invalid quantity
    }

    // Update the cart by mapping over the items and updating the quantity of the correct item
    updateCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  return (
    <table className="w-full border-separate border-spacing-4 text-center">
      <thead className="h-[55px] bg-[#F9F1E7] text-black">
        <tr>
          <th className="px-4">Product</th>
          <th className="px-4">Price</th>
          <th className="px-4">Quantity</th>
          <th className="px-4">Subtotal</th>
          <th className="px-4">
            <Trash className="mx-auto size-6" />
          </th>
        </tr>
      </thead>
      <tbody className="space-y-4">
        {cart.map((item) => (
          <tr key={item.id} className="py-5">
            <td className="flex flex-col items-center gap-5 md:flex-row">
              <Image
                className="h-[100px] w-[100px] rounded-md"
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
              />
              <h2 className="font-poppins text-base font-semibold text-[#9F9F9F]">
                {item.title}
              </h2>
            </td>
            <td className="font-poppins text-base text-[#9F9F9F]">
              {formatPrice(item.price)}
            </td>
            <td>
              <input
                title="quantity"
                type="number"
                min="1"
                max="10"
                value={item.quantity}
                onChange={(e) => handleChange(item.id, e)}
                className="h-[32px] w-[32px] rounded-md border-2 border-[#9F9F9F] text-center font-poppins text-base font-semibold text-black"
              />
            </td>
            <td className="w-[150px] font-poppins text-base text-black">
              {formatPrice(item.price * item.quantity)}
            </td>
            <td>
              <Trash2
                className="mx-auto size-6 cursor-pointer text-primary transition-colors duration-200 hover:text-red-600"
                onClick={() => removeFromCart(item.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
