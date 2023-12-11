import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";
import RestaurantCategory from "./RestaurantCategory";
import { useResMenu } from "../hooks/useResMenu";
import ShimmerUi from "./ShimmerUi";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resMenu = useResMenu(resId);

  if (resMenu.length === 0) return <ShimmerUi />;

  const {
    avgRatingString,
    totalRatingsString,
    city,
    cuisines,
    feeDetails,
    areaName,
    name,
  } = resMenu[0]?.card?.card?.info;

  const category = resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (cat) =>
      cat?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="w-1/2 m-auto mt-6">
      <div className="flex border-b-2  pb-7 justify-between items-center">
        <div>
          <h2 className="text-2xl font-medium">{name}</h2>
          <h4 className=" text-gray-600">{cuisines.join(", ")}</h4>
          <h4 className=" text-gray-600 text-sm">{areaName + ", " + city}</h4>
          <div className="my-1 flex gap-2 items-center text-sm text-gray-600">
            <img
              className="h-5"
              src={IMAGE_URL + feeDetails.icon}
              alt="delivery"
            />
            <span>{feeDetails.message ? feeDetails.message : ""}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 border p-2 shadow-lg">
          <div className="flex items-center gap-2 border-b font-medium text-green-800">
            <FaStar />
            <span>{avgRatingString}</span>
          </div>
          <h4 className="tracking-tighter text-sm text-gray-500 font-medium">
            {totalRatingsString}
          </h4>
        </div>
      </div>

      <div className="my-5 bg-gray-100">
        {category.map((cat, index) => (
          <RestaurantCategory
            key={cat.card.card.title}
            category={cat}
            showItem={index === showIndex ? true : false}
            setIndex={() => {
              setShowIndex(index === showIndex ? null : index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
