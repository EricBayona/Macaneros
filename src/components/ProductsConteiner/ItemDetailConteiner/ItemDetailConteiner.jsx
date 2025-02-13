import { useEffect, useState } from "react"
import { requestItem } from "../../Helpers/requestData";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ShoppingCart from "../../ShoppingCart/ShoppingCart";

function ItemDetailConteiner() {

    const [item, setItem] = useState(null);
    const id = useParams().id
    useEffect(()=>{
        requestItem(Number(id))
            .then((res)=>{
                
                setItem(res)
            })
            .catch((error)=>{
                console.log(error,`no se econtro el item con id ${id}`);
                
            })
            
        },[id])
        
  return (
      <div>
        {item && <ItemDetail item={item}/>}
        <ShoppingCart item={item}/>
    </div>
);
}

export default ItemDetailConteiner