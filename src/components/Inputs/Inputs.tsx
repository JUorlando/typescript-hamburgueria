import React from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import { StyledInput, StyledInputBox } from "./style";

interface iInputProps {
  id?: string;
  type: "text" | "email" | "password";
  name?: string | undefined;
  register: UseFormRegisterReturn;
  placeholder?: string;
  disabled?: boolean;
  error: string | undefined;

}

export const Input = ({
  id,
  type,
  name,
  register,
  placeholder,
  disabled,
  error,
}: iInputProps) => {
  return (
    <StyledInputBox hasName={!!name}>
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      {...register}
      hasError={!!error}
    />
        <label>{name}</label>
        {error && <p className="errorLabel">{error}</p>}
    </StyledInputBox>
  );
};
