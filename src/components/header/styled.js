import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #2874f0;
  height: 56px;
  display: flex;

  .empty-box {
    width: 124px;
  }

  .main-container {
    display: flex;
    align-items: center;
    flex: 1;

    img {
      width: 100px;
    }

    .login-container {
      display: flex;
      align-items: center;
      margin: 0 20px;

      .login-button {
        cursor: pointer;
        background: transparent;
        color: #fff;
        outline: none;
        border: 0;
      }

      svg {
        width: 6px;
        height: 8px;
        fill: #fff;
      }
    }

    .become-a-seller {
      color: #fff;
    }
    .more-button {
      display: flex;
      align-items: center;
      margin: 0 20px;

      button {
        cursor: pointer;
        background: transparent;
        color: #fff;
        outline: none;
        border: 0;
      }
      svg {
        width: 6px;
        height: 8px;
        fill: #fff;
      }
    }
  }
`;

export default StyledHeader;
