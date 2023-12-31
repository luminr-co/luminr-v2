import LogoFull from "../../assets/images/LogoFull";
import NavbarList from "./NavbarList";
import { Button } from "../Button";
import CallIcon from "../../assets/icons/CallIcon";
import LogoSmall from "../../assets/images/LogoSmall";
import MenuIcon from "../../assets/icons/MenuIcon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

export default function Navbar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const parentControls = useAnimation();
  const childControls = useAnimation();

  useEffect(() => {
    const handleResize = async () => {
      console.log(
        window.innerWidth < 1280
          ? window.innerWidth < 1024
            ? "24rem"
            : "66%"
          : "100%"
      );
      await parentControls.start({
        width:
          window.innerWidth < 1280
            ? window.innerWidth < 1024
              ? "24rem"
              : "66%"
            : "100%",
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [parentControls]);

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

  useEffect(() => {});

  return (
    <motion.div className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-full px-4 container mx-auto">
      <motion.nav
        animate={parentControls}
        initial={{
          width:
            window.innerWidth < 1280
              ? window.innerWidth < 1024
                ? "24rem"
                : "66%"
              : "100%",
        }}
        className="rounded-full py-4 lg:px-20 px-16 bg-black shadow-2xl  mx-auto overflow-hidden"
      >
        <motion.div
          animate={childControls}
          className="w-full flex flex-row justify-between items-center"
        >
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
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}
