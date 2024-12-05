import Logo from "@/components/header/Logo";
import Navbar from "@/components/header/Navbar";

export default function Footer() {
  return (
    <section>
      <div className="container mx-auto p-8">
        <div className="mb-5 flex flex-col items-start justify-between gap-5 lg:flex-row">
          <div className="max-w-72">
            <Logo />
            <p className="mt-16 font-poppins text-base font-normal text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="my-5 flex items-start gap-20">
            <div className="">
              <h3 className="mb-14 font-poppins text-base font-medium text-[#9F9F9F]">
                Links
              </h3>
              <Navbar className="flex-col items-start gap-12" />
            </div>
            <div>
              <h3 className="mb-14 font-poppins text-base font-medium text-[#9F9F9F]">
                Help
              </h3>
              <ul className="flex flex-col items-start gap-12">
                <li className="cursor-pointer font-poppins text-base font-medium transition-colors duration-300 hover:text-primary">
                  Payment Options
                </li>
                <li className="cursor-pointer font-poppins text-base font-medium transition-colors duration-300 hover:text-primary">
                  Returns
                </li>
                <li className="cursor-pointer font-poppins text-base font-medium transition-colors duration-300 hover:text-primary">
                  Privacy Policies
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-14 font-poppins text-base font-medium text-[#9F9F9F]">
              Newsletter
            </h3>
            <div className="flex gap-5">
              <input
                className="border-b-2 border-black py-1 pr-5 outline-none"
                type="text"
                placeholder="Enter Your Email Address"
              />
              <button className="relative overflow-hidden border-b-2 border-black font-poppins text-sm font-medium uppercase transition-colors duration-300 hover:text-primary">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <p className="mb-12 mt-5 text-center font-poppins text-base lg:text-start">
            {new Date().getFullYear()} Furino. Powered by{" "}
            <a
              href="https://youssef-el-sayed.vercel.app"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              Youssef El Sayed
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
