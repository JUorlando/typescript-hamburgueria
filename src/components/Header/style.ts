import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 68px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--color-text-light);

  span {
    color: var(--color-secondary);
    font-size: large;
  }
  form {
    width: 365px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 100%;
    height: 90%;
    border-radius: 8px;
    border: solid 1px var(--color-text-light);
    padding: 10px;
  }
  .search {
    width: 53px;
    height: 40px;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    border-radius: 8px;
    border: solid 1px var(--color-primary);
    position: relative;
    right: 50px;
  }

  .logout {
    width: 53px;
    height: 32px;
    cursor: pointer;
    border: none;
  }

  div {
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    .carrinho {
      width: 30%;
      height: 39px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;

      .contador {
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary);
        color: var(--color-text-light);
        font-weight: bold;
        font-size: smaller;
        border: solid 1px var(--color-primary);
        border-radius: 4px;
        position: relative;
        bottom: 10px;
      }
    }
  }

  @media (max-width: 510px) {
    input {
      width: 362px;
      height: 60px;
      border-radius: 8px;
      border: solid 1px var(--color-text-light);
      padding: 10px;
      margin-left: 30px;
    }
    div {
      width: 60px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;
    }
  }

  @media (max-width: 500px) {
    input {
      width: 150px;
      height: 60px;
      border-radius: 8px;
      border: solid 1px var(--color-text-light);
      padding: 10px;
      margin-right: 30px;
    }
    .search{
      display: none;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    gap: 3px;

    div {
      width: 60px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;
    }
    
    input {
      width: 150px;
      height: 60px;
      border-radius: 8px;
      border: solid 1px var(--color-text-light);
      padding: 10px;
    }
    .search{
      display: none;
    }
  }

`;
