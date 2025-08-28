import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer sides-gap" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h1 className="footer-logo">
            Food<span>.Express</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur, consequuntur, repellat quibusdam adipisci eos ullam
            voluptates repellendus expedita, iure repudiandae debitis rem iusto
            fugiat ipsa eius accusantium atque veritatis quidem?
          </p>
          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="footer-social" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footer-social" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="footer-social" />
            </a>
          </div>
        </div>
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privarcy policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+1-212-2343-243214</li>
            <li>foodexpress@example.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copyright 2023 © Food.Express.com - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
