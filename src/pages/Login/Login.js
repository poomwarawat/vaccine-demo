import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Label, Input } from "reactstrap";
import Loader from "../../components/Loader/Loader";

import "./Login.css";

export default function Login({ history }) {
  const [user, setUser] = useState({ username: null, password: null });
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = () => {
    setLoader(true);
    setTimeout(() => {
      if (user.username === "demo" && user.password === "demo") {
        setLoader(false);
        history.push("/menu");
      }
    }, 3000);
  };

  return (
    <div className="login-page">
      {loader && <Loader />}
      <div className="login-page-control">
        <img src={Logo} alt="medicare-logo" />
        <h1>Medicare</h1>
        <div className="text-left">
          <Label for="username" className="login-label">
            Username
          </Label>
          <Input
            id="username"
            className="login-input"
            placeholder="Enter your username"
            type="text"
            onChange={handleChange}
          />
          <Label for="password" className="login-label">
            password
          </Label>
          <Input
            id="password"
            className="login-input"
            placeholder="Enter your password"
            type="password"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="login-btn box-shadow mt-3">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}
