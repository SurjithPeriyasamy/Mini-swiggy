import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);
  const cartItem = useSelector((store) => store.cart.addedItems);

  const ans = Object.keys(cartItem);

  useEffect(() => {
    const output = ans.map((key) => cartItem[key]);
    setAdded(output);
  }, [cartItem]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="lg:w-1/2 w-3/4 mt-9 m-auto text-center">
      <button
        className="bg-black text-white font-semibold my-5 p-2 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {ans.length === 0 && (
        <h1 className="font-semibold tracking-wider mb-6">
          Your Cart Is Empty ,Please Add Your Items...
        </h1>
      )}
      {added.map((item, i) => (
        <ItemList key={i} item={item.items} />
      ))}
    </div>
  );
};
export default Cart;
