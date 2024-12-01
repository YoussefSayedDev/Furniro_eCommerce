"use client";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";

export default function CartTable() {
  const { cart } = useCart();

  return (
    <table className="w-full">
      <thead className="h-[55px] bg-[#F9F1E7] text-black">
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody className="">
        {cart.map((item) => (
          <tr key={item.id} className="">
            <td className="flex items-center gap-2">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
              />
              <h2 className="font-poppins text-base font-semibold">
                {item.title}
              </h2>
            </td>
            <td>{item.price}</td>
            <td>
              <input
                title="quantity"
                type="number"
                min="1"
                max="10"
                value={item.quantity}
              />
            </td>
            <td>{item.price * item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
