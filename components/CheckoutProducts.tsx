"use client";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/utils/helper";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import AccordionCheckout from "./AccordionCheckout";

const CheckoutProducts = () => {
  const { cart, total } = useCart();
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-4">
          <h3 className="font-poppins text-lg font-medium text-black md:text-2xl">
            Products
          </h3>
          <h3 className="font-poppins text-lg font-medium text-black md:text-2xl">
            Subtotal
          </h3>
        </div>
        <div>
          {cart.map((product) => (
            <div key={product.id} className="flex justify-between gap-4">
              <h3 className="font-poppins text-base text-primary">
                {product.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs">{product.quantity}</span>
                <X className="size-4 text-[#9F9F9F]" />
                <p className="font-poppins text-sm font-medium text-primary">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between gap-4">
          <h3 className="font-poppins text-lg text-black">Total</h3>
          <h3 className="font-poppins text-lg font-bold text-primary md:text-2xl">
            {formatPrice(total)}
          </h3>
        </div>
      </div>
      <hr className="my-5 h-[1px] bg-[#9F9F9F]" />
      <div>
        <AccordionCheckout />
        <div className="my-5 flex flex-col gap-4">
          <p className="text-balance text-center font-poppins text-base text-[#9F9F9F] md:text-start">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="cursor-pointer font-bold text-black hover:underline">
              privacy policy.
            </span>
          </p>
          <Link href="#" className="mt-5 flex items-center justify-center">
            <button
              type="button"
              className="rounded-lg border border-black px-10 py-3 font-poppins text-xl text-black transition-colors duration-200 hover:border-primary hover:bg-secondary hover:text-primary md:px-16"
            >
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProducts;
