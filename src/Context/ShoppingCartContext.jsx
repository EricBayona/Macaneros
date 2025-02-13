import { createContext, useEffect, useState } from "react";


export const ShoppingCartContext = createContext();

const  initialCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];


export const CartProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState(initialCart);

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
  
    const cartBadge = () => {
      return shoppingCart.reduce((acc, product) => acc + product.quantity, 0);
    };
    const totalPrice = () => {
      return shoppingCart.reduce(
        (acc, product) => acc + product.precio * product.quantity,
        0
      );
    };
    const empty = () => {
      setShoppingCart([]);
    };
    const removeFromCart =(id) =>{
        setShoppingCart((prevCart)=> prevCart.filter((product)=>product.id !== id)
    )
    
    }
    const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
  }, [shoppingCart])
  

    return (
    <ShoppingCartContext.Provider
    value={{ 
        shoppingCart,
        handleAdd, 
        cartBadge, 
        totalPrice, 
        empty, 
        handleDecrement, 
        handleIncrement, 
        quantity, 
        removeFromCart }}
  >
    {children}
    </ShoppingCartContext.Provider>
    )
}