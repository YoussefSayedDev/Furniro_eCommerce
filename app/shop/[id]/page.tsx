import ProductDetails from "@/components/ProductDetails";
import ProductItem from "@/components/ProductItem";
import { items } from "@/constants/product-items";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function SingleProduct({
  params,
}: {
  params: Promise<{ id: number | string }>;
}) {
  const id = (await params).id;
  const product = items.find((item) => item.id == id);

  if (!product)
    return (
      <main className="flex h-[400px] w-full items-center gap-4 bg-[#F9F1E7]">
        <div className="flex w-full items-center justify-center">
          <h1 className="text-3xl">Product not found</h1>
        </div>
      </main>
    );
  return (
    <main className="overflow-hidden">
      <div className="bg-[#F9F1E7]">
        <div className="container mx-auto flex h-[100px] w-full items-center gap-4 px-8">
          <Link
            href="/"
            className="font-poppins text-base text-[#9F9F9F] transition-colors duration-300 hover:text-black"
          >
            Home
          </Link>
          <ChevronRight />
          <Link
            href="/shop"
            className="font-poppins text-base text-[#9F9F9F] transition-colors duration-300 hover:text-black"
          >
            Shop
          </Link>
          <ChevronRight />
          <span className="h-8 w-0.5 bg-gray-700"></span>
          <h2 className="font-poppins text-base font-bold text-black">
            {product?.title}
          </h2>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 justify-items-center gap-5 px-8 py-10 lg:grid-cols-2">
        <ProductDetails product={product} />
      </div>
      <hr />
      <div className="container mx-auto my-[50px]">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-center gap-5">
            <h2 className="font-poppins text-2xl font-medium text-black">
              {product.description}
            </h2>
            <h2 className="font-poppins text-2xl font-medium text-[#9F9F9F]">
              Additonal Information
            </h2>
            <h2 className="font-poppins text-2xl font-medium text-[#9F9F9F]">
              Reviews [5]
            </h2>
          </div>
          <div className="mx-auto my-10 flex w-3/4 flex-col gap-5">
            <p className="text-justify text-base text-[#9F9F9F]">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-justify text-base text-[#9F9F9F]">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Image
            className="max-h-[350px] max-w-[600px] flex-1"
            src={product.image}
            alt="image"
          />
          <Image
            className="max-h-[350px] max-w-[600px] flex-1"
            src={product.image}
            alt="image"
          />
        </div>
      </div>
      <hr />
      <div className="my-[50px]">
        <h1 className="text-center font-poppins text-3xl font-bold">
          Related Products
        </h1>
        <div className="container mx-auto grid grid-cols-1 justify-items-center gap-5 px-8 py-10 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => {
            const {
              description,
              image,
              price,
              title,
              newItem,
              priceBeforeDiscount,
            } = item;
            if (index < 4)
              return (
                <ProductItem
                  id={item.id}
                  key={item.id}
                  description={description}
                  image={image}
                  price={price}
                  title={title}
                  priceBeforeDiscount={priceBeforeDiscount}
                  newItem={newItem}
                />
              );
          })}
        </div>
        <div className="flex justify-center pt-10">
          <button className="h-[48px] w-[245px] cursor-pointer border border-primary text-center font-poppins text-base font-semibold leading-relaxed text-primary transition-colors duration-300 hover:bg-primary hover:text-white">
            Show More
          </button>
        </div>
      </div>
    </main>
  );
}
