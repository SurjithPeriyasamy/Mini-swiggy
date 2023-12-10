import { useEffect, useState } from "react";

export const useFilteredRes = (resList, searchText) => {
  const [filteredRes, setFilteredRes] = useState(resList);

  useEffect(() => {
    const timer = setTimeout(() => {
      const searchResults = resList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRes(searchResults);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchText]);
  return filteredRes;
};
