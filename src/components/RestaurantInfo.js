import { FaStar } from "react-icons/fa";
import { IMAGE_URL } from "../utils/constants";
import minsIcon from "../images/minsIcon.png";
const RestaurantInfo = ({ resInfo }) => {
  const {
    avgRatingString,
    totalRatingsString,
    city,
    cuisines,
    feeDetails,
    areaName,
    name,
    costForTwoMessage,
    sla,
  } = resInfo;

  return (
    <div>
      <div className="border-b-2 text-sm pb-3">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-medium">{name}</h2>
            <h4 className=" text-gray-600">{cuisines.join(", ")}</h4>
            <h4 className=" text-gray-600 ">{areaName + ", " + city}</h4>
          </div>
          <div className="flex flex-col items-center gap-2 border p-2 shadow-lg">
            <div className="flex items-center gap-2 border-b font-semibold text-green-800">
              <FaStar />
              <span className="font-extrabold text-green-700">
                {avgRatingString}
              </span>
            </div>
            <h4 className="tracking-tighter text-sm text-gray-500 font-medium">
              {totalRatingsString}
            </h4>
          </div>
        </div>
        <div className="mt-5 flex gap-2 items-center text-sm text-gray-600">
          <img
            className="h-5"
            src={IMAGE_URL + feeDetails.icon}
            alt="delivery"
          />
          <span>{feeDetails.message ? feeDetails.message : ""}</span>
        </div>
      </div>
      <div className="my-4 flex items-center gap-5 text-gray-600 font-bold">
        <div className="flex items-center gap-2 font-bold ">
          <img className="h-5" src={minsIcon} alt="mins" />
          <span>{sla.slaString}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="border-2 border-gray-600 rounded-full px-[4px] py-0 text-xs">
            ₹
          </span>
          <span>{costForTwoMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
