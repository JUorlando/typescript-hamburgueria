import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iLoginFormValues } from "../../components/Form/FormLogin";
import { api } from "../../services/api";
import { ProductsContext } from "../ProductsContext";

export const LoginContext = createContext({} as iUserContext);

export interface iUserProviderProps {
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

export interface iLoginResponse {
  accessToken: string;
  user: User;
}

export interface User {
  email: string;
  name: string;
  id: number;
}

export interface iUserContext {
  userLogin: (
    data: iLoginFormValues,
    loading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  user: iUser | null;
  userLogout: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userID = localStorage.getItem("@USERID");

    (async () => {
      if (token) {
        try {

          const response = await api.get(`/users/${userID}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);

          navigate("/home");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(true);
        }
      }
    })();
  }, []);

  const userLogin = async (
    data: iLoginFormValues,
    loading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      loading(true)

      const response = await api.post<iLoginResponse>("/login", data);

      localStorage.setItem("@TOKEN", response.data.accessToken);

      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));

      toast.success("Login realizado com sucesso.");
      
      setUser(response.data);

      navigate("/home");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      loading(false)
      setLoading(true);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");

    setUser(null);

    navigate("/");
  };

  return (
    <LoginContext.Provider
      value={{
        userLogin,
        user,
        userLogout,
        loading,
        setLoading,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
