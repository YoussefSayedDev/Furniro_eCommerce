"use client";
import { ShoppingBag, Trash2, X } from "lucide-react";
import Image from "next/image";

export default function Cart() {
  return (
    <div className="fixed right-0 top-0 z-50 h-[746px] w-[417px] bg-white shadow-md">
      <div className="p-8">
        <div className="flex items-center justify-between">
          <h2 className="pb-4 font-poppins text-2xl font-semibold text-black">
            Shopping Card
          </h2>
          <ShoppingBag />
        </div>
        <hr />
        <CartItem />
      </div>
      <hr />
      <div className="p-8">
        <button>Cart</button>
        <button>Checkout</button>
        <button>Comparison</button>
      </div>
    </div>
  );
}

function CartItem() {
  return (
    <div className="my-2">
      <div className="m-5 flex items-center justify-between">
        <Image className="h-[105px] w-[108px] rounded-md" src={""} alt={""} />
        <div>
          <h3>{"c.title"}</h3>
          <div className="flex items-center gap-2">
            <span>{"c.quantity"}</span>
            <X />
            <p>{"c.price"}</p>
          </div>
        </div>
        <Trash2 />
      </div>
    </div>
  );
}
