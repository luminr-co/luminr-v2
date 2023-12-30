import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";

export default function MainTemplate() {
  return (
    <>
    <div className=" lg:pb-24 pb-12 bg-black scroll-smooth min-w-full">
    <Navbar/>
    <div>
        <Outlet/>
    </div>
    </div>
    </>
  )
}
