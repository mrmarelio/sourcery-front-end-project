import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { defaultUser } from "defaultUser";
import {
  getUserDataById,
  getLoggedInUserId,
  saveLoggedInUserId,
  getAllUsersLoginData,
  fetchDefaultUserData,
  removeLoggedInUserId,
} from "utils/auth";

export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUserData = (loggedInUserId) => {
    const userDataSaved = getUserDataById(loggedInUserId);
    if (userDataSaved) {
      setUserData(userDataSaved);
      setIsLoading(false);
    } else {
      if (loggedInUserId === defaultUser.id) {
        fetchDefaultUserData(setUserData, setIsLoading);
      }
    }
  };

  const logIn = (email, password) => {
    const allUsersLogins = getAllUsersLoginData();

    const loggedInUser = allUsersLogins.find(
      (user) => user.email === email && user.password === password
    );

    if (loggedInUser) {
      const loggedInUserId = loggedInUser.id;
      saveLoggedInUserId(loggedInUserId);
      setIsLoggedIn(true);
      getUserData(loggedInUserId);
      return true;
    }

    return false;
  };

  const logOut = () => {
    removeLoggedInUserId();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const loggedInUserId = getLoggedInUserId();
    const isLoggedIn = !!loggedInUserId;

    if (isLoggedIn) {
      setIsLoggedIn(true);
      getUserData(loggedInUserId);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <UserDataContext.Provider
      value={{ userData, isLoading, isLoggedIn, logIn, logOut }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

UserDataContextProvider.propTypes = {
  children: PropTypes.node,
};
