import React from "react";
import "./Dropdown.css";
import search from "./icons/search.svg";
import close from "./icons/close.svg";
import arrow from "./icons/chevron-right.svg";

function Dropdown({ setOpen }) {
  return (
    <div className="dropdown-menu">
      <div className="search-container">
        <button className="search-button" onClick={(e) => e.preventDefault()}>
          <img src={search} alt="search-icon" />
        </button>
        <button className="close-button" onClick={() => setOpen(false)}>
          <img src={close} alt="close-icon" />
        </button>
      </div>
      <div className="sign-button">
        <button>Sign In/Sign Up</button>
      </div>
      <ul className="menu-list">
        <li>
          <button>
            Shop
            <img src={arrow} alt="arrow right" />
          </button>
        </li>
        <li>
          <button>
            Mobile
            <img src={arrow} alt="arrow right" />
          </button>
        </li>
        <li>
          <button>
            TV&AV
            <img src={arrow} alt="arrow right" />
          </button>
        </li>
        <li>
          <button>
            Home Appliances
            <img src={arrow} alt="arrow right" />
          </button>
        </li>
        <li>
          <button>
            Computing
            <img src={arrow} alt="arrow right" />
          </button>
        </li>
        <li>
          <button>
            Displays
            <img src={arrow} alt="arrow right" />
          </button>
        </li>
        <li>
          <button>Accessories</button>
        </li>
        <li>
          <button>SmartThings</button>
        </li>
        <li>
          <button>&#x23;YouMake</button>
        </li>
      </ul>
      <div className="support-container">
        <button>Support
          <img src={arrow} alt="arrow right" />
        </button>
        <button>For Business</button>
      </div>
      <div className="order-container">
        <button>Orders</button>
        <button>Product Registration</button>
        <button>Members</button>
      </div>
    </div>
  );
}

export default Dropdown;
