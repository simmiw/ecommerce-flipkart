import styled from "styled-components";

const StyledDropdown = styled.div`
  position: relative;

  .dropdown-list-container {
    position: absolute;
    top: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
    border-top: 1px solid #f0f0f0;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
    width: 240px;

    svg {
      margin-top: 14px;
      align-items: start;
    }

    .dropdown-list {
      margin-top: 14px;
      margin-left: 16px;
    }
    .modal-contaniner {
      background: #fff;
      overflow: auto;
      display: flex;
      max-width: 750px;
      min-width: 650px;
      height: 528px;
      border-radius: 2px;
      border: 2px solid rgb(40, 116, 240);
    }
  }
`;

export default StyledDropdown;
