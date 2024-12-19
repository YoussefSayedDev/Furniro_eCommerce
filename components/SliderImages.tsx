"use client";
import galleryImage1 from "@/assets/gallery-1.png";
import galleryImage2 from "@/assets/gallery-2.png";
import galleryImage4 from "@/assets/gallery-image-11.jpg";
import galleryImage5 from "@/assets/gallery-image-13.jpg";
import galleryImage6 from "@/assets/gellary-image-5.png";
import galleryImage3 from "@/assets/gellary-image-7.png";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const IMAGES = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
];

export default function SliderImages() {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex(imageIndex + 1);
  };

  const showPrevImage = () => {
    setImageIndex(imageIndex - 1);
  };
  return (
    <div className="absolute -right-0 top-0 flex items-start justify-center gap-10">
      <div className="relative max-h-[582px] max-w-[404px]">
        <Image
          className="max-h-[582px] max-w-[404px]"
          src={IMAGES[imageIndex]}
          alt="image slide"
          width={404}
          height={582}
        />
        <div className="absolute bottom-6 left-6 h-[130px] w-[217px] bg-white/60 pl-8 pt-8">
          <div className="flex items-center gap-1 font-poppins text-base font-medium">
            <span>01</span>
            <span className="relative -top-1.5 font-serif">__</span>
            <p>Bed Room</p>
          </div>
          <div>
            <h2 className="font-poppins text-[28px] font-semibold">
              Inner Peace
            </h2>
            <span className="absolute -right-12 bottom-0 flex size-12 cursor-pointer items-center justify-center bg-primary transition-colors duration-300 hover:bg-btnHover">
              <ArrowRight className="size-5 text-white" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-10 transition-all duration-300">
        <div className="relative">
          <Image
            className="max-h-[486px] max-w-[372px] select-none"
            src={IMAGES[imageIndex + 1]}
            alt="image slide"
            width={372}
            height={486}
          />
          {imageIndex > 0 && (
            <span
              onClick={showPrevImage}
              className="absolute left-[-40px] top-1/2 flex size-11 -translate-y-1/2 translate-x-1/2 cursor-pointer select-none items-center justify-center rounded-full bg-white shadow-md shadow-black/10"
            >
              <ChevronLeft className="size-6 text-primary" />
            </span>
          )}
          {imageIndex < 3 && (
            <span
              onClick={showNextImage}
              className="absolute right-0 top-1/2 flex size-11 -translate-y-1/2 translate-x-1/2 cursor-pointer select-none items-center justify-center rounded-full bg-white shadow-md shadow-black/10"
            >
              <ChevronRight className="size-6 text-primary" />
            </span>
          )}
          <div className="absolute -bottom-12 left-2 z-20 flex w-full -translate-y-1/2 items-center gap-4">
            {IMAGES.map(
              (_, index: number) =>
                index < IMAGES.length - 2 && (
                  <span
                    key={index}
                    className={`${imageIndex === index ? "active-slide" : ""} relative size-[11px] cursor-pointer rounded-full bg-[#D8D8D8]`}
                    onClick={() => setImageIndex(index)}
                  ></span>
                ),
            )}
          </div>
        </div>
        <div className="w-[100px] overflow-hidden">
          <Image
            className="max-h-[486px] max-w-[372px] object-cover"
            src={IMAGES[imageIndex + 2]}
            alt="image slide"
            width={372}
            height={486}
          />
        </div>
      </div>
    </div>
  );
}
