import AccordionItem from "./AcordeonTitle";
import CartWidget from "../../CartWidget/CartWidget";
import Help from "../../../Pages/Help";
import Login from "../../Login/Login";
import Search from "../../Search/Search";
import { Link} from "react-router-dom";

function HamburgerMenu({ isOpen, handleClose }) {
  // const linkClases = "block  text-gray-800 hover:bg-gray-100 pb-2";
  return (
    <ul
      className={`${
        isOpen ? "block" : "hidden"
      } bg-white shadow-md rounded-md absolute top-0 left-0 h-full w-80 z-10`}
    >
      <li className="p-4 text-gray-800 text-2xl text-right">
        <button onClick={handleClose}>X</button>
      </li>
      <Search className="items-center block lg:hidden" />
      <Link to="/" onClick={handleClose}>Ver Todo</Link>
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
      <AccordionItem title="Mujer">
        <Link to="/products/mujer" onClick={handleClose}>Ver todo Mujer</Link>
      </AccordionItem>
      <AccordionItem title="Teens">
      <Link to="/products/teens" onClick={handleClose}>Ver todo Teens</Link>
      </AccordionItem>
      <AccordionItem title="Niños">
        <Link to="/productos/niños" onClick={handleClose}>Ver todo Niños</Link>
        </AccordionItem>
      <AccordionItem title="Hombre">
        <Link to="/products/hombre" onClick={handleClose}>Ver todo Hombre</Link>
      </AccordionItem>
      
      <Help className={"items-center font-bold text-blue-400 hover:text-gray-800 block md:hidden p-4"}/>
      <Login className={"items-center font-bold text-blue-400 hover:text-gray-800 block md:hidden p-4"}/>
      <CartWidget/>
    </ul>
  );
}

export default HamburgerMenu;
