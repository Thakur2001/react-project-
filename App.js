import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./ResturantCard";

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
const ResCards = ({ item }) => {
  return (
    <div className="res-Cards">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
        alt="res-img"
      />
      <h3>{item.info.name}</h3>
      <h4>{item.info.cuisines.join(", ")}</h4>
      <h4>{item.info.avgRating} star</h4>
      <h4>{item.info.sla.slaString}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="res-Container">
        {resList.map((item, index) => {
          return <ResCards key={index} item={item} />;
        })}
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
