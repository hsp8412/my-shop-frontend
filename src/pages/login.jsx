import React, { useState } from "react";
import LoginForm from "../components/auth/loginForm";
import { getAccessJwt } from "../service/authService";
import { useSelector } from "react-redux";
import InvalidLoginCredential from "../components/auth/invalidLoginCredential";

const Login = () => {
  const invalidShow = useSelector((state) => state.auth.showInvalid);
  if (getAccessJwt()) {
    window.location = "/";
  }
  return (
    <div className="login-page">
      <LoginForm />
      <InvalidLoginCredential show={invalidShow} />
    </div>
  );
};

export default Login;
