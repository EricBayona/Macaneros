import AccordionItem from "./AcordeonTitle";
import CartWidget from "../../CartWidget/CartWidget";
// import Help from "../../../Pages/Help";
// import Login from "../../Login/Login";
// import Search from "../../Search/Search";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function HamburgerMenu({ isOpen, handleClose }) {
  // const linkClases = "block  text-gray-800 hover:bg-gray-100 pb-2";
  return (
    <ul
      // style={{
      //   background: "linear-gradient(90deg, #799899, #aebfac, #acd7b6)",
      // }}
      className={`${
        isOpen ? "block" : "hidden"
      } bg-white shadow-md rounded-md absolute top-0 left-0 h-full w-80 z-10`}
    >
      <li className="p-4 text-gray-800 text-2xl text-right">
        <button onClick={handleClose}>X</button>
      </li>
      {/* <Search className="items-center block lg:hidden" /> */}
      <Link
        to="/"
        onClick={handleClose}
        className="font-bold text-gray-800 w-full text-left flex justify-between items-center p-4"
      >
        Ver Todo
      </Link>
      {/* <AccordionItem title="Promos">
        <li>
          <a href="#promos1" className={linkClases}>
            Promo 1
          </a>
        </li>
        <li>
          <a href="#promos2" className={linkClases}>
            Promo 2
          </a>
        </li>
      </AccordionItem> */}
      <AccordionItem title="Adultos">
        <Link
          to="/products/pijamas animados adultos cortos"
          onClick={handleClose}
        >
          <h4>Pijamas Animados cortos</h4>
        </Link>
        <Link
          to="/products/pijamas animados adultos largos"
          onClick={handleClose}
        >
          <h4>Pijamas Animados largos</h4>
        </Link>
        <Link to="/products/pijamas mujer verano" onClick={handleClose}>
          <h4>Pijamas Mujer Verano</h4>
        </Link>
      </AccordionItem>
      <AccordionItem title="Teens">
        <Link to="/products/teens" onClick={handleClose}>
          Ver todo Teens
        </Link>
      </AccordionItem>
      <AccordionItem title="Niños">
        <Link to="/products/pijamas niños cortos" onClick={handleClose}>
          <h4>Pijamas cortos</h4>
        </Link>
        <Link to="/products/pijamas niños largos" onClick={handleClose}>
          <h4>Pijamas largos</h4>
        </Link>
      </AccordionItem>
      <AccordionItem title="Pijamas 3 piezas">
        <Link to="/products/pijamas tres piezas" onClick={handleClose}>
          Pijamas 3 piezas
        </Link>
      </AccordionItem>
      <AccordionItem title="Accesorios">
        <Link to="/products/accesorios" onClick={handleClose}>
          Accesorios
        </Link>
      </AccordionItem>
      <AccordionItem title="Toallones y Sabanas">
        <Link to="/products/toallones y sabanas" onClick={handleClose}>
          Toallones y Sabanas
        </Link>
      </AccordionItem>

      {/* <Help className={"items-center font-bold text-blue-400 hover:text-gray-800 block md:hidden p-4"}/> */}
      {/* <Login className={"items-center font-bold text-blue-400 hover:text-gray-800 block md:hidden p-4"}/> */}
      <CartWidget />
      <a
        className="text-black text-4xl p-3 "
        href="https://www.instagram.com/macaneros_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </ul>
  );
}

export default HamburgerMenu;
