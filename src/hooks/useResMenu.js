import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addResMenu } from "../utils/resMenuSlice";
import { THING_PROXY } from "../utils/constants";

export const useResMenu = (resId) => {
  const [filteredItems, setFilteredItems] = useState([]);

  const dispatch = useDispatch();

  const resMenu = useSelector((store) => store.resMenu.resMenus);

  useEffect(() => {
    !resMenu[resId] ? fetchData() : setFilteredItems(resMenu[resId].items);
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `${THING_PROXY}https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();

    const category =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (cat) =>
          cat?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    const pureVeg =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
        ?.card;
    console.log(category, pureVeg);
    setFilteredItems(category);

    const resDetails = {
      [resId]: {
        resInfo: json?.data?.cards[2]?.card?.card?.info,
        resOffers:
          json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers,
        isPureVeg: pureVeg?.isPureVeg ? pureVeg?.vegOnlyDetails?.imageId : "",
        items: category,
      },
    };
    dispatch(addResMenu(resDetails));
  };
  return {
    filteredItems,
    setFilteredItems,
  };
};
