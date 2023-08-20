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
  }
`;

export default StyledHeader;
