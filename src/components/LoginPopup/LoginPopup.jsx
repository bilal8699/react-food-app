import React, { useState } from "react";
import "./LoginPopup.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Button from "../Button/button";
import loginImg from "../../assets/Images/Login.png";

const LoginPopup = () => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-popup">
      <div className="login-img">
        <img src={loginImg} alt="" />
      </div>
      <div className="login-content">
        <div className="login-title">
          <Link to="/">
            <h1 className="logo">
              Food<span>.Dash</span>
            </h1>
          </Link>
          <Link to="/">
            <Button className="login-btn">&#10006;</Button>
          </Link>
        </div>
        <form className="Login-container">
          <h2>
            {currentState === "Login"
              ? "Login to your account!"
              : "Create Account"}
          </h2>
          <div className="login-inputs">
            {currentState === "Login" ? (
              <></>
            ) : (
              <label>
                <span>Username</span>

                <br />
                <input
                  className="input"
                  type="username"
                  placeholder="Enter your username"
                  required
                />
                <hr className="line" />
              </label>
            )}
            <label>
              <span>Email</span>

              <br />
              <input
                className="input"
                type="email"
                placeholder="Youraddress@email.com"
                required
              />
              <hr />
            </label>
            <label>
              <span>Password</span>
              <br />
              <input
                className="input"
                type="password"
                placeholder="Enter your password"
                required
              />
              <hr />
            </label>
          </div>
          <Button className="login-btn1">
            {currentState === "Login" ? "Login to continue" : "Create account"}
          </Button>
          <div className="login-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          <div className="login-flip">

          {currentState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>Login here</span>
            </p>
          )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
