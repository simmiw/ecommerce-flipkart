import React from "react";
import StyledHeader from "./styled";
import flipkartPlusLogo from "../../logos/flipkart-plus.png";
import SearchInput from "../search-input/search-input";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="empty-box"></div>
        <div className="main-container">
          <img src={flipkartPlusLogo} alt="flipkartPluslogo" />
          <SearchInput />
        </div>
        <div className="empty-box"></div>
      </StyledHeader>
    </>
  );
};

export default Header;
