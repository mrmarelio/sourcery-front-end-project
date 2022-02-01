import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserDataContextProvider } from "features/userData";

import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <UserDataContextProvider>
      <App />
    </UserDataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
