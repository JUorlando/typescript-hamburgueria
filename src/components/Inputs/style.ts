import styled from "styled-components";

interface iPropsInput{
  hasError: boolean;
}

interface iPropsInputBox{
  hasName: boolean;
}

export const StyledInput = styled.input<iPropsInput>`
  
  width: 100%;
  height: 38px;
  color: var(--color-text);
  background-color: var(--color-text-complement);
  border: solid 1px ${({hasError}) => hasError ? "var(--color-error)" : "var(--color-text-complement)"}
  ;
  border-radius: 4px;
  padding: 10px;
  :focus {
    color: var(--color-text);
    border: solid 1px ${({hasError}) => hasError ? "var(--color-success)" : "var(--color-text-in-primary)"};
    background-color: var(--color-background);
  }
`;

export const StyledInputBox = styled.div<iPropsInputBox>`
    width: 100%;
    height: 38px;

    label{
      width: 28px;
      height: 10px;
      background-color: var(--color-background);
      color: var(--color-text-in-primary);
      font-size: 9px;
      display: ${({hasName}) => hasName ? "flex" : "none"};
      justify-content: center;
      align-items: center;
      position: relative;
      top: -42px;
      left: 10px;
    }

    p{
      width: 126px;
      height: 14px;
      color: var(--color-error);
      font-size: 9px;
    }

    .errorLabel{
      width: 126px;
      height: 14px;
      color: var(--color-error);
      font-size: 9px;
      position: ${({hasName}) => hasName ? "relative" : "none"};
      bottom: 9px;
    }
`
