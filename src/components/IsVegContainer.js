import React from "react";
import { IMAGE_URL } from "../utils/constants";
import { GoDotFill } from "react-icons/go";

const IsVegContainer = ({
  items,
  isPureVeg,
  setFilteredItems,
  setIsShowVeg,
  isShowVeg,
}) => {
  const handleShowVeg = () => {
    if (isShowVeg) {
      setFilteredItems(items);
      setIsShowVeg(false);
    } else {
      setIsShowVeg(true);

      const filteredOutput = items
        .map((cat) => {
          const vegFilter = cat?.card?.card?.itemCards.filter(
            (item) => item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
          );

          if (vegFilter.length !== 0) {
            return {
              onlyVeg: {
                title: cat.card.card.title,
                cards: vegFilter,
              },
            };
          }
        })
        .filter((item) => item);
      setFilteredItems(filteredOutput);
    }
  };
  return isPureVeg ? (
    <div className="flex items-center gap-1 tracking-wider">
      <img src={IMAGE_URL + isPureVeg} className="h-8" />
      <span className="text-xs font-semibold">PURE VEG</span>
    </div>
  ) : (
    <div className="flex items-center gap-3 tracking-wider">
      <h2 className="text-sm font-semibold ">Veg Only</h2>
      <div
        onClick={handleShowVeg}
        className={
          "h-[21px] p-1 w-[46] flex items-center rounded-sm bg-gray-300 relative cursor-pointer " +
          (isShowVeg && "bg-green-700")
        }
      >
        <span
          className={
            "h-[16px] flex justify-center rounded-sm w-[20px] bg-white absolute duration-500 " +
            (isShowVeg ? "translate-x-full" : "translate-x-0")
          }
        >
          <GoDotFill
            className={
              isShowVeg
                ? "opacity-100 text-green-700 duration-300"
                : "opacity-0 duration-300"
            }
          />
        </span>
      </div>
    </div>
  );
};

export default IsVegContainer;
