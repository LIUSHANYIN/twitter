import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";
export default function LoginPage({ history }) {
  const [values, setValues] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const loginResult = await axios.post(
        "http://localhost:3010/auth/login",
        values
      );
      console.log(loginResult);

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
            type="phone"
            value={values.phone}
            onChange={handleInputChange}
          />
          <input
            className="input"
            name="password"
            placeholder="Enter your password here"
            type="password"
            value={values.password}
            onChange={handleInputChange}
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
