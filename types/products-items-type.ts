import { StaticImageData } from "next/image";

export interface ProductItemType {
  id: number | string;
  image: string | StaticImageData;
  title: string;
  description: string;
  subdescription?: string;
  price: number;
  priceBeforeDiscount: number;
  newItem: boolean;
  thumbnail: string[] | StaticImageData[];
}
