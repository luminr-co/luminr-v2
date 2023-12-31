import LogoFull from "../../assets/images/LogoFull";
import NavbarList from "./NavbarList";
import { Button } from "../Button";
import CallIcon from "../../assets/icons/CallIcon";
import LogoSmall from "../../assets/images/LogoSmall";
import MenuIcon from "../../assets/icons/MenuIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleMenuIcon = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleCloseSidebar = () => {
    setSidebarVisible(false);
  };

  const navigate = useNavigate();

  const handleLogoNavigation = () => {
    navigate("");
  };

  return (
    <div className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-full px-4 container mx-auto">
      <nav className="rounded-full py-4 lg:px-20 px-16 bg-black shadow-2xl flex flex-row justify-between items-center  w-96 xl:w-full mx-auto">
        <button
          className="hidden xl:inline-block cursor-pointer"
          onClick={handleLogoNavigation}
        >
          <LogoFull />
        </button>
        <button
          className="xl:hidden cursor-pointer"
          onClick={handleLogoNavigation}
        >
          <LogoSmall />
        </button>
        <div className="hidden xl:inline-block top-0 bg-black p-12 lg:p-0 left-0 ">
          <NavbarList />
        </div>
        <a href="#call">
          <Button className="xl:flex flex-row justify-center gap-3 items-center hidden ">
            <span>
              <CallIcon />
            </span>
            <p>Hop on a Call</p>
          </Button>
        </a>
        <button className="xl:hidden" onClick={handleMenuIcon}>
          <MenuIcon />
        </button>
        {isSidebarVisible && (
          <div className="absolute -top-6 -left-0 bg-black h-screen">
            <NavbarList onClose={handleCloseSidebar} />
          </div>
        )}
      </nav>
    </div>
  );
}
