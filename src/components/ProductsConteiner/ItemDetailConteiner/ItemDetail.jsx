import { useContext } from "react";
import { ShoppingCartContext } from "../../../Context/ShoppingCartContext";
// import { deleteItem, updateItem } from "../../../fireBase/crud.fireBase";
function ItemDetail({ item }) {
  const { handleAdd, quantity } = useContext(ShoppingCartContext);

  // const [newPrice, setNewPrice] = useState("");
  // const handlePriceChange = (e) => {
  //   setNewPrice(e.target.value);
  // };

  // const handleUpdatePrice = async (id) => {
  //   try {
  //     const updatedProduct = { precio: newPrice };
  //     await updateItem(id, updatedProduct);
  //     console.log(`Se actualizo el precio al producto con ID: ${id} `);
  //     window.location.reload();
  //   } catch (error) {
  //     console.error(
  //       `Error al actualizar el precio del producto con ID: ${id}`,
  //       error
  //     );
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     const result = await deleteItem(id);
  //     if (result) {
  //       console.log(`producto eliminado con ID: ${id}`);
  //     } else {
  //       console.error(`El documento con ID: ${id} no fue encontrado`);
  //     }
  //   } catch (error) {
  //     console.error(`Error al eliminar el producto con ID: ${id}`, error);
  //   }
  // };

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="flex-shrink-0 md:w-1/3 lg:w-1/2">
        <img
          className=" w-full h-64 object-contain rounded-t-lg"
          src={item.imagen}
          alt={item.nombre}
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-items-start md:w-2/3 lg:w-1/2">
        <h4 className="text-2xl font-bold">{item.nombre}</h4>
        <p className="text-gray-800 font-bold">$ {item.precio}</p>
        {/* <p className="text-gray-600">color: {item.color}</p> */}
        <p className="text-gray-600">Talle:{item.size}</p>

        <button
          className="mt-4 p-2 border bg-blue-300 rounded-3xl border-blue-300 hover:bg-gray-100 transition duration-300 text-center"
          onClick={() => {
            handleAdd(item, quantity);
          }}
        >
          Comprar
        </button>
        {/* <button
          onClick={() => handleDelete(item.id)}
          className="bg-red-500 text-white p-2 rounded"
        >
          Borrar
        </button> */}
        {/* <div>
          <input
            type="number"
            value={newPrice}
            onChange={handlePriceChange}
            placeholder="Nuevo precio"
            min="0"
          />
          <button onClick={() => handleUpdatePrice(item.id)}>
            Actualizar Precio
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ItemDetail;
