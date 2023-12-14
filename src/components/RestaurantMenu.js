import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useResMenu } from "../hooks/useResMenu";
import ShimmerUi from "./ShimmerUi";
import RestaurantInfo from "./RestaurantInfo";
import IsVegContainer from "./IsVegContainer";
import ResOffersCard from "./ResOffersCard";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const [isShowVeg, setIsShowVeg] = useState(false);

  const { resId } = useParams();

  const {
    resInfo,
    resOffers,
    items,
    isPureVeg,
    filteredItems,
    setFilteredItems,
  } = useResMenu(resId);

  if (!resInfo) return <ShimmerUi />;

  return (
    <div className="w-1/2 m-auto  mt-6">
      <RestaurantInfo resInfo={resInfo} />

      <div className=" border-b-2 pb-5">
        <div className="flex gap-5 my-6 overflow-x-hidden">
          {resOffers.map((offers) => (
            <div
              className="border shrink-0 relative flex justify-center items-center shadow-lg rounded-lg"
              key={offers?.info?.resId}
            >
              <ResOffersCard resOffers={offers} />
            </div>
          ))}
        </div>

        <IsVegContainer
          items={items}
          isPureVeg={isPureVeg}
          filteredItems={filteredItems}
          setFilteredItems={setFilteredItems}
          setIsShowVeg={setIsShowVeg}
          isShowVeg={isShowVeg}
        />
      </div>

      <div className="my-5 bg-gray-100">
        {filteredItems.map((cat, index) => (
          <RestaurantCategory
            key={isShowVeg ? cat.onlyVeg.title : cat.card.card.title}
            title={isShowVeg ? cat.onlyVeg.title : cat.card.card.title}
            itemCards={isShowVeg ? cat.onlyVeg.cards : cat.card.card.itemCards}
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
