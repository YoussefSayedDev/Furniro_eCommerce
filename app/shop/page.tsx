import shopImage from "@/assets/shop-image.png";
import ProductItem from "@/components/ProductItem";
import Trophy from "@/components/Trophy";
import { items as itemsProduct } from "@/constants/product-items";
import { ProductItemType } from "@/types/products-items-type";
import { Columns2, Grip, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

export default function Shop() {
  return (
    <main className="overflow-hidden">
      <div className="w-full">
        <Image
          src={shopImage}
          className="w-full"
          alt="shop image"
          width={1440}
          height={316}
        />
      </div>
      <div className="relative -top-2 flex flex-col items-center bg-[#F9F1E7] p-5 md:flex-row">
        <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-8 lg:flex-row">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5">
              <span className="flex cursor-pointer items-center gap-2">
                <SlidersHorizontal className="size-4 md:size-5" />
                <h4 className="font-poppins text-base font-semibold md:text-xl">
                  Filter
                </h4>
              </span>
              <Grip className="size-4 cursor-pointer md:size-5" />
              <Columns2 className="size-4 cursor-pointer md:size-5" />
            </div>
            <span className="h-8 w-0.5 bg-gray-700"></span>
            <h3 className="font-poppins text-xs md:text-base">
              Showing 1-12 of 40 results
            </h3>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <h3 className="w-14 font-poppins text-base text-black md:text-xl">
                Show
              </h3>
              <input
                className="max-h-12 max-w-20 bg-white p-2 text-black outline-none md:p-4"
                type="number"
                placeholder="16"
              />
            </div>
            <div className="flex items-center gap-2">
              <h3 className="w-14 font-poppins text-base text-black md:text-xl">
                Sort by
              </h3>
              <input
                className="max-h-12 bg-white p-2 text-black outline-none md:p-4"
                type="text"
                placeholder="Default"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 justify-items-center gap-5 pt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {itemsProduct.map((i: ProductItemType, index) => (
            <ProductItem
              key={index}
              title={i.title}
              price={i.price}
              description={i.description}
              image={i.image}
              priceBeforeDiscount={i.priceBeforeDiscount}
              newItem={i.newItem}
            />
          ))}
        </div>
        <div className="mx-auto my-20 flex w-fit items-center gap-5">
          {[1, 2, 3].map((i) => (
            <button
              className={`rounded-md px-5 py-2 font-poppins text-xl font-light transition-colors ${i === 1 ? "bg-primary" : "bg-[#F9F1E7]"} duration-300 hover:bg-primary`}
              key={i}
            >
              {i}
            </button>
          ))}
          <button className="rounded-md bg-[#F9F1E7] px-5 py-2 font-poppins text-xl font-light transition-colors duration-300 hover:bg-primary">
            Next
          </button>
        </div>
      </div>
      <Trophy />
    </main>
  );
}
