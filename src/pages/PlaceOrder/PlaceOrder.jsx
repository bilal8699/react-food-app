import "./PlaceOrder.css";
import Button from "../../components/Button/Button";
import React, { useContext } from "react";
import { StoreContext } from "../../components/context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const getDeliveryFee = () => {
    const subtotal = getTotalCartAmount();
    if (subtotal === 0) return 0;
    if (subtotal < 50) return 5; // agar total < $50 → $5 fee
    if (subtotal < 100) return 10; // agar total < $100 → $10 fee
    return 15; // agar $100 se upar → $15 fee
  };

  return (
    <form className="place-order sides-gap">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
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

        <Button className="cart-total-btn">PROCEED TO PAYMENT</Button>
      </div>
    </form>
  );
};

export default PlaceOrder;
