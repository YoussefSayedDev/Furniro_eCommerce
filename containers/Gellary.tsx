import image2 from "@/assets/gallery-image-10.jpg";
import image5 from "@/assets/gallery-image-11.jpg";
import image9 from "@/assets/gallery-image-12.jpg";
import image8 from "@/assets/gallery-image-13.jpg";
import image6 from "@/assets/gallery-image-14.jpg";
import image1 from "@/assets/gellary-image-1.png";
import image3 from "@/assets/gellary-image-3.png";
import image4 from "@/assets/gellary-image-4.png";
// import image6 from "@/assets/gellary-image-6.png";
import image7 from "@/assets/gellary-image-7.png";
// import image8 from "@/assets/gellary-image-8.png";
import Image from "next/image";

export default function Gellary() {
  return (
    <section className="pb-[50px] pt-[70px]">
      <div className="pb-5 text-center font-poppins">
        <p className="mb-2 text-base font-semibold md:text-xl md:font-medium">
          Share your setup with
        </p>
        <h1 className="text-2xl font-bold md:text-[40px]">#FuniroFurniture</h1>
      </div>
      <div className="flex flex-col items-center gap-5 md:flex-row">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div>
              <Image src={image1} alt="image" />
            </div>
            <div>
              <Image src={image2} width={675} height={450} alt="image" />
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <Image src={image3} width={281} height={281} alt="image" />
            </div>
            <div>
              <Image src={image4} width={500} height={381} alt="image" />
            </div>
          </div>
        </div>
        <div>
          <Image src={image5} width={550} height={600} alt="image" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-5">
            <div>
              <Image src={image6} width={600} height={300} alt="image" />
            </div>
            <div>
              <Image src={image7} alt="image" />
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <Image src={image8} width={350} height={500} alt="image" />
            </div>
            <div>
              <Image src={image9} width={550} height={400} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
