import React from "react";
import ItemList from "./ItemList";
import { IoIosArrowDown } from "react-icons/io";
const RestaurantCategory = ({
  itemCards,
  title,
  showItem,
  setIndex,
  resId,
}) => {
  return (
    <div>
      <div className="my-5 bg-white px-1">
        <h2
          className="flex justify-between py-4 cursor-pointer text-gray-700 font-bold"
          onClick={setIndex}
        >
          {title} ({itemCards.length})
          <IoIosArrowDown
            className={
              "text-2xl duration-300 " + (showItem ? "rotate-180" : "rotate-0")
            }
          />
        </h2>
        {showItem &&
          itemCards.map((cards) => (
            <ItemList
              key={cards.card.info.id}
              resId={resId}
              item={cards.card.info}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
