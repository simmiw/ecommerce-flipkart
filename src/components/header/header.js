import { React, useState } from "react";
import StyledHeader from "./styled";
import flipkartPlusLogo from "../../logos/flipkart-plus.png";
import SearchInput from "../search-input/search-input";
import { ReactComponent as BottomArrow } from "../../logos/bottom-arrow-svgrepo-com.svg";
import { ReactComponent as ShoppingCartIcon } from "../../logos/shopping-cart-outline-svgrepo-com.svg";
import Dropdown from "../dropdown/dropdown";
import { loginOptions } from "./dropdown-options";

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };
  return (
    <>
      <StyledHeader>
        <div className="empty-box"></div>
        <div className="main-container">
          <img src={flipkartPlusLogo} alt="flipkartPluslogo" />
          <SearchInput />
          <div className="login-container">
            <button
              className="login-button"
              onMouseOver={handleMouseEnter}
              onMouseOut={handleMouseOut}
            >
              LogIn
              {isHover ? (
                <div className="first-dropdown-option">
                  <div className="new-customer">New Customer?</div>
                  <div>Sign up</div>
                </div>
              ) : null}
              {isHover ? <Dropdown options={loginOptions} /> : null}
            </button>
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
