import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-text-light);

  .modalHeader {
    width: 100%;
    height: 65px;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    .closeModal {
      color: var(--color-text-light);
    }
  }

  ul {
    width: 100%;
    height: 100%;
    background-color: var(--color-text-light);
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
  }

  .total {
    width: 100%;
    height: 122px;
    border-top: solid 1px var(--color-text-in-primary);
    background-color: var(--color-text-light);
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 20px;

    div {
      display: flex;
      justify-content: space-between;

      p {
        font-weight: bold;
      }

      .somaTotal {
        color: var(--color-text-in-primary);
      }
    }

    .emptyCart {
      width: 100%;
      height: 100%;
      color: var(--color-text-in-primary);
      h1 {
        width: 100%;
        height: 100%;
        padding: 20px;
        text-align: center;
        font-size: large;
      }
    }

    button {
      width: 100%;
      height: 60px;
      background-color: var(--color-text-complement);
      color: var(--color-text-in-primary);
      border: solid 1px var(--color-text-complement);
      border-radius: 8px;
    }
  }

  @media (max-width: 1150px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 414px) {
    width: 100%;
  }
`;
