import { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../fireBase/configFireBase";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListConteiner() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [title, setTitle] = useState("Pijamas");
  const category = useParams().category;
  useEffect(() => {
    const productsRef = collection(db, "productos");
    const q = category
      ? query(productsRef, where("categoria", "==", category))
      : productsRef;
    setTitle(category ? category : "");
    getDocs(q).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
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
