import Logo from "./Logo";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Search from "./Search";

export default function Header() {
  return (
    <header className="container mx-auto flex h-[95px] items-center justify-between px-8 py-9">
      <Logo />
      <Navbar className="hidden items-center gap-[75px] lg:flex" />
      <NavbarMobile />
      <Search />
    </header>
  );
}
