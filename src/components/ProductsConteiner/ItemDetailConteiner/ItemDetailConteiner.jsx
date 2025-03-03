import { useEffect, useState } from "react";
// import { requestItem } from "../../Helpers/requestData";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../fireBase/configFireBase";

function ItemDetailConteiner() {
  // const [item, setItem] = useState(null);
  // const id = useParams().id
  // useEffect(()=>{
  //     requestItem(Number(id))
  //         .then((res)=>{

  //             setItem(res)
  //         })
  //         .catch((error)=>{
  //             console.log(error,`no se econtro el item con id ${id}`);

  //         })

  //     },[id])
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((resp) => {
      setItem({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
}

export default ItemDetailConteiner;
