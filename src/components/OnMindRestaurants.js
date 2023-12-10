import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link, useParams } from "react-router-dom";
import { useOnMindRestaurants } from "../hooks/useOnMindRestaurants";

const OnMindRestaurants = () => {
  const { category } = useParams();

  const resList = useOnMindRestaurants(category);
  if (resList.length === 0) return null;
  const onMindCards = resList.data.cards.filter(
    (cards) =>
      cards?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  const { title, description } = resList?.data?.cards[0]?.card?.card;
  return (
    <div>
      <h2>{title}</h2>
      <h4>{description}</h4>
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
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
  );
};

export default OnMindRestaurants;
