import { useEffect, useState } from "react";

export const useOnMindRestaurants = (category) => {
  const [resList, setResList] = useState([]);

  const [collectionId, categories] = category.split("_");

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&collection=${collectionId}&tags=layout_CCS_${categories}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
    );
    const json = await data.json();
    setResList(json);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return resList;
};
