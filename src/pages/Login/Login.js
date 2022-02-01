import React, { useState } from "react";
import { ReactComponent as TeamSpaceLogo } from "assets/icons/TeamSpace-logo.svg";
import { useNavigate } from "react-router-dom";
import InputField from "components/inputField";
import ScreenCenter from "components/ScreenCenter";
import Button from "components/Button";
import Notification from "components/notification";
import { useAuth } from "features/userData";

import "./login.scss";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { logIn } = useAuth();

  const [inputValues, setInputValues] = useState(initialValues);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (logIn(inputValues.email, inputValues.password)) {
      navigate("/");
    } else {
      setLoginFailed(true);
    }
  };

  return (
    <ScreenCenter>
      <div className="login">
        <TeamSpaceLogo />
        <div className="login__top-section">
          <h1 className="h2-alt-font">Login</h1>
          <p className="body-font">Welcome back, please login.</p>
        </div>
        {loginFailed && (
          <Notification
            type="error"
            text="Email or password doesn't match."
            hideable={false}
            fullWidth
          />
        )}
        <form onSubmit={handleSubmit}>
          <div className="login__input-holder">
            <div className="login__input-field-wrapper login__input-field-wrapper--span-2">
              <InputField
                label="email"
                type="email"
                id="email"
                name="email"
                placeholder="email"
                autoComplete="username"
                value={inputValues.email}
                onChange={handleChange}
                isError={loginFailed}
              />
            </div>
            <div className="login__input-field-wrapper login__input-field-wrapper--span-2">
              <InputField
                label="password"
                type="password"
                id="password"
                name="password"
                placeholder="password"
                autoComplete="current-password"
                value={inputValues.password}
                onChange={handleChange}
                isError={loginFailed}
              />
            </div>
          </div>
          <div className="login__bottom-section">
            <Button type="submit">Login</Button>
            <p className="body-font">
              Don&apos;t have an account? <a href="/Registration">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </ScreenCenter>
  );
};

export default Login;
