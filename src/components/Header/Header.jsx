import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import headerImg from "../../assets/images/header.png";

const Header = () => {
  return (
    <div className="header sides-gap" id="header">
      <div className="header-container">
        <div className="header-content">
          <h1>
            <span>Quick</span> and{" "}
            <span>
              Tasty <br className="desktop-only" /> Food Delivered
            </span>{" "}
            with{" "}
            <span>
              a <br className="desktop-only" /> Dash of
            </span>{" "}
            Speed
          </h1>

          <a href="#explore-menu">
            <Button className="view-menu-btn">View Menu</Button>
          </a>
        </div>
        <div className="header-img">
          <img src={headerImg} alt="Delicious food delivery" />
        </div>
      </div>
    </div>
  );
};

export default Header;
