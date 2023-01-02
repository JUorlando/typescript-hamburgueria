import styled from "styled-components";

export const StyledForm = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px var(--color-text-complement);
  border-radius: 4px;
  gap: 40px;
  padding: 24px;

  .title {
    width: 100%;
    height: 5%;
    h3 {
      font-weight: bold;
    }
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .return {
      color: var(--color-primary);
    }
  }

  .inputsBox {
    width: 100%;
    height: 38px;

    label {
      width: 28px;
      height: 10px;
      background-color: var(--color-background);
      color: var(--color-text-in-primary);
      font-size: 9px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: -42px;
      left: 10px;
    }

    p {
      width: 126px;
      height: 14px;
      color: var(--color-error);
      font-size: 9px;
    }

    .errorLabel {
      width: 126px;
      height: 14px;
      color: var(--color-error);
      font-size: 9px;
      position: relative;
      bottom: 9px;
    }
  }

  .login {
    width: 100%;
    height: 38px;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    border: solid 1px var(--color-primary);
    border-radius: 4px;
  }

  .menssage {
    width: 60%;
    height: 10%;
    color: var(--color-text-in-primary);
    text-align: center;
  }

  .cadastrar {
    width: 100%;
    height: 38px;
    background-color: var(--color-text-complement);
    color: var(--color-text);
    border: solid 1px var(--color-text-complement);
    border-radius: 4px;
  }
  @media (max-width: 800px) {
    height: 50%;
    .menssage {
      display: none;
  }
  }
  @media (max-width: 760px) {
    height: 50%;
    .menssage {
      display: none;
  }
  }
`;
