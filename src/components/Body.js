import OnYourMind from "./OnYourMind";
import RestaurantContainer from "./RestaurantContainer";
import ShimmerUi from "./ShimmerUi";
import { useResLists } from "../hooks/useResLists";
import { useSelector } from "react-redux";

const Body = () => {
  const isCors = useResLists();
  const resList = useSelector((store) => store.restaurants.resLists);

  return !isCors ? (
    resList.length === 0 ? (
      <ShimmerUi />
    ) : (
      <div className="w-[76%] lg:w-[82%] xl:w-[79%] m-auto md:mt-32">
        <OnYourMind />
        <RestaurantContainer resList={resList} />
      </div>
    )
  ) : (
    <div className="h-screen bg-gray-900 bg-opacity-95">
      <div className="pt-[20%] w-2/5 m-auto text-center">
        <h1 className="text-2xl text-red-700 font-bold">
          {" "}
          Sorry for the inconvenience!!! I'm Using Swiggy's Live Api.So If you
          want to see,then Please Install CORS Extension On Your Browser.
        </h1>
        <p className="text-cyan-300">
          Visit Your Browser's WebStore &rarr; Install CORS Extension &rarr;
          Click the Extensions icon on your Browser &rarr; Pin this Extension
          &rarr; Now it comes close to the Extension Icon &rarr; Click(Open) and
          Turn On the Extension &rarr; Reload the page Enjoy 🚀 Buddy
        </p>
      </div>
    </div>
  );
};
export default Body;
