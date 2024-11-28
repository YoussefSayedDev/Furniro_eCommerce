import { BadgeCheck, Gift, Headset, Trophy as TrophyIcon } from "lucide-react";
export default function Trophy() {
  return (
    <div className="mb-5 flex flex-col justify-between gap-5 bg-[#F9F1E7] p-16 lg:flex-row lg:items-center">
      <div className="flex items-center gap-4">
        <TrophyIcon className="size-16" />
        <div>
          <h2 className="font-poppins text-2xl font-semibold">High Quality</h2>
          <p className="font-poppins text-xl font-medium text-[#898989]">
            crafted from top materials
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <BadgeCheck className="size-16" />
        <div>
          <h2 className="font-poppins text-2xl font-semibold">
            Warranty Protection
          </h2>
          <p className="font-poppins text-xl font-medium text-[#898989]">
            Over 2 years
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Gift className="size-16" />
        <div>
          <h2 className="font-poppins text-2xl font-semibold">Free Shipping</h2>
          <p className="font-poppins text-xl font-medium text-[#898989]">
            Order over 150 $
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Headset className="size-16" />
        <div>
          <h2 className="font-poppins text-2xl font-semibold">
            24 / 7 Support
          </h2>
          <p className="font-poppins text-xl font-medium text-[#898989]">
            Dedicated support
          </p>
        </div>
      </div>
    </div>
  );
}
