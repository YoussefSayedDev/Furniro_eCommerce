import { Calendar, Tag, User } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface CardBlogProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  date: string;
  tag: string;
  auother: string;
}

export default function CardBlog({
  image,
  title,
  description,
  date,
  tag,
  auother,
}: CardBlogProps) {
  return (
    <div className="flex max-w-[817px] flex-col items-start gap-5 rounded-md">
      <div>
        <Image src={image} alt="blog image" width={817} height={500} />
        <div className="mt-2 flex items-center justify-between gap-4 text-[#9F9F9F] md:justify-center md:gap-10">
          <span className="flex items-center gap-2">
            <User className="size-5" />
            <p className="font-poppins text-xs md:text-base">{auother}</p>
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="size-5" />
            <p className="font-poppins text-xs md:text-base">{date}</p>
          </span>
          <span className="flex items-center gap-2">
            <Tag className="size-5" />
            <p className="font-poppins text-xs md:text-base">{tag}</p>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="my-2 font-poppins text-base font-medium md:text-3xl">
          {title}
        </h3>
        <p className="text-justify font-poppins text-xs text-[#9F9F9F] md:text-sm">
          {description}
        </p>
        <span className="readmore relative mt-8 w-fit cursor-pointer font-poppins text-xs text-black transition-colors duration-200 hover:text-primary md:text-base">
          Read More
        </span>
      </div>
    </div>
  );
}
