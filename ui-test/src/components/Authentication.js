// src/components/AuthenticationComponent.js
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

const AuthenticationComponent = ({ onLogin, onError }) => {
  useEffect(() => {
    window.handleCredentialResponse = async (response) => {
      try {
        const decodedToken = jwtDecode(response.credential);
        onLogin(decodedToken, response.credential);
      } catch (error) {
        onError("Login failed. Please try again.");
      }
    };
  }, [onLogin, onError]);

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id="368747471698-m570pnvdpes6cncrupq9r2vvjp20951m.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleCredentialResponse"
        data-auto_prompt="false"
      />
      <div className="g_id_signin" data-type="standard"></div>
    </div>
  );
};

export default AuthenticationComponent;
