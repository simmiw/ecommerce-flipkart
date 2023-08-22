import React from "react";

const Dropdown = ({ options }) => {
  return (
    <>
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <div>
            <div>{option.name}</div>
            <Icon />
          </div>
        );
      })}
    </>
  );
};

export default Dropdown;
