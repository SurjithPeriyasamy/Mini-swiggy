import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLists } from "../utils/restaurantsSlice";
import { THING_PROXY } from "../utils/constants";

export const useResLists = () => {
  const [isCors, setIsCors] = useState(false);
  const dispatch = useDispatch();
  const resList = useSelector((store) => store.restaurants.resLists);
  useEffect(() => {
    resList.length == 0 && fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        `${THING_PROXY}https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();
      const mindList = json?.data?.cards[0]?.card?.card;
      const resList =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      dispatch(addLists({ onMind: mindList, res: resList }));
    } catch (err) {
      console.log(err);
      setIsCors(true);
    }
  };
  return isCors;
};
