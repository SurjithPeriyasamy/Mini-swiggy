import { IMAGE_URL } from "../utils/constants";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import { TiArrowSortedUp } from "react-icons/ti";
const ItemList = ({ item }) => {
  const { name, imageId, price, defaultPrice, itemAttribute, description } =
    item;
  return (
    <div className="flex justify-between my-5 border-b-2 pb-6">
      <div>
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
      <div className="w-36 ">
        {imageId && (
          <img
            className="w-full max-h-32 rounded-lg"
            src={IMAGE_URL + imageId}
            alt="food"
          />
        )}
      </div>
    </div>
  );
};
export default ItemList;
