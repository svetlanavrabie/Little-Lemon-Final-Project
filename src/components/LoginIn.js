import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginIn.css";

const LoginIn = (props) => {
  const [username, setUsername] = useState("");
  const [userlastname, setUserLastname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !userlastname || !password) {
      setError("Please enter username, lastname and password!");
      return;
    }

    // Here you can add your login logic, e.g., calling an API
    console.log("Username:", username);
    console.log("UserLastname:", userlastname);
    console.log("Password:", password);

    // Simulate successful login
    localStorage.setItem("username", username);
    localStorage.setItem("userlastname", userlastname);
    navigate("/succesfullylogged");

    // Clear form
    setUsername("");
    setPassword("");
    setUserLastname("");
    setError("");
  };

  return (
    <div className="test">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userlastname">User Lastname:</label>
            <input
              type="text"
              id="userlastname"
              value={userlastname}
              onChange={(e) => setUserLastname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginIn;
