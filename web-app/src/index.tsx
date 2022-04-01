import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;

if (!(domain && clientId)) {
  throw new Error("Bad Auth0 configuration");
}

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={"http://localhost:3000"}
        audience={"http://localhost:5000"}
      >
        <App />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
