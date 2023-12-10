import { useEffect, useState } from "react";

export const useResMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();

    setResMenu(json?.data?.cards);
  };

  return resMenu;
};
