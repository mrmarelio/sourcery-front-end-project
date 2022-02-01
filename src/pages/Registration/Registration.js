import React, { useState } from "react";
import { ReactComponent as TeamSpaceLogo } from "assets/icons/TeamSpace-logo.svg";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import InputField from "components/inputField";
import ScreenCenter from "components/ScreenCenter";
import Button from "components/Button";
import Notification from "components/notification";
import {
  getAllUsersLoginData,
  saveUserLoginData,
  saveUserData,
} from "utils/auth";

import "./registration.scss";

const Registration = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const [inputValues, setInputValues] = useState(initialValues);
  const [inputErrors, setInputErrors] = useState({});
  const [emailUsed, setEmailUsed] = useState(false);

  const allUsersLogins = getAllUsersLoginData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.firstName) {
      errors.firstName = "First name is required";
    } else if (values.firstName.trim().length < 3) {
      errors.firstName = "Name should have at least 3 characters";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    } else if (values.lastName.trim().length < 3) {
      errors.lastName = "Name should have at least 3 characters";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!/[A-Z]/g.test(values.password)) {
      errors.password = "Password should have a Capital letter";
    } else if (!/\d/.test(values.password)) {
      errors.password = "Password should have a number";
    } else if (values.password.trim().length <= 8) {
      errors.password = "Password should have at least 8 characters";
    }
    if (values.repeatPassword !== values.password) {
      errors.repeatPassword = "Passwords must match";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if user ixists
    const userExists = allUsersLogins.find(
      (user) => user.email === inputValues.email
    );

    if (userExists) {
      setEmailUsed(true);
    } else {
      const inputErrors = validate(inputValues);
      setInputErrors(inputErrors);

      if (Object.keys(inputErrors).length === 0) {
        const newUserId = uuidv4();

        // save new user email and pass to localStorage
        const newUserLogin = {
          email: inputValues.email,
          password: inputValues.password,
          id: newUserId,
        };
        saveUserLoginData(newUserLogin);

        // save new userData to localStorage
        const newUserData = {
          userName: inputValues.firstName + " " + inputValues.lastName,
          id: newUserId,
          userImage: "https://picsum.photos/200",
        };
        saveUserData(newUserData);

        navigate("/login");
      }
    }
  };

  return (
    <ScreenCenter>
      <div className="registration">
        <TeamSpaceLogo />
        <div className="registration__top-section">
          <h1 className="h2-alt-font">Register</h1>
          <p className="body-font">Let&apos;s get you on board.</p>
        </div>
        {emailUsed && (
          <Notification
            type="error"
            text="Email is already used."
            hideable={false}
            fullWidth
          />
        )}
        <form onSubmit={handleSubmit}>
          <div className="registration__input-holder">
            <div className="registration__input-field-wrapper">
              <InputField
                label="first name"
                type="text"
                id="first-name"
                name="firstName"
                placeholder="first name"
                value={inputValues.firstName}
                isError={!!inputErrors.firstName}
                errorMessage={inputErrors.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="registration__input-field-wrapper">
              <InputField
                label="last name"
                type="text"
                id="last-name"
                name="lastName"
                placeholder="last name"
                value={inputValues.lastName}
                isError={!!inputErrors.lastName}
                errorMessage={inputErrors.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="registration__input-field-wrapper registration__input-field-wrapper--span-2">
              <InputField
                label="email"
                type="text"
                id="email"
                name="email"
                placeholder="email"
                autoComplete="username"
                value={inputValues.email}
                isError={!!inputErrors.email}
                errorMessage={inputErrors.email}
                onChange={handleChange}
              />
            </div>
            <div className="registration__input-field-wrapper">
              <InputField
                label="password"
                type="password"
                id="password"
                name="password"
                placeholder="password"
                autoComplete="new-password"
                value={inputValues.password}
                isError={!!inputErrors.password}
                errorMessage={inputErrors.password}
                onChange={handleChange}
              />
            </div>
            <div className="registration__input-field-wrapper">
              <InputField
                label="repeat password"
                type="password"
                id="repeat-password"
                name="repeatPassword"
                placeholder="repeat password"
                autoComplete="new-password"
                value={inputValues.repeatPassword}
                isError={!!inputErrors.repeatPassword}
                errorMessage={inputErrors.repeatPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="registration__bottom-section">
            <Button type="submit">Register</Button>
            <p className="body-font">
              Already have an account? <a href="/Login">Sign in</a>
            </p>
          </div>
        </form>
      </div>
    </ScreenCenter>
  );
};

export default Registration;
