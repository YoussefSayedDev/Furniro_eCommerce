import SliderImages from "@/components/SliderImages";

export default function Slide() {
  return (
    <section className="relative bg-bgSecondary px-8 py-16">
      <div className="container mx-auto flex flex-col items-center justify-start gap-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center justify-center lg:items-start">
          <h1 className="font-poppins text-[40px] font-bold">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="font-poppins text-base font-medium text-[#616161]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="mb-5 mt-[25px] flex h-[48px] w-[176px] items-center justify-center bg-primary font-poppins text-base font-semibold text-white transition-colors duration-300 hover:bg-btnHover">
            Explore More
          </button>
        </div>
        <div className="relative hidden h-[582px] w-[1196px] overflow-hidden md:block">
          <SliderImages />
        </div>
      </div>
    </section>
  );
}
