import React, { useState } from "react";
import ItemList from "./ItemList";
import { IoIosArrowDown } from "react-icons/io";
const RestaurantCategory = ({ category, showItem, setIndex }) => {
  const { itemCards } = category.card.card;

  const handleShow = () => {
    setIndex();
  };
  return (
    <div>
      <div
        style={{
          borderBottom: "thin solid ",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <h2 onClick={handleShow} style={{ backgroundColor: "gray" }}>
          {category.card.card.title} ({itemCards.length})
          <IoIosArrowDown
            style={{ rotate: showItem && "180deg", fontSize: "20px" }}
          />
        </h2>
        {showItem &&
          itemCards.map((cards) => (
            <ItemList key={cards.card.info.id} item={cards.card.info} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
