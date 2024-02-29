import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`https://65a8d210219bfa371867b1d0.mockapi.io/api/fakeapi`, {
        name,
        email,
        password,
      })
      .then(() => {
        navigate("/login");
      });
  };
  return (
    <React.Fragment>
      <div className="bodycontainer">
        <div className="container">
          <div className="login-box">
            <h2>Register</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Name</label>
              </div>
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
              <button type="submit" className="btnlogin">
                Register
              </button>
              <div className="signup-link">
                <Link to="/login">Login</Link>
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

export default Register;
