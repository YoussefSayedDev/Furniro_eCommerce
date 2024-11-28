import Banner from "@/components/banner/Banner";
import Browse from "@/containers/Browse";
import Gellary from "@/containers/Gellary";
import Products from "@/containers/Products";
import Slide from "@/containers/Slide";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <Browse />
      <Products />
      <Slide />
      <Gellary />
    </main>
  );
}
