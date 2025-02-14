import { useEffect } from "react";
import { useState } from "react";
import { requestData } from "../../Helpers/requestData";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListConteiner() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [title, setTitle] = useState("Pijamas");
  const category = useParams().category;

  useEffect(() => {
    requestData().then((res) => {
      if (category) {
        setProducts(res.filter((prod) => prod.categoria === category));
        setTitle(category.charAt(0).toUpperCase() + category.slice(1));
      } else {
        setProducts(res);
        setTitle("");
      }
      setVisibleProducts(5)
    });
  }, [category]);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
  };

  return (
    <div>
      <ItemList products={products.slice(0, visibleProducts)} title={title} />
      {visibleProducts < products.length && (
        <button
          style={{
            background: "linear-gradient(90deg, #799899, #aebfac, #acd7b6)",
          }}
          className="mt-4 mb-4 p-2 rounded mx-auto block"
          onClick={showMoreProducts}
        >
          Ver Más
        </button>
      )}
    </div>
  );
}

export default ItemListConteiner;
