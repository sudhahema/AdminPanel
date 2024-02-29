import React, { useState } from "react";
// import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://65a8d210219bfa371867b1d0.mockapi.io/api/fakeapi")
      .then((response) => {
        console.log(response.data);
        const loginData = response.data.find((user) => user.email === email);
        if (loginData) {
          console.log("logged in");
          navigate("/admin");
        } else {
          console.log("User not found");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
  return (
    <React.Fragment>
      <div className="bodycontainer">
        <div className="container">
          <div className="login-box">
            <h2>Login</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
              </div>
              <div className="forgot-pass">
                <a href="#">Forgot your password?</a>
              </div>
              <button type="submit" className="btnlogin">
                Login
              </button>
              <div className="signup-link">
                <Link to="/">Register here</Link>
              </div>
            </form>
          </div>
          {[...Array(50)].map((_, i) => (
            <span key={i} style={{ "--i": i }}></span>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
