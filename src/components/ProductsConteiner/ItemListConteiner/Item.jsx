// import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../../Context/ShoppingCartContext";

function Item({ product }) {
  const { handleAdd } = useContext(ShoppingCartContext);
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col justify-between">
      <div className="relative w-full">
        <Link to={`/item/${product.id}`}>
          <img
            className=" w-full h-64 object-contain rounded-t-lg"
            src={product.imagen}
            alt={product.nombre}
          />
        </Link>
      </div>
      <div className="w-full mt-2 flex flex-col justify-between min-h-[80px]">
        <Link to={`/item/${product.id}`}>
          <h4 className="text-xl font-semibold underline">{product.nombre}</h4>
          <p className="text-gray-600">Categoria: {product.categoria}</p>
          <p className="text-gray-800 font-bold">Precio: ${product.precio}</p>
        </Link>

        <div className="flex justify-around p-4 space-x-4">
          <button
            style={{
              background: "linear-gradient(90deg, #799899, #aebfac, #acd7b6)",
            }}
            className="p-2 border rounded-3xl border-blue-300 hover:bg-gray-100 transition duration-300 w-full flex-grow text-center"
            onClick={() => {
              handleAdd(product, 1);
            }}
          >
            Comprar
          </button>
          {/* <Link
            style={{
              background: "linear-gradient(90deg, #799899, #aebfac, #acd7b6)",
            }}
            className="p-2 border border-blue-300 rounded-3xl hover:bg-gray-100 transition duration-300 w-full flex-grow text-center flex items-center jus space-x-2"
            to={`/item/${product.id}`}
          >
            <FontAwesomeIcon icon={faEye} />
            Ver Más
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Item;
