import { StaticImageData } from "next/image";

export interface CartItemType {
  id: number | string;
  image: string | StaticImageData;
  title: string;
  quantity: number;
  price: number;
}
