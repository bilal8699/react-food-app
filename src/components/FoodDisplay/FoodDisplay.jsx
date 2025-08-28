import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category, fromSearch, setFromSearch }) => {
  const { foodList, searchQuery } = useContext(StoreContext);

  const filteredItems = foodList.filter((item) => {
    const categoryMatch = category === "All" || category === item.category;
    const searchMatch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="food-display sides-gap" id="food-display">
      <h2>
        Top <span>dishes</span> near you
      </h2>
      <div className="food-display-list">
        {filteredItems.map((item, index) => (
          <FoodItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
            highlight={fromSearch && index === 0} // 👈 only first item when search
            setFromSearch={setFromSearch}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
