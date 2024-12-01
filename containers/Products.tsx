"use client";
import ProductItem from "@/components/ProductItem";
import { items as itemsProduct } from "@/constants/product-items";
import { useCart } from "@/hooks/use-cart";
import { ProductItemType } from "@/types/products-items-type";

export default function Products() {
  const { addToCart } = useCart();
  return (
    <section className="container mx-auto px-8 py-16">
      <div className="text-center">
        <h1 className="font-poppins text-[32px] font-bold">Our Products</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5 pt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {itemsProduct.map(
          (i: ProductItemType, index) =>
            index < 8 && (
              <ProductItem
                key={i.id}
                id={i.id}
                title={i.title}
                price={i.price}
                description={i.description}
                image={i.image}
                priceBeforeDiscount={i.priceBeforeDiscount}
                newItem={i.newItem}
                addToCart={addToCart}
              />
            ),
        )}
      </div>
      <div className="flex justify-center pt-10">
        <button className="h-[48px] w-[245px] cursor-pointer border border-primary text-center font-poppins text-base font-semibold leading-relaxed text-primary transition-colors duration-300 hover:bg-primary hover:text-white">
          Show More
        </button>
      </div>
    </section>
  );
}
