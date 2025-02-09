import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Item({ product }) {
  console.log(`/images/${product.imagen}`);
  
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col justify-between">
      <div className="relative w-full">
        <img
          className=" w-full h-64 object-contain rounded-t-lg"
          src={`/images/${product.imagen}`}
          alt={product.nombre}
        />
      </div>
      <div className="w-full mt-2 flex flex-col justify-between min-h-[80px]">
        <h4 className="text-xl font-semibold">{product.nombre}</h4>
        <p className="text-gray-600">Categoria: {product.categoria}</p>
        <p className="text-gray-800 font-bold">Precio: ${product.precio}</p>
        <div className="flex justify-around p-4 space-x-4">
          <a
            className="p-2 border bg-blue-300 rounded-3xl border-blue-300 hover:bg-gray-100 transition duration-300 w-full flex-grow text-center"
            href="#Comprar"
          >
            Comprar
          </a>

          <Link
            className="text-blue-300 p-2 border border-blue-300 rounded-3xl hover:bg-gray-100 transition duration-300 w-full flex-grow text-center flex items-center justify-center space-x-2"
            to={`/item/${product.id}`}
          >
            <FontAwesomeIcon icon={faEye} />
              Ver Más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
