"use client";

import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/utils/helper";

export default function CartTotal() {
  const { total } = useCart();

  return (
    <div className="mx-auto flex max-h-[390px] max-w-[390px] flex-col items-center gap-5 bg-[#F9F1E7] px-16 pb-16 pt-5">
      <h1 className="text-nowrap font-poppins text-[32px] font-semibold text-black">
        Cart Total
      </h1>
      <div className="flex min-w-[220px] flex-col items-stretch gap-5">
        <div className="flex items-center justify-between gap-5">
          <h3 className="font-poppins text-base font-medium text-black">
            Subtotal
          </h3>
          <span className="font-poppins text-base text-[#9F9F9F]">
            {formatPrice(total)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-5">
          <h3 className="font-poppins text-base font-medium text-black">
            Total
          </h3>
          <span className="font-poppins text-xl font-medium text-[#B88E2F]">
            {formatPrice(total)}
          </span>
        </div>
      </div>
      <button className="rounded-xl border-2 border-black px-4 py-2 font-bold text-black transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-white">
        Check Out
      </button>
    </div>
  );
}
