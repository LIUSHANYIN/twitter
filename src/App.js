import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import axios from "axios";
import "./styles/global.scss";
import UserContext from "./context/index";

function App() {
  const [user, setUser] = useState({});
  const token = window.localStorage.getItem("token");
  const userId = window.localStorage.getItem("userId");

  useEffect(() => {
    const fetchUser = async () => {
      const data = await axios.get(
        "https://twitter-service-sy.herokuapp.com/users/one",
        {
          params: { userId },

          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      setUser({ ...data.data.data });
    };
    if (token) {
      fetchUser();
    }
  }, [token, userId]);
  return (
    <Router>
      <UserContext.Provider value={{ user }}>
        <div className="App">
          <Routes />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
