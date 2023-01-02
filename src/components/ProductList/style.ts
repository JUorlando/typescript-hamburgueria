import styled from "styled-components";

export const StyledProductList = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;

  ul {
    width: 940px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    list-style: none;
    gap: 18px;
  }

  @media (max-width: 1150px) {
    width: 100%;
    height: 100%;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      align-content: center;
      list-style: none;
      gap: 18px;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      align-content: center;
      list-style: none;
      gap: 18px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      align-content: center;
      list-style: none;
      gap: 18px;
    }
  }

  @media (max-width: 414px) {
    width: 100%;
    height: 100%;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
    }
  }
`;
