"use client";
import { useCart } from "@/hooks/use-cart";
import { Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const { open, setOpen, total } = useCart();
  return (
    open && (
      <div className="fixed right-0 top-0 z-50 max-h-[746px] w-[300px] bg-white shadow-md md:w-[460px]">
        <div className="p-8 pb-0">
          <div className="flex items-center justify-between pb-4">
            <h2 className="font-poppins text-lg font-semibold text-black md:text-2xl">
              Shopping Card
            </h2>
            <X
              className="size-7 cursor-pointer font-bold transition-colors duration-200 hover:text-red-600"
              onClick={() => setOpen(false)}
            />
          </div>
          <hr />
          <div className="max-h-[500px] overflow-auto">
            <CartItem />
          </div>
          <div className="m-5 flex items-center justify-between gap-3">
            <h2 className="font-poppins text-base text-black">Subtotal</h2>
            <span className="font-poppins text-base font-semibold text-primary">
              {total}
            </span>
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap items-center justify-center gap-2 p-8 md:flex-nowrap md:justify-between">
          <Link
            href={"/cart"}
            className="rounded-3xl border border-black px-5 py-2 text-base text-black transition-colors duration-200 hover:border-primary hover:bg-secondary hover:text-primary md:text-xl"
          >
            Cart
          </Link>
          <Link
            href={"/checkout"}
            className="rounded-3xl border border-black px-5 py-2 text-base text-black transition-colors duration-200 hover:border-primary hover:bg-secondary hover:text-primary md:text-xl"
          >
            Checkout
          </Link>
          <Link
            href={"/comparison"}
            className="rounded-3xl border border-black px-5 py-2 text-base text-black transition-colors duration-200 hover:border-primary hover:bg-secondary hover:text-primary md:text-xl"
          >
            Comparison
          </Link>
        </div>
      </div>
    )
  );
}

function CartItem() {
  const { cart, removeFromCart } = useCart();
  return (
    <div className="my-5">
      {cart.length === 0 ? (
        <h3 className="text-center font-poppins text-base font-medium text-[#9F9F9F] md:text-xl">
          Your cart is empty
        </h3>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="m-5 flex items-center justify-between">
            <Image
              className="h-[105px] w-[108px] rounded-md"
              src={item.image}
              alt={item.title}
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-poppins text-base">{item.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs">{item.quantity}</span>
                <X className="size-4 text-[#9F9F9F]" />
                <p className="font-poppins text-sm font-medium text-primary">
                  {item.price}
                </p>
              </div>
            </div>
            <Trash2
              className="size-5 cursor-pointer transition-colors duration-200 hover:text-red-600"
              onClick={() => removeFromCart(item.id)}
            />
          </div>
        ))
      )}
    </div>
  );
}
