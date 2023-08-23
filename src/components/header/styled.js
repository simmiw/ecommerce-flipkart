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
    width: 1250px;

    img {
      width: 100px;
    }

    .login-container {
      display: flex;
      align-items: center;
      margin: 0 20px;
      background: white;

      .login-button {
        display: inline-block;
        height: 30px;
        cursor: pointer;
        background: white;
        color: #2874f0;
        outline: none;
        padding: 0 30px;
        border: 0;

        .first-dropdown-option {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          text-alignment: center;
          margin-top: 30px;

          .new-customer {
            color: #000;
          }
        }
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

    .shopping-cart-container {
      display: flex;
      align-items: center;
      margin: 0 20px;

      svg {
        width: 20px;
        height: 20px;
      }

      .cart {
        padding: 0 0 0 8px;
        cursor: pointer;
        background: transparent;
        color: #fff;
        outline: none;
        border: 0;
      }
    }
  }
`;

export default StyledHeader;
