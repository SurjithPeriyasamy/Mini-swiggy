import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IMAGE_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, areaName, cloudinaryImageId, avgRating, sla } =
    resData.info;
  const { aggregatedDiscountInfoV3 } = resData?.info;

  return (
    <div className="w-64 transition-all duration-300 hover:scale-90">
      <div className="relative">
        {aggregatedDiscountInfoV3 && (
          <label className="p-2 pb-1 text-white bg-gradient-to-t from-black font-extrabold text-xl tracking-tight rounded-b-xl absolute z-10 bottom-0 w-full">
            <span>{aggregatedDiscountInfoV3.header}</span>
            <span>
              {aggregatedDiscountInfoV3["subHeader"] &&
                aggregatedDiscountInfoV3.subHeader}
            </span>
          </label>
        )}
        <img
          className="w-full h-44 rounded-xl"
          src={IMAGE_URL + cloudinaryImageId}
          alt="Restaurant cards"
        />
      </div>
      <div className="pl-2">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="flex items-center gap-1 font-medium">
          <span>
            <FaStar className="text-white text-lg bg-green-800 p-1 rounded-full" />
          </span>
          <span className="rate">{avgRating}</span>
          <span>
            <GoDotFill className="text-xs mt-1" />
          </span>
          <span className="time">{sla.deliveryTime} mins</span>
        </p>
        <h4 className="text-gray-600 truncate">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-600">{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
