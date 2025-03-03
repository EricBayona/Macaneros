import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ItemListConteiner from "./components/ProductsConteiner/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./components/ProductsConteiner/ItemDetailConteiner/ItemDetailConteiner";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { CartProvider } from "./Context/ShoppingCartContext";
import { Footer } from "./components/Footer/Footer";
import { ButtonWhatsapp } from "./components/BusinessInfo/ButtonWhatsapp";
import Login from "./Pages/login";
import ProtectedRoute from "./Login/ProtectedRoute";
import Crud from "./Pages/crud";
import { AuthProvider } from "./Login/AuthProvider";
function App() {
  return (
    <CartProvider>
      <AuthProvider>
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
                <Route path="/login" element={<Login />} />
                <Route
                  path="/addProducts"
                  element={
                    <ProtectedRoute>
                      <Crud />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
