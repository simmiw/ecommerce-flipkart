import styled from "styled-components";

const StyledDropdown = styled.div`
  position: relative;

  .dropdown-list-container {
    position: absolute;
    top: 100%;
    padding: 0;
    background-color: #fff;
    margin: 0;
    list-style-type: none;
    border-top: 1px solid #f0f0f0;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
    width: 240px;

    svg {
      margin-top: 14px;
      align-items: start;
    }

    .dropdown-item {
      height: 50px;
      &:hover {
        background-color: #fafafa;
      }
    }
  }
`;

export default StyledDropdown;
