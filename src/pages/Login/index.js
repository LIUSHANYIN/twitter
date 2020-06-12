import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";
export default function LoginPage({ history }) {
  const [values, setValues] = useState({});
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const handlePhoneInputChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setValues({ ...values, phone: value });
  };
  const handlePassInputChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setValues({ ...values, password: value });
  };

  const handleLogin = async () => {
    try {
      const loginResult = await axios.post(
        "https://twitter-service-sy.herokuapp.com/auth/login",
        values
      );

      if (loginResult.data.success) {
        window.localStorage.setItem("token", loginResult.data.data.token);
        window.localStorage.setItem("userId", loginResult.data.data.userId);

        history.push("/");
      } else {
        alert(loginResult.data.data);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="login">
      <h2>Shanyin Social</h2>
      <div className="page login-page">
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          <h2>Sign In</h2>
          <input
            className="input"
            name="phone"
            placeholder="Enter your phone here"
            type="tel"
            value={phone}
            onChange={handlePhoneInputChange}
          />
          <input
            className="input"
            name="password"
            placeholder="Enter your password here"
            type="password"
            value={password}
            onChange={handlePassInputChange}
          />
          <div>
            <input type="checkbox" />
            <p>Remember Password</p>
          </div>
          <button onClick={handleLogin}>Login</button>
          <Link to={"/register"}>
            <p>Don't have an account? Register for one now</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
