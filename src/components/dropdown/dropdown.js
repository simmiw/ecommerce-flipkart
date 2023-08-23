import React from "react";
import StyledDropdown from "./styled";

const Dropdown = ({ options }) => {
  return (
    <>
      <StyledDropdown>
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <ul className="dropdown-list-container">
              <Icon />
              <li className="dropdown-list">{option.name}</li>
            </ul>
          );
        })}
      </StyledDropdown>
    </>
  );
};

export default Dropdown;
