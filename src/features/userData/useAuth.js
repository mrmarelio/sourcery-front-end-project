import { useContext } from "react";
import { UserDataContext } from "./UserDataContextProvider";

export const useAuth = () => {
  const context = useContext(UserDataContext);

  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }

  return context;
};
