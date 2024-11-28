"use client";
import { formatPrice } from "@/utils/helper";
import { ArrowRightLeft, Heart, Share } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { memo } from "react";

interface ProductItemProps {
  id: string | number;
  image: string | StaticImageData;
  title: string;
  description: string;
  price: number;
  priceBeforeDiscount: number;
  newItem?: boolean;
}

function ProductItem({
  id,
  image,
  title,
  description,
  price,
  priceBeforeDiscount,
  newItem = false,
}: ProductItemProps) {
  // Calculate discount percentage
  const theDiscount =
    priceBeforeDiscount > price
      ? Math.floor(((priceBeforeDiscount - price) / priceBeforeDiscount) * 100)
      : 0;

  console.log("ProductItem rendering!");

  console.log("id:=> ", id);
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-md">
      {/* Image Section */}
      <div className="relative">
        <Image src={image} alt={title} width={285} height={301} />
        {(newItem || priceBeforeDiscount > price) && (
          <div className="absolute right-5 top-5 z-10 flex gap-2 font-poppins text-xs font-semibold text-white">
            {newItem && (
              <span className="flex size-10 items-center justify-center rounded-full bg-[#2EC1AC] shadow-md">
                New
              </span>
            )}
            {priceBeforeDiscount > price && (
              <span className="flex size-10 items-center justify-center rounded-full bg-[#E97171] shadow-md">
                -{theDiscount}%
              </span>
            )}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-1 bg-bgSecondary p-4">
        <h1 className="font-poppins text-2xl font-semibold">{title}</h1>
        <p className="font-poppins text-base font-medium text-[#898989]">
          {description}
        </p>
        <div className="flex justify-between gap-2">
          <h2 className="font-poppins text-xl font-semibold">
            {formatPrice(price, "en-US", "USD")}
          </h2>
          {priceBeforeDiscount > price && (
            <span className="text-gray-500 line-through">
              {formatPrice(priceBeforeDiscount, "en-US", "USD")}
            </span>
          )}
        </div>
      </div>

      {/* Hover Actions */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex h-0 flex-col items-center justify-center bg-[#3a3a3ab6] transition-all duration-500 group-hover:h-full">
        <button className="hidden h-[48px] w-[200px] bg-white font-poppins text-base font-semibold text-primary transition-colors duration-300 hover:bg-gray-50 group-hover:block">
          Add to cart
        </button>

        <div className="flex items-center justify-center gap-2 pt-5 text-white">
          <span className="flex items-center gap-1 transition-colors duration-300 hover:text-primary">
            <Share className="size-4" />
            Share
          </span>
          <span className="flex items-center gap-1 transition-colors duration-300 hover:text-primary">
            <ArrowRightLeft className="size-4" />
            Compare
          </span>
          <span className="flex items-center gap-1 transition-colors duration-300 hover:text-primary">
            <Heart className="size-4" />
            Like
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(ProductItem);
