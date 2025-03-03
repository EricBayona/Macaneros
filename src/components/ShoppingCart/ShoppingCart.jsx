import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ShoppingCart() {
  const { shoppingCart, totalPrice, empty, removeFromCart } =
    useContext(ShoppingCartContext);
  const handleEmpty = () => {
    empty();
  };

  const createCartMessage = (shoppingCart) => {
    let mesaage = "Hola, me gustaría comprar los siguientes productos: \n \n";
    shoppingCart.forEach((item) => {
      mesaage += `${item.nombre} - Cantidad: ${item.quantity} - Precio: $${
        item.precio * item.quantity
      } \n`;
    });
    mesaage += `\nPrecio total: $${totalPrice()}`;
    return encodeURIComponent(mesaage);
  };

  const cartMessage = createCartMessage(shoppingCart);
  const whatsappLink = `https://wa.me/5493865863942?text=${cartMessage}`;
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      {shoppingCart.map((pijamas, index) => (
        <div
          key={index}
          className="flex items-center p-4 mb-4 bg-white rounded-md shadow-md"
        >
          <img
            className="w-16 h-16 mr-4 rounded"
            src={pijamas.imagen}
            alt={pijamas.nombre}
          />
          <div>
            <h4 className="text-lg font-semibold">{pijamas.nombre}</h4>
            <p className="text-sm text-gray-600">
              Cantidad: {pijamas.quantity}
            </p>
            <p className="text-sm text-gray-800">
              Precio unitario: ${pijamas.precio}
            </p>
            <p className="text-sm text-gray-800">
              Precio total: ${pijamas.precio * pijamas.quantity}
            </p>
            <button
              className="text-white px-1 py-1 mt-2 rounded-md hover:bg-gray-500 transition duration-300"
              onClick={() => removeFromCart(pijamas.id)}
            >
              <FontAwesomeIcon
                className="bg-gray-400 p-2 rounded-3xl text-white"
                icon={faTrash}
              />
            </button>
          </div>
        </div>
      ))}
      {shoppingCart.length !== 0 && (
        <div className="mt-4 p-4 bg-white rounded-md shadow-md">
          <h4>
            Para recibir una atención más personalizada, haga clic en el botón
            de WhatsApp y envíe su pedido a uno de nuestros vendedores.
          </h4>

          <h3 className="text-xl font-semibold">
            Precio Total = ${totalPrice()}
          </h3>
          <div className="flex space-x-2 mt-4 items-center">
            <a href={whatsappLink} className="text-3xl p-2">
              <FontAwesomeIcon
                className="bg-green-500 p-2 rounded-3xl text-white"
                icon={faWhatsapp}
              />
            </a>
            <button
              onClick={handleEmpty}
              className="px-1 py-1 h-8 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
      {shoppingCart.length === 0 && (
        <h4 className="text-lg font-semibold mb-2">Tu carrito está Vacio </h4>
      )}
    </div>
  );
}

export default ShoppingCart;
