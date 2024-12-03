import Link from "next/link";
import { Button } from "./ui/button";
import { NavItem } from "./types-components";

// components
import Nav from "./navbar/nav";
// import MobileNav from './MobileNav';

const Header = ({ pathname }: NavItem) => {
  return (
    <header className="py-8 xl:py-12 text-accent">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            SPARC REACT <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav pathname={pathname} />
        </div>

        {/* mobile nav */}
        {/* <div className="xl:hidden">
          <MobileNav />
        </div> */}
      </div>
    </header>
  );
};
export default Header;
