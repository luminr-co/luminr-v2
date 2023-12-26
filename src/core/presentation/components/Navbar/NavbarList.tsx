import { useState } from "react";
import ArrowDown from "../../assets/icons/ArrowDown";
import WebIcon from "../../assets/icons/WebIcon";
import SeoIcon from "../../assets/icons/SeoIcon";
import { Button } from "../Button";

export default function NavbarList() {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <nav className="container font-secondary text-xl font-normal text-beige flex flex-row justify-center gap-11 shadow-[0_7px_14px_0px_rgba(0, 0, 0, 0.40)]">
     
      <li onClick={() => close()} className = "list-none  hover:text-orange cursor-pointer transition-colors">
        <a href="#benefits"> Benefits</a>
      </li>

      <li onClick={() => close()} className = "list-none  hover:text-orange cursor-pointer transition-colors">
        <a href="#work"> Work</a>
      </li>

      <li onClick={handleModal} className = "list-none flex flex-row items-center gap-1 hover:text-orange cursor-pointer relative transition-colors">
        <p>Services</p>
        <span><ArrowDown/></span>
        </li>

        {
            isModalVisible && (
                <div className="absolute bg-black top-24 translate-x-20 rounded-t-none rounded-b-2xl p-4">
                    <li className="list-none">
                        <Button className="flex flex-row gap-3 justify-center group " variant="black" hover={true}>
                            <div className="rounded-lg group-hover:bg-beige group-hover:text-orange">
                             <WebIcon/>
                            </div>
                            <div className="flex flex-col gap-2">
                            <p className="text-2xl text-left">Website Development</p>
                            <p className="text-lg font-light text-gray w-72 group-hover:text-white text-left ">Build Pro Grade Websites for long term success.</p>
                            </div>
                        </Button>
                           <Button className="flex flex-row gap-3 justify-center item group" variant="black" hover={true}>
                            <div className="rounded-lg group-hover:bg-beige group-hover:text-orange">
                            <SeoIcon/>
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                            <p className="text-2xl">SEO for Shopify Stores</p>
                            <p className="text-lg font-light text-gray w-72 group-hover:text-white text-left">Increase online visibility and search engine rankings.</p> 
                            </div>
                        </Button>
                    </li>
                </div>
            )
        }

      <li onClick={() => close()} className = "list-none  hover:text-orange cursor-pointer transition-colors">
        <a href="#testimonials"> Testimonials</a>
      </li>

      <li onClick={() => close()} className = "list-none  hover:text-orange cursor-pointer transition-colors">
        <a href="#packages"> Packages</a>
      </li>

      <li onClick={() => close()} className = "list-none  hover:text-orange cursor-pointer transition-colors">
        <a href="#faq"> FAQ</a>
      </li>

    </nav>
  );
}
