"use client";
import { icons } from "@/constants/header-icons";
import { useCart } from "@/hooks/use-cart";

export default function Search() {
  const { open, setOpen } = useCart();
  return (
    <ul className="flex items-center justify-between gap-3 md:gap-12">
      {icons.map((i, index) => (
        <li
          className="cursor-pointer transition-colors duration-300 hover:text-primary"
          key={index}
        >
          {i.title !== "Cart" ? (
            <i.icon className="size-4 md:size-6" />
          ) : (
            <i.icon
              className="size-4 md:size-6"
              onClick={() => setOpen(!open)}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
