import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";

export default function MainTemplate() {
  return (
    <>
    <div className="">
    <Navbar/>
    <div>
        <Outlet/>
    </div>
    </div>
    </>
  )
}
