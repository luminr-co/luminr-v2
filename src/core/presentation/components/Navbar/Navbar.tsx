import LogoFull from "../../assets/images/LogoFull";
import NavbarList from "./NavbarList";
import { Button } from "../Button";
import CallIcon from "../../assets/icons/CallIcon";
import LogoSmall from "../../assets/images/LogoSmall";
import MenuIcon from "../../assets/icons/MenuIcon";

export default function Navbar() {
  return (
    <nav className="container rounded-full py-4 lg:px-20 px-14 lg:ml-12 lg:mr-12 mr-3 bg-black shadow-2xl flex flex-row justify-between items-center fixed top-6 z-50 w-96 lg:w-11/12">
      <div className="hidden lg:inline-block">
        <LogoFull />
      </div>
      <div className="lg:hidden">
        <LogoSmall />
      </div>
      <div className="hidden lg:inline-block">
        <NavbarList />
      </div>
      <Button className="lg:flex flex-row justify-center gap-3 items-center hidden ">
        <span>
          <CallIcon />
        </span>
        <p>Hop on a Call</p>
      </Button>
      <button className="lg:hidden">
        <MenuIcon />
      </button>
    </nav>
  );
}
