import { useState } from "react";
import ArrowDown from "../../assets/icons/ArrowDown";
import WebIcon from "../../assets/icons/WebIcon";
import SeoIcon from "../../assets/icons/SeoIcon";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../assets/icons/CloseIcon";
import CallIcon from "../../assets/icons/CallIcon";
import HrIcon from "../../assets/icons/HrIcon";

interface Props{
  onClose?: ()=>void,
}

export default function NavbarList({onClose}:Props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigate = useNavigate();

  const navigateToWebsitePage = () => {
    navigate("/website-development");
  };

  const navigateToSeoPage = () => {
    navigate("/seo");
  };


  return (
    <nav className="container font-secondary lg:text-xl text-3xl font-medium lg:font-normal text-beige flex lg:flex-row flex-col lg:justify-center gap-4 lg:h-auto h-screen bg-black lg:gap-11 lg:p-0 shadow-[0_7px_14px_0px_rgba(0, 0, 0, 0.40)] px-6 lg:pt-0 lg:mx-0">
      <button className="flex flex-row justify-end items-end mb-3 lg:hidden mt-8" onClick={onClose}>
        <CloseIcon/>
      </button>
      <li
        onClick={() => close()}
        className="list-none  hover:text-orange cursor-pointer transition-colors"
      >
        <a href="#benefits"> Benefits</a>
      </li>

      <li
        onClick={() => close()}
        className="list-none  hover:text-orange cursor-pointer transition-colors mt-2 lg:mt-0"
      >
        <a href="#work"> Work</a>
      </li>
       
      <li
        onClick={handleModal}
        className="list-none mt-2 lg:mt-0 flex flex-row items-center gap-1 hover:text-orange cursor-pointer relative transition-colors"
      >
        <p>Services</p>
        <span className="hidden lg:inline-block">
          <ArrowDown />
        </span>
        
      </li>

      {isModalVisible && (
        <div className="absolute bg-black top-24 translate-x-20 rounded-t-none rounded-b-2xl p-4 hidden lg:inline-block">
          <li className="list-none">
            <Button
              className="flex flex-row gap-3 justify-center group "
              variant="black"
              hover={true}
              onClick={navigateToWebsitePage}
            >
              <div className="rounded-lg  group-hover:bg-beige group-hover:text-orange">
                <WebIcon />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl text-left">Website Development</p>
                <p className="text-lg  font-light text-gray w-72 group-hover:text-white text-left ">
                  Build Pro Grade Websites for long term success.
                </p>
              </div>
            </Button>
            <Button
              className="flex flex-row gap-3 justify-center item group"
              variant="black"
              hover={true}
              onClick={navigateToSeoPage}
            >
              <div className="rounded-lg group-hover:bg-beige group-hover:text-orange">
                <SeoIcon />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <p className="text-2xl  ">SEO for Shopify Stores</p>
                <p className="text-lg font-light text-gray w-72 group-hover:text-white text-left">
                  Increase online visibility and search engine rankings.
                </p>
              </div>
            </Button>
          </li>
        </div>
      )}
         <div className="ml-10 list-none text-lg lg:hidden font-normal">
          <li className="flex flex-row gap-2 items-center" onClick={navigateToWebsitePage}><HrIcon/> Website Development</li>
          <li className="flex flex-row gap-2 items-center" onClick={navigateToSeoPage}><HrIcon/> Seo Development</li>
          </div>
      <li
        onClick={() => close()}
        className="list-none  mt-2 lg:mt-0 hover:text-orange cursor-pointer transition-colors"
      >
        <a href="#testimonials"> Testimonials</a>
      </li>

      <li
        onClick={() => close()}
        className="list-none  mt-2 lg:mt-0 hover:text-orange cursor-pointer transition-colors"
      >
        <a href="#packages"> Packages</a>
      </li>

      <li
        onClick={() => close()}
        className="list-none  mt-2 lg:mt-0 hover:text-orange cursor-pointer transition-colors"
      >
        <a href="#faq"> FAQ</a>
      </li>
      <Button className="px-6 py-5 mt-4 flex flex-row gap-3 text-sm lg:hidden ">
        <span>
          <CallIcon />
        </span>
        <p>Hop on a Call</p>
      </Button>
    </nav>
  );
}
