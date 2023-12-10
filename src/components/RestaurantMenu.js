import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";
import RestaurantCategory from "./RestaurantCategory";
import { useResMenu } from "../hooks/useResMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resMenu = useResMenu(resId);
  if (resMenu.length === 0) return null;
  const { avgRatingString, city, cuisines, feeDetails, areaName, name } =
    resMenu[0]?.card?.card?.info;

  const category = resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (cat) =>
      cat?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div style={{ margin: " 20px auto 0px", width: "50%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>{name}</h2>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{areaName + ", " + city}</h4>
          <div>
            <img height="24" src={IMAGE_URL + feeDetails.icon} alt="delivery" />
            <span>{feeDetails.message}</span>
          </div>
        </div>
        <div>
          <FaStar />
          <h4>{avgRatingString}</h4>
        </div>
      </div>
      <div>
        {category.map((cat, index) => (
          <RestaurantCategory
            key={cat.card.card.title}
            category={cat}
            showItem={index === showIndex ? true : false}
            setIndex={() => {
              index === showIndex ? setShowIndex(null) : setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
