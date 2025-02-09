import { useState } from "react";
import Overlay from "../Overlay";
import HamburgerMenu from "./HamburgerMenu";
import Search from "../../Search/Search";
import Help from "../../../Pages/Help";
import Login from "../../Login/Login";
import CartWidget from "../../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ background: 'linear-gradient(90deg, #799899, #aebfac, #acd7b6)' }} className=" p-4 flex items-center justify-between n shadow-md">
      <div className="flex items-center space-x-5">
        <button className="text-gray-800 text-2xl" onClick={handleClose}>
          ☰
        </button>
        <Search className={"items-center  hidden lg:flex"}/>
      </div>
      <Link to={"/"} className="text-2xl font-serif text-red-700"><img className="w-full h-20 object-cover rounded-t-lg" src="/logo.jpg" alt="" /></Link>

      <ul className="space-x-4 pr-6 md:flex">
        <Help className={"items-center text-gray-600 hover:text-gray-800 hidden md:flex"}/>
        <Login className={"items-center text-gray-600 hover:text-gray-800 hidden md:flex"} />
        <CartWidget/>
      </ul>
      {isOpen && (
        <>
          <Overlay onClick={handleClose} />
          <HamburgerMenu isOpen={isOpen} handleClose={handleClose} />
        </>
      )}
    </nav>
  );
}

export default Navbar;
