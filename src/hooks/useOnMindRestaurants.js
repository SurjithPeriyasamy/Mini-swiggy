import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOnMindRes } from "../utils/restaurantsSlice";
import { THING_PROXY } from "../utils/constants";

export const useOnMindRestaurants = (category) => {
  const dispatch = useDispatch();

  const [collectionLink, categories] = category.split("&item=");
  const collection = useSelector(
    (store) => store.restaurants.onMindRestaurants
  );
  const fetchData = async () => {
    const data = await fetch(
      `${THING_PROXY}https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&collection=${collectionLink}`
    );
    const json = await data.json();

    dispatch(addOnMindRes({ [categories]: json.data }));
  };
  useEffect(() => {
    !collection[categories] && fetchData();
  }, [category]);

  return collection[categories];
};
