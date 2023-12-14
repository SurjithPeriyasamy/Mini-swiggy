import { useEffect, useState } from "react";

export const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resOffers, setResOffers] = useState([]);
  const [isPureVeg, setIsPureVeg] = useState("");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();

    setResInfo(json?.data?.cards[0]?.card?.card?.info);

    setResOffers(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    const category =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (cat) =>
          cat?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    const pureVeg =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
        ?.card;

    setIsPureVeg(pureVeg?.isPureVeg ? pureVeg?.vegOnlyDetails?.imageId : "");
    setItems(category);
    setFilteredItems(category);
  };
  return {
    resInfo: resInfo,
    resOffers: resOffers,
    items: items,
    isPureVeg: isPureVeg,
    filteredItems: filteredItems,
    setFilteredItems,
  };
};
