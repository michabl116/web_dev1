import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import PropTypes from "prop-types"; 
const LoginComponent = ({ setIsAuthenticated, isSignup = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const endpoint = isSignup ? "/api/user/signup" : "/api/user/login";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message || "Unknown error");
        return;
      }

      const user = await response.json();
      sessionStorage.setItem("user", JSON.stringify(user)); // Cambiado a sessionStorage
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>{isSignup ? "Sign Up" : "Log In"}</button>
    </div>
  );
};

export default LoginComponent;
