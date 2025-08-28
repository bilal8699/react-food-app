import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../components/context/StoreContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "../../components/Button/Button";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const {
    cartItems,
    foodList,
    addToCart,
    removeFromCart,
    removeFromCartAll,
    getTotalCartAmount,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const getDeliveryFee = () => {
    const subtotal = getTotalCartAmount();
    if (subtotal === 0) return 0;
    if (subtotal < 50) return 5; // agar total < $50 → $5 fee
    if (subtotal < 100) return 10; // agar total < $100 → $10 fee
    return 15; // agar $100 se upar → $15 fee
  };

  return (
    <div className="cart sides-gap">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {foodList.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id} className="cart-items-title cart-items-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>

                {/* Quantity controls */}
                <div className="cart-add-minus">
                  <Button
                    className="minus"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaMinus />
                  </Button>
                  <h3>{cartItems[item.id]}</h3>
                  <Button className="add" onClick={() => addToCart(item.id)}>
                    <FaPlus />
                  </Button>
                </div>

                <p>${item.price * cartItems[item.id]}</p>

                <div
                  onClick={() => removeFromCartAll(item.id)}
                  className="cart-delete-icon"
                >
                  <RiDeleteBin6Line size={24} />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-total-code">
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="cart-subtotal">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />

          {getTotalCartAmount() > 0 && (
            <>
              <div className="cart-delivery">
                <p>Delivery Fee</p>
                <p>${getDeliveryFee()}</p>
              </div>
              <hr />
              <div className="cart-total">
                <p>Total</p>
                <p>${getTotalCartAmount() + getDeliveryFee()}</p>
              </div>
            </>
          )}

          <Button className="cart-total-btn"
          onClick={()=> navigate('/order')}
          >PROCEED TO CHECKOUT</Button>
        </div>
        <div className="cart-code">
          <p>if you have a promo code, Enter it here</p>
          <div className="cart-proinput">
            <input type="text" placeholder="promo code" />
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
