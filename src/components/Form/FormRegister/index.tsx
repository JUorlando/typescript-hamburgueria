import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterContext } from "../../../contexts/UserContesxts/RegisterContext";
import { Input } from "../../Inputs/Inputs";
import { RegisterSchema } from "./RegisterSchema";
import { SubmitHandler } from "react-hook-form/dist/types";
import { StyledFormRegister } from "./style";

export interface iFormRegisterValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const FormRegister = () => {
  const { registerUser } = useContext(RegisterContext);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegisterValues>({
    resolver: yupResolver(RegisterSchema),
  });

  const submit: SubmitHandler<iFormRegisterValues> = (data) => {
    registerUser(data, setLoading);
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submit)}>
      <div className="header">
        <h3>Cadastrar</h3>
        <button className="return">
          <Link to="/">Voltar ao Login</Link>
        </button>
      </div>
        <Input
          id={"name"}
          type={"text"}
          name={"Nome"}
          placeholder={"Nome"}
          register={register("name")}
          disabled={loading}
          error={errors.name?.message}
        />
        <Input
          id={"email"}
          type={"email"}
          name={"Email"}
          placeholder={"Email"}
          register={register("email")}
          disabled={loading}
          error={errors.email?.message}
        />
        <Input
          id={"password"}
          type={"password"}
          placeholder={"Senha"}
          register={register("password")}
          disabled={loading}
          error={errors.password?.message}
        />
        <Input
          id={"confirmPassword"}
          type={"password"}
          placeholder={"Confirmar Senha"}
          register={register("confirmPassword")}
          disabled={loading}
          error={errors.confirmPassword?.message}
        />
      <button type="submit" className="cadastrar">
        Cadastrar
      </button>
    </StyledFormRegister>
  );
};
