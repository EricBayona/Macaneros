import AccordionItem from "./AcordeonTitle";
import CartWidget from "../../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function HamburgerMenu({ isOpen, handleClose }) {
  return (
    <ul
      className={`${
        isOpen ? "block" : "hidden"
      } bg-white shadow-md rounded-md absolute top-0 left-0 h-full w-80 z-10`}
    >
      <li className="p-4 text-gray-800 text-2xl text-right">
        <button onClick={handleClose}>X</button>
      </li>
      <Link
        to="/"
        onClick={handleClose}
        className="font-bold text-gray-800 w-full text-left flex justify-between items-center p-4"
      >
        Ver Todo
      </Link>
      <Link
        className="font-bold text-gray-800 w-full text-left flex justify-between items-center p-4"
        to="/products/pijamas adultos"
      >
        Adultos
      </Link>
      {/* <AccordionItem title="Adultos">
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
      </AccordionItem> */}
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
