import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const toggleButtonName = () =>
    setButtonName((prevButtonName) =>
      prevButtonName == "Login" ? "Logout" : "Login"
    );
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="btn-Name" onClick={toggleButtonName}>
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
