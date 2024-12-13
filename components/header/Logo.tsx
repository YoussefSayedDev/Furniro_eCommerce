import logoImage from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-[5px]">
      <Image
        src={logoImage}
        alt="Logo"
        className="md:h[32px] h-[25px] w-[40px] md:w-[50px]"
        width={50}
        height={32}
      />
      <h1 className="text-2xl font-bold md:text-[34px]">Furniro</h1>
    </Link>
  );
}
