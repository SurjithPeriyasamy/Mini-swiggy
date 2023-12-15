import { IMAGE_URL } from "../utils/constants";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import { TiArrowSortedUp } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, setResId } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({ item, resId }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const { name, imageId, price, defaultPrice, itemAttribute, description } =
    item;
  const { addedItems, restaurantId } = useSelector((store) => store.cart);

  const handleAddItem = () => {
    if (addedItems[name]) {
      dispatch(
        addItem({ [name]: { count: addedItems[name].count + 1, items: item } })
      );
    } else {
      if (!restaurantId) {
        dispatch(addItem({ [name]: { count: 1, items: item } }));
        dispatch(setResId(resId));
      } else if (restaurantId === resId) {
        dispatch(addItem({ [name]: { count: 1, items: item } }));
      } else {
        setError(true);
      }
    }
  };
  const handleRemoveItem = () => {
    dispatch(removeItem(name));
  };

  return (
    <div className=" my-5 border-b-2 pb-6">
      <div className="flex justify-between text-start">
        <div className="md:basis-5/6 basis-3/5">
          {itemAttribute?.vegClassifier === "VEG" ? (
            <GoDotFill className="border-2 border-green-700 text-green-700" />
          ) : (
            <TiArrowSortedUp className="border-2 border-red-700 text-red-700" />
          )}
          <h4 className="font-semibold">{name}</h4>
          <h4 className="flex items-center text-sm">
            <LiaRupeeSignSolid /> {defaultPrice / 100 || price / 100}
          </h4>
          <p className="mt-5 text-gray-400 text-sm">{description}</p>
        </div>
        <div className="md:basis-1/6 basis-2/5 w-full max-h-28 relative flex justify-center">
          {imageId && (
            <img className=" rounded-lg" src={IMAGE_URL + imageId} alt="food" />
          )}
          <div className="bg-white text-sm shadow-lg hover:shadow-xl text-green-600 font-bold py-[6px] px-6 rounded-md absolute -bottom-2 ">
            {addedItems[name] ? (
              <div className="flex items-center font-bold gap-3">
                <button onClick={handleRemoveItem} className="text-xl">
                  -
                </button>
                <span>{addedItems[name] && addedItems[name].count}</span>
                <button className="text-xl" onClick={handleAddItem}>
                  +
                </button>
              </div>
            ) : (
              <button onClick={handleAddItem}>ADD</button>
            )}
          </div>
        </div>
      </div>
      {error && (
        <p className="text-red-600 text-xs font-medium m-auto text-center animate-pulse w-1/2">
          hi Buddy!! Cannot add items from multiple Restaurants.Please Clear
          your cart ,then Add it
        </p>
      )}
    </div>
  );
};
export default ItemList;
