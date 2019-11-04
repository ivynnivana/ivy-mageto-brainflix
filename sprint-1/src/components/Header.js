import React, { Component } from "react";
import Logo from "../assets/Logo/logo.svg";
import Images from "../assets/Images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-logo">
          <img className="header-img" src={Logo} alt="" />
        </div>
        <div className="input">
          <input
            className="header-input"
            type="text"
            name="name"
            value=""
            placeholder="Search"
          />
          <div className="button-container">
            <button className="header-button">UPLOAD</button>
            <img className="header-image" src={Images} alt="Mohan" />
          </div>
        </div>
      </div>
    </header>
  );
}
