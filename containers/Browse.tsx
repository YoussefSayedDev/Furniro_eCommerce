import BrowseImage1 from "@/assets/browse-item-1.png";
import BrowseImage2 from "@/assets/browse-item-2.png";
import BrowseImage3 from "@/assets/browse-item-3.png";
import BrowseItem from "@/components/BrowseItem";

export default function Browse() {
  return (
    <section className="container mx-auto px-8 py-16">
      <div className="text-center">
        <h1 className="font-poppins text-2xl font-bold md:text-[32px]">
          Browse The Range
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5 pt-16 md:grid-cols-2 lg:grid-cols-3">
        <BrowseItem imageUrl={BrowseImage1} title="Dining" />
        <BrowseItem imageUrl={BrowseImage2} title="Living" />
        <BrowseItem imageUrl={BrowseImage3} title="Bedroom" />
      </div>
    </section>
  );
}
