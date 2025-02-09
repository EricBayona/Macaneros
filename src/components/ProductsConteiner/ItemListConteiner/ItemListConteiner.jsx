import { useEffect } from "react";
import { useState } from "react";
import { requestData } from "../../Helpers/requestData";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListConteiner() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("Pijamas");
  const category = useParams().category;
  useEffect(() => {
    requestData().then((res) => {
      if (category) {        
        setProducts(res.filter((prod) => prod.categoria === category));
        setTitle(category.charAt(0).toUpperCase() + category.slice(1));
        
      } else {
        setProducts(res);
        setTitle("Pijamas");
      }
    });
  }, [category]);

  return (
    <div>
      <ItemList products={products} title={title}/>
    </div>
  );
}

export default ItemListConteiner;
