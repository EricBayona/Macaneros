import { useContext } from "react";
import { ShoppigCartContext } from "../../Context/ShoppingCartContext";

function ShoppingCart() {
  const {shoppingCart,totalPrice, empty}= useContext(ShoppigCartContext);
  const handleEmpty = ()=>{
    empty()
  }
  return (
    <div className="p-4 bg-gray-100 rounded-md">
  {shoppingCart.map((pijamas, index) => (
    <div key={index} className="flex items-center p-4 mb-4 bg-white rounded-md shadow-md">
      <img className="w-16 h-16 mr-4 rounded" src={`/images/${pijamas.imagen}`} alt={pijamas.nombre} />
      <div>
        <h4 className="text-lg font-semibold">{pijamas.nombre}</h4>
        <p className="text-sm text-gray-600">Cantidad: {pijamas.quantity}</p>
        <p className="text-sm text-gray-800">Precio unitario: ${pijamas.precio}</p>
        <span className="text-sm text-gray-800">Precio total: ${pijamas.precio * pijamas.quantity}</span>
      </div>
    </div>
  ))}
  {shoppingCart.length !== 0 && (
    <div className="mt-4 p-4 bg-white rounded-md shadow-md">
      <h3 className="text-xl font-semibold">Precio Total = ${totalPrice()}</h3>
      <div className="flex space-x-2 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Comprar</button>
        <button onClick={handleEmpty} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Vaciar Carrito</button>
      </div>
    </div>
  )}
</div>

  )
}

export default ShoppingCart