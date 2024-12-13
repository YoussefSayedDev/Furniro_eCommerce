"use client";
import { links } from "@/constants/links-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  return (
    <nav className={`flex ${className}`}>
      {links.map((i) => (
        <Link
          href={i.url}
          key={i.title}
          className={`font-poppins text-base font-medium transition-colors duration-300 hover:text-primary ${pathname === i.url && "text-primary"}`}
        >
          {i.title}
        </Link>
      ))}
    </nav>
  );
}
