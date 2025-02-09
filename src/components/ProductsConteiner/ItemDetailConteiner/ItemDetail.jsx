import { useContext, useState } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { ShoppigCartContext } from "../../Context/ShoppingCartContext";

function ItemDetail({ item }) {

  const {shoppingCart, handleAdd}= useContext(ShoppigCartContext);
  console.log(shoppingCart);
  


  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
 
  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="flex-shrink-0 md:w-1/3 lg:w-1/2">
        <img
        className=" w-full h-64 object-contain rounded-t-lg"
          src={`/images/${item.imagen}`}
          alt={item.nombre}
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-items-start md:w-2/3 lg:w-1/2">
        <h4 className="text-2xl font-bold">{item.nombre}</h4>
        <p className="text-gray-800 font-bold">$ {item.precio}</p>
        <p className="text-gray-600">color: {item.color}</p>
        <p className="text-gray-600">Talle:{item.talla}</p>
        <ItemCount
          quantity={quantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
        <button
          className="mt-4 p-2 border bg-blue-300 rounded-3xl border-blue-300 hover:bg-gray-100 transition duration-300 text-center"
          onClick={() =>{handleAdd(item,quantity)}}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;
