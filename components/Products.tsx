"use client";
import { useCart } from "@/hooks/use-cart";
import { ProductItemType } from "@/types/products-items-type";
import ProductItem from "./ProductItem";

export default function Products({
  itemsProduct,
  limit = itemsProduct.length,
}: {
  itemsProduct: ProductItemType[];
  limit?: number;
}) {
  const { addToCart } = useCart();

  return (
    <>
      {itemsProduct.map(
        (i: ProductItemType, index) =>
          index < limit && (
            <ProductItem
              key={index}
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
    </>
  );
}
