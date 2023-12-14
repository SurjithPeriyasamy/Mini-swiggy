import { IMAGE_URL } from "../utils/constants";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import { TiArrowSortedUp } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  const { name, imageId, price, defaultPrice, itemAttribute, description } =
    item;

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex justify-between my-5 border-b-2 pb-6 text-start">
      <div className="sm:basis-5/6">
        {itemAttribute.vegClassifier === "VEG" ? (
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
      <div className="sm:basis-1/6 max-h-28 relative flex justify-center">
        {imageId && (
          <img
            className="w-full h-full rounded-lg"
            src={IMAGE_URL + imageId}
            alt="food"
          />
        )}
        <button
          onClick={handleAddItem}
          className="bg-white text-sm shadow-lg hover:shadow-xl text-green-600 font-bold py-2 px-6 rounded-md absolute bottom-0 "
        >
          ADD
        </button>
      </div>
    </div>
  );
};
export default ItemList;
