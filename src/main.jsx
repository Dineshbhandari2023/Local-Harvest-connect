import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider
      clientId="134142764194-4lkgsi8u61ilcim1d5p6lgc58ftu60aa.apps.googleusercontent.com"
      redirectUri="http://localhost:3000/auth/google/callback"
    >
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
