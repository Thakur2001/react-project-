import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://rb.gy/bzr26s" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const ResCards = () => {
  return (
    <div className="res-Cards">
      <img
        className="res-logo"
        src="https://www.bigsight.jp/visitor/shop/img/carousel-food-square-01.jpg"
        alt="res-img"
      />
      <h3>Hot Bowls</h3>
      <h4>Burger, Indian, Asian</h4>
      <h4>4.4 Stars</h4>
      <h4>40 Minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="res-Container">
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
      </div>
    </div>
  );
};
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
