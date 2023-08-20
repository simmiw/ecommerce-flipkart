import React from "react";
import Styled from "./styled";
import { ReactComponent as SearchIcon } from "../../logos/search-icon.svg";

const SearchInput = () => {
  return (
    <Styled>
      <input
        className="search-input"
        type="text"
        placeholder="Search for products, brand and more"
      />
      <SearchIcon className="search-icon" />
    </Styled>
  );
};

export default SearchInput;
