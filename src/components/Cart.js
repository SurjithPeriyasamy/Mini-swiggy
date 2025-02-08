import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useCartItems } from "../hooks/useCartItems";

const Cart = () => {
  const dispatch = useDispatch();

  const addedItems = useCartItems();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="lg:w-1/2 w-3/4 mt-9 md:mt-32 m-auto text-center">
      <button
        className="bg-black text-white font-semibold my-5 p-2 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {!addedItems.length && (
        <h1 className="font-semibold tracking-wider mb-6">
          Your Cart Is Empty ,Please Add Your Items...
        </h1>
      )}
      {addedItems.map((item, i) => (
        <ItemList key={i} item={item.items} />
      ))}
    </div>
  );
};
export default Cart;
