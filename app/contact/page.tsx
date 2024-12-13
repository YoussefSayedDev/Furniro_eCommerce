import contactImage from "@/assets/cartpage-image.png";
import logoImage from "@/assets/logo.png";
import Trophy from "@/components/Trophy";
import {
  ChevronRight,
  ClockIcon,
  MapPinCheckInside,
  Phone,
  Search,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="overflow-hidden">
      <div className="relative w-full">
        <Image
          src={contactImage}
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
            Contact
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
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-poppins text-2xl font-semibold text-black md:text-[36px]">
            Get In Touch With Us
          </h1>
          <p className="text-text-xs md:text-text-sm mx-auto max-w-[644px] font-poppins text-base text-[#9F9F9F]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-10 md:flex-row md:gap-5">
          <div className="flex w-full flex-col gap-10 md:w-1/2">
            <div>
              <div className="flex items-center gap-2">
                <MapPinCheckInside className="relative -top-[7px] size-10 text-black" />
                <h2 className="font-poppins text-lg font-semibold text-black md:text-2xl">
                  Address
                </h2>
              </div>
              <p className="mt-2 pl-10 font-poppins text-base text-[#9f9f9f]">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Phone className="relative -top-[7px] size-10 text-black" />
                <h2 className="font-poppins text-lg font-semibold text-black md:text-2xl">
                  Phone
                </h2>
              </div>
              <p className="mt-2 pl-10 font-poppins text-base text-[#9f9f9f]">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <ClockIcon className="relative -top-[7px] size-10 text-black" />
                <h2 className="font-poppins text-lg font-semibold text-black md:text-2xl">
                  Working Time
                </h2>
              </div>
              <p className="mt-2 pl-10 font-poppins text-base text-[#9f9f9f]">
                Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-5 md:w-1/2">
            <div>
              <label
                className="mb-2 block font-poppins text-base font-medium"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="block w-full rounded-md border border-[#9f9f9f] p-5 outline-none"
                id="name"
                type="text"
                placeholder="Abc"
              />
            </div>

            <div>
              <label
                className="mb-2 block font-poppins text-base font-medium"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="block w-full rounded-md border border-[#9f9f9f] p-5 outline-none"
                id="email"
                type="email"
                placeholder="Abc@gmail.com"
              />
            </div>

            <div>
              <label
                className="mb-2 block font-poppins text-base font-medium"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="block w-full rounded-md border border-[#9f9f9f] p-5 outline-none"
                id="subject"
                type="text"
                placeholder="This is an optional field"
              />
            </div>

            <div>
              <label
                className="mb-2 block font-poppins text-base font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="block min-h-[100px] w-full resize-none rounded-md border border-[#9f9f9f] p-5 outline-none"
                id="message"
                placeholder="Hi! I’d like to ask about..."
              ></textarea>
            </div>

            <button className="mt-5 w-full rounded-md bg-primary px-5 py-3 font-poppins text-base font-semibold text-white transition-colors duration-200 hover:bg-[#bd9946]">
              Submit
            </button>
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
