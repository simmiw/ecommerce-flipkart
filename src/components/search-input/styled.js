import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  .search-input {
    height: 36px;
    outline: none;
    border: 0;
    padding: 0 16px;
    width: 100%;
  }

  .search-icon {
    height: 36px;
    width: 44px;
    background-color: transparent;
    outline: none;
    border: 0;
    cursor: pointer;
    padding: 4px 12px 0 8px;

    svg {
      width: 20px;
      height: 20px;
      color: #2874f0;
    }
  }
`;

export default Styled;
