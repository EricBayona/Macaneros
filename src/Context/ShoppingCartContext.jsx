import { createContext, useState } from "react";


export const ShoppingCartContext = createContext();

export const CartProvider = ({children}) => {
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

    const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

    return (
    <ShoppingCartContext.Provider
    value={{ shoppingCart, handleAdd, cartBadge, totalPrice, empty, handleDecrement, handleIncrement, quantity }}
  >
    {children}
    </ShoppingCartContext.Provider>
    )
}