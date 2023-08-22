import React from "react";
import StyledHeader from "./styled";
import flipkartPlusLogo from "../../logos/flipkart-plus.png";
import SearchInput from "../search-input/search-input";
import { ReactComponent as BottomArrow } from "../../logos/bottom-arrow-svgrepo-com.svg";
import { ReactComponent as ShoppingCartIcon } from "../../logos/shopping-cart-outline-svgrepo-com.svg";
import Dropdown from "../dropdown/dropdown";
import { loginOptions } from "./dropdown-options";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="empty-box"></div>
        <div className="main-container">
          <img src={flipkartPlusLogo} alt="flipkartPluslogo" />
          <SearchInput />
          <div className="login-container">
            <button className="login-button">LogIn</button>
            <Dropdown options={loginOptions} />
          </div>
          <span className="become-a-seller">Become a Seller</span>
          <div className="more-button">
            <button>More</button>
            <BottomArrow />
          </div>
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
