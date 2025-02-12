import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ItemListConteiner from "./components/ProductsConteiner/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./components/ProductsConteiner/ItemDetailConteiner/ItemDetailConteiner";
import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { ShoppigCartContext } from "./Context/ShoppingCartContext";
import { Footer } from "./components/Footer/Footer";
import { ButtonWhatsapp } from "./components/BusinessInfo/ButtonWhatsapp";
function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleAdd = (item, quantity) => {
    const addedItem = { ...item, quantity };
    const newShoppingCart = [...shoppingCart];
    const isInCart = newShoppingCart.find(
      (product) => product.id === addedItem.id
    );
    if (isInCart) {
      isInCart.quantity += quantity;
    } else {
      newShoppingCart.push(addedItem);
    }
    setShoppingCart(newShoppingCart);
  };

  const cartBadge = ()=>{
    return shoppingCart.reduce((acc, product) => acc + product.quantity,0 )
  }
  const totalPrice = ()=>{
    return shoppingCart.reduce((acc,product)=> acc + product.precio * product.quantity,0)
  }
  const empty = ()=>{
    setShoppingCart([])
  }
  return (
    <ShoppigCartContext.Provider value={{ shoppingCart, handleAdd, cartBadge, totalPrice, empty}}>
      <BrowserRouter>
        <Header />
        <ButtonWhatsapp/>

        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/products/:category" element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ShoppigCartContext.Provider>
  );
}

export default App;
