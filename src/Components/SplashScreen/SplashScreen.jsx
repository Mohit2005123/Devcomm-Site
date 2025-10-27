import React from "react";
import "./SplashScreen.css";
import devcommLogo from "../../Assets/Images/DevcommLogo.png";

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      <img
        src={devcommLogo}
        alt="DevComm Logo"
        className="splash-logo"
      />
    </div>
  );
}



