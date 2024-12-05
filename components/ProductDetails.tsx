"use client";
import { useCart } from "@/hooks/use-cart";
import { ProductItemType } from "@/types/products-items-type";
import { formatPrice } from "@/utils/helper";
import {
  EllipsisVertical,
  Facebook,
  Linkedin,
  Minus,
  Plus,
  Star,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetails({
  product,
}: {
  product: ProductItemType;
}) {
  const [image, setImage] = useState(product.image);

  const { addToCart } = useCart();
  return (
    <>
      <div className="flex gap-5">
        <div className="">
          {product.thumbnail.map((thumb, i) => (
            <Image
              key={i}
              className="cursor-pointer rounded-md"
              src={thumb}
              alt="thumb image"
              onClick={() => setImage(thumb)}
            />
          ))}
        </div>
        <div>
          <Image
            className="rounded-md"
            src={image}
            width={423}
            height={500}
            alt="image"
          />
        </div>
      </div>
      <div>
        <h1 className="font-poppins text-2xl text-black md:text-[42px]">
          {product.title}
        </h1>
        <h2 className="my-1 font-poppins text-2xl font-medium text-[#9F9F9F]">
          {formatPrice(product.price)}
        </h2>
        <span className="my-2 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="size-5 text-orange-300" />
            <Star className="size-5 text-orange-300" />
            <Star className="size-5 text-orange-300" />
            <Star className="size-5 text-orange-300" />
          </div>
          <span className="h-6 w-0.5 bg-[#9F9F9F]"></span>
          <span className="font-poppins text-xs text-[#9F9F9F]">
            5 Customer Review
          </span>
        </span>
        <p className="my-5 max-w-[424px] font-poppins text-base text-black">
          {product.subdescription || product.description}
        </p>
        <div className="my-10">
          <span className="font-poppins text-base text-[#9F9F9F]">Size</span>
          <div className="mb-4 mt-2 flex items-center gap-2">
            <button className="rounded-lg bg-primary px-4 py-1 font-poppins text-base font-semibold text-white">
              L
            </button>
            <button className="rounded-lg bg-secondary px-4 py-1 font-poppins text-base font-semibold hover:bg-primary hover:text-white">
              XL
            </button>
            <button className="rounded-lg bg-secondary px-4 py-1 font-poppins text-base font-semibold hover:bg-primary hover:text-white">
              Xs
            </button>
          </div>
          <span className="font-poppins text-base text-[#9F9F9F]">Color</span>
          <div className="mb-4 mt-2 flex items-center gap-2">
            <span className="size-5 cursor-pointer rounded-full bg-[#816DFA]"></span>
            <span className="size-5 cursor-pointer rounded-full bg-[#000]"></span>
            <span className="size-5 cursor-pointer rounded-full bg-[#B88E2F]"></span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="flex min-w-[160px] items-center justify-between gap-5 rounded-md border border-[#9F9F9F] px-6 py-4">
            <Minus className="size-5 cursor-pointer" />
            <span>1</span>
            <Plus className="size-5 cursor-pointer" />
          </div>
          <button
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="font-semibol flex min-w-[160px] items-center gap-2 rounded-md border border-black px-6 py-4 font-poppins text-base transition-colors duration-200 hover:border-transparent hover:bg-primary hover:text-white"
          >
            Add To Cart
          </button>
          <button className="flex min-w-[160px] items-center gap-2 rounded-md border border-black px-6 py-4 font-poppins text-base transition-colors duration-200 hover:border-transparent hover:bg-primary hover:text-white">
            {" "}
            <Plus className="size-5" /> <span>Compare</span>
          </button>
        </div>
        <hr className="my-10" />
        <div>
          <div className="flex items-center gap-4">
            <span className="block w-20">SKU</span>
            <EllipsisVertical className="size-5 text-[#9f9f9f]" />
            <span>SS001</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="block w-20">Category</span>
            <EllipsisVertical className="size-5 text-[#9f9f9f]" />
            <span>Sofas</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="block w-20">Tags</span>
            <EllipsisVertical className="size-5 text-[#9f9f9f]" />
            <span>Sofa, Chair, Home, Shop</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="block w-20">Share</span>
            <EllipsisVertical className="size-5 text-[#9f9f9f]" />
            <div className="flex items-center gap-4">
              <Facebook className="size-5" /> <Linkedin className="size-5" />{" "}
              <TwitterIcon className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
