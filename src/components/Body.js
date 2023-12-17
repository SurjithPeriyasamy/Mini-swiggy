import OnYourMind from "./OnYourMind";
import RestaurantContainer from "./RestaurantContainer";
import ShimmerUi from "./ShimmerUi";
import { useResLists } from "../hooks/useResLists";
import { useSelector } from "react-redux";

const Body = () => {
  useResLists();
  const resList = useSelector((store) => store.restaurants.resLists);
  return resList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="w-[76%] lg:w-[82%] xl:w-[79%] m-auto md:mt-32">
      <OnYourMind />
      <RestaurantContainer resList={resList} />
    </div>
  );
};
export default Body;
