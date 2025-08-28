import React from "react";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="AppDownload sides-gap" id="app-download">
      <h2>
        For Better Experience Download <br /> <span>Food.Dash</span> App
      </h2>
      <div className="store-buttons">
        <a href="https://play.google.com" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
          />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
          />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
