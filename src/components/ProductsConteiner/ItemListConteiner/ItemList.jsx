import Item from "./Item";

function ItemList({ products, title }) {
  return (
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((pijamas, index) => (
        <Item product={pijamas} key={index} className="bg-white shadow-md rounded-lg p-4" />
      ))}
    </div>
  </div>
  );
}

export default ItemList;
