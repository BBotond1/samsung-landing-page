import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Header.css";
import svgLogo from "./logo/Samsung-Logo.wine.svg";
import cart from "./icons/cart.svg";
import person from "./icons/person.svg";
import search from "./icons/search.svg";
import list from "./icons/list.svg";
import Dropdown from "./Dropdown";

function Header() {
  const [open, setOpen] = useState(false);
  const mobileView = useMediaQuery({ query: `(max-width: 1279px)` });

  useEffect(() => {
    if (mobileView === false){
      setOpen(false)
    }
  }, [mobileView])
  

  return (
    <nav>
      <div className="logo">
        <div>
          <img src={svgLogo} alt="samsung logo" />
        </div>
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
      <div className={open ? "hide" :"icons"}>
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
        {mobileView && (
          <>
            <div className="list-icon">
              <button
                onClick={() => {
                  setOpen(true);
                }}
              >
                <img src={list} alt="list-icon" />
              </button>
            </div>
          </>
        )}
      </div>
      {open && <Dropdown setOpen={setOpen}/>}
    </nav>
  );
}

export default Header;
