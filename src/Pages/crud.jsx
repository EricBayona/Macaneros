import { useState, useEffect } from "react";
import { createItem, deleteItem, getAllItems } from "../fireBase/crud.fireBase";
function Crud() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");
  const [size, setSize] = useState("");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    mostrarProductos();
  }, []);

  const mostrarProductos = () => {
    getAllItems()
      .then((data) => {
        setProductos(data);
      })
      .catch((error) =>
        console.error("Error al obtener los productos:", error)
      );
  };

  const handleCreate = async () => {
    try {
      const newId = await createItem({
        nombre,
        precio,
        imagen,
        size,
        categoria,
      });
      console.log("Nuevo producto creado con ID:", newId);
      mostrarProductos();
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteItem(id);
      if (result) {
        console.log(`producto eliminado con ID: ${id}`);
        mostrarProductos();
      } else {
        console.error(`El documento con ID: ${id} no fue encontrado`);
      }
    } catch (error) {
      console.error(`Error al eliminar el producto con ID: ${id}`, error);
    }
  };

  return (
    <>
      <div className="mb-4 flex flex-wrap gap-4">
        <input
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          className="border p-2"
        />
        <input
          type="text"
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio"
          className="border p-2"
        />
        <input
          type="text"
          onChange={(e) => setImagen(e.target.value)}
          placeholder="URL de imagenn"
          className="border p-2"
        />
        <input
          type="text"
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Categoría"
          className="border p-2"
        />
        <input
          type="text"
          onChange={(e) => setSize(e.target.value)}
          placeholder="Talle"
          className="border p-2"
        />
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Insertar producto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.map((book) => (
          <div key={book.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{book.nombre}</h2>
            <p className="text-gray-700">Precio: {book.precio}</p>
            <img
              src={book.imagen}
              alt={book.nombre}
              className="w-full h-48 object-cover mb-2"
            />
            <p className="text-gray-700">Categoría: {book.categoria}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleDelete(book.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Borrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Crud;
