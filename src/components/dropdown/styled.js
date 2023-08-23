import styled from "styled-components";

const StyledDropdown = styled.div`
  background-color: #fff;
  width: 200px;
  margin-top: 40px;

  .dropdown-list-container {
    list-style-type: none;
    display: flex;
    border-top: 1px solid #f0f0f0;
    align-items: start;

    svg {
      margin-top: 14px;
      align-items: start;
    }

    .dropdown-list {
      margin-top: 14px;
      margin-left: 16px;
    }
  }
`;

export default StyledDropdown;
