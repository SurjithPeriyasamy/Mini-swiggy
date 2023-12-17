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
    <div className="xl:w-[85%] 2xl:[82%] w-[82%] m-auto text-center md:text-start flex justify-center mt-16 md:mt-32">
      <div className="xl:mx-12">
        <h2 className="font-semibold text-4xl">{title}</h2>
        <h4 className="my-3 text-lg text-gray-500 tracking-wide">
          {description}
        </h4>
        <h2 className="font-semibold text-2xl mb-7">Restaurants To Explore</h2>
        <div className="flex flex-wrap gap-7 justify-center text-start">
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
