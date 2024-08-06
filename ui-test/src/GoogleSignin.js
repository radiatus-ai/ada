// src/GoogleSignin.js
import { context, trace } from "@opentelemetry/api";
import React, { useEffect, useState } from "react";
import AuthenticationComponent from "./components/Authentication";
import CredentialsComponent from "./components/Credentials";
import ProjectsComponent from "./components/Projects";
import UserInfoComponent from "./components/UserInfo";
import { useAuth } from "./context/Auth";
import useApi from "./hooks/useAPI";

const API_URL = "http://localhost:8000";
// const API_URL = "https://platform-api-toyurvn2oq-wl.a.run.app";
const tracer = trace.getTracer("my-react-app");

const GoogleSignIn = () => {
  const { user, login, logout } = useAuth();
  const { apiCall, error } = useApi(API_URL);
  const [meData, setMeData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [token, setToken] = useState(null);
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      handleStoredToken(storedToken);
    }
  }, []);

  const handleStoredToken = async (token) => {
    try {
      setToken(token);
      const userData = await fetchUserData(token);
      login(userData, token);
      await fetchProjectsData(token);
    } catch (error) {
      console.error("Error with stored token:", error);
      logout();
    }
  };

  const fetchUserData = async (token) => {
    const data = await apiCall("get", "/me", null, token);
    setMeData(data);
    return data;
  };

  const fetchProjectsData = async (token) => {
    const span = tracer.startSpan("fetchProjectsData");
    context.with(trace.setSpan(context.active(), span), async () => {
      try {
        const data = await apiCall(
          "get",
          "/ada/v1/projects",
          null,
          token,
          span,
        );
        setProjects(data);
        // Process data...
      } catch (error) {
        span.recordException(error);
      } finally {
        span.end();
      }
    });

    // const data = await apiCall("get", "/ada/v1/projects", null, token);
    // setProjects(data);
  };

  const fetchCredentials = async () => {
    const span = tracer.startSpan("fetchCredentials");
    context.with(trace.setSpan(context.active(), span), async () => {
      try {
        const data = await apiCall("get", "/ada/v1/credentials/", null, token);
        setCredentials(data);
      } catch (error) {
        span.recordException(error);
      } finally {
        span.end();
      }
    });
  };

  const createCredential = async (name, type, data) => {
    const newCredential = await apiCall(
      "post",
      "/ada/v1/credentials/",
      {
        name,
        credential_type: type,
        data: JSON.parse(data),
      },
      token,
    );
    setCredentials([...credentials, newCredential]);
  };

  const handleLogin = async (decodedToken, credential) => {
    const response = await apiCall(
      "post",
      "/auth/login",
      // { token: credential, organization_id: 1 },
      { token: credential },
      credential,
    );
    const { token } = response;
    setToken(token);
    const userData = await fetchUserData(token);
    login(userData, token);
    await fetchProjectsData(token);
  };

  if (user) {
    return (
      <div>
        <UserInfoComponent user={user} meData={meData} />
        <ProjectsComponent projects={projects} />
        <CredentialsComponent
          credentials={credentials}
          onCreateCredential={createCredential}
          onFetchCredentials={fetchCredentials}
        />
        <button onClick={logout}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <AuthenticationComponent onLogin={handleLogin} onError={console.error} />
    </div>
  );
};

export default GoogleSignIn;
