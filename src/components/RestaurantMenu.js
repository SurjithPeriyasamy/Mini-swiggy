import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useResMenu } from "../hooks/useResMenu";
import ShimmerUi from "./ShimmerUi";
import RestaurantInfo from "./RestaurantInfo";
import IsVegContainer from "./IsVegContainer";
import ResOffersCard from "./ResOffersCard";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const [isShowVeg, setIsShowVeg] = useState(false);

  const { resId } = useParams();

  const { filteredItems, setFilteredItems } = useResMenu(resId);

  const ans = useSelector((store) => store.resMenu.resMenus);

  if (!ans[resId] && filteredItems.length == 0) return <ShimmerUi />;

  const { resInfo, resOffers, items, isPureVeg } = ans[resId];

  return (
    <div className="xl:w-1/2 md:w-[70%] w-[82%] m-auto mt-6 md:mt-[135px]">
      <RestaurantInfo resInfo={resInfo} />

      <div className=" border-b-2 pb-5">
        <div className="flex gap-5 my-6 overflow-x-scroll scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full py-6">
          {resOffers.map((offer) => (
            <div
              className="border shrink-0 relative flex justify-center items-center shadow-lg rounded-lg"
              key={offer?.info?.resId}
            >
              <ResOffersCard resOffers={offer} />
            </div>
          ))}
        </div>

        <IsVegContainer
          items={items}
          isPureVeg={isPureVeg}
          setFilteredItems={setFilteredItems}
          setIsShowVeg={setIsShowVeg}
          isShowVeg={isShowVeg}
        />
      </div>

      <div className="my-5 bg-gray-100">
        {filteredItems.map((cat, index) => (
          <RestaurantCategory
            key={isShowVeg ? cat?.onlyVeg?.title : cat?.card?.card?.title}
            title={isShowVeg ? cat?.onlyVeg?.title : cat?.card?.card?.title}
            resId={resId}
            itemCards={
              isShowVeg ? cat?.onlyVeg.cards : cat?.card?.card?.itemCards
            }
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
