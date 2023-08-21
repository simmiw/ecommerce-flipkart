import React from "react";
import StyledHeader from "./styled";
import flipkartPlusLogo from "../../logos/flipkart-plus.png";
import SearchInput from "../search-input/search-input";
import { ReactComponent as BottomArrow } from "../../logos/bottom-arrow-svgrepo-com.svg";

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
            <BottomArrow />
          </div>
          <span className="become-a-seller">Become a Seller</span>
          <div className="more-button">
            <button>More</button>
            <BottomArrow />
          </div>
        </div>
        <div className="empty-box"></div>
      </StyledHeader>
    </>
  );
};

export default Header;
