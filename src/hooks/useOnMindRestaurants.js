import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOnMindRes } from "../utils/restaurantsSlice";

export const useOnMindRestaurants = (category) => {
  const dispatch = useDispatch();

  const [collectionId, categories] = category.split("_");
  const collection = useSelector(
    (store) => store.restaurants.onMindRestaurants
  );
  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&collection=${collectionId}&tags=layout_CCS_${categories}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
    );
    const json = await data.json();

    dispatch(addOnMindRes({ [categories]: json.data }));
  };
  useEffect(() => {
    !collection[categories] && fetchData();
  }, [category]);

  return collection[categories];
};
