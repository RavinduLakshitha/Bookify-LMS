import React, { useState } from "react";
import axios from "axios";
import "./LoginPopup.css";

interface LoginPopupProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose, onLoginSuccess }) => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post("https://localhost:7086/api/Auth/login", {
        email,
        password,
      });

      // Save the JWT token to localStorage
      localStorage.setItem("token", response.data.token);

      // Notify parent component about successful login
      onLoginSuccess();
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        setError("Invalid credentials. Please try again."); // Show invalid credentials message
      } else {
        setError("Something went wrong. Please try again later."); // Show general error
      }
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
