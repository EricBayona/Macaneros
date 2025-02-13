import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ItemListConteiner from "./components/ProductsConteiner/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./components/ProductsConteiner/ItemDetailConteiner/ItemDetailConteiner";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { CartProvider} from "./Context/ShoppingCartContext";
import { Footer } from "./components/Footer/Footer";
import { ButtonWhatsapp } from "./components/BusinessInfo/ButtonWhatsapp";
function App() {

 
  return (
    <CartProvider>
      <div className="flex-container">
        <BrowserRouter>
          <Header />
          <ButtonWhatsapp />
          <div className="flex-content">
            <Routes>
              <Route path="/" element={<ItemListConteiner />} />
              <Route
                path="/products/:category"
                element={<ItemListConteiner />}
              />
              <Route path="/item/:id" element={<ItemDetailConteiner />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
