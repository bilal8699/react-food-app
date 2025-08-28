import React from "react";
import "./ExploreMenu.css";
import { items } from "../../assets/menu";
import Button from "../Button/button";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu sides-gap" id="explore-menu">
      <div className="explore-menu-heading">
        <h2>
          Explore Our<span> Menu</span>
        </h2>
        <Button onClick={() => setCategory("All")}>See All</Button>
      </div>
      <p>
        From fresh pizzas to sweet desserts, explore our menu and enjoy the
        flavors that make Food.Dash the perfect choice.
      </p>

      <div className="menu-list">
        {items.map((items, id) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === items.title ? "All" : items.title
                )
              }
              key={id}
            >
              <img
                className={category === items.title ? "active" : ""}
                src={items.image}
                alt={items.title}
              />
              <p>{items.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
