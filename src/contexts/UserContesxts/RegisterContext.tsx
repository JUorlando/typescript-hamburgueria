import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iFormRegisterValues } from "../../components/Form/FormRegister";
import { api } from "../../services/api";

export const RegisterContext = createContext({} as iRegisterContext);

export interface iRegisterProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  accessToken: string;
  user: iUserData;
}

export interface iUserData {
  email: string;
  name: string;
  id: number;
}

export interface iRegisterResponse {
  accessToken: string;
  user: User;
}

export interface User {
  email: string;
  name: string;
  id: number;
}

export interface iRegisterContext {
  registerUser: (
    data: iFormRegisterValues,
    loading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

export const RegisterProvider = ({ children }: iRegisterProviderProps) => {
  const navigate = useNavigate();

  const registerUser = async (
    data: iFormRegisterValues,
    loading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      loading(true);

      const response = await api.post<iRegisterResponse>("/users", data);

      toast.success("Usuário cadastrado com sucesso.");

      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      loading(false);
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        registerUser,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
