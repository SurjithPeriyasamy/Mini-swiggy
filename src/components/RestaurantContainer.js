import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { TbFilterCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

const RestaurantContainer = ({ resList }) => {
  const [filteredRes, setFilteredRes] = useState(resList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const searchResults = resList.filter((res) =>
        res.info.name
          .toLowerCase()
          .replace(/ /g, "")
          .includes(searchText.toLowerCase().replace(/ /g, ""))
      );
      setFilteredRes(searchResults);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="my-10">
      <div className="flex lg:flex-row flex-col gap-6 my-5 items-center justify-between">
        <input
          className="border-2 w-64 p-2 rounded-md focus:outline-none border-gray-500"
          type="text"
          placeholder="Search for Restauarants"
          onChange={handleChange}
          value={searchText}
        />

        <button
          className="bg-gray-300 flex hover:scale-95 font-medium items-center gap-3 p-3 rounded-lg border-none shadow-2xl tracking-wide "
          onClick={() => {
            const filterValue = resList.filter((res) => res.info.avgRating > 4);
            setFilteredRes(filterValue);
          }}
        >
          Top Rated Restaurant <TbFilterCheck />
        </button>
      </div>

      <div className="flex justify-center 2xl:gap-10 xl:gap-9 lg:gap-6 gap-10 flex-wrap">
        {filteredRes.map((res) => (
          <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
