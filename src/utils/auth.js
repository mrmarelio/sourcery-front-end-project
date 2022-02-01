import { defaultUser } from "defaultUser";

const getLoginsArray = () => JSON.parse(localStorage.getItem("userLoginData"));
const getUsersDataArray = () => JSON.parse(localStorage.getItem("userData"));

export const getAllUsersLoginData = () => {
  const parsedLogins = getLoginsArray();
  return [defaultUser, ...(parsedLogins || [])];
};

export const saveUserLoginData = (obj) => {
  const parsedLogins = getLoginsArray();
  localStorage.setItem(
    "userLoginData",
    JSON.stringify([obj, ...(parsedLogins || [])])
  );
};

export const saveUserData = (obj) => {
  const parsedUserData = getUsersDataArray();
  localStorage.setItem(
    "userData",
    JSON.stringify([obj, ...(parsedUserData || [])])
  );
};

export const getUserDataById = (id) => {
  const parsedUserData = getUsersDataArray();
  return parsedUserData?.find((userData) => userData.id === id);
};

export const saveLoggedInUserId = (id) => {
  localStorage.setItem("loggedInUserId", id);
};

export const getLoggedInUserId = () => localStorage.getItem("loggedInUserId");

export const removeLoggedInUserId = () =>
  localStorage.removeItem("loggedInUserId");

export const fetchDefaultUserData = async (setState, setIsLoading) => {
  const response = await fetch(
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/userData.json"
  );
  const { userData } = await response.json();
  const [userDataObject] = userData;
  setState(userDataObject);
  setIsLoading(false);
};
