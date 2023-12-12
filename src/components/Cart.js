import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-1/2 mt-9 m-auto text-center">
      <button
        className="bg-black text-white font-semibold my-5 p-2 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItem.length === 0 && (
        <h1 className="font-semibold tracking-wider mb-6">
          Your Cart Is Empty ,Please Add Your Items...
        </h1>
      )}
      {cartItem.map((item) => (
        <ItemList item={item} />
      ))}
    </div>
  );
};
export default Cart;
