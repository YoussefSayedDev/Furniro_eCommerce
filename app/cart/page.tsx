import cartImage from "@/assets/cartpage-image.png";
import logoImage from "@/assets/logo.png";
import CartTable from "@/components/Cart/CartTable";
import CartTotal from "@/components/Cart/CartTotal";
import Trophy from "@/components/Trophy";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  return (
    <main className="overflow-hidden">
      <div className="relative w-full">
        <Image
          src={cartImage}
          className="w-full"
          alt="shop image"
          width={1440}
          height={316}
        />

        {/* Centering the absolute div */}
        <div className="absolute left-1/2 top-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 px-8 py-10 md:gap-4">
          <Image
            className="w-8 md:w-20"
            src={logoImage}
            alt="logo"
            width={77}
            height={77}
          />
          <h1 className="font-poppins text-xl font-medium text-black md:text-[48px]">
            Cart
          </h1>
          <div className="hidden items-center gap-2 md:flex">
            <Link
              className="font-poppins text-base font-semibold text-black transition-colors duration-200 hover:text-[#9F9F9F]"
              href={"/"}
            >
              Home
            </Link>
            <ChevronRight />
            <Link
              className="font-poppins text-base font-semibold text-[#9F9F9F]"
              href={"/cart"}
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto flex flex-col items-start gap-5 px-8 py-10 lg:flex-row lg:justify-between">
          <div className="w-[390px] overflow-x-auto lg:w-full">
            <CartTable />
          </div>
          <CartTotal />
        </div>
      </div>
      <Trophy />
    </main>
  );
}
