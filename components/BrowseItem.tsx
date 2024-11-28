import Image, { StaticImageData } from "next/image";

interface BrowseItemProps {
  imageUrl: string | StaticImageData;
  title: string;
}

export default function BrowseItem({ imageUrl, title }: BrowseItemProps) {
  return (
    <div className="group">
      <div className="max-h-[480px] max-w-[381px] overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={`${title} image`}
          width={381}
          height={480}
          className="transform cursor-pointer rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h2 className="font-poppins pt-10 text-center text-xl font-semibold">
        {title}
      </h2>
    </div>
  );
}
