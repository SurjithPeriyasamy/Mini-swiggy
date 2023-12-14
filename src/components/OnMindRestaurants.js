import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link, useParams } from "react-router-dom";
import { useOnMindRestaurants } from "../hooks/useOnMindRestaurants";
import ShimmerUi from "./ShimmerUi";

const OnMindRestaurants = () => {
  const { category } = useParams();
  const resList = useOnMindRestaurants(category);

  if (!resList) return <ShimmerUi />;
  const onMindCards = resList?.cards.filter(
    (cards) =>
      cards?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  const { title, description } = resList?.cards[0]?.card?.card;
  return (
    <div className="w-3/4 m-auto flex justify-center mt-16">
      <div>
        <h2 className="font-semibold text-5xl">{title}</h2>
        <h4 className="my-3 text-lg text-gray-600 tracking-wide">
          {description}
        </h4>
        <h2 className="font-semibold text-2xl mb-7">Restaurants To Explore</h2>
        <div className="flex flex-wrap gap-9 justify-center">
          {onMindCards.map((res) => (
            <Link
              to={"/restaurants/" + res.card.card.info.id}
              key={res.card.card.info.id}
            >
              <RestaurantCard resData={res.card.card} />
            </Link>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default OnMindRestaurants;
