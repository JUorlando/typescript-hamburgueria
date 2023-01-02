import styled from "styled-components";

export const StyledFormRegister = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: solid 1px var(--color-text-complement);
  border-radius: 4px;
  gap: 40px;
  padding: 24px;

  h3{
    font-weight: bold;
  }

  .header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .return{
        color: var(--color-primary);
    }
  }

  .login{
    width: 100%;
    height: 38px;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    border: solid 1px var(--color-primary);
    border-radius: 4px;
  }

  .cadastrar{
    width: 100%;
    height: 38px;
    background-color: var(--color-text-complement);
    color: var(--color-text);
    border: solid 1px var(--color-text-complement);
    border-radius: 4px;
  }

  @media (max-width: 760px) {
    height: 60%;
  }

  @media (max-width: 430px) {
    .header{
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 430px) {
    .header{
      display: flex;
      flex-direction: column;
    }
  }
`