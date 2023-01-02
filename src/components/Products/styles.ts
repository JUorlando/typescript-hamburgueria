import styled from "styled-components";

export const StyledProducts = styled.li`
  width: 300px;
  height: 346px;
  border: solid 1px var(--color-text-light);
  display: flex;
  flex-direction: column;
  gap: 18px;

  div {
    width: 100%;
    height: 150px;
    background-color: var(--color-text-light);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  h2 {
    margin-left: 10px;
  }

  p {
    margin-left: 10px;
  }

  .price {
    color: var(--color-primary);
    margin-left: 10px;
  }

  button {
    width: 107px;
    height: 40px;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    border-radius: 8px;
    border: solid 1px var(--color-primary);
    margin-left: 10px;
  }

  @media (max-width: 1150px) {
    width: 300px;
    height: 346px;
    border: solid 1px var(--color-text-light);
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1050px) {
    width: 200px;
    height: 346px;
    border: solid 1px var(--color-text-light);
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 900px) {
    width: 300px;
    height: 346px;
    border: solid 1px var(--color-text-light);
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 700px) {
    width: 200px;
    height: 346px;
    border: solid 1px var(--color-text-light);
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 346px;
    border: solid 1px var(--color-text-light);
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 414px) {
    width: 300px;
    height: 346px;
  }
`;
