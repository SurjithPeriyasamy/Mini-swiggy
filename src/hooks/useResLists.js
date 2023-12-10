import { useEffect, useState } from "react";

export const useResLists = () => {
  const [mindList, setMindList] = useState([]);
  const [resList, setResList] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setMindList(json?.data?.cards[1]?.card.card);
    setResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    resList.length === 0 && fetchData();
  }, []);
  return { mindList, resList };
};
