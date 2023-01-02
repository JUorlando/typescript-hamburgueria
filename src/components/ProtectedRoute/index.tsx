import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/UserContesxts/LoginContexts";

export const ProtectedRoute = () => {

  const {user} = useContext(LoginContext)

    const navigate = useNavigate()

    useEffect(() => {
        
        if(!user){
            navigate("/")
        }

    }, [])

  return (
    <>
      <Outlet />
    </>
  );
};