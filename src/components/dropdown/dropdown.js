import React, { useState } from "react";
import StyledDropdown from "./styled";

const Dropdown = ({ options, targetElement }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <StyledDropdown
      onMouseOver={() => {
        setIsDropdownOpen(true);
      }}
      onMouseOut={() => {
        setIsDropdownOpen(false);
      }}
    >
      {targetElement}
      {isDropdownOpen ? (
        <ul className="dropdown-list-container">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <li className="dropdown-list">
                <Icon />
                {option.name}
              </li>
            );
          })}
        </ul>
      ) : null}
    </StyledDropdown>
  );
};

export default Dropdown;
