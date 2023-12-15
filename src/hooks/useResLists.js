import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLists } from "../utils/restaurantsSlice";

export const useResLists = () => {
  const dispatch = useDispatch();
  const resList = useSelector((store) => store.restaurants.resLists);
  useEffect(() => {
    resList.length == 0 && fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const mindList = json?.data?.cards[1]?.card.card;
    const resList =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    dispatch(addLists({ onMind: mindList, res: resList }));
  };
};
