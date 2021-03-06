import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    // clientSecret={process.env.CLIENT_SECRET}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
  
  >
    {console.log('byeyeye', process.env.REACT_APP_DOMAIN)}
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// domain={process.env.REACT_APP_DOMAIN}
// clientId={process.env.REACT_APP_CLIENT_ID}