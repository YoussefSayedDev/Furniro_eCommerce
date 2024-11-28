import { icons } from "@/constants/header-icons";

export default function Search() {
  return (
    <ul className="flex items-center justify-between gap-3 md:gap-12">
      {icons.map((i, index) => (
        <li
          className="cursor-pointer transition-colors duration-300 hover:text-primary"
          key={index}
        >
          <i.icon className="size-4 md:size-6" />
        </li>
      ))}
    </ul>
  );
}
