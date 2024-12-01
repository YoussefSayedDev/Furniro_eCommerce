import cartImage from "@/assets/cartpage-image.png";
import logoImage from "@/assets/logo.png";
import CartTable from "@/components/CartTable";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  return (
    <main>
      <div className="relative w-full">
        <Image
          src={cartImage}
          className="w-full"
          alt="shop image"
          width={1440}
          height={316}
        />
        <div className="absolute bottom-0 left-0 z-20 flex w-full -translate-y-1/2 flex-col items-center gap-4 px-8 py-10">
          <Image src={logoImage} alt="logo" width={77} height={77} />
          <h1 className="font-poppins text-[48px] font-medium text-black">
            Cart
          </h1>
          <div className="flex items-center gap-2">
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
        <div className="container mx-auto px-8 py-10">
          <CartTable />
        </div>
        <div></div>
      </div>
    </main>
  );
}
