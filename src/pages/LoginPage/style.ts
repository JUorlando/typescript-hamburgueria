import styled from "styled-components";

export const StyledMiniBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1 {
    span {
      color: var(--color-secondary);
      font-size: large;
    }
  }

  .miniBox {
    width: 397px;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--color-text-complement);
    border-radius: 4px;
    padding: 24px;
    gap: 24px;

    p {
      width: 261px;
      height: 60px;
      color: var(--color-text-in-primary);
    }

    span {
      color: var(--color-text);
    }

    .logo {
      width: 60px;
      height: 60px;
      color: var(--color-primary);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-text-complement);
      border: 1px solid var(--color-text-complement);
      border-radius: 4px;
    }

  }
  @media (max-width: 800px) {
    height: 37px;
    position: relative;
    bottom: 445px;
    .miniBox{
      display: none;
    }
}
  @media (max-width: 760px) {
    height: 37px;
    position: relative;
    bottom: 445px;
    .miniBox{
      display: none;
    }
}

@media (max-width: 390px) {
    height: 37px;

    h1{
        font-size: medium;
        span{
            font-size: small;
        }
    }
    .miniBox{
      display: none;
    }
}
`;

export const ContainerPages = styled.div`
  width: 1000px;
  height: 461px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media (max-width: 800px) {
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
  }
`;
