"use client";
import checkoutImage from "@/assets/cartpage-image.png";
import Trophy from "@/components/Trophy";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import logoImage from "@/assets/logo.png";

import CheckoutInputs from "@/components/CheckoutInputs";
import CheckoutProducts from "@/components/CheckoutProducts";

export default function CheckoutPage() {
  return (
    <main className="overflow-hidden">
      <div className="relative w-full">
        <Image
          src={checkoutImage}
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
            Checkout
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
              href={"/checkout"}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center gap-10 px-8 py-10 md:gap-40 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex w-full flex-1 flex-col gap-5">
          <h2 className="font-poppins text-xl font-semibold text-black md:text-[36px]">
            Billing details
          </h2>
          <CheckoutInputs />
        </div>
        <div className="flex-1">
          <CheckoutProducts />
        </div>
      </div>
      <Trophy />
    </main>
  );
}
