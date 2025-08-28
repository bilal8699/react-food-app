import React, { useContext, useRef, useEffect } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import "./FoodItem.css";
import Button from "../Button/Button";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, image, price, description, highlight, setFromSearch }) => {
  const possibleRatings = [4, 4.5, 5];
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const rating = possibleRatings[id % possibleRatings.length];

  const itemRef = useRef(null);

  // ✅ Scroll only when highlight true
  useEffect(() => {
    if (highlight && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      setFromSearch(false); // 👈 reset after scroll so reload won't scroll again
    }
  }, [highlight, setFromSearch]);

  function generateNumber(id) {
    let hashed = (id * 37 + 13) % 21;
    return 40 + hashed;
  }
  const number = generateNumber(id);

  let stars;
  if (rating === 5) {
    stars = Array(5).fill(<FaStar color="orange" className="rating-star" />);
  } else if (rating === 4.5) {
    stars = (
      <>
        <FaStar color="orange" className="rating-star" />
        <FaStar color="orange" className="rating-star" />
        <FaStar color="orange" className="rating-star" />
        <FaStar color="orange" className="rating-star" />
        <FaStarHalfAlt color="orange" className="rating-star" />
      </>
    );
  } else {
    stars = (
      <>
        <FaStar color="orange" className="rating-star" />
        <FaStar color="orange" className="rating-star" />
        <FaStar color="orange" className="rating-star" />
        <FaStar color="orange" className="rating-star" />
        <FaRegStar color="orange" className="rating-star" />
      </>
    );
  }

  return (
    <div className="food-item" ref={itemRef}>
      <img src={image} alt={name} />
      <div className="food-content">
        <h2 className="highlight">{name}</h2>
        <div className="food-rating">
          <span className="star">{stars}</span>
          <span>({number})</span>
        </div>
        <p className="food-item-des">{description}</p>
        <div className="price">
          <h3>${price}</h3>
          {!cartItems[id] ? (
            <Button className="init-btn" onClick={() => addToCart(id)}>
              ADD TO CART
            </Button>
          ) : (
            <div className="add-minus">
              <Button className="minus" onClick={() => removeFromCart(id)}>
                <FaMinus />
              </Button>
              <h3>{cartItems[id]}</h3>
              <Button className="add" onClick={() => addToCart(id)}>
                <FaPlus />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
