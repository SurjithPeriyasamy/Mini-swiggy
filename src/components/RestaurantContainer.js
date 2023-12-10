import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { TbFilterCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useFilteredRes } from "../hooks/useFilteredRes";

const RestaurantContainer = ({ resList }) => {
  const [searchText, setSearchText] = useState("");

  const filteredRes = useFilteredRes(resList, searchText);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="res-container">
      <div className="res-left">
        <input
          type="text"
          placeholder="Search for Restauarants"
          onChange={handleChange}
          value={searchText}
        />

        <button
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            boxShadow: "2px 2px 2px gray",
            letterSpacing: "2px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            const filterValue = resList.filter((res) => res.info.avgRating > 4);
            setFilteredRes(filterValue);
          }}
        >
          Top Rated Restaurant <TbFilterCheck />
        </button>
      </div>

      <div className="rescards">
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
