import { React, useState } from "react";
import StyledHeader from "./styled";
import flipkartPlusLogo from "../../logos/flipkart-plus.png";
import SearchInput from "../search-input/search-input";
import { ReactComponent as BottomArrow } from "../../logos/bottom-arrow-svgrepo-com.svg";
import { ReactComponent as ShoppingCartIcon } from "../../logos/shopping-cart-outline-svgrepo-com.svg";
import Dropdown from "../dropdown/dropdown";
import { loginOptions, moreOptions } from "./dropdown-options";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="empty-box"></div>
        <div className="main-container">
          <img src={flipkartPlusLogo} alt="Flipkart Plus" />
          <div className="search-input-container">
            <SearchInput />
          </div>
          <div className="login-container">
            <Dropdown
              options={loginOptions}
              targetElement={<button className="login-button">Login</button>}
            />
          </div>
          <span className="become-a-seller">Become a Seller</span>
          {/* <Dropdown options={moreOptions}>
            <button>More</button>
            <BottomArrow />
          </Dropdown> */}

          <div className="shopping-cart-container">
            <ShoppingCartIcon />
            <div className="cart">Cart</div>
          </div>
        </div>
        <div className="empty-box"></div>
      </StyledHeader>
    </>
  );
};

export default Header;
