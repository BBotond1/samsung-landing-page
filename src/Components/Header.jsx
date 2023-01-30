import React from "react";
import "./Header.css";
import svgLogo from "./logo/Samsung-Logo.wine.svg";
import cart from "./icons/cart.svg";
import person from "./icons/person.svg";
import search from "./icons/search.svg";

function Header() {
  return (
    <nav>
      <div className="logo">
        <a href="https://www.samsung.com/">
          <img src={svgLogo} alt="samsung logo" />
        </a>
      </div>
      <div className="buttons">
        <div className="left-buttons">
          <button>Shop</button>
          <button>Mobile</button>
          <button>TV & AV</button>
          <button>Home Appliances</button>
          <button>Computing</button>
          <button>Displays</button>
          <button>Accessories</button>
          <button>SmartThings</button>
          <button>&#x23;YouMake</button>
        </div>
        <div className="right-buttons">
          <button>Support</button>
          <button>For Business</button>
        </div>
      </div>
      <div className="icons">
        <div>
          <button>
            <img src={search} alt="search-icon" />
          </button>
        </div>
        <div>
          <button>
            <img src={cart} alt="cart-icon" />
          </button>
        </div>
        <div>
          <button>
            <img src={person} alt="account-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
