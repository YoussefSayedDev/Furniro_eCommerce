"use client";
import { links } from "@/constants/links-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMobile() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full bg-white lg:hidden">
      <div className="container mx-auto flex h-14 items-center justify-between gap-5 px-8 md:px-20">
        {links.map((i) => (
          <Link href={i.url} key={i.title}>
            <div
              className={`flex cursor-pointer items-center gap-2 font-poppins text-xs font-medium transition-colors duration-300 ${pathname === i.url && "text-primary"} hover:text-primary md:text-base`}
            >
              <i.icon className="size-3 md:size-5" />
              {i.title}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
