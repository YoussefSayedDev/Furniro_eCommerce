import blogImage from "@/assets/cartpage-image.png";
import logoImage from "@/assets/logo.png";
import CardBlog from "@/components/CardBlog";
import Trophy from "@/components/Trophy";
import { blogItems } from "@/constants/blog_card-items";
import { recentPostItems } from "@/constants/recent-post-items";
import { ChevronRight, Search } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="overflow-hidden">
      <div className="relative w-full">
        <Image
          src={blogImage}
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
          <h1 className="my-1 font-poppins text-xl font-medium text-black md:text-[48px]">
            Blog
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
              href={"/blog"}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col items-start justify-between gap-20 lg:flex-row">
          <div className="flex-2 flex flex-col gap-10 md:gap-5">
            {blogItems.map((i, index) => (
              <CardBlog
                key={index}
                image={i.image}
                title={i.title}
                description={i.description}
                date={i.date}
                tag={i.tag}
                auother={i.auother}
              />
            ))}
          </div>
          <div className="flex-1">
            <div className="relative w-fit md:w-full">
              <input
                className="w-full rounded-md border border-black px-4 py-2 outline-none"
                type="text"
                title="Search"
                placeholder="Search"
              />
              <Search className="absolute right-2 top-1/2 size-5 -translate-y-1/2 cursor-pointer" />
            </div>
            <div className="flex flex-col gap-10 md:flex-row lg:flex-col">
              <div className="flex-1">
                <h3 className="my-8 font-poppins text-2xl font-medium text-black md:text-xl">
                  Categories
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-poppins text-base font-semibold text-[#9F9F9F]">
                      Crafts
                    </h4>
                    <span className="font-poppins text-base font-semibold text-[#9F9F9F]">
                      9
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-poppins text-base font-semibold text-[#9F9F9F]">
                      Design
                    </h4>
                    <span className="font-poppins text-base font-semibold text-[#9F9F9F]">
                      8
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-poppins text-base font-semibold text-[#9F9F9F]">
                      Handmade
                    </h4>
                    <span className="font-poppins text-base font-semibold text-[#9F9F9F]">
                      7
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-poppins text-base font-semibold text-[#9F9F9F]">
                      Interior
                    </h4>
                    <span className="font-poppins text-base font-semibold text-[#9F9F9F]">
                      1
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-poppins text-base font-semibold text-[#9F9F9F]">
                      Wood
                    </h4>
                    <span className="font-poppins text-base font-semibold text-[#9F9F9F]">
                      6
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="my-8 font-poppins text-2xl font-medium text-black md:text-xl">
                  Recent Posts
                </h3>
                <div className="flex flex-col gap-5">
                  {recentPostItems.map((i, index) => (
                    <RecentPost
                      key={index}
                      image={i.image}
                      title={i.title}
                      date={i.date}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Trophy />
    </main>
  );
}

function RecentPost({
  image,
  title,
  date,
}: {
  image: string | StaticImageData;
  title: string;
  date: string;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <Image src={image} alt="blog image" width={80} height={80} />
        <div className="flex flex-col gap-2">
          <h3 className="font-poppins text-base font-semibold text-[#9F9F9F]">
            {title}
          </h3>
          <p className="font-poppins text-xs text-[#9F9F9F]">{date}</p>
        </div>
      </div>
      <span className="font-poppins text-base font-semibold text-[#9F9F9F]"></span>
    </div>
  );
}
