import galleryImage1 from "@/assets/gallery-1.png";
import galleryImage2 from "@/assets/gallery-2.png";
import galleryImage3 from "@/assets/gallery-3.png";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="absolute -right-0 top-0 flex items-start justify-center gap-6">
      <div className="relative max-h-[582px] max-w-[404px]">
        <Image src={galleryImage1} alt="image slide" width={404} height={582} />
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
            <span className="hover:bg-btnHover absolute -right-12 bottom-0 flex size-12 cursor-pointer items-center justify-center bg-primary transition-colors duration-300">
              <ArrowRight className="size-5 text-white" />
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={galleryImage2} alt="image slide" width={372} height={486} />
        <span className="absolute right-0 top-1/2 flex size-11 -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md shadow-black/10">
          <ChevronRight className="size-6 text-primary" />
        </span>
        <div className="absolute -bottom-12 left-2 z-20 flex w-full -translate-y-1/2 items-center gap-4">
          <span className="active-slide relative size-[11px] cursor-pointer rounded-full bg-[#D8D8D8]"></span>
          <span className="relative size-[11px] cursor-pointer rounded-full bg-[#D8D8D8]"></span>
          <span className="relative size-[11px] cursor-pointer rounded-full bg-[#D8D8D8]"></span>
          <span className="relative size-[11px] cursor-pointer rounded-full bg-[#D8D8D8]"></span>
        </div>
      </div>
      <div>
        <Image src={galleryImage3} alt="image slide" />
      </div>
    </div>
  );
}
