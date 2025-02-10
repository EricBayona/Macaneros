import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppigCartContext } from "../../Context/ShoppingCartContext";

function CartWidget() {
  const { cartBadge } = useContext(ShoppigCartContext);
  return (
    <li className="flex items-center text-gray-800 hover:text-gray-800 p-4">
      <Link to="/shoppingCart" className="ml-1">
      <FontAwesomeIcon icon={faShoppingCart} />
        <span> {cartBadge()}</span>
      </Link>
    </li>
  );
}

export default CartWidget;
