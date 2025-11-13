import { useState } from "react";
import Overlay from "../Overlay";
import HamburgerMenu from "./HamburgerMenu";
import CartWidget from "../../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 flex items-center justify-between n shadow-md">
      <div className="flex items-center space-x-5">
        <button className="text-gray-800 text-2xl" onClick={handleClose}>
          ☰
        </button>
      </div>
      <Link to={"/"} className="text-2xl font-serif text-red-700">
        <img
          className="w-full h-20 object-cover rounded-full"
          src="/logo.jpg"
          alt=""
        />
      </Link>

      <ul className="space-x-4 pr-6 flex items-center">
        <CartWidget />
        <li>
          <Link to={"/login"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
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
