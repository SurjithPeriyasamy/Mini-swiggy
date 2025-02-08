import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const cartItem = useSelector((store) => store.cart.addedItems);

  useEffect(() => {
    const items = Object.keys(cartItem);
    const addedItems = items.map((key) => cartItem[key]);
    setCartItems(addedItems);
  }, [cartItem]);

  return cartItems;
};
